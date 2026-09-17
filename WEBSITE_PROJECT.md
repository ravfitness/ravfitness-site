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
| RF-044 | P1       | Home        | Build the conversion-focused Home page                         | Done |
| RF-045 | P2       | Navigation  | Investigate fixed header temporarily disappearing on some mobile anchor jumps until slight scrolling | Ready |
| RF-046 | P1       | Coaching    | Build the independent Coaching page                            | Done |
| RF-047 | P2       | Fitness Hub | Build the Fitness Hub foundation                               | Done |
| RF-048 | P2       | About Ravi  | About Ravi page foundation                                     | Done |
| RF-049 | P2       | Results     | Client Results page foundation                                 | Done |
| RF-050 | P1       | Booking     | Book a Complimentary Session page foundation                   | Review |
| RF-051 | P2       | Integration | RavFitness Shared Platform and AI Integration Direction (documentation only) | Done |

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

**RF-044 Stage 4B — Completed. RF-044 is Done; authenticated preview approved by Ravi and production verification Passed.**

### RF-044 Stage 4B — Completed homepage implementation and release checkpoint

* Ravi approved the final homepage refinements and authorized commit, push and release through the documented Vercel workflow. This final implementation supersedes the historical Stage 4A plan below and earlier Stage 4B checkpoints.
* Approved order: shared SiteHeader → HomeHero → HomeTransformation (combined Transformation/About preview) → HomeCoachingPreview → HomeResultsPreview → HomeFitnessHubPreview → HomeBookingCta → shared SiteFooter. No separate About preview is rendered; the unused superseded HomeAboutPreview file was removed before release.
* Hero: original supplied portrait, white surface, restrained gold glow, existing headline/supporting/consistency text, approved location microcopy and /book + /coaching CTAs. Decorative handwritten text/font removed as approved. Asset is byte-for-byte identical to IMG_0291 (1).JPG (SHA-256 5E0BD0C0FA437443FC39F2D4B88BD00119FE00F34FE3639B11EB5EB908CD8735). No generated mockup imagery or retouching.
* Transformation/About: original photos/captions, compact black/gold container, equal 5:4 contain viewports, Turning Passion Into Purpose, approved corporate-to-coaching excerpt, Read My Story → /about. Retains id="about" immediately after Hero.
* Coaching: three compact white cards, approved SVG icons and coaching copy; partner/semi-private is 2–3 people maximum. All links use /coaching because specific service anchors do not exist. No dedicated-page anchors or wording changed.
* Results: Anthea's real portrait and exact approved excerpt, Andrew's exact approved excerpt and decorative initials avatar; semantic blockquotes with decorative gold marks and no literal surrounding quote characters; See More Client Results → /results. Retains id="results".
* Fitness Hub: two equal compact icon-left/content-right cards, approved titles/descriptions, Video Coming Soon badges, decorative non-interactive play icons and Explore Fitness Hub → /fitness-hub. No videos, thumbnails or invented availability.
* Final CTA/contact: approved black/gold three-column desktop and stacked mobile layout, invitation/copy, WhatsApp, contact details, TRAINING LOCATION card, Maps and motto. Booking → /book is visible below 768px and hidden at/above 768px per Ravi's instruction; WhatsApp remains visible at every width. Middle column vertically centred on desktop. Retains id="contact". Shared header unchanged (full navigation/booking CTA appears at 1024px, with mobile menu below that breakpoint).
* Exact release files: app/page.tsx; components/home/HomeHero.tsx; components/home/HomeTransformation.tsx; components/home/HomeCoachingPreview.tsx; components/home/HomeResultsPreview.tsx; components/home/HomeFitnessHubPreview.tsx; components/home/HomeBookingCta.tsx; public/images/ravi-hero-original.jpg; WEBSITE_PROJECT.md. No shared layout, dedicated page/component, configuration, dependency or mobile-app changes.
* Validation: npm.cmd run lint Passed; npm.cmd run build Passed (TypeScript and all routes); git diff --check Passed. Complete tracked/untracked source review passed. Existing baseline-browser-mapping freshness warning is non-blocking; no packages installed or updated.
* Local Chrome visual review Passed at desktop 1440px and mobile 320px, 375px and 390px: full-page screenshot sequences inspected; correct order, spacing, wrapping and stacking, no horizontal overflow or clipped text/controls, all images loaded.
* Interaction checks Passed: unique about/results/contact IDs and direct hash navigation, header scroll offsets, visible 2px keyboard focus on all Home CTAs/contact links. Mobile menu opens, closes with Escape and on link selection. No browser runtime/console errors captured. Dedicated /coaching, /results, /about, /fitness-hub and /book each returned HTTP 200.
* Links: Home CTAs use approved routes. Both WhatsApp links return the expected 302 to the approved number; Instagram and Maps return HTTP 200. Email retains mailto:info@ravfitness.com.au. Phone retains its approved WhatsApp link. No calls/messages/email sent; third-party app handoff and delivery are not certified by these checks.
* Manual preview approval (18 September 2026): Ravi reviewed the authenticated Vercel preview for homepage commit e195190d72ecb8622f447032bfb1dc0d454a1a13 and approved desktop and mobile appearance. Vercel deployment and Preview Comments checks passed. Release PR: https://github.com/ravfitness/ravfitness-site/pull/1. Production verification remains pending merge and automatic deployment to https://www.ravfitness.com.au.
* Resume inspection: working tree clean; HomeAboutPreview.tsx is absent from both HEAD and the working tree and has no committed history. It was an unused untracked intermediate component superseded by HomeTransformation before the homepage commit, not a pending tracked deletion. No restoration or separate deletion commit is needed; existing committed code is preserved.
* Release completed 18 September 2026: PR #1 merged after Vercel and Preview Comments checks passed, at af48d9f928bfb595dab18df7ed955e843170b20a. Homepage implementation commit: e195190d72ecb8622f447032bfb1dc0d454a1a13; manual approval record: fd4e3633d9bd99bc28483c89b3bab7d369971590. Fresh lint, production build and git diff --check Passed before merge.
* Vercel Production deployment succeeded (CCTHfUh2BttAuzAeQyV1aManjKEA). https://www.ravfitness.com.au returns HTTP 200 and serves the approved portrait, section order and TRAINING LOCATION card. Live Chrome checks at 1440, 320, 375 and 390px Passed: no horizontal overflow, all images loaded, mobile menu opens/closes via Escape and link selection, visible keyboard focus, unique legacy anchor targets and intended CTA URLs. No browser errors captured. All five dedicated routes return HTTP 200. This documentation-only follow-up records the observed production outcome; website code is unchanged.
* RF-050 remains Review with production Passed and Email Enquiry Pending. RF-045 remains Ready and deferred; these tests do not close the previously reported intermittent header issue. Dedicated /coaching retains outdated 3–6 People wording pending separately approved correction.

