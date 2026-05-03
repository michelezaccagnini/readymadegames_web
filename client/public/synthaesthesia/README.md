# Synthaesthesia public assets

Drop the following files into this directory. The pages
`/synthaesthesia` and `/synthaesthesia/press` reference them by these exact
paths.

| File                | Required size / format               | Used on                             |
| ------------------- | ------------------------------------ | ----------------------------------- |
| Hero video          | YouTube embed (`nzAPqJxnfdM`) — configured in `client/src/lib/synthaesthesiaMedia.ts` | Landing hero, press hero            |
| `fingerSS.jpeg`     | Gestures / controls                  | Screenshot 1                        |
| `menuSS.jpeg`       | Main menu / scenes                   | Screenshot 2                        |
| `patternSS.jpeg`    | Pattern generator                    | Screenshot 3                        |
| `roomSS.jpeg`       | Spatial mixer                        | Screenshot 4                        |
| `og-image.jpg`      | 1200×630 JPG/PNG                      | OpenGraph / Twitter card            |
| `logo.png`          | Square PNG (1024×1024 recommended)    | Reserved for future use, press kit  |
| `press-kit.zip`     | Bundle: logos, 4 screenshots, hero video, one-pager PDF, fact sheet | Press page download |
| `one-pager.pdf`     | A4 / Letter PDF                       | Inside `press-kit.zip`              |

If a file is missing, the corresponding `<img>` / download link on the page
will simply 404 — the rest of the page still renders.

To change the hero trailer, update `SYNTHAESTHESIA_HERO_YOUTUBE_ID` in
`synthaesthesiaMedia.ts`.
