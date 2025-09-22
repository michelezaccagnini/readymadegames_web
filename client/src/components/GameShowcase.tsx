import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Play, Download, Star, Users, Calendar } from 'lucide-react';

interface Game {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'mobile' | 'unity' | 'web';
  platform: string[];
  rating: number;
  downloads: string;
  releaseDate: string;
  features: string[];
  screenshots: string[];
  videoUrl?: string;
  downloadLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export default function GameShowcase() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Sample game data - in a real app this would come from an API
  const games: Game[] = [
    {
      id: 'rhythm-sphere',
      title: 'Rhythm Sphere',
      description: 'Tap to the beat in this immersive 3D music game',
      longDescription: 'Experience music like never before in Rhythm Sphere, where every beat creates visual magic. Navigate through stunning 3D environments while creating your own musical masterpieces.',
      category: 'mobile',
      platform: ['iOS', 'Android'],
      rating: 4.8,
      downloads: '500K+',
      releaseDate: '2024',
      features: ['3D Graphics', 'Original Soundtrack', 'Multiplayer', 'Level Editor'],
      screenshots: ['/api/placeholder/300/400', '/api/placeholder/300/400', '/api/placeholder/300/400'],
      downloadLinks: [
        { platform: 'App Store', url: '#', icon: '🍎' },
        { platform: 'Google Play', url: '#', icon: '🤖' }
      ]
    },
    {
      id: 'sound-waves',
      title: 'Sound Waves',
      description: 'Create music through gesture and movement',
      longDescription: 'Sound Waves transforms your device into a musical instrument. Use intuitive gestures to create beautiful melodies and share them with the world.',
      category: 'unity',
      platform: ['PC', 'Mac', 'VR'],
      rating: 4.6,
      downloads: '250K+',
      releaseDate: '2024',
      features: ['VR Support', 'Hand Tracking', 'Cloud Sync', 'AI Composition'],
      screenshots: ['/api/placeholder/300/400', '/api/placeholder/300/400', '/api/placeholder/300/400'],
      videoUrl: '#',
      downloadLinks: [
        { platform: 'Steam', url: '#', icon: '🎮' },
        { platform: 'Oculus Store', url: '#', icon: '🥽' }
      ]
    },
    {
      id: 'melody-maker',
      title: 'Melody Maker',
      description: 'Web-based music creation for everyone',
      longDescription: 'No downloads required! Create, edit, and share your musical creations directly in your browser with our powerful web-based music creation tools.',
      category: 'web',
      platform: ['Web Browser'],
      rating: 4.7,
      downloads: '1M+',
      releaseDate: '2024',
      features: ['Browser-based', 'Real-time Collaboration', 'Export to MP3', 'Social Sharing'],
      screenshots: ['/api/placeholder/300/400', '/api/placeholder/300/400', '/api/placeholder/300/400'],
      downloadLinks: [
        { platform: 'Play Now', url: '#', icon: '🌐' }
      ]
    }
  ];

  const filteredGames = games;

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Games</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our collection of innovative music games that blend creativity, 
            technology, and pure fun. Available on mobile, desktop, and web.
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredGames.map((game) => (
            <Card key={game.id} className="bg-black/30 border-white/20 hover:bg-black/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedGame(game)}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-xl">{game.title}</CardTitle>
                    <CardDescription className="text-gray-300 mt-2">
                      {game.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {game.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Screenshot placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                    <Play className="h-12 w-12 text-white/60" />
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{game.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{game.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{game.releaseDate}</span>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2">
                    {game.platform.map((platform) => (
                      <Badge key={platform} variant="outline" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>

                  {/* Download Links */}
                  <div className="flex flex-wrap gap-2">
                    {game.downloadLinks.map((link) => (
                      <Button
                        key={link.platform}
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle download link click
                        }}
                      >
                        <span className="mr-1">{link.icon}</span>
                        {link.platform}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Game Detail Modal */}
        {selectedGame && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
               onClick={() => setSelectedGame(null)}>
            <Card className="bg-black/90 border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl">{selectedGame.title}</CardTitle>
                    <CardDescription className="text-gray-300 mt-2 text-lg">
                      {selectedGame.longDescription}
                    </CardDescription>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedGame(null)} className="text-white">
                    ✕
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedGame.features.map((feature) => (
                      <Badge key={feature} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Download Links */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-3">Get the Game</h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedGame.downloadLinks.map((link) => (
                      <Button
                        key={link.platform}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        <span className="mr-2">{link.icon}</span>
                        {link.platform}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
