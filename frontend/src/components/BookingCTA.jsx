import { MessageCircle, PhoneCall, MapPin, Clock, Heart } from "lucide-react";
import { BRAND } from "@/constants/content";

export const BookingCTA = () => {
  return (
    <section
      id="contact"
      data-testid="booking-cta-section"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="relative rounded-3xl overflow-hidden border border-[#A38330]/40 bg-gradient-to-br from-[#141416] to-[#0B0B0C] p-8 sm:p-14 flex flex-col items-center text-center gap-6">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <h2
          data-testid="booking-cta-heading"
          className="relative z-10 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F3E5AB]"
        >
          Book Your Massage Today
        </h2>
        <p className="relative z-10 text-sm sm:text-base text-zinc-400 max-w-xl">
          Reach out directly to schedule your personalized massage session at home,
          hotel, or our massage centre in Andheri West, Mumbai.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={BRAND.whatsappBookingHref}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="booking-cta-whatsapp-button"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold uppercase tracking-widest text-sm px-8 py-3.5 rounded-full shadow-lg shadow-[#25D366]/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Book via WhatsApp
          </a>
          <a
            href={BRAND.phoneHref}
            data-testid="booking-cta-call-link"
            className="font-serif text-lg sm:text-xl text-[#E6C665] hover:text-[#F3E5AB] flex items-center gap-2 transition-colors"
          >
            <PhoneCall className="w-5 h-5" />
            {BRAND.phone}
          </a>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 mt-2 text-zinc-400 text-sm">
          <p data-testid="booking-cta-address" className="flex items-start gap-2 max-w-md">
            <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
            {BRAND.address}
          </p>
          <p data-testid="booking-cta-timing" className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            {BRAND.timing}
          </p>
        </div>

        <div
          data-testid="booking-cta-couples-note"
          className="relative z-10 flex items-center gap-2 bg-[#1C1C20] border border-[#A38330]/40 rounded-full px-5 py-2 text-xs sm:text-sm text-zinc-400 mt-2"
        >
          <Heart className="w-3.5 h-3.5 text-[#D4AF37]" fill="#D4AF37" strokeWidth={0} />
          {BRAND.couplesNote}
        </div>
      </div>
    </section>
  );
};
