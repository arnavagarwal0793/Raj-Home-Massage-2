import { motion } from "framer-motion";
import { Star, MapPin, PhoneCall, MessageCircle, Sparkles } from "lucide-react";
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
      className="relative min-h-[100vh] lg:min-h-0 lg:py-32 flex flex-col justify-center pt-[76px] pb-8 overflow-hidden mesh-bg"
    >
      <div className="absolute top-[10%] left-[6%] md:left-[18%] w-40 h-40 sm:w-56 sm:h-56 bg-vapor-secondarycontainer/60 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-[12%] right-[6%] md:right-[16%] w-48 h-48 sm:w-64 sm:h-64 bg-vapor-primarycontainer/60 rounded-full blur-3xl floating-element" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-vapor-tertiarycontainer/40 rounded-full blur-3xl floating-element" style={{ animationDelay: "4s" }} />
      <div className="absolute top-[20%] right-[10%] w-20 h-20 bg-white/50 rounded-full blur-2xl floating-element" style={{ animationDelay: "1.2s" }} />
      <div className="absolute bottom-[30%] left-[8%] w-16 h-16 bg-vapor-secondarycontainer/50 rounded-full blur-xl floating-element" style={{ animationDelay: "3.2s" }} />

      <div className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-panel rounded-[2.5rem] soft-3d px-5 py-8 sm:px-10 sm:py-12 flex flex-col items-center text-center gap-4 relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-vapor-secondarycontainer/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-16 w-56 h-56 bg-vapor-primarycontainer/40 rounded-full blur-3xl pointer-events-none" />

          <span className="relative z-10 inline-flex items-center gap-2 bg-white/60 border border-white/80 text-vapor-secondary text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Raj Home Massage
          </span>

          <h1
            data-testid="hero-heading"
            className="relative z-10 font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight mt-2"
          >
            <span className="text-vapor-onbackground">Welcome to </span>
            <span className="text-vapor-secondary">
              Raj Home Massage
            </span>
          </h1>

          <div
            data-testid="hero-rating-badge"
            className="relative z-10 flex items-center gap-2 glass-surface rounded-full px-4 py-1.5 soft-3d"
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
            className="relative z-10 font-headline text-lg sm:text-xl font-bold text-vapor-primary tracking-tight"
          >
            Massages Starting from ₹2,999
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1">
            <a
              href={BRAND.whatsappBookingHref}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-book-now-button"
              className="btn-3d flex items-center justify-center gap-2 bg-gradient-to-r from-vapor-secondary to-[#8a63b8] text-white font-semibold text-sm px-8 py-3.5 rounded-full"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          data-testid="hero-tagline-strip"
          className="mt-4 rounded-2xl bg-white/70 border border-white/80 backdrop-blur-sm px-5 py-4 sm:px-8 sm:py-5 flex flex-col items-center gap-1 shadow-sm"
        >
          {HERO_TAGLINE_LINES.map((line, i) => (
            <p
              key={i}
              className="text-[11px] sm:text-xs font-semibold tracking-wide text-vapor-secondary text-center"
            >
              {line}
            </p>
          ))}
          <p className="text-[11px] sm:text-xs font-medium tracking-wide text-vapor-onsurfacevariant flex items-center justify-center gap-1 pt-2 border-t border-vapor-outlinevariant/50 mt-1 text-center">
            <MapPin className="w-3.5 h-3.5 text-vapor-secondary shrink-0" />
            {HERO_LOCATION_LINE}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          data-testid="hero-body-text"
          className="text-sm sm:text-base text-vapor-onsurfacevariant leading-relaxed max-w-2xl mx-auto mt-4 text-center"
        >
          {HERO_BODY}
        </motion.p>
      </div>
    </section>
  );
};
