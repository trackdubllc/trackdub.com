import { n as require_jsx_runtime } from "../_libs/react+react-email__body.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-C6dflmcT.js
var import_jsx_runtime = require_jsx_runtime();
var LOCAL = [
	{
		item: "Project files",
		what: "SQLite project state, manifests, and stage snapshots.",
		retention: "Kept in the project folder you choose. Deleted when you delete the project.",
		plain: "The bookkeeping Trackdub needs to remember your work — which stages ran, what settings you used, and where your media lives. It sits inside the project folder you pick, and there is no hidden second copy."
	},
	{
		item: "Source media",
		what: "Original video/audio, proxies, and extracted stems.",
		retention: "Never uploaded. You choose the folder and can wipe it at any time.",
		plain: "The original files you drag in and any lightweight preview copies Trackdub makes to scrub through them. They stay where you put them, and you can delete them like any other file on your disk."
	},
	{
		item: "Transcripts & translations",
		what: "Editable script documents, glossaries, and speaker mappings.",
		retention: "Stored as local files. No cloud sync unless you configure it.",
		plain: "The editable script for both languages, your glossary, and the labels you gave each speaker. These are plain files in your project folder — you can back them up, diff them, or throw them out."
	},
	{
		item: "Voice references",
		what: "Short speaker clips used for voice cloning.",
		retention: "Stay on disk. Never used to train a shared model.",
		plain: "A few seconds of each speaker so Trackdub can voice them in the target language. Those clips are only used inside your project. They are not pooled with other users and they are not used to train any shared model."
	},
	{
		item: "Generated audio",
		what: "Per-line TTS output, mix stems, and exported deliverables.",
		retention: "Written to your project output folder. You own and control them.",
		plain: "Every generated voice line, mix stem, and final export goes to the output folder you chose. You keep them, move them, ship them — same as any file you rendered yourself."
	},
	{
		item: "Model cache",
		what: "Downloaded ONNX models and compiled engine caches.",
		retention: "Stored in the app data directory. Can be cleared in Preferences.",
		plain: "The models Trackdub downloads once so it does not have to fetch them every run, plus any GPU engines it compiles for your machine. You can wipe the cache from Preferences without touching your projects."
	}
];
var NEVER = [
	{
		item: "Source video or audio",
		why: "Decoding, analysis, and export happen locally.",
		plain: "Your raw media never gets uploaded. FFmpeg decodes it on your machine, the pipeline reads it on your machine, and the final render is written on your machine."
	},
	{
		item: "Transcripts and translations",
		why: "Local MT runs against your editable script by default.",
		plain: "The default translation stage runs locally, so your script stays with you. If you turn on a cloud translation provider, only the lines you routed to it are sent — and only then."
	},
	{
		item: "Voice references",
		why: "Speaker clips are used only for per-project voicing.",
		plain: "The reference clip you record or crop for a speaker is used to voice that speaker in that project. It is not shipped to Trackdub, not shared between projects, and not part of any training set."
	},
	{
		item: "Generated output",
		why: "Final mix and stems are written to your disk.",
		plain: "The dubbed video, mix, and stems land in your output folder. Nothing is copied to a server for review or storage."
	}
];
var OPTIN = [
	{
		item: "Cloud translation",
		what: "Source text for the lines you route to a hosted provider.",
		how: "Off by default. Enabled per project, per stage, in Settings.",
		plain: "If you decide a hosted translation service is better for a specific project, you can enable it for that project. Only the source text for the lines that stage handles is sent — no media, no voice, no other stages."
	},
	{
		item: "Cloud voice generation",
		what: "Target text and optional speaker reference for hosted TTS.",
		how: "Off by default. Enabled per project, per stage, in Settings.",
		plain: "Same idea for voicing. When you point the voice stage at a hosted TTS, Trackdub sends only what that provider needs — the target text and, if you chose to, a speaker reference — for the lines you queued."
	},
	{
		item: "Telemetry",
		what: "Anonymous crash reports and usage counters.",
		how: "Disabled on install. Turn on in Preferences if you want to help.",
		plain: "Trackdub does not phone home unless you turn telemetry on. If you do, it is anonymous crash reports and coarse usage counters — never your media, script, or project names."
	},
	{
		item: "Update checks",
		what: "App version and OS info to the update server.",
		how: "Checks on launch unless disabled. No media or project data is sent.",
		plain: "So Trackdub can tell you a new build exists, it asks the update server whether your version is current. That request contains your app version and OS — nothing about your projects."
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Principles, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoredLocally, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeverLeaves, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptIn, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, {}),
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
					label: "Privacy policy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 max-w-4xl font-serif text-5xl leading-[1.03] tracking-tight text-foreground sm:text-6xl",
					children: "Your media is yours. This page says so in plain language."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground",
					children: "Trackdub is a desktop app. It runs on your machine, reads media from folders you point it at, and writes output to folders you choose. Nothing about your projects is uploaded unless you explicitly turn on a cloud stage."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",
					children: [
						"This page is maintained by the Trackdub team to answer common questions about how the app handles your data. It mirrors the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#privacy",
							className: "border-b border-foreground/30 pb-0.5 text-foreground hover:border-accent hover:text-accent",
							children: "Privacy & retention"
						}),
						" ",
						"section on the main site with fuller explanations. It is not legal advice and it is not a certification of any kind."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
					children: "Last updated · 2026-07-23"
				})
			]
		})
	});
}
function Principles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "01",
					label: "Principles"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "Six rules the whole product is built around."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-14 grid gap-y-8 gap-x-12 md:grid-cols-2",
					children: [
						["Local-first is the default", "The pipeline runs on your CPU or GPU. We do not need a server to dub a video, and we do not route your files through one to work."],
						["No account required", "You do not sign up to use Trackdub. There is no user profile on our side because there is no server keeping one."],
						["Opt-in, per project, per stage", "If you enable a cloud translation or cloud voice provider, it applies to the specific project and stage you turned it on for — not to the whole app."],
						["Minimum data when you do opt in", "When a stage is cloud-backed, Trackdub sends only what that stage needs. Other stages, other lines, and your media stay local."],
						["You control retention", "Everything Trackdub writes lives in folders you chose. Delete the folder, delete the data. There is no hidden mirror."],
						["No training on your data", "Your media, transcripts, and voice references are not used to train shared models."]
					].map(([term, def]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border pt-5",
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
function StoredLocally() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "02",
					label: "Stored locally"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "What Trackdub writes to your disk."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground",
					children: "This is the exhaustive list. If it is not here, Trackdub is not writing it — and the pieces that are here go to folders you pick."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[720px] border-collapse text-left",
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
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: LOCAL.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
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
						] }, l.item)) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 space-y-10",
					children: LOCAL.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 border-t border-border pt-6 md:grid-cols-[220px_1fr] md:gap-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-[20px] leading-snug text-foreground",
							children: l.item
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] leading-relaxed text-muted-foreground",
							children: l.plain
						})]
					}, l.item))
				})
			]
		})
	});
}
function NeverLeaves() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "03",
					label: "Never leaves the machine"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "Data the app will not transmit, period."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground",
					children: [
						"The following categories are never sent to Trackdub or to any third party by the default pipeline. Turning on a cloud stage does not change these categories — see",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#optin",
							className: "border-b border-foreground/30 pb-0.5 text-foreground hover:border-accent hover:text-accent",
							children: "Opt-in only"
						}),
						" ",
						"for what an enabled cloud stage actually sends."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-10 md:grid-cols-2",
					children: NEVER.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-[22px] text-foreground",
								children: n.item
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-[12px] text-accent",
								children: n.why
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[15px] leading-relaxed text-muted-foreground",
								children: n.plain
							})
						]
					}, n.item))
				})
			]
		})
	});
}
function OptIn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "optin",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "04",
					label: "Opt-in only"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "The four things you can turn on. Nothing else phones home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground",
					children: "Each is off out of the box. Turning one on is a deliberate choice you make in Preferences or per project, and turning it off stops the transmission on the next run."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 space-y-10",
					children: OPTIN.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 border-t border-border pt-6 md:grid-cols-[240px_1fr] md:gap-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-[22px] text-foreground",
							children: o.item
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent",
							children: o.how
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] leading-relaxed text-muted-foreground",
							children: o.what
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[15px] leading-relaxed text-foreground",
							children: o.plain
						})] })]
					}, o.item))
				})
			]
		})
	});
}
function Details() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "05",
					label: "Details"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "Housekeeping."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12",
					children: [
						["Cookies and analytics on this website", "The trackdub.com marketing site does not set advertising cookies. If we add basic, privacy-respecting analytics later, we will list the provider here and describe what it collects."],
						["Children", "Trackdub is a professional tool and is not directed at children under 13. We do not knowingly collect data from children."],
						["Uninstalling", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Your projects, source media, and generated output live in folders you chose, so they stay where they are until you delete them. The app data directory — model cache, preferences, and logs — can be removed during uninstall or manually from",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "rounded bg-surface px-1.5 py-0.5 font-mono text-[12px] text-foreground",
								children: "%LOCALAPPDATA%\\Trackdub"
							}),
							" ",
							"on Windows."
						] })],
						["Third parties", "Trackdub itself does not share your data with third parties. If you turn on a cloud translation or cloud voice provider, that provider receives the minimum data described above and handles it under their own terms — we recommend reviewing them before enabling the stage."],
						["Changes to this policy", "When we change how Trackdub handles data, we will update this page and move the “Last updated” date. Material changes will be called out on the site."]
					].map(([q, a], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `grid gap-4 py-6 md:grid-cols-[240px_1fr] md:gap-10 ${i > 0 ? "border-t border-border" : ""}`,
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
					n: "06",
					label: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl",
					children: "Questions about how Trackdub handles a specific case?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground",
					children: [
						"Write to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:privacy@trackdub.com",
							className: "border-b border-foreground/40 pb-0.5 text-foreground hover:border-accent hover:text-accent",
							children: "privacy@trackdub.com"
						}),
						". We answer as the maintainers of the app, not as lawyers."
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
export { PrivacyPage as component };
