import { Brain, Code2, Database, TestTube2, User } from "lucide-react";
import { skillGroups } from "../data/projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const focus = [
  { icon: Code2, label: "Full-stack" },
  { icon: Database, label: "Data" },
  { icon: Brain, label: "ML" },
  { icon: TestTube2, label: "Testing" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          index="02"
          label="About"
          title="Engineering mindset, product habits."
          icon={<User className="size-3.5" aria-hidden />}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="relative overflow-hidden border border-border bg-surface p-6">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" aria-hidden />
              <div className="relative flex aspect-[4/5] flex-col justify-between">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  <span>MS / 2026</span>
                  <span>Karachi</span>
                </div>
                <div className="font-mono text-[clamp(4rem,12vw,8rem)] font-medium leading-none tracking-[-0.08em] text-accent">
                  MS
                </div>
                <div>
                  <p className="text-sm font-medium">Muhammad Shahbaz</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Full-stack · AI/ML · Karachi, PK
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-px border border-border bg-border">
              {focus.map((item) => (
                <div key={item.label} className="flex items-center gap-2 bg-surface px-3 py-2.5">
                  <item.icon className="size-3.5 text-accent" aria-hidden />
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 text-sm leading-7 text-muted sm:text-base">
              <p>
                I&apos;m a full-stack engineer from Karachi. I started with frontend and eCommerce,
                then kept following the hard parts into APIs, data models, and services in Rust and
                Python.
              </p>
              <p>
                For the last year I&apos;ve been teaching web development at Aptech — 100+ students
                across frontend, backend and capstone work. Teaching forced me to make the basics
                precise: state, data flow, auth, testing, and the difference between a demo and
                something that holds up.
              </p>
              <p>
                My data work comes from engineering coursework in energy and condition monitoring.
                I like problems where the model has to be evaluated honestly — including the cases
                where the answer is &ldquo;this does not generalise.&rdquo;
              </p>
              <p>
                Currently building MechSense, an industrial machine-health monitor, and looking for
                a full-time full-stack or AI/ML engineering role.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {group.label}
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-xs text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
