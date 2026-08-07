# trackdub-dev-proxy

A tiny Cloudflare Worker that mirrors **trackdub.com** under a separate
hostname (e.g. `trackdub.dev`) so external platforms — such as OpenAI
**ChatGPT Sites** — can serve a copy of the marketing site without touching
the canonical deployment.

- Forwards path, query, method, and body to the upstream origin.
- Rewrites same-site redirects to stay on the mirror; passes external
  redirects (GitHub, etc.) through untouched.
- Sets `x-robots-tag: noindex, nofollow` and
  `x-trackdub-mirror: chatgpt-sites` on every response so search engines
  keep `trackdub.com` canonical.

## Layout

| File             | Purpose                                                  |
| ---------------- | -------------------------------------------------------- |
| `index.js`       | The Worker (default export is the `fetch` handler)       |
| `proxy.test.mjs` | Unit tests (node built-ins only, no dependencies)        |
| `build.mjs`      | Copies the worker into `dist/server/index.js` for deploy |
| `wrangler.jsonc` | Standalone deploy config for this worker                 |

This lives **entirely inside `sites-proxy/`** — it does not modify the app's
`package.json`, `wrangler.jsonc`, or any source. The two deployments are
fully independent.

## Test

```sh
node --test sites-proxy/proxy.test.mjs
```

## Build & deploy

```sh
node sites-proxy/build.mjs            # emits dist/server/index.js
npx wrangler deploy --config sites-proxy/wrangler.jsonc
npx wrangler dev --config sites-proxy/wrangler.jsonc   # local preview
```

`dist/` is already covered by the repo's `.gitignore`.

## Configuration

The upstream origin defaults to `https://trackdub.com`. To point the mirror
at a different origin (e.g. a staging deployment), set the `UPSTREAM_ORIGIN`
variable in `sites-proxy/wrangler.jsonc` under `vars`.

## Notes

- Redirect rewriting only rewrites hosts that match the upstream origin
  (bare and `www.` variants); everything else is preserved.
- The worker reads only `UPSTREAM_ORIGIN` from `env` — the Sites
  `(request, env, ctx)` signature is otherwise ignored.