### RF-044 Stage 4A — Conversion-focused Home preview content map (historical approved plan)

**Status: Completed — Ravi approved the Stage 4A documentation and content plan. RF-044 remains In Progress. Stage 4B is next, not started and requires separate authorization; no implementation is authorized.**

* Scope: documentation and content planning in ravfitness-site only. Only WEBSITE_PROJECT.md changes; no mobile-app repository access.
* Start checkpoint: main was clean; after fetching origin, main and origin/main both resolved to 90253574365f578345583b423188ebd5f2901551 (0 ahead / 0 behind). The merge is in main. Working branch: feature/rf-044-home-content-previews.
* Read completely: AGENTS.md, README.md, this tracker and docs/architecture/RAVFITNESS_PLATFORM_INTEGRATION.md. Inspected Home, the five dedicated routes and their existing components, plus shared header/footer.
* RF-051: Done; merge 9025357; production verification Passed per Ravi’s brief. This tracker supersedes the integration document’s historical pre-merge Review statements; that file remains untouched under the single-file restriction.
* RF-050: Review; production Passed at f9ad423; Email Enquiry Pending. RF-045: Ready and deferred, unchanged. RF-044: In Progress.
* Preserve the production Hero design, including its black-and-gold treatment, all existing Hero copy and transformation panel, captions and images until Ravi supplies coaching media. Preserve “Get Stronger. Move Better. Feel Like Yourself Again.” Hero CTAs remain “Book a Complimentary Session” → /book and “Explore Coaching” → /coaching.
* Preserve black, white and gold, and Never Break The Chain. No prices, invented testimonials, statistics, achievements, claims or results; no 6-week challenge promotion or fixed-duration result promises.
* Source boundary: public copy below reuses or condenses existing website content. The partner size/terminology and explicit online inclusions follow Ravi’s approved Stage 4A requirements and recorded RF-046 business facts; they are not presented as wording already live on /coaching.

#### Final approved Home section order — documentation only

