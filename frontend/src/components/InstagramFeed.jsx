import { Instagram, Twitter } from "lucide-react";
import { BRAND } from "@/constants/content";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF4500">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

const SOCIAL_PROFILES = [
  {
    href: BRAND.googleBusinessHref,
    label: "Google Business Profile",
    sublabel: "Reviews & Directions",
    Icon: GoogleIcon,
    bg: "bg-white/80",
    border: "border-blue-100",
    testid: "social-google-link",
  },
  {
    href: BRAND.instagramHref,
    label: "Instagram",
    sublabel: "@massage_by_raj",
    Icon: () => <Instagram className="w-5 h-5" style={{ color: "#E1306C" }} />,
    bg: "bg-white/80",
    border: "border-pink-100",
    testid: "social-instagram-link",
  },
  {
    href: BRAND.twitterHref,
    label: "X (Twitter)",
    sublabel: "@raj_therapist",
    Icon: () => <Twitter className="w-5 h-5 text-gray-700" />,
    bg: "bg-white/80",
    border: "border-gray-200",
    testid: "social-twitter-link",
  },
  {
    href: BRAND.redditHref,
    label: "Reddit",
    sublabel: "Raj Home Wellness | Mumbai",
    Icon: RedditIcon,
    bg: "bg-white/80",
    border: "border-orange-100",
    testid: "social-reddit-link",
  },
];

export const InstagramFeed = () => {
  return (
    <section
      data-testid="instagram-feed-section"
      className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-vapor-secondary font-bold mb-3">
          Connect &amp; Follow
        </p>
        <h2
          data-testid="instagram-feed-heading"
          className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-vapor-onbackground mb-3 tracking-tight"
        >
          Find Us Online
        </h2>
        <p className="text-sm text-vapor-onsurfacevariant">
          Follow our work, read reviews, and stay connected across platforms.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {SOCIAL_PROFILES.map((profile) => {
          const { Icon } = profile;
          return (
            <a
              key={profile.label}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={profile.testid}
              className={`glass-panel rounded-[1.75rem] p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1.5 soft-3d transition-all duration-300 border ${profile.border}`}
            >
              <div className={`w-12 h-12 rounded-full ${profile.bg} flex items-center justify-center soft-3d border ${profile.border}`}>
                <Icon />
              </div>
              <div>
                <p className="font-headline text-sm font-bold text-vapor-onbackground">{profile.label}</p>
                <p className="text-xs text-vapor-onsurfacevariant mt-0.5">{profile.sublabel}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
