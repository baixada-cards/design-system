/* Truco icon explorations.
   System: Spanish card vocabulary, bordeaux & brass, sibling to the Baixada B-mark.
*/

/* ---------- shared chassis ---------- */

/* The "card-back" tile that all our app icons share — bordeaux with diagonal weave + brass inner frame.
   This is the same chassis as the Baixada B mark; only the FACE changes per game. */
const IconTile = ({ size = 180, radius = null, children, frame = true, weave = true, accent = 'var(--brass-1)', bg = null }) => {
  const r = radius ?? Math.round(size * 0.22);
  const inset = Math.max(6, Math.round(size * 0.055));
  const innerR = Math.max(2, r - inset + 2);
  return (
    <div style={{
      width: size, height: size, position: 'relative',
      borderRadius: r,
      background: bg || 'linear-gradient(155deg, var(--card-back-a) 0%, var(--card-back-b) 100%)',
      boxShadow: '0 6px 18px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.35)',
      overflow: 'hidden',
      flexShrink: 0
    }}>
      {weave && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: r,
          backgroundImage: `repeating-linear-gradient(45deg,
            rgba(212,179,106,0.07) 0 ${size * 0.025}px,
            rgba(0,0,0,0.10) ${size * 0.025}px ${size * 0.05}px)`,
          mixBlendMode: 'overlay', pointerEvents: 'none'
        }} />
      )}
      {/* lamp wash */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: r,
        background: 'radial-gradient(ellipse 70% 55% at 50% 28%, rgba(255,220,160,0.18) 0%, rgba(255,220,160,0.04) 50%, transparent 80%)',
        pointerEvents: 'none'
      }} />
      {frame && (
        <div style={{
          position: 'absolute', inset, borderRadius: innerR,
          border: `1px solid ${accent}`, opacity: 0.7, pointerEvents: 'none'
        }} />
      )}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  );
};

/* ---------- Spanish-suit cards (tiny, scalable) ---------- */