| Order | Section | Content retained or proposed | Primary CTA | Component |
| --- | --- | --- | --- | --- |
| 1 | Shared SiteHeader | Existing brand, tagline and navigation unchanged | Book a Complimentary Session → /book | SiteHeader |
| 2 | Existing production Hero | Complete existing design, wording and transformation imagery unchanged | Book a Complimentary Session → /book; secondary Explore Coaching → /coaching | Existing inline Hero; no extraction required |
| 3 | Coaching preview | Three short coaching options | Explore Coaching → /coaching | HomeCoachingPreview |
| 4 | Client Results preview | One featured Anthea excerpt with her existing approved portrait | Read Client Results → /results | HomeResultsPreview |
| 5 | About Ravi preview | Short corporate-to-coaching introduction | Read Ravi’s Story → /about | HomeAboutPreview |
| 6 | Fitness Hub preview | Exactly two existing titles, each Video Coming Soon | Explore the Fitness Hub → /fitness-hub | HomeFitnessHubPreview |
| 7 | Final booking CTA | Short invitation, existing location and tagline | Book a Complimentary Session → /book | HomeBookingCta |
| 8 | Shared SiteFooter | Existing copyright footer unchanged | None | SiteFooter |

Ravi selected this order for the documentation checkpoint. Keep previews short and independent; dedicated pages remain the complete content sources. During separately authorized implementation, replace Home’s full contact block with the compact final booking CTA linking to /book. No separate trust strip, duplicate transformation panel or expanded footer is included.

#### Exact public wording — approved by Ravi

These blocks contain all proposed new Home preview wording, including labels and CTA text. Existing header, complete Hero and footer remain unchanged; no other preview copy is implied.

**Coaching preview**

* Heading: How We Can Train
* Introduction: Choose the coaching style that fits your goals, schedule and personality.
* Option heading: One-to-One Personal Training
* Option copy: Private, personalised coaching built around your body, schedule and goals.
* Option heading: Partner & Semi-Private Coaching
* Option copy: Coaching for partners, friends or appropriately matched people — 2–3 people maximum.
* Option heading: Online Coaching
* Option copy: An individual program, progress tracking, accountability and a weekly connection/check-in.
* CTA: Explore Coaching → /coaching

**Client Results preview — selected single Anthea feature**

* Heading: Real People. Real Results.
* Context label: Testimonial excerpt
* Quote: “I started training with Ravi after a 15-year break from weight training. I was nervous and needed someone to keep me accountable. From the first session I felt calm and confident.”
* Attribution: Anthea
* Attribution detail: Goodlife Glen Iris • Gym Member
* CTA: Read Client Results → /results

**About Ravi preview**

* Label: About Ravi
* Heading: Turning Passion Into Purpose
* Copy: After 15 years in the corporate world, I chose to follow a lifelong passion for movement, strength training, and helping people live healthier, more confident lives. Today, I run my coaching business at Goodlife Glen Iris.
* CTA: Read Ravi’s Story → /about

**Fitness Hub preview**

* Heading: Fitness Hub
* Copy: Practical training, movement skills and real coaching progress from RavFitness.
* Item title: My Muscle-Up Journey
* Item status: Video Coming Soon
* Item title: Client Muscle-Up Success
* Item status: Video Coming Soon
* Availability copy: Original videos are being prepared for the website.
* CTA: Explore the Fitness Hub → /fitness-hub

**Final booking CTA**

* Label: Ready To Start?
* Heading: Let’s Build Strength You Can Rely On.
* Copy: Book a session, ask a question, or start with a simple conversation.
* Location: Goodlife Health Clubs Glen Iris
* CTA: Book a Complimentary Session → /book
* Brand close: Never Break The Chain

#### Preview specifications and dedicated-page boundaries

Exact headings and copy are specified in the public-wording blocks above. All five components are independently maintained Home components, proposed under components/home; they must not import or render the full dedicated-page components. Keep preview content separate from presentation where practical with explicit TypeScript types and no any. Editing a dedicated page must not silently rewrite a Home preview.

| Preview | Purpose / visitor question answered | Supporting imagery or content / what remains on Home | What moves off Home or remains on dedicated page | Primary / optional secondary CTA |
| --- | --- | --- | --- | --- |
| Coaching | Help visitors choose a coaching format. “How can I train with Ravi?” | Three compact text options; no new imagery, price, package or outcome claim. Source: CoachingServices and approved business facts. | /coaching retains complete CoachingServices, descriptions, benefit lists and goal labels unchanged. Remove its full Home rendering during implementation. | Explore Coaching → /coaching / none recommended |
| About Ravi | Establish personal connection. “Who is Ravi and what led him to coaching?” | One short paragraph from AboutRavi; no second transformation panel or new portrait. Existing transformation imagery stays in Hero. | /about retains complete AboutRavi: mission, philosophy, corporate career, transformation narrative and current coaching story unchanged. Remove its full Home rendering. | Read Ravi’s Story → /about / none recommended |
| Client Results | Provide specific social proof. “What did a client experience with Ravi?” | Anthea’s existing /images/testimonials/anthea.jpg portrait, exact opening excerpt and attribution. No time-based promise or new result headline. | /results retains ClientResults with all three complete testimonials, Anthea’s image, descriptions, ages, result labels and recorded training durations unchanged. Remove full cards from Home. | Read Client Results → /results / none recommended |
| Fitness Hub | Introduce content direction honestly. “What training stories are planned, and can I watch them yet?” | Only the two existing titles and explicit unavailable-video statuses; compact text list, no player, thumbnail, embed or clickable play symbol. | /fitness-hub retains its introduction, both full card descriptions, preparation notice and CTAs unchanged. Home has no existing Hub section to remove. | Explore the Fitness Hub → /fitness-hub / none recommended |
| Final booking CTA | Give a clear next step. “How do I start a conversation?” | Short existing invitation, location name and tagline; text only. /book is currently an enquiry page, not a live scheduling flow. | /book retains complete BookSession, contact actions, phone, email, Instagram, address, Maps link, location card and brand close unchanged. Remove its full Home rendering. Do not invent session duration, inclusions or calendar availability. | Book a Complimentary Session → /book / none recommended |

