import { Link } from "wouter";

const CONTACT_EMAIL = "info@readymade.games";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Readymade Games. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link
            href="/press"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Press
          </Link>
          <Link
            href="/synthaesthesia/press"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Synthaesthesia Press Kit
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href="/privacy-policy.html"
            className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
