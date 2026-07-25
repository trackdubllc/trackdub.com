globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/ai-dubbing-guide-k2_q_poN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d50-wFNjiiG8bli1ilL1uUV++0ZwRJk\"",
		"mtime": "2026-07-25T15:37:01.129Z",
		"size": 11600,
		"path": "../public/assets/ai-dubbing-guide-k2_q_poN.js"
	},
	"/assets/changelog-Dpo5vMY2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa6-VHLDtD8KvM7Zm9m8FYQU+SknxM4\"",
		"mtime": "2026-07-25T15:37:01.129Z",
		"size": 4006,
		"path": "../public/assets/changelog-Dpo5vMY2.js"
	},
	"/assets/docs-DjmW3MUc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22bf-z7d0HPaT3alQLpSr8NGRJrWELmA\"",
		"mtime": "2026-07-25T15:37:01.129Z",
		"size": 8895,
		"path": "../public/assets/docs-DjmW3MUc.js"
	},
	"/assets/index-DKqYAFvx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f870-xK6KmHAOGGisvaxQrJN8PpQzbKk\"",
		"mtime": "2026-07-25T15:37:01.129Z",
		"size": 391280,
		"path": "../public/assets/index-DKqYAFvx.js"
	},
	"/assets/pricing-HdSldoqv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b05-0WPQTOokjUp1tFMgoA7ObSkCvEs\"",
		"mtime": "2026-07-25T15:37:01.129Z",
		"size": 6917,
		"path": "../public/assets/pricing-HdSldoqv.js"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"41f-bZmrDP4+rwz03jsvo6tqHn2fS6o\"",
		"mtime": "2026-07-25T15:37:02.060Z",
		"size": 1055,
		"path": "../public/llms.txt"
	},
	"/assets/privacy-D7p_WwDd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"423b-tuZrrkXjjqtpqHieixPdZLguML4\"",
		"mtime": "2026-07-25T15:37:01.129Z",
		"size": 16955,
		"path": "../public/assets/privacy-D7p_WwDd.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"45-bX3KvWmnHwBsa4vQlhVkmPeomqo\"",
		"mtime": "2026-07-25T15:37:02.060Z",
		"size": 69,
		"path": "../public/robots.txt"
	},
	"/assets/styles-BG_GfMwI.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1d968-K9uLtVZ/NS/pMYi5Cr6wJiLNkrg\"",
		"mtime": "2026-07-25T15:37:01.129Z",
		"size": 121192,
		"path": "../public/assets/styles-BG_GfMwI.css"
	},
	"/assets/routes-QuP8huv0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25e71-ldxc2jvwmxciaUizmEB22gJZnVo\"",
		"mtime": "2026-07-25T15:37:01.129Z",
		"size": 155249,
		"path": "../public/assets/routes-QuP8huv0.js"
	},
	"/downloads/trackdub-local-first-dubbing-checklist.pdf": {
		"type": "application/pdf",
		"etag": "\"1588-z2JLCbKj0qLNMZ0KLzw6aHcBxWE\"",
		"mtime": "2026-07-25T15:37:02.059Z",
		"size": 5512,
		"path": "../public/downloads/trackdub-local-first-dubbing-checklist.pdf"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-25T15:37:02.060Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/fonts/ibm-plex-sans-400-italic.woff2": {
		"type": "font/woff2",
		"etag": "\"5f24-ek5DKhAxRvDt8RYGy0RMfMdE4vo\"",
		"mtime": "2026-07-25T15:37:02.059Z",
		"size": 24356,
		"path": "../public/fonts/ibm-plex-sans-400-italic.woff2"
	},
	"/screenshots/app-shell-early-build.png": {
		"type": "image/png",
		"etag": "\"17c0a-DAI/lMnUeMI+pUy9a+dFYYW0yA8\"",
		"mtime": "2026-07-25T15:37:02.059Z",
		"size": 97290,
		"path": "../public/screenshots/app-shell-early-build.png"
	},
	"/fonts/ibm-plex-sans-400.woff2": {
		"type": "font/woff2",
		"etag": "\"583c-JIKJdEuBOmpyScxB1Wj6xAuBzn8\"",
		"mtime": "2026-07-25T15:37:02.059Z",
		"size": 22588,
		"path": "../public/fonts/ibm-plex-sans-400.woff2"
	},
	"/fonts/ibm-plex-sans-500.woff2": {
		"type": "font/woff2",
		"etag": "\"5e78-TULHhbZFMSdm0F//zuV4e+2ICl8\"",
		"mtime": "2026-07-25T15:37:02.059Z",
		"size": 24184,
		"path": "../public/fonts/ibm-plex-sans-500.woff2"
	},
	"/fonts/ibm-plex-sans-700.woff2": {
		"type": "font/woff2",
		"etag": "\"5930-Pmlqn+OBqLdhVkcPEaszz5ECy6Y\"",
		"mtime": "2026-07-25T15:37:02.060Z",
		"size": 22832,
		"path": "../public/fonts/ibm-plex-sans-700.woff2"
	},
	"/fonts/ibm-plex-sans-600.woff2": {
		"type": "font/woff2",
		"etag": "\"5ebc-kNnCJpfajLJyKwke0lTtYXoO10o\"",
		"mtime": "2026-07-25T15:37:02.060Z",
		"size": 24252,
		"path": "../public/fonts/ibm-plex-sans-600.woff2"
	},
	"/fonts/instrument-serif-400-italic.woff2": {
		"type": "font/woff2",
		"etag": "\"5670-JObJnKCLHlrMks8QbFhvSR7RUVE\"",
		"mtime": "2026-07-25T15:37:02.059Z",
		"size": 22128,
		"path": "../public/fonts/instrument-serif-400-italic.woff2"
	},
	"/fonts/instrument-serif-400.woff2": {
		"type": "font/woff2",
		"etag": "\"5228-N930ZbvMJSd2o33PKBeaPKWQNjs\"",
		"mtime": "2026-07-25T15:37:02.059Z",
		"size": 21032,
		"path": "../public/fonts/instrument-serif-400.woff2"
	},
	"/fonts/jetbrains-mono-500.woff2": {
		"type": "font/woff2",
		"etag": "\"5548-NcKnK3WfWhmDT/Dd1/lKnL5VeGA\"",
		"mtime": "2026-07-25T15:37:02.060Z",
		"size": 21832,
		"path": "../public/fonts/jetbrains-mono-500.woff2"
	},
	"/fonts/jetbrains-mono-400.woff2": {
		"type": "font/woff2",
		"etag": "\"52b0-OuYhUYIQ5ljyzsko4MOu3m0M7+I\"",
		"mtime": "2026-07-25T15:37:02.060Z",
		"size": 21168,
		"path": "../public/fonts/jetbrains-mono-400.woff2"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_NfYLD_ = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_NfYLD_
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