| Preview | Mobile presentation | Accessibility considerations |
| --- | --- | --- |
| Coaching | Stack three concise options in source order; allow natural heights. Wider screens may use three columns only when copy fits. | Section H2 and option H3 headings; descriptive keyboard-accessible link, visible focus and readable contrast. No colour-only distinctions. |
| About Ravi | One readable text block followed by CTA; no fixed height or extra image. | H2 linked to section context, normal text order and descriptive link; no text baked into images. |
| Client Results | One featured Anthea quote with her existing approved portrait and attribution; CTA below, no carousel. | Use blockquote and associated attribution; meaningful portrait alt “Anthea”; mark excerpt visibly, avoid truncation and preserve full quote access through /results. |
| Fitness Hub | Two stacked title/status rows; keep status adjacent to each title. At tablet/desktop use compact rows or two columns. | H2/H3 hierarchy; status in text, not colour alone. No focusable fake players or unavailable-video links. CTA clearly opens the Hub. |
| Final booking CTA | One column with full-width booking link on narrow screens; no location/contact grid. | H2, clear /book link with visible focus, sufficient contrast on black and a comfortable touch target. Decorative gold effects hidden from assistive technology. |

For all previews: verify 320px mobile, tablet and desktop; text zoom, wrapping, no horizontal overflow, logical keyboard order, visible focus and readable black/white/gold combinations. Use links for navigation. Do not force full-screen preview heights.

#### Client Results comparison and selected option

| Option | Benefit | Tradeoff |
| --- | --- | --- |
| One featured Anthea excerpt | A coherent return-to-training story addresses nervousness and accountability; existing portrait adds personal context; shortest reading path to /results. | Shows one perspective; visitors follow the CTA for breadth. |
| Short excerpts from Anthea, Andrew and David | Shows several coaching experiences without full testimonials. | More competing text on mobile; two clients have no supplied portrait; very short excerpts lose some narrative context. |

Ravi selected one featured Anthea testimonial with her existing approved /images/testimonials/anthea.jpg portrait. The comparison above records the rationale; multiple excerpts are not part of the final Home map. All three complete testimonials remain unchanged on /results. This is a content/design judgment, not a measured conversion claim.

Excerpt verification: the quoted text above is exactly the opening three consecutive sentences of Anthea’s approved testimonial in components/results/ClientResults.tsx, ending “From the first session I felt calm and confident.” Only JSX source whitespace is normalized to rendered spaces; no words or punctuation inside the excerpt are changed, omitted or paraphrased. Keep the visible “Testimonial excerpt” label and attribution. Do not imply guaranteed or typical outcomes, update recorded durations, or invent imagery.

#### Existing duplication and proposed removals

* Home currently renders CoachingServices, AboutRavi, ClientResults and BookSession in full, exactly as their dedicated routes do. Shared SiteHeader/SiteFooter are intentional reuse and remain shared.
* Replace those four full Home renderings with independent previews during later authorized implementation; do not merely hide, clamp or duplicate full sections in the DOM.
* Remove full coaching benefit lists/goal labels, full mission and biography, three full testimonial cards and the contact/location grid from Home. They already exist on dedicated pages; no dedicated-page content needs to be moved or deleted.
* Keep complete Hero transformation content unchanged. Do not repeat it in About. Fitness Hub gains only a short independent preview.
* No dedicated-page wording, layout, navigation, route or business-rule changes are included. /coaching currently contains outdated “Small Group Training / 3–6 People” wording; do not copy it to Home or change it in this task. Correction to Partner & Semi-Private Coaching for 2–3 people maximum requires a separate approved task.

