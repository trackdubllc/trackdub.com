import type { ReactNode } from "react";

const DEFAULT_H2_CLASS =
  "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl";
const DEFAULT_LEAD_CLASS = "mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  h2ClassName = DEFAULT_H2_CLASS,
  leadClassName = DEFAULT_LEAD_CLASS,
}: {
  eyebrow: ReactNode;
  title: string;
  lead?: ReactNode;
  h2ClassName?: string;
  leadClassName?: string;
}) {
  return (
    <>
      {eyebrow}
      <h2 className={h2ClassName}>{title}</h2>
      {lead ? <p className={leadClassName}>{lead}</p> : null}
    </>
  );
}
