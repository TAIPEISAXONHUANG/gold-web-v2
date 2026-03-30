# Structured Data Best Practices

Comprehensive summary based on Google's official structured data documentation.

---

## JewelryStore Schema

Type: `LocalBusiness` > `Store` > `JewelryStore`

### Required Fields
| Field | Type | Notes |
|-------|------|-------|
| `@type` | `JewelryStore` | Must be exact type |
| `name` | Text | Official business name, must match GBP |
| `address` | `PostalAddress` | streetAddress, addressLocality, addressRegion, postalCode, addressCountry |
| `telephone` | Text | Include country code for international, e.g. `+886-2-2381-4111` |
| `openingHours` | Text or array | ISO format: `Mo-Fr 10:00-21:00`, `Sa 10:00-18:00` |
| `geo` | `GeoCoordinates` | latitude + longitude (decimal degrees) |
| `image` | URL or ImageObject | At least one high-quality storefront photo |
| `url` | URL | Canonical homepage URL |
| `priceRange` | Text | e.g. `$$` or `$$$` (Google uses this for filtering) |

### Recommended Fields
- `sameAs` — social media profile URLs (array)
- `aggregateRating` — if reviews are collected
- `hasMap` — Google Maps URL
- `paymentAccepted` — e.g. `Cash, Credit Card`
- `currenciesAccepted` — e.g. `TWD`

---

## Service Schema

Type: `Service`

### Required Fields
| Field | Type | Notes |
|-------|------|-------|
| `@type` | `Service` | |
| `name` | Text | Service name, e.g. "K Gold Buyback" |
| `description` | Text | 50-160 chars recommended |
| `provider` | `Organization` or `LocalBusiness` | Use `@id` to reference main org |
| `offers` | `Offer` | Must include `price` or `priceRange`, `priceCurrency` |
| `areaServed` | `AdministrativeArea`, `GeoCircle`, or `Place` | Where the service is available |
| `url` | URL | Canonical URL for the service page |

### Offers Sub-fields
```json
"offers": {
  "@type": "Offer",
  "price": "0",
  "priceCurrency": "TWD",
  "availability": "https://schema.org/InStock",
  "validFrom": "2026-01-01"
}
```

---

## BlogPosting Schema

Type: `BlogPosting` (subtype of `Article`)

### Required Fields
| Field | Type | Notes |
|-------|------|-------|
| `@type` | `BlogPosting` | |
| `headline` | Text | Max 110 characters for Google display |
| `author` | `Person` | Must include `author.name` at minimum |
| `datePublished` | Date | ISO 8601: `2026-03-30` |
| `dateModified` | Date | ISO 8601: must be >= datePublished |
| `description` | Text | 50-160 chars, used as meta description fallback |
| `image` | URL or ImageObject | At least 1200px wide for AMP/Discover eligibility |
| `publisher` | `Organization` | Must include `name` and `logo` (ImageObject) |

### Recommended Fields
- `mainEntityOfPage` — canonical URL
- `wordCount` — helps AI engines gauge depth
- `articleSection` — category
- `keywords` — array of topic tags

---

## FAQPage Schema

Type: `FAQPage`

### Required Fields
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here."
      }
    }
  ]
}
```

### Rules
- Each page should have only ONE `FAQPage` schema
- Every `Question` must have exactly one `acceptedAnswer`
- Answer `text` can contain HTML (`<a>`, `<b>`, `<ul>`) but keep it concise
- Minimum 2 questions recommended, no hard maximum (Google may truncate at ~10 in SERPs)
- Questions must be visible on the page (no hidden content)

---

## HowTo Schema

Type: `HowTo`

### Required Fields
| Field | Type | Notes |
|-------|------|-------|
| `@type` | `HowTo` | |
| `name` | Text | Title of the how-to guide |
| `step` | Array of `HowToStep` | Each step needs `name` and `text` |
| `description` | Text | Brief overview of the process |

### HowToStep Structure
```json
{
  "@type": "HowToStep",
  "name": "Step title",
  "text": "Detailed step instructions",
  "image": "https://example.com/step1.jpg",
  "url": "https://example.com/guide#step1"
}
```

### Optional Fields
- `totalTime` — ISO 8601 duration, e.g. `PT30M`
- `estimatedCost` — `MonetaryAmount` with `currency` and `value`
- `supply` — materials needed (`HowToSupply`)
- `tool` — tools needed (`HowToTool`)

---

## Person Schema

Type: `Person`

### Required Fields
| Field | Type | Notes |
|-------|------|-------|
| `@type` | `Person` | |
| `name` | Text | Full name |
| `jobTitle` | Text | e.g. "Senior Gold Appraiser" |
| `worksFor` | `Organization` | Include org name and URL |
| `url` | URL | Profile or about page URL |

### Recommended Fields
- `image` — headshot photo
- `sameAs` — LinkedIn, social profiles (array)
- `knowsAbout` — expertise topics (array of Text)
- `description` — brief bio

---

## Common Mistakes

1. **Missing required fields** — Google will silently drop the rich result if any required field is absent. Always validate after changes.
2. **Wrong @type nesting** — `Offer` must be nested inside `Service` or `Product`, not at the top level. `PostalAddress` must be nested inside `address`, not standalone.
3. **Duplicate schemas on the same page** — Do not put two `JewelryStore` schemas on one page. Use one primary entity per page.
4. **Invalid date formats** — Must be ISO 8601 (`2026-03-30` or `2026-03-30T10:00:00+08:00`). Never use `March 30, 2026` or `30/03/2026`.
5. **Using deprecated properties** — `@context: schema.org` should use `https://schema.org` (with https). `telephone` should not use `contactPoint` for simple cases.
6. **Mismatched data** — Schema data must match visible page content. Google penalizes hidden or misleading schema.
7. **Missing `@id`** — Without `@id`, Google cannot cross-reference entities across pages. Use canonical URL as `@id`.
8. **Empty arrays** — `mainEntity: []` is worse than omitting the field. Never include empty arrays.

---

## Validation Tools

| Tool | URL | Purpose |
|------|-----|---------|
| Google Rich Results Test | https://search.google.com/test/rich-results | Tests if schema qualifies for rich results |
| Schema Markup Validator | https://validator.schema.org/ | Validates against schema.org spec (broader than Google) |
| Lighthouse Structured Data Audit | Chrome DevTools > Lighthouse | Checks for errors in structured data during site audit |

### Validation Workflow
1. Run Rich Results Test on every page with schema changes
2. Run Schema Markup Validator for full spec compliance
3. Run Lighthouse audit as part of pre-deploy checklist
4. Monitor Google Search Console > Enhancements for ongoing issues

---

## Best Practices

- **One primary entity per page** — A service page should have `Service` as the main schema, not `Service` + `JewelryStore` competing at the same level.
- **Use `@id` for cross-referencing** — Set `@id` on the Organization, then reference it with `{"@id": "https://www.gold-tw.com/#organization"}` from Service.provider, BlogPosting.publisher, etc.
- **Always include `publisher` for articles** — BlogPosting without `publisher` will not generate rich results.
- **Keep `dateModified` current** — Update `dateModified` whenever content changes. Stale dates signal neglect to AI engines.
- **Use JSON-LD format** — Google recommends JSON-LD over Microdata or RDFa. Place in `<head>` or `<body>`.
- **Test after every deploy** — Automated schema validation should be part of the CI/CD pipeline.