/* A miniature Spanish card. Cream stock, ochre border, suit + numeral. */
const SpanishCard = ({ width = 90, suit = 'espadas', numeral = '1', tilt = 0, lift = 0, accentBorder = true }) => {
  const height = Math.round(width * 1.45);
  const numeralColor = ({
    espadas: 'var(--suit-black)',
    copas: 'var(--suit-red)',
    oros: 'var(--suit-ochre)',
    bastos: 'var(--suit-green)'
  })[suit];
  return (
    <div style={{
      width, height, position: 'relative',
      borderRadius: Math.max(3, width * 0.06),
      background: 'linear-gradient(180deg, var(--card-0), var(--card-1))',
      boxShadow: `${lift ? '0 ' + lift + 'px ' + (lift * 2) + 'px rgba(0,0,0,0.35), ' : ''}0 1px 1px rgba(0,0,0,0.25), 0 3px 6px rgba(0,0,0,0.28)`,
      transform: `rotate(${tilt}deg)`,
      transformOrigin: 'center center',
      flexShrink: 0
    }}>
      {accentBorder && (
        <div style={{
          position: 'absolute', inset: Math.max(2, width * 0.04),
          border: `${Math.max(1, width * 0.012)}px solid var(--card-edge)`,
          borderRadius: Math.max(2, width * 0.035)
        }} />
      )}
      {/* corner numerals */}
      <div style={{
        position: 'absolute', top: width * 0.085, left: width * 0.09,
        fontFamily: 'var(--font-serif)', fontWeight: 600,
        fontSize: width * 0.22, lineHeight: 1,
        color: numeralColor, letterSpacing: '-0.02em'
      }}>{numeral}</div>
      <div style={{
        position: 'absolute', bottom: width * 0.085, right: width * 0.09,
        fontFamily: 'var(--font-serif)', fontWeight: 600,
        fontSize: width * 0.22, lineHeight: 1,
        color: numeralColor, letterSpacing: '-0.02em',
        transform: 'rotate(180deg)'
      }}>{numeral}</div>
      {/* center suit */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SuitGlyph kind={suit} size={width * 0.5} />
      </div>
    </div>
  );
};

/* A "card back" — bordeaux weave, ochre frame */
const SpanishCardBack = ({ width = 90, tilt = 0, lift = 0 }) => {
  const height = Math.round(width * 1.45);
  return (
    <div style={{
      width, height, position: 'relative',
      borderRadius: Math.max(3, width * 0.06),
      background: 'linear-gradient(155deg, var(--card-back-a) 0%, var(--card-back-b) 100%)',
      boxShadow: `${lift ? '0 ' + lift + 'px ' + (lift * 2) + 'px rgba(0,0,0,0.35), ' : ''}0 1px 1px rgba(0,0,0,0.25), 0 3px 6px rgba(0,0,0,0.28)`,
      transform: `rotate(${tilt}deg)`,
      overflow: 'hidden',
      flexShrink: 0
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(45deg,
          rgba(212,179,106,0.10) 0 ${width * 0.05}px,
          rgba(0,0,0,0.12) ${width * 0.05}px ${width * 0.10}px)`
      }} />
      <div style={{
        position: 'absolute', inset: Math.max(2, width * 0.05),
        border: `${Math.max(1, width * 0.012)}px solid var(--brass-2)`,
        borderRadius: Math.max(2, width * 0.04),
        opacity: 0.65
      }} />
    </div>
  );
};

/* ---------- THE FACES ---------- */

/* Direction A — single 1 de espadas, hero card.
   The most iconic card in any truco deck. Reads instantly. */
const FaceAceOfSwords = ({ size = 180 }) => (
  <div style={{ transform: `scale(${size / 180})`, transformOrigin: 'center' }}>
    <SpanishCard width={size * 0.62} suit="espadas" numeral="1" />
  </div>
);

/* Direction B — fanned pair: 1 de espadas + 7 de espadas (las macetas).
   Truco-literate. More movement. */
const FaceFannedAces = ({ size = 180 }) => {
  const w = size * 0.52;
  return (
    <div style={{ position: 'relative', width: size * 0.85, height: size * 0.78 }}>
      <div style={{ position: 'absolute', left: 0, top: size * 0.06 }}>
        <SpanishCard width={w} suit="espadas" numeral="1" tilt={-10} lift={4} />
      </div>
      <div style={{ position: 'absolute', right: 0, top: 0 }}>
        <SpanishCard width={w} suit="espadas" numeral="7" tilt={10} lift={4} />
      </div>
    </div>
  );
};

/* Direction C — Card-back with embossed monogram T.
   Most graphic, scales smallest. Feels like a "sealed deck". */
const FaceMonogramT = ({ size = 180, color = 'var(--brass-2)' }) => (
  <div style={{ position: 'relative', textAlign: 'center' }}>
    <div style={{
      fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500,
      fontSize: size * 0.62, lineHeight: 1, color,
      letterSpacing: '-0.04em',
      textShadow: '0 1px 0 rgba(0,0,0,0.4), 0 0 18px rgba(255,220,160,0.20)'
    }}>T</div>
  </div>
);

/* Direction D — three cards stacked face-down, a "deal" in progress.
   Feels generic-cards rather than truco-specific; included as foil. */
const FaceThreeBacks = ({ size = 180 }) => (
  <div style={{ position: 'relative', width: size * 0.78, height: size * 0.78 }}>
    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%) rotate(-12deg)' }}>
      <SpanishCardBack width={size * 0.42} />
    </div>
    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-55%) rotate(0deg)' }}>
      <SpanishCardBack width={size * 0.42} />
    </div>
    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%) rotate(12deg)' }}>
      <SpanishCardBack width={size * 0.42} />
    </div>
  </div>
);

/* Direction E — Espadas glyph alone, oversized, on bordeaux.
   Most reductive. Reads at 16px. */
const FaceEspadasGlyph = ({ size = 180 }) => (
  <div style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>
    <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24">
      <defs>
        <linearGradient id="brassgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--brass-hi)" />
          <stop offset="1" stopColor="var(--brass-1)" />
        </linearGradient>
      </defs>
      <path d="M 12 3 L 12 18" stroke="url(#brassgrad)" strokeWidth="2" />
      <path d="M 12 16 Q 8 18 7 14 Q 11 13 12 16 Z" fill="url(#brassgrad)" />
      <path d="M 12 16 Q 16 18 17 14 Q 13 13 12 16 Z" fill="url(#brassgrad)" />
      <rect x="9" y="18" width="6" height="1.5" fill="url(#brassgrad)" />
      <rect x="11" y="19" width="2" height="2.5" fill="url(#brassgrad)" />
    </svg>
  </div>
);

/* Direction F — "T+espadas" hybrid: serif T with a sword crossbar replacing the top stroke.
   Custom, but risks being clever-not-clear. */
const FaceTSword = ({ size = 180 }) => {
  const s = size;
  return (
    <svg width={s * 0.62} height={s * 0.7} viewBox="0 0 100 110">
      <defs>
        <linearGradient id="tgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--brass-hi)" />
          <stop offset="1" stopColor="var(--brass-1)" />
        </linearGradient>
      </defs>
      {/* sword crossbar (replaces the top of the T) */}
      <rect x="14" y="22" width="72" height="6" rx="1" fill="url(#tgrad)" />
      {/* sword tips */}
      <path d="M 14 25 L 6 25 L 12 21 L 12 29 Z" fill="url(#tgrad)" />
      <path d="M 86 25 L 94 25 L 88 21 L 88 29 Z" fill="url(#tgrad)" />
      {/* T stem */}
      <rect x="46" y="28" width="8" height="62" fill="url(#tgrad)" />
      {/* T base flourish */}
      <ellipse cx="50" cy="92" rx="14" ry="3" fill="url(#tgrad)" />
    </svg>
  );
};

Object.assign(window, {
  IconTile, SpanishCard, SpanishCardBack,
  FaceAceOfSwords, FaceFannedAces, FaceMonogramT, FaceThreeBacks, FaceEspadasGlyph, FaceTSword
});
