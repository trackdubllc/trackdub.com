export type PricingPlan = {
  name: string;
  price: string;
  note: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

// Single source of truth for the homepage pricing section and the
// standalone /pricing route, so the two can't drift out of sync.
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Personal",
    price: "Free",
    note: "Commercial use allowed",
    features: [
      "Full desktop app, every pipeline stage",
      "All languages and bundled models",
      "CLI access included",
      "Exports watermarked, 5-minute max",
    ],
    cta: "Join the list",
    href: "/?interest=personal#waitlist",
  },
  {
    name: "Pro",
    price: "$149",
    note: "One-time purchase · 2 machine activations",
    features: [
      "Everything in Personal",
      "No watermark, no duration limit",
      "Commercial use license",
      "Lifetime updates within v1.x",
    ],
    cta: "Reserve Pro",
    href: "/?interest=pro#waitlist",
    featured: true,
  },
  {
    name: "Studio",
    price: "In development",
    note: "Post-launch · not sold yet",
    features: [
      "Batch and multi-GPU processing",
      "4K-optimized export pipeline",
      "Commercial redistribution rights",
      "Ships after Pro, once real",
    ],
    cta: "Get updates",
    href: "/?interest=studio#waitlist",
  },
];
