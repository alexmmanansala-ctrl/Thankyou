# Images folder

Upload your images here (on github.com: **Add file → Upload files**).

| File | Used for | Recommended size |
|---|---|---|
| Your logo, e.g. `logo.png` | Top of the page, next to "Jared Fenn Team" | PNG or SVG with a transparent background, at least 200px tall. It's shown about 56px tall. |
| Link-preview image, e.g. `preview.jpg` | The picture in the text-message bubble when you send the link | **1200 × 630 px**, JPG, under 1 MB. Keep the important part (logo or faces) in the center, because some apps crop the edges. |

After uploading, update `index.html`:

- `[LOGO_FILE]` → `images/logo.png` (or whatever you named it)
- `[OG_IMAGE_URL]` (2 places) → `https://thankyou.jaredfennteam.com/images/preview.jpg`
  This must be the **full** address, starting with `https://`.

Tip: if you only have a square logo for the preview, place it in the middle of a
1200 × 630 background in your brand color before uploading. A team photo also works well.
