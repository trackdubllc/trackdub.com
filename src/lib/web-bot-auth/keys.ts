import { signerFromJWK } from "web-bot-auth/crypto";

import publicJwk from "./public-jwk.json";

export type WebBotAuthEnv = {
  WEB_BOT_AUTH_PRIVATE_JWK?: string;
};

export type Ed25519PublicJwk = {
  kty: "OKP";
  crv: "Ed25519";
  x: string;
};

export const DIRECTORY_PATH = "/.well-known/http-message-signatures-directory";
export const DIRECTORY_MEDIA_TYPE = "application/http-message-signatures-directory+json";
export const SIGNATURE_AGENT_URI = `https://trackdub.com${DIRECTORY_PATH}`;
export const SIGNATURE_AGENT_HEADER_VALUE = `sig1="${SIGNATURE_AGENT_URI}";type=directory`;

const PRODUCTION_PUBLIC_JWK = publicJwk as Ed25519PublicJwk;

let ephemeralPrivateJwk: JsonWebKey | undefined;

export function publicJwkFromPrivate(jwk: JsonWebKey): Ed25519PublicJwk {
  if (jwk.kty !== "OKP" || jwk.crv !== "Ed25519" || typeof jwk.x !== "string") {
    throw new Error("Web Bot Auth key must be an Ed25519 OKP JWK with an x parameter");
  }
  return { kty: "OKP", crv: "Ed25519", x: jwk.x };
}

export function normalizeSigningJwk(jwk: JsonWebKey): JsonWebKey {
  const pub = publicJwkFromPrivate(jwk);
  if (typeof jwk.d !== "string") {
    throw new Error("WEB_BOT_AUTH_PRIVATE_JWK must include the Ed25519 private d parameter");
  }
  return {
    kty: pub.kty,
    crv: pub.crv,
    x: pub.x,
    d: jwk.d,
    alg: "EdDSA",
  };
}

export async function generateEd25519PrivateJwk(): Promise<JsonWebKey> {
  const pair = await crypto.subtle.generateKey("Ed25519", true, ["sign", "verify"]);
  return normalizeSigningJwk(await crypto.subtle.exportKey("jwk", pair.privateKey));
}

function parsePrivateJwk(raw: string): JsonWebKey {
  const parsed: unknown = JSON.parse(raw);
  if (parsed === null || typeof parsed !== "object") {
    throw new Error("WEB_BOT_AUTH_PRIVATE_JWK must be a JSON object");
  }
  return parsed as JsonWebKey;
}

function envWithSecret(env?: WebBotAuthEnv): WebBotAuthEnv | undefined {
  if (env?.WEB_BOT_AUTH_PRIVATE_JWK?.trim()) return env;
  return (globalThis as { __env__?: WebBotAuthEnv }).__env__;
}

export async function loadSigningJwk(env?: WebBotAuthEnv): Promise<JsonWebKey> {
  const configured = envWithSecret(env)?.WEB_BOT_AUTH_PRIVATE_JWK?.trim();
  if (configured) return normalizeSigningJwk(parsePrivateJwk(configured));
  if (!ephemeralPrivateJwk) {
    ephemeralPrivateJwk = await generateEd25519PrivateJwk();
  }
  return ephemeralPrivateJwk;
}

export async function loadSigner(env?: WebBotAuthEnv) {
  return signerFromJWK(await loadSigningJwk(env));
}

export async function directoryJwks(env?: WebBotAuthEnv): Promise<{ keys: Ed25519PublicJwk[] }> {
  const signing = await loadSigningJwk(env);
  return { keys: [publicJwkFromPrivate(signing)] };
}

export function productionPublicJwk(): Ed25519PublicJwk {
  return PRODUCTION_PUBLIC_JWK;
}
