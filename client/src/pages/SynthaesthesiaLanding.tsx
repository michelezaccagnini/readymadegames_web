import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppStoreBadge from "@/components/AppStoreBadge";
import GooglePlayBadge from "@/components/GooglePlayBadge";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import {
  SYNTHAESTHESIA_HERO_YOUTUBE_ID,
  SYNTHAESTHESIA_LINKS,
  SYNTHAESTHESIA_MANUAL_SECTIONS,
} from "@/lib/synthaesthesiaMedia";
import {
  Mail,
  FileText,
  Move3d,
  Activity,
  Hand,
  Youtube,
  Github,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const {
  appStore: APP_STORE_URL,
  googlePlay: GOOGLE_PLAY_URL,
  manual: MANUAL_URL,
  manualPresets: MANUAL_PRESETS_URL,
  manualGithub: MANUAL_GITHUB_URL,
  contactEmail: CONTACT_EMAIL,
} = SYNTHAESTHESIA_LINKS;

const SCREENSHOTS = [
  { src: "/synthaesthesia/voicesSS.png", caption: "Three voices float in space — position is pan, height is pitch, depth is reverb." },
  { src: "/synthaesthesia/selectSS.png", caption: "Tap a capsule to select it — the flashing ring marks the active voice." },
  { src: "/synthaesthesia/scenesSS.png", caption: "Choose a scene — each preset is a complete world of three voices." },
  { src: "/synthaesthesia/gesturesSS.png", caption: "Every gesture in one place: drag, pinch, tap and tilt." },
];
const OG_IMAGE = "https://readymade.games/synthaesthesia/og-image.jpg";
const PAGE_URL = "https://readymade.games/synthaesthesia";

const features = [
  {
    icon: Move3d,
    title: "Position is the mix",
    body: "X is pan, height is pitch, depth is distance and reverb. Spread three voices through space and the room becomes the mixer.",
  },
  {
    icon: Activity,
    title: "The shape is the rhythm",
    body: "Two oscillators run inside each voice — every time their paths cross a pulse fires. The capsule's animation is the sound.",
  },
  {
    icon: Hand,
    title: "Four gesture categories",
    body: "Drag and pinch drive Position, Pattern, Rotation and Texture. Every parameter is touch, directly on the 3D space.",
  },
];

const mappings = [
  { input: "Capsule position (X / Y / Z)", output: "Pan, pitch register, distance + reverb" },
  { input: "Pattern — drag + pinch", output: "Two oscillator speeds and waveform — the rhythm engine" },
  { input: "Rotation — drag + pinch", output: "Filter cutoff, resonance and distortion" },
  { input: "Texture — drag + pinch", output: "Pitch / colour, delay feedback and delay time" },
  { input: "Three-finger tap", output: "Cycle category: Position → Pattern → Rotation → Texture" },
  { input: "Double-tap (off a capsule)", output: "Mute / unmute the selected voice" },
];

export default function SynthaesthesiaLanding() {
  return (
    <>
      <Helmet>
        <title>Synesthesia Synth — A Spatial Audio-Visual Instrument</title>
        <meta
          name="description"
          content="Synesthesia Synth is a spatial audio-visual instrument where every gesture is both sound and image. Move 3D capsules to sculpt timbre, rhythm and light. Free on iOS and Android."
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta
          property="og:title"
          content="Synesthesia Synth — A Spatial Audio-Visual Instrument"
        />
        <meta
          property="og:description"
          content="Move 3D capsules to sculpt timbre, rhythm and light. Free on iOS and Android — a new kind of spatial instrument from Readymade Games."
        />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Synesthesia Synth — A Spatial Audio-Visual Instrument"
        />
        <meta
          name="twitter:description"
          content="Move 3D capsules to sculpt timbre, rhythm and light. Free on iOS and Android."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <Badge className="bg-purple-500/20 text-purple-200 border border-purple-400/30 mb-5">
                Out now on iOS &amp; Android — free
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
                Synesthesia Synth
              </h1>
              <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-medium mb-6">
                A spatial audio-visual instrument
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                Where every gesture is both sound and image. Three 3D capsules
                float in space — move them, rotate them, watch them contract.
                Every motion shapes timbre, rhythm and light at once.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <AppStoreBadge href={APP_STORE_URL} />
                <GooglePlayBadge href={GOOGLE_PLAY_URL} />
              </div>
            </div>

            <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
              <YouTubeEmbed
                videoId={SYNTHAESTHESIA_HERO_YOUTUBE_ID}
                title="Synesthesia Synth — hero trailer"
                ambient
              />
            </div>
          </section>

          {/* Features */}
          <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-400/20 mb-4">
                    <Icon className="h-6 w-6 text-purple-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section id="screenshots" className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-3 text-center">
              Screenshots
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Tap any image to view it full-size.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {SCREENSHOTS.map(({ src, caption }, i) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-black/40 block relative"
                >
                  <img
                    src={src}
                    alt={`Synesthesia Synth — ${caption}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-white leading-snug">{caption}</p>
                  </div>
                  <span className="sr-only">Screenshot {i + 1}</span>
                </a>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-3 text-center">
              How it works
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Position and motion map directly to sound. Nothing is hidden — the
              instrument&apos;s behaviour is on screen at all times.
            </p>
            <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm">
              <table className="w-full text-left">
                <thead className="bg-black/30">
                  <tr>
                    <th className="px-6 py-3 text-sm font-semibold text-purple-200 uppercase tracking-wide">
                      Input
                    </th>
                    <th className="px-6 py-3 text-sm font-semibold text-purple-200 uppercase tracking-wide">
                      Sonic / visual result
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {mappings.map((m) => (
                    <tr key={m.input}>
                      <td className="px-6 py-4 text-white font-medium">
                        {m.input}
                      </td>
                      <td className="px-6 py-4 text-gray-300">{m.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* User manual */}
          <section id="manual" className="mb-20">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-400/20 shrink-0">
                    <BookOpen className="h-6 w-6 text-purple-200" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      User manual
                    </h2>
                    <p className="text-gray-300 leading-relaxed max-w-2xl">
                      Everything you need to play Synesthesia Synth — gestures,
                      the three voices, the four parameter categories,
                      spatial sound, the bottom sheet, the gyroscope camera,
                      and the preset library.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
                  >
                    <Link href={MANUAL_URL}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read the full manual
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href={MANUAL_PRESETS_URL}>Jump to presets</Link>
                  </Button>
                  <a
                    href={MANUAL_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple-300/80 hover:text-white inline-flex items-center gap-1 self-end"
                  >
                    View source on GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-200 mb-3">
                Sections
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {SYNTHAESTHESIA_MANUAL_SECTIONS.map((section) => (
                  <li key={section.hash}>
                    <Link
                      href={`${MANUAL_URL}${section.hash}`}
                      className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="text-purple-300 group-hover:text-pink-300">
                        →
                      </span>
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Press kit / presser */}
          <section id="press" className="mb-20">
            <div className="rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400/30 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-black/30 border border-purple-400/20 shrink-0">
                    <FileText className="h-6 w-6 text-purple-200" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      For press &amp; creators
                    </h2>
                    <p className="text-gray-200 leading-relaxed max-w-2xl">
                      One-pager, fact sheet, hero video, full-resolution
                      screenshots, copy-paste blurbs, and reviewer build access.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <Button
                    asChild
                    className="bg-white text-purple-900 hover:bg-purple-100"
                  >
                    <Link href="/synthaesthesia/press">
                      <FileText className="mr-2 h-4 w-4" />
                      Press kit
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white/10"
                  >
                    <Link href="/synthaesthesia/press/one-pager">
                      One-pager
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Pull quote */}
          <section className="mb-20">
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="text-3xl md:text-4xl font-light text-white leading-snug italic">
                &ldquo;Where every gesture is both sound and image.&rdquo;
              </p>
            </blockquote>
          </section>

          {/* Download CTA */}
          <section className="mb-16">
            <div className="rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400/30 p-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-3">
                Get Synesthesia Synth
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Free on the App Store and Google Play — no IAP, no subscriptions.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <AppStoreBadge href={APP_STORE_URL} />
                <GooglePlayBadge href={GOOGLE_PLAY_URL} />
              </div>
            </div>
          </section>

          {/* Local footer strip */}
          <section className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-purple-300" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-purple-300 hover:text-white transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <Link
              href="/synthaesthesia/press"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
            >
              <FileText className="h-4 w-4" />
              Press kit
            </Link>
            <Link
              href={MANUAL_URL}
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              Manual
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@readymadegames"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </a>
              <a
                href="https://readymadegames.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                aria-label="itch.io"
              >
                <Github className="h-4 w-4" />
                itch.io
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
