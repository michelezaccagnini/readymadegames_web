import { useRef, useState, useCallback, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useAudio } from '../lib/stores/useAudio';
import { AudioEngine } from '../lib/audioEngine';

interface SphereData {
  id: number;
  position: [number, number, number];
  velocity: [number, number, number];
  color: string;
  scale: number;
  note: string;
  frequency: number;
}

export default function InteractiveSpheres() {
  const { viewport } = useThree();
  const audioEngine = useRef<AudioEngine | null>(null);
  const [spheres, setSpheres] = useState<SphereData[]>([]);

  // Initialize audio engine and spheres
  useState(() => {
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
      position: [
        (Math.random() - 0.5) * viewport.width * 0.8,
        (Math.random() - 0.5) * viewport.height * 0.8,
        (Math.random() - 0.5) * 4
      ],
      velocity: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.01
      ],
      color: colors[index],
      scale: 0.3 + Math.random() * 0.4,
      note,
      frequency: frequencies[index]
    }));

    setSpheres(initialSpheres);
  });

  // Handle sphere click
  const handleSphereClick = useCallback((sphere: SphereData) => {
    if (audioEngine.current) {
      audioEngine.current.playNote(sphere.frequency, 0.5);
      
      // Add visual feedback - scale up temporarily
      setSpheres(prev => prev.map(s => 
        s.id === sphere.id 
          ? { ...s, scale: s.scale * 1.5 }
          : s
      ));

      // Reset scale after animation
      setTimeout(() => {
        setSpheres(prev => prev.map(s => 
          s.id === sphere.id 
            ? { ...s, scale: s.scale / 1.5 }
            : s
        ));
      }, 200);
    }
  }, []);

  // Animation loop
  useFrame((state) => {
    setSpheres(prev => prev.map(sphere => {
      let [x, y, z] = sphere.position;
      let [vx, vy, vz] = sphere.velocity;

      // Update position
      x += vx;
      y += vy;
      z += vz;

      // Bounce off viewport bounds
      const bounds = {
        x: viewport.width / 2,
        y: viewport.height / 2,
        z: 3
      };

      if (x > bounds.x || x < -bounds.x) {
        vx = -vx;
        x = Math.max(-bounds.x, Math.min(bounds.x, x));
        
        // Play sound on bounce
        if (audioEngine.current) {
          audioEngine.current.playNote(sphere.frequency, 0.2);
        }
      }
      
      if (y > bounds.y || y < -bounds.y) {
        vy = -vy;
        y = Math.max(-bounds.y, Math.min(bounds.y, y));
        
        // Play sound on bounce
        if (audioEngine.current) {
          audioEngine.current.playNote(sphere.frequency, 0.2);
        }
      }
      
      if (z > bounds.z || z < -bounds.z) {
        vz = -vz;
        z = Math.max(-bounds.z, Math.min(bounds.z, z));
      }

      return {
        ...sphere,
        position: [x, y, z] as [number, number, number],
        velocity: [vx, vy, vz] as [number, number, number]
      };
    }));
  });

  return (
    <>
      {spheres.map((sphere) => (
        <Sphere
          key={sphere.id}
          position={sphere.position}
          scale={sphere.scale}
          onClick={() => handleSphereClick(sphere)}
        >
          <meshStandardMaterial
            color={sphere.color}
            metalness={0.3}
            roughness={0.2}
            emissive={sphere.color}
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}
      
      {/* Add some floating musical notes */}
      <group>
        {[...Array(20)].map((_, i) => (
          <mesh
            key={`note-${i}`}
            position={[
              (Math.random() - 0.5) * viewport.width,
              (Math.random() - 0.5) * viewport.height,
              -5 + Math.random() * 10
            ]}
          >
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.1 + Math.random() * 0.2}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}
