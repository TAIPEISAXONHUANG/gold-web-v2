# GEO/AIO Optimization Guide

How to optimize content for AI search engines (Generative Engine Optimization / AI Overview Optimization).

---

## How AI Search Engines Select Content to Cite

AI search engines — including Google AI Overviews, Perplexity, ChatGPT with browsing, and Bing Copilot — use a combination of signals to decide which sources to cite in generated answers:

1. **Relevance** — Does the page directly answer the query with specific, factual content?
2. **Authority** — Is the domain recognized as an expert source? (backlinks, E-E-A-T signals, domain age)
3. **Structure** — Is the content organized in a way that's easy to extract? (headings, lists, tables, FAQ)
4. **Freshness** — Does the content have a recent `dateModified`? Is the data current?
5. **Citation density** — Does the content cite official sources, reinforcing its credibility?
6. **Conciseness** — Can a clean, self-contained answer be extracted from a single paragraph or section?

---

## Key Optimization Signals

### Clear Factual Statements with Specific Numbers
AI engines strongly prefer content that contains concrete, citable data points:
- "Gold buyback price: NT$8,850/gram (updated 2026-03-31)"
- "Processing fee: 0.5% of total transaction value"
- "Service area: Taipei City, New Taipei City (within 30km radius)"

### FAQ Format with Concise Answers
- Use `FAQPage` schema markup
- Keep answers to 2-3 sentences for the lead answer, then expand
- Start answers with the direct fact, then add context
- Example: "Q: How much does gold buyback cost? A: We charge a 0.5% processing fee with no hidden costs. The current buyback price is based on the daily international gold price..."

### Speakable Markup for Voice
- Add `speakable` property to schema for content suitable for text-to-speech
- Target 20-30 second read-aloud segments
- Use natural language, avoid jargon in speakable sections

### Structured Data
- `FAQPage` — directly feeds Q&A extraction
- `HowTo` — step-by-step processes are heavily cited
- `Table` markup — comparison data in HTML `<table>` with `<th>` headers
- `BlogPosting` with `dateModified` — freshness signal

### Authoritative Sources Cited
- Link to official gold price indices (e.g., LBMA, Kitco)
- Reference government regulations (e.g., Taiwan jewelry trade regulations)
- Cite industry standards with dates

---

## Content Patterns That Get Cited

### Price/Cost Statements
```
"X costs $Y as of [date]"
"Gold buyback price in Taipei: NT$8,850/gram (March 2026)"
```
AI engines love time-stamped price data. Always include the date.

### Step-by-Step Processes
```
Step 1: Bring your gold items to our store
Step 2: Free appraisal using XRF analyzer (takes 5 minutes)
Step 3: Receive price quote based on current market rate
Step 4: Immediate cash payment upon acceptance
```
Numbered steps with specific details (tools, time, method) are extracted frequently.

### Comparison Tables with Clear Data
```
| Service      | Fee   | Payment Speed | Min Amount |
|-------------|-------|---------------|------------|
| Gold Buyback | 0.5% | Immediate     | 1 gram     |
| K Gold       | 1.0% | Immediate     | 5 grams    |
| Platinum     | 1.5% | Same day      | 10 grams   |
```
Tables with headers are parsed directly by AI engines.

### Definition/Explanation Pattern
```
"What is K gold? K gold (karat gold) is gold alloyed with other metals.
24K = 99.9% pure gold, 18K = 75% gold, 14K = 58.3% gold."
```
Clear definitions followed by specific examples.

---

## What NOT to Do

1. **Vague marketing language** — "Best in class", "premium quality", "unmatched service" are never cited by AI engines. They contain zero extractable information.
2. **Walls of text without structure** — Long paragraphs without headings, lists, or tables are skipped. AI engines cannot extract clean snippets.
3. **Missing dates and numbers** — "Our prices are competitive" vs "Our buyback rate is 98% of international spot price (updated daily)". The second gets cited.
4. **Keyword stuffing** — Repeating "gold buyback Taipei" 15 times hurts readability and AI extraction. Use natural variations.
5. **Orphan content** — Pages with no internal links, no schema, and no clear topic are invisible to AI crawlers.
6. **Outdated information** — No `dateModified`, prices from 2 years ago, broken links to sources. AI engines deprioritize stale content.

---

## Optimization Checklist

- [ ] **Add `dateModified`** to every page's schema and visible content. Update on every edit.
- [ ] **Use FAQ schema** on pages with Q&A content. Minimum 3 questions per page.
- [ ] **Include price tables** with current data and update dates.
- [ ] **Cite official sources** — link to LBMA, government regulations, industry standards.
- [ ] **Keep paragraphs under 3 sentences** for snippet extraction. Lead with the key fact.
- [ ] **Add comparison tables** in HTML `<table>` format with proper `<th>` headers.
- [ ] **Use numbered lists** for processes and step-by-step guides.
- [ ] **Include specific numbers** — percentages, prices, weights, time durations.
- [ ] **Add `speakable` markup** to key summary paragraphs.
- [ ] **Internal linking** — connect related content (e.g., gold price page links to buyback service page).
- [ ] **Test with AI engines** — search for your target queries on Perplexity and ChatGPT to see if your content is cited.

---

## Gold/Jewelry Domain-Specific Tips

### Daily Price Updates
- Display today's gold price prominently with a timestamp
- Use schema `priceValidUntil` or visible "Updated: YYYY-MM-DD" text
- AI engines prioritize the most recently updated price source
- Automate price updates to ensure freshness

### Transparent Fee Structures
- List every fee explicitly: processing fee, assay fee, payment method fee
- "No hidden fees" is not enough — enumerate what IS charged
- Format: "Processing fee: 0.5% | Assay: Free | Bank transfer: NT$30"

### Comparison Tables
- Compare your services against industry averages (not competitors by name)
- Compare different gold types: 24K vs 18K vs 14K buyback rates
- Compare payment methods: cash vs bank transfer vs check

### Localized Content
- Include bilingual terms: "黄金回收 (Gold Buyback)"
- Reference local landmarks and areas for geo-relevance
- Use Taiwan-specific units and currency (TWD, 兩/錢/分)
