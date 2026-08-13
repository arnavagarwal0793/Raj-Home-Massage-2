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
        <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-3">
          Client Love
        </p>
        <h2
          data-testid="testimonials-heading"
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F3E5AB] mb-5"
        >
          What Our Clients Say
        </h2>
        <div
          data-testid="testimonials-rating-badge"
          className="inline-flex items-center gap-2 bg-[#1C1C20] border border-[#A38330]/40 rounded-full px-5 py-2"
        >
          <span className="font-serif text-xl text-[#F3E5AB]">{BRAND.rating}</span>
          <div className="flex text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4" fill="#D4AF37" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm text-zinc-400">
            | {BRAND.reviewCount} Google Reviews
          </span>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            data-testid={`testimonial-card-${i + 1}`}
            className="bg-[#141416] border border-[#A38330]/25 rounded-xl p-6 flex flex-col gap-4 hover:border-[#D4AF37]/50 transition-colors"
          >
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5" fill="#D4AF37" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-zinc-300 italic leading-relaxed flex-grow">
              "{t.text}"
            </p>
            <p className="text-sm font-semibold text-[#E6C665]">{t.name}</p>
          </div>
        ))}
      </div>

      <div
        data-testid="elfsight-google-reviews-widget"
        className="bg-[#141416] border border-dashed border-[#A38330]/40 rounded-xl p-10 text-center"
      >
        {/* Elfsight Google Reviews Widget - replace this placeholder div with your Elfsight embed code */}
        <div className="elfsight-app-google-reviews" data-elfsight-app-lazy></div>
        <p className="text-xs text-zinc-500">
          Google Reviews widget placeholder - Elfsight embed code to be added here.
        </p>
      </div>
    </section>
  );
};
