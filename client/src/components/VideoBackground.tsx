import { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  videoPath: string;
  className?: string;
}

export default function VideoBackground({ videoPath, className = "" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.playsInline = true;
      
      // Ensure video plays
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Autoplay prevented, video will start on user interaction');
        }
      };
      
      playVideo();
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        autoPlay
        playsInline
      >
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}
