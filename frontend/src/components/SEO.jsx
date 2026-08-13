import { Helmet } from "react-helmet-async";
import { BRAND } from "@/constants/content";

const TITLE = "Raj Home Massage - Professional Massage Therapy in Andheri West, Mumbai";
const DESCRIPTION =
  "Book a professional massage at home, hotel or massage centre in Mumbai. Certified therapist with 15+ years experience. Men, women & couples welcome. Call +91 9702424106.";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Raj Home Massage",
  image: BRAND.logoUrl,
  url: BRAND.canonicalUrl,
  telephone: BRAND.phone,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No 9, Prathmesh Complex, Near Country Club, Veera Desai Road",
    addressLocality: "Andheri West, Mumbai",
    postalCode: "400053",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 07:00-23:00",
  areaServed: [
    "Andheri West",
    "Lokhandwala Complex",
    "Versova",
    "Juhu",
    "Andheri East",
    "Bandra",
    "Marol",
    "Goregaon",
    "Powai",
    "Colaba",
    "Cuffe Parade",
    "Fort",
    "Marine Drive",
    "Lower Parel",
    "Worli",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BRAND.rating.toString(),
    reviewCount: BRAND.reviewCount.toString(),
    bestRating: "5",
  },
};

export const SEO = () => {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={BRAND.canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={BRAND.canonicalUrl} />
      <meta property="og:image" content={BRAND.logoUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
    </Helmet>
  );
};
