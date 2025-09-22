import { useEffect, useState } from 'react';

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  genre: string;
  bpm: number;
  key: string;
  likes: number;
  plays: number;
  downloadUrl: string;
  waveformData: number[];
}

interface CSS3MusicVisualizerProps {
  isPlaying: boolean;
  track: Track | null;
}

export default function CSS3MusicVisualizer({ isPlaying, track }: CSS3MusicVisualizerProps) {
  const [time, setTime] = useState(0);

  // Animation loop for visualizer
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTime(prev => prev + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Generate animated bars
  const bars = Array.from({ length: 32 }, (_, i) => {
    const baseHeight = track ? track.waveformData[i % track.waveformData.length] * 100 : Math.random() * 50;
    const animatedHeight = isPlaying 
      ? baseHeight + Math.sin(time + i * 0.5) * 20 
      : baseHeight * 0.3;
    
    return {
      height: Math.max(5, animatedHeight),
      color: `hsl(${(i * 11.25 + time * 20) % 360}, 70%, ${60 + Math.sin(time + i) * 20}%)`
    };
  });

  // Generate orbiting elements
  const orbitElements = Array.from({ length: 8 }, (_, i) => ({
    angle: (time * 0.5 + i * 45) % 360,
    radius: 80 + Math.sin(time * 0.7 + i) * 20,
    color: `hsl(${(i * 45 + time * 30) % 360}, 70%, 60%)`,
    size: isPlaying ? 8 + Math.sin(time * 2 + i) * 4 : 4
  }));

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 rounded-lg overflow-hidden">
      {/* Central pulsing circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`rounded-full transition-all duration-300 ${
            isPlaying ? 'animate-pulse' : ''
          }`}
          style={{
            width: isPlaying ? `${60 + Math.sin(time * 3) * 20}px` : '40px',
            height: isPlaying ? `${60 + Math.sin(time * 3) * 20}px` : '40px',
            backgroundColor: isPlaying ? '#ff6b6b' : '#444',
            boxShadow: isPlaying 
              ? `0 0 30px #ff1744, 0 0 60px #ff174450` 
              : '0 0 10px rgba(255, 255, 255, 0.2)',
            filter: `brightness(${isPlaying ? 1.2 : 0.8})`,
          }}
        />
      </div>

      {/* Orbiting elements */}
      {orbitElements.map((element, i) => (
        <div
          key={`orbit-${i}`}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) rotate(${element.angle}deg) translate(${element.radius}px) rotate(-${element.angle}deg)`,
            transition: isPlaying ? 'none' : 'all 0.5s ease'
          }}
        >
          <div
            className={`rounded transition-all duration-200 ${
              isPlaying ? 'animate-pulse' : ''
            }`}
            style={{
              width: `${element.size}px`,
              height: `${element.size * 2}px`,
              backgroundColor: element.color,
              boxShadow: isPlaying ? `0 0 10px ${element.color}` : 'none'
            }}
          />
        </div>
      ))}

      {/* Audio bars visualization */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-center space-x-1">
        {bars.map((bar, i) => (
          <div
            key={`bar-${i}`}
            className={`transition-all duration-150 rounded-t ${
              isPlaying ? 'animate-pulse' : ''
            }`}
            style={{
              width: '4px',
              height: `${bar.height}px`,
              backgroundColor: bar.color,
              boxShadow: isPlaying ? `0 0 5px ${bar.color}` : 'none',
              opacity: isPlaying ? 0.9 : 0.3
            }}
          />
        ))}
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full bg-white transition-all duration-1000 ${
              isPlaying ? 'animate-ping' : ''
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              opacity: isPlaying ? 0.1 + Math.random() * 0.2 : 0.05,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Track info overlay */}
      {track && (
        <div className="absolute top-4 left-4 right-4 text-center">
          <div className={`text-white text-sm font-medium transition-all ${
            isPlaying ? 'opacity-100 scale-105' : 'opacity-70'
          }`}>
            {track.title}
          </div>
          <div className="text-white/60 text-xs mt-1">
            {track.bpm} BPM • {track.key}
          </div>
        </div>
      )}

      {/* Status indicator */}
      <div className="absolute bottom-2 right-2 text-xs text-white/60">
        {isPlaying ? '▶ Playing' : '⏸ Paused'}
      </div>
    </div>
  );
}