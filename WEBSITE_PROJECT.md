# RavFitness Website Agile Project

## Project Goal

Build a professional fitness website that converts visitors from Google, social media and organic search into booked complimentary consultations for:

* One-on-one personal training
* Small-group training
* Online coaching
* Progress checks and technique reviews

The website should clearly present RavFitness services, packages, offers, client results, coaching videos and booking options.

## Core Customer Journey

1. A potential client finds RavFitness.
2. They quickly understand who Ravi helps and how.
3. They compare the available training options.
4. They see credible client results and coaching evidence.
5. They select a complimentary consultation.
6. They choose a date and time.
7. They provide essential contact and goal information.
8. They receive a booking confirmation.
9. Ravi follows up and converts the enquiry into a client.

## Project Principles

* Work on one priority at a time.
* Keep every change small and testable.
* Review each visible change before continuing.
* Do not begin Google Ads until booking and conversion tracking work.
* Protect the current live website.
* Develop on a separate Git branch where appropriate.
* Run lint and production build checks before deployment.
* Keep the public website separate from the fitness app until integration is ready.
* Record important decisions in this document.

## Status Definitions

* **Backlog:** Accepted work that has not started
* **Ready:** Defined clearly enough to begin
* **In Progress:** Currently being developed
* **Review:** Built and awaiting review
* **Done:** Tested, approved and deployed
* **Blocked:** Cannot continue until a dependency or decision is resolved

## Priority Definitions

* **P0 — Essential:** Reliability, safety or blocking work
* **P1 — High:** Directly improves enquiries and bookings
* **P2 — Medium:** Improves trust, clarity or conversion
* **P3 — Later:** Valuable after the core journey works

## Current Baseline

* Website version: RavFitness Website v1.0
* Live domain: https://www.ravfitness.com.au
* GitHub repository: https://github.com/ravfitness/ravfitness-site
* Production branch: `main`
* Hosting: Vercel
* Framework: Next.js 16, React 19, TypeScript and Tailwind CSS 4
* Baseline commit: `7011c6af7cf19f30c11577801e4323b78f16738c`
* Documentation commit: `6bc3736`
* Local development server: Passed
* Production build: Passed
* Production deployment: Ready
* Current lint status: Two existing `react/no-unescaped-entities` errors
* Known lint locations: `app/page.tsx` lines 415 and 515

## Product Backlog

| ID     | Priority | Epic        | Work Item                                                      | Status  |
| ------ | -------- | ----------- | -------------------------------------------------------------- | ------- |
| RF-001 | P0       | Foundation  | Fix the two existing JSX lint errors                           | Review |
| RF-002 | P0       | Foundation  | Test all navigation links and CTA buttons                      | Backlog |
| RF-003 | P0       | Foundation  | Review mobile, tablet and desktop layouts                      | Backlog |
| RF-004 | P0       | Foundation  | Check image quality, loading and compression                   | Backlog |
| RF-005 | P0       | Foundation  | Review accessibility and semantic structure                    | Backlog |
| RF-006 | P0       | Foundation  | Review current project structure and component boundaries      | Backlog |
| RF-007 | P1       | Booking     | Define the complimentary-session experience                    | Backlog |
| RF-008 | P1       | Booking     | Select the initial booking system                              | Backlog |
| RF-009 | P1       | Booking     | Build the complimentary-session booking page                   | Backlog |
| RF-010 | P1       | Booking     | Collect essential lead and fitness-goal information            | Backlog |
| RF-011 | P1       | Booking     | Create booking confirmation and thank-you page                 | Backlog |
| RF-012 | P1       | Booking     | Add calendar, rescheduling and cancellation options            | Backlog |
| RF-013 | P1       | Packages    | Define the three-day Best Results package                      | Backlog |
| RF-014 | P1       | Packages    | Define the two-day Strong and Consistent package               | Backlog |
| RF-015 | P1       | Packages    | Define the one-day Weekly Coaching package                     | Backlog |
| RF-016 | P1       | Packages    | Define the Progress Check service                              | Backlog |
| RF-017 | P1       | Packages    | Define small-group training packages                           | Backlog |
| RF-018 | P1       | Packages    | Define online coaching packages                                | Backlog |
| RF-019 | P1       | Packages    | Decide whether to display full prices or starting prices       | Backlog |
| RF-020 | P1       | Packages    | Build a clear packages comparison section                      | Backlog |
| RF-021 | P2       | Trust       | Add qualifications, registrations and professional credentials | Backlog |
| RF-022 | P2       | Trust       | Improve testimonial presentation and readability               | Backlog |
| RF-023 | P2       | Trust       | Add client photos and results where permission exists          | Backlog |
| RF-024 | P2       | Trust       | Add Google reviews                                             | Backlog |
| RF-025 | P2       | Trust       | Create frequently asked questions                              | Backlog |
| RF-026 | P2       | Trust       | Add privacy policy                                             | Backlog |
| RF-027 | P2       | Trust       | Add website terms and relevant booking policies                | Backlog |
| RF-028 | P2       | Content     | Add a short introduction video from Ravi                       | Backlog |
| RF-029 | P2       | Content     | Add a first-session explanation video                          | Backlog |
| RF-030 | P2       | Content     | Add one-on-one coaching videos                                 | Backlog |
| RF-031 | P2       | Content     | Add small-group training videos                                | Backlog |
| RF-032 | P2       | Content     | Add client success videos with permission                      | Backlog |
| RF-033 | P2       | Content     | Add exercise technique videos                                  | Backlog |
| RF-034 | P2       | SEO         | Strengthen local SEO for Glen Iris and nearby areas            | Backlog |
| RF-035 | P2       | SEO         | Review page titles, descriptions, sitemap and structured data  | Backlog |
| RF-036 | P2       | SEO         | Align the website with the Google Business Profile             | Backlog |
| RF-037 | P2       | Analytics   | Configure Google Analytics 4                                   | Backlog |
| RF-038 | P2       | Analytics   | Track booking, form, phone and WhatsApp conversions            | Backlog |
| RF-039 | P2       | Google Ads  | Create a focused Google Ads landing page                       | Backlog |
| RF-040 | P2       | Google Ads  | Test the complete paid-ad conversion journey                   | Backlog |
| RF-041 | P3       | Integration | Add Client Login when the fitness app is ready                 | Backlog |
| RF-042 | P3       | Integration | Connect website onboarding with the fitness app                | Backlog |
| RF-043 | P3       | Integration | Connect future app booking and payment features                | Backlog |

