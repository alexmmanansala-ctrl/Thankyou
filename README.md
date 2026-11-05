# Jared Fenn Team: Post-Inspection Resources Page

There are two versions, each sent as a text-message link after every inspection.
They replace the Constant Contact page at **thankyou.jaredfennteam.com**.

| Version | Preview link | File |
|---|---|---|
| Current page (unchanged) | `https://alexmmanansala-ctrl.github.io/Thankyou/` | `index.html` |
| **New client version (for review)** | `https://alexmmanansala-ctrl.github.io/Thankyou/client/` | `client/index.html` |
| **New agent version (for review)** | `https://alexmmanansala-ctrl.github.io/Thankyou/agents/` | `agents/index.html` |

The new versions are drafts for Jared to review; the current page has not been changed or
replaced. Once approved, the new client version can take the place of `index.html`.

Both pages share one stylesheet and script in **`assets/`**. Images are in **`images/`**,
the PTPHomePage guide is in **`files/`**, and **`jared-fenn-team.vcf`** is the
"Save our contact" card.

### Text templates

**Client:**
> Thank you for trusting us with your home inspection! Here's everything you need in one place, plus how to reach us anytime: https://thankyou.jaredfennteam.com/

**Agent:**
> Thank you for the referral! Here's a quick page to help take care of your client: https://thankyou.jaredfennteam.com/agents/

- To put the page online, see **[HOSTING.md](HOSTING.md)**.
- Brand colors, logo, link-preview image, and all links are set. No placeholders remain.

---

## Links

| Button / link | Goes to |
|---|---|
| All "Book" buttons (both pages) | https://jaredfennteam.pillartopost.com/fbo-booking/ (plus tracking tags) |
| "Visit our website" and footer website link | https://jaredfennteam.pillartopost.com/ (plus tracking tags) |
| "Save our contact" | `jared-fenn-team.vcf` (office line, email, website, address, Jared's photo) |
| PTPConnects "Call 833-242-9846" | Dials 833-242-9846 |
| All phone numbers on the page | Company line, 801-318-9909 |
| Upcoming CE classes | https://www.jotform.com/form/253055902294457 |
| Leave a Google review | https://g.page/r/CSsFhEzRfLVyEAI/review |
| Facebook | https://www.facebook.com/jaredfennteam |
| Instagram | https://www.instagram.com/jaredfenn.ptp |
| PTPHomePage intro video | https://vimeo.com/1052152309 |
| PTPHomePage step-by-step guide | `files/PTPHomePage-Step-by-Step-Guide.pdf` (stored with the page; to update it, upload a new PDF with the same name to the `files` folder) |

To change one later, search `index.html` and `agents/index.html` for part of the old link
(for example `fbo-booking` or `jotform`) and edit it there.

---

## Brand colors (already set)

These were sampled directly from your Pillar To Post / Jared Fenn Team logo and website, and
they live near the top of `index.html`:

| Setting | Color | Where it's used |
|---|---|---|
| `--brand-primary` | `#013a81` navy (logo) | Headings, links, outlined buttons, numbered steps, footer |
| `--brand-accent` | `#7ac143` green (logo) | Thin stripe at the top and the bars beside section headings |
| `--brand-cta` | `#4aa640` green (website's "Book Online Now" button) | Main action buttons (Book, Text us, Share, etc.) with dark text, like the website |

All text/background pairs pass the WCAG AA contrast standard (white on navy is about 11:1,
and dark text on the green buttons is about 6:1). If you ever change a color, change only
the code that starts with `#`, and run it through a contrast checker (search "WebAIM
contrast checker"). Normal-size text needs at least **4.5:1**.

---

## Images

All images are in the `images/` folder. See [`images/README.md`](images/README.md) for the
full list and how to swap them.

- **`images/logo.png`**: your "Pillar To Post Home Inspectors / The Jared Fenn Team" logo,
  shown at the top of the page.
- **Photos**: Jared's headshot in the greeting, plus the sewer scope, radon, meth testing,
  and truck photos. All are 1200px wide, sharpened, and lightly color-graded to match.
- **`images/og-image.jpg`**: the 1200 × 630 picture that shows in the text bubble when you
  send the link (Jared by the truck). The page points to it by its full address,
  `https://thankyou.jaredfennteam.com/images/og-image.jpg`, so the preview starts working
  once the page is live at that address.

---

## Easiest way to fill everything in

**Option A: send them to Claude.** Gather the links and ask Claude to
fill them in and push the update.

**Option B: do it yourself on GitHub (no software needed).**
1. Open the repository on github.com and press the **`.`** (period) key. A full editor opens
   in your browser.
2. Click `index.html` in the file list on the left.
3. Press **Ctrl+H** (Windows) or **Cmd+Option+F** (Mac) to open Find & Replace.
4. Type the old text or link in the first box and the new one in the
   second box. Then click **Replace All**, or replace one at a time.
5. When you're done, click the **Source Control** icon on the far left (it looks like a branch).
   Type a short note like "Add real links", then click **Commit & Push**.

To upload images, go to the `images` folder on github.com and choose
**Add file → Upload files**.

---

## Final check before going live

- [ ] Open both links on your phone and tap every button.
- [ ] Tap **Save our contact** on an iPhone and an Android phone and check the contact looks right.
- [ ] Make sure the PTPHomePage video plays (it's inside "Can't find your report?"). If Vimeo's
      privacy settings block embedding, the video opens on Vimeo instead.
- [ ] Text both links to yourself and check the previews (title, description, image).

---

## Tracking with Google Analytics

Every button already has a tracking name (`data-track="..."`, for example `book_sewer`,
`save_contact`, `google_review`). Taps are sent to Google Analytics as events as soon as
Analytics is added to the pages; until then nothing is sent.

1. In Google Analytics, create a **new property** (or a new web data stream) for
   `thankyou.jaredfennteam.com`. Keep it separate from the website's, so the numbers don't mix.
2. Copy its **Measurement ID** (starts with `G-`) and its install snippet.
3. Paste the snippet where each page says `<!-- GOOGLE ANALYTICS: paste the snippet here -->`
   (once in `index.html`, once in `agents/index.html`).
4. In Analytics, **Reports → Engagement → Events** shows each button's taps. Every event carries
   `page_version` (`client` or `agent`).

Links to your website and booking page also carry `utm_source=thankyou-page` and
`utm_campaign=client` or `agent`, so your website's Analytics can show which visits and
bookings came from these pages.

---

## What's on each page (for reference)

**Client page** (about 4 phone screens)
1. Thank-you note from Jared
2. **We're here for all things home:** chat today or on the website anytime, "Visit our website",
   "Save our contact", Facebook and Instagram, then a "Bookmark this page" line
3. **Can't find your report?** (tap to open): Text/Call the office, PTPHomePage video and PDF guide
4. **Still before closing?** Sewer scope, Radon, Meth, each with a Book button
5. **For the life of your home** (tap to expand): PTPConnects, Mold, Air quality, Foundation survey, Infrared
6. **Did we take good care of you?** Google review, plus "Share us with a friend"
7. Footer: office phone, email, website, address

**Agent page** (about 3 phone screens)
1. Thank-you note from Jared
2. **Take care of your client:** book add-ons, send the client their page (Share / Copy link), CE classes
3. **What your client gets beyond the inspection:** PTPHomePage, PTP360, PTPConnects,
   Premium/Prestige extras, and ongoing chat help
4. Footer

All phone numbers go to the office line, 801-318-9909. Pinch-to-zoom is allowed, main text is
18px (nothing smaller than 16px), and buttons are at least 48px tall.
