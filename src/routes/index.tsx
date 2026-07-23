import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trackdub — A desktop workstation for dubbing video" },
      {
        name: "description",
        content:
          "Trackdub is a local-first desktop workstation for dubbing video into other languages. Editable stages, deterministic runs, your media stays on your machine.",
      },
      { property: "og:title", content: "Trackdub — A desktop workstation for dubbing video" },
      {
        property: "og:description",
        content:
          "Local-first, stage-by-stage dubbing. Editable script, per-line voice, alignment, mix — all inspectable.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-ink">
      <Masthead />
      <main>
        <Lead />
        <ProductPlate />
        <TrustStrip />
        <PipelineFeature />
        <Walkthrough />
        <StageChapters />
        <Control />
        <Performance />
        <WhatYouGet />
        <ComparedTo />
        <Pricing />
        <FAQ />
        <Endnote />
      </main>
      <Colophon />
    </div>
  );
}

/* ---------------- shared bits ---------------- */

const NAV = [
  { href: "#pipeline", label: "Pipeline" },
  { href: "#walkthrough", label: "Try it" },
  { href: "#control", label: "Control" },
  { href: "#performance", label: "Performance" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 sm:px-10 ${className}`}>{children}</div>;
}

function SectionNumber({ n, label }: { n: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
      <span className="text-accent">{n}</span>
      <span className="mx-2 text-hairline">/</span>
      <span>{label}</span>
    </div>
  );
}

function Rule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-border ${className}`} aria-hidden />;
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-baseline gap-1 border-b border-foreground/30 pb-0.5 text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}

function InkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-ink"
      : "border border-foreground/70 text-foreground hover:border-foreground";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

/* ---------------- masthead ---------------- */

function Masthead() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-border bg-background">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-serif text-2xl leading-none tracking-tight text-foreground">
          Trackdub<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="mailto:hello@trackdub.com"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <InkButton href="#pricing">Get Trackdub</InkButton>
        </div>
        <button
          className="md:hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <InkButton href="#pricing">Get Trackdub</InkButton>
          </Container>
        </div>
      )}
    </header>
  );
}

/* ---------------- lead ---------------- */

