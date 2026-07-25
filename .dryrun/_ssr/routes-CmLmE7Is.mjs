//#region node_modules/.nitro/vite/services/ssr/assets/routes-CmLmE7Is.js
var FAQ_ITEMS = [
	{
		q: "Does my video get uploaded anywhere?",
		a: "No. Trackdub runs the whole pipeline on your machine by default. Cloud endpoints exist for teams that want them, but they're opt-in per project and per stage — never implicit."
	},
	{
		q: "What happens to my data if I uninstall?",
		a: "Your projects, source media, and generated output live in folders you chose, so they stay where they are until you delete them. The app data directory — model cache, preferences, and logs — can be removed during uninstall or manually from %LOCALAPPDATA%\\Trackdub."
	},
	{
		q: "Can I use it commercially?",
		a: "Yes, on every tier — including Free. Free exports carry a small watermark and cap at 5 minutes; Pro removes both. Every bundled model is commercial-safe by manifest, so nothing research-only ever loads."
	},
	{
		q: "How is the voice cloning handled?",
		a: "Each detected speaker gets one short reference clip you can review or replace. The voicing stage uses that reference — one voice per person, not one 'AI voice' for the whole video. References stay on your disk."
	},
	{
		q: "What if the ASR gets a word wrong?",
		a: "Fix it in the transcript. The translation for that line invalidates, the voicing for that line queues for a regen, and nothing else rebuilds. Every stage declares its inputs, so edits propagate exactly as far as they need to."
	},
	{
		q: "Do I need a GPU?",
		a: "No, but it helps. Trackdub runs on CPU, DirectML, CUDA, CoreML, or Windows ML, with per-stage fallback if a provider isn't available. Integrated graphics land in the low multiples of realtime; a discrete GPU well beyond that — exact numbers publish via DubBench ahead of launch."
	},
	{
		q: "Can I automate it?",
		a: "Yes — the CLI ships in every tier, Free included. The same pipeline the app runs is scriptable for batch localization, CI, or an on-prem REST worker via the SDK."
	}
];
//#endregion
export { FAQ_ITEMS as t };
