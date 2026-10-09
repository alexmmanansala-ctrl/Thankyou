# Jared Fenn Team: Post-Inspection Resources Page

This is the page clients and agents open from the text you send after every inspection.
It will replace the Constant Contact page at **thankyou.jaredfennteam.com**.

Everything lives in one file, **`index.html`**. Logos and images go in the **`images/`** folder.

- To put the page online, see **[HOSTING.md](HOSTING.md)**.
- Brand colors, logo, link-preview image, and all links are set. No placeholders remain.

---

## Links

| Button / link | Goes to |
|---|---|
| All 8 "Book" buttons | https://jaredfennteam.pillartopost.com/fbo-booking/ |
| PTPConnects "Call 833-242-9846" | Dials 833-242-9846 |
| Upcoming CE classes | https://www.jotform.com/form/253055902294457 |
| Leave a Google review | https://g.page/r/CSsFhEzRfLVyEAI/review |
| Facebook | https://www.facebook.com/jaredfennteam |
| Instagram | https://www.instagram.com/jaredfenn.ptp |
| PTPHomePage intro video | https://vimeo.com/1052152309 |
| PTPHomePage step-by-step guide | `files/PTPHomePage-Step-by-Step-Guide.pdf` (stored with the page; to update it, upload a new PDF with the same name to the `files` folder) |

To change one later, search `index.html` for part of the old link (for example
`fbo-booking` or `jotform`) and edit it there.

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

Both images are already in the `images/` folder. See [`images/README.md`](images/README.md)
for details and how to swap them.

- **`images/logo.png`**: your "Pillar To Post Home Inspectors / The Jared Fenn Team" logo,
  trimmed and with a transparent background, shown at the top of the page.
- **`images/og-image.png`**: the 1200 × 630 picture that shows in the text bubble when you
  send the link (your logo on white with a green stripe). The page points to it by its full
  address, `https://thankyou.jaredfennteam.com/images/og-image.png`, so the preview starts
  working once the page is live at that address.

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

- [ ] Search `index.html` for `[`. No placeholders in square brackets should be left.
- [ ] Open the page on your phone and tap every button: Book, Call, Text, the video, and the guide.
- [ ] Make sure the PTPHomePage video plays on the page. If Vimeo's privacy settings block
      embedding, the "Watch it on Vimeo" link under it still works. To allow embedding, go to
      the video's settings on Vimeo, open **Privacy → Where can this be embedded?**, and choose
      **Anywhere**.
- [ ] Text the link to yourself and check the preview (title, description, image).
- [ ] Open `https://thankyou.jaredfennteam.com/#agents` and confirm it jumps to the agent section.

---

## What's on the page (for reference)

1. Header and personal greeting, with quick "Jump to" buttons
2. **Your report:** check email/spam, Text/Call buttons, PTPHomePage video and guide
3. **Still in your due diligence period?** Sewer scope, Radon, and Meth testing (Book + Call)
4. **More services:** Mold, Air quality, Foundation elevation survey, Infrared (tap to expand)
5. **Moving in?** PTPConnects in three steps, with a button that calls 833-242-9846
6. **For agents** (`#agents`): book add-ons, share/copy the page link, call/text Jared, CE classes
7. **Review + referral:** Google review button, plus "Share our info" for friends who are buying or selling
8. **Footer:** phone, email, website, office address, Facebook, Instagram

A few details:
- The agent "Copy link" and "Share" buttons always share the plain page link (without
  `#agents`), so clients land at the top.
- "Share our info" in the referral section shares your main website, www.jaredfennteam.com.
- On phones, a **Share** button appears next to "Copy link" that opens the phone's own share
  menu (Messages, email, etc.). On computers that can't do this, only "Copy link" shows.
- The video only loads when someone taps it, which keeps the page fast.
- Pinch-to-zoom is allowed. Main text is 18px (nothing on the page is smaller than 16px), and buttons are at least 48px tall.
