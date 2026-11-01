import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  Briefcase,
  Building2,
  Cog,
  Dumbbell,
  HeartPulse,
  Hospital,
  Languages,
  LineChart,
  ListChecks,
  Orbit,
  Wallet,
  Zap,
} from "lucide-react";
import { moreProjects, projects } from "../data/projects";
import { GitHubIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = {
  activity: Activity,
  "heart-pulse": HeartPulse,
  dumbbell: Dumbbell,
  orbit: Orbit,
  "line-chart": LineChart,
  wallet: Wallet,
  hospital: Hospital,
  building: Building2,
  zap: Zap,
  languages: Languages,
  cog: Cog,
  "list-checks": ListChecks,
};

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          index="01"
          label="Selected work"
          title="Things I've built, end to end."
          description="Six projects across full-stack product work, systems programming, and honest data/ML evaluation."
          icon={<Briefcase className="size-3.5" aria-hidden />}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = icons[project.icon];

            return (
              <Reveal key={project.title} delay={index * 0.04} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden border border-border bg-surface transition-colors duration-300 hover:border-accent/50">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
                    <Image
                      src={project.image}
                      alt={`${project.title} interface screenshot`}
                      fill
                      priority={index < 2}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0"
                      aria-hidden
                    />
                    <span className="absolute left-4 top-4 flex size-9 items-center justify-center border border-white/15 bg-black/45 text-white backdrop-blur-sm">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="absolute right-4 top-4 border border-white/15 bg-black/45 px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-white backdrop-blur-sm">
                      {project.index}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                          {project.subtitle}
                        </p>
                      </div>
                      <a
                        href={project.live ?? project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="text-muted transition-colors hover:text-accent"
                      >
                        <ArrowUpRight className="size-5" aria-hidden />
                      </a>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>

                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center gap-4 pt-6">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                        >
                          Live demo
                          <ArrowUpRight className="size-3.5" aria-hidden />
                        </a>
                      ) : null}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        Source
                        <GitHubIcon className="size-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              More work
            </h3>
            <a
              href="https://github.com/Shahbaz2104?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
            >
              All repositories
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>

          <div className="mt-4">
            {moreProjects.map((project, index) => {
              const Icon = icons[project.icon];

              return (
                <div
                  key={project.title}
                  className="group grid gap-2 border-b border-border py-4 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center border border-border bg-surface text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="font-mono text-[11px] text-muted">
                      {String(index + projects.length + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium transition-colors hover:text-accent"
                    >
                      {project.title}
                    </a>
                    <p className="mt-0.5 text-xs text-muted">{project.meta}</p>
                  </div>
                  <div className="flex items-center gap-3 sm:justify-end">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent hover:underline"
                      >
                        Live
                      </a>
                    ) : null}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
