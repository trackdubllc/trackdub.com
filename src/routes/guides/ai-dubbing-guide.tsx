import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/guides/ai-dubbing-guide")({
  head: () => ({
    meta: [
      { title: "Dubbing AI: A Practical Guide to Local-First Workflows — Trackdub" },
      {
        name: "description",
        content:
          "How dubbing AI actually works in 2026 — a stage-by-stage guide to local-first video dubbing, and how it compares to cloud-based services on control, cost, and privacy.",
      },
      { property: "og:title", content: "Dubbing AI: A Practical Guide to Local-First Workflows" },
      {
        property: "og:description",
        content:
          "A stage-by-stage guide to dubbing AI: ASR, translation, diarization, TTS, and mix — and why local-first workstations beat black-box cloud services for serious work.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://www.trackdub.com/guides/ai-dubbing-guide" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dubbing AI: A Practical Guide to Local-First Workflows" },
      {
        name: "twitter:description",
        content:
          "How dubbing AI works, stage by stage — and why local-first beats black-box cloud pipelines.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.trackdub.com/guides/ai-dubbing-guide" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Dubbing AI: A Practical Guide to Local-First Workflows",
          description:
            "A stage-by-stage guide to dubbing AI and how local-first workstations compare to cloud services.",
          author: { "@type": "Organization", name: "Trackdub" },
          publisher: { "@type": "Organization", name: "Trackdub" },
          mainEntityOfPage: "https://www.trackdub.com/guides/ai-dubbing-guide",
        }),
      },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <nav className="mb-10 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            ← Back to Trackdub
          </Link>
        </nav>

        <article className="space-y-8 leading-relaxed">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Guide · Dubbing AI
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              Dubbing AI: a practical guide to local-first workflows
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything that happens between a source clip and a finished dub — and
              why serious teams are moving dubbing AI off cloud services and onto
              local workstations.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">What "dubbing AI" actually means</h2>
            <p>
              Dubbing AI is a chain of models, not a single one. A source video is
              transcribed, translated, cut into speaker turns, revoiced with
              synthesized speech, and mixed back against the original music and
              effects. Every stage has its own failure modes — mistranscribed
              names, off-tone translations, wrong speaker on a line, a TTS take
              that clips the timeline. The quality of a dubbed video is the
              quality of the weakest stage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">The six stages, in order</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong>Ingest.</strong> Demux the source, normalize sample rate,
                keep the original picture untouched.
              </li>
              <li>
                <strong>Transcription (ASR).</strong> Turn source speech into
                timestamped text. This is where names, jargon, and overlapping
                speech get mangled.
              </li>
              <li>
                <strong>Translation.</strong> Convert the transcript into the
                target language with context — idioms, register, on-screen text.
              </li>
              <li>
                <strong>Diarization &amp; speaker assignment.</strong> Group turns
                by speaker so the right voice reads the right lines.
              </li>
              <li>
                <strong>Voice generation (TTS).</strong> Synthesize each line in a
                voice that fits the speaker and the timing budget of the shot.
              </li>
              <li>
                <strong>Mix &amp; preview.</strong> Duck the original dialogue,
                keep music and effects, and render a preview you can actually
                judge.
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">Cloud dubbing AI vs. local-first</h2>
            <p>
              Cloud dubbing services are convenient for one-off clips. For real
              work — a series, a client backlog, footage under NDA — the tradeoffs
              add up quickly.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border">
                <thead>
                  <tr className="bg-muted/40 text-left">
                    <th className="p-3 border-b border-border">Concern</th>
                    <th className="p-3 border-b border-border">Cloud dubbing service</th>
                    <th className="p-3 border-b border-border">Local-first workstation</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr>
                    <td className="p-3 border-b border-border">Control</td>
                    <td className="p-3 border-b border-border">One button, opaque pipeline</td>
                    <td className="p-3 border-b border-border">Every stage inspectable and re-runnable</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">Fixing one line</td>
                    <td className="p-3 border-b border-border">Usually re-runs everything</td>
                    <td className="p-3 border-b border-border">Regenerate that line, keep the rest</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">Cost model</td>
                    <td className="p-3 border-b border-border">Per-minute, forever</td>
                    <td className="p-3 border-b border-border">One-time license, unlimited local runs</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">Data</td>
                    <td className="p-3 border-b border-border">Media uploaded to a third party</td>
                    <td className="p-3 border-b border-border">Stays on your machine unless you opt in</td>
                  </tr>
                  <tr>
                    <td className="p-3">Reliability</td>
                    <td className="p-3">Fails whole jobs on transient errors</td>
                    <td className="p-3">Resumable jobs, typed failure classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">Why local-first wins for serious work</h2>
            <p>
              Modern consumer GPUs run the entire dubbing AI stack fast enough for
              production. DirectML and TensorRT RTX push ASR and TTS well past
              real-time on a mid-range card; CPU fallback keeps the pipeline
              usable on laptops. Once inference lives on your hardware, three
              things change:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sovereignty.</strong> NDA footage never leaves the
                machine. There's no "we sent it to the vendor" conversation.
              </li>
              <li>
                <strong>Cost.</strong> Per-minute billing disappears. A season of
                episodes costs the same as a single clip.
              </li>
              <li>
                <strong>Iteration.</strong> You can rerun a single stage in
                seconds instead of waiting on a queue.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">What to look for in a dubbing AI tool</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Every stage is editable, not just the final output.</li>
              <li>Fixing one line doesn't invalidate the rest of the project.</li>
              <li>Jobs are resumable after crashes, OOMs, or cancellations.</li>
              <li>Errors name the stage and the cause, not a generic "failed".</li>
              <li>Local acceleration is real — DirectML, TensorRT RTX, or equivalent — with an honest CPU fallback.</li>
              <li>Stems (vocals, music, effects) can be separated and re-mixed.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">Where Trackdub fits</h2>
            <p>
              Trackdub is a Windows desktop workstation built around this
              philosophy: dubbing AI as a pipeline you drive, not a service you
              submit to. Ingest, ASR, translation, diarization, TTS, and mix are
              all separate, inspectable stages. Fix one line, reassign a speaker,
              swap a voice — the rest of the project stays intact. Media stays
              local unless you explicitly opt a stage into a cloud model.
            </p>
            <p>
              <Link to="/" className="underline underline-offset-4">
                See the full workflow on the Trackdub homepage →
              </Link>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}