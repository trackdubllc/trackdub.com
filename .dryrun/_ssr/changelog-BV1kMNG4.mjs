import { n as require_jsx_runtime } from "../_libs/react+react-email__body.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/changelog-BV1kMNG4.js
var import_jsx_runtime = require_jsx_runtime();
var ENTRIES = [
	{
		date: "2026-07-24",
		title: "trackdub.com relaunches",
		body: "New site: honest pricing, a real early-build screenshot next to the interactive mock, and this changelog. No fabricated version numbers or benchmark data — what's not measured yet says so."
	},
	{
		date: "2026-06-12",
		title: "Forced alignment wired against real models",
		body: "Dubbed lines snap to source timing automatically. Verified against real models, not synthetic fixtures."
	},
	{
		date: "2026-06-10",
		title: "First full headless dub off real models",
		body: "The whole pipeline — voice detection, diarization, transcription, translation, TTS, export — ran end to end on real models via the CLI, with honest per-stage failure states instead of silent fallbacks. Re-running an unchanged project correctly skipped every already-completed stage."
	},
	{
		date: "2026-06-01",
		title: "Full pipeline audit",
		body: "A ground-up audit of the dubbing pipeline kicked off the current push toward a v1 release."
	}
];
function ChangelogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Entries, {})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterMini, {})
		]
	});
}
function TopBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "font-serif text-2xl leading-none text-foreground",
				children: ["Trackdub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent",
					children: "."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "inline-flex items-baseline gap-1 border-b border-foreground/30 pb-0.5 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground hover:border-accent hover:text-accent",
				children: "← Back to site"
			})]
		})
	});
}
function Container({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mx-auto w-full max-w-6xl px-6 sm:px-10 ${className}`,
		children
	});
}
function SectionNumber({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-2 text-hairline",
				children: "/"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
		]
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "00",
					label: "Changelog"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 max-w-3xl font-serif text-5xl leading-[1.03] tracking-tight text-foreground sm:text-6xl",
					children: "Building in public."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground",
					children: "A working log of real engineering milestones, not a highlight reel. This is pre-launch — the v1 release changelog starts once Pro ships."
				})
			]
		})
	});
}
function Entries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-0",
				children: ENTRIES.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `grid gap-4 py-8 md:grid-cols-[160px_1fr] md:gap-10 ${i > 0 ? "border-t border-border" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground",
						children: e.date
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-[22px] text-foreground",
						children: e.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",
						children: e.body
					})] })]
				}, e.date + e.title))
			})
		})
	});
}
function FooterMini() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Trackdub" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-foreground hover:text-accent",
				children: "trackdub.com"
			})]
		})
	});
}
//#endregion
export { ChangelogPage as component };
