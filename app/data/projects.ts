export type IconName =
  | "activity"
  | "heart-pulse"
  | "dumbbell"
  | "orbit"
  | "line-chart"
  | "wallet"
  | "hospital"
  | "building"
  | "zap"
  | "languages"
  | "cog"
  | "list-checks";

export interface Project {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  icon: IconName;
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    index: "01",
    title: "MechSense",
    subtitle: "Industrial machine-health monitoring",
    description:
      "Full-stack condition-monitoring prototype: a FastAPI + PostgreSQL API with threshold detection, anomaly lifecycle, work orders and CSV ingestion, plus a React 19 operations console. 124 backend tests.",
    stack: ["FastAPI", "PostgreSQL", "React 19", "TypeScript", "SQLAlchemy"],
    image: "/projects/mechsense.webp",
    icon: "activity",
    github: "https://github.com/Shahbaz2104/mechsense",
  },
  {
    index: "02",
    title: "PulseWatch",
    subtitle: "Self-hosted uptime monitor",
    description:
      "Rust/axum + SQLite backend with a React operations console. A scheduler with atomic claims, incident state machine, SSRF/DNS-rebinding defence, alert outbox, and 187 tests.",
    stack: ["Rust", "axum", "SQLite", "React 19", "Tokio"],
    image: "/projects/pulsewatch.webp",
    icon: "heart-pulse",
    github: "https://github.com/Shahbaz2104/PulseWatch",
  },
  {
    index: "03",
    title: "Titan Fitness",
    subtitle: "AI-powered gym management platform",
    description:
      "Next.js platform with 16 member pages, 11 admin pages and 95+ REST routes. Stripe payments, Better Auth, role-based access, PWA support, and AI features with rule-based fallbacks.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    image: "/projects/titan-fitness.webp",
    icon: "dumbbell",
    github: "https://github.com/Shahbaz2104/Titan-Fitness-",
    live: "https://titan-fitness-navy.vercel.app",
  },
  {
    index: "04",
    title: "Space Weather Observatory",
    subtitle: "Evidence-first geomagnetic storm dashboard",
    description:
      "Streamlit observatory built on NOAA, GFZ and NASA data: Kp index, solar-wind conditions, a correlation lab, and provenance-bearing exports with explicit scientific caveats.",
    stack: ["Python", "Streamlit", "Plotly", "Pandas"],
    image: "/projects/space-weather.webp",
    icon: "orbit",
    github: "https://github.com/Shahbaz2104/space-weather-observatory",
    live: "https://space-weather-observatory-4xedxr5f2n5vpym7t5ix7p.streamlit.app/",
  },
  {
    index: "05",
    title: "SaaS MRR Forecasting",
    subtitle: "Leak-free time-series evaluation",
    description:
      "Prophet, Holt-Winters, SARIMA and a naive baseline under holdout and walk-forward validation. Includes a real Prophet leakage bug, the corrected numbers, and an honest conclusion.",
    stack: ["Python", "Prophet", "statsmodels", "pandas"],
    image: "/projects/mrr-forecast.webp",
    icon: "line-chart",
    github: "https://github.com/Shahbaz2104/saas-mrr-forecast",
  },
  {
    index: "06",
    title: "Expense Tracker Pro",
    subtitle: "Full-stack personal finance",
    description:
      "Rust/Axum + SQLite API with a React 19 frontend: budgets, reports, CSV import/export, multi-currency, exact decimal money handling and 164 automated tests.",
    stack: ["Rust", "Axum", "SQLx", "React 19", "Tailwind"],
    image: "/projects/expense-tracker.webp",
    icon: "wallet",
    github: "https://github.com/Shahbaz2104/expense-tracker-pro",
  },
];

export interface MoreProject {
  title: string;
  meta: string;
  icon: IconName;
  github: string;
  live?: string;
}

export const moreProjects: MoreProject[] = [
  {
    title: "Hospital Management System",
    meta: "27 modules · RBAC · billing · pharmacy",
    icon: "hospital",
    github: "https://github.com/Shahbaz2104/Hospital-Management-System",
    live: "https://hospital-management-system-wheat-beta.vercel.app",
  },
  {
    title: "BIOSAF Enterprises",
    meta: "Client site · product catalog · admin dashboard",
    icon: "building",
    github: "https://github.com/Shahbaz2104/Client",
    live: "https://client-nine-gamma-23.vercel.app/",
  },
  {
    title: "ME-446 ASHRAE Energy",
    meta: "Hourly demand ML · honest unseen-building evaluation",
    icon: "zap",
    github: "https://github.com/Shahbaz2104/me446-ashrae-energy",
    live: "https://shahbaz2104-me446-ashrae-energy-dashboardstreamlit-app-quf7ze.streamlit.app/",
  },
  {
    title: "Nihongo Lab",
    meta: "JLPT learning · from-scratch SM-2 engine",
    icon: "languages",
    github: "https://github.com/Shahbaz2104/nihongo-lab",
    live: "https://nihongo-lab-nu.vercel.app",
  },
  {
    title: "Milling CEP",
    meta: "Vibration + current condition monitoring",
    icon: "cog",
    github: "https://github.com/Shahbaz2104/milling-cep",
    live: "https://milling-cep-iguwxgwerngzavkpz2aguj.streamlit.app/",
  },
  {
    title: "Task API",
    meta: "Express · MongoDB · TOTP 2FA · CSV export",
    icon: "list-checks",
    github: "https://github.com/Shahbaz2104/taskapi",
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Rust", "SQL", "PHP"],
  },
  {
    label: "Web & backend",
    items: ["React 19", "Next.js", "Tailwind CSS", "Node.js", "Express", "Laravel"],
  },
  {
    label: "Data & ML",
    items: ["pandas", "NumPy", "scikit-learn", "statsmodels", "Prophet", "Streamlit"],
  },
  {
    label: "Data & storage",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Prisma", "Docker"],
  },
  {
    label: "Quality",
    items: ["Vitest", "pytest", "Playwright", "GitHub Actions", "Zod", "REST"],
  },
];
