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
        <p className="text-xs uppercase tracking-[0.2em] text-vapor-secondary font-bold mb-3">
          Trusted &amp; Certified
        </p>
        <h2
          data-testid="why-choose-us-heading"
          className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-vapor-onbackground mb-4 tracking-tight"
        >
          Why Choose Us
        </h2>
        <div
          data-testid="why-choose-us-rating-badge"
          className="inline-flex items-center gap-2 glass-surface rounded-full px-4 py-1.5"
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[150px] md:auto-rows-[180px]">
        {TRUST_SIGNALS.map((item, i) => {
          const Icon = ICONS[item.icon] || Sparkles;
          const large = i === 0;
          const wide = i === 3 || i === 6;
          return (
            <div
              key={i}
              data-testid={`why-choose-us-card-${i + 1}`}
              className={`glass-panel rounded-[1.75rem] p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-3 hover:-translate-y-1 transition-transform duration-300 ${
                large ? "md:col-span-2 md:row-span-2" : ""
              } ${wide ? "md:col-span-2" : ""}`}
            >
              <div className="w-12 h-12 rounded-full glass-surface flex items-center justify-center">
                <Icon className="w-5 h-5 text-vapor-secondary" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-vapor-onsurfacevariant leading-snug">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
