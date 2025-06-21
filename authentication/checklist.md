# Auth Checklist

## 1: Core Fundamentals

- [ ] Understand Authentication vs Authorization
- [ ] Learn about auth factors:

  - [ ] Knowledge (password, PIN)
  - [ ] Possession (OTP, device)
  - [ ] Biometric (fingerprint, face)
  - [ ] Behavior (location, device, time)
- [ ] Implement Session-based Auth

  - [ ] Server-side sessions with cookies
  - [ ] CSRF protection
  - [ ] Set cookie flags: HttpOnly, Secure, SameSite
  - [ ] Implement logout and "Remember Me"
- [ ] Implement JWT-based Auth

  - [ ] Create and verify tokens using jsonwebtoken
  - [ ] Handle access and refresh token lifecycles
  - [ ] Analyze storage options: memory, cookie, or localStorage

## 2: Passwordless and Multi-Factor

- [ ] Build Passwordless Login

  - [ ] OTP via email or phone
  - [ ] Magic links via email
- [ ] Implement TOTP-based 2FA (e.g., Google Authenticator)
- [ ] Add WebAuthn (FIDO2) for biometrics or hardware login (optional)

## 3: OAuth and Federated Identity

- [ ] Learn OAuth 2.0 flow

  - [ ] Authorization Code Flow with PKCE
  - [ ] Token introspection and revocation
- [ ] Implement OAuth Login

  - [ ] Google, GitHub, etc.
  - [ ] Support Just-in-Time Registration
- [ ] Add OpenID Connect (OIDC) for identity layer
- [ ] Try SAML for enterprise SSO (optional)

## 4: Libraries and Frameworks

- [ ] Use passport.js

  - [ ] Local strategy (username and password)
  - [ ] OAuth strategies (Google, GitHub, etc.)
- [ ] Use next-auth (for Next.js)

  - [ ] Session-based auth
  - [ ] JWT-based auth
  - [ ] Social login integration
- [ ] Explore auth.js (Lucia) for framework-agnostic auth

## 5: Managed Providers

- [ ] Try Firebase Auth
- [ ] Try Auth0, Clerk, Supabase, or Descope

  - [ ] Social login
  - [ ] Passwordless login
  - [ ] Multi-Factor Auth
  - [ ] Custom UI vs Hosted UI

## 6: Advanced Features

- [ ] Implement MFA flows
- [ ] Add Step-up Authentication (for sensitive actions)
- [ ] Implement Adaptive Auth (context or risk based)
- [ ] Add Device Trust and Recognition
- [ ] Build Account Recovery and Email Verification flows

## 7: Security Practices

- [ ] Add CAPTCHA for bot protection
- [ ] Implement rate limiting and brute force detection
- [ ] Add CSRF protection
- [ ] Sanitize input and output for XSS protection
- [ ] Secure cookies using HttpOnly, Secure, SameSite
- [ ] Enforce HTTPS using HSTS
- [ ] Implement token rotation and replay protection

## 8: Access Control and Auditing

- [ ] Implement Role-Based Access Control (RBAC)
- [ ] Explore Attribute-Based Access Control (ABAC)
- [ ] Add login alerts and notifications
- [ ] Create audit logs
- [ ] Support logout from all devices or sessions

## 9: Architectural Thinking

- [ ] Compare Sessions vs JWT (stateful vs stateless)
- [ ] Evaluate Custom Auth vs Managed Providers
- [ ] Design for Frontend-driven vs Backend-driven vs Hybrid Auth
- [ ] Optimize session or token payloads to reduce database queries