#### Backward-compatible Home anchors — recorded decision, not implemented

| Existing URL | Approved target for later implementation | Behaviour to preserve |
| --- | --- | --- |
| /#about | id="about" on HomeAboutPreview section | Reach the introduction; /about link opens the full story. |
| /#results | id="results" on HomeResultsPreview section | Reach the testimonial feature; /results link opens all results. |
| /#contact | id="contact" on HomeBookingCta section | Reach the final booking invitation; /book provides full contact/enquiry details. |

Record Ravi’s decision to assign the existing IDs directly to the corresponding new Home sections, once each, during separately authorized implementation. Preserve header-aware scroll spacing and test direct URL loads, in-page navigation and browser back/forward. Do not redirect hash links to dedicated pages. Retain existing Hero id="home"; retaining id="services" on the Coaching preview would also preserve the older service anchor. No IDs, anchors or redirects are implemented in Stage 4A. RF-045 remains deferred; future anchor tests must distinguish its known header issue from a new regression.

#### SEO considerations for later implementation

* Retain Home’s existing local identity, Hero text and single screen-reader H1 “Personal Trainer in Glen Iris, Melbourne”; use section H2s and item H3s below it. Hero semantics/design changes are outside this proposal.
* Keep useful, visible summary text and descriptive links to existing dedicated routes. Independent previews reduce repeated full-page content without removing dedicated-page detail.
* Preserve existing routes and metadata during this work. No new canonical rules, sitemap entries, structured data, rating markup or video markup is proposed; unavailable videos must not be represented as playable.
* Keep location name in the final CTA and Hero; detailed address/contact information stays on /book. Do not add location keywords or unsupported credentials just for search.
* Future performance checks should confirm the new preview adds no video payload and uses the existing optimized portrait with meaningful alt text.

#### Ravi’s approval and remaining boundaries

Ravi approved the final Home section order, exact public copy below the order table, single featured Anthea testimonial with her existing approved portrait, independent Home preview components, preserved legacy anchors, compact final booking CTA and unchanged production Hero. This completes Stage 4A documentation only; it does not authorize implementation.

* Recorded from Ravi’s refinement brief: Results precedes About Ravi; use one Anthea feature with her existing approved portrait; retain the documented short Coaching, About Ravi, Fitness Hub and final booking copy; replace Home’s full contact block with the compact /book CTA; preserve the three specified legacy IDs on the new previews.
* Preserve the complete production Hero unchanged. Its existing “small group” trust line and negative “No 6-week BS challenges” wording are not new Home-preview copy or challenge promotion; any later terminology/tone revision needs separate approval.
* Ravi authorized staging and committing only WEBSITE_PROJECT.md with the message “Complete RF-044 Stage 4A Home content plan”, then pushing feature/rf-044-home-content-previews to origin. Merge, deployment and Stage 4B remain unauthorized.
* Separately approve the /coaching correction to 2–3 people maximum. This task leaves that dedicated page unchanged.
* Preview spacing, column treatment and black/white/gold section styling remain for visual review after implementation is separately authorized. No design mockup is approved by this map.

#### Recommended Stage 4 sequence — each stage requires authorization

* **4A — Content map (Completed):** Ravi approved the final content plan and exact wording. Implementation requires separate authorization.
* **4B — Coaching preview (Next; not started; separate authorization required):** Once authorized, introduce only HomeCoachingPreview and replace Home’s full CoachingServices rendering. Verify exact copy, /coaching destination, responsive stacking and unchanged dedicated page.
* **4C — Results preview:** Introduce HomeResultsPreview after Coaching and replace full ClientResults on Home. Verify the exact Anthea excerpt, existing approved portrait, attribution, #results and unchanged /results.
* **4D — About preview:** Introduce HomeAboutPreview after Results, replace Home’s full AboutRavi rendering and preserve #about. Verify story link, anchor and unchanged /about.
* **4E — Hub preview:** Add HomeFitnessHubPreview in the approved position. Verify exactly two titles, honest statuses, /fitness-hub destination, no unavailable media loaded and unchanged dedicated page.
* **4F — Final booking CTA:** Replace Home’s BookSession rendering with HomeBookingCta; preserve #contact. Verify /book link and unchanged full enquiry/contact page.
* **4G — Integrated review:** Confirm all eight sections, preserved Hero/header/footer, no full dedicated-page components rendered on Home, all CTA destinations, legacy anchors and no unrelated changes. Test mobile/tablet/desktop and keyboard/zoom behaviour.
* For each code stage: run lint, production build and diff checks; test changed behaviour plus dedicated-page isolation; review locally before continuing. Later commit/push require explicit approval; use a Vercel preview before any separately approved merge, then verify production. The approved Stage 4A documentation commit and feature-branch push are the only exception; no implementation, merge or deployment is authorized.

