import { Star, MapPin, PhoneCall, MessageCircle } from "lucide-react";
import {
  BRAND,
  HERO_TAGLINE_LINES,
  HERO_LOCATION_LINE,
  HERO_BODY,
} from "@/constants/content";

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100vh] flex flex-col justify-center pt-[64px] pb-10 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={BRAND.heroBgUrl}
          alt="Dark luxury spa ambiance with warm gold lighting"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/85 to-[#0B0B0C]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-6 flex flex-col items-center text-center gap-4">
        <div
          data-testid="hero-tagline-strip"
          className="w-full rounded-2xl border border-[#A38330]/40 bg-[#141416]/80 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 flex flex-col gap-1.5"
        >
          {HERO_TAGLINE_LINES.map((line, i) => (
            <p
              key={i}
              className="text-[11px] sm:text-xs font-medium tracking-wide text-[#E6C665]"
            >
              {line}
            </p>
          ))}
          <p className="text-[11px] sm:text-xs font-medium tracking-wide text-zinc-300 flex items-center justify-center gap-1 pt-1 border-t border-[#A38330]/25 mt-1">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            {HERO_LOCATION_LINE}
          </p>
        </div>

        <h1
          data-testid="hero-heading"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAFAFA] leading-tight mt-2"
        >
          Welcome to <span className="text-[#E6C665]">Raj Home Massage</span>
        </h1>

        <div
          data-testid="hero-rating-badge"
          className="flex items-center gap-2 bg-[#1C1C20] border border-[#A38330]/40 rounded-full px-4 py-1.5"
        >
          <div className="flex text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5" fill="#D4AF37" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm text-zinc-200 font-medium">
            {BRAND.rating} | {BRAND.reviewCount} Google Reviews
          </span>
        </div>

        <p
          data-testid="hero-pricing-anchor"
          className="font-serif text-lg sm:text-xl text-[#F3E5AB] tracking-wide"
        >
          Massages Starting from ₹2,999
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1">
          <a
            href={BRAND.whatsappBookingHref}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-book-now-button"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E6C665] to-[#D4AF37] text-black font-semibold uppercase tracking-widest text-sm px-8 py-3.5 rounded-full shadow-md shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Book Now
          </a>
          <a
            href={BRAND.phoneHref}
            data-testid="hero-call-now-button"
            className="flex items-center justify-center gap-2 border border-[#D4AF37]/70 text-[#E6C665] font-medium uppercase tracking-widest text-sm px-8 py-3.5 rounded-full hover:bg-[#D4AF37]/10 hover:border-[#F3E5AB] transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            Call Now
          </a>
        </div>

        <p
          data-testid="hero-body-text"
          className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mt-4"
        >
          {HERO_BODY}
        </p>
      </div>
    </section>
  );
};
