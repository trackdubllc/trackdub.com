# Autumn Harvest — Full Chapter Swap Redesign

Move the site away from its current cool neutral look into a warm, dark, editorial world where **every chapter is its own spread**. Shared spine (nav, rail, footer, type system) — but background, accent, layout rhythm, and one signature motion cue change per chapter.

## Design foundation

**Palette (locked tokens in `src/styles.css`)**
- `--ink` `#1a0f0a` — near-black charred brown, primary text on light chapters, base bg on dark chapters
- `--paper` `#f5ede0` — warm cream, base bg on light chapters
- `--burgundy` `#5c2018` — deep chapter background
- `--amber` `#d4842a` — primary accent
- `--gold` `#e8b84a` — secondary accent / highlights
- `--rust` `#8a3a1c` — mid-tone divider / hover
- `--ash` `#2a1e18` — deep neutral for dark chapters
- Semantic tokens (`--background`, `--foreground`, `--accent`, `--muted`, etc.) mapped through `@theme inline` so shadcn components inherit correctly.

**Typography**
- Headings: **Instrument Serif** (loaded via `<link>` in `__root.tsx`), used large and airy with tight tracking.
- Body / UI: **IBM Plex Sans** (loaded via `<link>` in `__root.tsx`).
- Mono (kept for spec strips, pipeline labels, rail readouts): existing JetBrains Mono.
- Type scale is *shared* across chapters; only weight/size emphasis shifts.

## Per-chapter treatments

Each chapter (`#hero`, `#try`, `#control`, `#pipeline`, `#performance`, `#compare`, `#pricing`, `#faq`) becomes its own scene with a distinct background, accent, layout personality, and one signature motion.

```text
01 HERO       cream paper       amber accent   asymmetric editorial     slow drift on hero mock
02 TRY IT     ink black         gold accent    filmstrip / bento        snap-in cards on reveal
03 CONTROL    burgundy          cream text     annotated diagram        margin-note slide-in
04 PIPELINE   ash               amber+gold     numbered vertical spine  pipeline nodes fill L→R
05 PERFORMANCE deep ash+grain   rust           split spec table         bars sweep from 0
06 COMPARE    paper (inverted) burgundy on cream  two-column ledger    row-by-row check marks
07 PRICING    warm cream       amber           tall card + ticket stub  gold underline draw
08 FAQ        ink black        gold            simple stack, mono index accordion crossfade
```

Chapter root wrapper sets its own `--chapter-bg`, `--chapter-fg`, `--chapter-accent`, `--chapter-muted` via a data attribute (`data-chapter="pipeline"`), so every child element (borders, buttons, links, code blocks, section rail dot) inherits without per-component overrides.

## Chapter-to-chapter transitions

Chapters are stacked full-bleed. Between adjacent chapters we get a quirky-but-smooth handoff:

- **Color wipe seam**: a 96–160px band at the join where the outgoing chapter's background diagonally clips into the incoming one (SVG mask, static — no scroll math required).
- **Serif "chapter mark"** floating at each seam: `— 03 —` in Instrument Serif italic, half-in / half-out of both chapters.
- **Scroll-linked reveal on first fold of each chapter**: heading rises + accent underline draws (200–320ms, `cubic-bezier(0.22, 1, 0.36, 1)`), plus the signature motion listed above.
- All motion respects `prefers-reduced-motion` and the existing MotionToggle.

## Spine components (shared, adaptive)

- **TopNav**: becomes a thin hairline bar; text color and hover accent read from current chapter tokens via `mix-blend-mode: difference` fallback + explicit swap on scroll spy.
- **SectionRail**: keeps recent snappy overhaul intact. Ticks, active indicator, and progress fill read from `--chapter-accent`, so the rail visibly shifts hue as you cross chapters. No structural changes to scrubbing / capture / rAF logic.
- **Footer**: settles into ink-black with gold rules.
- **Buttons**: `InkButton` variants restyled — primary is amber fill on ink, ghost is hairline-outlined; both adapt to chapter tokens.

## Files to touch

- `src/styles.css` — replace token block, add `data-chapter` scoped custom properties, add wipe-seam utility, add signature motion keyframes (`drift`, `snap-in`, `bar-sweep`, `underline-draw`, `margin-slide`), keep existing `reveal` + rail utilities.
- `src/routes/__root.tsx` — swap font `<link>`s to Instrument Serif + IBM Plex Sans, update SEO / OG copy tone if needed (no other structural change).
- `src/routes/index.tsx` — wrap each existing chapter section in a `<Chapter id="…" theme="…" motion="…">` component that applies the data attribute, seam, and chapter mark. Rework internal composition per the table above (Hero asymmetric, Pipeline vertical spine, Compare ledger, Pricing ticket-stub, etc.). Restyle `InkButton`, mock UI, waveform, pipeline nodes to consume chapter tokens.
- `src/routes/privacy.tsx` — inherits new base tokens; small pass to keep it readable on cream.

## Out of scope

- No new sections, no copy rewrite beyond section headings if they need to fit new layouts, no changes to the SectionRail interaction logic (scrub, capture, rAF pipeline stay as-is), no backend/data changes.

## Technical notes

- Tailwind v4: all tokens go in `@theme` / `@theme inline` in `src/styles.css`; chapter-scoped overrides use `[data-chapter="x"] { --chapter-accent: …; }` blocks, not JS.
- Instrument Serif + IBM Plex Sans loaded via Google Fonts `<link>` in `__root.tsx` head (never `@import` a URL in `styles.css`).
- Signature motion uses pure CSS keyframes triggered by the existing IntersectionObserver reveal system — no new JS scroll listeners, no layout thrash.
- All new colors respect WCAG AA for body text; amber/gold reserved for accents ≥18px or ≥14px bold.
