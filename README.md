# MUSK MOONSHOT PATTERN

Community site for the Ethereum meme token $MUSKPAT.

Independent parody project. Not affiliated with Elon Musk, Tesla, SpaceX, X Corp., or any other referenced person or company.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Fill in before launch

Edit `src/config/token.ts` and `src/config/socials.ts`. Leave a field empty until the value is real. Empty fields show as TBA and the matching buttons stay disabled.

- Contract address
- Total supply
- Buy tax
- Sell tax
- Liquidity note, if you choose to surface it later
- Uniswap URL
- DexScreener URL
- DexTools URL
- Telegram, X, and Discord URLs

The site publishes to GitHub Pages at `https://jackmiller825.github.io/MUSKPAT/`. When a custom domain is attached and serves the site from the root, set `base` in `vite.config.ts` to `"/"` and update the canonical and social URLs in `index.html`.
