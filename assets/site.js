(function () {
  'use strict';

  var CLIENT_URL = 'https://thankyou.jaredfennteam.com/';
  var page = document.body.getAttribute('data-page') || 'client';

  // Analytics: every element with data-track="name" sends a click event.
  // Does nothing until Google Analytics is added to the page (see README).
  document.addEventListener('click', function (event) {
    var el = event.target.closest('[data-track]');
    if (!el || typeof window.gtag !== 'function') { return; }
    window.gtag('event', el.getAttribute('data-track'), { page_version: page });
  });

  // Tap-to-play video: the Vimeo player only loads when someone taps it,
  // which keeps the page fast on phones.
  document.querySelectorAll('[data-vimeo-id]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var frame = document.createElement('iframe');
      frame.src = 'https://player.vimeo.com/video/' + link.getAttribute('data-vimeo-id') + '?autoplay=1&dnt=1';
      frame.title = link.getAttribute('data-title') || 'Video';
      frame.allow = 'autoplay; fullscreen; picture-in-picture';
      frame.setAttribute('allowfullscreen', '');
      link.parentNode.replaceChild(frame, link);
    });
  });

  // Share and copy buttons.
  var targets = {
    client: {
      title: 'Your Inspection Resources – Jared Fenn Team',
      text: 'Your report, next steps, and helpful services after your home inspection.',
      url: CLIENT_URL,
      copied: 'Link copied! Paste it into a text or email to your client.'
    },
    team: {
      title: 'Jared Fenn Team',
      text: 'Jared Fenn Team, Pillar To Post home inspectors in Utah. Call or text 801-318-9909.',
      url: 'https://jaredfennteam.pillartopost.com/',
      copied: 'Copied! Paste it into a text or email to share.'
    }
  };

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var field = document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.top = '0';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      field.setSelectionRange(0, text.length);
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(field);
      if (ok) { resolve(); } else { reject(); }
    });
  }

  function showStatus(button, message) {
    var status = document.getElementById(button.getAttribute('data-status'));
    if (!status) { return; }
    status.textContent = message;
    clearTimeout(status._timer);
    status._timer = setTimeout(function () { status.textContent = ''; }, 6000);
  }

  function copyFor(button, target, text) {
    copyText(text).then(function () {
      showStatus(button, target.copied);
    }, function () {
      showStatus(button, 'Couldn’t copy automatically. The link is ' + target.url);
    });
  }

  var canShare = typeof navigator.share === 'function';

  document.querySelectorAll('[data-action]').forEach(function (button) {
    var target = targets[button.getAttribute('data-target')];
    if (!target) { return; }

    if (button.hasAttribute('data-share-only')) {
      button.hidden = !canShare;
    }

    button.addEventListener('click', function () {
      if (button.getAttribute('data-action') === 'copy') {
        copyFor(button, target, target.url);
        return;
      }
      if (canShare) {
        navigator.share({ title: target.title, text: target.text, url: target.url })
          .catch(function (error) {
            if (error && error.name === 'AbortError') { return; }
            copyFor(button, target, target.text + ' ' + target.url);
          });
      } else {
        copyFor(button, target, target.text + ' ' + target.url);
      }
    });
  });
})();
