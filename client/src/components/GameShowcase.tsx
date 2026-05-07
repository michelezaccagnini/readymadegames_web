import { Smartphone, ExternalLink, Download } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const games = [
  {
    id: "synthaesthesia",
    title: "Synesthesia Synth",
    tagline: "A Spatial Audio-Visual Instrument",
    description:
      "Three 3D capsules float in space — move them, rotate them, and watch them contract to generate sound. Every position and rotation shapes the timbre; contraction patterns are sculpted with sliders; delay effects spawn synchronized particles. Swap between sound patches to transform the entire sonic character. Not quite a game, not quite a synth — a new kind of spatial instrument.",
    platform: "Android",
    price: "Free",
    itchUrl: "https://readymadegames.itch.io/synthaesthesia",
    googlePlayUrl: null,
    videos: [
      { youtubeId: "IsoLXUgIwvI", label: "Basic Commands Tutorial" },
      { youtubeId: "mD54jssnzZk", label: "Another Example" },
    ],
    gradient: "from-purple-600 to-pink-600",
    badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
  },
];

export default function GameShowcase() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Games
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experimental instruments and interactive experiences.
          </p>
        </div>

        {/* Game Cards */}
        <div className="flex flex-col gap-16">
          {games.map((game) => (
            <div
              key={game.id}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm"
            >
              {/* Videos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {game.videos.map((video) => (
                  <div key={video.youtubeId} className="flex flex-col">
                    <div className="relative w-full aspect-video bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.label}
                      />
                    </div>
                    <p className="text-center text-xs text-gray-400 py-2 bg-black/30">
                      {video.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">
                      {game.title}
                    </h2>
                    <p
                      className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${game.gradient}`}
                    >
                      {game.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      className={`${game.badgeColor} border text-xs px-3 py-1`}
                    >
                      {game.price}
                    </Badge>
                    <Badge className="bg-white/10 text-gray-300 border border-white/20 text-xs px-3 py-1 flex items-center gap-1">
                      <Smartphone className="h-3 w-3" />
                      {game.platform}
                    </Badge>
                    {game.itchUrl && (
                      <Badge className="bg-[#fa5c5c]/20 text-[#fa5c5c] border border-[#fa5c5c]/30 text-xs px-3 py-1">
                        itch.io
                      </Badge>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
                  {game.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {game.itchUrl && (
                    <Button
                      asChild
                      className={`bg-gradient-to-r ${game.gradient} hover:opacity-90 text-white px-6 py-2`}
                    >
                      <a
                        href={game.itchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download on itch.io
                      </a>
                    </Button>
                  )}
                  {game.googlePlayUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 px-6 py-2"
                    >
                      <a
                        href={game.googlePlayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Get on Google Play
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
