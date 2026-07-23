DROP POLICY IF EXISTS "anon can insert waitlist emails" ON public.waitlist_emails;
CREATE POLICY "anon can insert waitlist emails" ON public.waitlist_emails
  FOR INSERT TO anon
  WITH CHECK (
    email IS NOT NULL
    AND length(email) BETWEEN 3 AND 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );