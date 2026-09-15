# RF-051 — RavFitness Shared Platform and AI Integration Direction

Status: Review. Reviewed and approved by Ravi; pending merge and production documentation verification. Documentation only; no implementation is authorized. Scope is the existing ravfitness-site repository. The mobile application is an external product boundary described from the approved brief only; its repository was not accessed.

## Approved principles

“People train. RavFitness handles the system around their training.”

“RavFitness AI — Talk. Train. Progress.”

“Never Break The Chain.”

RavFitness will eventually contain two independent but compatible products. Shared direction does not imply a shared database, codebase or AI permission set.

### Product ownership

| Product | Responsibilities |
| --- | --- |
| Public website and business system | Public pages, coaching packages, leads and enquiries, contact forms, consultation or complimentary-session booking, client acquisition, marketing content, email and WhatsApp communication, Instagram and Facebook content and advertising, Google advertising, campaign and referral-link tracking, future package enrolment and client onboarding. |
| Mobile fitness application (external boundary only) | Client profiles, health screening, exercise library, training programs, workout and session recording, workout history, strength progress, client and coach dashboards, progress reporting, hybrid and online coaching, future fitness-focused AI, voice workout logging, analytics and encouragement. |

The website must not directly own or modify workout, health-screening, strength-progress or other private fitness records. Marketing information and sensitive fitness or health information remain separately protected.

### Independence and contracts

- Separate repositories and deployments; each product remains independently testable and releasable. Changes in either product must not break the other.
- Do not share UI code, framework configuration or dependencies merely because both use JavaScript or TypeScript.
- Future communication requires an explicitly approved, secure, versioned API or event contract. Prefer additive, backward-compatible changes where practical.
- A lead becomes a fitness client only through an explicit onboarding action. Package changes must not divide or delete the person's training history.
- Never merge duplicate identities automatically. Account linking and identity recovery require a separately approved process.

### AI capabilities and authority

Architectural principles may be shared, but capabilities and permissions remain separate. The following are future capability directions, not permission to implement or execute them.

| AI boundary | Potential capabilities |
| --- | --- |
| Website and business AI | Explain services and packages; answer public visitor questions; capture and qualify leads; prepare follow-up messages; draft approved email and WhatsApp communication; draft social-media and advertising content; track campaign and referral sources; assist bookings; propose an approved lead's conversion into an onboarding request. |
| Mobile and fitness AI | Explain assigned workouts; record workouts through text or voice; retrieve training history; explain verified progress; identify adherence and progression patterns; generate fact-based encouragement; summarize client activity for Ravi; flag clients requiring coach attention. |

- Neither AI receives unrestricted database or third-party-account access. Both use narrow, controlled, authorized application actions.
- Website AI must not automatically access private fitness information. Fitness AI must not send marketing communication without separate permission and consent.
- External-provider credentials remain server-side. Browsers and mobile applications must never contain privileged email, WhatsApp, Meta, Instagram, Google Ads or database credentials.
- External communication respects approval, consent, opt-out, rate-limit and audit requirements. AI may propose actions; high-impact external actions require the approved confirmation policy.
- AI must never invent a claim, achievement, testimonial, price, offer or advertisement.

## Proposed future concepts

All events below are conceptual future contracts only: **not approved APIs, database tables, schemas or implementation specifications**. System roles describe responsibilities, not selected services or an inspected mobile implementation. No real client or lead information is included.

Proposed roles: **Business** is the website's future authorized business service; **Booking** is an unselected booking authority; **Fitness** is the external fitness application's authorized service; **Access** is an unselected entitlement authority. None is created by this document.

Common proposed minimum information for every event: an opaque event reference, contract version, occurrence time, source, correlation reference and approval/consent reference where applicable. Event-specific minimums below supplement this list; exact field design remains unresolved.

Common prohibited information for every event: health-screening answers, workout records, training history, strength metrics, private fitness notes, credentials, tokens, unrestricted free text and unnecessary personal data. A permitted opaque reference does not grant access to the referenced record. Additional exclusions appear below.

Common proposed delivery and audit rules for every event: recognize duplicates by stable event reference; retry without repeating side effects; revalidate authorization and current state; reconcile stale or out-of-order messages. Record source, authorized actor, approval/consent reference, time, event/version, outcome and retry or rejection reason. Protect audit access and avoid sensitive payload copies. Retention, retry limits, delivery guarantees and reconciliation ownership require separate decisions.

