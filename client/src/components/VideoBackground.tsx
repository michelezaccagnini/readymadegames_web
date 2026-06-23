import { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  videoPath: string;
  className?: string;
  startTime?: number;
}

export default function VideoBackground({ videoPath, className = "", startTime = 0 }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    // We handle looping manually so we can loop back to startTime instead of 0
    video.loop = false;
    video.autoplay = true;
    video.playsInline = true;

    const seekToStart = () => {
      try {
        video.currentTime = startTime;
      } catch {
        // Some browsers throw if metadata isn't ready yet; the loadedmetadata handler will retry.
      }
    };

    const handleLoadedMetadata = () => {
      seekToStart();
    };

    const handleEnded = () => {
      seekToStart();
      video.play().catch(() => {});
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    if (video.readyState >= 1) {
      seekToStart();
    }

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        console.log('Autoplay prevented, video will start on user interaction');
      }
    };

    playVideo();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [startTime, videoPath]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
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
