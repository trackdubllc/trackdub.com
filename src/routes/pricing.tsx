import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, SectionNumber, SiteShell } from "@/components/site-shell";
import { SectionHeading } from "@/components/section-heading";
import { PRICING_PLANS } from "@/lib/pricing";
import { PlanCard } from "@/components/plan-card";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing · Trackdub" },
      {
        name: "description",
        content:
          "Trackdub pricing: Free desktop app with a watermark and 5-minute export cap, Pro at $149 one-time with no subscription, Studio in development. No recurring fees.",
      },
      { property: "og:title", content: "Pricing · Trackdub" },
      {
        property: "og:description",
        content:
          "Free, Pro ($149 one-time), and Studio (in development). No subscriptions, no per-minute billing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Trackdub",
          description: "Local-first desktop workstation for AI video dubbing.",
          offers: PRICING_PLANS.filter((p) => p.price.startsWith("$") || p.price === "Free").map(
            (p) => ({
              "@type": "Offer",
              name: p.name,
              price: p.price === "Free" ? "0" : p.price.replace("$", ""),
              priceCurrency: "USD",
            }),
          ),
        }),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <SiteShell>
      <Header />
      <Plans />
      <Terms />
      <Contact />
    </SiteShell>
  );
}

function Header() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="00" label="Pricing" />
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.03] tracking-tight text-foreground sm:text-6xl">
          One-time purchase. No subscription, ever.
        </h1>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          Trackdub is priced like software you own, not software you rent. Free gets you the full
          pipeline with a watermark and a 5-minute export cap, commercial use included. Pro removes
          both for a one-time $149.
        </p>
      </Container>
    </section>
  );
}

function Plans() {
  const plans = PRICING_PLANS;
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-20 sm:py-28">
        <ul
          role="list"
          className="grid list-none divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {plans.map((p) => (
            <PlanCard
              key={p.name}
              plan={p}
              heading="h2"
              className="relative bg-background p-8 transition-colors hover:bg-surface/50 focus-within:bg-surface/50"
              ctaClassName="inline-flex items-baseline gap-1 border-b border-foreground/40 pb-0.5 text-foreground hover:border-accent hover:text-accent"
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Terms() {
  const items: [string, string][] = [
    [
      "What does the Free watermark look like?",
      'A small "Made with Trackdub" mark burned into the bottom-right corner during export. It\'s removed automatically once a valid Pro license is detected.',
    ],
    [
      "Does Free block commercial use?",
      "No. Free is commercial-use-safe from day one; the only gates are the watermark and the 5-minute export cap. Every bundled model is commercial-safe by manifest, so nothing research-only ever loads, on any tier.",
    ],
    [
      "How does the Pro license work?",
      "A machine-bound license key, validated locally at app start. No phone-home, no internet required to keep working. One license covers 2 machine activations (desktop + laptop).",
    ],
    [
      "What happens if my Pro license fails to validate?",
      "Trackdub reverts to the Free tier (watermark and 5-minute cap), never a crash.",
    ],
    [
      "Is there a subscription option?",
      "No. Pro is a one-time purchase. Paid major-version upgrades (v2.0, etc.) are separate, optional purchases, never a recurring charge for using the version you bought.",
    ],
    [
      "What's in Studio?",
      "Batch and multi-GPU processing, a 4K-optimized export pipeline, and commercial redistribution rights for agencies. It's real but unfinished, and we don't sell it until at least two of those features ship.",
    ],
  ];
  return (
    <section className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          eyebrow={<SectionNumber n="01" label="Terms" />}
          title="The fine print, in plain language."
        />
        <dl className="mt-12">
          {items.map(([q, a], i) => (
            <div
              key={q}
              className={`grid gap-4 py-6 md:grid-cols-[280px_1fr] md:gap-10 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <dt className="font-serif text-[20px] leading-snug text-foreground">{q}</dt>
              <dd className="text-[16px] leading-relaxed text-muted-foreground">{a}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 text-center sm:py-28">
        <SectionNumber n="02" label="Contact" />
        <p className="mx-auto mt-6 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl">
          Buying for a team, or need an on-prem deployment?
        </p>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
          Write to{" "}
          <a
            href="mailto:hello@trackdub.com?subject=Trackdub%20Team%2FOn-prem"
            className="border-b border-foreground/40 pb-0.5 text-foreground hover:border-accent hover:text-accent"
          >
            hello@trackdub.com
          </a>
          . Comparing cloud vs local cost models? See the{" "}
          <Link
            to="/guides/ai-dubbing-guide"
            className="border-b border-foreground/40 pb-0.5 text-foreground hover:border-accent hover:text-accent"
          >
            AI dubbing guide
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