## Sprint 0 — Website Foundation

### Sprint Goal

Create a clean, verified and reliable technical foundation without redesigning the website or changing its business content.

### Sprint Backlog

| ID     | Task                                     | Status  |
| ------ | ---------------------------------------- | ------- |
| RF-001 | Fix the two existing JSX lint errors     | Review |
| RF-002 | Test navigation and CTA links            | Backlog |
| RF-003 | Review responsive layouts                | Backlog |
| RF-004 | Check image performance                  | Backlog |
| RF-005 | Review accessibility basics              | Backlog |
| RF-006 | Document the current component structure | Backlog |

### Sprint 0 Definition of Done

* All Sprint 0 tasks are completed.
* `npm run dev` works.
* `npm run lint` passes.
* `npm run build` passes.
* Desktop and mobile layouts are reviewed.
* Important links and buttons work.
* Changes are reviewed before deployment.
* The production deployment becomes Ready.
* The live website is checked after deployment.
* This project tracker is updated.

## Planned Future Sprints

### Sprint 1 — Complimentary Booking

Define and build the complete complimentary consultation booking journey.

### Sprint 2 — Packages and Offers

Create clear one-day, two-day, three-day, progress-check, small-group and online coaching options.

### Sprint 3 — Trust and Results

Strengthen credentials, testimonials, client stories, FAQs and policies.

### Sprint 4 — Videos and Content

Add professional coaching, introduction, technique and client-result videos.

### Sprint 5 — Google Ads Readiness

Create the landing page, analytics and conversion tracking required before launching paid ads.

### Sprint 6 — Fitness App Integration

Add client access and onboarding connections after the separate fitness app is ready.

## Decisions Required

| Decision                                                   | Status  |
| ---------------------------------------------------------- | ------- |
| What is included in the complimentary session?             | Pending |
| How long is the complimentary session?                     | Pending |
| Which days and times can visitors book?                    | Pending |
| Which booking platform will be used initially?             | Pending |
| Will package prices be public?                             | Pending |
| What is included in each package?                          | Pending |
| Which client photos and testimonials have permission?      | Pending |
| Which Google Ads locations and audiences will be targeted? | Pending |

## Completed Work

| Date             | Work                                                                       |
| ---------------- | -------------------------------------------------------------------------- |
| 6 September 2026 | Verified local project, GitHub repository and Vercel production deployment |
| 6 September 2026 | Recorded RavFitness Website v1.0 baseline in README                        |
| 6 September 2026 | Confirmed local development server works                                   |
| 6 September 2026 | Confirmed production build passes                                          |
| 6 September 2026 | Identified two existing lint errors                                        |

## Current Next Task

**RF-001 — Fix the two existing JSX lint errors in `app/page.tsx`.**

No other website changes should begin until RF-001 is completed, tested and recorded.

## Sprint Progress Log

Add one entry after every completed task.

| Date             | Task             | Result    | Commit    | Deployment |
| ---------------- | ---------------- | --------- | --------- | ---------- |
| 6 September 2026 | Project baseline | Completed | `6bc3736` | Ready      |
| 7 September 2026 | RF-001 JSX lint fixes | Lint, build and local visual test passed | Pending | Pending |
