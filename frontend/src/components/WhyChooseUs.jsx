import { motion } from "framer-motion";
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

const ACCENTS = [
  "from-vapor-secondarycontainer/60 to-vapor-secondarycontainer/20 text-vapor-secondary",
  "from-vapor-primarycontainer/60 to-vapor-primarycontainer/20 text-vapor-primary",
  "from-vapor-tertiarycontainer/60 to-vapor-tertiarycontainer/20 text-vapor-tertiary",
];

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
          className="inline-flex items-center gap-2 glass-surface soft-3d rounded-full px-4 py-1.5"
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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:auto-rows-[168px]">
        {TRUST_SIGNALS.map((item, i) => {
          const Icon = ICONS[item.icon] || Sparkles;
          const featured = i === 0;
          const wide = i === 3 || i === 6;
          const accent = ACCENTS[i % ACCENTS.length];

          if (featured) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                data-testid={`why-choose-us-card-${i + 1}`}
                className="md:col-span-2 md:row-span-2 relative overflow-hidden glass-panel rounded-[2rem] p-7 sm:p-9 flex flex-col justify-between hover:-translate-y-1.5 soft-3d transition-transform duration-300 bg-gradient-to-br from-vapor-secondarycontainer/40 via-transparent to-vapor-primarycontainer/30"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-vapor-secondarycontainer/50 rounded-full blur-3xl" />
                <div className="relative z-10 w-16 h-16 rounded-full glass-surface flex items-center justify-center soft-3d">
                  <Icon className="w-7 h-7 text-vapor-secondary" />
                </div>
                <div className="relative z-10">
                  <p className="font-headline text-4xl sm:text-5xl font-extrabold text-vapor-onbackground tracking-tight leading-none mb-2">
                    15+
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-vapor-onsurfacevariant">
                    Years Certified Experience
                  </p>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              data-testid={`why-choose-us-card-${i + 1}`}
              className={`glass-panel rounded-[2rem] p-5 sm:p-6 flex hover:-translate-y-1.5 soft-3d transition-transform duration-300 ${
                wide
                  ? "md:col-span-2 flex-row items-center gap-4 text-left"
                  : "flex-col items-center justify-center text-center gap-3"
              }`}
            >
              <div
                className={`shrink-0 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center soft-3d ${
                  wide ? "w-14 h-14" : "w-12 h-12"
                }`}
              >
                <Icon className={wide ? "w-6 h-6" : "w-5 h-5"} />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-vapor-onsurfacevariant leading-snug">
                {item.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
