import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-5 sm:px-8">
      <span className="flex size-10 items-center justify-center border border-border bg-surface text-accent">
        <Compass className="size-5" aria-hidden />
      </span>
      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        404 / page not found
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-muted">
        The link may be broken, or the page may have moved. Head back to the work that is actually
        here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/40 hover:text-accent"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back home
      </Link>
    </div>
  );
}
