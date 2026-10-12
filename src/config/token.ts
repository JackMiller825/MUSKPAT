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
  contractAddress: "0x06692bf355e49b3ff19733f881b93dff2fe71976",
  totalSupply: "1,000,000,000",
  buyTax: "0%",
  sellTax: "0%",
  lpStatus: "Burn",
  ownership: "Renounce",
  liquidity: "",
  uniswapUrl: "",
  dextoolsUrl: "https://www.dextools.io/app/ether/pair-explorer/0x41375d244af46132df7699d3ae8b48529b97864a",
  dexscreenerUrl: "https://dexscreener.com/ethereum/0x41375d244af46132df7699d3ae8b48529b97864a",
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
