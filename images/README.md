# Images folder

| File | Used for | Size |
|---|---|---|
| `logo.png` | Top of the page | 720 × 270 px, transparent background (shown about 240px wide) |
| `og-image.png` | The picture in the text-message bubble when you send the link | 1200 × 630 px |

Both were made from the "Pillar To Post Home Inspectors / The Jared Fenn Team" logo.
The logo's background is transparent, but the logo is navy, so it only shows up on
light backgrounds.

## Swapping an image

The easiest way is to upload a new file **with the same name** (on github.com: open this
folder, then **Add file → Upload files**). It replaces the old one, and nothing in
`index.html` needs to change.

- **Logo:** use a PNG or SVG with a transparent background, at least 200px tall.
- **Link preview:** use exactly **1200 × 630 px**, under 1 MB. Keep the important part
  (logo or faces) in the center, because some apps crop the edges. A team photo works well
  here too. If you use a JPG instead of a PNG, also update the two `og-image.png` mentions
  near the top of `index.html` (`og:image` and `twitter:image`).

Phones remember link previews, so after changing the preview image, test with
`https://thankyou.jaredfennteam.com/?v=3` (any new number) to see the fresh version.
