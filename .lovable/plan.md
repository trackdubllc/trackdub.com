## Goal

Rework the Trackdub marketing site so it reads like a serious, well-made tool — closer to an editorial spec sheet or an engineering journal than a 2020s AI-startup landing page. Keep the current information architecture (it's already good); change the visual and tonal register.

## What changes

### 1. Palette + surface — warm technical, light

Replace the current dark graphite/cyan tokens in `src/styles.css` with:

- `--background`: warm off-white `#faf8f5`
- `--surface`: `#efe9df` (paper/muted panels)
- `--foreground`: near-black graphite `#1c1c1c`
- `--muted-foreground`: warm gray around `#6b665e`
- `--accent`: muted amber `#b8641f` — used sparingly (one accent per section max: an underline, a marker, an active state)
- `--border`: warm hairline `#d9d3c7` at ~1px
- Remove: hero radial gradients, cyan glow, dark card shadows, glassmorphism blurs, animated pulsing accent dots on decorative elements

Keep the dark palette only inside product mockup panels (the app is a dark UI) — so mockups look like real screenshots inset on a light page. This contrast alone stops the page feeling "AI-generic."

### 2. Typography — editorial serif + technical mono for spec bits

- Load Instrument Serif (headings), Work Sans (body), JetBrains Mono (metadata / spec numbers / captions) via `<link>` in `__root.tsx`; register in `@theme`.
- Headline sizes go up (magazine lead: ~72–96px on desktop), weight stays regular. No all-caps hero.
- Body at 17–18px, generous measure (~66ch), warm-gray secondary text.
- Mono used for: pipeline stage labels, timecode, file sizes, latency numbers, footnotes/section numbers. This is the "spec sheet" tell.
- Kill: gradient text, `text-transparent bg-clip-text`, oversized geometric sans headings.

### 3. Layout — magazine

Restructure `src/routes/index.tsx` sections around an editorial grid (12-col on desktop, generous margins, hairline rules between sections, small numbered section headers like `01 / Ingest`).

Section order and treatment:

1. **Masthead / nav** — thin, no pill. Wordmark left in serif, links in mono small-caps, single text CTA. No sticky glass background; solid paper.
2. **Lead** — big serif headline, short standfirst, one primary link + one secondary. Right column: small metadata block in mono (version, platforms, license lane). No hero gradient, no floating orbs.
3. **Product plate** — a single wide, honest screenshot-style mockup of the workstation (dark UI panel on paper background, thin border, small mono caption underneath like a figure). Replaces the current busy multi-panel hero collage.
4. **Trust strip** — quiet row of small mono labels ("Local by default · Deterministic · Cross-platform · Open manifest"). No logo wall.
5. **The pipeline** — magazine feature. Two-column: left = serif prose explaining the six stages philosophy; right = numbered list of stages (`01`–`06`) with 1-line mono descriptors and a hairline between rows. Each stage links to a deeper anchor.
6. **Six stage chapters** — each stage becomes a short asymmetric spread: 60/40 columns, serif subhead, body copy, and one inset dark mockup showing that stage's UI (script editor, speaker tracks, alignment, etc.). Hairline rule + section number between chapters.
7. **Control / editability** — a "before / after" pair rendered as two stacked plates with mono captions, not a slider gimmick.
8. **Performance** — a spec-sheet table: device, provider, throughput, notes. Mono numbers, hairlines, no cards.
9. **What you get** — feature list as a dense two-column definition list (`term` / `description`), not a card grid.
10. **Compared to** — small comparison table with hairlines; check/dash marks in mono, no colored gradients.
11. **Pricing** — three plans as three columns separated by hairlines on paper, not floating cards. Amber accent only on the recommended plan's price.
12. **FAQ** — plain typographic Q&A, serif Q, sans A, hairline between.
13. **Endnote CTA** — one line of serif text + one link. No full-bleed gradient panel.
14. **Colophon / footer** — small mono, columns of links, version and build info at the bottom like a real tool's about page.

### 4. Motion + decoration — subtract

- Remove: animated waveform bars in decorative positions, pulsing dots, drifting gradients, `bg-hero` radial, `bg-grid` background overlays on decorative sections.
- Keep: reduced fade-up on section entrance (already respects `prefers-reduced-motion`).
- Add: subtle hairline dividers, small figure numbers, mono footnotes. That's the whole decorative vocabulary.

### 5. Copy pass

Tighten in Trackdub's voice: technical, direct, no "AI-powered / revolutionary / magic." Prefer concrete lines like "Regenerate line 42 with slower prosody" over benefit-speak. Keep CTAs as text links or thin buttons, not gradient blobs.

## Files touched

- `src/styles.css` — replace color tokens, remove hero/grid gradients + decorative keyframes we stop using, add `--color-surface`, `--font-serif`, `--font-sans`, `--font-mono` tokens, hairline border color, mono utility.
- `src/routes/__root.tsx` — add Google Fonts `<link>` for Instrument Serif + Work Sans + JetBrains Mono; leave metadata as-is.
- `src/routes/index.tsx` — restructure into the magazine sections above; delete the dark-hero collage in favor of a single figure; convert card grids to definition lists / tables; swap sticky glass nav for a solid paper masthead.

## What stays

- Same information (pipeline, features, comparison, pricing, FAQ, footer content).
- Same route structure, same head metadata, same SEO copy targets.
- No backend, no auth, no new dependencies beyond web fonts.

## Out of scope

- Product screenshots from the real desktop app (we'll keep original CSS/SVG mockups, just fewer and more honest).
- Dark-mode toggle for the marketing site — the site is intentionally light; only mockups are dark.
