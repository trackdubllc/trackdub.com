import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

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
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-ink">
      <Masthead />
      <SectionRail />
      <main>
        <Lead />
        <ProductPlate />
        <TrustStrip />
        <PipelineFeature />
        <Walkthrough />
        <ResumableJob />
        <StageChapters />
        <Control />
        <Performance />
        <Architecture />
        <Privacy />
        <SystemRequirements />
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
  { href: "#resume", label: "Resume" },
  { href: "#control", label: "Control" },
  { href: "#performance", label: "Performance" },
  { href: "#architecture", label: "Architecture" },
  { href: "#privacy", label: "Privacy" },
  { href: "#requirements", label: "Requirements" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];
const NAV_PRIMARY = new Set([
  "#pipeline",
  "#walkthrough",
  "#control",
  "#performance",
  "#pricing",
  "#faq",
]);

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 sm:px-10 ${className}`}>{children}</div>;
}

function SectionNumber({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-accent" aria-hidden />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Chapter
        </span>
      </div>
      <div className="flex items-baseline gap-4 sm:gap-5">
        <span className="font-mono text-2xl leading-none tracking-tight text-accent sm:text-3xl">
          {n}
        </span>
        <span className="h-6 w-px self-center bg-border" aria-hidden />
        <span className="font-serif text-[20px] leading-tight tracking-tight text-foreground sm:text-[24px]">
          {label}
        </span>
      </div>
    </div>
  );
}

function Rule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-border ${className}`} aria-hidden />;
}

/* ---------------- section rail (kinetic progress) ---------------- */

