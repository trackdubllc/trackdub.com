import { i as __toESM } from "../_runtime.mjs";
import { s as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+react-email__body.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PRICING_PLANS } from "./pricing-C2fAB_cA.mjs";
import { t as FAQ_ITEMS } from "./routes-CmLmE7Is.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BL28xPe0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Adds `.revealed` to any element with `data-reveal` when it enters the viewport.
* Once-only; respects prefers-reduced-motion.
*/
function useReveal() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			document.querySelectorAll("[data-reveal]").forEach((el) => {
				el.classList.add("revealed");
			});
			return;
		}
		const els = Array.from(document.querySelectorAll("[data-reveal]"));
		els.forEach((root) => {
			root.querySelectorAll("[data-reveal-child]").forEach((k, i) => {
				if (!k.style.getPropertyValue("--reveal-i")) k.style.setProperty("--reveal-i", String(i));
			});
		});
		const io = new IntersectionObserver((entries) => {
			const incoming = entries.filter((e) => e.isIntersecting).map((e) => e.target).sort((a, b) => {
				const pos = a.compareDocumentPosition(b);
				if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
				if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
				return 0;
			});
			incoming.forEach((el, idx) => {
				const delay = incoming.length > 1 ? Math.min(idx * 90, 240) : 0;
				el.style.setProperty("--reveal-delay", `${delay}ms`);
				requestAnimationFrame(() => el.classList.add("revealed"));
				io.unobserve(el);
			});
		}, {
			rootMargin: "0px 0px -12% 0px",
			threshold: [0, .08]
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function Index() {
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Masthead, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionRail, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPlate, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PipelineFeature, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Walkthrough, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumableJob, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageChapters, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Control, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Performance, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Architecture, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Privacy, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemRequirements, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatYouGet, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparedTo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Endnote, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Colophon, {})
		]
	});
}
var NAV = [
	{
		href: "#pipeline",
		label: "Pipeline"
	},
	{
		href: "#walkthrough",
		label: "Try it"
	},
	{
		href: "#resume",
		label: "Resume"
	},
	{
		href: "#control",
		label: "Control"
	},
	{
		href: "#performance",
		label: "Performance"
	},
	{
		href: "#architecture",
		label: "Architecture"
	},
	{
		href: "#privacy",
		label: "Privacy"
	},
	{
		href: "#requirements",
		label: "Requirements"
	},
	{
		href: "#pricing",
		label: "Pricing"
	},
	{
		href: "#faq",
		label: "FAQ"
	}
];
var NAV_PRIMARY = new Set([
	"#pipeline",
	"#walkthrough",
	"#control",
	"#performance",
	"#pricing",
	"#faq"
]);
function Container({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mx-auto w-full max-w-6xl px-6 sm:px-10 ${className}`,
		children
	});
}
function SectionNumber({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-10 sm:mb-14",
		"data-lead": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "h-px w-8 bg-accent",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
				children: "Chapter"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline gap-4 sm:gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-2xl leading-none tracking-tight text-accent sm:text-3xl",
					children: n
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-6 w-px self-center bg-border",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-serif text-[20px] leading-tight tracking-tight text-foreground sm:text-[24px]",
					children: label
				})
			]
		})]
	});
}
function Rule({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `h-px w-full bg-border ${className}`,
		"aria-hidden": true
	});
}
function SectionRail() {
	const [active, setActive] = (0, import_react.useState)("");
	const [visible, setVisible] = (0, import_react.useState)(false);
	const itemsRef = (0, import_react.useRef)({});
	const listRef = (0, import_react.useRef)(null);
	const [hovered, setHovered] = (0, import_react.useState)(null);
	const navIds = (0, import_react.useRef)(new Set(NAV.map((n) => n.href.slice(1))));
	const activeRef = (0, import_react.useRef)("");
	const [scrubbing, setScrubbing] = (0, import_react.useState)(false);
	const progressFillRef = (0, import_react.useRef)(null);
	const indicatorRef = (0, import_react.useRef)(null);
	const dragStartYRef = (0, import_react.useRef)(0);
	const draggingRef = (0, import_react.useRef)(false);
	const suppressClickRef = (0, import_react.useRef)(false);
	const scrubRafRef = (0, import_react.useRef)(null);
	const pendingScrubYRef = (0, import_react.useRef)(null);
	const activePointerIdRef = (0, import_react.useRef)(null);
	const scrubSamplesRef = (0, import_react.useRef)([]);
	const pointerTypeRef = (0, import_react.useRef)("mouse");
	const inertiaRafRef = (0, import_react.useRef)(null);
	const smoothRafRef = (0, import_react.useRef)(null);
	const smoothTargetRef = (0, import_react.useRef)(null);
	const smoothStartRef = (0, import_react.useRef)(null);
	const smoothDurRef = (0, import_react.useRef)(560);
	const scheduleRailFrameRef = (0, import_react.useRef)(() => {});
	const prefersReducedMotion = () => typeof document !== "undefined" && (document.documentElement.classList.contains("reduce-motion") || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
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
	const easeOutExpo = (t) => t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
	const animateScrollTo = (targetY) => {
		const docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
		const clamped = Math.min(docMax, Math.max(0, targetY));
		smoothTargetRef.current = clamped;
		const now = performance_default.now();
		const distance = Math.abs(clamped - window.scrollY);
		smoothDurRef.current = Math.min(280, Math.max(140, 120 + distance * .08));
		smoothStartRef.current = {
			y: window.scrollY,
			t: now
		};
		if (smoothRafRef.current !== null) return;
		const step = () => {
			const start = smoothStartRef.current;
			const target = smoothTargetRef.current;
			if (start === null || target === null) {
				smoothRafRef.current = null;
				return;
			}
			const elapsed = performance_default.now() - start.t;
			const p = Math.min(1, elapsed / smoothDurRef.current);
			const y = start.y + (target - start.y) * easeOutExpo(p);
			window.scrollTo(0, y);
			if (p < 1) smoothRafRef.current = window.requestAnimationFrame(step);
			else {
				smoothRafRef.current = null;
				smoothTargetRef.current = null;
				smoothStartRef.current = null;
			}
		};
		smoothRafRef.current = window.requestAnimationFrame(step);
	};
	const scrollToTargetId = (id) => {
		const target = document.getElementById(id);
		if (!target) return;
		const top = target.getBoundingClientRect().top + window.scrollY;
		if (prefersReducedMotion()) {
			cancelSmoothScroll();
			window.scrollTo({
				top,
				behavior: "auto"
			});
			return;
		}
		animateScrollTo(top);
	};
	const applyScrubFromClientY = (clientY) => {
		const list = listRef.current;
		if (!list) return;
		const box = list.getBoundingClientRect();
		const f = Math.min(1, Math.max(0, (clientY - box.top) / Math.max(1, box.height)));
		const docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
		cancelSmoothScroll();
		window.scrollTo({
			top: f * docMax,
			behavior: "auto"
		});
		scheduleRailFrameRef.current();
	};
	const nearestChapterId = (clientY) => {
		let bestId = null;
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
	const jumpToChapter = (id) => {
		const href = `#${id}`;
		if (window.history?.pushState) {
			window.history.pushState(null, "", href);
			setActive(id);
		} else window.location.hash = href;
		scrollToTargetId(id);
	};
	const pushSample = (clientY) => {
		const list = listRef.current;
		if (!list) return;
		const box = list.getBoundingClientRect();
		const y = Math.min(1, Math.max(0, (clientY - box.top) / Math.max(1, box.height))) * Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
		const now = performance_default.now();
		const buf = scrubSamplesRef.current;
		buf.push({
			y,
			t: now
		});
		while (buf.length > 2 && now - buf[0].t > 120) buf.shift();
	};
	const releaseVelocity = () => {
		const buf = scrubSamplesRef.current;
		if (buf.length < 2) return 0;
		const first = buf[0];
		const last = buf[buf.length - 1];
		const dt = Math.max(1, last.t - first.t);
		return (last.y - first.y) / dt;
	};
	const startInertia = (v0) => {
		if (Math.abs(v0) < .35) return;
		cancelInertia();
		cancelSmoothScroll();
		let v = v0;
		let last = performance_default.now();
		const decayPerMs = .995;
		const step = () => {
			const now = performance_default.now();
			const dt = now - last;
			last = now;
			const docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
			const nextY = Math.min(docMax, Math.max(0, window.scrollY + v * dt));
			window.scrollTo(0, nextY);
			v *= Math.pow(decayPerMs, dt);
			if (Math.abs(v) < .02 || nextY === 0 || nextY === docMax) {
				inertiaRafRef.current = null;
				return;
			}
			inertiaRafRef.current = window.requestAnimationFrame(step);
		};
		inertiaRafRef.current = window.requestAnimationFrame(step);
	};
	const scheduleScrub = (clientY) => {
		pendingScrubYRef.current = clientY;
		if (scrubRafRef.current !== null) return;
		scrubRafRef.current = window.requestAnimationFrame(() => {
			scrubRafRef.current = null;
			const y = pendingScrubYRef.current;
			pendingScrubYRef.current = null;
			if (y !== null) applyScrubFromClientY(y);
		});
	};
	(0, import_react.useEffect)(() => {
		activeRef.current = active;
	}, [active]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const cancel = () => {
			cancelSmoothScroll();
			cancelInertia();
		};
		const onKey = (e) => {
			if (new Set([
				"PageUp",
				"PageDown",
				"Home",
				"End",
				"ArrowUp",
				"ArrowDown",
				" ",
				"Spacebar"
			]).has(e.key)) cancel();
		};
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
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const syncFromHash = () => {
			const id = window.location.hash.slice(1);
			if (id && navIds.current.has(id) && id !== activeRef.current) setActive(id);
		};
		syncFromHash();
		window.addEventListener("hashchange", syncFromHash);
		return () => window.removeEventListener("hashchange", syncFromHash);
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const targets = NAV.map((n) => n.href.slice(1)).map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		if (!targets.length) return;
		const ratios = /* @__PURE__ */ new Map();
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
		let pickScheduled = false;
		const schedulePick = () => {
			if (pickScheduled) return;
			pickScheduled = true;
			window.requestAnimationFrame(() => {
				pickScheduled = false;
				pickActive();
			});
		};
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
			schedulePick();
		}, {
			rootMargin: "-40% 0px -50% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		targets.forEach((t) => io.observe(t));
		let docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
		let lastVisible = false;
		let lastProgress = -1;
		let lastAria = -1;
		let lastIndTop = NaN;
		let lastIndHeight = NaN;
		let rafId = null;
		let ticking = false;
		const writeRailFrame = () => {
			ticking = false;
			rafId = null;
			const y = window.scrollY;
			const p = docMax > 0 ? Math.min(1, Math.max(0, y / docMax)) : 0;
			const activeEl = itemsRef.current[activeRef.current];
			const nextVisible = y > 480;
			if (nextVisible !== lastVisible) {
				lastVisible = nextVisible;
				setVisible(nextVisible);
			}
			if (Math.abs(p - lastProgress) > .002) {
				lastProgress = p;
				const fill = progressFillRef.current;
				if (fill) fill.style.transform = `scaleY(${p})`;
			}
			const ariaVal = Math.round(p * 100);
			if (ariaVal !== lastAria) {
				lastAria = ariaVal;
				const list = listRef.current;
				if (list) list.setAttribute("aria-valuenow", String(ariaVal));
			}
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
		scheduleRailFrameRef.current = schedule;
		const onResize = () => {
			docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
			lastIndTop = NaN;
			lastIndHeight = NaN;
			schedule();
		};
		writeRailFrame();
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", onResize, { passive: true });
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
	(0, import_react.useEffect)(() => {
		const list = listRef.current;
		if (!list) return;
		scheduleRailFrameRef.current();
		const ro = new ResizeObserver(() => scheduleRailFrameRef.current());
		ro.observe(list);
		return () => ro.disconnect();
	}, [active, visible]);
	const handleRailPointerDown = (e) => {
		if (e.button !== 0 && e.pointerType === "mouse") return;
		cancelSmoothScroll();
		cancelInertia();
		if (activePointerIdRef.current !== null) finishScrub("pointercancel", null);
		pointerTypeRef.current = e.pointerType;
		scrubSamplesRef.current = e.pointerType === "touch" ? [{
			y: window.scrollY,
			t: performance_default.now()
		}] : [];
		dragStartYRef.current = e.clientY;
		draggingRef.current = false;
		suppressClickRef.current = false;
		try {
			listRef.current?.setPointerCapture?.(e.pointerId);
		} catch {}
		activePointerIdRef.current = e.pointerId;
	};
	const handleRailPointerMove = (e) => {
		if (!listRef.current?.hasPointerCapture?.(e.pointerId)) return;
		const dy = e.clientY - dragStartYRef.current;
		const isTouch = pointerTypeRef.current === "touch";
		const threshold = isTouch ? 8 : 4;
		if (!draggingRef.current && Math.abs(dy) < threshold) return;
		if (!draggingRef.current) {
			draggingRef.current = true;
			suppressClickRef.current = true;
			setScrubbing(true);
		}
		e.preventDefault();
		if (isTouch) {
			pushSample(e.clientY);
			scheduleScrub(e.clientY);
		} else applyScrubFromClientY(e.clientY);
	};
	const finishScrub = (endType, clientY) => {
		const list = listRef.current;
		const pid = activePointerIdRef.current;
		if (list && pid !== null) try {
			if (list.hasPointerCapture?.(pid)) list.releasePointerCapture(pid);
		} catch {}
		if (scrubRafRef.current !== null) {
			window.cancelAnimationFrame(scrubRafRef.current);
			scrubRafRef.current = null;
			if (pendingScrubYRef.current !== null) {
				applyScrubFromClientY(pendingScrubYRef.current);
				pendingScrubYRef.current = null;
			}
		}
		const isTouch = pointerTypeRef.current === "touch";
		if (draggingRef.current) {
			if (isTouch && endType !== "pointercancel") startInertia(releaseVelocity());
			window.setTimeout(() => {
				draggingRef.current = false;
				setScrubbing(false);
			}, 0);
		} else if (endType !== "pointercancel" && clientY !== null) {
			suppressClickRef.current = true;
			window.setTimeout(() => {
				suppressClickRef.current = false;
			}, 0);
			const id = nearestChapterId(clientY);
			if (id) jumpToChapter(id);
		}
		scrubSamplesRef.current = [];
		activePointerIdRef.current = null;
		scheduleRailFrameRef.current();
	};
	const handleRailPointerUp = (e) => {
		if (activePointerIdRef.current !== null && e.pointerId !== activePointerIdRef.current) return;
		finishScrub(e.type, e.clientY);
	};
	(0, import_react.useEffect)(() => {
		const list = listRef.current;
		if (!list) return;
		const down = (e) => handleRailPointerDown(e);
		const move = (e) => handleRailPointerMove(e);
		const up = (e) => handleRailPointerUp(e);
		list.addEventListener("pointerdown", down, { passive: true });
		list.addEventListener("pointermove", move, { passive: false });
		list.addEventListener("pointerup", up, { passive: true });
		list.addEventListener("pointercancel", up, { passive: true });
		const onWindowCancel = (e) => {
			if (activePointerIdRef.current !== null && e.pointerId === activePointerIdRef.current) finishScrub("pointercancel", null);
		};
		const onWindowUp = (e) => {
			if (activePointerIdRef.current !== null && e.pointerId === activePointerIdRef.current) finishScrub(e.type, e.clientY);
		};
		const onLostCapture = () => {
			if (activePointerIdRef.current !== null) finishScrub("pointercancel", null);
		};
		const onBlurOrHide = () => {
			if (activePointerIdRef.current !== null) finishScrub("pointercancel", null);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: `pointer-events-none fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 transition-opacity duration-500 xl:flex ${visible ? "opacity-100" : "opacity-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: listRef,
			className: `pointer-events-auto relative flex min-h-[420px] flex-col py-2 pl-3 pr-2 touch-none select-none ${scrubbing ? "cursor-grabbing" : "cursor-grab"}`,
			role: "slider",
			"aria-label": "Page scroll position",
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			"aria-valuenow": 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute left-0 top-1 bottom-1 w-0.5 bg-border/70",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					ref: progressFillRef,
					className: "pointer-events-none absolute left-0 top-1 w-0.5 origin-top bg-foreground/40",
					style: {
						height: "calc(100% - 0.5rem)",
						transform: "scaleY(0)",
						transformOrigin: "top",
						willChange: "transform"
					},
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					ref: indicatorRef,
					className: "pointer-events-none absolute left-[-1px] w-[3px] rounded-full bg-accent",
					style: {
						transform: "translateY(0px)",
						height: "12px",
						willChange: "transform, height",
						transition: "transform 180ms cubic-bezier(0.22, 1, 0.36, 1), height 140ms ease-out"
					},
					"aria-hidden": true
				}),
				NAV.map((n, i) => {
					const id = n.href.slice(1);
					const isActive = active === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: n.href,
						ref: (el) => {
							itemsRef.current[id] = el;
						},
						className: "pointer-events-auto group relative flex flex-1 min-h-[32px] cursor-pointer items-center gap-3 rounded-sm px-1 transition-colors hover:bg-foreground/[0.03] focus-visible:outline-none focus-visible:bg-foreground/[0.04]",
						"aria-label": `Jump to ${n.label}`,
						onMouseEnter: () => setHovered(id),
						onMouseLeave: () => setHovered((h) => h === id ? null : h),
						onFocus: () => setHovered(id),
						onBlur: () => setHovered((h) => h === id ? null : h),
						onClick: (e) => {
							if (suppressClickRef.current || draggingRef.current) {
								e.preventDefault();
								suppressClickRef.current = false;
								return;
							}
							e.preventDefault();
							if (window.history?.pushState) {
								window.history.pushState(null, "", n.href);
								setActive(id);
							} else window.location.hash = n.href;
							scrollToTargetId(id);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px transition-all duration-300 ease-out ${isActive ? "w-6 bg-accent" : "w-3 bg-border group-hover:w-5 group-hover:bg-foreground/60"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							"aria-hidden": true,
							className: `font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-300 ${isActive ? "text-accent opacity-100 translate-x-0" : "text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"}`,
							children: [
								String(i + 1).padStart(2, "0"),
								" · ",
								n.label
							]
						})]
					}, id);
				})
			]
		})
	});
}
function TextLink({ href, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "inline-flex items-baseline gap-1 border-b border-foreground/30 pb-0.5 text-foreground transition-colors hover:border-accent hover:text-accent",
		children
	});
}
function InkButton({ href, children, variant = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: `btn-sheen inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variant === "primary" ? "bg-foreground text-background hover:bg-ink" : "border border-foreground/70 text-foreground hover:border-foreground"}`,
		children
	});
}
function Masthead() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-border bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "shrink-0 font-serif text-2xl leading-none tracking-tight text-foreground",
					children: ["Trackdub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden flex-1 items-center justify-center gap-x-6 gap-y-2 lg:gap-x-7 md:flex",
					"aria-label": "Primary",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: `whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground ${NAV_PRIMARY.has(n.href) ? "" : "hidden xl:inline"}`,
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden shrink-0 items-center gap-4 md:flex lg:gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionToggle, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InkButton, {
						href: "#pricing",
						children: "Get Trackdub"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
					onClick: () => setOpen((o) => !o),
					"aria-expanded": open,
					"aria-label": "Toggle menu",
					children: open ? "Close" : "Menu"
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "flex flex-col py-4",
				children: [
					NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						onClick: () => setOpen(false),
						className: "py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground",
						children: n.label
					}, n.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionToggle, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InkButton, {
						href: "#pricing",
						children: "Get Trackdub"
					})
				]
			})
		})]
	});
}
var MOTION_KEY = "trackdub:motion";
function MotionToggle() {
	const [mode, setMode] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" ? localStorage.getItem(MOTION_KEY) : null;
		const prefersReduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
		setMode(stored ?? (prefersReduced ? "reduced" : "full"));
	}, []);
	(0, import_react.useEffect)(() => {
		if (!mode) return;
		document.documentElement.classList.toggle("reduce-motion", mode === "reduced");
		try {
			localStorage.setItem(MOTION_KEY, mode);
		} catch {}
	}, [mode]);
	const next = mode === "reduced" ? "full" : "reduced";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setMode(next),
		"aria-pressed": mode === "reduced" ? "false" : "true",
		title: mode === "reduced" ? "Reduced motion is on. Click to enable animations." : "Full motion is on. Click to reduce animations.",
		className: "group inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: `relative inline-block h-3 w-6 rounded-full border border-border transition-colors ${mode === "reduced" ? "bg-transparent" : "bg-accent/60"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-foreground transition-all duration-300 ${mode === "reduced" ? "left-0.5" : "left-[calc(100%-0.625rem)]"}` })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: mode === "reduced" ? "Motion: off" : "Motion: on" })]
	});
}
function Lead() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid grid-cols-1 gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
						n: "00",
						label: "A workstation for dubbing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[88px]",
						children: [
							"Dub videos into other languages",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-accent",
								children: "without giving up control."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl",
						children: "Trackdub is a desktop workstation for translating, voicing, and mixing video. Every stage of the pipeline is inspectable, editable, and rerunnable — from the transcript to the final mix. Your media never leaves your machine unless you say so."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InkButton, {
							href: "#pricing",
							children: "Get early access"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
							href: "#pipeline",
							children: "Read the pipeline →"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:col-span-4 lg:border-l lg:border-border lg:pl-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "space-y-5 font-mono text-[12px] text-muted-foreground",
					children: [
						["Version", "Early preview"],
						["Platforms", "Windows · macOS · Linux"],
						["License", "Commercial · non-commercial"],
						["Runs on", "CPU · DirectML · CUDA · CoreML"],
						["Data", "Local by default"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-4 border-b border-hairline pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "uppercase tracking-[0.14em]",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-right text-foreground",
							children: v
						})]
					}, k))
				})
			})]
		})
	});
}
var JOB_STAGES = [
	{
		id: "ingest",
		n: "01",
		label: "Ingest & probe",
		sec: 2,
		artifact: "media.probe.json"
	},
	{
		id: "transcribe",
		n: "02",
		label: "Transcribe (ASR)",
		sec: 6.5,
		artifact: "transcript.de.jsonl"
	},
	{
		id: "translate",
		n: "03",
		label: "Translate",
		sec: 3.5,
		artifact: "transcript.en.jsonl"
	},
	{
		id: "diarize",
		n: "04",
		label: "Diarize",
		sec: 4,
		artifact: "speakers.rttm"
	},
	{
		id: "voice",
		n: "05",
		label: "Voice (TTS)",
		sec: 7,
		artifact: "lines/*.wav"
	},
	{
		id: "mix",
		n: "06",
		label: "Mix & mux",
		sec: 3,
		artifact: "interview_en.mp4"
	}
];
var DOWNSTREAM_OF_TRANSLATE = [
	"translate",
	"voice",
	"mix"
];
function initialJobState() {
	return {
		status: {
			ingest: "done",
			transcribe: "done",
			translate: "running",
			diarize: "queued",
			voice: "queued",
			mix: "queued"
		},
		progress: {
			ingest: 1,
			transcribe: 1,
			translate: .35,
			diarize: 0,
			voice: 0,
			mix: 0
		}
	};
}
var FAILURES = {
	gpu_oom: {
		kind: "gpu_oom",
		stage: "voice",
		code: "E_GPU_OOM",
		title: "GPU ran out of memory during voice generation",
		detail: "The TensorRT RTX engine for the voice model needed 8.4 GB but 6.1 GB were free on the selected device (RTX 4070). Trackdub paused the job at line 63 of 128 and kept every finished line on disk.",
		recoverLabel: "Retry on DirectML at half batch",
		recoveryNote: "Switching provider to DirectML (batch 4). Already-rendered lines 1–62 are reused from the checkpoint.",
		fromCheckpoint: .49
	},
	missing_codec: {
		kind: "missing_codec",
		stage: "ingest",
		code: "E_MEDIA_CODEC",
		title: "Ingest could not decode one audio track",
		detail: "FFmpeg opened interview_de.mp4 but track #2 uses an EAC3 stream that this build cannot decode. Video and track #1 were probed successfully; the file was not modified.",
		recoverLabel: "Install decoder & rescan",
		recoveryNote: "Installed the missing EAC3 decoder. Re-probing the container — video and existing tracks are reused, only the audio scan re-runs.",
		fromCheckpoint: .6
	},
	partial_ingest: {
		kind: "partial_ingest",
		stage: "transcribe",
		code: "E_TRUNCATED_STREAM",
		title: "Source media ended mid-segment",
		detail: "The last 3.2s of interview_de.mp4 are missing packets — likely a truncated export. Trackdub transcribed 124 of 128 segments and saved them. Nothing was discarded.",
		recoverLabel: "Continue with 124 saved segments",
		recoveryNote: "Accepted partial ingest. Downstream stages will run on the 124 valid segments; the truncated tail is flagged in the transcript for review.",
		fromCheckpoint: .97
	}
};
function ResumableJob() {
	const [job, setJob] = (0, import_react.useState)(initialJobState);
	const [running, setRunning] = (0, import_react.useState)(true);
	const [failure, setFailure] = (0, import_react.useState)(null);
	const [log, setLog] = (0, import_react.useState)([
		{
			t: "00:00",
			msg: "Job queued · interview_de.mp4 → en-US",
			kind: "info"
		},
		{
			t: "00:02",
			msg: "Ingest complete · media.probe.json",
			kind: "ok"
		},
		{
			t: "00:09",
			msg: "Transcribe complete · 128 segments",
			kind: "ok"
		},
		{
			t: "00:09",
			msg: "Translate started · model=nllb-1.3b",
			kind: "info"
		}
	]);
	const clockRef = (0, import_react.useRef)(9);
	const addLog = (msg, kind = "info") => {
		const c = clockRef.current;
		const mm = String(Math.floor(c / 60)).padStart(2, "0");
		const ss = String(Math.floor(c % 60)).padStart(2, "0");
		setLog((prev) => [...prev.slice(-40), {
			t: `${mm}:${ss}`,
			msg,
			kind
		}]);
	};
	(0, import_react.useEffect)(() => {
		if (!running || failure) return;
		const dt = .12;
		const iv = window.setInterval(() => {
			clockRef.current += dt;
			setJob((prev) => {
				const runningStage = JOB_STAGES.find((s) => prev.status[s.id] === "running");
				if (!runningStage) {
					const next = JOB_STAGES.find((s) => prev.status[s.id] === "queued" || prev.status[s.id] === "stale");
					if (!next) return prev;
					const label = prev.status[next.id] === "stale" ? `${next.label} reprocessing (stale after edit)` : `${next.label} started`;
					queueMicrotask(() => addLog(label, "info"));
					return {
						...prev,
						status: {
							...prev.status,
							[next.id]: "running"
						}
					};
				}
				const inc = dt / runningStage.sec;
				const cur = prev.progress[runningStage.id] + inc;
				if (cur >= 1) {
					queueMicrotask(() => addLog(`${runningStage.label} complete · ${runningStage.artifact}`, "ok"));
					return {
						status: {
							...prev.status,
							[runningStage.id]: "done"
						},
						progress: {
							...prev.progress,
							[runningStage.id]: 1
						}
					};
				}
				return {
					...prev,
					progress: {
						...prev.progress,
						[runningStage.id]: cur
					}
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
				} else for (const st of JOB_STAGES) if (s[st.id] === "paused") s[st.id] = "running";
				return {
					...prev,
					status: s
				};
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
			return {
				status: s,
				progress: p
			};
		});
		addLog("Edit · line 42 target text changed by user", "warn");
		addLog("Stale · translate, voice, mix marked for reprocess", "warn");
	};
	const injectFailure = (kind) => {
		const info = FAILURES[kind];
		setJob((prev) => {
			const s = { ...prev.status };
			const p = { ...prev.progress };
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
			return {
				status: s,
				progress: p
			};
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
			return {
				...prev,
				status: s
			};
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
			{
				t: "00:00",
				msg: "Job queued · interview_de.mp4 → en-US",
				kind: "info"
			},
			{
				t: "00:02",
				msg: "Ingest complete · media.probe.json",
				kind: "ok"
			},
			{
				t: "00:09",
				msg: "Transcribe complete · 128 segments",
				kind: "ok"
			},
			{
				t: "00:09",
				msg: "Translate resumed · model=nllb-1.3b",
				kind: "info"
			}
		]);
	};
	const allDone = JOB_STAGES.every((s) => job.status[s.id] === "done");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "resume",
		"data-reveal": true,
		className: "reveal border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
							n: "02b",
							label: "Resumable jobs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
							children: "Pause anything. Edit one stage. Resume only what changed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[17px] leading-relaxed text-muted-foreground",
							children: "Every stage writes a checkpoint to disk. Close the app, unplug the laptop, edit a translation two days later — the job picks up from the last completed artifact."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-[15px] leading-relaxed text-muted-foreground",
							children: [
								"When you change a translated line, Trackdub marks that stage and everything downstream as ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "stale" }),
								" and requeues only those. Ingest, transcription, and diarization stay done — they don't depend on the edit."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: "Try it → pause · edit translation · resume"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "not-prose rounded-none border p-5 sm:p-6",
						style: {
							background: PANEL,
							borderColor: LINE
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex flex-wrap items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] uppercase tracking-[0.14em]",
									style: { color: DIM },
									children: "Job · interview_de.mp4 → en-US \xA0·\xA0 checkpoint dir: /projects/interview/.trackdub"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: togglePause,
											disabled: allDone || !!failure,
											className: "inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors disabled:opacity-40",
											style: {
												color: INK,
												borderColor: running ? ACC : LINE,
												background: running ? "transparent" : PANEL_HI
											},
											"aria-label": running ? "Pause job" : "Resume job",
											children: running ? "❚❚ Pause" : "▶ Resume"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: editTranslation,
											disabled: !!failure,
											className: "inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
											style: {
												color: INK,
												borderColor: LINE,
												background: PANEL_HI
											},
											children: "✎ Edit line 42"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: reset,
											className: "inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
											style: {
												color: DIM,
												borderColor: LINE
											},
											children: "↺ Reset"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex flex-wrap items-center gap-2 border-t border-b py-3",
								style: { borderColor: LINE },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-1 font-mono text-[10px] uppercase tracking-[0.14em]",
									style: { color: DIM },
									children: "Simulate failure"
								}), [
									["gpu_oom", "GPU OOM"],
									["missing_codec", "Missing codec"],
									["partial_ingest", "Partial ingest"]
								].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => injectFailure(k),
									className: "inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors hover:border-accent",
									style: {
										color: INK,
										borderColor: LINE,
										background: "transparent"
									},
									children: ["⚠ ", label]
								}, k))]
							}),
							failure && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								role: "alert",
								className: "mb-5 border p-4",
								style: {
									borderColor: "oklch(0.55 0.14 30)",
									background: "oklch(0.20 0.04 30 / 0.35)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-baseline justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] uppercase tracking-[0.14em]",
												style: { color: "oklch(0.78 0.15 258)" },
												children: failure.code
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-serif text-[17px]",
												style: { color: INK },
												children: failure.title
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[10px] uppercase tracking-[0.14em]",
											style: { color: DIM },
											children: [
												"Stage · ",
												failure.stage,
												" · paused, checkpoint saved"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[13px] leading-relaxed",
										style: { color: "oklch(0.82 0.02 245)" },
										children: failure.detail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: recover,
											className: "inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em]",
											style: {
												color: INK,
												borderColor: ACC,
												background: PANEL_HI
											},
											children: ["✓ ", failure.recoverLabel]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] uppercase tracking-[0.14em]",
											style: { color: DIM },
											children: "or reset · nothing on disk was destroyed"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "divide-y",
								style: { borderColor: LINE },
								children: JOB_STAGES.map((s) => {
									const status = job.status[s.id];
									const pct = Math.round(job.progress[s.id] * 100);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t py-3 first:border-t-0",
										style: { borderColor: LINE },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-block h-2 w-2 rounded-full",
														style: { background: statusColor(status) },
														"aria-hidden": true
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-[11px] uppercase tracking-[0.14em]",
														style: { color: DIM },
														children: s.n
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[14px]",
														style: { color: INK },
														children: s.label
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative h-[6px] w-full overflow-hidden",
												style: { background: "oklch(0.22 0.012 250)" },
												role: "progressbar",
												"aria-valuenow": pct,
												"aria-valuemin": 0,
												"aria-valuemax": 100,
												"aria-label": `${s.label} progress`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute inset-y-0 left-0 transition-[width] duration-100",
													style: {
														width: `${pct}%`,
														background: statusColor(status),
														opacity: status === "stale" ? .25 : 1
													}
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-3 justify-self-end",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] uppercase tracking-[0.14em] tabular-nums",
													style: { color: DIM },
													children: statusLabel(status, pct)
												})
											})
										]
									}, s.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 border-t pt-4",
								style: { borderColor: LINE },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-2 font-mono text-[10px] uppercase tracking-[0.14em]",
									style: { color: DIM },
									children: "Job log · streaming"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "max-h-40 overflow-y-auto font-mono text-[12px] leading-relaxed",
									"aria-live": "polite",
									children: log.slice(-8).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums",
											style: { color: DIM },
											children: l.t
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: l.kind === "ok" ? INK : l.kind === "warn" ? ACC : DIM },
											children: l.msg
										})]
									}, i))
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
						children: "Fig. 02b \xA0·\xA0 Simulated job runner with failure injection. Progress, errors, and log are client-side only."
					})]
				})]
			})
		})
	});
}
function statusColor(s) {
	switch (s) {
		case "done": return "oklch(0.72 0.10 155)";
		case "running": return ACC;
		case "paused": return "oklch(0.70 0.02 245)";
		case "stale": return ACC;
		case "failed": return "oklch(0.68 0.16 30)";
		default: return "oklch(0.38 0.014 250)";
	}
}
function statusLabel(s, pct) {
	switch (s) {
		case "done": return "done";
		case "running": return `${pct}%`;
		case "paused": return `paused · ${pct}%`;
		case "stale": return "stale · requeued";
		case "failed": return `failed · ${pct}%`;
		default: return "queued";
	}
}
function ProductPlate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-reveal": true,
		className: "reveal border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-14 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-fade-up",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkstationMock, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
					children: "Fig. 01 \xA0·\xA0 Stylized rendering of the project view, not a screenshot. Layout mirrors the shipping app: run column, script editor, per-speaker panel."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "overflow-hidden border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/screenshots/app-shell-early-build.png",
						alt: "Trackdub desktop app shell, early build — pipeline stage list with separation, cleanup, transcribe, and identify stages, stem separation and speaker diarization toggles, voice selector",
						className: "w-full",
						loading: "lazy",
						width: 2766,
						height: 1118
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
					children: "Fig. 01b \xA0·\xA0 Actual desktop shell, early build. Pre-release UI — chrome and copy are still moving."
				})]
			})]
		})
	});
}
function WorkstationMock() {
	const bg = "oklch(0.16 0.010 250)";
	const panel = "oklch(0.20 0.012 250)";
	const inkText = "oklch(0.92 0.005 240)";
	const dim = "oklch(0.62 0.02 245)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-hidden border border-border shadow-panel",
		style: {
			backgroundColor: bg,
			color: inkText
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b px-4 py-2 font-mono text-[11px]",
			style: {
				borderColor: "oklch(0.28 0.014 250)",
				backgroundColor: panel,
				color: dim
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-2 w-2 rounded-full",
							style: { background: "oklch(0.55 0.02 250)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-2 w-2 rounded-full",
							style: { background: "oklch(0.55 0.02 250)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-2 w-2 rounded-full",
							style: { background: "oklch(0.55 0.02 250)" }
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "trackdub — interview_final_cut.mp4" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DE → EN · project #1147" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-3 border-r p-4",
					style: { borderColor: "oklch(0.28 0.014 250)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 font-mono text-[10px] uppercase tracking-[0.14em]",
							style: { color: dim },
							children: "Run"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-1.5",
							children: [
								[
									"01",
									"Ingest",
									"done"
								],
								[
									"02",
									"Transcribe",
									"done"
								],
								[
									"03",
									"Translate",
									"done"
								],
								[
									"04",
									"Diarize",
									"active"
								],
								[
									"05",
									"Voice",
									"queued"
								],
								[
									"06",
									"Mix",
									"queued"
								]
							].map(([n, name, s]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 py-1 font-mono text-[12px]",
								style: { color: s === "queued" ? dim : inkText },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color: dim },
										children: n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1",
										children: name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color: s === "done" ? "oklch(0.75 0.13 155)" : s === "active" ? "oklch(0.68 0.15 258)" : dim },
										children: s === "done" ? "✓" : s === "active" ? "●" : "·"
									})
								]
							}, n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 font-mono text-[10px] uppercase tracking-[0.14em]",
							style: { color: dim },
							children: "Provider"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-mono text-[12px]",
							children: "DirectML · RTX 4070"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 font-mono text-[10px] uppercase tracking-[0.14em]",
							style: { color: dim },
							children: "Manifest"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-mono text-[12px]",
							children: "bundled · commercial"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-6 border-r p-5",
					style: { borderColor: "oklch(0.28 0.014 250)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-[0.14em]",
								style: { color: dim },
								children: "Script · line 42"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px]",
								style: { color: dim },
								children: "S1 Anna · 00:42.180"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								{
									t: "00:38",
									s: "S1",
									de: "Wir haben die Pipeline neu gebaut,",
									en: "We rebuilt the pipeline,",
									a: false
								},
								{
									t: "00:42",
									s: "S1",
									de: "damit jede Stufe editierbar bleibt.",
									en: "so every stage stays editable.",
									a: true
								},
								{
									t: "00:46",
									s: "S2",
									de: "Und wenn etwas nicht stimmt —",
									en: "And if something is off —",
									a: false
								},
								{
									t: "00:49",
									s: "S2",
									de: "regenerierst du nur diese eine Zeile.",
									en: "you regenerate just that one line.",
									a: false
								}
							].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[52px_28px_1fr] gap-3 py-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px]",
										style: { color: dim },
										children: r.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px]",
										style: { color: r.s === "S1" ? "oklch(0.68 0.15 258)" : "oklch(0.70 0.12 190)" },
										children: r.s
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[12px]",
										style: { color: dim },
										children: r.de
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-serif text-[16px] leading-snug",
										style: {
											color: r.a ? "oklch(0.97 0.005 240)" : inkText,
											textDecoration: r.a ? "underline" : "none",
											textDecorationColor: "oklch(0.68 0.15 258)",
											textUnderlineOffset: 4
										},
										children: r.en
									})] })
								]
							}, r.t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em]",
								style: { color: dim },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Waveform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "−14.1 LUFS" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 600 60",
								className: "h-14 w-full",
								preserveAspectRatio: "none",
								children: Array.from({ length: 120 }).map((_, i) => {
									const seed = Math.sin(i * 1.37) * Math.cos(i * .51);
									const h = 8 + Math.abs(seed) * 42;
									const isActive = i > 44 && i < 78;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: i * 5,
										y: 30 - h / 2,
										width: 2.2,
										height: h,
										fill: isActive ? "oklch(0.72 0.15 258)" : "oklch(0.55 0.03 240)"
									}, i);
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 font-mono text-[10px] uppercase tracking-[0.14em]",
							style: { color: dim },
							children: "Speakers"
						}),
						[{
							n: "Anna",
							lang: "de-DE → en-US",
							ref: "3.4s ref",
							color: "oklch(0.68 0.15 258)"
						}, {
							n: "Mateo",
							lang: "de-DE → en-US",
							ref: "5.1s ref",
							color: "oklch(0.70 0.12 190)"
						}].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 border-t pt-3 font-mono text-[11px]",
							style: { borderColor: "oklch(0.28 0.014 250)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2 w-2 rounded-full",
										style: { background: s.color }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color: inkText },
										children: s.n
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1",
									style: { color: dim },
									children: s.lang
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: { color: dim },
									children: s.ref
								})
							]
						}, s.n)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 font-mono text-[10px] uppercase tracking-[0.14em]",
							style: { color: dim },
							children: "Job"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-mono text-[12px]",
							children: "Resumable · 62%"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-[3px] w-full",
							style: { background: "oklch(0.28 0.014 250)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full",
								style: {
									width: "62%",
									background: "oklch(0.72 0.15 258)"
								}
							})
						})
					]
				})
			]
		})]
	});
}
function TrustStrip() {
	const items = [
		"Local by default",
		"Deterministic runs",
		"Cross-platform",
		"Open manifest",
		"No account required"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-reveal": true,
		className: "reveal border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
			children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t }), i < items.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-hairline",
					children: "·"
				})]
			}, t))
		})
	});
}
var STAGES = [
	{
		n: "01",
		name: "Ingest",
		one: "Probe media. Detect scenes, silence, and speech.",
		body: "Point Trackdub at a file or folder. It reads the container, extracts audio, detects shot boundaries, and runs voice activity — building the frame every later stage will work against.",
		detail: [
			"ffprobe media",
			"shot / silence detection",
			"loudness reference (LUFS)"
		]
	},
	{
		n: "02",
		name: "Transcribe",
		one: "Time-accurate source transcript with speaker turns.",
		body: "Source-language ASR with word-level timestamps. The transcript is a real editable document, not an opaque intermediate — fix a word here and every downstream stage picks it up.",
		detail: [
			"word timestamps",
			"editable transcript",
			"diarization-ready turns"
		]
	},
	{
		n: "03",
		name: "Translate",
		one: "Human-editable target script, tied to timecode.",
		body: "Translation happens per line, not per file. Idioms, names, and jargon go in a project glossary; the target script preserves the source's timing so later stages can align to it.",
		detail: [
			"per-line MT",
			"project glossary",
			"timecode preserved"
		]
	},
	{
		n: "04",
		name: "Diarize",
		one: "Assign speakers. Attach a voice reference to each one.",
		body: "Trackdub clusters voices, then lets you name them, merge them, or split them. Each speaker gets a short reference clip that the voicing stage will match — one clone per person, not one voice for the whole video.",
		detail: [
			"speaker clustering",
			"manual merge / split",
			"voice reference per speaker"
		]
	},
	{
		n: "05",
		name: "Voice",
		one: "Zero-shot TTS. Regenerate any single line.",
		body: "Per-speaker voice cloning generates each line at its target duration. Prosody is editable — pace, emphasis, pause — and any line can be regenerated on its own without redoing the rest.",
		detail: [
			"per-speaker cloning",
			"per-line prosody",
			"regen line 42 in isolation"
		]
	},
	{
		n: "06",
		name: "Mix",
		one: "Align, duck under music, mux the final file.",
		body: "Dubbed lines snap to the original beats. Music and SFX from the source are preserved and ducked under dialogue. Export a muxed video, stems, or captions — deterministic given the same project manifest.",
		detail: [
			"timeline alignment",
			"music / SFX ducking",
			"video + stems + captions"
		]
	}
];
function PipelineFeature() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pipeline",
		"data-reveal": true,
		className: "reveal border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
							n: "01",
							label: "The pipeline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
							children: "Six stages. Each one editable, each one rerunnable."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-[17px] leading-relaxed text-muted-foreground",
							children: "A dubbed video is not a single button. It's a chain of decisions — what someone said, what it should say in the target language, whose voice says it, and how it sits in the mix. Trackdub exposes that chain, so you can inspect any link and change it in place."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-[17px] leading-relaxed text-muted-foreground",
							children: "Every stage declares what it needs from the previous one. If you edit the transcript, the translation knows to invalidate. If you change a speaker's voice reference, only their lines regenerate. Nothing rebuilds that doesn't have to."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "lg:col-span-7",
					children: STAGES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#stage-${s.n}`,
						className: "group grid grid-cols-[64px_1fr_auto] items-baseline gap-4 py-6 transition-colors hover:bg-surface/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[13px] text-accent",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-2xl text-foreground",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-mono text-[12px] text-muted-foreground",
								children: s.one
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground group-hover:text-accent",
								children: "Read →"
							})
						]
					})] }, s.n))
				})]
			})
		})
	});
}
var INITIAL_SPEAKERS = [
	{
		id: "s1",
		name: "Anna",
		color: "oklch(0.68 0.15 258)",
		turns: 24
	},
	{
		id: "s2",
		name: "Mateo",
		color: "oklch(0.70 0.12 190)",
		turns: 18
	},
	{
		id: "s3",
		name: "Speaker 3",
		color: "oklch(0.55 0.03 240)",
		turns: 2
	}
];
var INITIAL_LINES = [
	{
		id: 41,
		t: "00:38.120",
		speakerId: "s1",
		source: "Wir haben die Pipeline neu gebaut,",
		target: "We rebuilt the pipeline",
		pace: 1,
		pause: 200,
		duration: 2.86
	},
	{
		id: 42,
		t: "00:42.180",
		speakerId: "s1",
		source: "damit jede Stufe editierbar bleibt.",
		target: "so every stage stays editable.",
		pace: 1,
		pause: 200,
		duration: 3.14
	},
	{
		id: 43,
		t: "00:46.900",
		speakerId: "s2",
		source: "Und wenn etwas nicht stimmt —",
		target: "And if something's off —",
		pace: 1,
		pause: 220,
		duration: 2.1
	},
	{
		id: 44,
		t: "00:49.640",
		speakerId: "s2",
		source: "änderst du nur die eine Zeile.",
		target: "you only change that one line.",
		pace: 1,
		pause: 240,
		duration: 2.55
	}
];
var STAGE_TABS = [
	{
		id: "ingest",
		n: "01",
		label: "Ingest"
	},
	{
		id: "transcribe",
		n: "02",
		label: "Transcribe"
	},
	{
		id: "translate",
		n: "03",
		label: "Translate"
	},
	{
		id: "diarize",
		n: "04",
		label: "Diarize"
	},
	{
		id: "voice",
		n: "05",
		label: "Voice"
	}
];
var DIM = "oklch(0.62 0.02 245)";
var INK = "oklch(0.94 0.005 240)";
var LINE = "oklch(0.28 0.014 250)";
var ACC = "oklch(0.72 0.15 258)";
var PANEL = "oklch(0.16 0.010 250)";
var PANEL_HI = "oklch(0.20 0.012 250)";
function Walkthrough() {
	const [stage, setStage] = (0, import_react.useState)("transcribe");
	const [speakers, setSpeakers] = (0, import_react.useState)(INITIAL_SPEAKERS);
	const [lines, setLines] = (0, import_react.useState)(INITIAL_LINES);
	const [stale, setStale] = (0, import_react.useState)({});
	const [regenId, setRegenId] = (0, import_react.useState)(null);
	const markStale = (lineId, downstream) => {
		setStale((prev) => {
			const cur = { ...prev[lineId] ?? {} };
			downstream.forEach((s) => cur[s] = true);
			return {
				...prev,
				[lineId]: cur
			};
		});
	};
	const clearStale = (lineId, s) => {
		setStale((prev) => {
			const cur = { ...prev[lineId] ?? {} };
			delete cur[s];
			return {
				...prev,
				[lineId]: cur
			};
		});
	};
	const editSource = (id, source) => {
		setLines((ls) => ls.map((l) => l.id === id ? {
			...l,
			source
		} : l));
		markStale(id, ["translate", "voice"]);
	};
	const editTarget = (id, target) => {
		setLines((ls) => ls.map((l) => l.id === id ? {
			...l,
			target
		} : l));
		markStale(id, ["voice"]);
		clearStale(id, "translate");
	};
	const reassignSpeaker = (id, speakerId) => {
		setLines((ls) => ls.map((l) => l.id === id ? {
			...l,
			speakerId
		} : l));
		markStale(id, ["voice"]);
	};
	const renameSpeaker = (sid, name) => {
		setSpeakers((ss) => ss.map((s) => s.id === sid ? {
			...s,
			name
		} : s));
	};
	const regenerate = (id) => {
		setRegenId(id);
		window.setTimeout(() => {
			setLines((ls) => ls.map((l) => l.id === id ? {
				...l,
				pace: Math.round((.9 + Math.random() * .12) * 100) / 100
			} : l));
			clearStale(id, "voice");
			setRegenId(null);
		}, 900);
	};
	const staleCount = (s) => Object.values(stale).reduce((n, m) => n + (m?.[s] ? 1 : 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "walkthrough",
		"data-reveal": true,
		className: "reveal border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
							n: "02",
							label: "Try the pipeline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
							children: "Edit a line. Watch what invalidates."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[17px] leading-relaxed text-muted-foreground",
							children: "A sample project, running in your browser. Change the transcript, retarget a translation, rename a speaker, or regenerate a single voice line. Downstream stages mark themselves stale — nothing else is touched."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-2 font-mono text-[12px] text-muted-foreground",
							children: STAGE_TABS.map((s) => {
								const c = staleCount(s.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between border-b border-hairline py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: s.n
										}),
										" \xA0 ",
										s.label
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: c > 0 ? "text-accent" : "text-muted-foreground/60",
										children: c > 0 ? `${c} stale` : "clean"
									})]
								}, s.id);
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border shadow-panel",
						style: { background: PANEL },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "tablist",
							"aria-label": "Pipeline stage",
							className: "flex flex-wrap border-b",
							style: { borderColor: LINE },
							children: STAGE_TABS.map((s) => {
								const active = stage === s.id;
								const c = staleCount(s.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									role: "tab",
									"aria-selected": active,
									onClick: () => setStage(s.id),
									className: "relative flex items-baseline gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
									style: {
										color: active ? INK : DIM,
										background: active ? PANEL_HI : "transparent",
										borderRight: `1px solid ${LINE}`
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: ACC },
											children: s.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.label }),
										c > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-label": `${c} stale`,
											className: "ml-1 inline-block h-1.5 w-1.5 rounded-full",
											style: { background: ACC }
										})
									]
								}, s.id);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-h-[380px] p-5",
							children: [
								stage === "ingest" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IngestPane, {}),
								stage === "transcribe" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TranscribePane, {
									lines,
									speakers,
									stale,
									onEdit: editSource
								}),
								stage === "translate" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TranslatePane, {
									lines,
									stale,
									onEdit: editTarget
								}),
								stage === "diarize" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiarizePane, {
									lines,
									speakers,
									onRename: renameSpeaker,
									onReassign: reassignSpeaker
								}),
								stage === "voice" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoicePane, {
									lines,
									speakers,
									stale,
									regenId,
									onRegen: regenerate
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
						children: "Fig. 02 \xA0·\xA0 Interactive sample \xA0·\xA0 state lives in your browser"
					})]
				})]
			})
		})
	});
}
function PaneHeader({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-4 font-mono text-[10px] uppercase tracking-[0.14em]",
		style: { color: DIM },
		children
	});
}
function StaleTag({ label = "stale" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "ml-2 inline-block px-1.5 py-0.5 align-middle font-mono text-[9px] uppercase tracking-[0.14em]",
		style: {
			color: ACC,
			border: `1px solid ${ACC}`
		},
		children: label
	});
}
function IngestPane() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-mono text-[12px]",
		style: { color: DIM },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, { children: "Media probe · interview_de.mp4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
					["container", "mp4 / h264 / aac"],
					["duration", "00:03:18.240"],
					["fps", "23.976"],
					["audio", "stereo · 48 kHz"],
					["scenes", "42 detected"],
					["speech", "84% (VAD)"],
					["loudness", "−14.1 LUFS"]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "border-b py-1.5 pr-6",
					style: { borderColor: LINE },
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "border-b py-1.5 text-right",
					style: {
						borderColor: LINE,
						color: INK
					},
					children: v
				})] }, k)) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-[11px]",
				children: "Nothing to edit here — but every later stage inherits this frame. Change the media, and the whole project reprobes."
			})
		]
	});
}
function EditableSpan({ value, onCommit, ariaLabel, serif = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		role: "textbox",
		"aria-label": ariaLabel,
		contentEditable: true,
		suppressContentEditableWarning: true,
		spellCheck: false,
		onBlur: (e) => {
			const v = e.currentTarget.textContent ?? "";
			if (v !== value) onCommit(v);
		},
		onKeyDown: (e) => {
			if (e.key === "Enter") {
				e.preventDefault();
				e.currentTarget.blur();
			}
		},
		className: `rounded-sm px-1 outline-none focus:ring-1 ${serif ? "font-serif text-[15px]" : ""}`,
		style: {
			background: PANEL_HI,
			boxShadow: `inset 0 -1px 0 ${LINE}`
		},
		children: value
	});
}
function TranscribePane({ lines, speakers, stale, onEdit }) {
	const spk = (id) => speakers.find((s) => s.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { color: INK },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, { children: "Source transcript · de-DE · click a line to edit" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1",
				children: lines.map((l) => {
					const s = spk(l.speakerId);
					const isStale = !!(stale[l.id]?.translate || stale[l.id]?.voice);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[80px_110px_1fr] items-center gap-3 py-1.5 text-[13px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px]",
								style: { color: DIM },
								children: l.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 font-mono text-[11px]",
								style: { color: DIM },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-2 w-2 rounded-full",
									style: { background: s?.color }
								}), s?.name]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableSpan, {
								value: l.source,
								onCommit: (v) => onEdit(l.id, v),
								ariaLabel: `Edit source line ${l.id}`
							}), isStale && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaleTag, { label: "downstream" })] })
						]
					}, l.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-[11px]",
				style: { color: DIM },
				children: "Tip: change a word, then switch to Translate — that line will be marked stale, the rest stay."
			})
		]
	});
}
function TranslatePane({ lines, stale, onEdit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { color: INK },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, { children: "Source · de-DE \xA0→\xA0 Target · en-US" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[80px_1fr_1fr] gap-3 border-b pb-2 font-mono text-[10px] uppercase tracking-[0.14em]",
				style: {
					borderColor: LINE,
					color: DIM
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "time" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "source" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "target" })
				]
			}),
			lines.map((l) => {
				const staleT = !!stale[l.id]?.translate;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[80px_1fr_1fr] items-start gap-3 border-b py-2 text-[13px]",
					style: { borderColor: LINE },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px]",
							style: { color: DIM },
							children: l.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: { color: DIM },
							children: [l.source, staleT && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaleTag, { label: "source changed" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableSpan, {
							value: l.target,
							onCommit: (v) => onEdit(l.id, v),
							ariaLabel: `Edit target line ${l.id}`,
							serif: true
						}) })
					]
				}, l.id);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 font-mono text-[10px] uppercase tracking-[0.14em]",
				style: { color: DIM },
				children: "Glossary · 12 terms locked"
			})
		]
	});
}
function DiarizePane({ lines, speakers, onRename, onReassign }) {
	const count = (sid) => lines.filter((l) => l.speakerId === sid).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { color: INK },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, { children: "Speakers · rename inline" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 space-y-2",
				children: speakers.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-between border-b py-2",
					style: { borderColor: LINE },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-6 w-6 rounded-full",
								style: { background: s.color }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableSpan, {
								value: s.name,
								onCommit: (v) => onRename(s.id, v || s.name),
								ariaLabel: `Rename ${s.name}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[10px]",
								style: { color: DIM },
								children: [count(s.id), " lines in sample · 4.2s reference"]
							})
						]
					})
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, { children: "Reassign a line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1 text-[13px]",
				children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[80px_1fr_160px] items-center gap-3 py-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px]",
							style: { color: DIM },
							children: l.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: DIM },
							className: "truncate",
							children: l.source
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: l.speakerId,
							onChange: (e) => onReassign(l.id, e.target.value),
							"aria-label": `Reassign line ${l.id} speaker`,
							className: "font-mono text-[11px] outline-none focus:ring-1",
							style: {
								background: PANEL_HI,
								color: INK,
								border: `1px solid ${LINE}`,
								padding: "4px 6px"
							},
							children: speakers.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.id,
								children: s.name
							}, s.id))
						})
					]
				}, l.id))
			})
		]
	});
}
function VoicePane({ lines, speakers, stale, regenId, onRegen }) {
	const spk = (id) => speakers.find((s) => s.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { color: INK },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, { children: "Voice lines · regenerate one without touching the rest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: lines.map((l) => {
				const s = spk(l.speakerId);
				const isStale = !!stale[l.id]?.voice;
				const busy = regenId === l.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border p-3",
					style: { borderColor: LINE },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em]",
							style: { color: DIM },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Line ",
								l.id,
								" · ",
								l.t,
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: s?.color },
									children: s?.name
								}),
								isStale && !busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaleTag, { label: "needs regen" }),
								busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaleTag, { label: "regenerating…" })
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [l.duration.toFixed(2), "s"] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 font-serif text-[16px] leading-snug",
							children: [
								"\"",
								l.target,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid grid-cols-[1fr_auto_auto_auto] items-center gap-3 font-mono text-[11px]",
							style: { color: DIM },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FakeWaveform, {
									seed: l.id + Math.round(l.pace * 100),
									color: s?.color ?? ACC,
									busy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"pace ",
									l.pace.toFixed(2),
									"×"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"pause ",
									l.pause,
									"ms"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onRegen(l.id),
									disabled: busy,
									className: "px-2 py-1 uppercase tracking-[0.14em] transition-colors disabled:opacity-50",
									style: {
										color: isStale ? ACC : INK,
										border: `1px solid ${isStale ? ACC : LINE}`,
										background: PANEL_HI
									},
									children: busy ? "…" : "Regen line"
								})
							]
						})
					]
				}, l.id);
			})
		})]
	});
}
function FakeWaveform({ seed, color, busy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-6 items-center gap-[2px]",
		"aria-hidden": true,
		children: Array.from({ length: 48 }, (_, i) => {
			const x = Math.sin(seed * 3.1 + i * .7) * .5 + .5;
			const y = Math.cos(seed * 1.7 + i * .31) * .35 + .55;
			return Math.max(.15, Math.min(1, (x + y) / 1.4));
		}).map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
			display: "inline-block",
			width: 2,
			height: `${h * 100}%`,
			background: color,
			opacity: busy ? .3 : .75,
			transition: "opacity 200ms"
		} }, i))
	});
}
function StageChapters() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-reveal": true,
		className: "reveal border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "03",
					label: "Each stage, in detail"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "Each pipeline stage, in detail."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 space-y-16",
					children: STAGES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: `stage-${s.n}`,
						className: "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "lg:col-span-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-[11px] uppercase tracking-[0.14em] text-accent",
									children: [
										s.n,
										" \xA0/\xA0 ",
										s.name
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-serif text-3xl leading-[1.1] tracking-tight text-foreground sm:text-4xl",
									children: s.one
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-[16px] leading-relaxed text-muted-foreground",
									children: s.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-2 font-mono text-[12px] text-muted-foreground",
									children: s.detail.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "—"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d })]
									}, d))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageInset, {
								stage: s.name,
								index: i
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
								children: [
									"Fig. 0",
									i + 2,
									" \xA0·\xA0 ",
									s.name,
									" view"
								]
							})]
						})]
					}, s.n))
				})
			]
		})
	});
}
function StageInset({ stage, index }) {
	const bg = "oklch(0.16 0.010 250)";
	const border = "oklch(0.28 0.014 250)";
	const dim = "oklch(0.62 0.02 245)";
	const ink = "oklch(0.94 0.005 240)";
	const content = () => {
		switch (stage) {
			case "Ingest": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 font-mono text-[12px]",
				style: { color: dim },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 uppercase tracking-[0.14em] text-[10px]",
					children: "Media probe"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
						["container", "mp4 / h264 / aac"],
						["duration", "00:03:18.240"],
						["fps", "23.976"],
						["audio", "stereo · 48 kHz"],
						["scenes", "42 detected"],
						["speech", "84% (VAD)"],
						["loudness", "−14.1 LUFS"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "border-b py-1.5 pr-6",
						style: { borderColor: border },
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "border-b py-1.5 text-right",
						style: {
							borderColor: border,
							color: ink
						},
						children: v
					})] }, k)) })
				})]
			});
			case "Transcribe": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 text-[12px]",
				style: { color: ink },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 font-mono uppercase tracking-[0.14em] text-[10px]",
					style: { color: dim },
					children: "Source transcript · de-DE"
				}), [
					[
						"00:38.120",
						"Wir haben die",
						"Pipeline",
						" neu gebaut,"
					],
					[
						"00:42.180",
						"damit jede Stufe",
						"editierbar",
						" bleibt."
					],
					[
						"00:46.900",
						"Und wenn etwas nicht",
						"stimmt",
						" —"
					]
				].map(([t, a, hi, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						style: { color: dim },
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						a,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								background: "oklch(0.68 0.14 50 / 0.25)",
								padding: "0 2px"
							},
							children: hi
						}),
						b
					] })]
				}, t))]
			});
			case "Translate": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 text-[12px]",
				style: { color: ink },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 grid grid-cols-2 gap-6 font-mono uppercase tracking-[0.14em] text-[10px]",
						style: { color: dim },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Source · de-DE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Target · en-US" })]
					}),
					[
						["Wir haben die Pipeline neu gebaut,", "We rebuilt the pipeline"],
						["damit jede Stufe editierbar bleibt.", "so every stage stays editable."],
						["Und wenn etwas nicht stimmt —", "And if something's off —"]
					].map(([a, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-6 border-b py-2",
						style: { borderColor: border },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: dim },
							children: a
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-[15px]",
							children: b
						})]
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 font-mono text-[10px] uppercase tracking-[0.14em]",
						style: { color: dim },
						children: "Glossary · 12 terms locked"
					})
				]
			});
			case "Diarize": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 text-[12px]",
				style: { color: ink },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 font-mono uppercase tracking-[0.14em] text-[10px]",
					style: { color: dim },
					children: "Speakers detected"
				}), [
					{
						n: "Anna",
						turns: 24,
						c: "oklch(0.68 0.15 258)"
					},
					{
						n: "Mateo",
						turns: 18,
						c: "oklch(0.70 0.12 190)"
					},
					{
						n: "Speaker 3",
						turns: 2,
						c: "oklch(0.55 0.03 240)"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b py-3",
					style: { borderColor: border },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-8 w-8 rounded-full",
							style: { background: s.c }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: s.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-[10px]",
							style: { color: dim },
							children: [s.turns, " turns · 4.2s reference"]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.14em]",
						style: { color: dim },
						children: "Rename · Merge"
					})]
				}, s.n))]
			});
			case "Voice": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 text-[12px]",
				style: { color: ink },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between font-mono uppercase tracking-[0.14em] text-[10px]",
						style: { color: dim },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Line 42 · Anna" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "duration 3.14s / target 3.20s" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-serif text-[17px] leading-snug",
						children: [
							"\"so every stage stays ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { borderBottom: "2px solid oklch(0.68 0.15 258)" },
								children: "editable"
							}),
							".\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-3 gap-3 font-mono text-[11px]",
						children: [
							["Pace", "0.98×"],
							["Emphasis", "editable"],
							["Pause after", "220 ms"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border p-2",
							style: { borderColor: border },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "uppercase tracking-[0.14em] text-[9px]",
								style: { color: dim },
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1",
								children: v
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 font-mono text-[10px] uppercase tracking-[0.14em]",
						style: { color: dim },
						children: "[ Regenerate line ] \xA0 [ Regenerate speaker ]"
					})
				]
			});
			case "Mix": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 text-[12px]",
				style: { color: ink },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 font-mono uppercase tracking-[0.14em] text-[10px]",
						style: { color: dim },
						children: "Timeline"
					}),
					[
						[
							"Dialogue EN",
							"oklch(0.68 0.15 258)",
							[
								10,
								22,
								34,
								55,
								70,
								82
							]
						],
						[
							"Music",
							"oklch(0.55 0.06 220)",
							[5, 95]
						],
						[
							"SFX",
							"oklch(0.55 0.03 240)",
							[40, 62]
						]
					].map(([label, color, pts]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 font-mono text-[10px] uppercase tracking-[0.14em]",
							style: { color: dim },
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-5 w-full",
							style: { background: "oklch(0.20 0.012 250)" },
							children: pts.reduce((acc, p, i, arr) => {
								if (i % 2 === 1) return acc;
								const next = arr[i + 1] ?? p + 8;
								acc.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-0 h-full",
									style: {
										left: `${p}%`,
										width: `${next - p}%`,
										background: color,
										opacity: .85
									}
								}, i));
								return acc;
							}, [])
						})]
					}, label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-3 gap-3 font-mono text-[11px]",
						children: [
							["Loudness", "−16 LUFS"],
							["Duck", "−9 dB"],
							["Export", "mp4 + stems"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border p-2",
							style: { borderColor: border },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "uppercase tracking-[0.14em] text-[9px]",
								style: { color: dim },
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1",
								children: v
							})]
						}, k))
					})
				]
			});
			default: return null;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border shadow-panel",
		style: { background: bg },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em]",
			style: {
				borderColor: border,
				color: dim,
				background: "oklch(0.20 0.012 250)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Trackdub · ", stage.toLowerCase()] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [String(index + 1).padStart(2, "0"), " of 06"] })]
		}), content()]
	});
}
function Control() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "control",
		"data-reveal": true,
		className: "reveal border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
				n: "03",
				label: "You can fix anything, and only that thing"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
						children: [
							"The transcript said ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "\"Pipeline\"" }),
							". You wanted ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "\"pipe line\"" }),
							"."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-[17px] leading-relaxed text-muted-foreground",
						children: "Change it. The translation invalidates. The affected voice line queues for a regen. Every other line stays exactly as it was — same take, same timing, same mix. That's the whole idea."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlPlate, {
						tag: "Before edit",
						t: "00:42.180",
						text: "so every stage stays editable.",
						hint: "Auto-generated · pace 1.00× · pause 200 ms"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlPlate, {
						tag: "After you tweaked prosody",
						t: "00:42.180",
						text: "so every stage stays editable.",
						hint: "Regen · pace 0.94× · pause 320 ms · this line only",
						accent: true
					})]
				})]
			})]
		})
	});
}
function ControlPlate({ tag, t, text, hint, accent = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "border border-border bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: accent ? "text-accent" : "",
					children: tag
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 font-serif text-2xl leading-snug text-foreground",
				style: {
					textDecoration: accent ? "underline" : "none",
					textDecorationColor: "var(--accent)",
					textUnderlineOffset: 6
				},
				children: [
					"\"",
					text,
					"\""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-4 font-mono text-[11px] text-muted-foreground",
				children: hint
			})
		]
	});
}
function Performance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "performance",
		"data-reveal": true,
		className: "reveal border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
							n: "04",
							label: "Performance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
							children: "Runs on the hardware you already have."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[17px] leading-relaxed text-muted-foreground",
							children: "Trackdub ships execution providers for CPU, DirectML, CUDA, CoreML, TensorRT RTX, and Windows ML. Pick a policy or let it choose per stage. Relative ordering below; full measured benchmarks publish via DubBench ahead of v1 launch."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full border-collapse text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "border-b border-border py-3 pr-4 font-normal",
									children: "Provider"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "border-b border-border py-3 pr-4 font-normal",
									children: "Platform"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "border-b border-border py-3 pr-4 font-normal",
									children: "Relative speed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "border-b border-border py-3 text-right font-normal",
									children: "Availability"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "font-mono text-[13px]",
							children: [
								[
									"TensorRT RTX",
									"Windows · RTX 30/40/50",
									"Fastest tier",
									"Auto-selected when supported"
								],
								[
									"CUDA",
									"Windows / Linux · NVIDIA",
									"Fast",
									"Non-RTX NVIDIA cards"
								],
								[
									"CoreML",
									"macOS · Apple Silicon",
									"Fast",
									"Neural Engine + GPU"
								],
								[
									"DirectML",
									"Windows · any DX12 GPU",
									"2–4× realtime, model-dependent",
									"Broadest Windows GPU coverage"
								],
								[
									"CPU (ONNX Runtime)",
									"All platforms",
									"0.8–1.5× realtime",
									"Always available"
								]
							].map(([p, plat, spd, av]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-background/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "border-b border-border py-4 pr-4 text-foreground",
										children: p
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "border-b border-border py-4 pr-4 text-muted-foreground",
										children: plat
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "border-b border-border py-4 pr-4 text-right text-foreground",
										children: spd
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "border-b border-border py-4 text-right text-muted-foreground",
										children: av
									})
								]
							}, p))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
						children: "Tbl. 01 \xA0·\xA0 Provider fallback order, fastest to slowest. Not measured throughput."
					})]
				})]
			})
		})
	});
}
function WhatYouGet() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-reveal": true,
		className: "reveal border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "05",
					label: "What you get"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "A workstation, not a wrapper around a model."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					role: "list",
					className: "mt-14 grid gap-y-8 gap-x-12 md:grid-cols-2",
					children: [
						["Local by default", "Media, transcripts, voice references, and generated audio stay on your disk. Cloud is opt-in per project, per stage."],
						["Deterministic runs", "Same project manifest + same models = same output. Every stage records what it consumed."],
						["Resumable jobs", "Kill the app mid-run. Reopen the project. Continue from the last completed stage."],
						["Per-line regen", "Regenerate one voice line, one speaker, or one stage. Never a full-project redo for a small fix."],
						["Editable script", "Transcript and translation are real documents with a glossary, not opaque intermediates."],
						["Voice cloning per speaker", "One short reference per speaker. No shared 'AI voice' for the whole video."],
						["Source separation", "Vocal and instrumental stems are split out, kept, and ducked under dialogue automatically. Or manually, if you prefer."],
						["Lip sync", "Optional viseme-matched lip sync for on-camera speakers. Off by default, gated by license lane."],
						["Open model manifest", "Every bundled model, its license lane, and its checksum is declared in one JSON file."],
						["CLI and SDK", "The same pipeline the app runs is scriptable — for batch, CI, or on-prem automation."],
						["Cross-platform", "Windows, macOS, Linux. Same project format. Same output."],
						["Open-core engine", "Domain, application, inference, SDK, and CLI ship Apache 2.0. The desktop app and licensing layer are source-visible."]
					].map(([term, def]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "listitem",
						className: "card-lift group border-t border-border px-1 pt-5 focus-within:bg-surface/40 hover:bg-surface/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-serif text-[22px] text-foreground",
							children: term
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-[15px] leading-relaxed text-muted-foreground",
							children: def
						})]
					}, term))
				})
			]
		})
	});
}
function ComparedTo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-reveal": true,
		className: "reveal border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "06",
					label: "Compared to"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "Trackdub, next to how dubbing usually gets done."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[760px] border-collapse text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "border-b border-border py-4 pr-4 font-normal" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "border-b border-border py-4 pr-4 font-normal text-foreground",
									children: "Trackdub"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "border-b border-border py-4 pr-4 font-normal",
									children: "Descript"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "border-b border-border py-4 pr-4 font-normal",
									children: "ElevenLabs Dubbing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "border-b border-border py-4 font-normal",
									children: "DIY (Whisper + TTS + DAW)"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "font-mono text-[13px]",
							children: [
								[
									"Runs locally",
									"Yes",
									"No",
									"No",
									"Yes"
								],
								[
									"Editable transcript",
									"Yes",
									"Yes",
									"Yes, in Dubbing Studio",
									"Yes"
								],
								[
									"Per-line / per-clip regen",
									"Yes",
									"Composition-level",
									"Yes, in Dubbing Studio",
									"Manual"
								],
								[
									"Speaker-aware voicing",
									"Yes",
									"Yes, manual speaker→voice map",
									"Yes, clip or track voice clone",
									"Manual"
								],
								[
									"Deterministic runs",
									"Yes",
									"Not published",
									"Not published",
									"No"
								],
								[
									"Resumable jobs",
									"Yes",
									"Not published",
									"Not published",
									"No"
								],
								[
									"Programmatic access",
									"CLI + SDK",
									"Not published",
									"API, enterprise waitlist",
									"N/A"
								],
								[
									"No account required",
									"Yes",
									"No",
									"No",
									"N/A"
								]
							].map(([label, a, b, c, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "border-b border-border py-4 pr-4 font-serif text-[16px] font-normal text-foreground",
									children: label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "border-b border-border py-4 pr-4 text-foreground",
									children: a
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "border-b border-border py-4 pr-4 text-muted-foreground",
									children: b
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "border-b border-border py-4 pr-4 text-muted-foreground",
									children: c
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "border-b border-border py-4 text-muted-foreground",
									children: d
								})
							] }, label))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
					children: "Descript and ElevenLabs Dubbing feature sets per each vendor's public docs, checked July 2026. Feature sets change — verify current before deciding."
				})
			]
		})
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		"data-reveal": true,
		className: "reveal border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "07",
					label: "Pricing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "Three ways to run it. All of them local-first."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					role: "list",
					className: "mt-14 grid list-none divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0",
					children: PRICING_PLANS.map((p) => {
						const titleId = `plan-${p.name.toLowerCase().replace(/\s+/g, "-")}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "contents",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								"aria-labelledby": titleId,
								className: "card-lift group relative p-8 transition-colors hover:bg-surface/50 focus-within:bg-surface/50 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											id: titleId,
											className: "font-serif text-2xl text-foreground",
											children: p.name
										}), p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] uppercase tracking-[0.14em] text-accent",
											children: "Recommended"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `mt-5 font-serif text-5xl tracking-tight ${p.featured ? "text-accent" : "text-foreground"}`,
										children: p.price
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
										children: p.note
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 space-y-3 text-[15px] text-foreground",
										children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-2 h-px w-4 flex-none bg-accent",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
										}, f))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.href,
											"aria-label": `${p.cta} — ${p.name} plan`,
											className: "inline-flex items-baseline gap-1 rounded-sm border-b border-foreground/40 pb-0.5 text-foreground outline-none hover:border-accent hover:text-accent focus-visible:outline-none",
											children: [
												p.cta,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": true,
													children: "→"
												})
											]
										})
									})
								]
							})
						}, p.name);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pricing",
						className: "border-b border-foreground/30 pb-0.5 text-foreground hover:border-accent hover:text-accent",
						children: "Full pricing, license terms, and FAQ →"
					})
				})
			]
		})
	});
}
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		"data-reveal": true,
		className: "reveal border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
							n: "08",
							label: "Questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
							children: "Straight answers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-[16px] leading-relaxed text-muted-foreground",
							children: [
								"Not covered here? Write to",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
									href: "mailto:hello@trackdub.com",
									children: "hello@trackdub.com"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-[14px] leading-relaxed text-muted-foreground",
							children: [
								"Data handling questions are covered in full in the",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "inline-flex items-baseline gap-1 border-b border-foreground/30 pb-0.5 text-foreground transition-colors hover:border-accent hover:text-accent",
									children: "privacy policy"
								}),
								"."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "lg:col-span-8",
					children: FAQ_ITEMS.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 py-6 md:grid-cols-[220px_1fr] md:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-serif text-[20px] leading-snug text-foreground",
							children: it.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-[16px] leading-relaxed text-muted-foreground",
							children: it.a
						})]
					})] }, it.q))
				})]
			})
		})
	});
}
function Endnote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "waitlist",
		"data-reveal": true,
		className: "reveal border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-24 sm:py-36 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "09",
					label: "End"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-8 max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-foreground sm:text-5xl",
					children: "Dub this in Spanish. Keep the original music. Regenerate line 42 with slower prosody. Ship it before lunch."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaitlistForm, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						href: "mailto:hello@trackdub.com",
						children: "Talk to us →"
					})
				})
			]
		})
	});
}
var TURNSTILE_SITE_KEY = "0x4AAAAAAD9lzJEZ4kPqqyZe";
var waitlistSchema = objectType({ email: stringType().trim().min(3, "Enter your email").max(320, "Email is too long").email("That doesn't look like an email") });
var WAITLIST_INTERESTS = new Set([
	"personal",
	"pro",
	"studio"
]);
function WaitlistForm() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [turnstileToken, setTurnstileToken] = (0, import_react.useState)(null);
	const [interest, setInterest] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		window.onWaitlistTurnstile = (token) => setTurnstileToken(token);
		return () => {
			delete window.onWaitlistTurnstile;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const fromUrl = new URLSearchParams(window.location.search).get("interest");
		if (fromUrl && WAITLIST_INTERESTS.has(fromUrl)) setInterest(fromUrl);
	}, []);
	async function onSubmit(e) {
		e.preventDefault();
		if (status === "loading") return;
		const parsed = waitlistSchema.safeParse({ email });
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
			return;
		}
		if (!turnstileToken) {
			toast.error("Still verifying — give it a second and try again.");
			return;
		}
		setStatus("loading");
		const normalized = parsed.data.email.toLowerCase();
		try {
			const res = await fetch("/api/waitlist", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: normalized,
					turnstileToken,
					interest: interest ?? void 0
				})
			});
			const data = await res.json().catch(() => null);
			if (!res.ok || !data?.ok) {
				setStatus("idle");
				toast.error(data?.error || "Could not join the list. Try again in a moment.");
				return;
			}
		} catch {
			setStatus("idle");
			toast.error("Could not reach the server. Try again in a moment.");
			return;
		}
		setStatus("done");
		toast.success("You're on the list.");
	}
	if (status === "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mx-auto mt-12 max-w-md font-mono text-[13px] uppercase tracking-[0.14em] text-accent",
		children: "You're on the list — we'll email you when Trackdub ships."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
		async: true,
		defer: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "mx-auto mt-12 flex w-full max-w-md flex-col items-center gap-3",
		noValidate: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full flex-col gap-3 sm:flex-row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "waitlist-email",
					className: "sr-only",
					children: "Email address"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "waitlist-email",
					type: "email",
					required: true,
					autoComplete: "email",
					inputMode: "email",
					maxLength: 320,
					placeholder: "you@studio.com",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					disabled: status === "loading",
					className: "flex-1 rounded-sm border border-border bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: status === "loading",
					className: "inline-flex items-center justify-center rounded-sm bg-foreground px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-background outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60",
					children: status === "loading" ? "Adding…" : "Join launch list"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cf-turnstile",
			"data-sitekey": TURNSTILE_SITE_KEY,
			"data-callback": "onWaitlistTurnstile",
			"data-action": "waitlist"
		})]
	})] });
}
function Colophon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-10 lg:grid-cols-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-serif text-3xl leading-none text-foreground",
								children: ["Trackdub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xs text-[14px] leading-relaxed text-muted-foreground",
								children: "A desktop workstation for dubbing video. Local-first. Editable at every stage."
							})]
						}),
						[
							["Product", [
								["Pipeline", "#pipeline"],
								["Control", "#control"],
								["Resumable jobs", "#resume"],
								["Performance", "#performance"],
								["Architecture", "#architecture"],
								["Requirements", "#requirements"],
								["Pricing", "/pricing"],
								["Changelog", "/changelog"]
							]],
							["Developers", [
								["CLI", "/docs#quickstart"],
								["SDK", "/docs"],
								["REST API", "/docs"],
								["Model manifest", "/docs#manifest"]
							]],
							["Company", [
								["Contact", "mailto:hello@trackdub.com"],
								["Press", "mailto:press@trackdub.com"],
								["Security", "mailto:security@trackdub.com"],
								["Privacy policy", "/privacy"],
								["Legal", "mailto:legal@trackdub.com"]
							]]
						].map(([h, links]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
								children: h
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-[14px]",
								children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									className: "text-foreground hover:text-accent",
									children: label
								}) }, label))
							})]
						}, h)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 font-mono text-[12px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Early preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Building in public" })]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { className: "mt-14" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Trackdub" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Set in Instrument Serif, Work Sans, JetBrains Mono" })]
				})
			]
		})
	});
}
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "privacy",
		"data-reveal": true,
		className: "reveal border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
							n: "04b",
							label: "Privacy & retention"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
							children: "Your media is yours. Full stop."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[17px] leading-relaxed text-muted-foreground",
							children: "Trackdub is built local-first. That is not a feature — it is the default. The app stores project data where you tell it to, and it does not send your media, transcripts, or voice references anywhere unless you explicitly opt in."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[15px] leading-relaxed text-muted-foreground",
							children: "When you do opt in, only the minimum data needed for that stage leaves your machine. Everything else stays local."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8 space-y-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
						children: "Tbl. 04 \xA0·\xA0 Stored locally"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[640px] border-collapse text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "border-b border-border py-3 pr-4 font-normal",
										children: "Data"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "border-b border-border py-3 pr-4 font-normal",
										children: "What it is"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "border-b border-border py-3 font-normal",
										children: "Retention"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
								{
									item: "Project files",
									what: "SQLite project state, manifests, and stage snapshots.",
									retention: "Kept in the project folder you choose. Deleted when you delete the project."
								},
								{
									item: "Source media",
									what: "Original video/audio, proxies, and extracted stems.",
									retention: "Never uploaded. You choose the folder and can wipe it at any time."
								},
								{
									item: "Transcripts & translations",
									what: "Editable script documents, glossaries, and speaker mappings.",
									retention: "Stored as local files. No cloud sync unless you configure it."
								},
								{
									item: "Voice references",
									what: "Short speaker clips used for voice cloning.",
									retention: "Stay on disk. Never used to train a shared model."
								},
								{
									item: "Generated audio",
									what: "Per-line TTS output, mix stems, and exported deliverables.",
									retention: "Written to your project output folder. You own and control them."
								},
								{
									item: "Model cache",
									what: "Downloaded ONNX models and compiled engine caches.",
									retention: "Stored in the app data directory. Can be cleared in Preferences."
								}
							].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-background/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "border-b border-border py-4 pr-4 align-top font-serif text-[18px] text-foreground",
										children: l.item
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "border-b border-border py-4 pr-4 align-top text-[14px] leading-relaxed text-muted-foreground",
										children: l.what
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "border-b border-border py-4 align-top font-mono text-[12px] text-foreground",
										children: l.retention
									})
								]
							}, l.item)) })]
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: "Fig. 04b-i \xA0·\xA0 Never leaves the machine"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-3 border-t border-border pt-4",
							children: [
								{
									item: "Source video or audio",
									why: "Decoding, analysis, and export happen locally."
								},
								{
									item: "Transcripts and translations",
									why: "Local MT runs against your editable script by default."
								},
								{
									item: "Voice references",
									why: "Speaker clips are used only for per-project voicing."
								},
								{
									item: "Generated output",
									why: "Final mix and stems are written to your disk."
								}
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-[18px] text-foreground",
									children: n.item
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[14px] leading-relaxed text-muted-foreground",
									children: n.why
								})]
							}, n.item))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: "Fig. 04b-ii \xA0·\xA0 Opt-in only"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-4 border-t border-border pt-4",
							children: [
								{
									item: "Cloud translation",
									what: "Source text for the lines you route to a hosted provider.",
									how: "Off by default. Enabled per project, per stage, in Settings."
								},
								{
									item: "Cloud voice generation",
									what: "Target text and optional speaker reference for hosted TTS.",
									how: "Off by default. Enabled per project, per stage, in Settings."
								},
								{
									item: "Telemetry",
									what: "Anonymous crash reports and usage counters.",
									how: "Disabled on install. Turn on in Preferences if you want to help."
								},
								{
									item: "Update checks",
									what: "App version and OS info to the update server.",
									how: "Checks on launch unless disabled. No media or project data is sent."
								}
							].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-serif text-[18px] text-foreground",
										children: o.item
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[14px] leading-relaxed text-muted-foreground",
										children: o.what
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[11px] leading-relaxed text-accent",
										children: o.how
									})
								]
							}, o.item))
						})] })]
					})]
				})]
			})
		})
	});
}
function Architecture() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "architecture",
		"data-reveal": true,
		className: "reveal border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
							n: "04a",
							label: "Local-first architecture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
							children: "What runs where, and why."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[17px] leading-relaxed text-muted-foreground",
							children: "Every stage of the pipeline runs on your machine by default. Cloud providers are something you plug in per stage, not a place your media silently ends up."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[15px] leading-relaxed text-muted-foreground",
							children: "Acceleration is layered: Trackdub prefers the fastest provider your hardware supports and falls back stage-by-stage, never project-by-project."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: "Fig. 04a-i \xA0·\xA0 Data plane"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-none border border-border bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-12 border-b border-hairline px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-3",
										children: "Where"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-4",
										children: "Stages"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-5",
										children: "What leaves the machine"
									})
								]
							}), [
								{
									where: "On device",
									tag: "Default",
									stages: "Ingest · Probe · VAD",
									what: "FFmpeg-backed decode, scene split, voice-activity detection. Runs entirely on your CPU.",
									leaves: "Nothing leaves the machine."
								},
								{
									where: "On device",
									tag: "Default",
									stages: "Transcribe · Diarize",
									what: "ASR and speaker separation via bundled ONNX models. Accelerated by DirectML, CUDA, CoreML, or Windows ML when available; CPU otherwise.",
									leaves: "Nothing leaves the machine."
								},
								{
									where: "On device",
									tag: "Default",
									stages: "Translate",
									what: "Local MT model runs against the editable script. Glossary and per-speaker style are applied locally.",
									leaves: "Nothing leaves the machine."
								},
								{
									where: "On device",
									tag: "Default",
									stages: "Voice · Mix · Export",
									what: "TTS with per-speaker voice reference, alignment, ducking, and mux. GPU-accelerated where a provider is present; CPU fallback is always available.",
									leaves: "Nothing leaves the machine."
								},
								{
									where: "Off device",
									tag: "Opt-in",
									stages: "Cloud translation · Cloud voice",
									what: "A stage can be routed to a hosted provider you configure (DeepL, ElevenLabs, your own endpoint). Off by default; set per project, per stage.",
									leaves: "Only the stage's input for that stage. Media and other stages stay local."
								},
								{
									where: "Off device",
									tag: "Off by default",
									stages: "Telemetry",
									what: "Crash reports and anonymous usage counters. Disabled unless you turn them on in Preferences.",
									leaves: "Stack traces and counters. No media, no transcripts."
								}
							].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-12 items-start gap-x-4 border-b border-hairline px-5 py-5 last:border-b-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-serif text-[18px] text-foreground",
											children: l.where
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 inline-block border border-border px-2 py-[2px] font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
											children: l.tag
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[12px] text-foreground",
											children: l.stages
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 text-[14px] leading-relaxed text-muted-foreground",
											children: l.what
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-5 font-mono text-[12px] leading-relaxed text-foreground",
										children: l.leaves
									})
								]
							}, i))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: "Fig. 04a-ii \xA0·\xA0 Execution providers & fallback order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-3 border-t border-border",
							children: [
								{
									name: "TensorRT RTX",
									platform: "Windows · RTX 30/40/50",
									used: "ASR · Diarize · TTS",
									notes: "Selected automatically on supported RTX GPUs. First run compiles an engine cache per model; subsequent runs skip it."
								},
								{
									name: "DirectML",
									platform: "Windows · any DX12 GPU",
									used: "ASR · Diarize · TTS",
									notes: "Works on Intel Arc, Iris Xe, AMD Radeon, and older NVIDIA cards. The broadest Windows fallback before CPU."
								},
								{
									name: "CUDA",
									platform: "Windows / Linux · NVIDIA",
									used: "ASR · Diarize · TTS",
									notes: "Used when a matching CUDA runtime is present. Preferred over DirectML on non-RTX NVIDIA hardware."
								},
								{
									name: "CoreML",
									platform: "macOS · Apple Silicon",
									used: "ASR · Diarize · TTS",
									notes: "Neural Engine + GPU. Selected automatically on M-series Macs."
								},
								{
									name: "CPU (ONNX Runtime)",
									platform: "All platforms",
									used: "Every stage",
									notes: "Always present. If no accelerator is available — or a model isn't supported by the chosen provider — that stage falls back to CPU without failing the run."
								}
							].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-12 gap-x-4 border-b border-border py-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-serif text-[20px] text-foreground",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
											children: p.platform
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-3 font-mono text-[12px] text-foreground",
										children: p.used
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-4 text-[14px] leading-relaxed text-muted-foreground",
										children: p.notes
									})
								]
							}, p.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: "Fallback is per-stage. A missing provider on one stage does not disable the rest of the pipeline."
						})
					]
				})]
			})
		})
	});
}
function SystemRequirements() {
	const specs = [
		{
			item: "OS",
			minimum: "Windows 10 22H2 (x64)",
			recommended: "Windows 11 23H2 or later",
			notes: "64-bit only. ARM64 Windows runs under emulation with CPU fallback."
		},
		{
			item: "CPU",
			minimum: "x64 CPU with AVX2 (Intel 6th gen / AMD Ryzen 2000)",
			recommended: "Intel 10th gen / AMD Ryzen 5000 or newer, 8 cores+",
			notes: "Used for ingest, probe, VAD, and CPU fallback inference."
		},
		{
			item: "RAM",
			minimum: "16 GB",
			recommended: "32 GB",
			notes: "Larger projects (20 min+, 4K source, many speakers) benefit from more RAM."
		},
		{
			item: "GPU",
			minimum: "DirectX 12 capable GPU for DirectML",
			recommended: "NVIDIA RTX 3060 / 4060 / 5060 or better",
			notes: "TensorRT RTX requires RTX 30 series or newer. Intel Arc and AMD Radeon work via DirectML."
		},
		{
			item: "VRAM",
			minimum: "4 GB",
			recommended: "8 GB (1080p) · 12 GB+ (4K / long form)",
			notes: "ASR and diarization models are the heaviest VRAM users. TTS is lighter per line."
		},
		{
			item: "Storage",
			minimum: "10 GB for app + bundled models",
			recommended: "SSD with 50 GB free for cache",
			notes: "HDD is usable but ingest and model load times increase significantly."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "requirements",
		"data-reveal": true,
		className: "reveal border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
							n: "04c",
							label: "System requirements"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
							children: "Runs on a wide range of Windows hardware."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[17px] leading-relaxed text-muted-foreground",
							children: "Trackdub is built for the machines creators already own. A discrete GPU speeds things up, but it is not required — every stage has a CPU fallback."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[15px] leading-relaxed text-muted-foreground",
							children: "Specifics below are for the Windows desktop app. macOS and Linux builds have similar tiers and are documented in the release notes."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: "Tbl. 02 \xA0·\xA0 Minimum and recommended specs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[640px] border-collapse text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "border-b border-border py-3 pr-4 font-normal",
											children: "Component"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "border-b border-border py-3 pr-4 font-normal",
											children: "Minimum"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "border-b border-border py-3 pr-4 font-normal",
											children: "Recommended"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: specs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-background/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "border-b border-border py-4 pr-4 align-top font-serif text-[20px] text-foreground",
											children: s.item
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "border-b border-border py-4 pr-4 align-top font-mono text-[13px] text-foreground",
											children: s.minimum
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "border-b border-border py-4 pr-4 align-top font-mono text-[13px] text-muted-foreground",
											children: s.recommended
										})
									]
								}, s.item)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-4 border-t border-border pt-6",
							children: specs.map((s) => s.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 md:grid-cols-[140px_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
									children: s.item
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[15px] leading-relaxed text-muted-foreground",
									children: s.notes
								})]
							}, `${s.item}-note`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: "Tbl. 03 \xA0·\xA0 Acceleration notes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-px bg-border md:grid-cols-3",
							children: [
								{
									name: "TensorRT RTX",
									requirement: "NVIDIA RTX 30 / 40 / 50 series · 8 GB+ VRAM",
									speedup: "Fastest on supported hardware",
									caveat: "First run compiles an engine cache per model. Cache is portable across projects."
								},
								{
									name: "DirectML",
									requirement: "Any DirectX 12 GPU · 4 GB+ VRAM",
									speedup: "2–4× realtime end-to-end on modern integrated/discrete GPUs",
									caveat: "Not every model is equally optimized. Falls back to CPU per-stage if a model fails."
								},
								{
									name: "CPU fallback",
									requirement: "Any AVX2-capable x64 CPU",
									speedup: "0.8–1.5× realtime depending on model and core count",
									caveat: "Always available. No GPU required to complete a project."
								}
							].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-[22px] text-foreground",
									children: a.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-4 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
											children: "Requirement"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 text-[14px] leading-relaxed text-foreground",
											children: a.requirement
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
											children: "Speedup"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 text-[14px] leading-relaxed text-foreground",
											children: a.speedup
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
											children: "Caveat"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 text-[14px] leading-relaxed text-muted-foreground",
											children: a.caveat
										})] })
									]
								})]
							}, a.name))
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { Index as component };
