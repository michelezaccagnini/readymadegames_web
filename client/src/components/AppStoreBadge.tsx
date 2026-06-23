import { FaApple } from "react-icons/fa";

interface AppStoreBadgeProps {
  href: string;
  className?: string;
}

export default function AppStoreBadge({ href, className = "" }: AppStoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className={`inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white border border-white/20 hover:bg-neutral-900 hover:border-white/40 transition-colors shadow-lg ${className}`}
    >
      <FaApple className="h-7 w-7" aria-hidden="true" />
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wide text-gray-300">
          Download on the
        </span>
        <span className="text-lg font-semibold">App Store</span>
      </span>
    </a>
  );
}
