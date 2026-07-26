import { createFileRoute, Link } from "@tanstack/react-router";

const PUBLISHED = "2026-07-01";
const MODIFIED = "2026-07-23";
const URL = "https://trackdub.com/guides/ai-dubbing-guide";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is dubbing AI?",
    a: "Dubbing AI is a chain of models that transcribes source speech, translates it, assigns speakers, generates target-language voices, and mixes them back with the original music and effects. It's a pipeline, not a single model.",
  },
  {
    q: "What is the best AI dubbing software in 2026?",
    a: "The best AI dubbing software depends on the work. Cloud services are fine for one-off social clips. For serial work, NDA footage, or client backlogs, a local-first AI dubbing tool like Trackdub gives you stage-level control, resumable jobs, and no per-minute billing.",
  },
  {
    q: "Can I dub a video with AI locally on my own PC?",
    a: "Yes. A modern consumer GPU with DirectML or TensorRT RTX runs the full AI video dubbing stack — ASR, translation, TTS, and mix — faster than real-time. CPU fallback keeps a laptop usable for shorter jobs.",
  },
  {
    q: "Is AI voice dubbing accurate enough for professional work?",
    a: "Modern AI voice dubbing handles tone, pacing, and speaker identity well, but no model is perfect on names, jargon, or overlapping speech. Professional results come from tools that let you edit the transcript, translation, speaker map, and individual TTS takes without rerunning the whole pipeline.",
  },
  {
    q: "Is there a free AI dubbing tool?",
    a: "Most cloud AI dubbing services offer a limited free tier with watermarks and per-minute caps. Trackdub ships a free desktop tier with a five-minute project limit and a watermark, and a one-time paid license for unlimited local use.",
  },
  {
    q: "How many languages does AI video dubbing support?",
    a: "Language coverage depends on the underlying ASR, MT, and TTS models. Trackdub ships with dozens of source and target languages at launch and adds more as upstream models improve.",
  },
  {
    q: "Does local AI dubbing keep my footage private?",
    a: "Yes — that's the point of a local-first workflow. Media, transcripts, and voice prints stay on your machine. Cloud stages are opt-in per project, per stage, and never implicit.",
  },
];

const CHECKLIST_URL = "/downloads/trackdub-local-first-dubbing-checklist.pdf";
const CHECKLIST_ABSOLUTE_URL =
  "https://trackdub.com/downloads/trackdub-local-first-dubbing-checklist.pdf";
const CHECKLIST_ANCHOR_URL = `${URL}#checklist`;

