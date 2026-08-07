import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  leadClassName = "mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground",
}: {
  eyebrow: ReactNode;
  title: string;
  lead?: ReactNode;
  leadClassName?: string;
}) {
  return (
    <>
      {eyebrow}
      <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {lead ? <p className={leadClassName}>{lead}</p> : null}
    </>
  );
}
