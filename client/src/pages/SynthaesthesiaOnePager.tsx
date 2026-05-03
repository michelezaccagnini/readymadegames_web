import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, FileDown, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import onePagerMd from "@/content/PRESS_ONE_PAGER.md?raw";

const ONE_PAGER_MD_URL = "/synthaesthesia/PRESS_ONE_PAGER.md";
const GITHUB_SOURCE =
  "https://github.com/michelezaccagnini/Synthaesthesia/blob/ios-build/press/PRESS_ONE_PAGER.md";

export default function SynthaesthesiaOnePager() {
  return (
    <>
      <Helmet>
        <title>Synthaesthesia — Press one-pager</title>
        <meta
          name="description"
          content="Press one-pager for Synthaesthesia: facts, assets, and story. Printable; save as PDF from your browser."
        />
        <link rel="canonical" href="https://readymade.games/synthaesthesia/press/one-pager" />
      </Helmet>

      <div className="pt-20 pb-16 px-4 min-h-screen bg-zinc-950 text-gray-100 print:bg-white print:text-zinc-900 print:pt-6">
        <div className="max-w-3xl mx-auto print:max-w-none">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <Link
              href="/synthaesthesia/press"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to press kit
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
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <a href={ONE_PAGER_MD_URL} download>
                  <FileDown className="mr-2 h-4 w-4" />
                  Download .md
                </a>
              </Button>
            </div>
          </div>

          <p className="mb-8 text-sm text-gray-400 border border-white/10 rounded-lg px-4 py-3 print:hidden">
            <strong className="text-gray-200">PDF:</strong> use{" "}
            <span className="text-purple-300">Print / Save as PDF</span> above, or your
            browser&apos;s print dialog (Ctrl+P / ⌘P) — choose &quot;Save as PDF&quot; as the
            destination.{" "}
            <a
              href={GITHUB_SOURCE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white underline"
            >
              Source file on GitHub
            </a>{" "}
            stays the canonical copy for edits.
          </p>

          <article
            className="prose prose-invert prose-sm md:prose-base max-w-none 
              prose-headings:text-white prose-a:text-purple-300 
              prose-strong:text-white prose-table:text-sm
              print:prose-neutral print:prose-headings:text-zinc-900 print:prose-strong:text-zinc-900"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-2 hover:underline"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {onePagerMd}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </>
  );
}
