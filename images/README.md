# Images folder

| File | Used for |
|---|---|
| `logo.png` | Logo at the top of the page (720 × 270 px, transparent background) |
| `jared.jpg` | Jared's round photo in the greeting (240 × 240 px) |
| `sewer-scope.jpg` | Photo on the Sewer scope card |
| `radon-test.jpg` | Photo on the Radon testing card |
| `team-trucks.jpg` | Photo above "Did we take good care of you?" |
| `og-image.jpg` | The picture in the text-message bubble when you send the link (1200 × 630 px, Jared by the truck) |

The photos have a light color grade (a bit more contrast, warm highlights, cool
shadows, soft vignette) so they look consistent with each other.

## Swapping an image

The easiest way is to upload a new file **with the same name** (on github.com: open this
folder, then **Add file → Upload files**). It replaces the old one, and nothing in
`index.html` needs to change. Card photos are shown in a wide 16:10 frame, so keep the
subject near the middle.

- **Logo:** PNG or SVG with a transparent background, at least 200px tall.
- **Link preview (`og-image.jpg`):** exactly **1200 × 630 px**, JPG, under 1 MB. Keep faces
  in the center, because some apps crop the edges.

Phones remember link previews, so after changing the preview image, test with
`https://thankyou.jaredfennteam.com/?v=3` (any new number) to see the fresh version.
