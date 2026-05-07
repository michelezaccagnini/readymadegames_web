import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppStoreBadge from "@/components/AppStoreBadge";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { SYNTHAESTHESIA_HERO_YOUTUBE_ID } from "@/lib/synthaesthesiaMedia";
import {
  Download,
  Mail,
  FileText,
  Move3d,
  Sliders,
  Sparkles,
  Youtube,
  Github,
} from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app/id6763379132";
const ITCH_URL = "https://readymadegames.itch.io/synthaesthesia";
const CONTACT_EMAIL = "info@readymade.games";
const SCREENSHOTS = [
  "/synthaesthesia/fingerSS.jpeg",
  "/synthaesthesia/menuSS.jpeg",
  "/synthaesthesia/patternSS.jpeg",
  "/synthaesthesia/roomSS.jpeg",
];
const OG_IMAGE = "https://readymade.games/synthaesthesia/og-image.jpg";
const PAGE_URL = "https://readymade.games/synthaesthesia";

const features = [
  {
    icon: Move3d,
    title: "Spatial gestures shape sound",
    body: "Three 3D capsules float in space — move and rotate them to sculpt timbre in real time.",
  },
  {
    icon: Sliders,
    title: "Sliders sculpt contraction",
    body: "Shape the rhythmic contraction patterns that drive each capsule's voice.",
  },
  {
    icon: Sparkles,
    title: "Delay spawns particles",
    body: "Echoes are visualised as synchronised particle bursts — every sound becomes light.",
  },
];

const mappings = [
  { input: "Capsule position (X / Y / Z)", output: "Pitch and timbre center" },
  { input: "Capsule rotation", output: "Spectral character / harmonics" },
  { input: "Contraction rate", output: "Rhythmic pulse of each voice" },
  { input: "Sliders", output: "Envelope and contraction shape" },
  { input: "Delay taps", output: "Synchronised particle bursts" },
  { input: "Patch swap", output: "Entire sonic character" },
];

export default function SynthaesthesiaLanding() {
  return (
    <>
      <Helmet>
        <title>Synesthesia Synth — A Spatial Audio-Visual Instrument</title>
        <meta
          name="description"
          content="Synesthesia Synth is a spatial audio-visual instrument where every gesture is both sound and image. Move 3D capsules to sculpt timbre, rhythm and light. iOS + Android."
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
          content="Move 3D capsules to sculpt timbre, rhythm and light. A new kind of spatial instrument from Readymade Games."
        />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Synesthesia Synth — A Spatial Audio-Visual Instrument"
        />
        <meta
          name="twitter:description"
          content="Move 3D capsules to sculpt timbre, rhythm and light. iOS + Android."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <Badge className="bg-purple-500/20 text-purple-200 border border-purple-400/30 mb-5">
                Out now on iOS · Android beta on itch.io
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
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-5 py-6 rounded-xl"
                >
                  <a href={ITCH_URL} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Android beta on itch.io
                  </a>
                </Button>
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
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Screenshots
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {SCREENSHOTS.map((src, i) => (
                <div
                  key={src}
                  className="aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-black/40"
                >
                  <img
                    src={src}
                    alt={`Synesthesia Synth screenshot ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
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
              instrument's behaviour is on screen at all times.
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
                Free on the App Store. Android beta available on itch.io.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <AppStoreBadge href={APP_STORE_URL} />
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-5 py-6 rounded-xl"
                >
                  <a href={ITCH_URL} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Android beta
                  </a>
                </Button>
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
