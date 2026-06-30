# Z-Flow Website — Trust + Conversion + SEO Upgrade (Design Spec)

**Date:** 2026-06-19
**Status:** Approved in brainstorming — pending written-spec review
**Scope:** Website only. The two "Hermes" SEO agents are a **separate spec** written next.

---

## Context — why this change

Z-Flow (z-flow.de) is a mature, bilingual (DE/EN) Next.js 15 / React 19 / Tailwind v4 / next-intl marketing site for an AI-automation agency, recently repositioned to "operator-engineers — we find the bottleneck, then build the fix," targeting established SMBs + German Mittelstand.

Mahmoud asked for a "proper review" and a "state-of-the-art" site that converts. Research into the site and a high-converting reference agency (makeitfuture.com) revealed the real problem: **this is not a rebuild — it's a trust-and-conversion upgrade on a strong foundation.** The reference converts on three things, and Z-Flow currently loses on all three *despite having the ingredients*:

1. **Proof is invisible.** `testimonials.ts` is intentionally empty (no-unverified-proof doctrine). Mahmoud now has verified written testimonials + a client video testimonial.
2. **No use-case landing pages.** The reference's entire SEO+conversion engine is "How we automated [X] → [metric]" pages. Z-Flow has the underlying *projects* but no use-case pages that rank and convert.
3. **The human layer is missing.** Mahmoud will add founder video + a client video — assets the reference does **not** have, a chance to beat it on "feels real, not AI."

Priorities (from Mahmoud, in order): **(1) SEO/organic discovery, (2) convert cold traffic to calls, (3) close warm/referral traffic.** No database — content stays file-based (MDX + typed TS), which is best for SEO, speed, cost, and security. The intended outcome: a site that ranks, that turns strangers into booked diagnostics, and that makes warm leads trust Z-Flow is real.

---

## Goals & non-goals

**Goals**
- Make verified proof visible across the site (testimonials, logos, metrics, video).
- Build a use-case SEO engine: standalone, schema-rich landing pages that rank and link to real project proof.
- Add the human/video layer (founder intro + client video + use-case explainer clips).
- Seed blog volume through the existing MDX pipeline.
- Strengthen technical SEO: schema, internal linking, sitemap, llms.txt.

**Non-goals**
- No rebuild, no redesign, no framework change. Reuse existing components/CSS.
- No Supabase / no database. Content stays MDX + typed TS files.
- No CMS. Publishing = adding files (humans or, later, the Hermes-Drafter agent).
- The two Hermes agents are out of scope here (separate spec).
- No new positioning — the ICP/offer from `ICP-PIVOT-SPEC.md` stands.

---

## Verified codebase facts (these shape the design)

- `TestimonialsSection` is **already wired** into the homepage (`page.tsx`) and self-guards on empty; project detail pages already render a testimonial via `testimonialId`. **Only the data array is empty** — infra is done.
- `HeroMedia` + `VideoModal` exist but are **orphaned** (imported nowhere). `VideoModal` expects self-hosted files: it requests a `.webm` sibling then falls back to the `.mp4`, with a `poster`. `public/videos/` does **not** exist.
- Homepage hero uses `HeroBrandVisual` (an SVG, load-bearing for LCP) — do **not** replace it with video.
- Blog MDX lives at **`src/content/blog/<slug>/{de,en}.mdx`** (not root `content/`), rendered by `src/lib/mdx.tsx` (`CONTENT_DIR` is blog-specific). Each post also needs a `src/data/blog.ts` entry + copy in both `messages/*.json`.
- `src/app/sitemap.ts` and `src/app/robots.ts` already exist as data-driven route handlers (loop `projects` + `blogPosts`). Extend, don't create.
- Copy is split across `messages/{de,en}.json` (both exactly parallel): body copy under feature namespaces (e.g. `projectDetails.<slug>.*`), SEO under `metadata.<page>`. **DE/EN parity is mandatory** — `t()` hard-fails on missing keys.
- Tech stack renders as **text pills** on project pages; logos exist in `public/images/` (n8n, make, weweb, xano, supabase, airtable, claude) but are only mapped by name in `home/page.tsx`. A name→logo map is net-new.
- `JsonLd.tsx` has `service`, `faqPage`, `breadcrumb`, `webPage`, `blogPosting`. Missing: `review`/`aggregateRating`, `videoObject`, `itemList`.

