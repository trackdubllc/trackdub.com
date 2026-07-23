import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Cpu,
  Download,
  FileAudio,
  Github,
  Languages,
  Layers,
  Menu,
  MonitorPlay,
  Package,
  Pause,
  Play,
  Radio,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Users,
  Volume2,
  Waves,
  Wrench,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trackdub — Dub videos without giving up control" },
      {
        name: "description",
        content:
          "Trackdub is a Windows desktop workstation for AI video dubbing. Translate, voice, and mix your video in one workflow — inspect every stage, fix what needs fixing, and keep the rest.",
      },
      { property: "og:title", content: "Trackdub — Dub videos without giving up control" },
      {
        property: "og:description",
        content:
          "A desktop AI dubbing workstation with stage-by-stage control, local acceleration, and resumable jobs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NAV = [
  { href: "#product", label: "Product" },
  { href: "#workflow", label: "Workflow" },
  { href: "#performance", label: "Performance" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-foreground">
      <TopNav />
      <main>
        <Hero />
        <TrustStrip />
        <Workflow />
        <Control />
        <Performance />
        <Features />
        <Comparison />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group flex items-center gap-2 ${className}`} aria-label="Trackdub home">
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-secondary">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
          <path d="M3 12h2M7 8v8M11 5v14M15 9v6M19 11v2M21 12h-2" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-tight">
        trackdub<span className="text-primary">.</span>
      </span>
    </a>
  );
}

function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Wordmark />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/trackdub"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <CTAButton href="#pricing" size="sm">
            Get Trackdub
          </CTAButton>
        </div>
        <button
          className="md:hidden rounded-md p-2 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col p-3" aria-label="Mobile">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <CTAButton href="#pricing" className="mt-2 justify-center">
              Get Trackdub
            </CTAButton>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- Buttons ---------- */

function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const sizes = size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2.5 text-sm";
  const variants =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_0_1px_oklch(1_0_0_/_0.08)_inset,0_8px_24px_-12px_oklch(0.72_0.13_210_/_0.6)]"
      : "border border-border bg-secondary/60 text-foreground hover:bg-secondary";
  return (
    <a href={href} className={`${base} ${sizes} ${variants} ${className}`}>
      {children}
    </a>
  );
}

/* ---------- Section helpers ---------- */

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="product" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
              Windows desktop · in development
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Dub videos <span className="text-primary">without giving up control.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Translate, voice, and mix your video in one desktop workflow. Inspect every stage, fix what
              needs fixing, and keep the rest.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTAButton href="#pricing">
                <Download className="h-4 w-4" />
                Get Trackdub
              </CTAButton>
              <CTAButton href="#workflow" variant="ghost">
                See how it works
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              {[
                ["6", "editable stages"],
                ["Local", "acceleration"],
                ["Resumable", "jobs"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="text-lg font-semibold text-foreground">{k}</dt>
                  <dd className="text-xs text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-6">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Product Mockup ---------- */

function ProductMockup() {
  return (
    <div className="relative animate-fade-up">
      <div className="absolute -inset-x-10 -top-10 bottom-10 rounded-[2rem] bg-primary/10 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-panel">
        {/* Titlebar */}
        <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <div className="text-[11px] font-medium text-muted-foreground">
            interview_final_cut.mp4 · Project: DE → EN
          </div>
          <div className="w-10" />
        </div>

        {/* Video preview + pipeline sidebar */}
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-8 border-r border-border p-3">
            <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-[oklch(0.13_0.012_250)]">
              <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,oklch(0.28_0.04_220)_0%,oklch(0.13_0.012_250)_60%)]" />
              {/* Silhouette */}
              <svg viewBox="0 0 400 225" className="absolute inset-0 h-full w-full opacity-80">
                <defs>
                  <linearGradient id="halo" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="oklch(0.72 0.13 200)" stopOpacity="0.4" />
                    <stop offset="1" stopColor="oklch(0.72 0.13 200)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <ellipse cx="200" cy="230" rx="140" ry="90" fill="url(#halo)" />
                <path
                  d="M140 225 C 140 175, 170 150, 200 150 C 230 150, 260 175, 260 225 Z"
                  fill="oklch(0.24 0.02 250)"
                />
                <circle cx="200" cy="120" r="30" fill="oklch(0.28 0.02 250)" />
              </svg>
              {/* Subtitle */}
              <div className="absolute inset-x-4 bottom-3 rounded-md border border-white/10 bg-black/50 px-3 py-1.5 text-center text-[11px] font-medium text-white/90 backdrop-blur-sm">
                "We rebuilt the pipeline so every stage stays editable."
              </div>
              {/* Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur">
                  <Play className="h-5 w-5 text-white" fill="currentColor" />
                </div>
              </div>
              <div className="absolute right-2 top-2 rounded-md border border-border bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white/80">
                00:42 / 03:18
              </div>
            </div>

            {/* Subtitle rows */}
            <div className="mt-3 space-y-1.5">
              {[
                { t: "00:38", de: "Wir haben die Pipeline neu gebaut,", en: "We rebuilt the pipeline", spk: "S1", active: false },
                {
                  t: "00:42",
                  de: "damit jede Stufe editierbar bleibt.",
                  en: "so every stage stays editable.",
                  spk: "S1",
                  active: true,
                },
                { t: "00:46", de: "Und wenn etwas nicht stimmt —", en: "And if something is off —", spk: "S2", active: false },
              ].map((r) => (
                <div
                  key={r.t}
                  className={`grid grid-cols-[48px_28px_1fr_1fr] items-center gap-2 rounded-md border px-2 py-1.5 text-[11px] ${
                    r.active
                      ? "border-primary/40 bg-primary/5"
                      : "border-border/60 bg-background/40"
                  }`}
                >
                  <span className="font-mono text-muted-foreground">{r.t}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-center font-mono text-[10px] ${
                      r.spk === "S1" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
                    }`}
                  >
                    {r.spk}
                  </span>
                  <span className="truncate text-muted-foreground">{r.de}</span>
                  <span className={`truncate ${r.active ? "text-foreground" : "text-foreground/80"}`}>
                    {r.en}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline sidebar */}
          <div className="col-span-4 p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Pipeline
              </div>
              <button className="rounded p-1 text-muted-foreground hover:text-foreground" aria-label="Refresh">
                <RefreshCw className="h-3 w-3" />
              </button>
            </div>
            <ol className="space-y-1">
              {[
                { n: "Ingest", s: "done" },
                { n: "Transcribe", s: "done" },
                { n: "Translate", s: "done" },
                { n: "Diarize", s: "active" },
                { n: "Voice", s: "queued" },
                { n: "Mix", s: "queued" },
              ].map((step, i) => (
                <li
                  key={step.n}
                  className="flex items-center gap-2 rounded-md border border-border/60 bg-background/40 px-2 py-1.5 text-[11px]"
                >
                  <span className="w-4 text-right font-mono text-muted-foreground">{i + 1}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      step.s === "done"
                        ? "bg-accent"
                        : step.s === "active"
                          ? "bg-primary animate-pulse-dot"
                          : "bg-muted-foreground/40"
                    }`}
                  />
                  <span className="flex-1 text-foreground/90">{step.n}</span>
                  <span
                    className={`font-mono text-[10px] ${
                      step.s === "done"
                        ? "text-accent"
                        : step.s === "active"
                          ? "text-primary"
                          : "text-muted-foreground"
                    }`}
                  >
                    {step.s === "done" ? "✓" : step.s === "active" ? "…" : "—"}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-3 rounded-md border border-border/60 bg-background/40 p-2 text-[11px]">
              <div className="mb-1 flex items-center justify-between text-muted-foreground">
                <span>Job resumable</span>
                <span className="font-mono">62%</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[62%] bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline / speaker tracks */}
        <div className="border-t border-border bg-secondary/30 p-3">
          <SpeakerTrack label="S1 · Anna" color="accent" />
          <SpeakerTrack label="S2 · Mateo" color="primary" delay={0.15} />
          <Waveform />
          <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 rounded border border-border bg-background/60 px-2 py-1 hover:text-foreground">
                <Pause className="h-3 w-3" /> Pause
              </button>
              <span className="font-mono">00:42.318</span>
            </div>
            <div className="flex items-center gap-1 font-mono">
              <span className="rounded bg-secondary px-1.5 py-0.5">DirectML</span>
              <span className="rounded bg-secondary px-1.5 py-0.5">RTX 4070</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpeakerTrack({ label, color, delay = 0 }: { label: string; color: "primary" | "accent"; delay?: number }) {
  const bg = color === "primary" ? "bg-primary/70" : "bg-accent/70";
  return (
    <div className="mb-1.5 flex items-center gap-2">
      <div className="w-20 shrink-0 truncate text-[10px] font-medium text-muted-foreground">{label}</div>
      <div className="relative h-3 flex-1 overflow-hidden rounded-sm border border-border bg-background/50">
        <div
          className={`absolute inset-y-0 left-[6%] w-[22%] ${bg} opacity-90`}
          style={{ marginLeft: `${delay * 100}%` }}
        />
        <div className={`absolute inset-y-0 left-[38%] w-[16%] ${bg} opacity-70`} />
        <div className={`absolute inset-y-0 left-[64%] w-[28%] ${bg} opacity-90`} />
      </div>
    </div>
  );
}

function Waveform({ bars = 64 }: { bars?: number }) {
  const heights = Array.from({ length: bars }, (_, i) => {
    const v = Math.abs(Math.sin(i * 0.6) * 0.6 + Math.cos(i * 0.23) * 0.4);
    return Math.max(0.15, Math.min(1, v));
  });
  return (
    <div className="relative flex h-10 items-center gap-[2px] rounded-sm border border-border bg-background/50 px-1">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[3px] origin-center rounded-sm bg-waveform-bar animate-wave"
          style={{
            height: `${h * 100}%`,
            backgroundColor: "var(--waveform)",
            animationDelay: `${(i % 12) * 0.08}s`,
            opacity: 0.55 + (i % 5) * 0.08,
          }}
        />
      ))}
      <div className="pointer-events-none absolute inset-y-0 left-1/3 w-px bg-primary/80" />
    </div>
  );
}

/* ---------- Trust Strip ---------- */

function TrustStrip() {
  const items = [
    { icon: MonitorPlay, title: "Desktop-first", desc: "Windows-native workstation, built for real projects." },
    { icon: SlidersHorizontal, title: "Stage-by-stage control", desc: "Inspect and edit each step, not just the final output." },
    { icon: Cpu, title: "Local acceleration", desc: "DirectML and TensorRT RTX where your hardware supports it." },
    { icon: RefreshCw, title: "Resumable jobs", desc: "Crashes and interruptions don't cost you finished work." },
  ];
  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="bg-background p-6">
            <it.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
            <div className="mt-3 text-sm font-semibold text-foreground">{it.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Workflow ---------- */

function Workflow() {
  const stages = [
    {
      n: "01",
      icon: FileAudio,
      name: "Media ingest",
      desc: "Drop in MP4, MOV, MKV, or extracted audio. Trackdub extracts channels and prepares the project.",
      edit: "Trim range · re-import source",
    },
    {
      n: "02",
      icon: Radio,
      name: "Transcription",
      desc: "ASR produces a timestamped transcript with word-level alignment you can review.",
      edit: "Fix words · adjust timing",
    },
    {
      n: "03",
      icon: Languages,
      name: "Translation",
      desc: "Machine translation per line with source visible. Choose model, style, and glossary terms.",
      edit: "Rewrite one line · lock terms",
    },
    {
      n: "04",
      icon: Users,
      name: "Diarization",
      desc: "Speakers are detected and grouped. Assign named voices to each speaker across the project.",
      edit: "Reassign speaker · merge / split",
    },
    {
      n: "05",
      icon: Volume2,
      name: "Voice generation",
      desc: "TTS renders each line in the assigned voice. Preview, tweak prosody, and re-render selectively.",
      edit: "Regenerate one clip · change voice",
    },
    {
      n: "06",
      icon: Waves,
      name: "Mix & preview",
      desc: "Combine dubbed voices with the original background stems and preview the final result.",
      edit: "Rebalance stems · export mix",
    },
  ];
  return (
    <section id="workflow" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeader
          eyebrow="Workflow"
          title="A pipeline you can actually work inside"
          description="Six stages, each one inspectable and editable. Fix one thing without invalidating the rest."
        />
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((s) => (
            <article
              key={s.n}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                <s.icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-foreground">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex items-center gap-2 rounded-md border border-dashed border-border/70 bg-background/40 px-2.5 py-1.5 text-[11px] text-muted-foreground">
                <Wrench className="h-3 w-3 text-accent" />
                <span className="font-mono">Editable:</span>
                <span className="text-foreground/90">{s.edit}</span>
              </div>
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
            </article>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mt-12 hidden overflow-hidden rounded-lg border border-border bg-card p-5 md:block">
          <svg viewBox="0 0 900 80" className="h-16 w-full">
            {["Ingest", "Transcribe", "Translate", "Diarize", "Voice", "Mix"].map((label, i) => {
              const x = 60 + i * 155;
              return (
                <g key={label}>
                  <circle cx={x} cy={40} r={16} fill="oklch(0.22 0.014 250)" stroke="oklch(0.72 0.13 210)" strokeWidth="1" />
                  <text x={x} y={44} textAnchor="middle" fontSize="11" fill="oklch(0.72 0.13 210)" fontFamily="monospace">
                    {String(i + 1).padStart(2, "0")}
                  </text>
                  <text x={x} y={72} textAnchor="middle" fontSize="11" fill="oklch(0.7 0.02 245)">
                    {label}
                  </text>
                  {i < 5 && (
                    <line
                      x1={x + 18}
                      y1={40}
                      x2={x + 137}
                      y2={40}
                      stroke="oklch(0.72 0.13 210)"
                      strokeOpacity="0.4"
                      strokeDasharray="4 4"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ---------- Control ---------- */

function Control() {
  const rows = [
    {
      icon: Languages,
      title: "Rewrite a single translation line",
      before: "Wir haben die Pipeline neu gebaut,",
      after: "We rebuilt the pipeline from scratch,",
      note: "Only the touched line regenerates downstream.",
    },
    {
      icon: Users,
      title: "Reassign a speaker",
      before: "S2 → Voice: Mateo",
      after: "S2 → Voice: Ines (locked across project)",
      note: "Voice rerenders only for that speaker's lines.",
    },
    {
      icon: Volume2,
      title: "Regenerate one voice clip",
      before: "Clip 00:42 — prosody drifts",
      after: "Clip 00:42 — re-rendered · 3 alternates",
      note: "Neighboring clips and the mix stay untouched.",
    },
    {
      icon: ShieldCheck,
      title: "Preserve completed work",
      before: "Cloud tool: re-run whole job",
      after: "Trackdub: cached stages stay valid",
      note: "Stage cache tracks inputs, not wall-clock.",
    },
  ];
  return (
    <section id="control" className="relative border-t border-border bg-secondary/10">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeader
          eyebrow="Not a black box"
          title="Fix what needs fixing. Keep the rest."
          description="Cloud dubbing hands you one output. Trackdub hands you every intermediate — and only rebuilds what actually changed."
        />
        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {rows.map((r) => (
            <div key={r.title} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2">
                <r.icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                <h3 className="text-sm font-semibold text-foreground">{r.title}</h3>
              </div>
              <div className="mt-4 space-y-2 font-mono text-[12px]">
                <div className="flex items-start gap-2 rounded-md border border-border/70 bg-background/40 px-3 py-2 text-muted-foreground">
                  <span className="mt-0.5 text-destructive">−</span>
                  <span className="line-through decoration-destructive/60">{r.before}</span>
                </div>
                <div className="flex items-start gap-2 rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-foreground">
                  <span className="mt-0.5 text-accent">+</span>
                  <span>{r.after}</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{r.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Performance ---------- */

function Performance() {
  return (
    <section id="performance" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Performance"
              title="Local acceleration, honest fallbacks"
              description="Trackdub runs where your GPU lives. When acceleration isn't available, CPU fallback keeps the project moving — slower, but predictable."
              align="left"
            />
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "DirectML for broad Windows GPU support (AMD, Intel, NVIDIA).",
                "TensorRT RTX path for compatible NVIDIA hardware.",
                "CPU fallback so a project never gets stuck.",
                "Local-first processing for media that shouldn't leave your machine.",
                "Optional cloud steps are opt-in per stage, never silent.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-md border border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
              We don't claim absolute privacy. We tell you which stages ran locally, which called out, and what
              was sent — so you can make the call for your project.
            </p>
          </div>
          <div className="lg:col-span-7">
            <PerformancePanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function PerformancePanel() {
  const rows = [
    { name: "DirectML", detail: "AMD · Intel · NVIDIA", state: "active", bar: 92 },
    { name: "TensorRT RTX", detail: "RTX 30/40/50 series", state: "ready", bar: 78 },
    { name: "CPU fallback", detail: "AVX2 · multi-thread", state: "standby", bar: 34 },
  ];
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-panel">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          <div className="text-sm font-semibold">Compute targets</div>
        </div>
        <span className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          detected · Windows 11
        </span>
      </div>
      <div className="mt-5 space-y-4">
        {rows.map((r) => (
          <div key={r.name}>
            <div className="flex items-center justify-between text-[12px]">
              <div>
                <div className="font-medium text-foreground">{r.name}</div>
                <div className="font-mono text-[10px] text-muted-foreground">{r.detail}</div>
              </div>
              <span
                className={`rounded-md border px-2 py-0.5 font-mono text-[10px] ${
                  r.state === "active"
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : r.state === "ready"
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-border bg-secondary text-muted-foreground"
                }`}
              >
                {r.state}
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div
                className={`h-full ${
                  r.state === "active"
                    ? "bg-gradient-to-r from-primary to-accent"
                    : r.state === "ready"
                      ? "bg-accent/70"
                      : "bg-muted-foreground/40"
                }`}
                style={{ width: `${r.bar}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4 text-[11px]">
        {[
          ["Local", "Transcribe · Diarize · Mix"],
          ["Opt-in cloud", "Translate · Voice models"],
          ["Never uploaded", "Source media (default)"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-md border border-border bg-background/40 p-2">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{k}</div>
            <div className="mt-1 text-[11px] text-foreground/90">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Features ---------- */

function Features() {
  const items = [
    { icon: Radio, title: "Transcription", desc: "Word-level ASR with alignment, punctuation, and per-line confidence." },
    { icon: Languages, title: "Translation", desc: "Model choice, glossary locks, tone controls, and side-by-side review." },
    { icon: Users, title: "Speaker mapping", desc: "Auto-diarize, then assign consistent voices across the whole project." },
    { icon: Volume2, title: "Voice generation", desc: "Multiple TTS engines, per-clip prosody, and alternates before commit." },
    { icon: Layers, title: "Stem separation", desc: "Optional vocal/background split to preserve the original mix bed." },
    { icon: Waves, title: "Mix & preview", desc: "Balance dubbed voices against retained stems and export the final track." },
    { icon: RefreshCw, title: "Project recovery", desc: "Resumable jobs. Crashes and restarts don't cost finished stages." },
    { icon: ShieldCheck, title: "Inspectable errors", desc: "No fake progress. Real error messages with the stage and input at fault." },
  ];
  return (
    <section className="relative border-t border-border bg-secondary/10">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeader
          eyebrow="What's in the box"
          title="Everything the pipeline needs — nothing you can't reach"
        />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border/50 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="group bg-card p-5 transition-colors hover:bg-secondary/60">
              <it.icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
              <div className="mt-3 text-sm font-semibold text-foreground">{it.title}</div>
              <div className="mt-1.5 text-sm text-muted-foreground">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Comparison ---------- */

function Comparison() {
  const rows = [
    ["Control", "One-shot output", "Six inspectable stages"],
    ["Fix one line", "Re-run the whole job", "Regenerate just that line"],
    ["Speaker voices", "Assigned by the service", "Assigned by you, locked per speaker"],
    ["Resumable", "Rarely — pay per run", "Yes — stage cache survives restarts"],
    ["Local processing", "Uploaded by default", "Local-first, opt-in cloud per stage"],
    ["Errors", "Opaque failure", "Stage, input, and reason surfaced"],
  ];
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeader
          eyebrow="Comparison"
          title="Trackdub vs. one-click cloud dubbing"
          description="Both exist for a reason. One-click services are fine for throwaway drafts. Trackdub is built for the projects you can't ship without reviewing."
        />
        <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
          <div className="grid grid-cols-3 border-b border-border bg-secondary/50 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="p-4">Dimension</div>
            <div className="border-l border-border p-4">One-click cloud</div>
            <div className="border-l border-border p-4 text-primary">Trackdub</div>
          </div>
          {rows.map(([dim, a, b], i) => (
            <div
              key={dim}
              className={`grid grid-cols-3 text-sm ${
                i < rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-4 font-medium text-foreground">{dim}</div>
              <div className="border-l border-border p-4 text-muted-foreground">{a}</div>
              <div className="border-l border-border p-4 text-foreground">
                <span className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {b}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */

function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      priceSub: "no account required",
      desc: "Try the full pipeline on short projects.",
      cta: { label: "Join the launch list", href: "mailto:hello@trackdub.com?subject=Launch%20list" },
      featured: false,
      features: [
        "Full six-stage pipeline",
        "Projects up to 5 minutes",
        "Watermark on export",
        "Local acceleration where supported",
        "Community support",
      ],
    },
    {
      name: "Desktop license",
      price: "Pricing at launch",
      priceSub: "one-time purchase",
      desc: "For working creators and localization teams.",
      cta: { label: "Get Trackdub", href: "mailto:hello@trackdub.com?subject=Desktop%20license" },
      featured: true,
      features: [
        "No project length limit",
        "No watermark",
        "Optional paid major upgrades",
        "Priority local model updates",
        "Direct support channel",
      ],
    },
  ];
  return (
    <section id="pricing" className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeader
          eyebrow="Pricing"
          title="No subscription. Own your tools."
          description="A free tier that actually runs the pipeline, and a one-time desktop license when you're ready to ship real work."
        />
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-xl border p-6 ${
                t.featured
                  ? "border-primary/40 bg-card shadow-panel"
                  : "border-border bg-card"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-2 right-4 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                  Recommended
                </div>
              )}
              <div className="flex items-center gap-2">
                {t.featured ? <Package className="h-4 w-4 text-primary" /> : <Sparkles className="h-4 w-4 text-muted-foreground" />}
                <h3 className="text-base font-semibold text-foreground">{t.name}</h3>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className={`text-2xl font-semibold ${t.featured ? "text-foreground" : "text-foreground"}`}>{t.price}</span>
                <span className="text-xs text-muted-foreground">{t.priceSub}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-primary" : "text-accent"}`} />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTAButton href={t.cta.href} variant={t.featured ? "primary" : "ghost"} className="w-full justify-center">
                  {t.cta.label}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          No subscription. Buy once, keep the version you paid for. Major upgrades are optional and priced
          separately.
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function FAQ() {
  const items = [
    {
      q: "Which Windows versions are supported?",
      a: "Trackdub targets Windows 10 (22H2) and Windows 11 on x64. ARM64 support is on the roadmap but not committed for launch.",
    },
    {
      q: "Do I need a GPU?",
      a: "No. A modern CPU with AVX2 will run the full pipeline via CPU fallback. A supported GPU (via DirectML, or TensorRT RTX on compatible NVIDIA cards) makes transcription, voice generation, and separation substantially faster.",
    },
    {
      q: "Local vs. cloud — what actually leaves my machine?",
      a: "Media ingest, transcription, diarization, and mixing run locally by default. Translation and some higher-quality voice models can call cloud endpoints — these steps are opt-in per project and clearly labeled in the pipeline view.",
    },
    {
      q: "Which languages are supported?",
      a: "Language support depends on the ASR, translation, and voice models you enable. At launch we expect solid coverage for major European and East Asian languages; long-tail language quality varies by stage. We'll publish a live matrix rather than a marketing claim.",
    },
    {
      q: "What voice options are available?",
      a: "Trackdub ships with a curated set of local TTS voices and integrates with common third-party voice providers you configure with your own API keys. Voice cloning is not a launch feature.",
    },
    {
      q: "Can I edit any stage of the pipeline?",
      a: "Yes. Every stage — transcript, translation, speaker assignment, per-clip voice — is editable, and only downstream stages affected by your edit are recomputed. Your other work is preserved.",
    },
    {
      q: "How does licensing work?",
      a: "A one-time desktop license per user. No mandatory subscription. Major version upgrades are optional and priced separately. Exact pricing and license terms will be published at launch.",
    },
  ];
  return (
    <section id="faq" className="relative border-t border-border bg-secondary/10">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeader eyebrow="FAQ" title="Straight answers" />
        <div className="mt-12 divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
          {items.map((it, i) => (
            <FAQItem key={it.q} q={it.q} a={it.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      className="group"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <span>{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180 text-primary" : ""}`}
        />
      </summary>
      <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</div>
    </details>
  );
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-0 bg-hero opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12]" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to dub without giving up control?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Trackdub is in active development. Join the launch list to get the first Windows build and honest
          release notes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CTAButton href="mailto:hello@trackdub.com?subject=Launch%20list">
            <Download className="h-4 w-4" />
            Get Trackdub
          </CTAButton>
          <CTAButton href="#workflow" variant="ghost">
            See how it works
            <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  const cols = [
    {
      title: "Product",
      links: [
        ["Workflow", "#workflow"],
        ["Performance", "#performance"],
        ["Pricing", "#pricing"],
        ["FAQ", "#faq"],
      ],
    },
    {
      title: "Resources",
      links: [
        ["Docs (coming soon)", "#"],
        ["Changelog", "#"],
        ["System requirements", "#"],
        ["Language matrix", "#"],
      ],
    },
    {
      title: "Legal",
      links: [
        ["Privacy", "#"],
        ["Terms", "#"],
        ["License", "#"],
        ["Contact", "mailto:hello@trackdub.com"],
      ],
    },
  ];
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A Windows desktop workstation for AI video dubbing. Built for creators who need to review, not
              just receive.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://github.com/trackdub"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5" />
                github.com/trackdub
              </a>
              <a
                href="https://trackdub.com"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                trackdub.com
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Status
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-2 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
              <span className="text-foreground/90">In development</span>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Trackdub. All rights reserved.</div>
          <div className="font-mono">v0.1 · pre-release</div>
        </div>
      </div>
    </footer>
  );
}
