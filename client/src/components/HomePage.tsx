import VideoBackground from "./VideoBackground";
import { Button } from "./ui/button";
import { useNavigation } from "../lib/stores/useNavigation";
import { Play, Download, Music } from "lucide-react";

export default function HomePage() {
  const { setCurrentSection } = useNavigation();

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <VideoBackground 
        videoPath="/cracked-nuts-background.mp4"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Create Music with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Sound & Motion
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-lg">
            Immersive music games that blend rhythm, movement, and creativity. 
            Experience the magic of interactive music!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => setCurrentSection('play')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Play Now
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCurrentSection('games')}
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              View Games
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCurrentSection('gallery')}
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              <Music className="mr-2 h-5 w-5" />
              Music Gallery
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-white/60 text-sm">Scroll to explore</div>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent mx-auto mt-2"></div>
        </div>
      </div>
    </div>
  );
}
