/**
 * Public token settings.
 * Leave a string empty until the value is real.
 * Empty fields render as TBA, and related buttons stay disabled.
 * Do not fill these with estimates.
 */
export const tokenConfig = {
  name: "MUSK MOONSHOT PATTERN",
  ticker: "$MUSKPAT",
  chain: "Ethereum",
  network: "Ethereum",
  contractAddress: "",
  totalSupply: "1,000,000,000",
  buyTax: "0%",
  sellTax: "0%",
  lpStatus: "Burn",
  ownership: "Renounce",
  liquidity: "",
  uniswapUrl: "",
  dextoolsUrl: "",
  dexscreenerUrl: "",
} as const;

export function isSet(value: string): boolean {
  return value.trim().length > 0;
}

export const unpublishedContract = "Coming Soon..";

export function displayOrTba(value: string): string {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : "TBA";
}

export function contractText(): string {
  return tokenConfig.contractAddress.trim() || unpublishedContract;
}

export function chartUrl(): string {
  return tokenConfig.dexscreenerUrl.trim() || tokenConfig.dextoolsUrl.trim();
}
