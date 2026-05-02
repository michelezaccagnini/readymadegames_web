export default function handler(req, res) {
  const games = [
    {
      id: 'rhythm-sphere',
      title: 'Rhythm Sphere',
      description: 'Tap to the beat in this immersive 3D music game',
      category: 'mobile',
      platform: ['iOS', 'Android'],
      rating: 4.8,
      downloads: '500K+',
      releaseDate: '2024'
    },
    {
      id: 'sound-waves',
      title: 'Sound Waves',
      description: 'Create music through gesture and movement',
      category: 'unity',
      platform: ['PC', 'Mac', 'VR'],
      rating: 4.6,
      downloads: '250K+',
      releaseDate: '2024'
    },
    {
      id: 'melody-maker',
      title: 'Melody Maker',
      description: 'Web-based music creation for everyone',
      category: 'web',
      platform: ['Web Browser'],
      rating: 4.7,
      downloads: '1M+',
      releaseDate: '2024'
    }
  ];

  res.status(200).json({ games });
}

