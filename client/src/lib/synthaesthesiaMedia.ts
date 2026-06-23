/** Synesthesia Synth hero trailer: https://youtu.be/yU7Yab_JvtY */
export const SYNTHAESTHESIA_HERO_YOUTUBE_ID = "yU7Yab_JvtY";

/** Store and external links. Apple + Google Play are both live. */
export const SYNTHAESTHESIA_LINKS = {
  appStore: "https://apps.apple.com/us/app/synesthesia-synth/id6763379132",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.unirack.synthaesthesia",
  /** In-site manual page (full markdown rendered with anchors, print-friendly). */
  manual: "/synthaesthesia/manual",
  /** Direct deep-link to the Presets section of the in-site manual. */
  manualPresets: "/synthaesthesia/manual#10-presets",
  /** Canonical GitHub source — kept as the editable origin. */
  manualGithub:
    "https://github.com/michelezaccagnini/Synthaesthesia/blob/develop/USER_MANUAL.md",
  contactEmail: "info@readymade.games",
} as const;

/** Sections of the manual, mirroring USER_MANUAL.md's table of contents. */
export const SYNTHAESTHESIA_MANUAL_SECTIONS: ReadonlyArray<{
  hash: string;
  label: string;
}> = [
  { hash: "#1-introduction", label: "1. Introduction" },
  { hash: "#2-interface-at-a-glance", label: "2. Interface at a glance" },
  { hash: "#3-the-three-voices", label: "3. The three voices" },
  {
    hash: "#4-selecting-and-muting-voices",
    label: "4. Selecting and muting voices",
  },
  { hash: "#5-the-gesture-system", label: "5. The gesture system" },
  { hash: "#6-parameter-categories", label: "6. Parameter categories" },
  {
    hash: "#7-spatial-sound--how-position-shapes-audio",
    label: "7. Spatial sound — how position shapes audio",
  },
  { hash: "#8-the-bottom-sheet-and-hud", label: "8. The bottom sheet and HUD" },
  { hash: "#9-gyroscope-camera", label: "9. Gyroscope camera" },
  { hash: "#10-presets", label: "10. Presets" },
  { hash: "#11-quick-reference", label: "11. Quick reference" },
];