#### Stage 4A handoff checkpoint

Refinement checkpoint: confirmed feature/rf-044-home-content-previews with only the intended unstaged WEBSITE_PROJECT.md change and no staged files. Recorded Ravi’s selected order, Anthea feature and portrait, compact final booking CTA and legacy anchor decisions. Anthea’s excerpt matches the approved source exactly and contiguously after rendered-whitespace normalization.

Only WEBSITE_PROJECT.md changed. No website code, routes, navigation, dependencies, media, forms, AI, redirects or integrations changed; the mobile-app repository was not accessed. Documentation validation: git diff --check Passed. Lint/build are not applicable to this documentation-only change. Stage 4A is Completed with Ravi’s approval; RF-044 remains In Progress. RF-050 remains Review with production testing Passed and Email Enquiry Pending; RF-045 remains deferred and unchanged. Stage 4B is next, not started and requires separate authorization. Only the documentation commit and feature-branch push are authorized at this checkpoint; no merge, deployment or implementation is authorized.

### RF-051 Shared Platform and AI Integration Direction

* RF-051 is Done. Merged to main at 9025357 (90253574365f578345583b423188ebd5f2901551); production verification Passed, as confirmed by Ravi in the Stage 4A brief. The shared-platform architecture documentation was reviewed and approved by Ravi. Documentation and architecture planning only; implementation remains unauthorized. Future APIs, AI providers, external messaging, identity linking and data sharing require separate requirements and approval.
* Direction: [RavFitness Platform Integration](docs/architecture/RAVFITNESS_PLATFORM_INTEGRATION.md). No equivalent integration document existed; existing website architecture guidance remains in this tracker.
* Approved principles: "People train. RavFitness handles the system around their training."; "RavFitness AI — Talk. Train. Progress."; "Never Break The Chain."
* Website/business and mobile/fitness products remain separate repositories, deployments, permissions and data responsibilities, independently testable and releasable. The mobile app is an external boundary only; its repository was not accessed.
* Future contracts cover leads, consultations, explicit onboarding, invitations, packages, coaching relationships and entitlements. Event concepts are not approved APIs, schemas or implementation specifications.
* Narrow authorized AI actions, server-side credentials, separately protected marketing and fitness data, consent, opt-outs, approvals and auditing are required. Identity linking, provider choices and integration details remain unresolved and require separate authorization.
* RF-050 remains Review with Email Enquiry testing Pending; production testing passed for f9ad423 as confirmed by Ravi. RF-045 and unrelated priorities remain unchanged.

### RF-050 Approved Book a Complimentary Session Page Foundation

* RF-050 remains Review because Email Enquiry testing is Pending. Merged to main at f9ad423 (f9ad42351632258da8e9f7f1de2667963c469cc7); production testing passed, as confirmed by Ravi.
* Extract the complete existing Home contact section into components/contact/BookSession.tsx, preserving all headings, text, enquiry actions, contact and location information, JSX structure, styling classes and contact section ID exactly.
* Home renders BookSession in its original position after ClientResults. The /book route contains only SiteHeader, BookSession and SiteFooter within the standard page wrapper.
* Update booking CTAs in the Home Hero, shared desktop/mobile header and Fitness Hub to /book. The shared Coaching section contains no booking CTA; its page uses the shared header.
* Current shared navigation: brand and Home /, Coaching /coaching, Fitness Hub /fitness-hub, About Ravi /about, Client Results /results and Book a Complimentary Session /book. These destinations supersede earlier checkpoint destinations below.
* Preserve /#contact for backward compatibility. Contact actions and all non-booking links remain unchanged.
* No booking form, calendar, payments, scheduling service, content redesign, new media or dependencies. Home’s documentation-only Stage 4A is Completed; Stage 4B is next, not started and requires separate authorization. RF-045 remains deferred.
* Validation passed: BookSession matches the committed Home contact section exactly after normalizing line endings; Home retains its original position and both Home and /book render BookSession. Generated Home HTML retains id="contact" for /#contact. All four booking CTA instances use /book; contact actions, non-booking links and other content are unchanged. Lint, production build and git diff --check passed. Desktop and 320px mobile visual testing passed, as confirmed by Ravi. /book and the Home contact section matched.

