# Jared Fenn Team: Post-Inspection Resources Page

This is the page clients and agents open from the text you send after every inspection.
It will replace the Constant Contact page at **thankyou.jaredfennteam.com**.

Everything lives in one file, **`index.html`**. Logos and images go in the **`images/`** folder.

- To put the page online, see **[HOSTING.md](HOSTING.md)**.
- Before it goes live, fill in the placeholders below.

---

## Placeholders to fill in

Every placeholder is written in square brackets, like `[BOOKING_URL]`. Search `index.html`
for the name and replace the whole thing, brackets included, with your real value.

| Placeholder | What to put there | How many | Example of the format |
|---|---|---|---|
| `[BOOKING_URL]` | Your online booking/scheduling link | 8 (all "Book" buttons) | `https://...` |
| `[HOMEPAGE_GUIDE_URL]` | The PTPHomePage step-by-step guide | 1 | `https://...` |
| `[PTPCONNECTS_URL]` | Your PTPConnects link | 1 | `https://...` |
| `[CE_CLASSES_URL]` | Page listing your upcoming CE classes for agents | 1 | `https://...` |
| `[GOOGLE_REVIEW_URL]` | Your Google "write a review" link | 1 | `https://g.page/r/...` |
| `[FACEBOOK_URL]` | Your Facebook page | 1 | `https://www.facebook.com/...` |
| `[INSTAGRAM_URL]` | Your Instagram profile | 1 | `https://www.instagram.com/...` |
| `[LOGO_FILE]` | Path to your logo file (inside `src="..."`) | 1 (plus a mention in a comment) | `images/logo.png` |
| `[OG_IMAGE_URL]` | **Full web address** of the image shown in text-message link previews | 2 (`og:image` and `twitter:image`) | `https://thankyou.jaredfennteam.com/images/preview.jpg` |
| `[BRAND_PRIMARY]` | Main brand color (see "Brand colors" below) | 1 | `#RRGGBB` |
| `[BRAND_ACCENT]` | Accent brand color | 1 | `#RRGGBB` |

**About `[BOOKING_URL]`:** all 8 "Book" buttons use the same placeholder. If you have one
booking link for everything, replace all 8 at once. If you have a separate link for each
service, replace them one at a time. Each button is right under the service it books
(Sewer scope, Radon, Meth, Mold, Air quality, Foundation survey, Infrared, and the agent section).

**About the Google review link:** in your Google Business Profile, click **Ask for reviews**
(or **Get more reviews**) and copy the link it gives you.

---

## Brand colors

Near the top of `index.html` you'll see:

```css
--brand-primary: #2f2f2f;    /* [BRAND_PRIMARY] ... */
--brand-accent: #9a9a9a;     /* [BRAND_ACCENT] ... */
```

The grays are **temporary placeholders, not brand colors**. Replace only the color code
(the part that starts with `#`) with your brand's code. You can leave the comment as it is.

- **Primary** is used for buttons, links, the numbered steps, and the footer, always with
  **white text on top**. It needs to be a fairly dark color so the white text stays readable.
  Paste your color into a free contrast checker (search "WebAIM contrast checker") with white
  (`#FFFFFF`) and make sure it says at least **4.5:1**. If it doesn't, use a darker shade
  of your brand color.
- **Accent** is only used for decorative stripes (the bar at the very top and the bars next to
  section headings), so any brand color works there.

---

## Images

Put image files in the `images/` folder. See [`images/README.md`](images/README.md) for sizes.

- **Logo:** upload it as, for example, `images/logo.png`, then set `src="images/logo.png"` where
  `[LOGO_FILE]` was. It appears at the top next to "Jared Fenn Team". If the logo file is
  missing, the page just shows the team name. It won't show a broken image.
- **Link-preview image:** this is what shows up in the text bubble when you send the link.
  Upload it (for example `images/preview.jpg`) and set **both** `[OG_IMAGE_URL]` spots to the
  **full** address: `https://thankyou.jaredfennteam.com/images/preview.jpg`. A short path like
  `images/preview.jpg` will **not** work for previews.

---

## Easiest way to fill everything in

**Option A: send them to Claude.** Gather the links, colors, and images, and ask Claude to
fill them in and push the update.

**Option B: do it yourself on GitHub (no software needed).**
1. Open the repository on github.com and press the **`.`** (period) key. A full editor opens
   in your browser.
2. Click `index.html` in the file list on the left.
3. Press **Ctrl+H** (Windows) or **Cmd+Option+F** (Mac) to open Find & Replace.
4. Type a placeholder in the first box (for example `[BOOKING_URL]`) and your real link in the
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
5. **Moving in?** PTPConnects in three steps
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
