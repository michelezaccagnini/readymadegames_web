import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  FileDown,
  Printer,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SYNTHAESTHESIA_LINKS } from "@/lib/synthaesthesiaMedia";
import manualMd from "@/content/USER_MANUAL.md?raw";

const PAGE_URL = "https://readymade.games/synthaesthesia/manual";
const MANUAL_MD_URL = "/synthaesthesia/USER_MANUAL.md";

export default function SynthaesthesiaManual() {
  return (
    <>
      <Helmet>
        <title>Synesthesia Synth — User Manual</title>
        <meta
          name="description"
          content="The full Synesthesia Synth user manual: gestures, the three voices, parameter categories, spatial sound, the bottom sheet, the gyroscope camera, and the preset library."
        />
        <link rel="canonical" href={PAGE_URL} />
      </Helmet>

      <div className="pt-20 pb-16 px-4 min-h-screen bg-zinc-950 text-gray-100 print:bg-white print:text-zinc-900 print:pt-6">
        <div className="max-w-3xl mx-auto print:max-w-none">
          {/* Top bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <Link
              href="/synthaesthesia"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Synesthesia Synth
            </Link>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.print()}
              >
                <Printer className="mr-2 h-4 w-4" />
                Print / Save as PDF
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <a href={MANUAL_MD_URL} download>
                  <FileDown className="mr-2 h-4 w-4" />
                  Download .md
                </a>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
              >
                <a
                  href={SYNTHAESTHESIA_LINKS.manual}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Canonical on GitHub
                  <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-70" />
                </a>
              </Button>
            </div>
          </div>

          <p className="mb-8 text-sm text-gray-400 border border-white/10 rounded-lg px-4 py-3 print:hidden">
            <strong className="text-gray-200">PDF:</strong> use{" "}
            <span className="text-purple-300">Print / Save as PDF</span> above,
            or your browser&apos;s print dialog (Ctrl+P / ⌘P) — choose
            &quot;Save as PDF&quot; as the destination. The GitHub copy stays
            the canonical source for edits.
          </p>

          <article
            className="prose prose-invert prose-sm md:prose-base max-w-none
              prose-headings:text-white prose-a:text-purple-300
              prose-strong:text-white prose-table:text-sm
              prose-code:text-pink-200 prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/10
              print:prose-neutral print:prose-headings:text-zinc-900 print:prose-strong:text-zinc-900"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => {
                  const isInternalAnchor = href?.startsWith("#");
                  if (isInternalAnchor) {
                    return (
                      <a
                        href={href}
                        className="underline-offset-2 hover:underline"
                      >
                        {children}
                      </a>
                    );
                  }
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-2 hover:underline"
                    >
                      {children}
                    </a>
                  );
                },
                h2: ({ children, ...props }) => {
                  const text = String(
                    Array.isArray(children) ? children.join("") : children,
                  );
                  const id = text
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, "")
                    .trim()
                    .replace(/\s+/g, "-");
                  return (
                    <h2 id={id} {...props}>
                      {children}
                    </h2>
                  );
                },
                h3: ({ children, ...props }) => {
                  const text = String(
                    Array.isArray(children) ? children.join("") : children,
                  );
                  const id = text
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, "")
                    .trim()
                    .replace(/\s+/g, "-");
                  return (
                    <h3 id={id} {...props}>
                      {children}
                    </h3>
                  );
                },
              }}
            >
              {manualMd}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </>
  );
}