* Layout, stacking, scrolling, header, footer and horizontal-overflow checks passed. Booking CTAs from Home, the shared header and Fitness Hub passed. Navigation and mobile-menu closing passed.
* /#contact backward-compatible scrolling passed.
* WhatsApp, Instagram and Maps destinations verified in the completed local test: WhatsApp 61412197390 with the existing coaching enquiry message; Instagram @rav_fitnesscoach; Maps Goodlife Health Clubs Glen Iris, 1438 High St, Glen Iris VIC 3146.
* Email Enquiry testing: Pending (neither passed nor failed). Production testing passed for merge commit f9ad423; RF-050 is not Done.
* Local-test checkpoint approved for commit and push. The development server has been stopped. RF-050 remains Review.

### RF-049 Approved Client Results Page Foundation

* RF-049 is Done. Merged to main at 37c36ca (37c36ca13de30292cc1dc666b0ca017dd181c102); production verification passed, as confirmed by Ravi.
* Extract the complete Home Client Results/testimonials section into components/results/ClientResults.tsx, preserving all three testimonials, Anthea's image, names, descriptions, result labels, training durations, heading, introduction, results section ID, JSX structure and styling exactly.
* Home renders ClientResults in its original position. The /results route contains only SiteHeader, ClientResults and SiteFooter within the standard page wrapper.
* Shared navigation destinations: brand and Home /, Coaching /coaching, Fitness Hub /fitness-hub, About Ravi /about, Client Results /results and Book a Complimentary Session /#contact.
* Preserve /#results as the Home section anchor. No new content, imagery, dependencies, pricing or functionality. Booking and Home refinement are outside this task; RF-045 remains deferred.
* Validation passed: ClientResults matches the committed Home section exactly after normalizing line endings; Home and /results both render the shared component. Home is unchanged beyond the import and replacement in its original position. The results section ID is retained for /#results. Lint, production build and git diff --check passed.
* Local desktop and 320px mobile testing passed, as confirmed by Ravi. /results and Home display the matching Client Results section; all testimonials and Anthea's image were verified.
* Card stacking, navigation, mobile-menu closing, scrolling, footer and overflow checks passed. /#results still reaches the Home testimonials.
* Foundation committed and merged; RF-049 production checkpoint complete.

### RF-048 Approved About Ravi Page Foundation

* RF-048 is Done. Merged to main at 91a4640 (91a4640631e329f5af8da9fca85bdc0cb96538e2); production verification passed, as confirmed by Ravi.
* Extract the complete existing Home About section into components/about/AboutRavi.tsx without changing content, headings, structure, styling or the about section ID.
* Home renders AboutRavi in its original position. The /about route contains only SiteHeader, the extracted AboutRavi component and SiteFooter within the standard page wrapper.
* Shared navigation destinations: brand and Home /, Coaching /coaching, Fitness Hub /fitness-hub, About Ravi /about, Client Results /#results and Book a Complimentary Session /#contact.
* No new content, media, dependencies or animations. RF-045 remains deferred; Client Results and Home refinement are not part of this task.
* Validation passed: extracted About section exactly matches the committed Home section after normalizing line endings; both Home and /about render AboutRavi. Home is unchanged beyond the import and replacement in its original position. Lint, production build and git diff --check passed.
* Local visual and interaction testing passed on desktop and 320px mobile, as confirmed by Ravi. The /about and Home About content and styling matched.
* Navigation, mobile-menu closing, scrolling, footer and overflow checks passed. /#about still reaches the Home About section.
* Foundation committed and merged; RF-048 production checkpoint complete.

### RF-047 Approved Fitness Hub Foundation

* RF-047 is Done. Merged to main at b507085 (b507085da286e278863c8baba0028ecae1d0c3ad); production verification passed, as confirmed by Ravi.
* Approved route: /fitness-hub, using SiteHeader and SiteFooter with a concise introduction and exactly two responsive Coming Soon cards.
* Approved heading: Real Training. Real Progress. Introduction: Practical training, movement skills and real coaching progress from RavFitness.
* Original video files are being retrieved. Ravi has permission to publish the client video.
* First planned videos: My Muscle-Up Journey and Client Muscle-Up Success.
* The page uses Video Coming Soon cards until the original videos are prepared and optimised; no video files, embeds or thumbnails are included.
* Shared navigation order: Home /, Coaching /coaching, Fitness Hub /fitness-hub, About Ravi /#about, Client Results /#results and Book a Complimentary Session /#contact.
* Page CTAs: Explore Coaching /coaching and Book a Complimentary Session /#contact.
* Validation passed: lint and production build; browser checks at 320×568 and widths 768, 1024, 1280 and 1440 confirmed one H1, exactly two cards, mobile stacking and no horizontal overflow. Desktop navigation fits without overlapping the brand; all six mobile links reach their destinations and close the menu.
* Desktop visual testing passed and the page design is approved by Ravi. Responsive browser checks passed at 320, 768, 1024, 1280 and 1440px; navigation, mobile-menu behaviour, CTAs and no-overflow checks passed.
* Original videos will replace the Coming Soon status after preparation and optimisation. No video files are included in this foundation checkpoint.
* Foundation committed and merged; production checkpoint complete. Original videos remain future work after preparation and optimisation.

