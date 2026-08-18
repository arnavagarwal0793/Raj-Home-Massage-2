import { ShieldCheck, Droplets, Lock, UserX } from "lucide-react";

const STANDARDS = [
  {
    icon: ShieldCheck,
    title: "Wellness-Only Service",
    desc: "Strictly professional massage therapy within established wellness and healthcare boundaries. No adult or inappropriate services provided.",
  },
  {
    icon: Droplets,
    title: "Hygiene & Cleanliness",
    desc: "Fresh linens and sanitized equipment for every single session. Clean, safe, and hygienic environment guaranteed.",
  },
  {
    icon: Lock,
    title: "Privacy & Discretion",
    desc: "Your session details remain completely private. We maintain full confidentiality for all clients at all times.",
  },
  {
    icon: UserX,
    title: "Right to Refuse",
    desc: "We reserve the right to decline any booking or end any session that does not align with our professional standards.",
  },
];

export const ProfessionalStandards = () => {
  return (
    <section
      id="standards"
      data-testid="professional-standards-section"
      className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="glass-panel rounded-[2.5rem] p-8 sm:p-12">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-vapor-secondary font-bold mb-3">
            Our Commitment
          </p>
          <h2
            data-testid="standards-heading"
            className="font-headline text-2xl sm:text-3xl font-extrabold text-vapor-onbackground tracking-tight"
          >
            Professional Standards
          </h2>
          <p className="text-sm text-vapor-onsurfacevariant mt-3 max-w-xl mx-auto">
            Raj Home Massage is committed to providing a safe, respectful, and professional experience for every client.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STANDARDS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                data-testid={`standard-card-${i + 1}`}
                className="glass-surface rounded-[1.5rem] p-5 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-vapor-secondarycontainer/60 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-vapor-secondary" />
                </div>
                <h3 className="font-headline text-sm font-bold text-vapor-onbackground">
                  {item.title}
                </h3>
                <p className="text-xs text-vapor-onsurfacevariant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
