const candles = [
  { h: 28, up: true },
  { h: 18, up: false },
  { h: 36, up: true },
  { h: 24, up: true },
  { h: 16, up: false },
  { h: 42, up: true },
  { h: 30, up: false },
  { h: 48, up: true },
  { h: 38, up: true },
  { h: 26, up: false },
  { h: 58, up: true },
  { h: 44, up: true },
  { h: 34, up: false },
  { h: 70, up: true },
  { h: 62, up: true },
];

export function FloatingChart({ className = "" }: { className?: string }) {
  const width = 360;
  const height = 180;
  const gap = width / candles.length;

  return (
    <svg
      className={`floating-chart ${className}`.trim()}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Decorative rising candlestick pattern. No price data."
    >
      <line x1="0" y1="168" x2="360" y2="168" className="chart-axis" />
      {candles.map((candle, index) => {
        const x = index * gap + gap * 0.28;
        const barWidth = gap * 0.44;
        const y = 160 - candle.h;
        return (
          <g key={index} className="candle" style={{ animationDelay: `${0.85 + index * 0.04}s` }}>
            <line
              x1={x + barWidth / 2}
              y1={y - 8}
              x2={x + barWidth / 2}
              y2={y + candle.h + 8}
              className={candle.up ? "wick wick-up" : "wick wick-down"}
            />
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={candle.h}
              rx="1.5"
              className={candle.up ? "body body-up" : "body body-down"}
            />
          </g>
        );
      })}
      <path
        d="M12 132 C 50 128, 70 118, 100 110 S 160 92, 190 78 S 250 58, 290 36 S 330 22, 348 14"
        className="chart-path"
      />
    </svg>
  );
}
