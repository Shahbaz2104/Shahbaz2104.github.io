import { Building2, FlaskConical, GraduationCap, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const experience = [
  {
    period: "Jun 2025 — Oct 2026",
    role: "Programming Instructor",
    org: "Aptech",
    icon: GraduationCap,
    points: [
      "Taught HTML, CSS, JavaScript, TypeScript, React, Node.js, PHP and Laravel to 100+ beginner and intermediate students.",
      "Ran code reviews and capstone briefs; taught Git workflows, responsive layout, accessibility and debugging.",
      "Built the course material around shipping real interfaces, not isolated syntax exercises.",
    ],
  },
  {
    period: "2025 — Present",
    role: "Client & Independent Work",
    org: "Freelance / self-directed",
    icon: Rocket,
    points: [
      "Delivered BIOSAF Enterprises' corporate site, product catalog and JWT-protected admin dashboard.",
      "Built Titan Fitness (Next.js, Prisma, Stripe, Better Auth) and PulseWatch (Rust, axum, SQLite, React 19).",
      "Currently building MechSense, a machine-health monitoring platform with FastAPI, PostgreSQL and React.",
    ],
  },
  {
    period: "Engineering coursework",
    role: "Data & ML Projects",
    org: "ME-446 / ME-438",
    icon: FlaskConical,
    points: [
      "Built an hourly ASHRAE energy-demand pipeline and reported the model's negative R² on unseen buildings rather than hiding it.",
      "Explored vibration and current condition monitoring, plus geomagnetic-storm forecasts, with reproducible Python pipelines.",
      "Focused on leakage-free validation, clear baselines and honest conclusions.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          index="03"
          label="Experience"
          title="Teaching, shipping, and evaluating."
          description="The short version: I build, I teach, and I try to measure the result honestly."
          icon={<Building2 className="size-3.5" aria-hidden />}
        />

        <div className="mt-12 border-t border-border">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.05}>
              <article className="grid gap-6 border-b border-border py-8 lg:grid-cols-[0.32fr_0.68fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center border border-border bg-surface text-accent">
                      <item.icon className="size-4" aria-hidden />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      {item.period}
                    </p>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted">{item.org}</p>
                </div>
                <ul className="space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
