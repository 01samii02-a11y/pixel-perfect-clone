import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <As className="mt-5 font-display text-3xl leading-[1.08] tracking-tight text-foreground md:text-4xl">
        {title}
      </As>
      {intro ? (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}
