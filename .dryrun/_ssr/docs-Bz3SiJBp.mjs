import { n as require_jsx_runtime } from "../_libs/react+react-email__body.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/docs-Bz3SiJBp.js
var import_jsx_runtime = require_jsx_runtime();
function DocsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quickstart, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stages, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Providers, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifest, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreDocs, {})
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
					label: "Docs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 max-w-3xl font-serif text-5xl leading-[1.03] tracking-tight text-foreground sm:text-6xl",
					children: "How the pipeline actually works."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground",
					children: "This is an early set of docs — CLI usage, pipeline stages, execution providers, and the model manifest. A full reference lands with v1."
				})
			]
		})
	});
}
function Pre({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "overflow-x-auto border border-border bg-surface p-4 font-mono text-[13px] leading-relaxed text-foreground",
		children
	});
}
function Quickstart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "quickstart",
		className: "border-b border-border bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "01",
					label: "CLI quickstart"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "The CLI runs the same pipeline the desktop app runs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground",
					children: "No separate headless engine, no feature gap — same stages, same models, scriptable for batch localization or CI. Included on every tier, Free included."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pre, { children: `trackdub dub --media ./video.mp4 --target-language es` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pre, { children: `trackdub dub --media ./video.mp4 --target-language de \\
  --model asr:whisper-small --model tts:kokoro-onnx` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pre, { children: `trackdub dub --preset my-preset --input-dir ./videos` })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
					children: "Re-running the same project skips already-completed stages — only what changed reruns."
				})
			]
		})
	});
}
function Stages() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "02",
					label: "Pipeline stages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "Six stages. Each one a real, inspectable artifact."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 border-t border-border",
					children: [
						[
							"01",
							"Ingest",
							"Probe the container, extract audio, detect scenes and speech."
						],
						[
							"02",
							"Transcribe",
							"Source-language ASR with word-level timestamps."
						],
						[
							"03",
							"Translate",
							"Per-line MT against an editable target script and glossary."
						],
						[
							"04",
							"Diarize",
							"Cluster speakers, attach a voice reference to each."
						],
						[
							"05",
							"Voice",
							"Per-speaker zero-shot TTS. Any single line can regenerate on its own."
						],
						[
							"06",
							"Mix",
							"Align to source timing, duck under preserved music/SFX, mux the export."
						]
					].map(([n, name, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-12 gap-x-4 border-b border-border py-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
								children: n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-3 font-serif text-[20px] text-foreground",
								children: name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-8 text-[14px] leading-relaxed text-muted-foreground",
								children: body
							})
						]
					}, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
					children: [
						"Full interactive walkthrough on the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#pipeline",
							className: "text-foreground hover:text-accent",
							children: "homepage"
						}),
						"."
					]
				})
			]
		})
	});
}
function Providers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "03",
					label: "Execution providers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "Fallback is per-stage, not per-project."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground",
					children: "A missing provider on one stage doesn't disable the rest of the pipeline — each stage picks the fastest provider your hardware supports and falls back on its own."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px bg-border md:grid-cols-3",
					children: [
						[
							"TensorRT RTX",
							"Windows · RTX 30/40/50",
							"Auto-selected on supported GPUs."
						],
						[
							"DirectML",
							"Windows · any DX12 GPU",
							"Broadest Windows GPU coverage, incl. Intel Arc, AMD Radeon."
						],
						[
							"CUDA",
							"Windows / Linux · NVIDIA",
							"Used on non-RTX NVIDIA cards."
						],
						[
							"CoreML",
							"macOS · Apple Silicon",
							"Neural Engine + GPU, auto-selected on M-series."
						],
						[
							"CPU (ONNX Runtime)",
							"All platforms",
							"Always available. No GPU required to complete a project."
						]
					].map(([name, platform, note]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-[20px] text-foreground",
								children: name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
								children: platform
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[14px] leading-relaxed text-muted-foreground",
								children: note
							})
						]
					}, name))
				})
			]
		})
	});
}
function Manifest() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "manifest",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "04",
					label: "Model manifest"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl",
					children: "Every bundled model, declared — not implied."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "rounded-sm bg-surface px-1.5 py-0.5 font-mono text-[14px]",
							children: "bundled-models.manifest.json"
						}),
						" ",
						"lists every model Trackdub ships: task, license, whether commercial use is allowed, and a checksum. No research-only or non-commercial-only checkpoint ships in any tier."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4",
					children: [
						"VAD",
						"ASR",
						"Diarization",
						"Translation",
						"TTS",
						"Source separation",
						"Forced alignment",
						"Lip sync"
					].map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-background p-4 font-mono text-[12px] text-foreground",
						children: task
					}, task))
				})
			]
		})
	});
}
function MoreDocs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 text-center sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionNumber, {
					n: "05",
					label: "More"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl",
					children: "Full API and SDK reference lands with v1."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground",
					children: [
						"Building something against the pipeline now? Write to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hello@trackdub.com?subject=Trackdub%20SDK",
							className: "border-b border-foreground/40 pb-0.5 text-foreground hover:border-accent hover:text-accent",
							children: "hello@trackdub.com"
						}),
						" ",
						"and we'll loop you in as it ships."
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
export { DocsPage as component };
