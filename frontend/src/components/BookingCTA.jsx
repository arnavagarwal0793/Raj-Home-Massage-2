import { MessageCircle, PhoneCall, MapPin, Clock, Heart } from "lucide-react";
import { BRAND } from "@/constants/content";

export const BookingCTA = () => {
  return (
    <section
      id="contact"
      data-testid="booking-cta-section"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="relative rounded-[2.5rem] overflow-hidden soft-3d">
        <div className="absolute inset-0 bg-gradient-to-br from-vapor-secondarycontainer/50 to-vapor-primarycontainer/50" />
        <div className="absolute inset-0 glass-panel" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/40 rounded-full blur-3xl floating-element" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vapor-secondarycontainer/40 rounded-full blur-3xl floating-element" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 p-8 sm:p-16 flex flex-col items-center text-center gap-6">
          <h2
            data-testid="booking-cta-heading"
            className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-vapor-onbackground tracking-tight"
          >
            Book Your Massage Today
          </h2>
          <p className="text-sm sm:text-base text-vapor-onsurfacevariant max-w-xl">
            Reach out directly to schedule your personalized massage session at home,
            hotel, or our massage centre in Andheri West, Mumbai.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={BRAND.whatsappBookingHref}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="booking-cta-whatsapp-button"
              className="btn-3d flex items-center gap-2 bg-[#25D366] text-white font-semibold uppercase tracking-widest text-sm px-8 py-3.5 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              Book via WhatsApp
            </a>
            <a
              href={BRAND.phoneHref}
              data-testid="booking-cta-call-link"
              className="font-headline text-lg sm:text-xl font-bold text-vapor-secondary hover:text-vapor-onsecondarycontainer flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-5 h-5" />
              {BRAND.phone}
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 mt-2 text-vapor-onsurfacevariant text-sm">
            <p data-testid="booking-cta-address" className="flex items-start gap-2 max-w-md">
              <MapPin className="w-4 h-4 text-vapor-secondary mt-0.5 shrink-0" />
              {BRAND.address}
            </p>
            <p data-testid="booking-cta-timing" className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-vapor-secondary" />
              {BRAND.timing}
            </p>
          </div>

          <div
            data-testid="booking-cta-couples-note"
            className="glass-surface rounded-full px-5 py-2 flex items-center gap-2 text-xs sm:text-sm text-vapor-onsurfacevariant mt-2"
          >
            <Heart className="w-3.5 h-3.5 text-vapor-secondary" fill="currentColor" strokeWidth={0} />
            {BRAND.couplesNote}
          </div>
        </div>
      </div>
    </section>
  );
};
