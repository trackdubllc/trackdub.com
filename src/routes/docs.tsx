import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Docs · Trackdub" },
      {
        name: "description",
        content:
          "Trackdub documentation: CLI usage, pipeline stages, execution providers, system requirements, and the bundled model manifest.",
      },
      { property: "og:title", content: "Docs · Trackdub" },
      {
        property: "og:description",
        content: "CLI usage, pipeline stages, execution providers, and the bundled model manifest.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/docs" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/docs" }],
  }),
  component: DocsPage,
});

function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-ink">
      <TopBar />
      <main>
        <Header />
        <Quickstart />
        <Stages />
        <Providers />
        <Manifest />
        <MoreDocs />
      </main>
      <FooterMini />
    </div>
  );
}

function TopBar() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link to="/" className="font-serif text-2xl leading-none text-foreground">
          Trackdub<span className="text-accent">.</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-baseline gap-1 border-b border-foreground/30 pb-0.5 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground hover:border-accent hover:text-accent"
        >
          ← Back to site
        </Link>
      </div>
    </header>
  );
}

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

function Header() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="00" label="Docs" />
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.03] tracking-tight text-foreground sm:text-6xl">
          How the pipeline actually works.
        </h1>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          This is an early set of docs: CLI usage, pipeline stages, execution providers, and the
          model manifest. A full reference lands with v1.
        </p>
      </Container>
    </section>
  );
}

function Pre({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto border border-border bg-surface p-4 font-mono text-[13px] leading-relaxed text-foreground">
      {children}
    </pre>
  );
}

function Quickstart() {
  return (
    <section id="quickstart" className="border-b border-border bg-surface/40">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="01" label="CLI quickstart" />
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          The CLI runs the same pipeline the desktop app runs.
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          No separate headless engine, no feature gap: same stages, same models, scriptable for
          batch localization or CI. Included on every tier, Free included.
        </p>
        <div className="mt-10 space-y-4">
          <Pre>{`trackdub dub --media ./video.mp4 --target-language es`}</Pre>
          <Pre>{`trackdub dub --media ./video.mp4 --target-language de \\
  --model asr:whisper-small --model tts:kokoro-onnx`}</Pre>
          <Pre>{`trackdub dub --preset my-preset --input-dir ./videos`}</Pre>
        </div>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Re-running the same project skips already-completed stages; only what changed reruns.
        </p>
      </Container>
    </section>
  );
}

function Stages() {
  const stages = [
    ["01", "Ingest", "Probe the container, extract audio, detect scenes and speech."],
    ["02", "Transcribe", "Source-language ASR with word-level timestamps."],
    ["03", "Translate", "Per-line MT against an editable target script and glossary."],
    ["04", "Diarize", "Cluster speakers, attach a voice reference to each."],
    ["05", "Voice", "Per-speaker zero-shot TTS. Any single line can regenerate on its own."],
    ["06", "Mix", "Align to source timing, duck under preserved music/SFX, mux the export."],
  ];
  return (
    <section className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="02" label="Pipeline stages" />
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Six stages. Each one a real, inspectable artifact.
        </h2>
        <ol className="mt-12 border-t border-border">
          {stages.map(([n, name, body]) => (
            <li key={n} className="grid grid-cols-12 gap-x-4 border-b border-border py-5">
              <div className="col-span-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {n}
              </div>
              <div className="col-span-3 font-serif text-[20px] text-foreground">{name}</div>
              <div className="col-span-8 text-[14px] leading-relaxed text-muted-foreground">
                {body}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Full interactive walkthrough on the{" "}
          <a href="/#pipeline" className="text-foreground hover:text-accent">
            homepage
          </a>
          .
        </p>
      </Container>
    </section>
  );
}

function Providers() {
  const providers: [string, string, string][] = [
    ["TensorRT RTX", "Windows · RTX 30/40/50", "Auto-selected on supported GPUs."],
    [
      "DirectML",
      "Windows · any DX12 GPU",
      "Broadest Windows GPU coverage, incl. Intel Arc, AMD Radeon.",
    ],
    ["CUDA", "Windows / Linux · NVIDIA", "Used on non-RTX NVIDIA cards."],
    ["CoreML", "macOS · Apple Silicon", "Neural Engine + GPU, auto-selected on M-series."],
    [
      "CPU (ONNX Runtime)",
      "All platforms",
      "Always available. No GPU required to complete a project.",
    ],
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="03" label="Execution providers" />
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Fallback is per-stage, not per-project.
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          A missing provider on one stage doesn't disable the rest of the pipeline; each stage picks
          the fastest provider your hardware supports and falls back on its own.
        </p>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {providers.map(([name, platform, note]) => (
            <div key={name} className="bg-background p-5">
              <div className="font-serif text-[20px] text-foreground">{name}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {platform}
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Manifest() {
  return (
    <section id="manifest" className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="04" label="Model manifest" />
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Every bundled model, declared, not implied.
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          <code className="rounded-sm bg-surface px-1.5 py-0.5 font-mono text-[14px]">
            bundled-models.manifest.json
          </code>{" "}
          lists every model Trackdub ships: task, license, whether commercial use is allowed, and a
          checksum. No research-only or non-commercial-only checkpoint ships in any tier.
        </p>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            "VAD",
            "ASR",
            "Diarization",
            "Translation",
            "TTS",
            "Source separation",
            "Forced alignment",
            "Lip sync",
          ].map((task) => (
            <div key={task} className="bg-background p-4 font-mono text-[12px] text-foreground">
              {task}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MoreDocs() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-20 text-center sm:py-28">
        <SectionNumber n="05" label="More" />
        <p className="mx-auto mt-6 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl">
          Full API and SDK reference lands with v1.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
          Building something against the pipeline now? Write to{" "}
          <a
            href="mailto:hello@trackdub.com?subject=Trackdub%20SDK"
            className="border-b border-foreground/40 pb-0.5 text-foreground hover:border-accent hover:text-accent"
          >
            hello@trackdub.com
          </a>{" "}
          and we'll loop you in as it ships.
        </p>
      </Container>
    </section>
  );
}

function FooterMini() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:px-10">
        <span>© 2026 Trackdub</span>
        <Link to="/" className="text-foreground hover:text-accent">
          trackdub.com
        </Link>
      </div>
    </footer>
  );
}