export const Route = createFileRoute("/guides/ai-dubbing-guide")({
  head: () => ({
    meta: [
      { title: "Dubbing AI in 2026: A Practical Guide to Local-First AI Video Dubbing" },
      {
        name: "description",
        content:
          "How dubbing AI works stage by stage in 2026 — ASR, translation, diarization, TTS, and mix — plus how local AI video dubbing software compares to cloud services.",
      },
      {
        name: "keywords",
        content:
          "dubbing ai, ai dubbing, ai video dubbing, ai dubbing software, ai voice dubbing, ai dubbing tool, local ai dubbing, dub video with ai, ai dubbing free",
      },
      {
        property: "og:title",
        content: "Dubbing AI in 2026: A Practical Guide to Local-First AI Video Dubbing",
      },
      {
        property: "og:description",
        content:
          "A stage-by-stage guide to dubbing AI — ASR, translation, diarization, TTS, mix — and why local AI dubbing software beats black-box cloud services for serious work.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time", content: MODIFIED },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Dubbing AI in 2026: A Practical Guide to Local-First AI Video Dubbing",
      },
      {
        name: "twitter:description",
        content:
          "Dubbing AI stage by stage — and why local AI video dubbing software beats black-box cloud pipelines.",
      },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Dubbing AI in 2026: A Practical Guide to Local-First AI Video Dubbing",
          description:
            "A stage-by-stage guide to dubbing AI — ASR, translation, diarization, TTS, mix — and how local AI dubbing software compares to cloud services.",
          keywords:
            "dubbing ai, ai dubbing, ai video dubbing, ai dubbing software, ai voice dubbing, ai dubbing tool, local ai dubbing, dub video with ai",
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
          author: { "@type": "Organization", name: "Trackdub" },
          publisher: { "@type": "Organization", name: "Trackdub" },
          mainEntityOfPage: URL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trackdub", item: "https://trackdub.com/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Guides",
              item: "https://trackdub.com/guides",
            },
            { "@type": "ListItem", position: 3, name: "Dubbing AI", item: URL },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DigitalDocument",
          "@id": CHECKLIST_ANCHOR_URL,
          name: "Local-First Dubbing Workflow Checklist",
          headline: "Local-First Dubbing Workflow Checklist",
          description:
            "A printable, stage-by-stage checklist for shipping AI-dubbed video without giving up control — ingest, ASR, translation, diarization, TTS, mix, reliability, and privacy.",
          url: CHECKLIST_ANCHOR_URL,
          contentUrl: CHECKLIST_ABSOLUTE_URL,
          encodingFormat: "application/pdf",
          fileFormat: "application/pdf",
          numberOfPages: 2,
          inLanguage: "en",
          isAccessibleForFree: true,
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
          author: { "@type": "Organization", name: "Trackdub" },
          publisher: {
            "@type": "Organization",
            name: "Trackdub",
            url: "https://trackdub.com/",
          },
          license: "https://creativecommons.org/licenses/by/4.0/",
          keywords:
            "dubbing ai checklist, ai video dubbing workflow, local ai dubbing, ai dubbing pipeline",
          isPartOf: { "@type": "Article", "@id": URL },
          about: [
            { "@type": "Thing", name: "AI video dubbing" },
            { "@type": "Thing", name: "Local-first workflow" },
            { "@type": "Thing", name: "Dubbing pipeline" },
          ],
          potentialAction: {
            "@type": "DownloadAction",
            name: "Download the Local-First Dubbing Workflow Checklist",
            target: {
              "@type": "EntryPoint",
              urlTemplate: CHECKLIST_ABSOLUTE_URL,
              contentType: "application/pdf",
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
            expectsAcceptanceOf: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              eligibleRegion: { "@type": "Place", name: "Worldwide" },
              category: "Free download",
            },
          },
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
              Dubbing AI in 2026: a practical guide to local-first AI video dubbing
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything that happens between a source clip and a finished dub — how modern AI video
              dubbing works stage by stage, and why serious teams are moving AI dubbing software off
              cloud services and onto local workstations.
            </p>
            <p className="text-xs text-muted-foreground">
              Published {PUBLISHED} · Updated {MODIFIED} · 8 min read
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">What is dubbing AI?</h2>
            <p>
              Dubbing AI is a chain of models, not a single one. A source video is transcribed,
              translated, cut into speaker turns, revoiced with synthesized speech, and mixed back
              against the original music and effects. AI video dubbing tools stitch these stages
              into one pipeline; the quality of the finished dub is the quality of the weakest link.
              Every stage has its own failure modes — mistranscribed names, off-tone translations,
              the wrong speaker on a line, a TTS take that overruns the shot.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">How AI video dubbing works: the six stages</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong>Ingest.</strong> Demux the source, normalize sample rate, keep the original
                picture untouched.
              </li>
              <li>
                <strong>AI transcription (ASR).</strong> Turn source speech into timestamped text.
                This is where names, jargon, and overlapping speech get mangled.
              </li>
              <li>
                <strong>AI translation.</strong> Convert the transcript into the target language
                with context — idioms, register, on-screen text.
              </li>
              <li>
                <strong>Diarization &amp; speaker assignment.</strong> Group turns by speaker so the
                right voice reads the right lines.
              </li>
              <li>
                <strong>AI voice dubbing (TTS).</strong> Synthesize each line in a voice that fits
                the speaker and the timing budget of the shot.
              </li>
              <li>
                <strong>Mix &amp; preview.</strong> Duck the original dialogue, keep music and
                effects, and render a preview you can actually judge.
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">
              Cloud AI dubbing software vs. local-first workstations
            </h2>
            <p>
              Cloud AI dubbing services are convenient for one-off clips. For real work — a series,
              a client backlog, footage under NDA — the tradeoffs against a local AI dubbing tool
              add up quickly.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border">
                <thead>
                  <tr className="bg-muted/40 text-left">
                    <th className="p-3 border-b border-border">Concern</th>
                    <th className="p-3 border-b border-border">Cloud AI dubbing service</th>
                    <th className="p-3 border-b border-border">Local AI dubbing workstation</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr>
                    <td className="p-3 border-b border-border">Control</td>
                    <td className="p-3 border-b border-border">One button, opaque pipeline</td>
                    <td className="p-3 border-b border-border">
                      Every stage inspectable and re-runnable
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">Fixing one line</td>
                    <td className="p-3 border-b border-border">Usually re-runs everything</td>
                    <td className="p-3 border-b border-border">
                      Regenerate that line, keep the rest
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">Cost model</td>
                    <td className="p-3 border-b border-border">Per-minute, forever</td>
                    <td className="p-3 border-b border-border">
                      One-time license, unlimited local runs
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">Data</td>
                    <td className="p-3 border-b border-border">Media uploaded to a third party</td>
                    <td className="p-3 border-b border-border">
                      Stays on your machine unless you opt in
                    </td>
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
            <h2 className="font-serif text-2xl">Why local AI dubbing wins for serious work</h2>
            <p>
              Modern consumer GPUs run the entire dubbing AI stack fast enough for production.
              DirectML and TensorRT RTX push ASR and AI voice dubbing well past real-time on a
              mid-range card; CPU fallback keeps the pipeline usable on laptops. Once inference
              lives on your hardware, three things change:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Sovereignty.</strong> NDA footage never leaves the machine. There's no "we
                sent it to the vendor" conversation.
              </li>
              <li>
                <strong>Cost.</strong> Per-minute billing disappears. A season of episodes costs the
                same as a single clip.
              </li>
              <li>
                <strong>Iteration.</strong> You can rerun a single stage in seconds instead of
                waiting on a queue.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">What to look for in an AI dubbing tool</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Every stage is editable, not just the final output.</li>
              <li>Fixing one line doesn't invalidate the rest of the project.</li>
              <li>Jobs are resumable after crashes, OOMs, or cancellations.</li>
              <li>Errors name the stage and the cause, not a generic "failed".</li>
              <li>
                Local acceleration is real — DirectML, TensorRT RTX, or equivalent — with an honest
                CPU fallback.
              </li>
              <li>Stems (vocals, music, effects) can be separated and re-mixed.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">How to dub a video with AI in Trackdub</h2>
            <p>
              Trackdub is a Windows desktop workstation built around this philosophy: dubbing AI as
              a pipeline you drive, not a service you submit to. Drop in a clip, pick a target
              language, and Trackdub runs ingest, ASR, translation, diarization, AI voice dubbing,
              and mix as separate, inspectable stages. Fix one line, reassign a speaker, swap a
              voice — the rest of the project stays intact. Media stays local unless you explicitly
              opt a stage into a cloud model.
            </p>
            <p>
              <Link to="/" className="underline underline-offset-4">
                See the full workflow on the Trackdub homepage →
              </Link>
            </p>
          </section>

          <section
            id="checklist"
            className="space-y-4 rounded-md border border-border bg-muted/30 p-6 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Free download · PDF · 2 pages
            </p>
            <h2 className="font-serif text-2xl">Local-First Dubbing Workflow Checklist</h2>
            <p>
              A printable, stage-by-stage checklist for shipping AI-dubbed video without giving up
              control. Eight sections covering ingest, ASR, translation, diarization, TTS, mix,
              reliability, and privacy — every item is a concrete thing to verify before you call a
              pipeline production-ready.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Audit an existing dubbing AI pipeline against a fixed spec.</li>
              <li>Spec a new local AI dubbing workflow from scratch.</li>
              <li>Free to share and adapt with attribution.</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={CHECKLIST_ABSOLUTE_URL}
                download
                type="application/pdf"
                aria-label="Download the Local-First Dubbing Workflow Checklist (PDF, 2 pages)"
                className="inline-flex items-center gap-2 rounded-md border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
              >
                Download the checklist (PDF)
              </a>
              <a
                href={CHECKLIST_ABSOLUTE_URL}
                target="_blank"
                rel="noopener"
                type="application/pdf"
                aria-label="Preview the checklist PDF in a new tab"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted/50"
              >
                Preview in browser →
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Linking to this checklist? Point to{" "}
              <code className="text-foreground">
                trackdub.com/guides/ai-dubbing-guide#checklist
              </code>
              .
            </p>
          </section>

          <section className="space-y-4" id="faq">
            <h2 className="font-serif text-2xl">Dubbing AI FAQ</h2>
            <div className="divide-y divide-border border-t border-b border-border">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group py-4">
                  <summary className="cursor-pointer list-none font-medium flex items-start justify-between gap-4">
                    <span>{q}</span>
                    <span
                      aria-hidden
                      className="text-muted-foreground transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl">Related terms</h2>
            <p className="text-sm text-muted-foreground">
              People searching for this guide also look for: <em>ai dubbing</em>,{" "}
              <em>ai video dubbing</em>, <em>ai dubbing software</em>, <em>ai voice dubbing</em>,{" "}
              <em>ai dubbing tool</em>, <em>local ai dubbing</em>, <em>dub video with ai</em>, and{" "}
              <em>ai dubbing free</em>. This guide covers the same workflow under all of those names
              — it's one pipeline with many labels.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
