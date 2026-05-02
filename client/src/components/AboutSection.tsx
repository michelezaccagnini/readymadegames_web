import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Code, ExternalLink } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: 'Unity 3D', category: 'Engine' },
    { name: 'C# Programming', category: 'Language' },
    { name: 'Audio Programming', category: 'Specialty' },
    { name: 'Game Design', category: 'Design' },
    { name: 'PureData', category: 'Audio' },
    { name: 'MaxMSP', category: 'Audio' },
    { name: 'VCV Rack', category: 'Audio' },
    { name: 'Plugin Design', category: 'Audio' },
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
            <Card className="bg-black/30 border-white/20">
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <Card className="bg-black/30 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Technical Skills</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white font-medium">{skill.name}</span>
                    <Badge variant="outline" className="text-xs border-white/20 text-gray-300">
                      {skill.category}
                    </Badge>
                  </div>
                ))}
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
