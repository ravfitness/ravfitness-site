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
* Current lint status: Passed after RF-001
* Known lint locations: Resolved by RF-001

## Product Backlog

| ID     | Priority | Epic        | Work Item                                                      | Status  |
| ------ | -------- | ----------- | -------------------------------------------------------------- | ------- |
| RF-001 | P0       | Foundation  | Fix the two existing JSX lint errors                           | Done |
| RF-002 | P0       | Foundation  | Test all navigation links and CTA buttons                      | Backlog |
| RF-003 | P0       | Foundation  | Review mobile, tablet and desktop layouts                      | Backlog |
| RF-004 | P0       | Foundation  | Check image quality, loading and compression                   | Backlog |
| RF-005 | P0       | Foundation  | Review accessibility and semantic structure                    | Backlog |
| RF-006 | P0       | Foundation  | Define website information architecture and component boundaries | Done |
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
| RF-044 | P1       | Home        | Build the conversion-focused Home page                         | In Progress |
| RF-045 | P2       | Navigation  | Investigate fixed header temporarily disappearing on some mobile anchor jumps until slight scrolling | Ready |

## Sprint 0 — Website Foundation

### Sprint Goal

Create a clean, verified and reliable technical foundation without redesigning the website or changing its business content.

### Sprint Backlog

| ID     | Task                                     | Status  |
| ------ | ---------------------------------------- | ------- |
| RF-001 | Fix the two existing JSX lint errors     | Done |
| RF-002 | Test navigation and CTA links            | Backlog |
| RF-003 | Review responsive layouts                | Backlog |
| RF-004 | Check image performance                  | Backlog |
| RF-005 | Review accessibility basics              | Backlog |
| RF-006 | Define website information architecture and component boundaries | Done |

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

**RF-044 — Build the conversion-focused Home page**

### RF-044 Stage 1 and Hero Media

