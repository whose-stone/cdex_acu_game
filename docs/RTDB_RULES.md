# Firebase Realtime Database Rules (Email + Gmail)

This repository now includes `firebase/rtdb.rules.json` for the RTDB instance:

- `https://cdex-acu-game-default-rtdb.firebaseio.com/`

## What these rules enforce

- Default deny at root (`.read`/`.write` false).
- All student access requires authenticated users with verified email.
- Student records are owner-only by `auth.uid`.
- Admin writes for `levels` and `questions` require `users/{uid}/role = admin`.
- `admin` subtree additionally requires a Gmail address (`@gmail.com`) plus admin role.

## Why both email and gmail checks are included

- **Email-based checks** are used broadly for all authenticated users.
- **Gmail-domain checks** are layered on high-privilege admin subtree access.

## Deploy commands

```bash
firebase use <your-project-id>
firebase database:set /.settings/rules firebase/rtdb.rules.json
```

Or via `firebase.json` rules binding if your CLI setup already maps RTDB rules files.

## Important notes

- These rules rely on Firebase Auth email/password sign-in and `email_verified` claims.
- The `users/{uid}/role` value should be managed by secure admin workflow (preferably Cloud Functions).
- If ACU later uses a non-gmail domain for admins, replace the regex in `admin` rules.
