/**
 * Community destinations.
 * Leave a string empty until the channel exists.
 * Empty values disable the matching control. Never use "#" as a stand-in.
 */
export const socialLinks = {
  telegram: "https://t.me/muskpat_eth",
  x: "https://x.com/muskpat_eth",
  discord: "",
} as const;

export function communityUrl(): string {
  return socialLinks.telegram.trim() || socialLinks.x.trim() || socialLinks.discord.trim();
}
