import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileText } from "lucide-react";

const CONTACT_EMAIL = "info@readymade.games";
const PAGE_URL = "https://readymade.games/press";
const OG_IMAGE = "https://readymade.games/og-image.jpg";

const games = [
  {
    title: "Synesthesia Synth",
    tagline: "A spatial audio-visual instrument",
    pressUrl: "/synthaesthesia/press",
    landingUrl: "/synthaesthesia",
  },
];

export default function StudioPress() {
  return (
    <>
      <Helmet>
        <title>Press — Readymade Games</title>
        <meta
          name="description"
          content="Press kits, fact sheets, and contact for Readymade Games — an independent studio making experimental music games and spatial instruments."
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content="Press — Readymade Games" />
        <meta
          property="og:description"
          content="Press kits and contact for Readymade Games."
        />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Press — Readymade Games" />
        <meta
          name="twitter:description"
          content="Press kits and contact for Readymade Games."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Press
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Readymade Games is an independent studio creating experimental
            music games and spatial audio-visual instruments. We build tools
            where every gesture is also a sound, and every sound is also an
            image.
          </p>

          {/* Press kits per project */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Press kits
            </h2>
            <div className="space-y-4">
              {games.map((g) => (
                <div
                  key={g.title}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {g.title}
                      </h3>
                      <p className="text-purple-200 text-sm">{g.tagline}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        <Link href={g.landingUrl}>Project page</Link>
                      </Button>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
                      >
                        <Link href={g.pressUrl}>
                          <FileText className="mr-2 h-4 w-4" />
                          Press kit
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Studio contact */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Studio contact
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
