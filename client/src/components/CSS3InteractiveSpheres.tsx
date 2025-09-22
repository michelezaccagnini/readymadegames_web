import { useRef, useState, useEffect, useCallback } from 'react';
import { AudioEngine } from '../lib/audioEngine';

interface SphereData {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  scale: number;
  note: string;
  frequency: number;
  isActive: boolean;
}

export default function CSS3InteractiveSpheres() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioEngine = useRef<AudioEngine | null>(null);
  const animationRef = useRef<number>(0);
  const [spheres, setSpheres] = useState<SphereData[]>([]);

  // Initialize audio engine and spheres
  useEffect(() => {
    audioEngine.current = new AudioEngine();
    
    // Create initial spheres with musical notes
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
    const frequencies = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', 
      '#ffeaa7', '#fd79a8', '#fdcb6e', '#6c5ce7'
    ];

    const initialSpheres: SphereData[] = notes.map((note, index) => ({
      id: index,
      x: Math.random() * 80 + 10, // 10% to 90% of container width
      y: Math.random() * 80 + 10, // 10% to 90% of container height
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      color: colors[index],
      scale: 0.8 + Math.random() * 0.4,
      note,
      frequency: frequencies[index],
      isActive: false
    }));

    setSpheres(initialSpheres);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setSpheres(prev => prev.map(sphere => {
        let newX = sphere.x + sphere.vx;
        let newY = sphere.y + sphere.vy;
        let newVx = sphere.vx;
        let newVy = sphere.vy;

        // Bounce off boundaries
        if (newX <= 5 || newX >= 95) {
          newVx = -newVx;
          newX = Math.max(5, Math.min(95, newX));
          
          // Play sound on bounce
          if (audioEngine.current) {
            audioEngine.current.playNote(sphere.frequency, 0.2);
          }
        }
        
        if (newY <= 5 || newY >= 95) {
          newVy = -newVy;
          newY = Math.max(5, Math.min(95, newY));
          
          // Play sound on bounce
          if (audioEngine.current) {
            audioEngine.current.playNote(sphere.frequency, 0.2);
          }
        }

        return {
          ...sphere,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
          isActive: sphere.isActive && Date.now() - (sphere as any).activeTime < 200
        };
      }));
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Handle sphere click
  const handleSphereClick = useCallback((sphere: SphereData) => {
    if (audioEngine.current) {
      audioEngine.current.playNote(sphere.frequency, 0.5);
      
      // Add visual feedback
      setSpheres(prev => prev.map(s => 
        s.id === sphere.id 
          ? { ...s, isActive: true, activeTime: Date.now() as any }
          : s
      ));
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full overflow-hidden bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"
      style={{ minHeight: '100vh' }}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Spheres */}
      {spheres.map((sphere) => (
        <div
          key={sphere.id}
          className={`absolute rounded-full cursor-pointer transition-all duration-200 ${
            sphere.isActive ? 'animate-pulse' : ''
          }`}
          style={{
            left: `${sphere.x}%`,
            top: `${sphere.y}%`,
            width: `${60 * sphere.scale}px`,
            height: `${60 * sphere.scale}px`,
            backgroundColor: sphere.color,
            transform: `translate(-50%, -50%) ${sphere.isActive ? 'scale(1.2)' : 'scale(1)'}`,
            boxShadow: sphere.isActive 
              ? `0 0 30px ${sphere.color}, 0 0 60px ${sphere.color}50` 
              : `0 0 15px ${sphere.color}50`,
            filter: `brightness(${sphere.isActive ? 1.3 : 1})`,
          }}
          onClick={() => handleSphereClick(sphere)}
        >
          {/* Inner glow */}
          <div 
            className="absolute inset-2 rounded-full opacity-60"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)`
            }}
          />
          
          {/* Musical note indicator */}
          <div 
            className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs"
            style={{ fontSize: `${10 * sphere.scale}px` }}
          >
            {sphere.note}
          </div>
        </div>
      ))}

      {/* Instructions overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/80 text-sm mb-2">Click the musical spheres or watch them bounce!</div>
        <div className="flex space-x-4 text-xs text-white/60">
          <span>🎵 Interactive Music</span>
          <span>✨ CSS3 Animation</span>
          <span>🔊 Web Audio API</span>
        </div>
      </div>
    </div>
  );
}