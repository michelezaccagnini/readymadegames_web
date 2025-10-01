import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
}

export default function MusicGallery() {
  const videos: Video[] = [
    {
      id: 'cracked-nuts',
      title: 'Cracked Nuts',
      description: 'A musical journey through rhythmic patterns',
      youtubeId: 'hxG4MtO9VTA',
      thumbnail: 'https://img.youtube.com/vi/hxG4MtO9VTA/maxresdefault.jpg'
    },
    {
      id: 'pluto-4',
      title: 'Pluto is Made of 4',
      description: 'Exploring cosmic sounds and celestial melodies',
      youtubeId: 'z19Irh2WeOY',
      thumbnail: 'https://img.youtube.com/vi/z19Irh2WeOY/maxresdefault.jpg'
    },
    {
      id: 'pluto-3',
      title: 'Pluto is Made of 3',
      description: 'Continuing the planetary musical exploration',
      youtubeId: 'ipzh2vIAfBQ',
      thumbnail: 'https://img.youtube.com/vi/ipzh2vIAfBQ/maxresdefault.jpg'
    },
    {
      id: 'hyperborean-sun',
      title: 'Hyperborean Sun',
      description: 'A journey to the mythical northern lands through sound',
      youtubeId: '-6gBBSq1Zq0',
      thumbnail: 'https://img.youtube.com/vi/-6gBBSq1Zq0/maxresdefault.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Music <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of musical compositions and audio experiences
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="bg-black/30 border-white/20 hover:bg-black/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-xl">{video.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {video.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}