function SectionRail() {
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const itemsRef = useRef<Record<string, HTMLAnchorElement | null>>({});
  const listRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const navIds = useRef(new Set(NAV.map((n) => n.href.slice(1))));
  const activeRef = useRef<string>("");
  const [scrubbing, setScrubbing] = useState(false);
  // Direct DOM refs so scroll/pointer frames write straight to style,
  // bypassing React re-renders and the reconciler.
  const progressFillRef = useRef<HTMLSpanElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const dragStartYRef = useRef(0);
  const draggingRef = useRef(false);
  const suppressClickRef = useRef(false);
  const scrubRafRef = useRef<number | null>(null);
  const pendingScrubYRef = useRef<number | null>(null);
  // Track the active pointer id so global safety-net listeners (window
  // pointercancel, blur, visibilitychange) can force-release capture even
  // if the element-scoped pointerup/cancel never fires — e.g. the OS
  // hijacks the gesture, the tab is backgrounded mid-drag, or a modal
  // steals focus. Without this the drag stays "captured" forever and the
  // rail desyncs from real scroll position on the next interaction.
  const activePointerIdRef = useRef<number | null>(null);
  // Velocity tracking for touch inertia. We keep a short ring buffer of
  // recent pointer samples so release velocity reflects the last ~80ms of
  // motion, not the whole gesture — feels natural on touchscreens.
  const scrubSamplesRef = useRef<Array<{ y: number; t: number }>>([]);
  const pointerTypeRef = useRef<string>("mouse");
  const inertiaRafRef = useRef<number | null>(null);
  // Custom smooth-scroll animation state so we can retarget or interrupt
  // mid-flight (native window.scrollTo({behavior:'smooth'}) can't be cancelled
  // or re-aimed without racing the browser).
  const smoothRafRef = useRef<number | null>(null);
  const smoothTargetRef = useRef<number | null>(null);
  const smoothStartRef = useRef<{ y: number; t: number } | null>(null);
  const smoothDurRef = useRef(560);

  // Single centralized rail-frame scheduler. All DOM writes for the rail
  // (progress fill scaleY, active indicator translateY/height, aria-valuenow,
  // visibility toggle) go through one ordered pass so scroll, resize,
  // active-change, and pointer scrubs never race or double-write.
  const scheduleRailFrameRef = useRef<() => void>(() => {});

  const prefersReducedMotion = () =>
    typeof document !== "undefined" &&
    (document.documentElement.classList.contains("reduce-motion") ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);

  const cancelSmoothScroll = () => {
    if (smoothRafRef.current !== null) {
      window.cancelAnimationFrame(smoothRafRef.current);
      smoothRafRef.current = null;
    }
    smoothTargetRef.current = null;
    smoothStartRef.current = null;
  };

  const cancelInertia = () => {
    if (inertiaRafRef.current !== null) {
      window.cancelAnimationFrame(inertiaRafRef.current);
      inertiaRafRef.current = null;
    }
  };

  const easeOutExpo = (t: number) =>
    t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);

  const animateScrollTo = (targetY: number) => {
    const docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const clamped = Math.min(docMax, Math.max(0, targetY));
    // If a scroll is in flight, retarget it: keep the current position as the
    // new start and restart the clock so easing stays continuous.
    smoothTargetRef.current = clamped;
    const now = performance.now();
    const distance = Math.abs(clamped - window.scrollY);
    // Scale duration modestly with distance, capped for snappiness.
    smoothDurRef.current = Math.min(280, Math.max(140, 120 + distance * 0.08));
    smoothStartRef.current = { y: window.scrollY, t: now };
    if (smoothRafRef.current !== null) return; // loop already running
    const step = () => {
      const start = smoothStartRef.current;
      const target = smoothTargetRef.current;
      if (start === null || target === null) {
        smoothRafRef.current = null;
        return;
      }
      const elapsed = performance.now() - start.t;
      const p = Math.min(1, elapsed / smoothDurRef.current);
      const y = start.y + (target - start.y) * easeOutExpo(p);
      window.scrollTo(0, y);
      if (p < 1) {
        smoothRafRef.current = window.requestAnimationFrame(step);
      } else {
        smoothRafRef.current = null;
        smoothTargetRef.current = null;
        smoothStartRef.current = null;
      }
    };
    smoothRafRef.current = window.requestAnimationFrame(step);
  };

  const scrollToTargetId = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY;
    if (prefersReducedMotion()) {
      cancelSmoothScroll();
      window.scrollTo({ top, behavior: "auto" });
      return;
    }
    animateScrollTo(top);
  };

  const applyScrubFromClientY = (clientY: number) => {
    const list = listRef.current;
    if (!list) return;
    const box = list.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (clientY - box.top) / Math.max(1, box.height)));
    const docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    // Scrubbing takes over from any in-flight smooth scroll.
    cancelSmoothScroll();
    window.scrollTo({ top: f * docMax, behavior: "auto" });
    // Nudge the centralized rail scheduler so progress/indicator update on
    // the same frame as the scroll write — don't wait for scroll event.
    scheduleRailFrameRef.current();
  };

  // Resolve a pointer y to the nearest chapter anchor. Powers "click anywhere
  // on the rail" — clicks that don't land exactly on an anchor still jump to
  // the closest chapter instead of doing nothing.
  const nearestChapterId = (clientY: number): string | null => {
    let bestId: string | null = null;
    let bestDist = Infinity;
    for (const [id, el] of Object.entries(itemsRef.current)) {
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const d = Math.abs(clientY - center);
      if (d < bestDist) {
        bestDist = d;
        bestId = id;
      }
    }
    return bestId;
  };

  const jumpToChapter = (id: string) => {
    const href = `#${id}`;
    if (window.history?.pushState) {
      window.history.pushState(null, "", href);
      setActive(id);
    } else {
      window.location.hash = href;
    }
    scrollToTargetId(id);
  };

  // Convert a pointer sample into document scroll position, but only push
  // samples for velocity — the actual scroll happens via applyScrubFromClientY.
  const pushSample = (clientY: number) => {
    const list = listRef.current;
    if (!list) return;
    const box = list.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (clientY - box.top) / Math.max(1, box.height)));
    const docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const y = f * docMax;
    const now = performance.now();
    const buf = scrubSamplesRef.current;
    buf.push({ y, t: now });
    // Keep only the last ~120ms of samples.
    while (buf.length > 2 && now - buf[0].t > 120) buf.shift();
  };

  const releaseVelocity = () => {
    const buf = scrubSamplesRef.current;
    if (buf.length < 2) return 0;
    const first = buf[0];
    const last = buf[buf.length - 1];
    const dt = Math.max(1, last.t - first.t);
    return (last.y - first.y) / dt; // px per ms in document space
  };

  const startInertia = (v0: number) => {
    // Ignore trivial flicks so a slow drag doesn't drift after release.
    if (Math.abs(v0) < 0.35) return;
    cancelInertia();
    cancelSmoothScroll();
    let v = v0;
    let last = performance.now();
    // Exponential decay — friction tuned so a hard fling settles in ~600ms.
    const decayPerMs = 0.995;
    const step = () => {
      const now = performance.now();
      const dt = now - last;
      last = now;
      const docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const nextY = Math.min(docMax, Math.max(0, window.scrollY + v * dt));
      window.scrollTo(0, nextY);
      v *= Math.pow(decayPerMs, dt);
      // Stop at edges or when velocity is negligible.
      if (Math.abs(v) < 0.02 || nextY === 0 || nextY === docMax) {
        inertiaRafRef.current = null;
        return;
      }
      inertiaRafRef.current = window.requestAnimationFrame(step);
    };
    inertiaRafRef.current = window.requestAnimationFrame(step);
  };

  const scheduleScrub = (clientY: number) => {
    pendingScrubYRef.current = clientY;
    if (scrubRafRef.current !== null) return;
    scrubRafRef.current = window.requestAnimationFrame(() => {
      scrubRafRef.current = null;
      const y = pendingScrubYRef.current;
      pendingScrubYRef.current = null;
      if (y !== null) applyScrubFromClientY(y);
    });
  };
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Cancel any in-flight smooth scroll the moment the user takes over with
  // the wheel, touch, or keyboard — the animation should never fight input.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const cancel = () => {
      cancelSmoothScroll();
      cancelInertia();
    };
    const onKey = (e: KeyboardEvent) => {
      // Only cancel for keys that actually scroll.
      const scrollKeys = new Set([
        "PageUp", "PageDown", "Home", "End",
        "ArrowUp", "ArrowDown", " ", "Spacebar",
      ]);
      if (scrollKeys.has(e.key)) cancel();
    };
    // All three are read-only w.r.t. the event (never preventDefault) — mark
    // passive so the browser can start scrolling without waiting on this JS.
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", onKey, { passive: true });
    return () => {
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", onKey);
      cancelSmoothScroll();
      cancelInertia();
    };
  }, []);

  // Sync with URL hash — deep links should highlight the right chapter.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const syncFromHash = () => {
      const id = window.location.hash.slice(1);
      if (id && navIds.current.has(id) && id !== activeRef.current) {
        setActive(id);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = NAV.map((n) => n.href.slice(1));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    // Track intersection ratios in a map so the "most visible" pick is O(n)
    // over sections, not a resort of every entry batch.
    const ratios = new Map<string, number>();
    targets.forEach((t) => ratios.set(t.id, 0));
    let currentActive = "";

    const pickActive = () => {
      let bestId = currentActive;
      let bestRatio = -1;
      ratios.forEach((r, id) => {
        if (r > bestRatio) {
          bestRatio = r;
          bestId = id;
        }
      });
      if (bestRatio > 0 && bestId !== currentActive) {
        currentActive = bestId;
        setActive(bestId);
      }
    };

    // Coalesce IO callbacks + pickActive into a single rAF so a burst of
    // entries during fast scrolls schedules exactly one setState.
    let pickScheduled = false;
    const schedulePick = () => {
      if (pickScheduled) return;
      pickScheduled = true;
      window.requestAnimationFrame(() => {
        pickScheduled = false;
        pickActive();
      });
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        }
        schedulePick();
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    targets.forEach((t) => io.observe(t));

    // Cache scroll extent — recompute only when layout actually changes,
    // not inside the scroll handler (avoids forced reflow every frame).
    let docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    let lastVisible = false;
    let lastProgress = -1;
    let lastAria = -1;
    let lastIndTop = Number.NaN;
    let lastIndHeight = Number.NaN;
    let rafId: number | null = null;
    let ticking = false;

    // Strict-ordered, redundant-write-free write pass. Reads first, then
    // writes in a fixed order: visibility → progress fill → aria-valuenow →
    // indicator geometry. Each property gates on a "changed enough" check
    // so we never touch style or attributes when nothing moved.
    const writeRailFrame = () => {
      ticking = false;
      rafId = null;

      // 1) Reads (batched — no interleaved writes → no layout thrash)
      const y = window.scrollY;
      const p = docMax > 0 ? Math.min(1, Math.max(0, y / docMax)) : 0;
      const activeEl = itemsRef.current[activeRef.current];

      // 2) Visibility
      const nextVisible = y > 480;
      if (nextVisible !== lastVisible) {
        lastVisible = nextVisible;
        setVisible(nextVisible);
      }

      // 3) Progress fill
      if (Math.abs(p - lastProgress) > 0.002) {
        lastProgress = p;
        const fill = progressFillRef.current;
        if (fill) fill.style.transform = `scaleY(${p})`;
      }

      // 4) aria-valuenow — only when the rounded value flips
      const ariaVal = Math.round(p * 100);
      if (ariaVal !== lastAria) {
        lastAria = ariaVal;
        const list = listRef.current;
        if (list) list.setAttribute("aria-valuenow", String(ariaVal));
      }

      // 5) Active indicator — offsetTop/offsetHeight against offsetParent
      //    (the rail list) is cheap, no full layout flush.
      if (activeEl) {
        const top = activeEl.offsetTop;
        const height = activeEl.offsetHeight;
        const ind = indicatorRef.current;
        if (ind) {
          if (top !== lastIndTop) {
            lastIndTop = top;
            ind.style.transform = `translateY(${top}px)`;
          }
          if (height !== lastIndHeight) {
            lastIndHeight = height;
            ind.style.height = `${height}px`;
          }
        }
      }
    };

    const schedule = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(writeRailFrame);
    };

    // Expose so active-change effect and pointer scrubs funnel into the
    // same scheduler — one rAF, one ordered write pass.
    scheduleRailFrameRef.current = schedule;

    const onResize = () => {
      docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      // Rail height may have shifted even if active row didn't — force
      // indicator geometry to re-write on the next frame.
      lastIndTop = Number.NaN;
      lastIndHeight = Number.NaN;
      schedule();
    };

    writeRailFrame();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // Layout of the page changes as images/fonts load and reveals expand —
    // keep docMax honest without polling.
    const ro = new ResizeObserver(onResize);
    ro.observe(document.documentElement);

    return () => {
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      scheduleRailFrameRef.current = () => {};
    };
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    // Route active-state / visibility flips through the single rail-frame
    // scheduler so the indicator write lands in the same ordered pass as
    // the progress fill — no dueling rAFs, no split ordering.
    scheduleRailFrameRef.current();
    const ro = new ResizeObserver(() => scheduleRailFrameRef.current());
    ro.observe(list);
    return () => ro.disconnect();
  }, [active, visible]);

  const handleRailPointerDown = (e: PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    // A fresh press on the rail always wins over any in-flight animation.
    cancelSmoothScroll();
    cancelInertia();
    // If a prior gesture never cleanly released (rare browser edge case),
    // tear it down before starting a new one so state stays consistent.
    if (activePointerIdRef.current !== null) {
      finishScrub("pointercancel", null);
    }
    pointerTypeRef.current = e.pointerType;
    // Velocity samples are only used for touch inertia.
    scrubSamplesRef.current =
      e.pointerType === "touch"
        ? [{ y: window.scrollY, t: performance.now() }]
        : [];
    dragStartYRef.current = e.clientY;
    draggingRef.current = false;
    suppressClickRef.current = false;
    // Try to capture — some browsers/pointer types (rare synthetic events)
    // reject; either way, record the id so global cleanup can find it.
    try {
      listRef.current?.setPointerCapture?.(e.pointerId);
    } catch {
      /* capture unavailable — global safety net still handles cancel */
    }
    activePointerIdRef.current = e.pointerId;
  };
  const handleRailPointerMove = (e: PointerEvent) => {
    const list = listRef.current;
    if (!list?.hasPointerCapture?.(e.pointerId)) return;
    const dy = e.clientY - dragStartYRef.current;
    const isTouch = pointerTypeRef.current === "touch";
    // Touch pointers are less precise than a mouse — use a larger threshold
    // so a stationary tap doesn't get promoted to a drag by finger jitter.
    const threshold = isTouch ? 8 : 4;
    if (!draggingRef.current && Math.abs(dy) < threshold) return;
    if (!draggingRef.current) {
      draggingRef.current = true;
      suppressClickRef.current = true;
      setScrubbing(true);
    }
    e.preventDefault();
    if (isTouch) {
      // Touch: rAF-coalesce writes and sample velocity so release can fling.
      pushSample(e.clientY);
      scheduleScrub(e.clientY);
    } else {
      // Mouse / pen: 1:1 with the cursor. Apply synchronously so the page
      // tracks the pointer every frame, like a native scrollbar thumb —
      // no rAF batching, no velocity buffering, no inertia on release.
      applyScrubFromClientY(e.clientY);
    }
  };
  // Single teardown path for every scrub end (clean release, cancel, or
  // global safety-net). `endType` mirrors PointerEvent.type semantics —
  // "pointercancel" skips inertia and skips click/tap resolution; `clientY`
  // is null when the global safety net triggered (no pointer coordinates).
  const finishScrub = (endType: string, clientY: number | null) => {
    const list = listRef.current;
    const pid = activePointerIdRef.current;
    // Always attempt to release capture — belt and braces against browsers
    // that report hasPointerCapture=false while still holding it.
    if (list && pid !== null) {
      try {
        if (list.hasPointerCapture?.(pid)) list.releasePointerCapture(pid);
      } catch {
        /* already released */
      }
    }
    // Always flush any pending scrub rAF so scroll position is final before
    // we decide what to do next — otherwise inertia (or the resync frame)
    // starts from a stale y.
    if (scrubRafRef.current !== null) {
      window.cancelAnimationFrame(scrubRafRef.current);
      scrubRafRef.current = null;
      if (pendingScrubYRef.current !== null) {
        applyScrubFromClientY(pendingScrubYRef.current);
        pendingScrubYRef.current = null;
      }
    }
    const isTouch = pointerTypeRef.current === "touch";
    const wasDragging = draggingRef.current;
    if (wasDragging) {
      if (isTouch && endType !== "pointercancel") {
        startInertia(releaseVelocity());
      }
      // Reset next tick so the anchor's own click handler (fired after
      // pointerup) still sees suppressClickRef=true and cancels navigation.
      window.setTimeout(() => {
        draggingRef.current = false;
        setScrubbing(false);
      }, 0);
    } else if (endType !== "pointercancel" && clientY !== null) {
      // Non-drag release with real coordinates = a click/tap on the rail.
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
      const id = nearestChapterId(clientY);
      if (id) jumpToChapter(id);
    }
    scrubSamplesRef.current = [];
    activePointerIdRef.current = null;
    // Force one final ordered write pass so progress fill and active
    // indicator reflect the final scroll position immediately — don't
    // wait for the next scroll event (which may never fire if the drag
    // ended exactly on the current scroll pos).
    scheduleRailFrameRef.current();
  };

  const handleRailPointerUp = (e: PointerEvent) => {
    // Ignore stray up/cancel from pointers we didn't capture (e.g. a second
    // finger releasing while the primary drag continues).
    if (
      activePointerIdRef.current !== null &&
      e.pointerId !== activePointerIdRef.current
    ) {
      return;
    }
    finishScrub(e.type, e.clientY);
  };

  // Attach rail pointer listeners natively so we control passive flags:
  // down/up/cancel are passive (never preventDefault → browser doesn't have
  // to wait on JS before scrolling elsewhere on the page); move stays
  // non-passive because a promoted drag calls preventDefault to suppress
  // native text/scroll selection. React's synthetic delegation would attach
  // all four as non-passive on the root — this avoids that overhead.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const down = (e: PointerEvent) => handleRailPointerDown(e);
    const move = (e: PointerEvent) => handleRailPointerMove(e);
    const up = (e: PointerEvent) => handleRailPointerUp(e);
    list.addEventListener("pointerdown", down, { passive: true });
    list.addEventListener("pointermove", move, { passive: false });
    list.addEventListener("pointerup", up, { passive: true });
    list.addEventListener("pointercancel", up, { passive: true });
    // Safety nets: if the OS/browser hijacks the gesture, the tab is
    // backgrounded, or focus is stolen mid-drag, element-scoped
    // pointerup/cancel may never arrive. Force cleanup so the rail can't
    // get stuck in a captured/dragging state.
    const onWindowCancel = (e: PointerEvent) => {
      if (
        activePointerIdRef.current !== null &&
        e.pointerId === activePointerIdRef.current
      ) {
        finishScrub("pointercancel", null);
      }
    };
    const onWindowUp = (e: PointerEvent) => {
      // Only fires if the element handler missed it (e.g. pointer released
      // outside a captured region on a browser that dropped capture).
      if (
        activePointerIdRef.current !== null &&
        e.pointerId === activePointerIdRef.current
      ) {
        finishScrub(e.type, e.clientY);
      }
    };
    const onLostCapture = () => {
      if (activePointerIdRef.current !== null) {
        finishScrub("pointercancel", null);
      }
    };
    const onBlurOrHide = () => {
      if (activePointerIdRef.current !== null) {
        finishScrub("pointercancel", null);
      }
    };
    window.addEventListener("pointercancel", onWindowCancel, { passive: true });
    window.addEventListener("pointerup", onWindowUp, { passive: true });
    list.addEventListener("lostpointercapture", onLostCapture, { passive: true });
    window.addEventListener("blur", onBlurOrHide);
    document.addEventListener("visibilitychange", onBlurOrHide);
    return () => {
      list.removeEventListener("pointerdown", down);
      list.removeEventListener("pointermove", move);
      list.removeEventListener("pointerup", up);
      list.removeEventListener("pointercancel", up);
      window.removeEventListener("pointercancel", onWindowCancel);
      window.removeEventListener("pointerup", onWindowUp);
      list.removeEventListener("lostpointercapture", onLostCapture);
      window.removeEventListener("blur", onBlurOrHide);
      document.removeEventListener("visibilitychange", onBlurOrHide);
    };
  }, []);

  return (
    <aside
      className={`pointer-events-none fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 transition-opacity duration-500 xl:flex ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        ref={listRef}
        className={`pointer-events-auto relative flex min-h-[420px] flex-col py-2 pl-3 pr-2 touch-none select-none ${scrubbing ? "cursor-grabbing" : "cursor-grab"}`}
        role="slider"
        aria-label="Page scroll position"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      >
        {/* vertical track */}
        <span className="pointer-events-none absolute left-0 top-1 bottom-1 w-0.5 bg-border/70" aria-hidden />
        {/* progress fill */}
        <span
          ref={progressFillRef}
          className="pointer-events-none absolute left-0 top-1 w-0.5 origin-top bg-foreground/40"
          style={{
            height: "calc(100% - 0.5rem)",
            transform: "scaleY(0)",
            transformOrigin: "top",
            willChange: "transform",
          }}
          aria-hidden
        />
        {/* active indicator */}
        <span
          ref={indicatorRef}
          className="pointer-events-none absolute left-[-1px] w-[3px] rounded-full bg-accent"
          style={{
            transform: "translateY(0px)",
            height: "12px",
            willChange: "transform, height",
            transition:
              "transform 180ms cubic-bezier(0.22, 1, 0.36, 1), height 140ms ease-out",
          }}
          aria-hidden
        />
        {NAV.map((n, i) => {
          const id = n.href.slice(1);
          const isActive = active === id;
          const isHovered = hovered === id;
          const showTip = isHovered;
          return (
            <a
              key={id}
              href={n.href}
              ref={(el) => {
                itemsRef.current[id] = el;
              }}
              className="pointer-events-auto group relative flex flex-1 min-h-[32px] cursor-pointer items-center gap-3 rounded-sm px-1 transition-colors hover:bg-foreground/[0.03] focus-visible:outline-none focus-visible:bg-foreground/[0.04]"
              aria-label={`Jump to ${n.label}`}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered((h) => (h === id ? null : h))}
              onFocus={() => setHovered(id)}
              onBlur={() => setHovered((h) => (h === id ? null : h))}
              onClick={(e) => {
                // Swallow the click if the user was scrubbing — pointerup
                // fires before click, so draggingRef is still true here.
                if (suppressClickRef.current || draggingRef.current) {
                  e.preventDefault();
                  suppressClickRef.current = false;
                  return;
                }
                e.preventDefault();
                // Update the URL hash without the browser's default jump so
                // our smooth scroll owns the motion. Fall back to hash= if
                // history is unavailable.
                if (window.history?.pushState) {
                  window.history.pushState(null, "", n.href);
                  // hashchange doesn't fire for pushState, so sync manually.
                  setActive(id);
                } else {
                  window.location.hash = n.href;
                }
                scrollToTargetId(id);
              }}
            >
              <span
                className={`h-px transition-all duration-300 ease-out ${isActive ? "w-6 bg-accent" : "w-3 bg-border group-hover:w-5 group-hover:bg-foreground/60"}`}
              />
              <span
                aria-hidden
                className={`font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-300 ${isActive ? "text-accent opacity-100 translate-x-0" : "text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"}`}
              >
                {String(i + 1).padStart(2, "0")} · {n.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
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
    "btn-sheen inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
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
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-10">
        <a href="#top" className="shrink-0 font-serif text-2xl leading-none tracking-tight text-foreground">
          Trackdub<span className="text-accent">.</span>
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-x-6 gap-y-2 lg:gap-x-7 md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground ${
                NAV_PRIMARY.has(n.href) ? "" : "hidden xl:inline"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center gap-4 md:flex lg:gap-5">
          <div className="hidden lg:block"><MotionToggle /></div>
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
      </div>
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
            <div className="py-2"><MotionToggle /></div>
            <InkButton href="#pricing">Get Trackdub</InkButton>
          </Container>
        </div>
      )}
    </header>
  );
}

/* ---------------- motion toggle ---------------- */

type MotionMode = "full" | "reduced";
const MOTION_KEY = "trackdub:motion";

function MotionToggle() {
  const [mode, setMode] = useState<MotionMode | null>(null);

  useEffect(() => {
    const stored = (typeof window !== "undefined"
      ? (localStorage.getItem(MOTION_KEY) as MotionMode | null)
      : null);
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const initial: MotionMode = stored ?? (prefersReduced ? "reduced" : "full");
    setMode(initial);
  }, []);

  useEffect(() => {
    if (!mode) return;
    document.documentElement.classList.toggle("reduce-motion", mode === "reduced");
    try {
      localStorage.setItem(MOTION_KEY, mode);
    } catch {}
  }, [mode]);

  const next: MotionMode = mode === "reduced" ? "full" : "reduced";
  const label = mode === "reduced" ? "Motion: off" : "Motion: on";

  return (
    <button
      type="button"
      onClick={() => setMode(next)}
      aria-pressed={mode === "reduced" ? "false" : "true"}
      title={
        mode === "reduced"
          ? "Reduced motion is on. Click to enable animations."
          : "Full motion is on. Click to reduce animations."
      }
      className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
    >
      <span
        aria-hidden="true"
        className={`relative inline-block h-3 w-6 rounded-full border border-border transition-colors ${
          mode === "reduced" ? "bg-transparent" : "bg-accent/60"
        }`}
      >
        <span
          className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-foreground transition-all duration-300 ${
            mode === "reduced" ? "left-0.5" : "left-[calc(100%-0.625rem)]"
          }`}
        />
      </span>
      <span>{label}</span>
    </button>
  );
}

