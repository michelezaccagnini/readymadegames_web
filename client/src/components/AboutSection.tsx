import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Code, Music, Gamepad2, Zap, Users, Award, ExternalLink } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: 'Unity 3D', level: 95, category: 'Engine' },
    { name: 'C# Programming', level: 90, category: 'Language' },
    { name: 'Audio Programming', level: 85, category: 'Specialty' },
    { name: 'Game Design', level: 88, category: 'Design' },
    { name: 'Three.js', level: 80, category: 'Web' },
    { name: 'React', level: 82, category: 'Web' },
    { name: 'Web Audio API', level: 75, category: 'Audio' },
    { name: 'FMOD', level: 78, category: 'Audio' }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Indie Game Award Winner',
      description: 'Best Audio Design 2024',
      year: '2024'
    },
    {
      icon: Users,
      title: '1M+ Downloads',
      description: 'Across all game titles',
      year: '2024'
    },
    {
      icon: Zap,
      title: 'Featured by Unity',
      description: 'Made with Unity showcase',
      year: '2023'
    },
    {
      icon: Music,
      title: 'GDC Speaker',
      description: 'Audio-Visual Game Design',
      year: '2023'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Started Journey',
      description: 'Began exploring Unity and game development while studying computer science.'
    },
    {
      year: '2021',
      title: 'First Release',
      description: 'Launched first mobile game "Rhythm Pulse" which gained 100K+ downloads.'
    },
    {
      year: '2022',
      title: 'Audio Specialization',
      description: 'Focused on audio-visual game development and procedural music generation.'
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Featured by Unity and spoke at GDC about interactive music systems.'
    },
    {
      year: '2024',
      title: 'SoundSphere Games',
      description: 'Founded studio focused on innovative music-driven gaming experiences.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Unity developer creating innovative music games that blend technology, 
            creativity, and interactive experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Bio */}
          <div className="lg:col-span-2">
            <Card className="bg-black/30 border-white/20 mb-8">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Code className="mr-3 h-6 w-6 text-purple-400" />
                  Unity Developer & Music Game Designer
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Specializing in audio-visual interactive experiences
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm a passionate game developer with a unique focus on music-driven gaming experiences. 
                  My journey began with a fascination for how sound and visuals can create emotional 
                  connections in interactive media.
                </p>
                
                <p className="leading-relaxed">
                  With expertise in Unity 3D, C#, and audio programming, I create games that don't just 
                  play music—they let players become part of the musical experience. From procedural 
                  music generation to real-time audio visualization, I explore the boundaries between 
                  gaming and musical expression.
                </p>
                
                <p className="leading-relaxed">
                  My work has been recognized by Unity, featured in indie game showcases, and has 
                  reached over 1 million players worldwide. I believe that the future of gaming lies 
                  in experiences that blur the lines between different forms of creative expression.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                    Unity Expert
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    Audio Programming
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600/20 text-green-300">
                    Game Design
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-600/20 text-pink-300">
                    Music Technology
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-black/30 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Journey Timeline</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                        {index < timeline.length - 1 && (
                          <div className="w-px h-16 bg-purple-400/30 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-purple-400 font-semibold">{item.year}</span>
                          <h3 className="text-white font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <Card className="bg-black/30 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Technical Skills</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-black/30 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Achievements</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className="h-6 w-6 text-purple-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">{achievement.title}</h4>
                        <p className="text-gray-300 text-sm">{achievement.description}</p>
                        <span className="text-purple-400 text-xs">{achievement.year}</span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-400/30">
              <CardHeader>
                <CardTitle className="text-white text-xl">Let's Collaborate</CardTitle>
                <CardDescription className="text-gray-300">
                  Interested in working together or learning more?
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Portfolio
                </Button>
                
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
