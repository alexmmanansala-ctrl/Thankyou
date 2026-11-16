(function () {
  'use strict';

  var data = window.JF_CE || { endpoint: '', classes: [] };
  var params = new URLSearchParams(window.location.search);
  // Add ?preview=1 to the address to also show classes whose date has passed.
  var showPast = params.get('preview') === '1';

  var $ = function (id) { return document.getElementById(id); };
  var form = $('jf-ce-form');
  var list = $('jf-ce-list');
  var bar = $('jf-ce-bar');

  // ---------- Dates and times (classes are in Utah, Mountain Time) ----------
  function todayInUtah() {
    try {
      return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Denver', year: 'numeric', month: '2-digit', day: '2-digit'
      }).format(new Date());
    } catch (e) {
      return new Date().toISOString().slice(0, 10);
    }
  }

  function datePart(isoDate, options) {
    var p = isoDate.split('-');
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
    options.timeZone = 'UTC';
    return new Intl.DateTimeFormat('en-US', options).format(d);
  }

  function clock(time) {
    var p = time.split(':');
    var h = +p[0];
    var suffix = h >= 12 ? 'PM' : 'AM';
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (p[1] === '00' ? '' : ':' + p[1]) + ' ' + suffix;
  }

  function timeRange(c) { return clock(c.start) + ' to ' + clock(c.end); }
  function longDate(c) { return datePart(c.date, { weekday: 'long', month: 'long', day: 'numeric' }); }
  function mapUrl(c) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(c.venue + ', ' + c.address);
  }

  // ---------- Small helpers for building the page ----------
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text != null) { node.textContent = text; }
    return node;
  }

  function icon(name) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'icon');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    var use = document.createElementNS(ns, 'use');
    use.setAttribute('href', '#' + name);
    svg.appendChild(use);
    return svg;
  }

  function dateBlock(c) {
    var block = el('div', 'jf-ce-date');
    block.setAttribute('aria-hidden', 'true');
    block.appendChild(el('span', 'jf-ce-month', datePart(c.date, { month: 'short' })));
    block.appendChild(el('span', 'jf-ce-day', datePart(c.date, { day: 'numeric' })));
    block.appendChild(el('span', 'jf-ce-weekday', datePart(c.date, { weekday: 'short' })));
    return block;
  }

  function classBody(c, withMap) {
    var body = el('div');
    var title = el('p', 'jf-ce-title', c.title);
    if (c.core) { title.appendChild(el('span', 'jf-ce-badge', 'Core')); }
    body.appendChild(title);

    var when = el('p', 'jf-ce-meta');
    when.appendChild(icon('i-clock'));
    var whenText = el('span');
    whenText.appendChild(el('span', 'jf-ce-sr', longDate(c) + ', '));
    whenText.appendChild(document.createTextNode(timeRange(c)));
    when.appendChild(whenText);
    body.appendChild(when);

    var where = el('p', 'jf-ce-meta');
    where.appendChild(icon('i-pin'));
    var whereText = el('span');
    whereText.appendChild(el('strong', null, c.venue));
    whereText.appendChild(el('br'));
    whereText.appendChild(document.createTextNode(c.address));
    where.appendChild(whereText);
    body.appendChild(where);

    if (withMap) {
      var link = el('a', 'jf-ce-map', 'Get directions');
      link.href = mapUrl(c);
      link.target = '_blank';
      link.rel = 'noopener';
      body.appendChild(link);
    }
    return body;
  }

  // ---------- Class list ----------
  var today = todayInUtah();
  var upcoming = data.classes
    .filter(function (c) { return showPast || c.date >= today; })
    .sort(function (a, b) { return (a.date + a.start).localeCompare(b.date + b.start); });

  upcoming.forEach(function (c) {
    var label = el('label', 'jf-ce-class');
    var box = document.createElement('input');
    box.type = 'checkbox';
    box.name = 'classes';
    box.value = c.id;
    label.appendChild(box);

    var card = el('div', 'jf-ce-card');
    card.appendChild(dateBlock(c));
    card.appendChild(classBody(c, false));
    var tick = el('span', 'jf-ce-tick');
    tick.setAttribute('aria-hidden', 'true');
    tick.appendChild(icon('i-check'));
    card.appendChild(tick);
    label.appendChild(card);
    list.appendChild(label);
  });

  if (!upcoming.length) {
    $('jf-ce-empty').hidden = false;
    $('jf-ce-pick-hint').hidden = true;
    $('details').hidden = true;
  }
  if (!data.endpoint) { $('jf-ce-preview').hidden = false; }

  function selected() {
    var ids = Array.prototype.map.call(
      form.querySelectorAll('input[name="classes"]:checked'),
      function (box) { return box.value; }
    );
    return upcoming.filter(function (c) { return ids.indexOf(c.id) !== -1; });
  }

  // ---------- Selection summary and the bar that follows the screen ----------
  var detailsInView = false;

  function refresh() {
    var picks = selected();
    var summary = $('jf-ce-summary');
    summary.textContent = '';
    if (picks.length) {
      summary.appendChild(el('p', null, picks.length === 1 ? 'You\u2019re registering for:' : 'You\u2019re registering for ' + picks.length + ' classes:'));
      var ul = el('ul');
      picks.forEach(function (c) {
        ul.appendChild(el('li', null, datePart(c.date, { month: 'short', day: 'numeric' }) + ', ' + clock(c.start) + ': ' + c.title));
      });
      summary.appendChild(ul);
      $('err-classes').hidden = true;
    }
    $('jf-ce-bar-count').textContent = picks.length === 1 ? '1 class selected' : picks.length + ' classes selected';
    bar.hidden = !picks.length || detailsInView || $('jf-ce-register').hidden;
  }

  list.addEventListener('change', refresh);

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      detailsInView = entries[0].isIntersecting;
      refresh();
    }, { threshold: 0.15 }).observe($('details'));
  }

  $('jf-ce-bar-go').addEventListener('click', function (event) {
    event.preventDefault();
    $('details').scrollIntoView();
    $('first').focus({ preventScroll: true });
  });

  // ---------- Phone formatting: (801) 555-0123 as you type ----------
  var phone = $('phone');
  function digitsOf(value) {
    var d = value.replace(/\D/g, '');
    if (d.length === 11 && d.charAt(0) === '1') { d = d.slice(1); }
    return d.slice(0, 10);
  }
  phone.addEventListener('input', function () {
    var d = digitsOf(phone.value);
    var out = d;
    if (d.length > 6) { out = '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6); }
    else if (d.length > 3) { out = '(' + d.slice(0, 3) + ') ' + d.slice(3); }
    phone.value = out;
  });

  // ---------- Checking the form ----------
  var checks = [
    { id: 'first', ok: function (v) { return v.trim().length > 0; } },
    { id: 'last', ok: function (v) { return v.trim().length > 0; } },
    { id: 'email', ok: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); } },
    { id: 'phone', ok: function (v) { return digitsOf(v).length === 10; } }
  ];

  function checkField(check) {
    var input = $(check.id);
    var good = check.ok(input.value);
    input.setAttribute('aria-invalid', good ? 'false' : 'true');
    $('err-' + check.id).hidden = good;
    return good;
  }

  checks.forEach(function (check) {
    var input = $(check.id);
    input.addEventListener('blur', function () {
      if (input.value || input.getAttribute('aria-invalid') === 'true') { checkField(check); }
    });
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true') { checkField(check); }
    });
  });

  // ---------- Sending ----------
  var lastPicks = [];

  function buildPayload(picks) {
    return {
      // A registration is a sign-up only. It is not attendance and not CE credit.
      status: 'registered',
      source: 'ce-class-registration-page',
      submitted_at: new Date().toISOString(),
      contact: {
        first_name: $('first').value.trim(),
        last_name: $('last').value.trim(),
        email: $('email').value.trim().toLowerCase(),
        phone: '+1' + digitsOf(phone.value),
        brokerage: $('brokerage').value.trim(),
        license: $('license').value.trim()
      },
      classes: picks.map(function (c) {
        return {
          id: c.id, title: c.title, core: !!c.core,
          date: c.date, start: c.start, end: c.end, timezone: 'America/Denver',
          venue: c.venue, address: c.address
        };
      })
    };
  }

  function showDone(picks) {
    lastPicks = picks;
    var name = $('first').value.trim();
    $('jf-ce-done-lead').textContent = 'Thanks, ' + name + '. We\u2019ll see you at ' +
      (picks.length === 1 ? 'this class:' : 'these classes:');
    var doneList = $('jf-ce-done-list');
    doneList.textContent = '';
    picks.forEach(function (c) {
      var li = el('li');
      var card = el('div', 'jf-ce-card');
      card.appendChild(dateBlock(c));
      card.appendChild(classBody(c, true));
      li.appendChild(card);
      doneList.appendChild(li);
    });
    $('jf-ce-register').hidden = true;
    bar.hidden = true;
    var done = $('jf-ce-done');
    done.hidden = false;
    window.scrollTo(0, 0);
    done.focus({ preventScroll: true });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var submitError = $('err-submit');
    submitError.hidden = true;

    var picks = selected();
    var firstBad = null;
    if (!picks.length) {
      $('err-classes').hidden = false;
      firstBad = form.querySelector('input[name="classes"]');
    }
    checks.forEach(function (check) {
      if (!checkField(check) && !firstBad) { firstBad = $(check.id); }
    });
    if (firstBad) {
      if (firstBad.name === 'classes') { $('classes').scrollIntoView(); }
      firstBad.focus();
      return;
    }

    // Spam trap: real visitors never fill this in.
    if ($('company-site').value) { showDone(picks); return; }

    // Not connected yet: show the confirmation screen without sending anything.
    if (!data.endpoint) { showDone(picks); return; }

    var button = $('jf-ce-submit');
    button.disabled = true;
    button.textContent = 'Saving your seat\u2026';

    fetch(data.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(buildPayload(picks))
    }).then(function (response) {
      if (!response.ok) { throw new Error('HTTP ' + response.status); }
      showDone(picks);
    }).catch(function () {
      submitError.textContent = 'Something went wrong and your registration was not sent. Please try again, or call or text 801-318-9909.';
      submitError.hidden = false;
    }).then(function () {
      button.disabled = false;
      button.textContent = 'Save my seat';
    });
  });

  // ---------- Add to calendar (.ics file) ----------
  function icsEscape(text) {
    return String(text).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
  }
  function icsTime(c, time) { return c.date.replace(/-/g, '') + 'T' + time.replace(':', '') + '00'; }

  $('jf-ce-ics').addEventListener('click', function () {
    var stamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
    var lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Jared Fenn Team//CE Classes//EN', 'CALSCALE:GREGORIAN',
      'BEGIN:VTIMEZONE', 'TZID:America/Denver',
      'BEGIN:DAYLIGHT', 'DTSTART:19700308T020000', 'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU',
      'TZOFFSETFROM:-0700', 'TZOFFSETTO:-0600', 'TZNAME:MDT', 'END:DAYLIGHT',
      'BEGIN:STANDARD', 'DTSTART:19701101T020000', 'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU',
      'TZOFFSETFROM:-0600', 'TZOFFSETTO:-0700', 'TZNAME:MST', 'END:STANDARD',
      'END:VTIMEZONE'
    ];
    lastPicks.forEach(function (c) {
      lines.push(
        'BEGIN:VEVENT',
        'UID:' + c.id + '@classes.jaredfennteam.com',
        'DTSTAMP:' + stamp,
        'DTSTART;TZID=America/Denver:' + icsTime(c, c.start),
        'DTEND;TZID=America/Denver:' + icsTime(c, c.end),
        'SUMMARY:' + icsEscape('CE Class: ' + c.title),
        'LOCATION:' + icsEscape(c.venue + ', ' + c.address),
        'DESCRIPTION:' + icsEscape('CE class with Jared Fenn, Pillar To Post Home Inspectors. Questions? Call or text 801-318-9909.'),
        'END:VEVENT'
      );
    });
    lines.push('END:VCALENDAR');

    var blob = new Blob([lines.join('\r\n') + '\r\n'], { type: 'text/calendar;charset=utf-8' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ce-classes.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
  });

  // ---------- Register for another class ----------
  $('jf-ce-again').addEventListener('click', function () {
    Array.prototype.forEach.call(form.querySelectorAll('input[name="classes"]'), function (box) { box.checked = false; });
    $('jf-ce-done').hidden = true;
    $('jf-ce-register').hidden = false;
    refresh();
    $('classes').scrollIntoView();
  });

  refresh();
})();
