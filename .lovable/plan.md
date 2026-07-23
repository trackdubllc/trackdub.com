## Problems with the current rail

1. **Tiny hit targets.** Each chapter is an `<a>` with `py-0.5` around a 1px dash, so the only clickable pixels are ~4px tall. Clicks that land between chapters hit the rail column but no anchor, so on release nothing happens — the page doesn't jump.
2. **Mouse drag feels indirect.** Every pointer move funnels through a `requestAnimationFrame`-coalesced `scheduleScrub`, adding a frame of latency, and mouse users share the same code path built around touch (velocity sampling, inertia hooks, `touch-action: none`). It doesn't feel "attached" to the cursor.
3. **No feedback in gaps.** The column between chapter dashes has no hover affordance, so users can't tell it's interactive.

## Goal

The rail should feel like a precise chapter picker for mouse and like a scrubbable scrollbar for touch — the two input types get purpose-built behaviors instead of sharing one compromise path.

## Interaction model

**Mouse / trackpad / pen**
- Each chapter row expands to fill its vertical slice of the rail (no gaps). Clicking anywhere between two chapter labels resolves to the nearest chapter and smooth-scrolls to it.
- Dragging with the mouse is 1:1 position-mapped and applied synchronously in `pointermove` — no rAF coalescing, no easing, no inertia. The page tracks the cursor frame-for-frame like a native scrollbar thumb.
- Threshold to promote a press into a drag stays 4px so short clicks always resolve as chapter jumps.
- Hover on any row shows the existing tooltip and highlights the row's full slice, so the hit area is discoverable.

**Touch**
- Keeps today's behavior: position-based scrubbing with a rolling velocity buffer and inertial release, 8px activation threshold.
- Short taps (below threshold) resolve to the nearest chapter on release, just like a mouse click — fixes taps that currently land in gaps.

**Reduced motion**
- Chapter jumps use instant `scrollTo` (already implemented via `prefersReducedMotion`).
- No inertia, no smooth animation on drag or click.

## Visual changes

- Bump the track from 1px to 2px so it reads as an interactive control.
- Each chapter row gets a taller pressable area (min ~28px, flex-distributed so the rail height stays fixed). The visible dash + label stays small; only the hit box grows.
- On hover of a row, subtly tint the row background to signal the hit area.
- Cursor: `pointer` over rows, `grab` over the empty top/bottom padding (drag-only zones), `grabbing` while scrubbing.

## Technical details

File: `src/routes/index.tsx` (the `SectionRail` component, roughly lines 105-660).

1. **Row layout.** Replace `flex flex-col gap-2 py-2` with a fixed-height flex column where each `<a>` is `flex-1 min-h-[28px]` and internally uses `flex items-center` so the dash + tooltip stay centered on the same visual line as today. Remove `gap-2`. The list keeps its role as a slider container but individual rows become the primary hit targets.
2. **Nearest-chapter resolver.** Add a helper `nearestChapterId(clientY)` that iterates `itemsRef.current`, picks the anchor whose vertical center is closest to `clientY`, and returns its id. Reuse on:
   - Mouse click that lands on the list background rather than an anchor (edge case now that rows fill the list, mostly a safety net).
   - Touch tap release below the drag threshold.
3. **Split drag path by pointer type.**
   - Keep `pointerTypeRef` (already exists).
   - In `handleRailPointerMove`, branch on `pointerTypeRef.current`:
     - `"mouse"` / `"pen"`: call `applyScrubFromClientY(e.clientY)` directly (synchronous). Do not push velocity samples. Do not call `scheduleScrub`.
     - `"touch"`: keep `pushSample` + `scheduleScrub` path.
4. **Release behavior.**
   - If not dragging: for mouse, allow the anchor's own `onClick` to run (existing path). For touch below threshold, call `nearestChapterId` on the release point and invoke the same smooth-scroll used by anchor clicks.
   - If dragging on mouse: stop where released (already the case; just skip inertia branch, which is already touch-gated).
   - If dragging on touch: keep the flush + `startInertia(releaseVelocity())`.
5. **Remove now-unused work on mouse path.** `scrubSamplesRef` push/reset only runs when `pointerType === "touch"`. `scrubRafRef` / `pendingScrubYRef` are only touched on the touch path.
6. **Track thickness.** Change `w-px` to `w-0.5` (2px) for the background track and progress fill; keep the accent indicator at 3px.
7. **Hover affordance.** Add a `group-hover:bg-foreground/[0.03]` on each `<a>` row so the full slice lights up on hover. Keep the existing dash and tooltip visuals unchanged.
8. **A11y.** The list keeps `role="slider"` with live `aria-valuenow`. Each row stays an anchor with `aria-label="Jump to <label>"`. Focus-visible ring stays on the row so keyboard tab still highlights the full slice.

Nothing outside `SectionRail` needs to change; smooth-scroll retargeting, hash sync, tooltip, active indicator, and reduced-motion handling remain as-is.

## Out of scope

- No changes to page section anchors or the NAV array.
- No changes to the mobile menu or masthead nav.
- No new dependencies.
