import { MessageCircle } from "lucide-react";
import { BRAND, SERVICES } from "@/constants/content";

export const ServicesGrid = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-vapor-secondary font-bold mb-3">
          What We Offer
        </p>
        <h2
          data-testid="services-heading"
          className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-vapor-onbackground mb-3 tracking-tight"
        >
          Our Massage Services
        </h2>
        <p className="text-sm sm:text-base text-vapor-onsurfacevariant">
          15 therapeutic massage experiences, tailored for men, women and couples.
        </p>
        <p className="mt-2 text-sm font-semibold text-vapor-secondary">
          Starting from ₹2,999
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            data-testid={`service-card-${service.id}`}
            className="group flex flex-col glass-panel rounded-[1.75rem] overflow-hidden hover:-translate-y-1.5 soft-3d transition-all duration-300"
          >
            <div className="relative h-44 overflow-hidden rounded-t-[1.75rem] m-2">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                className="w-full h-full object-cover rounded-[1.4rem] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col flex-grow p-5">
              <h3 className="font-headline text-lg font-bold text-vapor-onbackground mb-2 tracking-tight">
                {service.name}
              </h3>
              <p className="text-sm text-vapor-onsurfacevariant leading-relaxed flex-grow mb-4">
                {service.desc}
              </p>
              <a
                href={BRAND.whatsappBookingHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`service-book-now-${service.id}`}
                className="btn-3d mt-4 w-full flex items-center justify-center gap-2 bg-vapor-secondary text-vapor-onsecondary font-semibold uppercase tracking-wider text-xs py-3 rounded-full"
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
