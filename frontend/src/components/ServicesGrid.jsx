import { MessageCircle } from "lucide-react";
import { BRAND, SERVICES, SERVICE_PRICE_LABEL } from "@/constants/content";

export const ServicesGrid = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-3">
          What We Offer
        </p>
        <h2
          data-testid="services-heading"
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F3E5AB] mb-3"
        >
          Our Massage Services
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          15 therapeutic massage experiences, tailored for men, women and couples.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            data-testid={`service-card-${service.id}`}
            className="group flex flex-col bg-[#141416] border border-[#A38330]/25 rounded-xl overflow-hidden hover:border-[#D4AF37]/60 hover:-translate-y-1 shadow-lg shadow-black/40 transition-all duration-300"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/70 to-transparent" />
            </div>
            <div className="flex flex-col flex-grow p-5">
              <h3 className="font-serif text-lg font-semibold text-[#F3E5AB] mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-grow mb-4">
                {service.desc}
              </p>
              <div className="flex items-center justify-between gap-3 mt-auto">
                <span
                  data-testid={`service-price-${service.id}`}
                  className="text-xs font-semibold uppercase tracking-wide text-[#E6C665] bg-[#D4AF37]/10 border border-[#A38330]/40 px-3 py-1.5 rounded-full whitespace-nowrap"
                >
                  {SERVICE_PRICE_LABEL}
                </span>
              </div>
              <a
                href={BRAND.whatsappBookingHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`service-book-now-${service.id}`}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E6C665] to-[#D4AF37] text-black font-semibold uppercase tracking-wider text-xs py-3 rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Book Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