| Concept | Purpose; producer → consumer | Additional minimum information | Additional prohibited information | Required consent or approval | Duplicate/retry and audit emphasis | Open decision |
| --- | --- | --- | --- | --- | --- | --- |
| LeadQualified | Record readiness for follow-up; Business → Business follow-up workflow | Lead reference, qualification category | Raw conversations, private fitness details | Authorized qualification; channel consent before any follow-up | Do not create repeat follow-ups; audit qualification basis and actor | Qualification criteria; AI versus human review |
| ConsultationRequested | Request a consultation; Business → Booking | Request and lead references, preferred slot/time zone, permitted contact reference | Unrelated marketing profile | Visitor request; permission to transfer necessary booking details | One request per intent; audit request receipt and delivery | Booking provider and contact-data transfer |
| ConsultationBooked | Confirm an accepted appointment; Booking → Business | Booking/request references, confirmed time/time zone, status | Calendar secrets or unrelated appointments | Authorized booking confirmation; appropriate communication consent | No duplicate confirmations; audit booking authority and status | Cancellation/reschedule ownership |
| LeadApprovedForOnboarding | Approve an explicit handoff; Business → Fitness onboarding boundary | Lead and approval references, approved onboarding scope | Marketing history or automatic identity matches | Ravi or authorized coach approval plus client consent to handoff | One onboarding request per approval; audit approver and consent | Approval policy and minimum identity proof |
| ClientInvitationRequested | Request a client invitation; Business → Fitness invitation boundary | Onboarding request, recipient contact reference, invitation purpose | Passwords, invitation secrets in event/audit logs | Approved onboarding and permission to contact recipient | Do not resend on delivery retries; audit request and send outcome separately | Invitation expiry, resend and recovery process |
| CoachingPackageSelected | Record a package choice; Business → Fitness onboarding boundary | Approved person/onboarding reference, package reference/version | Payment credentials, invented prices or offers | Explicit client selection; approved package mapping | Repeated selection must not activate twice; audit selected version | Whether selection alone grants any entitlement (not assumed) |
| CoachingRelationshipRequested | Request assignment to coaching; Business → Fitness | Approved person reference, coach reference, relationship scope | Health records or inferred identity links | Explicit onboarding and authorized coach request | Avoid duplicate relationships; audit requester and scope | Coach acceptance and eligibility rules |
| CoachingRelationshipActivated | Confirm accepted coaching relationship; Fitness → Business | Relationship and approved person references, activation status/time | Workout or health details | Fitness authority approval and client acceptance under future policy | Ignore duplicate/stale activation; audit authority and transition | Minimum business visibility and activation criteria |
| CoachingPackageChanged | Request application of an approved package change; Business → Fitness | Relationship reference, old/new package references/versions, effective time | Training-history copies or deletion instructions | Authorized change and client agreement where required | Apply once and reject stale versions; audit before/after package references | Effective dates, acknowledgement and entitlement mapping |
| CoachingRelationshipEnded | Notify relationship closure; Fitness → Business | Relationship reference, effective time, minimal closure category | Sensitive reasons, private notes, history deletion instructions | Authorized closure under agreed client/coach policy | Do not repeat termination actions; audit authority and effective state | Who may initiate closure and history-retention policy |
| EntitlementChanged | Notify approved access change; Access → Fitness and authorized Business workflow | Subject/relationship reference, entitlement scope/version, effective time | Credentials, fitness data or unrelated privileges | Designated access authority and approved entitlement policy | Prevent stale grants/revocations; audit old/new scope and authority | Entitlement authority, expiry and outage behaviour |

These concepts span lead qualification, consultation booking, explicit onboarding/invitations, package selection/change, coaching relationship lifecycle and entitlements. They do not provide a path for the website to read or write private fitness records. Marketing providers form a separate permission boundary; drafting does not authorize sending or publishing.

## Assumptions and unresolved decisions

- This is direction for future products, not a claim about the mobile app's implementation. Business, Booking and Access roles are conceptual; no technology or provider is selected.
- Decide authoritative identity ownership, opaque reference mapping, linking, recovery and manual duplicate resolution before exchanging identities.
- Decide API versus events, hosting, authentication, service authorization, version support, compatibility tests, delivery/retry handling and independent outage behaviour before integration.
- Decide booking/onboarding ownership, required approvals, invitation lifecycle, relationship state transitions and package-to-entitlement mapping. Package selection is not assumed to be payment, enrolment or activation.
- Decide consent purposes, channel-specific opt-outs, revocation handling, data minimization, retention/deletion, audit access and retention, and permitted cross-product visibility.
- Decide AI providers, allowed actions, verification sources, confirmation thresholds, human review, rate limits and communication-provider permissions. No provider access or publishing authority is implied.

## Actions requiring separate authorization

Any mobile repository access; website behaviour or application-code changes; shared databases or cross-product connections; APIs/events or schemas; AI providers/actions; authentication or account linking; fitness-record changes; email, WhatsApp, Instagram, Meta or Google Ads connections; external messaging/publishing; dependency installation; staging, committing, pushing, merging or deploying.

RF-051 remains Review pending merge and production documentation verification. Existing website architecture standards in WEBSITE_PROJECT.md remain applicable. This document authorizes none of the future integrations described above.
