export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Drone Impact Wiki",
  shortName: "Drone Impact",
  logoText: "DI",
  tagline: "Futuristic Drone Combat Experience & Guides",
  description: "Drone Impact Wiki provides gameplay guides, drone information, mechanics explanations, updates, and useful resources for players exploring the futuristic drone combat experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://drone-impact.wiki",
  gameUrl: "https://www.taptap.io/app/261462",
  heroVideoId: "MfQfjOdXGRw", // Drone Simulator Game showcase video
  social: {
    discord: "https://discord.gg/droneimpact",
    youtube: "https://www.youtube.com/@droneimpact",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
