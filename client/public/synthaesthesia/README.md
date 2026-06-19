# Synesthesia Synth public assets

Drop the following files into this directory. The pages
`/synthaesthesia` and `/synthaesthesia/press` reference them by these exact
paths.

| File                | Required size / format               | Used on                             |
| ------------------- | ------------------------------------ | ----------------------------------- |
| Hero video          | YouTube embed (`mOxA9Yt_TD0`) — configured in `client/src/lib/synthaesthesiaMedia.ts` | Landing hero, press hero            |
| Demo videos         | YouTube embeds (`IsoLXUgIwvI`, `mD54jssnzZk`) — configured in `synthaesthesiaMedia.ts` | Landing "See it in action" section |
| `fingerSS.jpeg`     | Gestures / controls                  | Screenshot 1                        |
| `menuSS.jpeg`       | Main menu / scenes                   | Screenshot 2                        |
| `patternSS.jpeg`    | Pattern generator                    | Screenshot 3                        |
| `roomSS.jpeg`       | Spatial mixer                        | Screenshot 4                        |
| `og-image.jpg`      | 1200×630 JPG/PNG                      | OpenGraph / Twitter card            |
| `logo.png`          | Square PNG (1024×1024 recommended)    | Reserved for future use, press kit  |
| `PRESS_ONE_PAGER.md`| Same text as `client/src/content/PRESS_ONE_PAGER.md`; edit the repo copy on GitHub (`Synthaesthesia` repo, `ios-build/press/`) then mirror here if needed | Web: `/synthaesthesia/press/one-pager`; raw download from this folder |
| `press-kit.zip`     | Optional bundle (logos, shots, etc.)  | Press page — link 404s until added    |
| `one-pager.pdf`     | Optional static PDF                 | Optional; users can Print→PDF from one-pager page |

If a file is missing, the corresponding `<img>` / download link on the page
will simply 404 — the rest of the page still renders.

To change the hero trailer, update `SYNTHAESTHESIA_HERO_YOUTUBE_ID` in
`synthaesthesiaMedia.ts`.
