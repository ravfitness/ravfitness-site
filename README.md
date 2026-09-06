# RavFitness Website

Official website for RavFitness personal training and coaching.

**Brand:** RavFitness  
**Tagline:** Never Break The Chain  
**Location:** Goodlife Health Clubs Glen Iris, Melbourne  
**Production website:** https://www.ravfitness.com.au

## Current Baseline

This README records the website state before the next review or development phase.

- Baseline name: RavFitness Website v1.0
- Status: Live and operational
- Baseline recorded: 6 September 2026
- Production deployment: 6 February 2026
- Production branch: `main`
- Production commit: `7011c6af7cf19f30c11577801e4323b78f16738c`
- Commit message: `Add David client testimonial to testimonials section`
- Local working tree at baseline: Clean
- Local, GitHub and Vercel versions: Synchronized

> The application package version remains `0.1.0`.  
> “RavFitness Website v1.0” is the documented website baseline.

## Repository and Deployment

- GitHub repository: https://github.com/ravfitness/ravfitness-site
- Vercel project: `ravfitness-site`
- Production domain: https://www.ravfitness.com.au
- Deployment platform: Vercel
- Production status at baseline: Ready

Changes pushed to the `main` branch are deployed through Vercel.

## Technology Stack

- Next.js `^16.1.1`
- React `^19.2.3`
- React DOM `^19.2.3`
- TypeScript `^5`
- Tailwind CSS `^4`
- ESLint `^9`
- Node.js type definitions `^20`

The project uses the Next.js App Router.

## Current Website Purpose

The website introduces RavFitness and supports enquiries for:

- One-on-one personal training
- Small-group training
- Online coaching
- Free consultations

The website is currently separate from the planned RavFitness fitness-tracking application. The two systems may be integrated later.

## Current Website Sections

The current single-page website includes:

1. Navigation
2. Hero section
3. Personal transformation
4. Training services
5. About RavFitness
6. Mission and coaching philosophy
7. Client testimonials and results
8. Consultation call to action
9. Contact information
10. Training location
11. Footer

## Current Brand Direction

- Primary colours: black, white and gold
- Core message: strength, movement, confidence and consistency
- Coaching principle: sustainable progress without extremes
- Brand tagline: Never Break The Chain

## Project Structure

Key project files and folders include:

```text
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
  sitemap.ts

public/
next.config.ts
postcss.config.mjs
tailwind.config.js
tsconfig.json
eslint.config.mjs
package.json