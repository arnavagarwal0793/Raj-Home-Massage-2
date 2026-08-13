import { CheckCircle2 } from "lucide-react";
import { BRAND, THERAPIST_ASSIGNMENT } from "@/constants/content";

export const AboutRaj = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="glass-panel rounded-[2.5rem] soft-3d p-6 sm:p-12 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="relative order-1 md:order-none">
          <img
            src={BRAND.aboutPortraitUrl}
            alt="Placeholder portrait of Raj, certified male massage therapist"
            data-testid="about-raj-photo"
            className="w-full aspect-[3/4] object-cover rounded-[2rem] soft-3d"
          />
          <div className="absolute bottom-4 left-4 glass-surface rounded-2xl px-4 py-2">
            <p className="font-headline font-bold text-vapor-onbackground text-sm">Raj</p>
            <p className="text-vapor-onsurfacevariant text-xs">Certified Male Therapist</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-vapor-secondary font-bold mb-3">
            About the Therapist
          </p>
          <h2
            data-testid="about-heading"
            className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-vapor-onbackground mb-5 tracking-tight"
          >
            About Raj
          </h2>
          <p className="text-sm sm:text-base text-vapor-onsurfacevariant leading-relaxed mb-6">
            15+ years certified experience, trusted by 1000+ clients, serving men,
            women and couples at home, hotel and massage centre.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span
              data-testid="about-credential-experience"
              className="glass-surface text-vapor-primary text-xs sm:text-sm font-semibold px-4 py-2 rounded-full"
            >
              15+ Years Certified Experience
            </span>
            <span
              data-testid="about-credential-clients"
              className="glass-surface text-vapor-primary text-xs sm:text-sm font-semibold px-4 py-2 rounded-full"
            >
              Trusted by 1000+ Clients
            </span>
            <span
              data-testid="about-credential-locations"
              className="glass-surface text-vapor-primary text-xs sm:text-sm font-semibold px-4 py-2 rounded-full"
            >
              Massage Centre • Home • Hotel
            </span>
          </div>

          <h3 className="font-headline text-lg font-bold text-vapor-onbackground mb-3">
            Therapist Assignment
          </h3>
          <ul className="flex flex-col gap-3" data-testid="about-therapist-assignment-list">
            {THERAPIST_ASSIGNMENT.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4.5 h-4.5 text-vapor-secondary mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-vapor-onsurfacevariant">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