---

## Design

### Component / data reuse map

| Need | Reuse (path) |
|---|---|
| Written testimonials grid | `src/components/testimonials/TestimonialsSection.tsx` (takes `testimonials` prop; self-guards empty) |
| Testimonial data + lookup | `src/data/testimonials.ts` (`Testimonial`, `getTestimonialById`) |
| Big inline testimonial on detail pages | JSX pattern in `src/app/[locale]/projects/[slug]/page.tsx` |
| Video playback | `src/components/hero/VideoModal.tsx` + `HeroMedia.tsx` (orphaned, ready) |
| Use-case page layout | clone `projects/[slug]/page.tsx` + section rhythm from `digitalisierung/page.tsx` |
| On-brand visual (no screenshot) | `src/components/ui/BrowserMockup.tsx` / `ProjectArtifact.tsx` |
| SEO schema | `src/components/seo/JsonLd.tsx` (`schemas.*`) |
| Blog pipeline | `src/lib/mdx.tsx` (`getBlogPostContent`) |
| Sitemap/robots | `src/app/sitemap.ts`, `src/app/robots.ts` |
| Tech logos | `public/images/*` (build a `name → logo` map) |
| Nav/footer | `src/components/layout/Header.tsx`, `Footer.tsx` |

### 1. Trust System
- **Written testimonials:** populate `src/data/testimonials.ts` with verified `{ id, name, role, company, quote_en, quote_de }`. Keep voice slightly raw (don't over-polish). They auto-surface on homepage + any project/use-case with a matching `testimonialId`.
- **Two homepage placements:** existing `TestimonialsSection` (before final CTA) + a second compact placement higher (after Services), passing a sliced subset via the existing `testimonials` prop — no component change.
- **Client video testimonial:** add optional `videoSrc?: string` to the `Testimonial` interface; render a play-button (`HeroMedia` → `VideoModal`) in that card or a dedicated single-card block.
- **Founder video:** add to the **About page** hero via `HeroMedia` (greenfield; About currently has no media). Keep homepage `HeroBrandVisual` untouched.
- **Logos + metrics:** client logos near the final CTA; real before/after numbers in use-case + project pages.

### 2. Use-Case SEO Engine
- **Routes:** `src/app/[locale]/use-cases/page.tsx` (listing) + `src/app/[locale]/use-cases/[slug]/page.tsx` (detail), mirroring `projects/[slug]`.
- **Data, not MDX, not DB:** new `src/data/use-cases.ts` cloned from `projects.ts`. Fixed structured layout → drift-free, server-rendered schema on every page. Copy in `messages` under `useCases.<slug>.*` (body) + `metadata.useCases.<slug>` (SEO).
- **`UseCase` shape:**
  ```ts
  export interface UseCase {
    slug: string                  // e.g. 'invoice-reconciliation-automation'
    category: ProjectCategory     // reuse existing union (badge colors + artifact)
    stack: string[]               // rendered as logo badges
    relatedProjectSlug: string    // link to the real case study
    relatedUseCaseSlugs: string[] // internal linking
    testimonialId?: string        // reuse getTestimonialById
    videoSrc?: string             // optional explainer clip
    featured: boolean
  }
  ```
- **Page layout:** Problem → How we automate (with `BrowserMockup`/explainer clip) → Result (metrics) → tech-stack logo badges → embedded testimonial → linked real case study (`getProjectBySlug(relatedProjectSlug)`) → related use-cases → CTA. `generateStaticParams` loops `useCases × locales`. `generateMetadata` with canonical + de/en/x-default alternates.
- **Launch slugs:** `invoice-reconciliation-automation`, `outreach-automation`, `car-handover-operations` (Movacar), `appointment-booking-automation` (+ later: document-processing, lead-enrichment, customer-onboarding).
- **Internal-link triangle (top SEO lever):** use-case ↔ project ↔ blog. Add reciprocal "See the use case" links from `projects/[slug]` and relevant blog posts; add "Use Cases" to nav + footer.

### 3. Blog volume
- Existing MDX pipeline. Each post = `src/content/blog/<slug>/{de,en}.mdx` + `blog.ts` entry + `blog.posts.<slug>.*` and `metadata.blog` keys in both JSON files (5 touchpoints). Seed several posts manually now; the **5-touch friction is the explicit job of the future Hermes-Drafter agent.** Sitemap auto-updates from `blog.ts`.

### 4. Technical SEO
- **Extend `sitemap.ts`:** add a `useCases` loop with hreflang alternates; add `/use-cases` to static paths.
- **New schema in `JsonLd.tsx`:** `review` + `aggregateRating` (gated on verified-testimonial count — honors the no-unverified-proof doctrine), `videoObject` (founder + clips), `itemList` (optional, listing page). Use-case pages emit `breadcrumb` + `service` (with `offers` price) + `faqPage` + `review` (when present).
- **`public/llms.txt` + `llms-full.txt`:** add a "## Use Cases" section + verified proof once available.

### Video hosting decision
**Self-host in `public/videos/`** (create the dir). Works with `VideoModal` as-is, no third-party, no cookie banner. Keep clips short/compressed. Posters in `public/images/`. Provide both `.webm` + `.mp4` encodings to avoid a noisy (harmless) 404 on the auto-requested `.webm`.

---

## Phased build order

1. **Phase 1 — Trust System:** populate `testimonials.ts`; add second homepage placement; wire founder video (About) + client video testimonial; logos + metrics. *(Highest ROI.)*
2. **Phase 2 — Use-Case Engine:** `use-cases.ts` + listing + detail pages + first 4 slugs + schema + tech-logo map + sitemap + nav/footer + internal links.
3. **Phase 3 — Video + SEO polish:** `public/videos/`, `review`/`aggregateRating`/`videoObject` schema (gated), llms.txt update.
4. **Phase 4 — Blog volume:** seed several bilingual posts to prove the lane.

(Phase 5 — the two Hermes agents — is a **separate spec**, written after this ships.)

---

## Risks & gotchas

- **DE/EN message parity** is the #1 runtime-error risk — add keys to both `messages/*.json` together; `t()`/`t.raw()` hard-fail on missing keys.
- **No-unverified-proof doctrine:** only publish client-approved quotes; Review/AggregateRating schema gated on real count.
- **`next/image` referenced assets must exist** or the build errors — reuse the `BrowserMockup category=` artifact fallback instead of pointing at non-existent screenshots.
- **`VideoModal` auto-requests `.webm`** — supply both encodings.
- **Don't replace homepage `HeroBrandVisual`** (LCP/brand).
- **Slug collisions:** keep use-case slugs distinct + keyword-rich; link explicitly to project case studies.

---

## Verification

- `npm run build` passes; new `/use-cases` + each `/use-cases/[slug]` build for both DE and EN.
- Homepage shows testimonials in both placements; About shows founder video; client video testimonial plays.
- `grep` confirms no missing `messages` keys (build would fail otherwise); DE and EN both render every new page.
- View source on a use-case page: correct `breadcrumb` + `service` + `faqPage` JSON-LD present; canonical + hreflang alternates correct.
- `sitemap.xml` lists all new use-case URLs (both locales); `llms.txt` includes the Use Cases section.
- Reciprocal internal links resolve (use-case ↔ project ↔ blog), no broken links.
- Lighthouse/CWV not regressed on homepage (hero visual unchanged).
