## Goal

Shift the marketing site from warm-paper editorial to a **light neutral, kinetic** feel: cool off-white base, crisp sans typography, strong sectioning via full-bleed alternating bands, and moderate motion (level 3/5). Keep all content, routes, SEO, and interactive components (Walkthrough, ResumableJob, Architecture, Privacy, System Requirements) intact — this is a visual and motion pass only.

## What changes

### 1. Palette + typography (`src/styles.css`)

- Replace warm-paper tokens with cool neutrals:
  - `--background`: cool off-white `#f6f7f9`
  - `--surface`: `#eceef2` (band B)
  - `--surface-2`: `#1a1d21` graphite (band C, used sparingly for one "dark studio" band + mockups)
  - `--foreground`: near-black `#0f1115`
  - `--muted-foreground`: cool gray `#5a6370`
  - `--accent`: crisp signal blue `#2f6df6` (replaces amber; used for one accent per section)
  - `--border` / `--hairline`: `#dfe3ea`
- Fonts: swap Instrument Serif → **Inter Tight** (display) + keep Work Sans (body) + JetBrains Mono (spec). Update `<link>` in `__root.tsx` and `--font-*` tokens.
- Kill remaining warm-paper amber references in components.

### 2. Full-bleed alternating bands

Restructure `src/routes/index.tsx` so every top-level section is `w-screen` full-bleed with an inner `max-w-6xl` container. Band rotation:

```
A (background)  → Hero
B (surface)     → Trust strip
A               → Pipeline overview
C (dark)        → Try it (Walkthrough) — dark band feels like the app
A               → Resumable jobs
B               → Stage chapters
A               → Architecture
B               → Privacy
A               → System requirements
C (dark)        → Performance table — reads like a spec readout
A               → What you get
B               → Compared to
A               → Pricing
B               → FAQ
A               → Endnote CTA
```

Bands are separated by a 1px hairline, no rounded corners on the band itself. Section numbers (`01`, `02`…) move to a small kicker inside each band.

### 3. Motion (level 3 — moderate, not showy)

Introduce a small motion vocabulary, all respecting `prefers-reduced-motion`:

- **Section reveal**: sections fade + translate-up 12px as they enter viewport (IntersectionObserver, once).
- **Band handoff**: subtle 300ms background-color crossfade on the `<main>` element as the current band changes (tracked via IO), so scrolling feels like a continuous surface shifting tone rather than hard cuts.
- **Pipeline flow**: the six-stage overview gets an animated connector — a thin line with a traveling dot looping through stages (2.5s, pauses on hover).
- **Waveform drift**: the hero mockup's waveform bars gently animate amplitude (slow, 4s ease-in-out, staggered).
- **Sticky mini-nav**: on scroll past the hero, a slim progress rail appears on the left showing the current section number and title; clicking jumps. Slides in/out.
- **Hover**: link underline draw-in, button subtle lift (translate-y 1px + border color).
- No parallax, no scroll-snap, no per-letter animation.

Add a `useReveal()` hook and a `<Band variant="a|b|dark" number="03" label="Pipeline">…</Band>` wrapper to keep the sectioning consistent.

### 4. Component polish

- Nav: solid off-white, thin bottom hairline; active section highlights in accent blue.
- Buttons: primary = ink fill, accent = blue outline that fills on hover.
- Tables (Performance, Comparison, Requirements): keep hairlines, add zebra using `--surface` at 40% opacity, sticky header on tall tables.
- Walkthrough tabs: pill-less, underline-driven with an animated underline that slides between tabs.
- ResumableJob progress bars: animate width transitions with 400ms ease, stale badge pulses once on state change (not looping).

### 5. Copy — unchanged

No copy rewrites. Only visual + motion.

## Technical notes

- New file: `src/components/Band.tsx` (full-bleed wrapper, variant + number/label props).
- New hook: `src/hooks/use-reveal.ts` (IntersectionObserver, `once: true`, adds `data-revealed`).
- New hook: `src/hooks/use-active-section.ts` for the sticky progress rail.
- `src/styles.css`: token swap, add `@utility band-a/b/dark`, `@keyframes flow-dot`, `@keyframes wave-drift`, `@utility reveal` (initial opacity 0 + translate, `[data-revealed] &` resets).
- `src/routes/index.tsx`: refactor sections to `<Band>` wrapper; add `<SectionRail>` component; wire hero waveform + pipeline flow-dot animations.
- `src/routes/__root.tsx`: swap font `<link>` to Inter Tight + Work Sans + JetBrains Mono.
- `src/routes/privacy.tsx`: apply new tokens (inherits automatically) + wrap in `<Band>`.

## Files touched

- `src/styles.css`
- `src/routes/__root.tsx`
- `src/routes/index.tsx`
- `src/routes/privacy.tsx`
- `src/components/Band.tsx` (new)
- `src/hooks/use-reveal.ts` (new)
- `src/hooks/use-active-section.ts` (new)

## What stays

- All content, section order, interactive components, route structure, SEO metadata, FAQ, footer links.
- Dark UI mockup panels remain dark (they're supposed to look like the app inset into the page).

## Out of scope

- No new features, no backend, no copy rewrites.
- No dark mode toggle for the site itself.
- No replacement of the SVG mockups.
