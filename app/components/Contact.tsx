import { ArrowUpRight, FileText, Mail, MapPin, MessageCircle } from "lucide-react";
import { GitHubIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          index="04"
          label="Contact"
          title="Let's build something that holds up."
          description="I'm looking for a full-time full-stack or AI/ML engineering role. If you have a problem that needs both product sense and engineering depth, I'd like to hear about it."
          icon={<Mail className="size-3.5" aria-hidden />}
        />

        <div className="mt-12 grid gap-8 border-t border-border pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
              The fastest way to reach me is email. I usually reply within a day.
            </p>
            <a
              href="mailto:shahbaz21042005@gmail.com"
              className="mt-6 inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
            >
              <Mail className="size-4" aria-hidden />
              shahbaz21042005@gmail.com
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <MapPin className="size-3.5" aria-hidden />
              Karachi, Pakistan · GMT+5
            </p>
          </div>

          <div className="flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            <a
              href="https://github.com/Shahbaz2104"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <GitHubIcon className="size-3.5" />
              GitHub
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
            <a
              href="https://bsky.app/profile/s4i21.bsky.social"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <MessageCircle className="size-3.5" aria-hidden />
              Bluesky
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <FileText className="size-3.5" aria-hidden />
              Resume
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
