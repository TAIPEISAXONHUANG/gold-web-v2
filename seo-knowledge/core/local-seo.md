# Local SEO Fundamentals

Best practices for local search optimization, focused on jewelry/gold businesses in Taiwan.

---

## NAP Consistency

**NAP = Name, Address, Phone**

The single most important local SEO factor: your business name, address, and phone number must be **identical** across every citation, listing, and page.

### Rules
- **Name**: Use the exact registered business name. Do not add keywords ("大信當舖" not "大信當舖 - 台北黃金回收最高價").
- **Address**: Pick one format and use it everywhere. Include postal code. Example: `10647 台北市大安區復興南路一段XXX號`.
- **Phone**: Use one primary number. Format consistently with country code: `+886-2-2381-4111` or `02-2381-4111` (pick one).
- **Audit regularly**: Search for your business name on Google and check every listing for consistency.

### Common Mistakes
- Different phone numbers on website vs Google Business Profile
- Abbreviated vs full address (e.g., "Sec." vs "Section")
- Old address still on directory listings after a move
- Schema `postalCode` not matching visible address

---

## Google Business Profile (GBP) Optimization

### Essential Setup
1. **Primary category**: `Jewelry Store` or `Gold Dealer` (choose the most specific)
2. **Secondary categories**: Add all relevant ones (e.g., `Pawn Shop`, `Jewelry Buyer`)
3. **Business description**: 750 chars max, include key services and location naturally
4. **Service area**: Define if you serve beyond your physical location
5. **Attributes**: Mark all applicable (wheelchair accessible, parking, etc.)

### Photos
- Add 10+ high-quality photos minimum
- Categories: storefront exterior, interior, team, products, process
- Update monthly with fresh photos
- Geo-tag photos with store coordinates before uploading
- Name files descriptively: `taipei-gold-buyback-store-front.jpg`

### Reviews
- Respond to every review within 24 hours
- Thank positive reviewers specifically ("Thank you for choosing our gold appraisal service")
- Address negative reviews professionally with resolution
- Never offer incentives for reviews (violates Google policy)
- Aim for 4.5+ star average with 50+ reviews

### Posts
- Publish GBP posts weekly: offers, events, updates
- Include gold price updates as posts
- Add CTAs: "Call now", "Visit us", "Learn more"
- Posts expire after 7 days (events after event date)

### Q&A
- Seed your own Q&A with common customer questions
- Monitor and answer new questions promptly
- Upvote the best answers

---

## Local Keywords

### City + Service Patterns
Build pages and content around these keyword structures:

| Pattern | Example |
|---------|---------|
| City + Service | 台北黃金回收 |
| District + Service | 大安區黃金回收 |
| City + Product + Service | 台北K金回收 |
| City + Service + Modifier | 台北黃金回收推薦 |
| Near me variations | 黃金回收附近 |

### Implementation
- Include city + service in page `<title>` and `<h1>`
- Use district-level keywords in body content naturally
- Create separate landing pages for each major service + location combo
- Include location in image alt text: "台北大安區黃金回收門市外觀"

---

## areaServed Schema

### Using AdministrativeArea (Recommended for City/District)
```json
"areaServed": [
  {
    "@type": "AdministrativeArea",
    "name": "台北市"
  },
  {
    "@type": "AdministrativeArea",
    "name": "新北市"
  }
]
```

### Using GeoCircle (For Radius-Based Service Areas)
```json
"areaServed": {
  "@type": "GeoCircle",
  "geoMidpoint": {
    "@type": "GeoCoordinates",
    "latitude": 25.0330,
    "longitude": 121.5654
  },
  "geoRadius": "30000"
}
```
Note: `geoRadius` is in meters.

### Using Place (For Specific Locations)
```json
"areaServed": {
  "@type": "Place",
  "name": "Taipei City, Taiwan",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Taipei",
    "addressCountry": "TW"
  }
}
```

### Best Practice
- Use `AdministrativeArea` for named regions (cities, districts)
- Use `GeoCircle` when you have a radius-based service area
- Define `areaServed` on both `LocalBusiness` and `Service` schemas
- Be specific: list actual areas served, not the whole country

---

## Local Citation Building

### Priority Directories (Taiwan)
1. Google Business Profile (essential)
2. Apple Maps Connect
3. Bing Places for Business
4. Facebook Business Page
5. LINE Official Account
6. Taiwan Yellow Pages (中華黃頁)
7. iGoogle Business (愛貝斯)
8. Yelp Taiwan

### Industry-Specific Listings
- Jewelry industry associations
- Local chamber of commerce
- Taiwan pawnbroker association directories
- Financial services directories

### Citation Audit
- Use tools to find and fix inconsistent citations
- Remove duplicate listings
- Claim unclaimed listings
- Update all listings when any NAP detail changes

---

## Reviews and Ratings

### AggregateRating Schema
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "156",
  "bestRating": "5",
  "worstRating": "1"
}
```

### Rules
- Only add `AggregateRating` if you collect reviews on your own site
- `ratingValue` and `reviewCount` must match visible page content
- Do not fabricate or inflate ratings (Google penalty risk)
- Update the count regularly as new reviews come in

### Review Management Strategy
- Set up review request emails 24 hours after service
- Make leaving a review easy: direct link to Google review form
- Display testimonials on site with proper `Review` schema
- Monitor third-party review sites weekly

---

## LocalBusiness Schema for Jewelry Stores

### Complete Example
```json
{
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  "@id": "https://www.gold-tw.com/#organization",
  "name": "大信當舖",
  "image": "https://www.gold-tw.com/storefront.jpg",
  "url": "https://www.gold-tw.com",
  "telephone": "+886-2-2381-4111",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "復興南路一段XXX號",
    "addressLocality": "台北市",
    "addressRegion": "大安區",
    "postalCode": "10647",
    "addressCountry": "TW"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.0330,
    "longitude": 121.5654
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "10:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    {"@type": "AdministrativeArea", "name": "台北市"},
    {"@type": "AdministrativeArea", "name": "新北市"}
  ],
  "sameAs": [
    "https://www.facebook.com/goldtw",
    "https://line.me/ti/p/@goldtw"
  ]
}
```

### Key Points
- Use `JewelryStore` (most specific type), not just `LocalBusiness`
- `@id` enables cross-referencing from Service and BlogPosting schemas
- `openingHoursSpecification` is more precise than `openingHours` string
- Include all `sameAs` social profiles for knowledge panel enrichment

---

## Mobile Optimization for Local Search

### Why It Matters
- 60%+ of local searches happen on mobile
- "Near me" searches are almost exclusively mobile
- Google uses mobile-first indexing

### Checklist
- [ ] Click-to-call: phone number wrapped in `tel:` link
- [ ] Click-to-navigate: address linked to Google Maps
- [ ] Fast load time: under 3 seconds on 4G (use Lighthouse to test)
- [ ] Responsive design: no horizontal scrolling, readable text without zoom
- [ ] Sticky CTA: phone or LINE button always accessible
- [ ] AMP consideration: for blog/article pages if speed is an issue
- [ ] Touch targets: buttons minimum 48x48px
- [ ] Form optimization: minimal fields, autofill enabled for address/phone
