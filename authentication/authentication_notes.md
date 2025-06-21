# Authentication Notes (only theory)

> Auth = Protocols/Standards + Providers + Libraries + Strategies/Mechanisms

1. Factors (what you know, have, are, and do)
   - what you know (knowledge)
     - password, PIN, security questions

   - what you have (possession)
     - OTP (SMS, email), magic links, TOTP (authenticator app), hardware token

   - what you are (inherence/biometric)
     - fingerprint, iris/retina, face, voice

   - where are you / what you do (behavioural / contextual / heuristic)
     - IP geolocation, device fingerprint, time of login, typing patterns

2. Protocols / Standards (foundations)
   - Session
     - stateful
     - cookie-based (stored on client, validated on server)

   - JWT (JSON Web Token)
     - stateless
     - usage - APIs, SPAs

   - OAuth 2.0 (Authorization)
     - delegated access
     - Login with Google, GitHub, ...
     - PKCE (Proof Key for Code Exchange) – for mobile/SPAs
     - Token Introspection / Revocation (OAuth2) – important in secured APIs

   - OpenID Connect (OIDC) (Authentication)
     - identity layer on top of OAuth2
     - OIDC ID token – contains user identity claims

   - SAML 2.0
     - XML-based Single Sign-On (SSO)
     - usage - enterprise systems

   - FIDO2 / WebAuthn
     - hardware-based, biometric
     - passwordless
     - uses public-private key cryptography

   - LDAP / Kerberos
     - traditional enterprise directory protocols
     - LDAP – read directory info
     - Kerberos – ticket-based SSO

3. Providers / Tools / Services (managed providers / auth platforms / hosted solutions)
   - Auth0 (Enterprise-grade auth with rules and hooks)
   - Clerk (UI-first, modern auth for frontend teams)
   - Firebase (Scalable auth with Firebase services)
   - Supabase Auth (Firebase alternative, works with Postgres)
   - AWS Cognito (Cloud-native auth solution for AWS apps)
   - Keycloak (open-source IAM)
   - Okta (enterprise-grade identity as a service)
   - Descope (modern UI-first passwordless )

4. Libraries
   - JWT & Session
     - `jsonwebtoken` - Sign/verify JWTs (low-level)
     - `iron-session` / `cookie-session` - Session management with cookies
   - Auth frameworks
     - `passport.js` - Plugin-based strategy system
     - `next-auth` - All-in-one auth for Next.js (OAuth + JWT + Sessions)
     - `auth.js` (formerly Lucia) - Framework-agnostic, modern auth library
   - OAuth client libs - `simple-oauth2`, `grant`, ...

5. Strategies / Approaches / Mechanisms
   - Custom Auth (build your own with JWT/sessions)
     - Session-based Auth (stateful, secure via cookies (HTTP-only))
     - Token-based Auth (JWT, stateless)

   - Passwordless
     - Magic Links / OTP (email login, phone auth)
     - WebAuthn (FIDO2, biometric / hardware)

   - Federated Auth
     - OAuth-based Login (Social login via third parties (Google, GitHub))
     - OpenID Connect (for identity)
     - SAML (enterprise SSO)
     - Just-in-Time Registration – sign in + sign up via social login

   - Managed Auth (Auth0, Firebase, Clerk, Cognito)

   - Factor Strategies
     - SFA (Single-Factor)
     - MFA (Multi-Factor)
     - Adaptive Auth (context-based, risk-based)
     - Step-up Auth (re-auth for sensitive actions)
     - Device-based auth (persistent device ID with fallback)

6. Security Practices
   - Bot & Abuse Protection
     - CAPTCHA / Bot Detection
     - Rate Limiting / Account Lockout
       - Brute Force Detection

   - Session & Token Security
     - CSRF Protection (essential with cookies)
     - Token expiry and rotation (access & refresh)
     - Replay protection (esp. with JWTs)
     - Session Invalidation

   - Secure Storage & Transport
     - HTTP-only Cookies vs LocalStorage (secure storage)
     - SameSite cookie attribute (modern cookie protection)
     - HSTS (force HTTPS)

   - Input Sanitization
     - XSS Protection (sanitize input/output)

   - Device Trust & Identity
     - Device fingerprinting
     - "Remember Me" / Device Trust Management

   - Verification
     - Email verification flow
     - 2FA setup verification

7. Considerations
   - Access control models
     - ABAC (attribute-based access control)
     - RBAC (Role-Based Access Control)

   - Account Management
     - Account recovery flows (forgot password, identity verification)
     - Session revocation / logout from all devices
     - Long-lived sessions (Remember Me)
     - Trusted Device Recognition

   - External Integration
     - Social Login Integration

   - Monitoring & Notifications
     - Login Alerts / Email Notifications
     - Audit logs

8. Trade-offs
   - Custom vs Managed Providers
   - Sessions vs JWT (stateful vs stateless)
   - OAuth vs Passwordless vs In-house(custom)
   - Frontend-driven vs Backend-driven vs Hybrid Auth

## uncategorised

- token and session → store max data to reduce database queries
- `next-auth` majorly runs on  → sessions based strategy
