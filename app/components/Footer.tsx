import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          © 2026 Muhammad Shahbaz
        </p>
        <p className="text-xs text-muted">
          Built with Next.js, Tailwind CSS and Framer Motion. Deployed on GitHub Pages.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUp className="size-3.5" aria-hidden />
        </a>
      </div>
    </footer>
  );
}
