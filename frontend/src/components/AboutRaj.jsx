import { CheckCircle2 } from "lucide-react";
import { BRAND, THERAPIST_ASSIGNMENT } from "@/constants/content";

export const AboutRaj = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="relative order-1 md:order-none">
          <div className="absolute -inset-3 border border-[#A38330]/30 rounded-2xl" />
          <img
            src={BRAND.aboutPortraitUrl}
            alt="Placeholder portrait of Raj, certified male massage therapist"
            data-testid="about-raj-photo"
            className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl shadow-black/60"
          />
          <div className="absolute bottom-4 left-4 bg-[#0B0B0C]/90 border border-[#A38330]/50 rounded-xl px-4 py-2">
            <p className="font-serif text-[#F3E5AB] text-sm">Raj</p>
            <p className="text-zinc-400 text-xs">Certified Male Therapist</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-3">
            About the Therapist
          </p>
          <h2
            data-testid="about-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F3E5AB] mb-5"
          >
            About Raj
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
            15+ years certified experience, trusted by 1000+ clients, serving men,
            women and couples at home, hotel and massage centre.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span
              data-testid="about-credential-experience"
              className="bg-[#1C1C20] border border-[#A38330]/40 text-[#E6C665] text-xs sm:text-sm font-medium px-4 py-2 rounded-full"
            >
              15+ Years Certified Experience
            </span>
            <span
              data-testid="about-credential-clients"
              className="bg-[#1C1C20] border border-[#A38330]/40 text-[#E6C665] text-xs sm:text-sm font-medium px-4 py-2 rounded-full"
            >
              Trusted by 1000+ Clients
            </span>
            <span
              data-testid="about-credential-locations"
              className="bg-[#1C1C20] border border-[#A38330]/40 text-[#E6C665] text-xs sm:text-sm font-medium px-4 py-2 rounded-full"
            >
              Massage Centre • Home • Hotel
            </span>
          </div>

          <h3 className="font-serif text-lg text-[#F3E5AB] mb-3">
            Therapist Assignment
          </h3>
          <ul className="flex flex-col gap-3" data-testid="about-therapist-assignment-list">
            {THERAPIST_ASSIGNMENT.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#D4AF37] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
