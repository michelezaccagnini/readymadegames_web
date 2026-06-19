import { FaGooglePlay } from "react-icons/fa";

interface GooglePlayBadgeProps {
  href: string;
  className?: string;
}

export default function GooglePlayBadge({ href, className = "" }: GooglePlayBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className={`inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white border border-white/20 hover:bg-neutral-900 hover:border-white/40 transition-colors shadow-lg ${className}`}
    >
      <FaGooglePlay className="h-6 w-6" aria-hidden="true" />
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wide text-gray-300">
          Get it on
        </span>
        <span className="text-lg font-semibold">Google Play</span>
      </span>
    </a>
  );
}
