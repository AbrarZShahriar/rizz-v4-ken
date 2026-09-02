# Security

## Supported status

Rizz is a historical prototype, not a production service. The repository does
not operate a public backend and does not provide security updates on a fixed
schedule.

## Reporting a vulnerability

Use GitHub's [private vulnerability reporting
form](https://github.com/AbrarZShahriar/rizz-v4-ken/security/advisories/new).
Include the affected file or component, the observed impact, and reproduction
steps when possible. Do not include credentials or personal data in a public
issue. If the form is unavailable, email `a.zshahriar@gmail.com`.

## Supabase deployment boundary

Each operator supplies their own Supabase project. Values named
`EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY` are bundled
into the client application and must be treated as public. Never configure the
application with a Supabase secret or `service_role` key.

The repository does not contain an authoritative database migration. Before a
deployment, create the required schema, enable Row Level Security on every
client-accessible table, and test that users cannot read or change another
user's rows. Historical SQL fragments under `docs/` are not a substitute for
that verification.
