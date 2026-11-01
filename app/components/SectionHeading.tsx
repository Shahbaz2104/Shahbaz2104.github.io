import type { ReactNode } from "react";

export function SectionHeading({
  index,
  label,
  title,
  description,
  icon,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-3">
          {icon ? (
            <span className="flex size-7 items-center justify-center border border-border bg-surface text-accent">
              {icon}
            </span>
          ) : null}
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            <span className="text-accent">{index}</span>
            <span className="mx-3 inline-block h-px w-8 translate-y-[-2px] bg-border" aria-hidden />
            {label}
          </span>
        </div>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xs text-sm leading-6 text-muted sm:text-right">{description}</p>
      ) : null}
    </div>
  );
}
