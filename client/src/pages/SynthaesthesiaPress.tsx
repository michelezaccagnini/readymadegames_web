import { useState } from "react";
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
} from "@/lib/synthaesthesiaMedia";
import {
  ArrowLeft,
  Download,
  Mail,
  Copy,
  Check,
  ExternalLink,
  FileText,
  BookOpen,
} from "lucide-react";

const {
  appStore: APP_STORE_URL,
  googlePlay: GOOGLE_PLAY_URL,
  manual: MANUAL_URL,
  manualGithub: MANUAL_GITHUB_URL,
  contactEmail: CONTACT_EMAIL,
} = SYNTHAESTHESIA_LINKS;
const PRESS_KIT_ZIP = "/synthaesthesia/press-kit.zip";
const ONE_PAGER_PAGE = "/synthaesthesia/press/one-pager";
const ONE_PAGER_MD = "/synthaesthesia/PRESS_ONE_PAGER.md";
const GITHUB_ONE_PAGER_SOURCE =
  "https://github.com/michelezaccagnini/Synthaesthesia/blob/ios-build/press/PRESS_ONE_PAGER.md";
const SCREENSHOTS = [
  "/synthaesthesia/voicesSS.png",
  "/synthaesthesia/selectSS.png",
  "/synthaesthesia/scenesSS.png",
  "/synthaesthesia/gesturesSS.png",
];
const PAGE_URL = "https://readymade.games/synthaesthesia/press";
const OG_IMAGE = "https://readymade.games/synthaesthesia/og-image.jpg";

const factsheet: { label: string; value: string | JSX.Element }[] = [
  { label: "Developer", value: "Readymade Games" },
  {
    label: "Platforms",
    value: "iOS (App Store) · Android (Google Play)",
  },
  { label: "Price", value: "Free" },
  { label: "Genre", value: "Audio-visual instrument / experimental music app" },
  { label: "Release", value: "2026" },
  { label: "Languages", value: "English" },
  {
    label: "User manual",
    value: (
      <span className="inline-flex items-center gap-3 flex-wrap">
        <Link
          href={MANUAL_URL}
          className="text-purple-300 hover:text-white inline-flex items-center gap-1"
        >
          Read on the site
        </Link>
        <span className="text-gray-500">·</span>
        <a
          href={MANUAL_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-300 hover:text-white inline-flex items-center gap-1"
        >
          GitHub source
          <ExternalLink className="h-3 w-3" />
        </a>
      </span>
    ),
  },
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
  "Three independent voices, each a living 3D capsule you move and rotate by touch.",
  "Position is the mix: X is pan, height is pitch, depth is distance and reverb.",
  "Two oscillators per voice fire a pulse each time their paths cross — the capsule's animation is the rhythm.",
  "Four gesture categories — Position, Pattern, Rotation and Texture — drive every parameter directly on the 3D space.",
  "A library of preset scenes, each a complete world of three voices; save your own from the bottom sheet.",
];

const shareOneLine =
  "Synesthesia Synth by Readymade Games — a spatial audio-visual instrument where every gesture is both sound and image. Free on the App Store and Google Play. https://readymade.games/synthaesthesia";

const shareParagraph =
  "Synesthesia Synth is a new kind of spatial instrument from Readymade Games. Three living 3D capsules float in space — move them and the room becomes the mixer: position is pan, height is pitch, depth is distance and reverb. Two oscillators inside each voice fire a pulse every time their paths cross, so the capsule's animation is the rhythm. Drag and pinch drive four gesture categories — Position, Pattern, Rotation and Texture. Not quite a game, not quite a synth. Free on the App Store and Google Play. https://readymade.games/synthaesthesia";

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
        <title>Synesthesia Synth — Press Kit</title>
        <meta
          name="description"
          content="Press kit for Synesthesia Synth by Readymade Games — fact sheet, screenshots, hero video, downloadable press kit, and reviewer build access."
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content="Synesthesia Synth — Press Kit" />
        <meta
          property="og:description"
          content="Fact sheet, screenshots, hero video, and downloadable press kit for Synesthesia Synth by Readymade Games."
        />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Synesthesia Synth — Press Kit" />
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
            Back to Synesthesia Synth
          </Link>

          {/* Header */}
          <div className="mb-10">
            <Badge className="bg-purple-500/20 text-purple-200 border border-purple-400/30 mb-4">
              Press kit
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Synesthesia Synth
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
                  Full zip when available; meanwhile use the one-pager (print to PDF),
                  Markdown download, and assets below.{" "}
                  <a
                    href={GITHUB_ONE_PAGER_SOURCE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-white underline underline-offset-2"
                  >
                    Canonical copy on GitHub
                  </a>
                  .
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                  <Link href={ONE_PAGER_PAGE}>
                    <FileText className="mr-2 h-4 w-4" />
                    One-pager
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <a href={ONE_PAGER_MD} download>
                    <Download className="mr-2 h-4 w-4" />
                    PRESS_ONE_PAGER.md
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link href={MANUAL_URL}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    User manual
                  </Link>
                </Button>
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
                <GooglePlayBadge href={GOOGLE_PLAY_URL} />
              </div>
            </div>
          </div>

          {/* Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Description
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Synesthesia Synth is a new kind of spatial instrument with three
              independent voices, each a living 3D capsule suspended in space.
              Move a capsule and the room becomes the mixer — position is pan,
              height is pitch, depth is distance and reverb. Two oscillators run
              inside every voice, firing a pulse each time their paths cross, so
              the capsule's animation is the rhythm. Drag and pinch drive four
              gesture categories — Position, Pattern, Rotation and Texture —
              directly on the 3D space, with no sliders or knobs to operate.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Not quite a game, not quite a synth — Synesthesia Synth is built on
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
                title="Synesthesia Synth — hero trailer"
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
                    alt={`Synesthesia Synth screenshot ${i + 1}`}
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
                Synesthesia Synth is free on the App Store and Google Play. For
                TestFlight invites, internal-testing access or direct builds,
                please reach out.
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
