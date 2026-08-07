import type { PricingPlan } from "@/lib/pricing";

// Shared plan card used by the homepage pricing section and the standalone
// /pricing page. The card body (price, note, feature list, CTA) is identical
// on both pages — only the heading level and a few page-specific classes
// differ, so those are props instead of copy-paste.
export function PlanCard({
  plan,
  heading: Heading = "h3",
  className = "",
  ctaClassName = "",
}: {
  plan: PricingPlan;
  heading?: "h2" | "h3";
  className?: string;
  ctaClassName?: string;
}) {
  const titleId = `plan-${plan.name.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <li className={className}>
      <article aria-labelledby={titleId}>
        <header className="flex items-center gap-3">
          <Heading id={titleId} className="font-serif text-2xl text-foreground">
            {plan.name}
          </Heading>
          {plan.featured && (
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              Recommended
            </span>
          )}
        </header>
        <div
          className={`mt-5 font-serif text-5xl tracking-tight ${plan.featured ? "text-accent" : "text-foreground"}`}
        >
          {plan.price}
        </div>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {plan.note}
        </p>
        <ul className="mt-8 space-y-3 text-[15px] text-foreground">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-3">
              <span className="mt-2 h-px w-4 flex-none bg-accent" aria-hidden />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a
            href={plan.href}
            aria-label={`${plan.cta} · ${plan.name} plan`}
            className={ctaClassName}
          >
            {plan.cta} <span aria-hidden>→</span>
          </a>
        </div>
      </article>
    </li>
  );
}