function Lead() {
  return (
    <section id="top" className="border-b border-border">
      <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-8">
          <SectionNumber n="00" label="A workstation for dubbing" />
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[88px]">
            Dub videos into other languages{" "}
            <em className="text-accent">without giving up control.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Trackdub is a desktop workstation for translating, voicing, and mixing video. Every stage
            of the pipeline is inspectable, editable, and rerunnable — from the transcript to the
            final mix. Your media never leaves your machine unless you say so.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <InkButton href="#pricing">Download for Windows</InkButton>
            <TextLink href="#pipeline">Read the pipeline →</TextLink>
          </div>
        </div>
        <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-10">
          <dl className="space-y-5 font-mono text-[12px] text-muted-foreground">
            {[
              ["Version", "0.9.2 — preview"],
              ["Platforms", "Windows · macOS · Linux"],
              ["License", "Commercial · non-commercial"],
              ["Runs on", "CPU · DirectML · CUDA · CoreML"],
              ["Data", "Local by default"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-hairline pb-3">
                <dt className="uppercase tracking-[0.14em]">{k}</dt>
                <dd className="text-right text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </Container>
    </section>
  );
}

/* ---------------- product plate (single figure) ---------------- */

function ProductPlate() {
  return (
    <section className="border-b border-border">
      <Container className="py-14 sm:py-20">
        <div className="animate-fade-up">
          <WorkstationMock />
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Fig. 01 &nbsp;·&nbsp; Trackdub project view. German source dubbed to English; six stages
            visible in the run column; line 42 open in the script editor.
          </p>
        </div>
      </Container>
    </section>
  );
}

function WorkstationMock() {
  const bg = "oklch(0.16 0.010 250)";
  const panel = "oklch(0.20 0.012 250)";
  const inkText = "oklch(0.92 0.005 240)";
  const dim = "oklch(0.62 0.02 245)";
  return (
    <figure
      className="overflow-hidden border border-border shadow-panel"
      style={{ backgroundColor: bg, color: inkText }}
    >
      {/* titlebar */}
      <div
        className="flex items-center justify-between border-b px-4 py-2 font-mono text-[11px]"
        style={{ borderColor: "oklch(0.28 0.014 250)", backgroundColor: panel, color: dim }}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: "oklch(0.55 0.02 250)" }} />
            <span className="h-2 w-2 rounded-full" style={{ background: "oklch(0.55 0.02 250)" }} />
            <span className="h-2 w-2 rounded-full" style={{ background: "oklch(0.55 0.02 250)" }} />
          </span>
          <span>trackdub — interview_final_cut.mp4</span>
        </div>
        <span>DE → EN · project #1147</span>
      </div>

      <div className="grid grid-cols-12">
        {/* left: stages */}
        <div
          className="col-span-3 border-r p-4"
          style={{ borderColor: "oklch(0.28 0.014 250)" }}
        >
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>
            Run
          </div>
          <ol className="space-y-1.5">
            {[
              ["01", "Ingest", "done"],
              ["02", "Transcribe", "done"],
              ["03", "Translate", "done"],
              ["04", "Diarize", "active"],
              ["05", "Voice", "queued"],
              ["06", "Mix", "queued"],
            ].map(([n, name, s]) => (
              <li
                key={n}
                className="flex items-center gap-3 py-1 font-mono text-[12px]"
                style={{ color: s === "queued" ? dim : inkText }}
              >
                <span style={{ color: dim }}>{n}</span>
                <span className="flex-1">{name}</span>
                <span
                  style={{
                    color:
                      s === "done"
                        ? "oklch(0.75 0.13 155)"
                        : s === "active"
                          ? "oklch(0.68 0.14 50)"
                          : dim,
                  }}
                >
                  {s === "done" ? "✓" : s === "active" ? "●" : "·"}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>
            Provider
          </div>
          <div className="mt-2 font-mono text-[12px]">DirectML · RTX 4070</div>
          <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>
            Manifest
          </div>
          <div className="mt-2 font-mono text-[12px]">bundled · commercial</div>
        </div>

        {/* center: script */}
        <div
          className="col-span-6 border-r p-5"
          style={{ borderColor: "oklch(0.28 0.014 250)" }}
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>
              Script · line 42
            </div>
            <div className="font-mono text-[10px]" style={{ color: dim }}>
              S1 Anna · 00:42.180
            </div>
          </div>
          <div className="space-y-3">
            {[
              { t: "00:38", s: "S1", de: "Wir haben die Pipeline neu gebaut,", en: "We rebuilt the pipeline,", a: false },
              { t: "00:42", s: "S1", de: "damit jede Stufe editierbar bleibt.", en: "so every stage stays editable.", a: true },
              { t: "00:46", s: "S2", de: "Und wenn etwas nicht stimmt —", en: "And if something is off —", a: false },
              { t: "00:49", s: "S2", de: "regenerierst du nur diese eine Zeile.", en: "you regenerate just that one line.", a: false },
            ].map((r) => (
              <div key={r.t} className="grid grid-cols-[52px_28px_1fr] gap-3 py-1">
                <span className="font-mono text-[11px]" style={{ color: dim }}>
                  {r.t}
                </span>
                <span
                  className="font-mono text-[10px]"
                  style={{ color: r.s === "S1" ? "oklch(0.68 0.14 50)" : "oklch(0.72 0.10 220)" }}
                >
                  {r.s}
                </span>
                <div>
                  <div className="text-[12px]" style={{ color: dim }}>
                    {r.de}
                  </div>
                  <div
                    className="font-serif text-[16px] leading-snug"
                    style={{
                      color: r.a ? "oklch(0.97 0.005 240)" : inkText,
                      textDecoration: r.a ? "underline" : "none",
                      textDecorationColor: "oklch(0.68 0.14 50)",
                      textUnderlineOffset: 4,
                    }}
                  >
                    {r.en}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* waveform */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>
              <span>Waveform</span>
              <span>−14.1 LUFS</span>
            </div>
            <svg viewBox="0 0 600 60" className="h-14 w-full" preserveAspectRatio="none">
              {Array.from({ length: 120 }).map((_, i) => {
                const seed = Math.sin(i * 1.37) * Math.cos(i * 0.51);
                const h = 8 + Math.abs(seed) * 42;
                const isActive = i > 44 && i < 78;
                return (
                  <rect
                    key={i}
                    x={i * 5}
                    y={30 - h / 2}
                    width={2.2}
                    height={h}
                    fill={isActive ? "oklch(0.72 0.13 50)" : "oklch(0.55 0.03 240)"}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* right: speakers */}
        <div className="col-span-3 p-4">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>
            Speakers
          </div>
          {[
            { n: "Anna", lang: "de-DE → en-US", ref: "3.4s ref", color: "oklch(0.68 0.14 50)" },
            { n: "Mateo", lang: "de-DE → en-US", ref: "5.1s ref", color: "oklch(0.72 0.10 220)" },
          ].map((s) => (
            <div key={s.n} className="mb-3 border-t pt-3 font-mono text-[11px]" style={{ borderColor: "oklch(0.28 0.014 250)" }}>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                <span style={{ color: inkText }}>{s.n}</span>
              </div>
              <div className="mt-1" style={{ color: dim }}>
                {s.lang}
              </div>
              <div style={{ color: dim }}>{s.ref}</div>
            </div>
          ))}
          <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>
            Job
          </div>
          <div className="mt-2 font-mono text-[12px]">Resumable · 62%</div>
          <div className="mt-2 h-[3px] w-full" style={{ background: "oklch(0.28 0.014 250)" }}>
            <div className="h-full" style={{ width: "62%", background: "oklch(0.72 0.13 50)" }} />
          </div>
        </div>
      </div>
    </figure>
  );
}

/* ---------------- trust strip ---------------- */

function TrustStrip() {
  const items = ["Local by default", "Deterministic runs", "Cross-platform", "Open manifest", "No account required"];
  return (
    <section className="border-b border-border bg-surface/50">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-8">
            <span>{t}</span>
            {i < items.length - 1 && <span className="text-hairline">·</span>}
          </span>
        ))}
      </Container>
    </section>
  );
}

/* ---------------- pipeline feature ---------------- */

const STAGES = [
  {
    n: "01",
    name: "Ingest",
    one: "Probe media. Detect scenes, silence, and speech.",
    body:
      "Point Trackdub at a file or folder. It reads the container, extracts audio, detects shot boundaries, and runs voice activity — building the frame every later stage will work against.",
    detail: ["ffprobe media", "shot / silence detection", "loudness reference (LUFS)"],
  },
  {
    n: "02",
    name: "Transcribe",
    one: "Time-accurate source transcript with speaker turns.",
    body:
      "Source-language ASR with word-level timestamps. The transcript is a real editable document, not an opaque intermediate — fix a word here and every downstream stage picks it up.",
    detail: ["word timestamps", "editable transcript", "diarization-ready turns"],
  },
  {
    n: "03",
    name: "Translate",
    one: "Human-editable target script, tied to timecode.",
    body:
      "Translation happens per line, not per file. Idioms, names, and jargon go in a project glossary; the target script preserves the source's timing so later stages can align to it.",
    detail: ["per-line MT", "project glossary", "timecode preserved"],
  },
  {
    n: "04",
    name: "Diarize",
    one: "Assign speakers. Attach a voice reference to each one.",
    body:
      "Trackdub clusters voices, then lets you name them, merge them, or split them. Each speaker gets a short reference clip that the voicing stage will match — one clone per person, not one voice for the whole video.",
    detail: ["speaker clustering", "manual merge / split", "voice reference per speaker"],
  },
  {
    n: "05",
    name: "Voice",
    one: "Zero-shot TTS. Regenerate any single line.",
    body:
      "Per-speaker voice cloning generates each line at its target duration. Prosody is editable — pace, emphasis, pause — and any line can be regenerated on its own without redoing the rest.",
    detail: ["per-speaker cloning", "per-line prosody", "regen line 42 in isolation"],
  },
  {
    n: "06",
    name: "Mix",
    one: "Align, duck under music, mux the final file.",
    body:
      "Dubbed lines snap to the original beats. Music and SFX from the source are preserved and ducked under dialogue. Export a muxed video, stems, or captions — deterministic given the same project manifest.",
    detail: ["timeline alignment", "music / SFX ducking", "video + stems + captions"],
  },
];

function PipelineFeature() {
  return (
    <section id="pipeline" className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionNumber n="01" label="The pipeline" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Six stages. Each one editable, each one rerunnable.
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted-foreground">
              A dubbed video is not a single button. It's a chain of decisions — what someone said,
              what it should say in the target language, whose voice says it, and how it sits in the
              mix. Trackdub exposes that chain, so you can inspect any link and change it in place.
            </p>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted-foreground">
              Every stage declares what it needs from the previous one. If you edit the transcript,
              the translation knows to invalidate. If you change a speaker's voice reference, only
              their lines regenerate. Nothing rebuilds that doesn't have to.
            </p>
          </div>
          <ol className="lg:col-span-7">
            {STAGES.map((s, i) => (
              <li key={s.n}>
                {i > 0 && <Rule />}
                <a
                  href={`#stage-${s.n}`}
                  className="group grid grid-cols-[64px_1fr_auto] items-baseline gap-4 py-6 transition-colors hover:bg-surface/60"
                >
                  <span className="font-mono text-[13px] text-accent">{s.n}</span>
                  <div>
                    <div className="font-serif text-2xl text-foreground">{s.name}</div>
                    <div className="mt-1 font-mono text-[12px] text-muted-foreground">{s.one}</div>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground group-hover:text-accent">
                    Read →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- stage chapters ---------------- */

function StageChapters() {
  return (
    <section className="border-b border-border bg-surface/40">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="03" label="Each stage, in detail" />
        <div className="mt-14 space-y-16">
          {STAGES.map((s, i) => (
            <article
              key={s.n}
              id={`stage-${s.n}`}
              className="grid gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <header className="lg:col-span-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {s.n} &nbsp;/&nbsp; {s.name}
                </div>
                <h3 className="mt-4 font-serif text-3xl leading-[1.1] tracking-tight text-foreground sm:text-4xl">
                  {s.one}
                </h3>
                <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-6 space-y-2 font-mono text-[12px] text-muted-foreground">
                  {s.detail.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="text-accent">—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </header>
              <div className="lg:col-span-7">
                <StageInset stage={s.name} index={i} />
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Fig. 0{i + 2} &nbsp;·&nbsp; {s.name} view
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StageInset({ stage, index }: { stage: string; index: number }) {
  const bg = "oklch(0.16 0.010 250)";
  const border = "oklch(0.28 0.014 250)";
  const dim = "oklch(0.62 0.02 245)";
  const ink = "oklch(0.94 0.005 240)";

  const content = () => {
    switch (stage) {
      case "Ingest":
        return (
          <div className="p-5 font-mono text-[12px]" style={{ color: dim }}>
            <div className="mb-3 uppercase tracking-[0.14em] text-[10px]">Media probe</div>
            <table className="w-full">
              <tbody>
                {[
                  ["container", "mp4 / h264 / aac"],
                  ["duration", "00:03:18.240"],
                  ["fps", "23.976"],
                  ["audio", "stereo · 48 kHz"],
                  ["scenes", "42 detected"],
                  ["speech", "84% (VAD)"],
                  ["loudness", "−14.1 LUFS"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td className="border-b py-1.5 pr-6" style={{ borderColor: border }}>{k}</td>
                    <td className="border-b py-1.5 text-right" style={{ borderColor: border, color: ink }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "Transcribe":
        return (
          <div className="p-5 text-[12px]" style={{ color: ink }}>
            <div className="mb-3 font-mono uppercase tracking-[0.14em] text-[10px]" style={{ color: dim }}>
              Source transcript · de-DE
            </div>
            {[
              ["00:38.120", "Wir haben die", "Pipeline", " neu gebaut,"],
              ["00:42.180", "damit jede Stufe", "editierbar", " bleibt."],
              ["00:46.900", "Und wenn etwas nicht", "stimmt", " —"],
            ].map(([t, a, hi, b]) => (
              <div key={t} className="flex gap-4 py-1.5">
                <span className="font-mono" style={{ color: dim }}>{t}</span>
                <span>
                  {a} <span style={{ background: "oklch(0.68 0.14 50 / 0.25)", padding: "0 2px" }}>{hi}</span>{b}
                </span>
              </div>
            ))}
          </div>
        );
      case "Translate":
        return (
          <div className="p-5 text-[12px]" style={{ color: ink }}>
            <div className="mb-3 grid grid-cols-2 gap-6 font-mono uppercase tracking-[0.14em] text-[10px]" style={{ color: dim }}>
              <span>Source · de-DE</span><span>Target · en-US</span>
            </div>
            {[
              ["Wir haben die Pipeline neu gebaut,", "We rebuilt the pipeline"],
              ["damit jede Stufe editierbar bleibt.", "so every stage stays editable."],
              ["Und wenn etwas nicht stimmt —", "And if something's off —"],
            ].map(([a, b], i) => (
              <div key={i} className="grid grid-cols-2 gap-6 border-b py-2" style={{ borderColor: border }}>
                <span style={{ color: dim }}>{a}</span>
                <span className="font-serif text-[15px]">{b}</span>
              </div>
            ))}
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>
              Glossary · 12 terms locked
            </div>
          </div>
        );
      case "Diarize":
        return (
          <div className="p-5 text-[12px]" style={{ color: ink }}>
            <div className="mb-3 font-mono uppercase tracking-[0.14em] text-[10px]" style={{ color: dim }}>
              Speakers detected
            </div>
            {[
              { n: "Anna", turns: 24, c: "oklch(0.68 0.14 50)" },
              { n: "Mateo", turns: 18, c: "oklch(0.72 0.10 220)" },
              { n: "Speaker 3", turns: 2, c: "oklch(0.55 0.03 240)" },
            ].map((s) => (
              <div key={s.n} className="flex items-center justify-between border-b py-3" style={{ borderColor: border }}>
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full" style={{ background: s.c }} />
                  <div>
                    <div>{s.n}</div>
                    <div className="font-mono text-[10px]" style={{ color: dim }}>{s.turns} turns · 4.2s reference</div>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>Rename · Merge</span>
              </div>
            ))}
          </div>
        );
      case "Voice":
        return (
          <div className="p-5 text-[12px]" style={{ color: ink }}>
            <div className="mb-3 flex items-center justify-between font-mono uppercase tracking-[0.14em] text-[10px]" style={{ color: dim }}>
              <span>Line 42 · Anna</span>
              <span>duration 3.14s / target 3.20s</span>
            </div>
            <div className="font-serif text-[17px] leading-snug">
              "so every stage stays <span style={{ borderBottom: "2px solid oklch(0.68 0.14 50)" }}>editable</span>."
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 font-mono text-[11px]">
              {[
                ["Pace", "0.98×"],
                ["Emphasis", "editable"],
                ["Pause after", "220 ms"],
              ].map(([k, v]) => (
                <div key={k} className="border p-2" style={{ borderColor: border }}>
                  <div className="uppercase tracking-[0.14em] text-[9px]" style={{ color: dim }}>{k}</div>
                  <div className="mt-1">{v}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>
              [ Regenerate line ] &nbsp; [ Regenerate speaker ]
            </div>
          </div>
        );
      case "Mix":
        return (
          <div className="p-5 text-[12px]" style={{ color: ink }}>
            <div className="mb-3 font-mono uppercase tracking-[0.14em] text-[10px]" style={{ color: dim }}>
              Timeline
            </div>
            {[
              ["Dialogue EN", "oklch(0.68 0.14 50)", [10, 22, 34, 55, 70, 82]],
              ["Music", "oklch(0.55 0.06 220)", [5, 95]],
              ["SFX", "oklch(0.55 0.03 240)", [40, 62]],
            ].map(([label, color, pts]) => (
              <div key={label as string} className="mb-3">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: dim }}>{label as string}</div>
                <div className="relative h-5 w-full" style={{ background: "oklch(0.20 0.012 250)" }}>
                  {(pts as number[]).reduce<React.ReactNode[]>((acc, p, i, arr) => {
                    if (i % 2 === 1) return acc;
                    const next = arr[i + 1] ?? p + 8;
                    acc.push(
                      <span key={i} className="absolute top-0 h-full" style={{ left: `${p}%`, width: `${next - p}%`, background: color as string, opacity: 0.85 }} />
                    );
                    return acc;
                  }, [])}
                </div>
              </div>
            ))}
            <div className="mt-4 grid grid-cols-3 gap-3 font-mono text-[11px]">
              {[["Loudness", "−16 LUFS"], ["Duck", "−9 dB"], ["Export", "mp4 + stems"]].map(([k, v]) => (
                <div key={k} className="border p-2" style={{ borderColor: border }}>
                  <div className="uppercase tracking-[0.14em] text-[9px]" style={{ color: dim }}>{k}</div>
                  <div className="mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="border border-border shadow-panel" style={{ background: bg }}>
      <div className="flex items-center justify-between border-b px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ borderColor: border, color: dim, background: "oklch(0.20 0.012 250)" }}>
        <span>Trackdub · {stage.toLowerCase()}</span>
        <span>{String(index + 1).padStart(2, "0")} of 06</span>
      </div>
      {content()}
    </div>
  );
}

/* ---------------- control ---------------- */

function Control() {
  return (
    <section id="control" className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="03" label="You can fix anything, and only that thing" />
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              The transcript said <em>"Pipeline"</em>. You wanted <em>"pipe line"</em>.
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted-foreground">
              Change it. The translation invalidates. The affected voice line queues for a regen.
              Every other line stays exactly as it was — same take, same timing, same mix. That's
              the whole idea.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <ControlPlate
              tag="Before edit"
              t="00:42.180"
              text="so every stage stays editable."
              hint="Auto-generated · pace 1.00× · pause 200 ms"
            />
            <ControlPlate
              tag="After you tweaked prosody"
              t="00:42.180"
              text="so every stage stays editable."
              hint="Regen · pace 0.94× · pause 320 ms · this line only"
              accent
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ControlPlate({
  tag,
  t,
  text,
  hint,
  accent = false,
}: {
  tag: string;
  t: string;
  text: string;
  hint: string;
  accent?: boolean;
}) {
  return (
    <figure className="border border-border bg-card p-5">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        <span className={accent ? "text-accent" : ""}>{tag}</span>
        <span>{t}</span>
      </div>
      <div
        className="mt-4 font-serif text-2xl leading-snug text-foreground"
        style={{
          textDecoration: accent ? "underline" : "none",
          textDecorationColor: "var(--accent)",
          textUnderlineOffset: 6,
        }}
      >
        "{text}"
      </div>
      <figcaption className="mt-4 font-mono text-[11px] text-muted-foreground">{hint}</figcaption>
    </figure>
  );
}

/* ---------------- performance ---------------- */

function Performance() {
  return (
    <section id="performance" className="border-b border-border bg-surface/40">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionNumber n="04" label="Performance" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Runs on the hardware you already have.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Trackdub ships execution providers for CPU, DirectML, CUDA, CoreML, and Windows ML.
              Pick a policy or let it choose. Numbers below are for a ten-minute two-speaker source
              on a fresh project, warm models.
            </p>
          </div>
          <div className="lg:col-span-8">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <th className="border-b border-border py-3 pr-4 font-normal">Device</th>
                  <th className="border-b border-border py-3 pr-4 font-normal">Provider</th>
                  <th className="border-b border-border py-3 pr-4 text-right font-normal">Throughput</th>
                  <th className="border-b border-border py-3 text-right font-normal">Wall time</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[13px]">
                {[
                  ["MacBook Pro · M3 Pro", "CoreML", "6.4× realtime", "1m 34s"],
                  ["Windows · RTX 4070", "CUDA", "9.1× realtime", "1m 06s"],
                  ["Windows · Iris Xe", "DirectML", "2.1× realtime", "4m 46s"],
                  ["Linux · Ryzen 7 5800X", "CPU", "1.3× realtime", "7m 42s"],
                  ["Windows · Arc A770", "DirectML", "3.7× realtime", "2m 42s"],
                ].map(([d, p, thr, w]) => (
                  <tr key={d} className="hover:bg-background/60">
                    <td className="border-b border-border py-4 pr-4 text-foreground">{d}</td>
                    <td className="border-b border-border py-4 pr-4 text-muted-foreground">{p}</td>
                    <td className="border-b border-border py-4 pr-4 text-right text-foreground">{thr}</td>
                    <td className="border-b border-border py-4 text-right text-muted-foreground">{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Tbl. 01 &nbsp;·&nbsp; End-to-end wall time, source→muxed export, bundled models.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- what you get ---------------- */

function WhatYouGet() {
  const items: [string, string][] = [
    ["Local by default", "Media, transcripts, voice references, and generated audio stay on your disk. Cloud is opt-in per project, per stage."],
    ["Deterministic runs", "Same project manifest + same models = same output. Every stage records what it consumed."],
    ["Resumable jobs", "Kill the app mid-run. Reopen the project. Continue from the last completed stage."],
    ["Per-line regen", "Regenerate one voice line, one speaker, or one stage. Never a full-project redo for a small fix."],
    ["Editable script", "Transcript and translation are real documents with a glossary, not opaque intermediates."],
    ["Voice cloning per speaker", "One short reference per speaker. No shared 'AI voice' for the whole video."],
    ["Music & SFX preserved", "Source stems are kept and ducked under dialogue automatically. Or manually, if you prefer."],
    ["Open model manifest", "Every bundled model, its license lane, and its checksum is declared in one JSON file."],
    ["CLI and SDK", "The same pipeline the app runs is scriptable — for batch, CI, or on-prem automation."],
    ["Cross-platform", "Windows, macOS, Linux. Same project format. Same output."],
  ];
  return (
    <section className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="05" label="What you get" />
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          A workstation, not a wrapper around a model.
        </h2>
        <dl className="mt-14 grid gap-y-8 gap-x-12 md:grid-cols-2">
          {items.map(([term, def]) => (
            <div key={term} className="border-t border-border pt-5">
              <dt className="font-serif text-[22px] text-foreground">{term}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{def}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* ---------------- compared to ---------------- */

function ComparedTo() {
  const rows: [string, string, string, string][] = [
    ["Runs locally", "Yes", "No", "Partial"],
    ["Editable transcript", "Yes", "Limited", "Yes"],
    ["Per-line voice regen", "Yes", "No", "No"],
    ["Speaker-aware voicing", "Yes", "Yes", "Manual"],
    ["Deterministic runs", "Yes", "No", "No"],
    ["Resumable jobs", "Yes", "N/A", "No"],
    ["Scriptable via CLI/SDK", "Yes", "API only", "No"],
    ["No account required", "Yes", "No", "No"],
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="06" label="Compared to" />
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Trackdub, next to how dubbing usually gets done.
        </h2>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <th className="border-b border-border py-4 pr-4 font-normal"></th>
                <th className="border-b border-border py-4 pr-4 font-normal text-foreground">Trackdub</th>
                <th className="border-b border-border py-4 pr-4 font-normal">Cloud dubbing SaaS</th>
                <th className="border-b border-border py-4 font-normal">DIY (Whisper + TTS + DAW)</th>
              </tr>
            </thead>
            <tbody className="font-mono text-[13px]">
              {rows.map(([label, a, b, c]) => (
                <tr key={label}>
                  <td className="border-b border-border py-4 pr-4 font-serif text-[16px] font-normal text-foreground">{label}</td>
                  <td className="border-b border-border py-4 pr-4 text-foreground">{a}</td>
                  <td className="border-b border-border py-4 pr-4 text-muted-foreground">{b}</td>
                  <td className="border-b border-border py-4 text-muted-foreground">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- pricing ---------------- */

function Pricing() {
  const plans = [
    {
      name: "Personal",
      price: "Free",
      note: "Non-commercial use",
      features: [
        "Full desktop app",
        "Local pipeline",
        "Non-commercial model lane",
        "Community support",
      ],
      cta: "Download",
      href: "mailto:hello@trackdub.com?subject=Trackdub%20Personal",
    },
    {
      name: "Studio",
      price: "$29",
      unit: " / mo",
      note: "Per seat, billed annually",
      features: [
        "Everything in Personal",
        "Commercial model lane",
        "CLI + SDK for automation",
        "Priority email support",
      ],
      cta: "Start Studio",
      href: "mailto:hello@trackdub.com?subject=Trackdub%20Studio",
      featured: true,
    },
    {
      name: "On-prem",
      price: "Contact",
      note: "For teams and vendors",
      features: [
        "Everything in Studio",
        "REST API + Worker",
        "SSO and audit log",
        "NDA-friendly deployment",
      ],
      cta: "Talk to us",
      href: "mailto:hello@trackdub.com?subject=Trackdub%20On-prem",
    },
  ];
  return (
    <section id="pricing" className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="07" label="Pricing" />
        <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Three ways to run it. All of them local-first.
        </h2>
        <div className="mt-14 grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {plans.map((p) => (
            <div key={p.name} className="p-8">
              <div className="flex items-center gap-3">
                <div className="font-serif text-2xl text-foreground">{p.name}</div>
                {p.featured && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                    Recommended
                  </span>
                )}
              </div>
              <div className={`mt-5 font-serif text-5xl tracking-tight ${p.featured ? "text-accent" : "text-foreground"}`}>
                {p.price}
                {p.unit && <span className="font-sans text-lg text-muted-foreground">{p.unit}</span>}
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {p.note}
              </p>
              <ul className="mt-8 space-y-3 text-[15px] text-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-px w-4 flex-none bg-accent" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                {p.featured ? (
                  <InkButton href={p.href}>{p.cta}</InkButton>
                ) : (
                  <a href={p.href} className="inline-flex items-baseline gap-1 border-b border-foreground/40 pb-0.5 text-foreground hover:border-accent hover:text-accent">
                    {p.cta} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- faq ---------------- */

function FAQ() {
  const items = [
    {
      q: "Does my video get uploaded anywhere?",
      a: "No. Trackdub runs the whole pipeline on your machine by default. Cloud endpoints exist for teams that want them, but they're opt-in per project and per stage — never implicit.",
    },
    {
      q: "Can I use it commercially?",
      a: "Yes, on the Studio and On-prem plans. Trackdub gates model use by license lane: research-only checkpoints are blocked from loading under a commercial context, so you don't ship a video with a model you weren't allowed to use.",
    },
    {
      q: "How is the voice cloning handled?",
      a: "Each detected speaker gets one short reference clip you can review or replace. The voicing stage uses that reference — one voice per person, not one 'AI voice' for the whole video. References stay on your disk.",
    },
    {
      q: "What if the ASR gets a word wrong?",
      a: "Fix it in the transcript. The translation for that line invalidates, the voicing for that line queues for a regen, and nothing else rebuilds. Every stage declares its inputs, so edits propagate exactly as far as they need to.",
    },
    {
      q: "Do I need a GPU?",
      a: "No, but it helps. Trackdub runs on CPU, DirectML, CUDA, CoreML, or Windows ML. On integrated graphics you'll get roughly 2× realtime end-to-end; on a mid-range discrete GPU, 6–9×.",
    },
    {
      q: "Can I automate it?",
      a: "Yes. The Studio and On-prem plans include the Trackdub CLI and SDK. The same pipeline the app runs is scriptable for batch localization, CI, or an on-prem REST worker.",
    },
  ];
  return (
    <section id="faq" className="border-b border-border bg-surface/40">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionNumber n="08" label="Questions" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Straight answers.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              Not covered here? Write to{" "}
              <TextLink href="mailto:hello@trackdub.com">hello@trackdub.com</TextLink>.
            </p>
          </div>
          <dl className="lg:col-span-8">
            {items.map((it, i) => (
              <div key={it.q}>
                {i > 0 && <Rule />}
                <div className="grid gap-4 py-6 md:grid-cols-[220px_1fr] md:gap-8">
                  <dt className="font-serif text-[20px] leading-snug text-foreground">{it.q}</dt>
                  <dd className="text-[16px] leading-relaxed text-muted-foreground">{it.a}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- endnote ---------------- */

function Endnote() {
  return (
    <section className="border-b border-border">
      <Container className="py-24 sm:py-36 text-center">
        <SectionNumber n="09" label="End" />
        <p className="mx-auto mt-8 max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-foreground sm:text-5xl">
          Dub this in Spanish. Keep the original music. Regenerate line 42 with slower prosody.
          Ship it before lunch.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <InkButton href="#pricing">Get Trackdub</InkButton>
          <TextLink href="mailto:hello@trackdub.com">Talk to us →</TextLink>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- colophon ---------------- */

function Colophon() {
  const cols: [string, [string, string][]][] = [
    [
      "Product",
      [
        ["Pipeline", "#pipeline"],
        ["Control", "#control"],
        ["Performance", "#performance"],
        ["Pricing", "#pricing"],
      ],
    ],
    [
      "Developers",
      [
        ["CLI", "mailto:hello@trackdub.com?subject=CLI"],
        ["SDK", "mailto:hello@trackdub.com?subject=SDK"],
        ["REST API", "mailto:hello@trackdub.com?subject=API"],
        ["Model manifest", "mailto:hello@trackdub.com?subject=Manifest"],
      ],
    ],
    [
      "Company",
      [
        ["Contact", "mailto:hello@trackdub.com"],
        ["Press", "mailto:press@trackdub.com"],
        ["Security", "mailto:security@trackdub.com"],
        ["Legal", "mailto:legal@trackdub.com"],
      ],
    ],
  ];
  return (
    <footer className="bg-background">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-serif text-3xl leading-none text-foreground">
              Trackdub<span className="text-accent">.</span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted-foreground">
              A desktop workstation for dubbing video. Local-first. Editable at every stage.
            </p>
          </div>
          {cols.map(([h, links]) => (
            <div key={h} className="lg:col-span-2">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{h}</div>
              <ul className="mt-4 space-y-2 text-[14px]">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-foreground hover:text-accent">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Build</div>
            <ul className="mt-4 space-y-2 font-mono text-[12px] text-muted-foreground">
              <li>v 0.9.2</li>
              <li>rev 4c1a8f</li>
              <li>2026-07-23</li>
            </ul>
          </div>
        </div>
        <Rule className="mt-14" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>© 2026 Trackdub</span>
          <span>Set in Instrument Serif, Work Sans, JetBrains Mono</span>
        </div>
      </Container>
    </footer>
  );
}
