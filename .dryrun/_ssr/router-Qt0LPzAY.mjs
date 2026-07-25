import { i as __toESM } from "../_runtime.mjs";
import { i as PUBLISHED, n as FAQS, r as MODIFIED, t as CHECKLIST_ABSOLUTE_URL } from "./ai-dubbing-guide-DfgosdMd.mjs";
import { n as require_jsx_runtime, r as require_react, t as Body } from "../_libs/react+react-email__body.mjs";
import { c as Scripts, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as HeadContent, m as createFileRoute, p as lazyRouteComponent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PRICING_PLANS } from "./pricing-C2fAB_cA.mjs";
import { t as FAQ_ITEMS } from "./routes-CmLmE7Is.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
import { t as createAuthEmailHandler } from "../_libs/@lovable.dev/email-js+[...].mjs";
import { t as Button } from "../_libs/react-email__button.mjs";
import { t as Container } from "../_libs/react-email__container.mjs";
import { t as Head } from "../_libs/react-email__head.mjs";
import { t as Heading } from "../_libs/react-email__heading.mjs";
import { t as Html } from "../_libs/react-email__html.mjs";
import { t as Link$1 } from "../_libs/react-email__link.mjs";
import { t as Preview } from "../_libs/react-email__preview.mjs";
import { n as render } from "../_libs/@react-email/render+[...].mjs";
import { t as Text } from "../_libs/react-email__text.mjs";
import process from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Qt0LPzAY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BG_GfMwI.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Trackdub — Dub videos without giving up control" },
			{
				name: "description",
				content: "A Windows desktop workstation for AI video dubbing. Translate, voice, and mix in one workflow — inspect every stage and fix what needs fixing."
			},
			{
				name: "author",
				content: "Trackdub"
			},
			{
				property: "og:title",
				content: "Trackdub — Dub videos without giving up control"
			},
			{
				property: "og:description",
				content: "A Windows desktop workstation for AI video dubbing. Inspect every stage and fix what needs fixing."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Trackdub — Dub videos without giving up control"
			},
			{
				name: "twitter:description",
				content: "A Windows desktop workstation for AI video dubbing."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preload",
				as: "font",
				type: "font/woff2",
				href: "/fonts/instrument-serif-400.woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				as: "font",
				type: "font/woff2",
				href: "/fonts/ibm-plex-sans-400.woff2",
				crossOrigin: "anonymous"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Trackdub",
				url: "https://www.trackdub.com",
				description: "Local-first desktop workstation for AI video dubbing."
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var BASE_URL = "https://www.trackdub.com";
var Route$9 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/pricing",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/docs",
				changefreq: "weekly",
				priority: "0.7"
			},
			{
				path: "/changelog",
				changefreq: "weekly",
				priority: "0.5"
			},
			{
				path: "/privacy",
				changefreq: "monthly",
				priority: "0.4"
			},
			{
				path: "/guides/ai-dubbing-guide",
				changefreq: "monthly",
				priority: "0.7"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$5 = () => import("./privacy-C6dflmcT.mjs");
var Route$8 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy — Trackdub" },
			{
				name: "description",
				content: "How Trackdub handles your media, transcripts, and voice references. Local-first by default; cloud is strictly opt-in per project and per stage."
			},
			{
				property: "og:title",
				content: "Privacy Policy — Trackdub"
			},
			{
				property: "og:description",
				content: "Local-first privacy rules for the Trackdub desktop workstation. What is stored, what never leaves your machine, and what is opt-in."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/privacy"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./pricing-CNxiFXIA.mjs");
var Route$7 = createFileRoute("/pricing")({
	head: () => ({
		meta: [
			{ title: "Pricing — Trackdub" },
			{
				name: "description",
				content: "Trackdub pricing: Free desktop app with a watermark and 5-minute export cap, Pro at $149 one-time with no subscription, Studio in development. No recurring fees."
			},
			{
				property: "og:title",
				content: "Pricing — Trackdub"
			},
			{
				property: "og:description",
				content: "Free, Pro ($149 one-time), and Studio (in development). No subscriptions, no per-minute billing."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/pricing"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/pricing"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Product",
				name: "Trackdub",
				description: "Local-first desktop workstation for AI video dubbing.",
				offers: PRICING_PLANS.filter((p) => p.price.startsWith("$") || p.price === "Free").map((p) => ({
					"@type": "Offer",
					name: p.name,
					price: p.price === "Free" ? "0" : p.price.replace("$", ""),
					priceCurrency: "USD"
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./docs-Bz3SiJBp.mjs");
var Route$6 = createFileRoute("/docs")({
	head: () => ({
		meta: [
			{ title: "Docs — Trackdub" },
			{
				name: "description",
				content: "Trackdub documentation: CLI usage, pipeline stages, execution providers, system requirements, and the bundled model manifest."
			},
			{
				property: "og:title",
				content: "Docs — Trackdub"
			},
			{
				property: "og:description",
				content: "CLI usage, pipeline stages, execution providers, and the bundled model manifest."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/docs"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/docs"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./changelog-BV1kMNG4.mjs");
var Route$5 = createFileRoute("/changelog")({
	head: () => ({
		meta: [
			{ title: "Changelog — Trackdub" },
			{
				name: "description",
				content: "A working log of real Trackdub engineering milestones, not a highlight reel. Building in public ahead of v1 launch."
			},
			{
				property: "og:title",
				content: "Changelog — Trackdub"
			},
			{
				property: "og:description",
				content: "Real engineering milestones on the road to v1. Building in public."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/changelog"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/changelog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-BL28xPe0.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Trackdub — A desktop workstation for dubbing video" },
			{
				name: "description",
				content: "Trackdub is a local-first desktop workstation for dubbing video into other languages. Editable stages, deterministic runs, your media stays on your machine."
			},
			{
				property: "og:title",
				content: "Trackdub — A desktop workstation for dubbing video"
			},
			{
				property: "og:description",
				content: "Local-first, stage-by-stage dubbing. Editable script, per-line voice, alignment, mix — all inspectable."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: "Trackdub",
				url: "https://www.trackdub.com",
				description: "Local-first Windows desktop workstation for AI video dubbing."
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: FAQ_ITEMS.map((it) => ({
					"@type": "Question",
					name: it.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: it.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./ai-dubbing-guide-PNTecrog.mjs");
var URL = "https://www.trackdub.com/guides/ai-dubbing-guide";
var CHECKLIST_ANCHOR_URL = `${URL}#checklist`;
var Route$3 = createFileRoute("/guides/ai-dubbing-guide")({
	head: () => ({
		meta: [
			{ title: "Dubbing AI in 2026: A Practical Guide to Local-First AI Video Dubbing" },
			{
				name: "description",
				content: "How dubbing AI works stage by stage in 2026 — ASR, translation, diarization, TTS, and mix — plus how local AI video dubbing software compares to cloud services."
			},
			{
				name: "keywords",
				content: "dubbing ai, ai dubbing, ai video dubbing, ai dubbing software, ai voice dubbing, ai dubbing tool, local ai dubbing, dub video with ai, ai dubbing free"
			},
			{
				property: "og:title",
				content: "Dubbing AI in 2026: A Practical Guide to Local-First AI Video Dubbing"
			},
			{
				property: "og:description",
				content: "A stage-by-stage guide to dubbing AI — ASR, translation, diarization, TTS, mix — and why local AI dubbing software beats black-box cloud services for serious work."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: URL
			},
			{
				property: "article:published_time",
				content: PUBLISHED
			},
			{
				property: "article:modified_time",
				content: MODIFIED
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Dubbing AI in 2026: A Practical Guide to Local-First AI Video Dubbing"
			},
			{
				name: "twitter:description",
				content: "Dubbing AI stage by stage — and why local AI video dubbing software beats black-box cloud pipelines."
			}
		],
		links: [{
			rel: "canonical",
			href: URL
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Article",
					headline: "Dubbing AI in 2026: A Practical Guide to Local-First AI Video Dubbing",
					description: "A stage-by-stage guide to dubbing AI — ASR, translation, diarization, TTS, mix — and how local AI dubbing software compares to cloud services.",
					keywords: "dubbing ai, ai dubbing, ai video dubbing, ai dubbing software, ai voice dubbing, ai dubbing tool, local ai dubbing, dub video with ai",
					datePublished: PUBLISHED,
					dateModified: MODIFIED,
					author: {
						"@type": "Organization",
						name: "Trackdub"
					},
					publisher: {
						"@type": "Organization",
						name: "Trackdub"
					},
					mainEntityOfPage: URL
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: FAQS.map(({ q, a }) => ({
						"@type": "Question",
						name: q,
						acceptedAnswer: {
							"@type": "Answer",
							text: a
						}
					}))
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Trackdub",
							item: "https://www.trackdub.com/"
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Guides",
							item: "https://www.trackdub.com/guides"
						},
						{
							"@type": "ListItem",
							position: 3,
							name: "Dubbing AI",
							item: URL
						}
					]
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "DigitalDocument",
					"@id": CHECKLIST_ANCHOR_URL,
					name: "Local-First Dubbing Workflow Checklist",
					headline: "Local-First Dubbing Workflow Checklist",
					description: "A printable, stage-by-stage checklist for shipping AI-dubbed video without giving up control — ingest, ASR, translation, diarization, TTS, mix, reliability, and privacy.",
					url: CHECKLIST_ANCHOR_URL,
					contentUrl: CHECKLIST_ABSOLUTE_URL,
					encodingFormat: "application/pdf",
					fileFormat: "application/pdf",
					numberOfPages: 2,
					inLanguage: "en",
					isAccessibleForFree: true,
					datePublished: PUBLISHED,
					dateModified: MODIFIED,
					author: {
						"@type": "Organization",
						name: "Trackdub"
					},
					publisher: {
						"@type": "Organization",
						name: "Trackdub",
						url: "https://www.trackdub.com/"
					},
					license: "https://creativecommons.org/licenses/by/4.0/",
					keywords: "dubbing ai checklist, ai video dubbing workflow, local ai dubbing, ai dubbing pipeline",
					isPartOf: {
						"@type": "Article",
						"@id": URL
					},
					about: [
						{
							"@type": "Thing",
							name: "AI video dubbing"
						},
						{
							"@type": "Thing",
							name: "Local-first workflow"
						},
						{
							"@type": "Thing",
							name: "Dubbing pipeline"
						}
					],
					potentialAction: {
						"@type": "DownloadAction",
						name: "Download the Local-First Dubbing Workflow Checklist",
						target: {
							"@type": "EntryPoint",
							urlTemplate: CHECKLIST_ABSOLUTE_URL,
							contentType: "application/pdf",
							actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
						},
						expectsAcceptanceOf: {
							"@type": "Offer",
							price: "0",
							priceCurrency: "USD",
							eligibleRegion: {
								"@type": "Place",
								name: "Worldwide"
							},
							category: "Free download"
						}
					}
				})
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var bodySchema = objectType({
	email: stringType().trim().min(3).max(320).email(),
	turnstileToken: stringType().min(1),
	interest: enumType([
		"personal",
		"pro",
		"studio"
	]).optional()
});
async function verifyTurnstile(token, secret, remoteIp) {
	return (await (await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			secret,
			response: token,
			remoteip: remoteIp
		})
	})).json()).success === true;
}
var Route$2 = createFileRoute("/api/waitlist")({ server: { handlers: { POST: async ({ request }) => {
	const env = globalThis.__env__;
	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({
			ok: false,
			error: "Invalid request body"
		}, { status: 400 });
	}
	const parsed = bodySchema.safeParse(body);
	if (!parsed.success) return Response.json({
		ok: false,
		error: parsed.error.issues[0]?.message ?? "Invalid email"
	}, { status: 400 });
	const { email, turnstileToken, interest } = parsed.data;
	const turnstileSecret = env?.TURNSTILE_SECRET;
	if (!turnstileSecret) {
		console.error("[waitlist] Missing TURNSTILE_SECRET binding");
		return Response.json({
			ok: false,
			error: "Server misconfigured"
		}, { status: 500 });
	}
	if (!await verifyTurnstile(turnstileToken, turnstileSecret, request.headers.get("cf-connecting-ip") ?? "")) return Response.json({
		ok: false,
		error: "Verification failed"
	}, { status: 403 });
	const db = env?.WAITLIST_DB;
	if (!db) {
		console.error("[waitlist] Missing WAITLIST_DB binding");
		return Response.json({
			ok: false,
			error: "Server misconfigured"
		}, { status: 500 });
	}
	try {
		await db.prepare(`INSERT INTO waitlist_emails (email, interest) VALUES (?, ?)
               ON CONFLICT(email) DO UPDATE SET interest = excluded.interest
               WHERE excluded.interest IS NOT NULL`).bind(email.toLowerCase(), interest ?? null).run();
	} catch (err) {
		console.error("[waitlist] D1 insert failed", err);
		return Response.json({
			ok: false,
			error: "Could not save email"
		}, { status: 500 });
	}
	return Response.json({ ok: true });
} } } });
var SignupEmail = ({ siteName, siteUrl, recipient, confirmationUrl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, {
	lang: "en",
	dir: "ltr",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Preview, { children: ["Confirm your email for ", siteName] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: main$5,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: container$5,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						style: h1$5,
						children: "Confirm your email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: text$5,
						children: [
							"Thanks for signing up for",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								href: siteUrl,
								style: link$2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: siteName })
							}),
							"!"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: text$5,
						children: [
							"Please confirm your email address (",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								href: `mailto:${recipient}`,
								style: link$2,
								children: recipient
							}),
							") by clicking the button below:"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						style: button$4,
						href: confirmationUrl,
						children: "Verify Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: footer$5,
						children: "If you didn't create an account, you can safely ignore this email."
					})
				]
			})
		})
	]
});
var main$5 = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, sans-serif"
};
var container$5 = { padding: "20px 25px" };
var h1$5 = {
	fontSize: "22px",
	fontWeight: "bold",
	color: "#000000",
	margin: "0 0 20px"
};
var text$5 = {
	fontSize: "14px",
	color: "#55575d",
	lineHeight: "1.5",
	margin: "0 0 25px"
};
var link$2 = {
	color: "inherit",
	textDecoration: "underline"
};
var button$4 = {
	backgroundColor: "#000000",
	color: "#ffffff",
	fontSize: "14px",
	borderRadius: "8px",
	padding: "12px 20px",
	textDecoration: "none"
};
var footer$5 = {
	fontSize: "12px",
	color: "#999999",
	margin: "30px 0 0"
};
var InviteEmail = ({ siteName, siteUrl, confirmationUrl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, {
	lang: "en",
	dir: "ltr",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Preview, { children: ["You've been invited to join ", siteName] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: main$4,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: container$4,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						style: h1$4,
						children: "You've been invited"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: text$4,
						children: [
							"You've been invited to join",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								href: siteUrl,
								style: link$1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: siteName })
							}),
							". Click the button below to accept the invitation and create your account."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						style: button$3,
						href: confirmationUrl,
						children: "Accept Invitation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: footer$4,
						children: "If you weren't expecting this invitation, you can safely ignore this email."
					})
				]
			})
		})
	]
});
var main$4 = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, sans-serif"
};
var container$4 = { padding: "20px 25px" };
var h1$4 = {
	fontSize: "22px",
	fontWeight: "bold",
	color: "#000000",
	margin: "0 0 20px"
};
var text$4 = {
	fontSize: "14px",
	color: "#55575d",
	lineHeight: "1.5",
	margin: "0 0 25px"
};
var link$1 = {
	color: "inherit",
	textDecoration: "underline"
};
var button$3 = {
	backgroundColor: "#000000",
	color: "#ffffff",
	fontSize: "14px",
	borderRadius: "8px",
	padding: "12px 20px",
	textDecoration: "none"
};
var footer$4 = {
	fontSize: "12px",
	color: "#999999",
	margin: "30px 0 0"
};
var MagicLinkEmail = ({ siteName, confirmationUrl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, {
	lang: "en",
	dir: "ltr",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Preview, { children: ["Your login link for ", siteName] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: main$3,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: container$3,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						style: h1$3,
						children: "Your login link"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: text$3,
						children: [
							"Click the button below to log in to ",
							siteName,
							". This link will expire shortly."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						style: button$2,
						href: confirmationUrl,
						children: "Log In"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: footer$3,
						children: "If you didn't request this link, you can safely ignore this email."
					})
				]
			})
		})
	]
});
var main$3 = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, sans-serif"
};
var container$3 = { padding: "20px 25px" };
var h1$3 = {
	fontSize: "22px",
	fontWeight: "bold",
	color: "#000000",
	margin: "0 0 20px"
};
var text$3 = {
	fontSize: "14px",
	color: "#55575d",
	lineHeight: "1.5",
	margin: "0 0 25px"
};
var button$2 = {
	backgroundColor: "#000000",
	color: "#ffffff",
	fontSize: "14px",
	borderRadius: "8px",
	padding: "12px 20px",
	textDecoration: "none"
};
var footer$3 = {
	fontSize: "12px",
	color: "#999999",
	margin: "30px 0 0"
};
var RecoveryEmail = ({ siteName, confirmationUrl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, {
	lang: "en",
	dir: "ltr",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Preview, { children: ["Reset your password for ", siteName] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: main$2,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: container$2,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						style: h1$2,
						children: "Reset your password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: text$2,
						children: [
							"We received a request to reset your password for ",
							siteName,
							". Click the button below to choose a new password."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						style: button$1,
						href: confirmationUrl,
						children: "Reset Password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: footer$2,
						children: "If you didn't request a password reset, you can safely ignore this email. Your password will not be changed."
					})
				]
			})
		})
	]
});
var main$2 = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, sans-serif"
};
var container$2 = { padding: "20px 25px" };
var h1$2 = {
	fontSize: "22px",
	fontWeight: "bold",
	color: "#000000",
	margin: "0 0 20px"
};
var text$2 = {
	fontSize: "14px",
	color: "#55575d",
	lineHeight: "1.5",
	margin: "0 0 25px"
};
var button$1 = {
	backgroundColor: "#000000",
	color: "#ffffff",
	fontSize: "14px",
	borderRadius: "8px",
	padding: "12px 20px",
	textDecoration: "none"
};
var footer$2 = {
	fontSize: "12px",
	color: "#999999",
	margin: "30px 0 0"
};
var EmailChangeEmail = ({ siteName, oldEmail, newEmail, confirmationUrl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, {
	lang: "en",
	dir: "ltr",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Preview, { children: ["Confirm your email change for ", siteName] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: main$1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: container$1,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						style: h1$1,
						children: "Confirm your email change"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: text$1,
						children: [
							"You requested to change your email address for ",
							siteName,
							" from",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								href: `mailto:${oldEmail}`,
								style: link,
								children: oldEmail
							}),
							" ",
							"to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								href: `mailto:${newEmail}`,
								style: link,
								children: newEmail
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: text$1,
						children: "Click the button below to confirm this change:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						style: button,
						href: confirmationUrl,
						children: "Confirm Email Change"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: footer$1,
						children: "If you didn't request this change, please secure your account immediately."
					})
				]
			})
		})
	]
});
var main$1 = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, sans-serif"
};
var container$1 = { padding: "20px 25px" };
var h1$1 = {
	fontSize: "22px",
	fontWeight: "bold",
	color: "#000000",
	margin: "0 0 20px"
};
var text$1 = {
	fontSize: "14px",
	color: "#55575d",
	lineHeight: "1.5",
	margin: "0 0 25px"
};
var link = {
	color: "inherit",
	textDecoration: "underline"
};
var button = {
	backgroundColor: "#000000",
	color: "#ffffff",
	fontSize: "14px",
	borderRadius: "8px",
	padding: "12px 20px",
	textDecoration: "none"
};
var footer$1 = {
	fontSize: "12px",
	color: "#999999",
	margin: "30px 0 0"
};
var ReauthenticationEmail = ({ token }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, {
	lang: "en",
	dir: "ltr",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preview, { children: "Your verification code" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: main,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: container,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						style: h1,
						children: "Confirm reauthentication"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: text,
						children: "Use the code below to confirm your identity:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: codeStyle,
						children: token
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: footer,
						children: "This code will expire shortly. If you didn't request this, you can safely ignore this email."
					})
				]
			})
		})
	]
});
var main = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, sans-serif"
};
var container = { padding: "20px 25px" };
var h1 = {
	fontSize: "22px",
	fontWeight: "bold",
	color: "#000000",
	margin: "0 0 20px"
};
var text = {
	fontSize: "14px",
	color: "#55575d",
	lineHeight: "1.5",
	margin: "0 0 25px"
};
var codeStyle = {
	fontFamily: "Courier, monospace",
	fontSize: "22px",
	fontWeight: "bold",
	color: "#000000",
	margin: "0 0 30px"
};
var footer = {
	fontSize: "12px",
	color: "#999999",
	margin: "30px 0 0"
};
var SITE_NAME$1 = "trackdub-pipeline-control";
var SENDER_DOMAIN = "notify.trackdub.com";
var ROOT_DOMAIN = "trackdub.com";
var FROM_DOMAIN = "notify.trackdub.com";
var SITE_URL = `https://${ROOT_DOMAIN}`;
var apiKey = process.env.LOVABLE_API_KEY;
var handler = !apiKey ? null : createAuthEmailHandler({
	apiKey,
	from: `${SITE_NAME$1} <noreply@${FROM_DOMAIN}>`,
	senderDomain: SENDER_DOMAIN,
	sendUrl: process.env.LOVABLE_SEND_URL,
	emails: {
		signup: {
			subject: "Confirm your email",
			render: (data) => import_react.createElement(SignupEmail, {
				siteName: SITE_NAME$1,
				siteUrl: SITE_URL,
				recipient: data.email,
				confirmationUrl: data.url
			})
		},
		invite: {
			subject: "You've been invited",
			render: (data) => import_react.createElement(InviteEmail, {
				siteName: SITE_NAME$1,
				siteUrl: SITE_URL,
				confirmationUrl: data.url
			})
		},
		magiclink: {
			subject: "Your login link",
			render: (data) => import_react.createElement(MagicLinkEmail, {
				siteName: SITE_NAME$1,
				confirmationUrl: data.url
			})
		},
		recovery: {
			subject: "Reset your password",
			render: (data) => import_react.createElement(RecoveryEmail, {
				siteName: SITE_NAME$1,
				confirmationUrl: data.url
			})
		},
		email_change: {
			subject: "Confirm your new email",
			render: (data) => import_react.createElement(EmailChangeEmail, {
				siteName: SITE_NAME$1,
				oldEmail: data.old_email ?? "",
				email: data.email,
				newEmail: data.new_email ?? "",
				confirmationUrl: data.url
			})
		},
		reauthentication: {
			subject: "Your verification code",
			render: (data) => import_react.createElement(ReauthenticationEmail, { token: data.token ?? "" })
		}
	}
});
var Route$1 = createFileRoute("/lovable/email/auth/webhook")({ server: { handlers: { POST: ({ request }) => handler ? handler(request) : new Response("LOVABLE_API_KEY not configured", { status: 501 }) } } });
var EMAIL_TEMPLATES = {
	signup: SignupEmail,
	invite: InviteEmail,
	magiclink: MagicLinkEmail,
	recovery: RecoveryEmail,
	email_change: EmailChangeEmail,
	reauthentication: ReauthenticationEmail
};
var SITE_NAME = "trackdub-pipeline-control";
var SAMPLE_PROJECT_URL = "https://trackdub-pipeline-control.lovable.app";
var SAMPLE_EMAIL = "user@example.test";
var SAMPLE_DATA = {
	signup: {
		siteName: SITE_NAME,
		siteUrl: SAMPLE_PROJECT_URL,
		recipient: SAMPLE_EMAIL,
		confirmationUrl: SAMPLE_PROJECT_URL
	},
	magiclink: {
		siteName: SITE_NAME,
		confirmationUrl: SAMPLE_PROJECT_URL
	},
	recovery: {
		siteName: SITE_NAME,
		confirmationUrl: SAMPLE_PROJECT_URL
	},
	invite: {
		siteName: SITE_NAME,
		siteUrl: SAMPLE_PROJECT_URL,
		confirmationUrl: SAMPLE_PROJECT_URL
	},
	email_change: {
		siteName: SITE_NAME,
		oldEmail: SAMPLE_EMAIL,
		email: SAMPLE_EMAIL,
		newEmail: SAMPLE_EMAIL,
		confirmationUrl: SAMPLE_PROJECT_URL
	},
	reauthentication: { token: "123456" }
};
var Route = createFileRoute("/lovable/email/auth/preview")({ server: { handlers: { POST: async ({ request }) => {
	const apiKey = process.env.LOVABLE_API_KEY;
	if (!apiKey) return Response.json({ error: "Server configuration error" }, { status: 500 });
	const authHeader = request.headers.get("Authorization");
	if (!authHeader || authHeader !== `Bearer ${apiKey}`) return Response.json({ error: "Unauthorized" }, { status: 401 });
	let type;
	try {
		type = (await request.json()).type;
	} catch {
		return Response.json({ error: "Invalid JSON in request body" }, { status: 400 });
	}
	const EmailTemplate = EMAIL_TEMPLATES[type];
	if (!EmailTemplate) return Response.json({ error: `Unknown email type: ${type}` }, { status: 400 });
	const sampleData = SAMPLE_DATA[type] || {};
	const html = await render(import_react.createElement(EmailTemplate, sampleData));
	return new Response(html, {
		status: 200,
		headers: { "Content-Type": "text/html; charset=utf-8" }
	});
} } } });
var SitemapDotxmlRoute = Route$9.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$10
});
var PrivacyRoute = Route$8.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$10
});
var PricingRoute = Route$7.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$10
});
var DocsRoute = Route$6.update({
	id: "/docs",
	path: "/docs",
	getParentRoute: () => Route$10
});
var ChangelogRoute = Route$5.update({
	id: "/changelog",
	path: "/changelog",
	getParentRoute: () => Route$10
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var GuidesAiDubbingGuideRoute = Route$3.update({
	id: "/guides/ai-dubbing-guide",
	path: "/guides/ai-dubbing-guide",
	getParentRoute: () => Route$10
});
var ApiWaitlistRoute = Route$2.update({
	id: "/api/waitlist",
	path: "/api/waitlist",
	getParentRoute: () => Route$10
});
var LovableEmailAuthWebhookRoute = Route$1.update({
	id: "/lovable/email/auth/webhook",
	path: "/lovable/email/auth/webhook",
	getParentRoute: () => Route$10
});
var rootRouteChildren = {
	IndexRoute,
	ChangelogRoute,
	DocsRoute,
	PricingRoute,
	PrivacyRoute,
	SitemapDotxmlRoute,
	ApiWaitlistRoute,
	GuidesAiDubbingGuideRoute,
	LovableEmailAuthPreviewRoute: Route.update({
		id: "/lovable/email/auth/preview",
		path: "/lovable/email/auth/preview",
		getParentRoute: () => Route$10
	}),
	LovableEmailAuthWebhookRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
