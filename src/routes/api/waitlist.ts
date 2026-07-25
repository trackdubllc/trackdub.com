import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

type CloudflareEnv = {
  WAITLIST_DB?: {
    prepare: (sql: string) => {
      bind: (...args: unknown[]) => { run: () => Promise<unknown> };
    };
  };
  TURNSTILE_SECRET?: string;
};

const bodySchema = z.object({
  email: z.string().trim().min(3).max(320).email(),
  turnstileToken: z.string().min(1),
  interest: z.enum(["personal", "pro", "studio"]).optional(),
});

async function verifyTurnstile(token: string, secret: string, remoteIp: string) {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token, remoteip: remoteIp }),
  });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

export const Route = createFileRoute("/api/waitlist")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const env = (globalThis as { __env__?: CloudflareEnv }).__env__;

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid request body" }, { status: 400 });
        }

        const parsed = bodySchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid email" },
            { status: 400 },
          );
        }
        const { email, turnstileToken, interest } = parsed.data;

        const turnstileSecret = env?.TURNSTILE_SECRET;
        if (!turnstileSecret) {
          console.error("[waitlist] Missing TURNSTILE_SECRET binding");
          return Response.json({ ok: false, error: "Server misconfigured" }, { status: 500 });
        }

        const remoteIp = request.headers.get("cf-connecting-ip") ?? "";
        const human = await verifyTurnstile(turnstileToken, turnstileSecret, remoteIp);
        if (!human) {
          return Response.json({ ok: false, error: "Verification failed" }, { status: 403 });
        }

        const db = env?.WAITLIST_DB;
        if (!db) {
          console.error("[waitlist] Missing WAITLIST_DB binding");
          return Response.json({ ok: false, error: "Server misconfigured" }, { status: 500 });
        }

        try {
          await db
            .prepare(
              `INSERT INTO waitlist_emails (email, interest) VALUES (?, ?)
               ON CONFLICT(email) DO UPDATE SET interest = excluded.interest
               WHERE excluded.interest IS NOT NULL`,
            )
            .bind(email.toLowerCase(), interest ?? null)
            .run();
        } catch (err) {
          console.error("[waitlist] D1 insert failed", err);
          return Response.json({ ok: false, error: "Could not save email" }, { status: 500 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
