# Z-Flow Website — Content Alignment to Alina's Doc (Design)

**Date:** 2026-06-30
**Source content doc:** `/Users/mahmoud/Desktop/Apps/Z-flow/Z-flow.md` (Alina's research)
**Target:** `/Users/mahmoud/Desktop/Apps/Z-flow/website` (Next.js App Router, bilingual EN/DE via next-intl)

## Goal

Align the live website copy to Alina's content doc, page by page, and publish the
flagship **Prospectify** case study with real, client-approved content (Wouter Wippert
testimonial + photo + links).

## Guiding principle

Align live copy to Alina's doc. **Do NOT delete good live content the doc simply didn't
restate** (e.g. Company Brain's Knowledge Sources & Integrations sections, the Flow Partner
retainer tier, the EU AI Act compliance blocks). Where the doc and live disagree on a *fact*
(client name, numbers, CTA label), the doc + the founder's decisions win. Copy changes only —
no design-system or layout changes beyond the one testimonial render block.

## Locked decisions (from founder)

1. **Client brand = "Prospectify"** everywhere — display copy AND the URL slug.
   - Rename slug `weprospectify` → `prospectify` across data + i18n keys + the operations-audit deep-link.
   - Add a permanent redirect `/projects/weprospectify` → `/projects/prospectify` (+ locale-prefixed variant),
     mirroring the existing `growth-ops-teardown` → `operations-audit` pattern in `next.config.ts`.
   - External website link stays `https://weprospectify.com/` (that's their domain, not their brand).
2. **Case study = Alina's version**, published with ALL of Alina's numbers:
   €17,000/yr saved, 580 hrs of manual work eliminated, 150,000 leads, 20+ clients, 7+ SDRs,
   14-workflow n8n engine, Supabase single source of truth, Smartlead + HeyReach + Airtable,
   custom MCP server. Keep the 8-week MVP / 12-week product timeline (factual project history).
3. **Testimonial:** Wouter Wippert, "Founder, Prospectify".
   - Photo: `/images/testimonials/wouter-wippert.jpg` (founder to drop the file in; dir created).
   - Link to company website: `https://weprospectify.com/`
   - Link to LinkedIn: `https://www.linkedin.com/in/wouterwippert/`
   - Quotes: Alina's exact English quotes from the doc; faithful German translations.
4. **Primary CTA = "Book your free diagnostic"** standardized site-wide
   (header button, footer button, all page-closing CTAs). Routes to `/contact` (which hosts the
   Google Calendar diagnostic embed). Keep secondary "case studies" / "pricing" links where they exist.
5. **Scope = full site:** homepage, services + 3 sub-pages, Company Brain, Operations Audit,
   pricing, contact, plus the case study and global CTAs. Both locales (EN + DE).

## Current-state facts (from gap analysis)

- Copy is fully i18n-driven from `src/messages/en.json` + `de.json` (2071 lines each, identical key structure).
- `src/data/testimonials.ts` array is **currently empty** (live entry was already removed; the
  original "[VERIFY] placeholder" is now a commented-out template). We populate it fresh.
- `src/data/projects.ts` holds structural metadata only; the flagship is the lone `featured: true`
  entry, slug `weprospectify`, `testimonialId: 'weprospectify'`.
- The project detail page (`src/app/[locale]/projects/[slug]/page.tsx`) renders a testimonial block
  only when `testimonialId` resolves AND a quote exists — currently never renders.
- `public/images/projects/` does NOT exist on disk; thumbnails are referenced but absent and the
  build tolerates this today. We will not depend on image presence for the build.
- Pre-existing bug: on the homepage Services cards, the title keys and destination links are crossed
  (`services.mvp` title links to /automation and vice-versa). Fix as part of homepage alignment.
- CTA labels are fragmented: header/footer say "Start Project"/"Request Project" while landing pages
  say "Book a free 30-min diagnostic" across ~6 different keys. Standardize.

## Execution plan (section order = review checkpoints)

Executed in this order; check in with founder after each section before proceeding.

### Section 1 — Prospectify case study (Step-0 priority)
- `src/data/testimonials.ts`: extend `Testimonial` interface with optional `companyUrl`, `linkedinUrl`;
  populate Wouter Wippert entry (id `prospectify`, avatar, both links, EN+DE quotes).
- `src/data/projects.ts`: rename slug + testimonialId + thumbnail path + relatedSlugs `weprospectify`→`prospectify`.
- `src/messages/en.json` + `de.json`:
  - Rename i18n keys `projects.weprospectify` and `projectDetails.weprospectify` → `prospectify`.
  - Rewrite `projects.prospectify` card (title/description/results) to Alina's headline + numbers.
  - Rewrite `projectDetails.prospectify` (title, subtitle, keyMetric, challenge, solution, results
    metrics, takeaways) to Alina's narrative + numbers (€17k/yr, 580 hrs, etc.).
  - Update prose mentions of "WeProspectify"/"Weprospectify" → "Prospectify" in `teardown.proof.quote`
    and `teardown.hero.ctaSecondary` ("See the Prospectify case").
- `src/app/[locale]/operations-audit/page.tsx`: deep-link `/projects/weprospectify` → `/projects/prospectify`.
- `src/app/[locale]/projects/[slug]/page.tsx`: extend testimonial render block to show avatar +
  company website link + LinkedIn link when present.
- `next.config.ts`: add permanent redirect `weprospectify` → `prospectify` (locale + non-locale).
- `public/images/testimonials/` dir created; founder drops `wouter-wippert.jpg`.

### Section 2 — Homepage (`home` namespace, EN+DE)
Align hero, "three problems we solve" cards, "real projects, real numbers" stats strip, process,
closing CTA to the doc. Fix the crossed card-link bug. Standardize closing CTA.

### Section 3 — Services + 3 sub-pages (`services`, `mvpPage`, `automationPage`, `aiPage`, EN+DE)
Align headlines/descriptions/metric framing/use-cases/principles/EU-AI-Act copy to the doc.
Keep structural richness; swap copy only.

### Section 4 — Company Brain, Operations Audit, Pricing, Contact (EN+DE)
Align hero + key sections to the doc wording. Keep extra live sections the doc omits.
Reconcile pricing package descriptions + FAQ. Update Prospectify display name where referenced.

### Section 5 — Global CTA standardization
Header "Start Project" → "Book your free diagnostic"; footer "Request Project" → same;
project-detail bottom CTA aligned. Reuse one canonical `common.cta` key.

## Out of scope

- No route changes beyond the slug rename + its redirect. No new pages.
- No design-system / visual / component-structure changes beyond the testimonial render block.
- No backend / API / form-handler changes.

## Verification

`npm run build` from `website/` must compile clean at the end (catches missing/renamed i18n keys,
TS errors on new Testimonial fields). Both locales must keep identical key structure.