### RF-046 Approved Coaching Page Implementation

* RF-046 is Done. Preview and production verification passed, as confirmed by Ravi, for merge commit db79c43 (db79c43d108272207658a4ebdafff6b5214519a7), merged to main and pushed to origin.
* Production verification passed for RF-044 Stages 1–3 merge commit 90ed8ee, as confirmed by Ravi.
* RF-044 Home refinement remains In Progress. Stage 4A content planning is Completed and approved by Ravi. Stage 4B is next, not started and requires separate authorization. No implementation is authorized yet.
* Approved route: /coaching, using the existing SiteHeader and SiteFooter.
* The expanded eight-section RF-046 design was rejected during local visual review, including the large black introduction and additional coaching sections.
* Approved first version: Extract the existing Home Coaching/Services section into components/coaching/CoachingServices.tsx and render the same component in its original Home location and between SiteHeader and SiteFooter on /coaching.
* Preserve the existing section's headings, wording, cards, classes, responsive behaviour and destinations exactly. It contains no CTA links. This extraction preserves the existing Small Group Training / 3–6 People copy; the earlier business facts below are deferred copy guidance, not changes approved for this first version.
* The rejected expanded page content and unused app/coaching/content.ts have been removed.
* Local visual testing passed on desktop and responsive testing passed at 320×568, as confirmed by Ravi.
* Cards stack correctly with no clipping or horizontal overflow. Header, navigation, scrolling and footer passed local testing.
* This first version intentionally reuses the existing Home Coaching section; detailed content refinement remains future work.
* Earlier business facts retained for a future approved copy revision:
* Coaching focuses on strength, movement, energy, confidence, consistency and sustainable progress at Goodlife Health Clubs Glen Iris, Melbourne.
* One-to-One Personal Training is the primary in-person service. Partner & Semi-Private Coaching is for 2–3 people maximum: partners, friends or appropriately matched people, not a large group exercise class.
* Online Coaching includes an individual program, progress tracking, accountability and a weekly connection/check-in. Clients may transition online after a 6- or 12-week in-person foundation.
* Training may use 1, 2 or 3 sessions per week, a 6-week foundation, 12-week development period, ongoing coaching, program design and technique guidance, or progress reviews. Recommend the appropriate option after a complimentary session and assessment.
* No prices, negotiable pricing, guaranteed results or unverified claims. Use complimentary session and Partner & Semi-Private Coaching terminology.
* Shared navigation now uses Home /, Coaching /coaching, About Ravi /#about, Client Results /#results and Book a Complimentary Session /#contact. This supersedes the Stage 2 interim destinations below; Fitness Hub remains absent.
* Home Hero Explore Coaching links to /coaching; all other Home content and styling remain unchanged during extraction. The shared header booking CTA uses /#contact.
* RF-045 remains deferred. RF-046 production verification passed.

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
* RF-044 Stage 4A: Conversion-focused Home preview content map — Completed and approved by Ravi. Stage 4B is next, not started and requires separate authorization. No implementation is authorized yet.

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

### Earlier Approved Home Page Content Map (historical)

The completed Stage 4A map is approved by Ravi and supersedes this earlier map. This earlier map is retained as history, not an implementation instruction: its separate trust strip, extra transformation preview, Hero-media replacement and expanded contact/footer scope are not part of Stage 4A. The production Hero preservation requirement takes precedence. Implementation still requires separate authorization.

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
| 14 September 2026 | RF-046 Coaching page foundation | Preview and production verification passed, confirmed by Ravi; Done | db79c43 | Production verified |
| 14 September 2026 | RF-047 Fitness Hub foundation | Production verification passed, confirmed by Ravi; Done | b507085 | Production verified |
| 14 September 2026 | RF-048 About Ravi page foundation | Production verification passed, confirmed by Ravi; Done | 91a4640 | Production verified |
| 15 September 2026 | RF-049 Client Results page foundation | Production verification passed, confirmed by Ravi; Done | 37c36ca | Production verified |
| 16 September 2026 | RF-051 platform integration direction | Done; production verification Passed, confirmed by Ravi in the Stage 4A brief | 9025357 | Production verified |
| 16 September 2026 | RF-044 Stage 4A Home content plan | Completed; final order, exact copy, Anthea feature/portrait, independent previews, legacy anchors, compact booking CTA and unchanged Hero approved by Ravi | This documentation checkpoint | No deployment authorized |
