import { i as PUBLISHED, n as FAQS, r as MODIFIED, t as CHECKLIST_ABSOLUTE_URL } from "./ai-dubbing-guide-DfgosdMd.mjs";
import { n as require_jsx_runtime } from "../_libs/react+react-email__body.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-dubbing-guide-PNTecrog.js
var import_jsx_runtime = require_jsx_runtime();
function GuidePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 py-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mb-10 text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-muted-foreground hover:text-foreground",
					children: "← Back to Trackdub"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "space-y-8 leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
								children: "Guide · Dubbing AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-4xl md:text-5xl leading-[1.05]",
								children: "Dubbing AI in 2026: a practical guide to local-first AI video dubbing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-muted-foreground",
								children: "Everything that happens between a source clip and a finished dub — how modern AI video dubbing works stage by stage, and why serious teams are moving AI dubbing software off cloud services and onto local workstations."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"Published ",
									PUBLISHED,
									" · Updated ",
									MODIFIED,
									" · 8 min read"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl",
							children: "What is dubbing AI?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dubbing AI is a chain of models, not a single one. A source video is transcribed, translated, cut into speaker turns, revoiced with synthesized speech, and mixed back against the original music and effects. AI video dubbing tools stitch these stages into one pipeline; the quality of the finished dub is the quality of the weakest link. Every stage has its own failure modes — mistranscribed names, off-tone translations, the wrong speaker on a line, a TTS take that overruns the shot." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl",
							children: "How AI video dubbing works: the six stages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "list-decimal space-y-3 pl-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Ingest." }), " Demux the source, normalize sample rate, keep the original picture untouched."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "AI transcription (ASR)." }), " Turn source speech into timestamped text. This is where names, jargon, and overlapping speech get mangled."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "AI translation." }), " Convert the transcript into the target language with context — idioms, register, on-screen text."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Diarization & speaker assignment." }), " Group turns by speaker so the right voice reads the right lines."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "AI voice dubbing (TTS)." }), " Synthesize each line in a voice that fits the speaker and the timing budget of the shot."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Mix & preview." }), " Duck the original dialogue, keep music and effects, and render a preview you can actually judge."] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl",
								children: "Cloud AI dubbing software vs. local-first workstations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cloud AI dubbing services are convenient for one-off clips. For real work — a series, a client backlog, footage under NDA — the tradeoffs against a local AI dubbing tool add up quickly." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-sm border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "bg-muted/40 text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-3 border-b border-border",
												children: "Concern"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-3 border-b border-border",
												children: "Cloud AI dubbing service"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-3 border-b border-border",
												children: "Local AI dubbing workstation"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
										className: "align-top",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "Control"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "One button, opaque pipeline"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "Every stage inspectable and re-runnable"
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "Fixing one line"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "Usually re-runs everything"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "Regenerate that line, keep the rest"
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "Cost model"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "Per-minute, forever"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "One-time license, unlimited local runs"
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "Data"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "Media uploaded to a third party"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3 border-b border-border",
													children: "Stays on your machine unless you opt in"
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3",
													children: "Reliability"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3",
													children: "Fails whole jobs on transient errors"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-3",
													children: "Resumable jobs, typed failure classes"
												})
											] })
										]
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl",
								children: "Why local AI dubbing wins for serious work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Modern consumer GPUs run the entire dubbing AI stack fast enough for production. DirectML and TensorRT RTX push ASR and AI voice dubbing well past real-time on a mid-range card; CPU fallback keeps the pipeline usable on laptops. Once inference lives on your hardware, three things change:" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc space-y-2 pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Sovereignty." }), " NDA footage never leaves the machine. There's no \"we sent it to the vendor\" conversation."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Cost." }), " Per-minute billing disappears. A season of episodes costs the same as a single clip."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Iteration." }), " You can rerun a single stage in seconds instead of waiting on a queue."] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl",
							children: "What to look for in an AI dubbing tool"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "list-disc space-y-2 pl-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Every stage is editable, not just the final output." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fixing one line doesn't invalidate the rest of the project." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Jobs are resumable after crashes, OOMs, or cancellations." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Errors name the stage and the cause, not a generic \"failed\"." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Local acceleration is real — DirectML, TensorRT RTX, or equivalent — with an honest CPU fallback." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Stems (vocals, music, effects) can be separated and re-mixed." })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl",
								children: "How to dub a video with AI in Trackdub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Trackdub is a Windows desktop workstation built around this philosophy: dubbing AI as a pipeline you drive, not a service you submit to. Drop in a clip, pick a target language, and Trackdub runs ingest, ASR, translation, diarization, AI voice dubbing, and mix as separate, inspectable stages. Fix one line, reassign a speaker, swap a voice — the rest of the project stays intact. Media stays local unless you explicitly opt a stage into a cloud model." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "underline underline-offset-4",
								children: "See the full workflow on the Trackdub homepage →"
							}) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "checklist",
						className: "space-y-4 rounded-md border border-border bg-muted/30 p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
								children: "Free download · PDF · 2 pages"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl",
								children: "Local-First Dubbing Workflow Checklist"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A printable, stage-by-stage checklist for shipping AI-dubbed video without giving up control. Eight sections covering ingest, ASR, translation, diarization, TTS, mix, reliability, and privacy — every item is a concrete thing to verify before you call a pipeline production-ready." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc space-y-1 pl-5 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Audit an existing dubbing AI pipeline against a fixed spec." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Spec a new local AI dubbing workflow from scratch." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Free to share and adapt with attribution." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CHECKLIST_ABSOLUTE_URL,
									download: true,
									type: "application/pdf",
									"aria-label": "Download the Local-First Dubbing Workflow Checklist (PDF, 2 pages)",
									className: "inline-flex items-center gap-2 rounded-md border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90",
									children: "Download the checklist (PDF)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CHECKLIST_ABSOLUTE_URL,
									target: "_blank",
									rel: "noopener",
									type: "application/pdf",
									"aria-label": "Preview the checklist PDF in a new tab",
									className: "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted/50",
									children: "Preview in browser →"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"Linking to this checklist? Point to",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "text-foreground",
										children: "trackdub.com/guides/ai-dubbing-guide#checklist"
									}),
									"."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-4",
						id: "faq",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl",
							children: "Dubbing AI FAQ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "divide-y divide-border border-t border-b border-border",
							children: FAQS.map(({ q, a }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: "cursor-pointer list-none font-medium flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "text-muted-foreground transition-transform group-open:rotate-45",
										children: "+"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground",
									children: a
								})]
							}, q))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl",
							children: "Related terms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"People searching for this guide also look for: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ai dubbing" }),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ai video dubbing" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ai dubbing software" }),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ai voice dubbing" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ai dubbing tool" }),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "local ai dubbing" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "dub video with ai" }),
								", and",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ai dubbing free" }),
								". This guide covers the same workflow under all of those names — it's one pipeline with many labels."
							]
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { GuidePage as component };
