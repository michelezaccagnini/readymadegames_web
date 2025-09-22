import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import CSS3MusicVisualizer from "./CSS3MusicVisualizer";
import { Play, Pause, Download, Share, Heart, RotateCcw } from "lucide-react";

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

// This component is now handled by CSS3MusicVisualizer

export default function MusicGallery() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());

  // Sample tracks data
  const tracks: Track[] = [
    {
      id: 'track1',
      title: 'Cosmic Journey',
      artist: 'SoundSphere Games',
      duration: '3:45',
      genre: 'Electronic',
      bpm: 128,
      key: 'Am',
      likes: 1247,
      plays: 15670,
      downloadUrl: '#',
      waveformData: Array(100).fill(0).map(() => Math.random())
    },
    {
      id: 'track2',
      title: 'Neon Dreams',
      artist: 'SoundSphere Games',
      duration: '4:12',
      genre: 'Synthwave',
      bpm: 140,
      key: 'Dm',
      likes: 892,
      plays: 12340,
      downloadUrl: '#',
      waveformData: Array(100).fill(0).map(() => Math.random())
    },
    {
      id: 'track3',
      title: 'Digital Rain',
      artist: 'SoundSphere Games',
      duration: '2:58',
      genre: 'Ambient',
      bpm: 95,
      key: 'C',
      likes: 2156,
      plays: 28901,
      downloadUrl: '#',
      waveformData: Array(100).fill(0).map(() => Math.random())
    },
    {
      id: 'track4',
      title: 'Quantum Beat',
      artist: 'SoundSphere Games',
      duration: '3:33',
      genre: 'Dubstep',
      bpm: 150,
      key: 'F#m',
      likes: 673,
      plays: 9876,
      downloadUrl: '#',
      waveformData: Array(100).fill(0).map(() => Math.random())
    }
  ];

  const handlePlayPause = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleLike = (trackId: string) => {
    setLikedTracks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(trackId)) {
        newSet.delete(trackId);
      } else {
        newSet.add(trackId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Music <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of original game soundtracks and interactive music experiences.
            Create, share, and discover musical masterpieces.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Track List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Tracks</h2>
            
            {tracks.map((track) => (
              <Card key={track.id} className="bg-black/30 border-white/20 hover:bg-black/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      {/* Play/Pause Button */}
                      <Button
                        size="lg"
                        onClick={() => handlePlayPause(track)}
                        className={`rounded-full w-12 h-12 p-0 ${
                          currentTrack?.id === track.id && isPlaying
                            ? 'bg-red-600 hover:bg-red-700'
                            : 'bg-green-600 hover:bg-green-700'
                        }`}
                      >
                        {currentTrack?.id === track.id && isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5 ml-0.5" />
                        )}
                      </Button>

                      {/* Track Info */}
                      <div className="flex-1">
                        <h3 className="text-white text-lg font-semibold">{track.title}</h3>
                        <p className="text-gray-400">{track.artist}</p>
                        
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {track.genre}
                          </Badge>
                          <span className="text-gray-500 text-sm">{track.duration}</span>
                          <span className="text-gray-500 text-sm">{track.bpm} BPM</span>
                          <span className="text-gray-500 text-sm">Key: {track.key}</span>
                        </div>
                      </div>

                      {/* Track Actions */}
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(track.id)}
                          className="text-gray-400 hover:text-red-400"
                        >
                          <Heart 
                            className={`h-4 w-4 ${likedTracks.has(track.id) ? 'fill-red-400 text-red-400' : ''}`} 
                          />
                          <span className="ml-1 text-sm">{track.likes}</span>
                        </Button>

                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <Share className="h-4 w-4" />
                        </Button>

                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Waveform Visualization */}
                  <div className="mt-4 h-12 flex items-end space-x-1 bg-black/20 rounded p-2">
                    {track.waveformData.map((amplitude, i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-t from-purple-600 to-pink-400 rounded-sm transition-all duration-300 ${
                          currentTrack?.id === track.id && isPlaying ? 'opacity-100' : 'opacity-50'
                        }`}
                        style={{
                          height: `${Math.max(2, amplitude * 32)}px`,
                          width: '2px'
                        }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Music Visualizer */}
          <div className="lg:col-span-1">
            <Card className="bg-black/30 border-white/20 h-96 sticky top-24">
              <CardHeader>
                <CardTitle className="text-white">
                  {currentTrack ? 'Now Playing' : 'Music Visualizer'}
                </CardTitle>
                {currentTrack && (
                  <CardDescription className="text-gray-300">
                    {currentTrack.title} - {currentTrack.artist}
                  </CardDescription>
                )}
              </CardHeader>
              
              <CardContent className="h-64">
                <CSS3MusicVisualizer isPlaying={isPlaying} track={currentTrack} />
              </CardContent>
            </Card>

            {/* Music Creation Tools */}
            <Card className="bg-black/30 border-white/20 mt-4">
              <CardHeader>
                <CardTitle className="text-white text-lg">Create Your Own</CardTitle>
                <CardDescription className="text-gray-300">
                  Use our tools to create music
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Open Music Studio
                </Button>
                
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Generate Random Track
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