/* ---------------- lead ---------------- */

function Lead() {
  return (
    <section id="top" data-reveal className="reveal border-b border-border">
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

/* ---------------- resumable job ---------------- */

type JobStageId = "ingest" | "transcribe" | "translate" | "diarize" | "voice" | "mix";
type JobStageStatus = "queued" | "running" | "paused" | "done" | "stale" | "failed";

const JOB_STAGES: {
  id: JobStageId;
  n: string;
  label: string;
  sec: number;
  artifact: string;
}[] = [
  { id: "ingest", n: "01", label: "Ingest & probe", sec: 2.0, artifact: "media.probe.json" },
  { id: "transcribe", n: "02", label: "Transcribe (ASR)", sec: 6.5, artifact: "transcript.de.jsonl" },
  { id: "translate", n: "03", label: "Translate", sec: 3.5, artifact: "transcript.en.jsonl" },
  { id: "diarize", n: "04", label: "Diarize", sec: 4.0, artifact: "speakers.rttm" },
  { id: "voice", n: "05", label: "Voice (TTS)", sec: 7.0, artifact: "lines/*.wav" },
  { id: "mix", n: "06", label: "Mix & mux", sec: 3.0, artifact: "interview_en.mp4" },
];

const DOWNSTREAM_OF_TRANSLATE: JobStageId[] = ["translate", "voice", "mix"];

type JobState = {
  status: Record<JobStageId, JobStageStatus>;
  progress: Record<JobStageId, number>;
};

function initialJobState(): JobState {
  return {
    status: {
      ingest: "done",
      transcribe: "done",
      translate: "running",
      diarize: "queued",
      voice: "queued",
      mix: "queued",
    },
    progress: { ingest: 1, transcribe: 1, translate: 0.35, diarize: 0, voice: 0, mix: 0 },
  };
}

type LogEntry = { t: string; msg: string; kind: "info" | "warn" | "ok" };

type FailureKind = "gpu_oom" | "missing_codec" | "partial_ingest";

type FailureInfo = {
  kind: FailureKind;
  stage: JobStageId;
  code: string;
  title: string;
  detail: string;
  recoverLabel: string;
  recoveryNote: string;
  fromCheckpoint: number; // resume progress fraction
  applyRecovery?: () => Partial<Record<JobStageId, JobStageStatus>>;
};

const FAILURES: Record<FailureKind, Omit<FailureInfo, "applyRecovery">> = {
  gpu_oom: {
    kind: "gpu_oom",
    stage: "voice",
    code: "E_GPU_OOM",
    title: "GPU ran out of memory during voice generation",
    detail:
      "The TensorRT RTX engine for the voice model needed 8.4 GB but 6.1 GB were free on the selected device (RTX 4070). Trackdub paused the job at line 63 of 128 and kept every finished line on disk.",
    recoverLabel: "Retry on DirectML at half batch",
    recoveryNote:
      "Switching provider to DirectML (batch 4). Already-rendered lines 1–62 are reused from the checkpoint.",
    fromCheckpoint: 0.49,
  },
  missing_codec: {
    kind: "missing_codec",
    stage: "ingest",
    code: "E_MEDIA_CODEC",
    title: "Ingest could not decode one audio track",
    detail:
      "FFmpeg opened interview_de.mp4 but track #2 uses an EAC3 stream that this build cannot decode. Video and track #1 were probed successfully; the file was not modified.",
    recoverLabel: "Install decoder & rescan",
    recoveryNote:
      "Installed the missing EAC3 decoder. Re-probing the container — video and existing tracks are reused, only the audio scan re-runs.",
    fromCheckpoint: 0.6,
  },
  partial_ingest: {
    kind: "partial_ingest",
    stage: "transcribe",
    code: "E_TRUNCATED_STREAM",
    title: "Source media ended mid-segment",
    detail:
      "The last 3.2s of interview_de.mp4 are missing packets — likely a truncated export. Trackdub transcribed 124 of 128 segments and saved them. Nothing was discarded.",
    recoverLabel: "Continue with 124 saved segments",
    recoveryNote:
      "Accepted partial ingest. Downstream stages will run on the 124 valid segments; the truncated tail is flagged in the transcript for review.",
    fromCheckpoint: 0.97,
  },
};

function ResumableJob() {
  const [job, setJob] = useState<JobState>(initialJobState);
  const [running, setRunning] = useState(true);
  const [failure, setFailure] = useState<FailureInfo | null>(null);
  const [log, setLog] = useState<LogEntry[]>([
    { t: "00:00", msg: "Job queued · interview_de.mp4 → en-US", kind: "info" },
    { t: "00:02", msg: "Ingest complete · media.probe.json", kind: "ok" },
    { t: "00:09", msg: "Transcribe complete · 128 segments", kind: "ok" },
    { t: "00:09", msg: "Translate started · model=nllb-1.3b", kind: "info" },
  ]);
  const clockRef = useRef(9);

  const addLog = (msg: string, kind: LogEntry["kind"] = "info") => {
    const c = clockRef.current;
    const mm = String(Math.floor(c / 60)).padStart(2, "0");
    const ss = String(Math.floor(c % 60)).padStart(2, "0");
    setLog((prev) => [...prev.slice(-40), { t: `${mm}:${ss}`, msg, kind }]);
  };

  useEffect(() => {
    if (!running || failure) return;
    const dt = 0.12;
    const iv = window.setInterval(() => {
      clockRef.current += dt;
      setJob((prev) => {
        const runningStage = JOB_STAGES.find((s) => prev.status[s.id] === "running");
        if (!runningStage) {
          const next = JOB_STAGES.find(
            (s) => prev.status[s.id] === "queued" || prev.status[s.id] === "stale",
          );
          if (!next) return prev;
          const label =
            prev.status[next.id] === "stale"
              ? `${next.label} reprocessing (stale after edit)`
              : `${next.label} started`;
          queueMicrotask(() => addLog(label, "info"));
          return { ...prev, status: { ...prev.status, [next.id]: "running" } };
        }
        const inc = dt / runningStage.sec;
        const cur = prev.progress[runningStage.id] + inc;
        if (cur >= 1) {
          queueMicrotask(() =>
            addLog(`${runningStage.label} complete · ${runningStage.artifact}`, "ok"),
          );
          return {
            status: { ...prev.status, [runningStage.id]: "done" },
            progress: { ...prev.progress, [runningStage.id]: 1 },
          };
        }
        return {
          ...prev,
          progress: { ...prev.progress, [runningStage.id]: cur },
        };
      });
    }, 120);
    return () => window.clearInterval(iv);
  }, [running, failure]);

  const togglePause = () => {
    if (failure) return;
    setRunning((r) => {
      const next = !r;
      setJob((prev) => {
        const s = { ...prev.status };
        if (!next) {
          for (const st of JOB_STAGES) if (s[st.id] === "running") s[st.id] = "paused";
        } else {
          for (const st of JOB_STAGES) if (s[st.id] === "paused") s[st.id] = "running";
        }
        return { ...prev, status: s };
      });
      addLog(next ? "Resume · continuing from last checkpoint" : "Pause · state persisted to disk", "warn");
      return next;
    });
  };

  const editTranslation = () => {
    setJob((prev) => {
      const s = { ...prev.status };
      const p = { ...prev.progress };
      for (const id of DOWNSTREAM_OF_TRANSLATE) {
        s[id] = "stale";
        p[id] = 0;
      }
      // Force the pipeline to re-enter translate on next tick.
      // Any stage after translate that was 'running' is now 'stale' (above),
      // and the tick loop will pick the first non-done stage.
      return { status: s, progress: p };
    });
    addLog("Edit · line 42 target text changed by user", "warn");
    addLog("Stale · translate, voice, mix marked for reprocess", "warn");
    // Prior stages (ingest, transcribe, diarize) remain done — not recomputed.
  };

  const injectFailure = (kind: FailureKind) => {
    const info = FAILURES[kind];
    setJob((prev) => {
      const s: JobState["status"] = { ...prev.status };
      const p: JobState["progress"] = { ...prev.progress };
      // Mark stages before the failing one as done; failing stage as failed.
      let hit = false;
      for (const st of JOB_STAGES) {
        if (st.id === info.stage) {
          hit = true;
          s[st.id] = "failed";
          p[st.id] = info.fromCheckpoint;
          continue;
        }
        if (!hit) {
          s[st.id] = "done";
          p[st.id] = 1;
        } else {
          s[st.id] = "queued";
          p[st.id] = 0;
        }
      }
      return { status: s, progress: p };
    });
    setRunning(false);
    setFailure(info);
    addLog(`FAIL · ${info.code} · ${info.title.toLowerCase()}`, "warn");
    addLog(`Paused · checkpoint saved at ${info.stage} ${(info.fromCheckpoint * 100).toFixed(0)}%`, "warn");
  };

  const recover = () => {
    if (!failure) return;
    const info = failure;
    addLog(`Recovery · ${info.recoveryNote}`, "info");
    setJob((prev) => {
      const s = { ...prev.status };
      s[info.stage] = "running";
      return { ...prev, status: s };
    });
    setFailure(null);
    setRunning(true);
  };

  const reset = () => {
    clockRef.current = 9;
    setJob(initialJobState());
    setRunning(true);
    setFailure(null);
    setLog([
      { t: "00:00", msg: "Job queued · interview_de.mp4 → en-US", kind: "info" },
      { t: "00:02", msg: "Ingest complete · media.probe.json", kind: "ok" },
      { t: "00:09", msg: "Transcribe complete · 128 segments", kind: "ok" },
      { t: "00:09", msg: "Translate resumed · model=nllb-1.3b", kind: "info" },
    ]);
  };

  const allDone = JOB_STAGES.every((s) => job.status[s.id] === "done");

  return (
    <section id="resume" data-reveal className="reveal border-b border-border bg-background">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionNumber n="02b" label="Resumable jobs" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Pause anything. Edit one stage. Resume only what changed.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Every stage writes a checkpoint to disk. Close the app, unplug the
              laptop, edit a translation two days later — the job picks up from
              the last completed artifact.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              When you change a translated line, Trackdub marks that stage and
              everything downstream as <em>stale</em> and requeues only those.
              Ingest, transcription, and diarization stay done — they don't
              depend on the edit.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Try it → pause · edit translation · resume
            </p>
          </div>

          <div className="lg:col-span-8">
            <div
              className="not-prose rounded-none border p-5 sm:p-6"
              style={{ background: PANEL, borderColor: LINE }}
            >
              {/* header row */}
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: DIM }}>
                  Job · interview_de.mp4 → en-US &nbsp;·&nbsp; checkpoint dir: /projects/interview/.trackdub
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={togglePause}
                    disabled={allDone || !!failure}
                    className="inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors disabled:opacity-40"
                    style={{
                      color: INK,
                      borderColor: running ? ACC : LINE,
                      background: running ? "transparent" : PANEL_HI,
                    }}
                    aria-label={running ? "Pause job" : "Resume job"}
                  >
                    {running ? "❚❚ Pause" : "▶ Resume"}
                  </button>
                  <button
                    type="button"
                    onClick={editTranslation}
                    disabled={!!failure}
                    className="inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors"
                    style={{ color: INK, borderColor: LINE, background: PANEL_HI }}
                  >
                    ✎ Edit line 42
                  </button>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors"
                    style={{ color: DIM, borderColor: LINE }}
                  >
                    ↺ Reset
                  </button>
                </div>
              </div>

              {/* failure simulator */}
              <div
                className="mb-5 flex flex-wrap items-center gap-2 border-t border-b py-3"
                style={{ borderColor: LINE }}
              >
                <span
                  className="mr-1 font-mono text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: DIM }}
                >
                  Simulate failure
                </span>
                {(
                  [
                    ["gpu_oom", "GPU OOM"],
                    ["missing_codec", "Missing codec"],
                    ["partial_ingest", "Partial ingest"],
                  ] as [FailureKind, string][]
                ).map(([k, label]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => injectFailure(k)}
                    className="inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors hover:border-accent"
                    style={{ color: INK, borderColor: LINE, background: "transparent" }}
                  >
                    ⚠ {label}
                  </button>
                ))}
              </div>

              {failure && (
                <div
                  role="alert"
                  className="mb-5 border p-4"
                  style={{
                    borderColor: "oklch(0.55 0.14 30)",
                    background: "oklch(0.20 0.04 30 / 0.35)",
                  }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="font-mono text-[10px] uppercase tracking-[0.14em]"
                        style={{ color: "oklch(0.78 0.15 258)" }}
                      >
                        {failure.code}
                      </span>
                      <span className="font-serif text-[17px]" style={{ color: INK }}>
                        {failure.title}
                      </span>
                    </div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.14em]"
                      style={{ color: DIM }}
                    >
                      Stage · {failure.stage} · paused, checkpoint saved
                    </span>
                  </div>
                  <p
                    className="mt-3 text-[13px] leading-relaxed"
                    style={{ color: "oklch(0.82 0.02 245)" }}
                  >
                    {failure.detail}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={recover}
                      className="inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em]"
                      style={{ color: INK, borderColor: ACC, background: PANEL_HI }}
                    >
                      ✓ {failure.recoverLabel}
                    </button>
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.14em]"
                      style={{ color: DIM }}
                    >
                      or reset · nothing on disk was destroyed
                    </span>
                  </div>
                </div>
              )}

              {/* stage rows */}
              <ol className="divide-y" style={{ borderColor: LINE }}>
                {JOB_STAGES.map((s) => {
                  const status = job.status[s.id];
                  const pct = Math.round(job.progress[s.id] * 100);
                  return (
                    <li
                      key={s.id}
                      className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t py-3 first:border-t-0"
                      style={{ borderColor: LINE }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-block h-2 w-2 rounded-full"
                          style={{ background: statusColor(status) }}
                          aria-hidden
                        />
                        <span
                          className="font-mono text-[11px] uppercase tracking-[0.14em]"
                          style={{ color: DIM }}
                        >
                          {s.n}
                        </span>
                        <span className="text-[14px]" style={{ color: INK }}>
                          {s.label}
                        </span>
                      </div>
                      <div
                        className="relative h-[6px] w-full overflow-hidden"
                        style={{ background: "oklch(0.22 0.012 250)" }}
                        role="progressbar"
                        aria-valuenow={pct}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${s.label} progress`}
                      >
                        <div
                          className="absolute inset-y-0 left-0 transition-[width] duration-100"
                          style={{
                            width: `${pct}%`,
                            background: statusColor(status),
                            opacity: status === "stale" ? 0.25 : 1,
                          }}
                        />
                      </div>
                      <div className="flex items-center gap-3 justify-self-end">
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.14em] tabular-nums"
                          style={{ color: DIM }}
                        >
                          {statusLabel(status, pct)}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {/* log */}
              <div className="mt-6 border-t pt-4" style={{ borderColor: LINE }}>
                <div
                  className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: DIM }}
                >
                  Job log · streaming
                </div>
                <div
                  className="max-h-40 overflow-y-auto font-mono text-[12px] leading-relaxed"
                  aria-live="polite"
                >
                  {log.slice(-8).map((l, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="tabular-nums" style={{ color: DIM }}>
                        {l.t}
                      </span>
                      <span
                        style={{
                          color: l.kind === "ok" ? INK : l.kind === "warn" ? ACC : DIM,
                        }}
                      >
                        {l.msg}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Fig. 02b &nbsp;·&nbsp; Simulated job runner with failure injection.
              Progress, errors, and log are client-side only.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function statusColor(s: JobStageStatus): string {
  switch (s) {
    case "done":
      return "oklch(0.72 0.10 155)";
    case "running":
      return ACC;
    case "paused":
      return "oklch(0.70 0.02 245)";
    case "stale":
      return ACC;
    case "failed":
      return "oklch(0.68 0.16 30)";
    case "queued":
    default:
      return "oklch(0.38 0.014 250)";
  }
}

function statusLabel(s: JobStageStatus, pct: number): string {
  switch (s) {
    case "done":
      return "done";
    case "running":
      return `${pct}%`;
    case "paused":
      return `paused · ${pct}%`;
    case "stale":
      return "stale · requeued";
    case "failed":
      return `failed · ${pct}%`;
    case "queued":
    default:
      return "queued";
  }
}

/* ---------------- product plate (single figure) ---------------- */

function ProductPlate() {
  return (
    <section data-reveal className="reveal border-b border-border">
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
                          ? "oklch(0.68 0.15 258)"
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
                  style={{ color: r.s === "S1" ? "oklch(0.68 0.15 258)" : "oklch(0.70 0.12 190)" }}
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
                      textDecorationColor: "oklch(0.68 0.15 258)",
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
                    fill={isActive ? "oklch(0.72 0.15 258)" : "oklch(0.55 0.03 240)"}
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
            { n: "Anna", lang: "de-DE → en-US", ref: "3.4s ref", color: "oklch(0.68 0.15 258)" },
            { n: "Mateo", lang: "de-DE → en-US", ref: "5.1s ref", color: "oklch(0.70 0.12 190)" },
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
            <div className="h-full" style={{ width: "62%", background: "oklch(0.72 0.15 258)" }} />
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
    <section data-reveal className="reveal border-b border-border bg-surface">
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
    <section id="pipeline" data-reveal className="reveal border-b border-border">
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

/* ---------------- interactive walkthrough ---------------- */

type Speaker = { id: string; name: string; color: string; turns: number };
type Line = {
  id: number;
  t: string;
  speakerId: string;
  source: string;
  target: string;
  pace: number;
  pause: number;
  duration: number;
};

const INITIAL_SPEAKERS: Speaker[] = [
  { id: "s1", name: "Anna", color: "oklch(0.68 0.15 258)", turns: 24 },
  { id: "s2", name: "Mateo", color: "oklch(0.70 0.12 190)", turns: 18 },
  { id: "s3", name: "Speaker 3", color: "oklch(0.55 0.03 240)", turns: 2 },
];

const INITIAL_LINES: Line[] = [
  { id: 41, t: "00:38.120", speakerId: "s1", source: "Wir haben die Pipeline neu gebaut,", target: "We rebuilt the pipeline", pace: 1.0, pause: 200, duration: 2.86 },
  { id: 42, t: "00:42.180", speakerId: "s1", source: "damit jede Stufe editierbar bleibt.", target: "so every stage stays editable.", pace: 1.0, pause: 200, duration: 3.14 },
  { id: 43, t: "00:46.900", speakerId: "s2", source: "Und wenn etwas nicht stimmt —", target: "And if something's off —", pace: 1.0, pause: 220, duration: 2.10 },
  { id: 44, t: "00:49.640", speakerId: "s2", source: "änderst du nur die eine Zeile.", target: "you only change that one line.", pace: 1.0, pause: 240, duration: 2.55 },
];

const STAGE_TABS = [
  { id: "ingest", n: "01", label: "Ingest" },
  { id: "transcribe", n: "02", label: "Transcribe" },
  { id: "translate", n: "03", label: "Translate" },
  { id: "diarize", n: "04", label: "Diarize" },
  { id: "voice", n: "05", label: "Voice" },
] as const;
type StageId = (typeof STAGE_TABS)[number]["id"];

const DIM = "oklch(0.62 0.02 245)";
const INK = "oklch(0.94 0.005 240)";
const LINE = "oklch(0.28 0.014 250)";
const ACC = "oklch(0.72 0.15 258)";
const PANEL = "oklch(0.16 0.010 250)";
const PANEL_HI = "oklch(0.20 0.012 250)";

function Walkthrough() {
  const [stage, setStage] = useState<StageId>("transcribe");
  const [speakers, setSpeakers] = useState<Speaker[]>(INITIAL_SPEAKERS);
  const [lines, setLines] = useState<Line[]>(INITIAL_LINES);
  const [stale, setStale] = useState<Record<number, Partial<Record<StageId, boolean>>>>({});
  const [regenId, setRegenId] = useState<number | null>(null);

  const markStale = (lineId: number, downstream: StageId[]) => {
    setStale((prev) => {
      const cur = { ...(prev[lineId] ?? {}) };
      downstream.forEach((s) => (cur[s] = true));
      return { ...prev, [lineId]: cur };
    });
  };
  const clearStale = (lineId: number, s: StageId) => {
    setStale((prev) => {
      const cur = { ...(prev[lineId] ?? {}) };
      delete cur[s];
      return { ...prev, [lineId]: cur };
    });
  };

  const editSource = (id: number, source: string) => {
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, source } : l)));
    markStale(id, ["translate", "voice"]);
  };
  const editTarget = (id: number, target: string) => {
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, target } : l)));
    markStale(id, ["voice"]);
    clearStale(id, "translate");
  };
  const reassignSpeaker = (id: number, speakerId: string) => {
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, speakerId } : l)));
    markStale(id, ["voice"]);
  };
  const renameSpeaker = (sid: string, name: string) => {
    setSpeakers((ss) => ss.map((s) => (s.id === sid ? { ...s, name } : s)));
  };
  const regenerate = (id: number) => {
    setRegenId(id);
    window.setTimeout(() => {
      setLines((ls) =>
        ls.map((l) =>
          l.id === id ? { ...l, pace: Math.round((0.9 + Math.random() * 0.12) * 100) / 100 } : l,
        ),
      );
      clearStale(id, "voice");
      setRegenId(null);
    }, 900);
  };

  const staleCount = (s: StageId) =>
    Object.values(stale).reduce((n, m) => n + (m?.[s] ? 1 : 0), 0);

  return (
    <section id="walkthrough" data-reveal className="reveal border-b border-border bg-surface">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionNumber n="02" label="Try the pipeline" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Edit a line. Watch what invalidates.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              A sample project, running in your browser. Change the transcript, retarget a
              translation, rename a speaker, or regenerate a single voice line. Downstream stages
              mark themselves stale — nothing else is touched.
            </p>
            <ul className="mt-8 space-y-2 font-mono text-[12px] text-muted-foreground">
              {STAGE_TABS.map((s) => {
                const c = staleCount(s.id);
                return (
                  <li key={s.id} className="flex items-center justify-between border-b border-hairline py-2">
                    <span>
                      <span className="text-accent">{s.n}</span> &nbsp; {s.label}
                    </span>
                    <span className={c > 0 ? "text-accent" : "text-muted-foreground/60"}>
                      {c > 0 ? `${c} stale` : "clean"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-border shadow-panel" style={{ background: PANEL }}>
              <div role="tablist" aria-label="Pipeline stage" className="flex flex-wrap border-b" style={{ borderColor: LINE }}>
                {STAGE_TABS.map((s) => {
                  const active = stage === s.id;
                  const c = staleCount(s.id);
                  return (
                    <button
                      key={s.id}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setStage(s.id)}
                      className="relative flex items-baseline gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors"
                      style={{
                        color: active ? INK : DIM,
                        background: active ? PANEL_HI : "transparent",
                        borderRight: `1px solid ${LINE}`,
                      }}
                    >
                      <span style={{ color: ACC }}>{s.n}</span>
                      <span>{s.label}</span>
                      {c > 0 && (
                        <span aria-label={`${c} stale`} className="ml-1 inline-block h-1.5 w-1.5 rounded-full" style={{ background: ACC }} />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="min-h-[380px] p-5">
                {stage === "ingest" && <IngestPane />}
                {stage === "transcribe" && (
                  <TranscribePane lines={lines} speakers={speakers} stale={stale} onEdit={editSource} />
                )}
                {stage === "translate" && (
                  <TranslatePane lines={lines} stale={stale} onEdit={editTarget} />
                )}
                {stage === "diarize" && (
                  <DiarizePane lines={lines} speakers={speakers} onRename={renameSpeaker} onReassign={reassignSpeaker} />
                )}
                {stage === "voice" && (
                  <VoicePane lines={lines} speakers={speakers} stale={stale} regenId={regenId} onRegen={regenerate} />
                )}
              </div>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Fig. 02 &nbsp;·&nbsp; Interactive sample &nbsp;·&nbsp; state lives in your browser
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PaneHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: DIM }}>
      {children}
    </div>
  );
}

function StaleTag({ label = "stale" }: { label?: string }) {
  return (
    <span
      className="ml-2 inline-block px-1.5 py-0.5 align-middle font-mono text-[9px] uppercase tracking-[0.14em]"
      style={{ color: ACC, border: `1px solid ${ACC}` }}
    >
      {label}
    </span>
  );
}

function IngestPane() {
  return (
    <div className="font-mono text-[12px]" style={{ color: DIM }}>
      <PaneHeader>Media probe · interview_de.mp4</PaneHeader>
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
              <td className="border-b py-1.5 pr-6" style={{ borderColor: LINE }}>{k}</td>
              <td className="border-b py-1.5 text-right" style={{ borderColor: LINE, color: INK }}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-[11px]">
        Nothing to edit here — but every later stage inherits this frame. Change the media, and the
        whole project reprobes.
      </div>
    </div>
  );
}

function EditableSpan({
  value,
  onCommit,
  ariaLabel,
  serif = false,
}: {
  value: string;
  onCommit: (v: string) => void;
  ariaLabel: string;
  serif?: boolean;
}) {
  return (
    <span
      role="textbox"
      aria-label={ariaLabel}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      onBlur={(e) => {
        const v = e.currentTarget.textContent ?? "";
        if (v !== value) onCommit(v);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          (e.currentTarget as HTMLSpanElement).blur();
        }
      }}
      className={`rounded-sm px-1 outline-none focus:ring-1 ${serif ? "font-serif text-[15px]" : ""}`}
      style={{ background: PANEL_HI, boxShadow: `inset 0 -1px 0 ${LINE}` }}
    >
      {value}
    </span>
  );
}

function TranscribePane({
  lines,
  speakers,
  stale,
  onEdit,
}: {
  lines: Line[];
  speakers: Speaker[];
  stale: Record<number, Partial<Record<StageId, boolean>>>;
  onEdit: (id: number, source: string) => void;
}) {
  const spk = (id: string) => speakers.find((s) => s.id === id);
  return (
    <div style={{ color: INK }}>
      <PaneHeader>Source transcript · de-DE · click a line to edit</PaneHeader>
      <div className="space-y-1">
        {lines.map((l) => {
          const s = spk(l.speakerId);
          const isStale = !!(stale[l.id]?.translate || stale[l.id]?.voice);
          return (
            <div key={l.id} className="grid grid-cols-[80px_110px_1fr] items-center gap-3 py-1.5 text-[13px]">
              <span className="font-mono text-[11px]" style={{ color: DIM }}>{l.t}</span>
              <span className="flex items-center gap-2 font-mono text-[11px]" style={{ color: DIM }}>
                <span className="h-2 w-2 rounded-full" style={{ background: s?.color }} />
                {s?.name}
              </span>
              <span>
                <EditableSpan value={l.source} onCommit={(v) => onEdit(l.id, v)} ariaLabel={`Edit source line ${l.id}`} />
                {isStale && <StaleTag label="downstream" />}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-[11px]" style={{ color: DIM }}>
        Tip: change a word, then switch to Translate — that line will be marked stale, the rest
        stay.
      </div>
    </div>
  );
}

function TranslatePane({
  lines,
  stale,
  onEdit,
}: {
  lines: Line[];
  stale: Record<number, Partial<Record<StageId, boolean>>>;
  onEdit: (id: number, target: string) => void;
}) {
  return (
    <div style={{ color: INK }}>
      <PaneHeader>Source · de-DE &nbsp;→&nbsp; Target · en-US</PaneHeader>
      <div
        className="grid grid-cols-[80px_1fr_1fr] gap-3 border-b pb-2 font-mono text-[10px] uppercase tracking-[0.14em]"
        style={{ borderColor: LINE, color: DIM }}
      >
        <span>time</span>
        <span>source</span>
        <span>target</span>
      </div>
      {lines.map((l) => {
        const staleT = !!stale[l.id]?.translate;
        return (
          <div key={l.id} className="grid grid-cols-[80px_1fr_1fr] items-start gap-3 border-b py-2 text-[13px]" style={{ borderColor: LINE }}>
            <span className="font-mono text-[11px]" style={{ color: DIM }}>{l.t}</span>
            <span style={{ color: DIM }}>
              {l.source}
              {staleT && <StaleTag label="source changed" />}
            </span>
            <span>
              <EditableSpan value={l.target} onCommit={(v) => onEdit(l.id, v)} ariaLabel={`Edit target line ${l.id}`} serif />
            </span>
          </div>
        );
      })}
      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: DIM }}>
        Glossary · 12 terms locked
      </div>
    </div>
  );
}

function DiarizePane({
  lines,
  speakers,
  onRename,
  onReassign,
}: {
  lines: Line[];
  speakers: Speaker[];
  onRename: (id: string, name: string) => void;
  onReassign: (lineId: number, speakerId: string) => void;
}) {
  const count = (sid: string) => lines.filter((l) => l.speakerId === sid).length;
  return (
    <div style={{ color: INK }}>
      <PaneHeader>Speakers · rename inline</PaneHeader>
      <div className="mb-5 space-y-2">
        {speakers.map((s) => (
          <div key={s.id} className="flex items-center justify-between border-b py-2" style={{ borderColor: LINE }}>
            <div className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full" style={{ background: s.color }} />
              <EditableSpan value={s.name} onCommit={(v) => onRename(s.id, v || s.name)} ariaLabel={`Rename ${s.name}`} />
              <span className="font-mono text-[10px]" style={{ color: DIM }}>
                {count(s.id)} lines in sample · 4.2s reference
              </span>
            </div>
          </div>
        ))}
      </div>
      <PaneHeader>Reassign a line</PaneHeader>
      <div className="space-y-1 text-[13px]">
        {lines.map((l) => (
          <div key={l.id} className="grid grid-cols-[80px_1fr_160px] items-center gap-3 py-1.5">
            <span className="font-mono text-[11px]" style={{ color: DIM }}>{l.t}</span>
            <span style={{ color: DIM }} className="truncate">{l.source}</span>
            <select
              value={l.speakerId}
              onChange={(e) => onReassign(l.id, e.target.value)}
              aria-label={`Reassign line ${l.id} speaker`}
              className="font-mono text-[11px] outline-none focus:ring-1"
              style={{ background: PANEL_HI, color: INK, border: `1px solid ${LINE}`, padding: "4px 6px" }}
            >
              {speakers.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

function VoicePane({
  lines,
  speakers,
  stale,
  regenId,
  onRegen,
}: {
  lines: Line[];
  speakers: Speaker[];
  stale: Record<number, Partial<Record<StageId, boolean>>>;
  regenId: number | null;
  onRegen: (id: number) => void;
}) {
  const spk = (id: string) => speakers.find((s) => s.id === id);
  return (
    <div style={{ color: INK }}>
      <PaneHeader>Voice lines · regenerate one without touching the rest</PaneHeader>
      <div className="space-y-2">
        {lines.map((l) => {
          const s = spk(l.speakerId);
          const isStale = !!stale[l.id]?.voice;
          const busy = regenId === l.id;
          return (
            <div key={l.id} className="border p-3" style={{ borderColor: LINE }}>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: DIM }}>
                <span>
                  Line {l.id} · {l.t} · <span style={{ color: s?.color }}>{s?.name}</span>
                  {isStale && !busy && <StaleTag label="needs regen" />}
                  {busy && <StaleTag label="regenerating…" />}
                </span>
                <span>{l.duration.toFixed(2)}s</span>
              </div>
              <div className="mt-2 font-serif text-[16px] leading-snug">"{l.target}"</div>
              <div className="mt-3 grid grid-cols-[1fr_auto_auto_auto] items-center gap-3 font-mono text-[11px]" style={{ color: DIM }}>
                <FakeWaveform seed={l.id + Math.round(l.pace * 100)} color={s?.color ?? ACC} busy={busy} />
                <span>pace {l.pace.toFixed(2)}×</span>
                <span>pause {l.pause}ms</span>
                <button
                  onClick={() => onRegen(l.id)}
                  disabled={busy}
                  className="px-2 py-1 uppercase tracking-[0.14em] transition-colors disabled:opacity-50"
                  style={{
                    color: isStale ? ACC : INK,
                    border: `1px solid ${isStale ? ACC : LINE}`,
                    background: PANEL_HI,
                  }}
                >
                  {busy ? "…" : "Regen line"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FakeWaveform({ seed, color, busy }: { seed: number; color: string; busy: boolean }) {
  const bars = Array.from({ length: 48 }, (_, i) => {
    const x = Math.sin(seed * 3.1 + i * 0.7) * 0.5 + 0.5;
    const y = Math.cos(seed * 1.7 + i * 0.31) * 0.35 + 0.55;
    return Math.max(0.15, Math.min(1, (x + y) / 1.4));
  });
  return (
    <div className="flex h-6 items-center gap-[2px]" aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            width: 2,
            height: `${h * 100}%`,
            background: color,
            opacity: busy ? 0.3 : 0.75,
            transition: "opacity 200ms",
          }}
        />
      ))}
    </div>
  );
}

function StageChapters() {
  return (
    <section data-reveal className="reveal border-b border-border bg-surface">
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
              { n: "Anna", turns: 24, c: "oklch(0.68 0.15 258)" },
              { n: "Mateo", turns: 18, c: "oklch(0.70 0.12 190)" },
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
              "so every stage stays <span style={{ borderBottom: "2px solid oklch(0.68 0.15 258)" }}>editable</span>."
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
              ["Dialogue EN", "oklch(0.68 0.15 258)", [10, 22, 34, 55, 70, 82]],
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
    <section id="control" data-reveal className="reveal border-b border-border">
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
    <section id="performance" data-reveal className="reveal border-b border-border bg-surface">
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
    <section data-reveal className="reveal border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="05" label="What you get" />
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          A workstation, not a wrapper around a model.
        </h2>
        <dl role="list" className="mt-14 grid gap-y-8 gap-x-12 md:grid-cols-2">
          {items.map(([term, def]) => (
            <div
              key={term}
              role="listitem"
              className="card-lift group border-t border-border px-1 pt-5 focus-within:bg-surface/40 hover:bg-surface/40"
            >
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
    <section data-reveal className="reveal border-b border-border bg-surface">
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
    <section id="pricing" data-reveal className="reveal border-b border-border">
      <Container className="py-20 sm:py-28">
        <SectionNumber n="07" label="Pricing" />
        <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Three ways to run it. All of them local-first.
        </h2>
        <ul
          role="list"
          className="mt-14 grid list-none divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {plans.map((p) => {
            const titleId = `plan-${p.name.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <li key={p.name} className="contents">
                <article
                  aria-labelledby={titleId}
                  className="card-lift group relative p-8 transition-colors hover:bg-surface/50 focus-within:bg-surface/50 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background"
                >
                  <header className="flex items-center gap-3">
                    <h3 id={titleId} className="font-serif text-2xl text-foreground">
                      {p.name}
                    </h3>
                    {p.featured && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                        Recommended
                      </span>
                    )}
                  </header>
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
                      <InkButton href={p.href} aria-label={`${p.cta} — ${p.name} plan`}>
                        {p.cta}
                      </InkButton>
                    ) : (
                      <a
                        href={p.href}
                        aria-label={`${p.cta} — ${p.name} plan`}
                        className="inline-flex items-baseline gap-1 rounded-sm border-b border-foreground/40 pb-0.5 text-foreground outline-none hover:border-accent hover:text-accent focus-visible:outline-none"
                      >
                        {p.cta} <span aria-hidden>→</span>
                      </a>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
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
      q: "What happens to my data if I uninstall?",
      a: "Your projects, source media, and generated output live in folders you chose, so they stay where they are until you delete them. The app data directory — model cache, preferences, and logs — can be removed during uninstall or manually from %LOCALAPPDATA%\\Trackdub. See the full privacy policy for the complete list.",
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
    <section id="faq" data-reveal className="reveal border-b border-border bg-surface">
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
            <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
              Data handling questions are covered in full in the{" "}
              <Link
                to="/privacy"
                className="inline-flex items-baseline gap-1 border-b border-foreground/30 pb-0.5 text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                privacy policy
              </Link>
              .
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
    <section data-reveal className="reveal border-b border-border">
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
        ["Resumable jobs", "#resume"],
        ["Performance", "#performance"],
        ["Architecture", "#architecture"],
        ["Privacy", "#privacy"],
        ["Requirements", "#requirements"],
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
        ["Privacy policy", "/privacy"],
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

/* ---------------- privacy ---------------- */

function Privacy() {
  const local: {
    item: string;
    what: string;
    retention: string;
  }[] = [
    {
      item: "Project files",
      what: "SQLite project state, manifests, and stage snapshots.",
      retention: "Kept in the project folder you choose. Deleted when you delete the project.",
    },
    {
      item: "Source media",
      what: "Original video/audio, proxies, and extracted stems.",
      retention: "Never uploaded. You choose the folder and can wipe it at any time.",
    },
    {
      item: "Transcripts & translations",
      what: "Editable script documents, glossaries, and speaker mappings.",
      retention: "Stored as local files. No cloud sync unless you configure it.",
    },
    {
      item: "Voice references",
      what: "Short speaker clips used for voice cloning.",
      retention: "Stay on disk. Never used to train a shared model.",
    },
    {
      item: "Generated audio",
      what: "Per-line TTS output, mix stems, and exported deliverables.",
      retention: "Written to your project output folder. You own and control them.",
    },
    {
      item: "Model cache",
      what: "Downloaded ONNX models and compiled engine caches.",
      retention: "Stored in the app data directory. Can be cleared in Preferences.",
    },
  ];

  const never: {
    item: string;
    why: string;
  }[] = [
    {
      item: "Source video or audio",
      why: "Decoding, analysis, and export happen locally.",
    },
    {
      item: "Transcripts and translations",
      why: "Local MT runs against your editable script by default.",
    },
    {
      item: "Voice references",
      why: "Speaker clips are used only for per-project voicing.",
    },
    {
      item: "Generated output",
      why: "Final mix and stems are written to your disk.",
    },
  ];

  const optin: {
    item: string;
    what: string;
    how: string;
  }[] = [
    {
      item: "Cloud translation",
      what: "Source text for the lines you route to a hosted provider.",
      how: "Off by default. Enabled per project, per stage, in Settings.",
    },
    {
      item: "Cloud voice generation",
      what: "Target text and optional speaker reference for hosted TTS.",
      how: "Off by default. Enabled per project, per stage, in Settings.",
    },
    {
      item: "Telemetry",
      what: "Anonymous crash reports and usage counters.",
      how: "Disabled on install. Turn on in Preferences if you want to help.",
    },
    {
      item: "Update checks",
      what: "App version and OS info to the update server.",
      how: "Checks on launch unless disabled. No media or project data is sent.",
    },
  ];

  return (
    <section id="privacy" data-reveal className="reveal border-b border-border bg-surface">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionNumber n="04b" label="Privacy & retention" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Your media is yours. Full stop.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Trackdub is built local-first. That is not a feature — it is the default.
              The app stores project data where you tell it to, and it does not send
              your media, transcripts, or voice references anywhere unless you
              explicitly opt in.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              When you do opt in, only the minimum data needed for that stage leaves
              your machine. Everything else stays local.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-14">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Tbl. 04 &nbsp;·&nbsp; Stored locally
              </div>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      <th className="border-b border-border py-3 pr-4 font-normal">Data</th>
                      <th className="border-b border-border py-3 pr-4 font-normal">What it is</th>
                      <th className="border-b border-border py-3 font-normal">Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    {local.map((l) => (
                      <tr key={l.item} className="hover:bg-background/60">
                        <td className="border-b border-border py-4 pr-4 align-top font-serif text-[18px] text-foreground">
                          {l.item}
                        </td>
                        <td className="border-b border-border py-4 pr-4 align-top text-[14px] leading-relaxed text-muted-foreground">
                          {l.what}
                        </td>
                        <td className="border-b border-border py-4 align-top font-mono text-[12px] text-foreground">
                          {l.retention}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Fig. 04b-i &nbsp;·&nbsp; Never leaves the machine
                </div>
                <ul className="mt-3 space-y-3 border-t border-border pt-4">
                  {never.map((n) => (
                    <li key={n.item} className="grid gap-1">
                      <div className="font-serif text-[18px] text-foreground">{n.item}</div>
                      <div className="text-[14px] leading-relaxed text-muted-foreground">{n.why}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Fig. 04b-ii &nbsp;·&nbsp; Opt-in only
                </div>
                <ul className="mt-3 space-y-4 border-t border-border pt-4">
                  {optin.map((o) => (
                    <li key={o.item} className="grid gap-1">
                      <div className="font-serif text-[18px] text-foreground">{o.item}</div>
                      <div className="text-[14px] leading-relaxed text-muted-foreground">{o.what}</div>
                      <div className="font-mono text-[11px] leading-relaxed text-accent">{o.how}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- architecture ---------------- */

function Architecture() {
  const layers: {
    where: string;
    tag: string;
    stages: string;
    what: string;
    leaves: string;
  }[] = [
    {
      where: "On device",
      tag: "Default",
      stages: "Ingest · Probe · VAD",
      what: "FFmpeg-backed decode, scene split, voice-activity detection. Runs entirely on your CPU.",
      leaves: "Nothing leaves the machine.",
    },
    {
      where: "On device",
      tag: "Default",
      stages: "Transcribe · Diarize",
      what: "ASR and speaker separation via bundled ONNX models. Accelerated by DirectML, CUDA, CoreML, or Windows ML when available; CPU otherwise.",
      leaves: "Nothing leaves the machine.",
    },
    {
      where: "On device",
      tag: "Default",
      stages: "Translate",
      what: "Local MT model runs against the editable script. Glossary and per-speaker style are applied locally.",
      leaves: "Nothing leaves the machine.",
    },
    {
      where: "On device",
      tag: "Default",
      stages: "Voice · Mix · Export",
      what: "TTS with per-speaker voice reference, alignment, ducking, and mux. GPU-accelerated where a provider is present; CPU fallback is always available.",
      leaves: "Nothing leaves the machine.",
    },
    {
      where: "Off device",
      tag: "Opt-in",
      stages: "Cloud translation · Cloud voice",
      what: "A stage can be routed to a hosted provider you configure (DeepL, ElevenLabs, your own endpoint). Off by default; set per project, per stage.",
      leaves: "Only the stage's input for that stage. Media and other stages stay local.",
    },
    {
      where: "Off device",
      tag: "Off by default",
      stages: "Telemetry",
      what: "Crash reports and anonymous usage counters. Disabled unless you turn them on in Preferences.",
      leaves: "Stack traces and counters. No media, no transcripts.",
    },
  ];

  const providers: {
    name: string;
    platform: string;
    used: string;
    notes: string;
  }[] = [
    {
      name: "TensorRT RTX",
      platform: "Windows · RTX 30/40/50",
      used: "ASR · Diarize · TTS",
      notes: "Selected automatically on supported RTX GPUs. First run compiles an engine cache per model; subsequent runs skip it.",
    },
    {
      name: "DirectML",
      platform: "Windows · any DX12 GPU",
      used: "ASR · Diarize · TTS",
      notes: "Works on Intel Arc, Iris Xe, AMD Radeon, and older NVIDIA cards. The broadest Windows fallback before CPU.",
    },
    {
      name: "CUDA",
      platform: "Windows / Linux · NVIDIA",
      used: "ASR · Diarize · TTS",
      notes: "Used when a matching CUDA runtime is present. Preferred over DirectML on non-RTX NVIDIA hardware.",
    },
    {
      name: "CoreML",
      platform: "macOS · Apple Silicon",
      used: "ASR · Diarize · TTS",
      notes: "Neural Engine + GPU. Selected automatically on M-series Macs.",
    },
    {
      name: "CPU (ONNX Runtime)",
      platform: "All platforms",
      used: "Every stage",
      notes: "Always present. If no accelerator is available — or a model isn't supported by the chosen provider — that stage falls back to CPU without failing the run.",
    },
  ];

  return (
    <section id="architecture" data-reveal className="reveal border-b border-border">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionNumber n="04a" label="Local-first architecture" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              What runs where, and why.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Every stage of the pipeline runs on your machine by default. Cloud
              providers are something you plug in per stage, not a place your
              media silently ends up.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Acceleration is layered: Trackdub prefers the fastest provider your
              hardware supports and falls back stage-by-stage, never
              project-by-project.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Fig. 04a-i &nbsp;·&nbsp; Data plane
            </div>
            <div className="mt-3 rounded-none border border-border bg-surface">
              <div className="grid grid-cols-12 border-b border-hairline px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                <div className="col-span-3">Where</div>
                <div className="col-span-4">Stages</div>
                <div className="col-span-5">What leaves the machine</div>
              </div>
              {layers.map((l, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 items-start gap-x-4 border-b border-hairline px-5 py-5 last:border-b-0"
                >
                  <div className="col-span-3">
                    <div className="font-serif text-[18px] text-foreground">
                      {l.where}
                    </div>
                    <div className="mt-1 inline-block border border-border px-2 py-[2px] font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {l.tag}
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="font-mono text-[12px] text-foreground">
                      {l.stages}
                    </div>
                    <div className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {l.what}
                    </div>
                  </div>
                  <div className="col-span-5 font-mono text-[12px] leading-relaxed text-foreground">
                    {l.leaves}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Fig. 04a-ii &nbsp;·&nbsp; Execution providers &amp; fallback order
            </div>
            <ol className="mt-3 border-t border-border">
              {providers.map((p, i) => (
                <li
                  key={p.name}
                  className="grid grid-cols-12 gap-x-4 border-b border-border py-5"
                >
                  <div className="col-span-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-4">
                    <div className="font-serif text-[20px] text-foreground">
                      {p.name}
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {p.platform}
                    </div>
                  </div>
                  <div className="col-span-3 font-mono text-[12px] text-foreground">
                    {p.used}
                  </div>
                  <div className="col-span-4 text-[14px] leading-relaxed text-muted-foreground">
                    {p.notes}
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Fallback is per-stage. A missing provider on one stage does not
              disable the rest of the pipeline.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- system requirements ---------------- */

function SystemRequirements() {
  const specs: {
    item: string;
    minimum: string;
    recommended: string;
    notes?: string;
  }[] = [
    {
      item: "OS",
      minimum: "Windows 10 22H2 (x64)",
      recommended: "Windows 11 23H2 or later",
      notes: "64-bit only. ARM64 Windows runs under emulation with CPU fallback.",
    },
    {
      item: "CPU",
      minimum: "x64 CPU with AVX2 (Intel 6th gen / AMD Ryzen 2000)",
      recommended: "Intel 10th gen / AMD Ryzen 5000 or newer, 8 cores+",
      notes: "Used for ingest, probe, VAD, and CPU fallback inference.",
    },
    {
      item: "RAM",
      minimum: "16 GB",
      recommended: "32 GB",
      notes: "Larger projects (20 min+, 4K source, many speakers) benefit from more RAM.",
    },
    {
      item: "GPU",
      minimum: "DirectX 12 capable GPU for DirectML",
      recommended: "NVIDIA RTX 3060 / 4060 / 5060 or better",
      notes: "TensorRT RTX requires RTX 30 series or newer. Intel Arc and AMD Radeon work via DirectML.",
    },
    {
      item: "VRAM",
      minimum: "4 GB",
      recommended: "8 GB (1080p) · 12 GB+ (4K / long form)",
      notes: "ASR and diarization models are the heaviest VRAM users. TTS is lighter per line.",
    },
    {
      item: "Storage",
      minimum: "10 GB for app + bundled models",
      recommended: "SSD with 50 GB free for cache",
      notes: "HDD is usable but ingest and model load times increase significantly.",
    },
  ];

  const accelerators: {
    name: string;
    requirement: string;
    speedup: string;
    caveat: string;
  }[] = [
    {
      name: "TensorRT RTX",
      requirement: "NVIDIA RTX 30 / 40 / 50 series · 8 GB+ VRAM",
      speedup: "Fastest on supported hardware",
      caveat: "First run compiles an engine cache per model. Cache is portable across projects.",
    },
    {
      name: "DirectML",
      requirement: "Any DirectX 12 GPU · 4 GB+ VRAM",
      speedup: "2–4× realtime end-to-end on modern integrated/discrete GPUs",
      caveat: "Not every model is equally optimized. Falls back to CPU per-stage if a model fails.",
    },
    {
      name: "CPU fallback",
      requirement: "Any AVX2-capable x64 CPU",
      speedup: "0.8–1.5× realtime depending on model and core count",
      caveat: "Always available. No GPU required to complete a project.",
    },
  ];

  return (
    <section id="requirements" data-reveal className="reveal border-b border-border bg-surface">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionNumber n="04c" label="System requirements" />
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Runs on a wide range of Windows hardware.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Trackdub is built for the machines creators already own. A discrete
              GPU speeds things up, but it is not required — every stage has a CPU
              fallback.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Specifics below are for the Windows desktop app. macOS and Linux
              builds have similar tiers and are documented in the release notes.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Tbl. 02 &nbsp;·&nbsp; Minimum and recommended specs
            </div>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    <th className="border-b border-border py-3 pr-4 font-normal">Component</th>
                    <th className="border-b border-border py-3 pr-4 font-normal">Minimum</th>
                    <th className="border-b border-border py-3 pr-4 font-normal">Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((s) => (
                    <tr key={s.item} className="hover:bg-background/60">
                      <td className="border-b border-border py-4 pr-4 align-top font-serif text-[20px] text-foreground">
                        {s.item}
                      </td>
                      <td className="border-b border-border py-4 pr-4 align-top font-mono text-[13px] text-foreground">
                        {s.minimum}
                      </td>
                      <td className="border-b border-border py-4 pr-4 align-top font-mono text-[13px] text-muted-foreground">
                        {s.recommended}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 space-y-4 border-t border-border pt-6">
              {specs.map(
                (s) =>
                  s.notes && (
                    <div key={`${s.item}-note`} className="grid gap-2 md:grid-cols-[140px_1fr]">
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {s.item}
                      </div>
                      <p className="text-[15px] leading-relaxed text-muted-foreground">{s.notes}</p>
                    </div>
                  )
              )}
            </div>

            <div className="mt-14 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Tbl. 03 &nbsp;·&nbsp; Acceleration notes
            </div>
            <div className="mt-3 grid gap-px bg-border md:grid-cols-3">
              {accelerators.map((a) => (
                <div key={a.name} className="bg-background p-5">
                  <div className="font-serif text-[22px] text-foreground">{a.name}</div>
                  <dl className="mt-4 space-y-3">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        Requirement
                      </dt>
                      <dd className="mt-1 text-[14px] leading-relaxed text-foreground">{a.requirement}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        Speedup
                      </dt>
                      <dd className="mt-1 text-[14px] leading-relaxed text-foreground">{a.speedup}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        Caveat
                      </dt>
                      <dd className="mt-1 text-[14px] leading-relaxed text-muted-foreground">{a.caveat}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
