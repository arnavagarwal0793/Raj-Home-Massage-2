import { Star, ExternalLink } from "lucide-react";
import { BRAND, REVIEWS } from "@/constants/content";

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
          className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-vapor-onbackground mb-4 tracking-tight"
        >
          What Our Clients Say
        </h2>
        <a
          href={BRAND.googleBusinessHref}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="testimonials-rating-badge"
          className="inline-flex items-center gap-2 glass-surface rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
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
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {REVIEWS.map((review, i) => (
          <article
            key={i}
            data-testid={`review-card-${i + 1}`}
            className="glass-panel rounded-[1.75rem] p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-vapor-secondarycontainer flex items-center justify-center shrink-0">
                <span className="font-headline font-bold text-sm text-vapor-secondary">
                  {review.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-vapor-onbackground truncate">{review.name}</p>
                <p className="text-xs text-vapor-onsurfacevariant">{review.timeAgo}</p>
              </div>
              <div className="flex text-vapor-secondary shrink-0">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
            <p className="text-sm text-vapor-onsurface leading-relaxed flex-grow">
              "{review.text}"
            </p>
          </article>
        ))}
      </div>

      <div className="text-center">
        <a
          href={BRAND.googleBusinessHref}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="view-all-reviews-button"
          className="inline-flex items-center gap-2 bg-white/80 border border-vapor-outlinevariant text-vapor-secondary font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white transition-colors soft-3d"
        >
          <ExternalLink className="w-4 h-4" />
          View all reviews on Google
        </a>
      </div>
    </section>
  );
};
