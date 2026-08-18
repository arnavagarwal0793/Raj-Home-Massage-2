import { Helmet } from "react-helmet-async";
import { BRAND, FAQ_ITEMS, REVIEWS, SERVICES } from "@/constants/content";

const TITLE = "Raj Home Massage | Massage Therapist in Andheri West, Mumbai";
const DESCRIPTION =
  "Raj Home Massage offers professional massage therapy by Raj for men and women in Andheri West, Mumbai, near Mumbai International Airport. Home, hotel, massage centre, couple and four-hand massage services available.";

const LOGO_URL = BRAND.logoUrl;
const PHOTO_URL = BRAND.aboutPortraitUrl;

const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Raj Home Massage",
  image: [LOGO_URL, PHOTO_URL],
  url: "https://www.rajhomemassage.com",
  telephone: "+919702424106",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No 9, Prathmesh Complex, Near Country Club, Veera Desai Road",
    addressLocality: "Andheri West",
    addressRegion: "Maharashtra",
    postalCode: "400053",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 19.1367, longitude: 72.8296 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "07:00", closes: "23:00" },
  ],
  areaServed: ["Andheri West","Andheri East","Juhu","Versova","Lokhandwala","Bandra","Marol","Goregaon","Powai","Colaba","Lower Parel","Worli"],
  sameAs: [
    BRAND.googleBusinessHref,
    "https://www.instagram.com/massage_by_raj",
    "https://x.com/raj_therapist",
    "https://www.reddit.com/u/RajHomeWellness",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "124",
    bestRating: "5",
  },
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raj",
  jobTitle: "Massage Therapist",
  image: [PHOTO_URL],
  worksFor: { "@type": "HealthAndBeautyBusiness", name: "Raj Home Massage" },
  knowsAbout: ["Full Body Massage","Deep Tissue Massage","Swedish Massage","Balinese Massage","Lomi Lomi Massage","Couple Massage","Four Hand Massage","Sports Massage","Lymphatic Drainage Massage"],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const SERVICE_SCHEMAS = SERVICES.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  provider: { "@type": "HealthAndBeautyBusiness", name: "Raj Home Massage" },
  areaServed: "Andheri West, Mumbai",
  serviceType: "Massage Therapy",
  offers: {
    "@type": "Offer",
    price: "2999",
    priceCurrency: "INR",
    description: "Starting from ₹2,999",
  },
  bookingURL: "tel:+919702424106",
}));

const REVIEW_SCHEMAS = REVIEWS.map((r) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  reviewBody: r.text,
  author: { "@type": "Person", name: r.name },
  reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
  itemReviewed: { "@type": "HealthAndBeautyBusiness", name: "Raj Home Massage" },
}));

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Raj Home Massage",
  url: "https://www.rajhomemassage.com",
};

export const SEO = () => {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://rajhomemassage.com" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content="https://rajhomemassage.com" />
      <meta property="og:image" content={LOGO_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={LOGO_URL} />

      <script type="application/ld+json">{JSON.stringify(BUSINESS_SCHEMA)}</script>
      <script type="application/ld+json">{JSON.stringify(PERSON_SCHEMA)}</script>
      <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      <script type="application/ld+json">{JSON.stringify(WEBSITE_SCHEMA)}</script>
      {SERVICE_SCHEMAS.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
      {REVIEW_SCHEMAS.map((r, i) => (
        <script key={`r${i}`} type="application/ld+json">{JSON.stringify(r)}</script>
      ))}
    </Helmet>
  );
};
