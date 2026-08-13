import {
  Award,
  ShieldCheck,
  Building2,
  PlaneTakeoff,
  Users,
  HeartHandshake,
  Sparkles,
  Star,
} from "lucide-react";
import { BRAND, TRUST_SIGNALS } from "@/constants/content";

const ICONS = {
  Award,
  ShieldCheck,
  Building2,
  PlaneTakeoff,
  Users,
  HeartHandshake,
  Sparkles,
};

export const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      data-testid="why-choose-us-section"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-3">
          Trusted &amp; Certified
        </p>
        <h2
          data-testid="why-choose-us-heading"
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F3E5AB] mb-4"
        >
          Why Choose Us
        </h2>
        <div
          data-testid="why-choose-us-rating-badge"
          className="inline-flex items-center gap-2 bg-[#1C1C20] border border-[#A38330]/40 rounded-full px-4 py-1.5"
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
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {TRUST_SIGNALS.map((item, i) => {
          const Icon = ICONS[item.icon] || Sparkles;
          return (
            <div
              key={i}
              data-testid={`why-choose-us-card-${i + 1}`}
              className="flex flex-col items-center text-center gap-3 bg-[#141416] border border-[#A38330]/25 rounded-xl p-5 sm:p-6 hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#1C1C20] border border-[#A38330]/40 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-zinc-300 leading-snug">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
