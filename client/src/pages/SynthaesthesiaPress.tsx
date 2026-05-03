import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppStoreBadge from "@/components/AppStoreBadge";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { SYNTHAESTHESIA_HERO_YOUTUBE_ID } from "@/lib/synthaesthesiaMedia";
import {
  ArrowLeft,
  Download,
  Mail,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app/id6763379132";
const ITCH_URL = "https://readymadegames.itch.io/synthaesthesia";
const CONTACT_EMAIL = "info@readymade.games";
const PRESS_KIT_ZIP = "/synthaesthesia/press-kit.zip";
const SCREENSHOTS = [
  "/synthaesthesia/fingerSS.jpeg",
  "/synthaesthesia/menuSS.jpeg",
  "/synthaesthesia/patternSS.jpeg",
  "/synthaesthesia/roomSS.jpeg",
];
const PAGE_URL = "https://readymade.games/synthaesthesia/press";
const OG_IMAGE = "https://readymade.games/synthaesthesia/og-image.jpg";

const factsheet: { label: string; value: string | JSX.Element }[] = [
  { label: "Developer", value: "Readymade Games" },
  { label: "Platforms", value: "iOS (App Store) · Android (itch.io beta)" },
  { label: "Price", value: "Free" },
  { label: "Genre", value: "Audio-visual instrument / experimental music app" },
  { label: "Release", value: "2026" },
  { label: "Languages", value: "English" },
  {
    label: "Press contact",
    value: (
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="text-purple-300 hover:text-white"
      >
        {CONTACT_EMAIL}
      </a>
    ),
  },
];

const features = [
  "Three 3D capsules float in space — move and rotate them to sculpt timbre.",
  "Sliders sculpt contraction patterns that drive each capsule's voice.",
  "Delay effects spawn synchronised particles — every echo is also light.",
  "Swap between sound patches to transform the entire sonic character.",
];

const shareOneLine =
  "Synthaesthesia by Readymade Games — a spatial audio-visual instrument where every gesture is both sound and image. Free on the App Store. https://readymade.games/synthaesthesia";

const shareParagraph =
  "Synthaesthesia is a new kind of spatial instrument from Readymade Games. Three 3D capsules float in space — moving and rotating them shapes timbre, sliders sculpt rhythmic contraction, and delay effects spawn synchronised particle bursts. Not quite a game, not quite a synth. Free on the App Store, with an Android beta on itch.io. https://readymade.games/synthaesthesia";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleCopy}
      className="border-white/30 text-white hover:bg-white/10"
    >
      {copied ? (
        <>
          <Check className="mr-2 h-4 w-4 text-green-400" />
          Copied
        </>
      ) : (
        <>
          <Copy className="mr-2 h-4 w-4" />
          Copy
        </>
      )}
    </Button>
  );
}

export default function SynthaesthesiaPress() {
  return (
    <>
      <Helmet>
        <title>Synthaesthesia — Press Kit</title>
        <meta
          name="description"
          content="Press kit for Synthaesthesia by Readymade Games — fact sheet, screenshots, hero video, downloadable press kit, and reviewer build access."
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content="Synthaesthesia — Press Kit" />
        <meta
          property="og:description"
          content="Fact sheet, screenshots, hero video, and downloadable press kit for Synthaesthesia by Readymade Games."
        />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Synthaesthesia — Press Kit" />
        <meta
          name="twitter:description"
          content="Fact sheet, screenshots, hero video, and downloadable press kit."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/synthaesthesia"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Synthaesthesia
          </Link>

          {/* Header */}
          <div className="mb-10">
            <Badge className="bg-purple-500/20 text-purple-200 border border-purple-400/30 mb-4">
              Press kit
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Synthaesthesia
            </h1>
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-medium">
              A spatial audio-visual instrument by Readymade Games
            </p>
          </div>

          {/* Press kit download + store buttons */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-12 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">
                  Download press kit
                </h2>
                <p className="text-gray-400 text-sm">
                  Logos, 4 screenshots, hero video, one-pager PDF, fact sheet.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
                >
                  <a href={PRESS_KIT_ZIP} download>
                    <Download className="mr-2 h-4 w-4" />
                    press-kit.zip
                  </a>
                </Button>
                <AppStoreBadge href={APP_STORE_URL} />
              </div>
            </div>
          </div>

          {/* Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Description
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Synthaesthesia is a new kind of spatial instrument. Three 3D
              capsules float in space — move them, rotate them, and watch them
              contract to generate sound. Every position and rotation shapes
              the timbre; contraction patterns are sculpted with sliders;
              delay effects spawn synchronised particles. Swap between sound
              patches to transform the entire sonic character.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Not quite a game, not quite a synth — Synthaesthesia is built on
              the idea that every gesture should be both sound and image at
              once.
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f} className="flex gap-3 text-gray-300">
                  <span className="text-purple-300 mt-1">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Factsheet */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Fact sheet
            </h2>
            <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm">
              <table className="w-full text-left">
                <tbody className="divide-y divide-white/10">
                  {factsheet.map((row) => (
                    <tr key={row.label}>
                      <td className="px-6 py-3 text-purple-200 font-medium w-48">
                        {row.label}
                      </td>
                      <td className="px-6 py-3 text-gray-300">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Hero video */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Hero video
            </h2>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
              <YouTubeEmbed
                videoId={SYNTHAESTHESIA_HERO_YOUTUBE_ID}
                title="Synthaesthesia — hero trailer"
              />
            </div>
          </section>

          {/* Screenshots */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Screenshots
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {SCREENSHOTS.map((src, i) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-black/40 block hover:border-purple-400/50 transition-colors"
                >
                  <img
                    src={src}
                    alt={`Synthaesthesia screenshot ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-3">
              Click any screenshot to open the full-resolution image. All
              screenshots are also included in <code>press-kit.zip</code>.
            </p>
          </section>

          {/* Copy-paste share text */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Copy-paste share text
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">One-line</h3>
                  <CopyButton text={shareOneLine} />
                </div>
                <pre className="rounded-xl bg-black/40 border border-white/10 p-4 text-sm text-gray-300 whitespace-pre-wrap font-mono">
                  {shareOneLine}
                </pre>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">Paragraph</h3>
                  <CopyButton text={shareParagraph} />
                </div>
                <pre className="rounded-xl bg-black/40 border border-white/10 p-4 text-sm text-gray-300 whitespace-pre-wrap font-mono">
                  {shareParagraph}
                </pre>
              </div>
            </div>
          </section>

          {/* Reviewer build access */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Reviewer build access
            </h2>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Press, reviewers and creators are welcome to request a build.
                The iOS release is free on the App Store, and Android builds
                are available on itch.io. For TestFlight invites or direct
                builds, please reach out.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
                >
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Synthaesthesia%20review%20build%20request`}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Request a code
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <a href={ITCH_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Android build (itch.io)
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Press contact */}
          <section className="mb-4">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Press contact
            </h2>
            <div className="rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400/30 p-6 text-center">
              <Mail className="h-7 w-7 text-purple-200 mx-auto mb-3" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-2xl font-semibold text-white hover:text-purple-200 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-gray-300 text-sm mt-2">
                Readymade Games — replies within 24 hours.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
