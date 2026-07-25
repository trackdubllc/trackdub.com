-- Cloudflare D1 schema for the public email waitlist.
-- Mirrors the constraints the old Supabase RLS policy enforced
-- (email not null, length 3-320, basic regex). Email is normalised to
-- lowercase in the route and stored with NOCASE collation so case
-- variants ("Foo@bar.com" vs "foo@bar.com") collapse to a single row
-- and the route's ON CONFLICT(email) clause stays valid.

CREATE TABLE IF NOT EXISTS waitlist_emails (
  email       TEXT PRIMARY KEY COLLATE NOCASE,
  interest    TEXT,
  created_at  TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_waitlist_emails_created_at
  ON waitlist_emails (created_at);
