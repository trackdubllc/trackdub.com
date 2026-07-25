import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — Trackdub" },
      {
        name: "description",
        content:
          "A working log of real Trackdub engineering milestones, not a highlight reel. Building in public ahead of v1 launch.",
      },
      { property: "og:title", content: "Changelog — Trackdub" },
      {
        property: "og:description",
        content: "Real engineering milestones on the road to v1. Building in public.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/changelog" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/changelog" }],
  }),
  component: ChangelogPage,
});

const ENTRIES: { date: string; title: string; body: string }[] = [
  {
    date: "2026-07-24",
    title: "trackdub.com relaunches",
    body: "New site: honest pricing, a real early-build screenshot next to the interactive mock, and this changelog. No fabricated version numbers or benchmark data — what's not measured yet says so.",
  },
  {
    date: "2026-06-12",
    title: "Forced alignment wired against real models",
    body: "Dubbed lines snap to source timing automatically. Verified against real models, not synthetic fixtures.",
  },
  {
    date: "2026-06-10",
    title: "First full headless dub off real models",
    body: "The whole pipeline — voice detection, diarization, transcription, translation, TTS, export — ran end to end on real models via the CLI, with honest per-stage failure states instead of silent fallbacks. Re-running an unchanged project correctly skipped every already-completed stage.",
  },
  {
    date: "2026-06-01",
    title: "Full pipeline audit",
    body: "A ground-up audit of the dubbing pipeline kicked off the current push toward a v1 release.",
  },
];

function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-ink">
      <TopBar />
      <main>
        <Header />
        <Entries />
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

function Header() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="00" label="Changelog" />
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.03] tracking-tight text-foreground sm:text-6xl">
          Building in public.
        </h1>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          A working log of real engineering milestones, not a highlight reel. This is pre-launch —
          the v1 release changelog starts once Pro ships.
        </p>
      </Container>
    </section>
  );
}

function Entries() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <ol className="space-y-0">
          {ENTRIES.map((e, i) => (
            <li
              key={e.date + e.title}
              className={`grid gap-4 py-8 md:grid-cols-[160px_1fr] md:gap-10 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                {e.date}
              </div>
              <div>
                <h2 className="font-serif text-[22px] text-foreground">{e.title}</h2>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  {e.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
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
