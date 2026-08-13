import { Star } from "lucide-react";
import { BRAND, TESTIMONIALS } from "@/constants/content";

export const Testimonials = () => {
  return (
    <section
      id="reviews"
      data-testid="testimonials-section"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-vapor-secondary font-bold mb-3">
          Client Love
        </p>
        <h2
          data-testid="testimonials-heading"
          className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-vapor-onbackground mb-5 tracking-tight"
        >
          What Our Clients Say
        </h2>
        <div
          data-testid="testimonials-rating-badge"
          className="inline-flex items-center gap-2 glass-surface rounded-full px-5 py-2"
        >
          <span className="font-headline text-xl font-bold text-vapor-onbackground">{BRAND.rating}</span>
          <div className="flex text-vapor-secondary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4" fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm text-vapor-onsurfacevariant">
            | {BRAND.reviewCount} Google Reviews
          </span>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            data-testid={`testimonial-card-${i + 1}`}
            className="glass-panel rounded-[1.75rem] p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex text-vapor-secondary">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-vapor-onsurface italic leading-relaxed flex-grow">
              "{t.text}"
            </p>
            <p className="text-sm font-bold text-vapor-secondary">{t.name}</p>
          </div>
        ))}
      </div>

      <div
        data-testid="elfsight-google-reviews-widget"
        className="glass-panel rounded-[2rem] border-2 border-dashed border-vapor-outlinevariant p-10 text-center"
      >
        {/* Elfsight Google Reviews Widget - replace this placeholder div with your Elfsight embed code */}
        <div className="elfsight-app-google-reviews" data-elfsight-app-lazy></div>
        <p className="text-xs text-vapor-onsurfacevariant">
          Google Reviews widget placeholder - Elfsight embed code to be added here.
        </p>
      </div>
    </section>
  );
};
