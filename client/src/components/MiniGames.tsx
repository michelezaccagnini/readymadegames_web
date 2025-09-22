import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import CSS3InteractiveSpheres from "./CSS3InteractiveSpheres";
import { Play, RotateCcw } from "lucide-react";

interface MiniGame {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType;
}

// Simple Drum Pad Game Component
function DrumPadGame() {
  const [activePads, setActivePads] = useState<Set<number>>(new Set());

  const pads = [
    { id: 0, color: '#ff6b6b', sound: 'kick', label: 'Kick' },
    { id: 1, color: '#4ecdc4', sound: 'snare', label: 'Snare' },
    { id: 2, color: '#45b7d1', sound: 'hihat', label: 'Hi-Hat' },
    { id: 3, color: '#96ceb4', sound: 'crash', label: 'Crash' },
    { id: 4, color: '#ffeaa7', sound: 'tom1', label: 'Tom 1' },
    { id: 5, color: '#fd79a8', sound: 'tom2', label: 'Tom 2' },
    { id: 6, color: '#fdcb6e', sound: 'tom3', label: 'Tom 3' },
    { id: 7, color: '#6c5ce7', sound: 'ride', label: 'Ride' },
  ];

  const handlePadClick = (padId: number) => {
    setActivePads(prev => new Set(prev).add(padId));
    
    // Remove active state after animation
    setTimeout(() => {
      setActivePads(prev => {
        const newSet = new Set(prev);
        newSet.delete(padId);
        return newSet;
      });
    }, 150);

    // Play sound (would integrate with audio engine)
    console.log(`Playing ${pads[padId].sound}`);
  };

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      {pads.map((pad) => (
        <Button
          key={pad.id}
          className={`h-20 text-white font-semibold transition-all duration-150 ${
            activePads.has(pad.id) ? 'scale-95 brightness-125' : 'scale-100'
          }`}
          style={{ 
            backgroundColor: pad.color,
            boxShadow: activePads.has(pad.id) ? `0 0 20px ${pad.color}` : 'none'
          }}
          onClick={() => handlePadClick(pad.id)}
        >
          {pad.label}
        </Button>
      ))}
    </div>
  );
}

// Melody Sequencer Game Component
function MelodySequencer() {
  const [sequence, setSequence] = useState<boolean[][]>(
    Array(8).fill(null).map(() => Array(16).fill(false))
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const tracks = [
    { name: 'Kick', color: '#ff6b6b' },
    { name: 'Snare', color: '#4ecdc4' },
    { name: 'Hi-Hat', color: '#45b7d1' },
    { name: 'Open Hat', color: '#96ceb4' },
    { name: 'Clap', color: '#ffeaa7' },
    { name: 'Crash', color: '#fd79a8' },
    { name: 'Bass', color: '#fdcb6e' },
    { name: 'Lead', color: '#6c5ce7' },
  ];

  const toggleStep = (trackIndex: number, stepIndex: number) => {
    setSequence(prev => {
      const newSequence = [...prev];
      newSequence[trackIndex] = [...newSequence[trackIndex]];
      newSequence[trackIndex][stepIndex] = !newSequence[trackIndex][stepIndex];
      return newSequence;
    });
  };

  const clearSequence = () => {
    setSequence(Array(8).fill(null).map(() => Array(16).fill(false)));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-green-600 hover:bg-green-700"
        >
          <Play className="mr-2 h-4 w-4" />
          {isPlaying ? 'Stop' : 'Play'}
        </Button>
        <Button onClick={clearSequence} variant="outline">
          <RotateCcw className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </div>

      <div className="space-y-2">
        {sequence.map((track, trackIndex) => (
          <div key={trackIndex} className="flex items-center space-x-2">
            <div 
              className="w-16 text-xs text-white text-center py-1 rounded"
              style={{ backgroundColor: tracks[trackIndex].color }}
            >
              {tracks[trackIndex].name}
            </div>
            <div className="flex space-x-1">
              {track.map((active, stepIndex) => (
                <button
                  key={stepIndex}
                  className={`w-6 h-6 rounded transition-all ${
                    active 
                      ? 'opacity-100 shadow-lg' 
                      : 'opacity-30 hover:opacity-60'
                  } ${
                    isPlaying && currentStep === stepIndex 
                      ? 'ring-2 ring-white' 
                      : ''
                  }`}
                  style={{ backgroundColor: tracks[trackIndex].color }}
                  onClick={() => toggleStep(trackIndex, stepIndex)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MiniGames() {
  const [activeGame, setActiveGame] = useState<string>('spheres');

  const miniGames: MiniGame[] = [
    {
      id: 'spheres',
      title: 'Musical Spheres',
      description: 'Click and watch bouncing spheres create beautiful melodies',
      component: CSS3InteractiveSpheres
    },
    {
      id: 'drumpad',
      title: 'Drum Pad',
      description: 'Tap the pads to create your own drum beats',
      component: DrumPadGame
    },
    {
      id: 'sequencer',
      title: 'Melody Sequencer',
      description: 'Program beats and melodies in this step sequencer',
      component: MelodySequencer
    }
  ];

  const currentGame = miniGames.find(game => game.id === activeGame);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Play <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Now</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Try our web-based music games instantly - no downloads required!
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Game Selection */}
          <div className="lg:col-span-1 space-y-4">
            {miniGames.map((game) => (
              <Card 
                key={game.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeGame === game.id 
                    ? 'bg-purple-600/30 border-purple-400/50' 
                    : 'bg-black/30 border-white/20 hover:bg-black/40'
                }`}
                onClick={() => setActiveGame(game.id)}
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg">{game.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {game.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Game Area */}
          <div className="lg:col-span-3">
            <Card className="bg-black/30 border-white/20 h-[600px]">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  {currentGame?.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  {currentGame?.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="h-full">
                {activeGame === 'spheres' ? (
                  <div className="h-96 w-full rounded-lg overflow-hidden">
                    <CSS3InteractiveSpheres />
                  </div>
                ) : activeGame === 'drumpad' ? (
                  <div className="flex items-center justify-center h-96">
                    <DrumPadGame />
                  </div>
                ) : activeGame === 'sequencer' ? (
                  <div className="flex items-center justify-center h-96">
                    <MelodySequencer />
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
