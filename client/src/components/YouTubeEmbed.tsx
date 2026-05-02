import { cn } from "@/lib/utils";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  /** Muted autoplay + loop — typical above-the-fold hero */
  ambient?: boolean;
};

export function YouTubeEmbed({
  videoId,
  title,
  className,
  ambient,
}: YouTubeEmbedProps) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
  });
  if (ambient) {
    params.set("autoplay", "1");
    params.set("mute", "1");
    params.set("loop", "1");
    params.set("playlist", videoId);
    params.set("playsinline", "1");
  }
  const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden bg-black",
        className,
      )}
    >
      <iframe
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={title}
      />
    </div>
  );
}
