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
      className="relative min-h-[100vh] lg:min-h-0 lg:py-28 flex flex-col justify-center pt-[76px] pb-8 overflow-hidden mesh-bg"
    >
      <div className="absolute top-1/4 left-6 md:left-1/4 w-32 h-32 bg-vapor-secondarycontainer/40 rounded-full blur-2xl floating-element" />
      <div className="absolute bottom-1/4 right-6 md:right-1/4 w-40 h-40 bg-vapor-primarycontainer/50 rounded-full blur-2xl floating-element" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-vapor-tertiarycontainer/30 rounded-full blur-3xl floating-element" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-6">
        <div className="glass-panel rounded-[2.5rem] soft-3d px-5 py-8 sm:px-10 sm:py-12 flex flex-col items-center text-center gap-4">
          <div
            data-testid="hero-tagline-strip"
            className="w-full rounded-2xl bg-white/50 border border-white/70 px-4 py-3 sm:px-6 sm:py-4 flex flex-col gap-1.5"
          >
            {HERO_TAGLINE_LINES.map((line, i) => (
              <p
                key={i}
                className="text-[11px] sm:text-xs font-semibold tracking-wide text-vapor-secondary"
              >
                {line}
              </p>
            ))}
            <p className="text-[11px] sm:text-xs font-medium tracking-wide text-vapor-onsurfacevariant flex items-center justify-center gap-1 pt-1.5 border-t border-vapor-outlinevariant/50 mt-1">
              <MapPin className="w-3.5 h-3.5 text-vapor-secondary shrink-0" />
              {HERO_LOCATION_LINE}
            </p>
          </div>

          <h1
            data-testid="hero-heading"
            className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vapor-onbackground leading-[1.15] tracking-tight mt-2"
          >
            Welcome to <span className="text-vapor-secondary">Raj Home Massage</span>
          </h1>

          <div
            data-testid="hero-rating-badge"
            className="flex items-center gap-2 glass-surface rounded-full px-4 py-1.5"
          >
            <div className="flex text-vapor-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm text-vapor-onsurface font-semibold">
              {BRAND.rating} | {BRAND.reviewCount} Google Reviews
            </span>
          </div>

          <p
            data-testid="hero-pricing-anchor"
            className="font-headline text-lg sm:text-xl font-bold text-vapor-primary tracking-tight"
          >
            Massages Starting from ₹2,999
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1">
            <a
              href={BRAND.whatsappBookingHref}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-book-now-button"
              className="btn-3d flex items-center justify-center gap-2 bg-vapor-secondary text-vapor-onsecondary font-semibold text-sm px-8 py-3.5 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              Book Now
            </a>
            <a
              href={BRAND.phoneHref}
              data-testid="hero-call-now-button"
              className="btn-3d-secondary flex items-center justify-center gap-2 bg-white/80 border border-vapor-outlinevariant text-vapor-primary font-medium text-sm px-8 py-3.5 rounded-full hover:bg-white transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>

        <p
          data-testid="hero-body-text"
          className="text-sm sm:text-base text-vapor-onsurfacevariant leading-relaxed max-w-2xl mx-auto mt-6 text-center"
        >
          {HERO_BODY}
        </p>
      </div>
    </section>
  );
};
