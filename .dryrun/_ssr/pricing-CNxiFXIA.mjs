import { n as require_jsx_runtime } from "../_libs/react+react-email__body.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PRICING_PLANS } from "./pricing-C2fAB_cA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-CNxiFXIA.js
var import_jsx_runtime = require_jsx_runtime();
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plans, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terms, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
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
					label: "Pricing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 max-w-3xl font-serif text-5xl leading-[1.03] tracking-tight text-foreground sm:text-6xl",
					children: "One-time purchase. No subscription, ever."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground",
					children: "Trackdub is priced like software you own, not software you rent. Free gets you the full pipeline with a watermark and a 5-minute export cap — commercial use included. Pro removes both for a one-time $149."
				})
			]
		})
	});
}
function Plans() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				role: "list",
				className: "grid list-none divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0",
				children: PRICING_PLANS.map((p) => {
					const titleId = `plan-${p.name.toLowerCase().replace(/\s+/g, "-")}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "contents",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							"aria-labelledby": titleId,
							className: "relative bg-background p-8 transition-colors hover:bg-surface/50 focus-within:bg-surface/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
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
										className: "inline-flex items-baseline gap-1 border-b border-foreground/40 pb-0.5 text-foreground hover:border-accent hover:text-accent",
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
			})
		})
	});
}
function Terms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "01",
					label: "Terms"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "The fine print, in plain language."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12",
					children: [
						["What does the Free watermark look like?", "A small \"Made with Trackdub\" mark burned into the bottom-right corner during export. It's removed automatically once a valid Pro license is detected."],
						["Does Free block commercial use?", "No. Free is commercial-use-safe from day one — the only gates are the watermark and the 5-minute export cap. Every bundled model is commercial-safe by manifest, so nothing research-only ever loads, on any tier."],
						["How does the Pro license work?", "A machine-bound license key, validated locally at app start. No phone-home, no internet required to keep working. One license covers 2 machine activations (desktop + laptop)."],
						["What happens if my Pro license fails to validate?", "Trackdub reverts to the Free tier — watermark and 5-minute cap — never a crash."],
						["Is there a subscription option?", "No. Pro is a one-time purchase. Paid major-version upgrades (v2.0, etc.) are separate, optional purchases — never a recurring charge for using the version you bought."],
						["What's in Studio?", "Batch and multi-GPU processing, a 4K-optimized export pipeline, and commercial redistribution rights for agencies. It's real but unfinished — we don't sell it until at least two of those features ship."]
					].map(([q, a], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `grid gap-4 py-6 md:grid-cols-[280px_1fr] md:gap-10 ${i > 0 ? "border-t border-border" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-serif text-[20px] leading-snug text-foreground",
							children: q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-[16px] leading-relaxed text-muted-foreground",
							children: a
						})]
					}, q))
				})
			]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 text-center sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "02",
					label: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl",
					children: "Buying for a team, or need an on-prem deployment?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground",
					children: [
						"Write to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hello@trackdub.com?subject=Trackdub%20Team%2FOn-prem",
							className: "border-b border-foreground/40 pb-0.5 text-foreground hover:border-accent hover:text-accent",
							children: "hello@trackdub.com"
						}),
						"."
					]
				})
			]
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
export { PricingPage as component };
