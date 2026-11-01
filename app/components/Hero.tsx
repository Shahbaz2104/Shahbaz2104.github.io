"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download, Mail, MapPin } from "lucide-react";
import { GitHubIcon } from "./icons";

const terminalLines = [
  { command: "whoami", output: "muhammad-shahbaz" },
  { command: "stack", output: "typescript · python · rust" },
  { command: "focus", output: "product engineering + honest ML" },
  { command: "tests", output: "124 passing (MechSense backend)" },
];

const stats = [
  { value: "06", label: "selected projects" },
  { value: "124", label: "backend tests in MechSense" },
  { value: "100+", label: "students taught at Aptech" },
  { value: "03", label: "languages in production" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
              Available for full-time roles
            </span>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Full-stack engineer with an <span className="text-accent">AI/ML</span> edge.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
              I build production web apps end to end — React and Next.js on the front, Python and
              Rust services on the back — and I care about the parts that are easy to fake: tests,
              validation, honest metrics, and failure states.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                View selected work
                <ArrowDownRight className="size-4" aria-hidden />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/40 hover:text-accent"
              >
                Download CV
                <Download className="size-4" aria-hidden />
              </a>
              <a
                href="https://github.com/Shahbaz2104"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex size-11 items-center justify-center border border-border text-muted transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                <GitHubIcon className="size-4" />
              </a>
              <a
                href="mailto:shahbaz21042005@gmail.com"
                aria-label="Email Muhammad Shahbaz"
                className="flex size-11 items-center justify-center border border-border text-muted transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden />
                Karachi, Pakistan
              </span>
              <span className="hidden size-1 rounded-full bg-border sm:block" aria-hidden />
              <span>Open to onsite, hybrid or remote</span>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border border-border bg-surface p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  profile.sh
                </span>
                <div className="flex gap-1.5" aria-hidden>
                  <span className="size-2 rounded-full bg-border" />
                  <span className="size-2 rounded-full bg-border" />
                  <span className="size-2 rounded-full bg-accent/70" />
                </div>
              </div>

              <div className="mt-4 space-y-3 font-mono text-[12.5px] leading-relaxed">
                {terminalLines.map((line) => (
                  <div key={line.command}>
                    <div>
                      <span className="text-accent">$</span> {line.command}
                    </div>
                    <div className="pl-4 text-muted">{line.output}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-border pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  Currently
                </p>
                <p className="mt-1.5 text-xs leading-6 text-muted">
                  Building MechSense, an industrial machine-health monitor. Open to full-time
                  full-stack and AI/ML roles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-5 py-4">
              <p className="font-mono text-2xl tracking-tight">{stat.value}</p>
              <p className="mt-1 font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