* Professional coaching photo and video are planned for this week.
* Hero media selection is deferred and does not block the remaining Home-page work.
* RF-044 Stage 1: Extract shared header and footer with no visible change — Completed.
* Stage 1 validation: Lint, production build and local visual testing passed.
* RF-044 overall status remains In Progress.
* RF-044 Stage 2: Build the responsive shared header and mobile navigation — Completed.
* Stage 2 validation: Desktop navigation, hamburger menu, link selection, Escape close, focus behaviour and mobile layout passed on desktop and at 370px mobile width.
* RF-044 Stage 3: Retain the production Hero with the approved CTA labels and focused mobile/tablet responsiveness fixes — Completed; Vercel preview passed with known non-blocking issue RF-045.
* Stage 3 Vercel preview failure: At mobile width, Book a Complimentary Session navigated to #contact, but the fixed header/menu disappeared until a slight scroll.
* The transform-gpu mitigation was tested and did not resolve the header visibility issue; it was removed.
* Anchor navigation itself works and reaches the correct Contact section (#contact).
* RF-045 is P2 / Ready and deferred for focused investigation: On some mobile anchor jumps, the fixed header is temporarily not visible until slight scrolling. The exact cause remains unresolved.
* RF-044 Stages 1–3 are approved for merge preparation with this known non-blocking issue; overall RF-044 remains In Progress and Stage 4 remains the next development stage.
* Stage 3 validation: Lint passed. Production build passed. Final local visual tests passed on desktop, 370×812 and 320×568.
* The existing mobile Hero overflow and right-side clipping were fixed.
* The production Hero design and transformation imagery were retained.
* Mobile/tablet fixes allow natural text wrapping, stack CTAs on narrow screens, place the transformation panel below the text until the large breakpoint, and scale its images within the available width. Preserve the approved desktop appearance at large breakpoints.
* The text-only Hero was rejected during visual review. The existing production Hero content, layout and visual styling are retained pending future coaching media.
* Preserve the complete My Transformation before-and-after panel, images, captions and styling in the Hero.
* Hero CTA labels: Book a Complimentary Session -> #contact; Explore Coaching -> #services. Existing CTA layout, styling and anchor destinations are preserved.
* Professional coaching media will be added after Ravi creates it; the text-only Hero decision and planned removal of the transformation panel are superseded.
* Next RF-044 activity — Stage 4: Quick Trust Strip and Coaching Preview.

### RF-044 Stage 2 Approved Interim Navigation

* Home -> #home
* Coaching -> #services
* About Ravi -> #about
* Client Results -> #results
* Book a Complimentary Session -> #contact
* Fitness Hub must remain hidden until its route exists.

### Approved Delivery Decision — Iterative Page-by-Page Design

* We will not fully design every page before development.
* We will finalise one page at a time immediately before building it.
* Existing content will be reused and refined where practical.
* Each page will go through requirement review, implementation, local testing, visual review, Vercel preview and production approval.
* Unbuilt navigation routes must not be activated in production.
* Coaching package details remain draft notes and are not locked.

### RF-006 Review Checkpoint

RF-006 is in Review because:

* Primary navigation is approved.
* Core routes are approved.
* Home content map is approved.
* Architecture and coding standards are documented.
* AGENTS.md is established.

### Approved Website Navigation

Primary navigation: Home | Coaching | Fitness Hub | About Ravi | Client Results | Book a Complimentary Session

| Navigation label | Route |
| ---------------- | ----- |
| Home | `/` |
| Coaching | `/coaching` |
| Fitness Hub | `/fitness-hub` |
| About Ravi | `/about` |
| Client Results | `/results` |
| Book a Complimentary Session | `/book` |

* “How We Can Train” may remain a homepage section heading, but the navigation label will be “Coaching”.
* “Real People. Real Results.” may remain a page or section heading, but the navigation label will be “Client Results”.
* “Fitness Hub” will be used instead of “Blog” or “Resources”.
* The booking navigation item should remain the visually prominent primary CTA.
* Detailed coaching, package and content routes are not yet approved.

### Approved Home Page Content Map

#### A. Header

* RavFitness brand
* Approved primary navigation
* Prominent Book a Complimentary Session button

#### B. Hero

* Personal Trainer in Glen Iris, Melbourne identifier
* Strong benefit-led headline
* Short supporting message
* Primary CTA: Book a Complimentary Session
* Secondary CTA: Explore Coaching
* Professional coaching photo or short muted coaching video
* The current transformation comparison should move out of the hero

#### C. Quick Trust Strip

* One-on-one coaching
* Small-group training
* Online coaching
* Goodlife Glen Iris

#### D. Coaching Options Preview

* One-on-One Coaching
* Small-Group Training
* Online Coaching
* Each option should contain a short audience description, one main benefit and a Learn More link
* Add a View All Coaching Options link
* Detailed packages and pricing should not crowd the Home page

#### E. About Ravi and Transformation Preview

* Short professional introduction
* Brief reference to Ravi’s 15-year corporate career and transition into fitness coaching
* Compact before-and-after transformation
* Emphasis on structure and consistency
* Link: Read Ravi’s Story

#### F. Featured Client Results

* Initially feature Anthea, Andrew and David
* Use a concise result headline
* Use a shortened testimonial
* Show a client photo where permission exists
* Show time training
* Link: Read Client Results

#### G. Fitness Hub Preview

* Show only a small selection of featured educational content
* Allow a mixture of training tips, exercise technique, lifestyle content and videos
* Link: Explore the Fitness Hub
* Do not display the entire content library on Home

#### H. Complimentary Session CTA

* Explain who the session is for
* Explain what happens during the session
* Show its duration and location once approved
* Primary button: Book a Complimentary Session

#### I. Location and Contact

* Goodlife Health Clubs Glen Iris
* Address
* Google Maps
* Phone and WhatsApp
* Email
* Instagram

#### J. Footer

* Navigation
* Contact details
* Privacy Policy
* Terms
* Copyright
* Never Break The Chain

### Content Moving Away from the Current Home Page

* Full coaching descriptions move to Coaching.
* Full personal and transformation story moves to About Ravi.
* Complete testimonials and client transformations move to Client Results.
* Package details move to Coaching or a future Packages route.
* General educational fitness content moves to Fitness Hub.
* The complete booking process moves to Book.
* Policies move to Privacy and Terms pages.

The Home page must still contain useful summaries and conversion content. It must not become only a list of links.

### Approved Fitness Hub

Navigation label: Fitness Hub

Route: `/fitness-hub`

Initial categories:

* Training Tips
* Exercise Technique
* Lifestyle and Habits
* Videos
* Stories and Insights

Fitness Hub rules:

* Fitness Hub content must remain separate from coaching sales content.
* The Fitness Hub landing page should organize content by category.
* Each substantial article or video should support an independent URL.
* Content must be structured so new articles and videos can be added without rewriting the page layout.
* The Home page may show only a small featured-content preview.
* Verified client outcomes belong primarily in Client Results.
* Educational stories may link between Fitness Hub and Client Results.
* Every content item should be independently maintainable.
* Content should support future Google search and social-media sharing.
* Detailed content routes and publishing technology are not yet approved.
* Videos should not automatically load in a way that harms website performance.
* Client photos, videos and stories require appropriate permission.

Likely future URL pattern — example only, not approved implementation:

* `/fitness-hub`
* `/fitness-hub/[slug]`

### Architecture Standards

* Each page route must be independently maintainable.
* A page-specific change should not unintentionally affect another page.
* Page-specific components must remain isolated by feature.
* Header, footer, navigation, buttons and design primitives may be shared.
* Shared components should be changed only when site-wide impact is intended.
* Content and structured data should be separated from page layout where practical.
* Testimonials, packages, contact information and Fitness Hub content should use structured typed data.
* Avoid one large all-in-one page component.
* Components should have one clear responsibility.
* TypeScript types should be explicit.
* Avoid any.
* All routes must support mobile, tablet and desktop.
* Images must be optimized and include meaningful alternative text.
* Links and controls must be keyboard accessible.
* Preserve the RavFitness black, white and gold design system.
* Preserve the tagline Never Break The Chain.
* No new package or dependency may be added without approval.
* No detailed service routes are approved yet.
* No website code should change for a page until that page’s content map is approved.

Suggested structure — proposed example, not yet an implementation instruction:

```text
app/
  page.tsx
  coaching/
    page.tsx
  fitness-hub/
    page.tsx
  about/
    page.tsx
  results/
    page.tsx
  book/
    page.tsx

components/
  layout/
  home/
  coaching/
  fitness-hub/
  about/
  results/
  booking/
  ui/

data/
  coaching.ts
  testimonials.ts
  fitness-content.ts
  contact.ts

types/
  coaching.ts
  testimonial.ts
  fitness-content.ts
```

### Development Workflow

For every Agile task:

1. Define and approve the requirement.
2. Update the Agile tracker.
3. Create a dedicated Git branch.
4. Change only files required for the approved task.
5. Run lint.
6. Run the production build.
7. Test locally.
8. Review the Git diff.
9. Push the feature branch.
10. Test the Vercel preview.
11. Merge only after explicit approval.
12. Test production.
13. Mark the task Done.
14. Record the commit and deployment result.

No other website changes should begin until RF-001 is completed, tested and recorded.

## Sprint Progress Log

Add one entry after every completed task.

| Date             | Task             | Result    | Commit    | Deployment |
| ---------------- | ---------------- | --------- | --------- | ---------- |
| 6 September 2026 | Project baseline | Completed | `6bc3736` | Ready      |
| 7 September 2026 | RF-001 JSX lint fixes | Lint, build and local visual test passed | 373cc7b | Production Ready |
| 7 September 2026 | RF-006 website architecture | Navigation, Home map, architecture standards and workflow completed | 0f96d51 | Production Ready |
