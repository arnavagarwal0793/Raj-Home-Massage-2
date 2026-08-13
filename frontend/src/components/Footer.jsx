import { Instagram, Twitter, PhoneCall, MapPin, Clock } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/constants/content";

export const Footer = () => {
  return (
    <footer
      data-testid="footer-section"
      className="border-t border-[#A38330]/25 bg-[#0B0B0C] pt-14 pb-8 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a
            href="#home"
            data-testid="footer-logo"
            className="flex items-center gap-2 mb-4"
          >
            <img
              src={BRAND.logoUrl}
              alt="Raj Home Massage logo"
              className="w-9 h-9 rounded-full object-cover ring-1 ring-[#D4AF37]/60"
            />
            <span className="font-serif text-lg text-[#F3E5AB]">Raj Home Massage</span>
          </a>
          <p className="text-xs text-zinc-500 tracking-wide">{BRAND.tagline}</p>
        </div>

        <div>
          <h4 className="font-serif text-sm text-[#E6C665] uppercase tracking-widest mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                  className="text-sm text-zinc-400 hover:text-[#E6C665] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm text-[#E6C665] uppercase tracking-widest mb-4">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-zinc-400">
            <li data-testid="footer-address" className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
              {BRAND.address}
            </li>
            <li>
              <a
                href={BRAND.phoneHref}
                data-testid="footer-phone-link"
                className="flex items-center gap-2 hover:text-[#E6C665] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                {BRAND.phone}
              </a>
            </li>
            <li data-testid="footer-timing" className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              {BRAND.timing}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm text-[#E6C665] uppercase tracking-widest mb-4">
            Follow Us
          </h4>
          <div className="flex items-center gap-3">
            <a
              href={BRAND.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#A38330]/40 flex items-center justify-center text-zinc-400 hover:text-[#E6C665] hover:border-[#D4AF37] transition-all"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a
              href={BRAND.twitterHref}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-twitter-link"
              aria-label="X (Twitter)"
              className="w-10 h-10 rounded-full border border-[#A38330]/40 flex items-center justify-center text-zinc-400 hover:text-[#E6C665] hover:border-[#D4AF37] transition-all"
            >
              <Twitter className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-[#A38330]/20 mt-10 pt-6 text-center">
        <p data-testid="footer-copyright" className="text-xs text-zinc-500">
          © 2026 Raj Home Massage. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
