/* Reusable brand ornaments — drawn with simple geometry, no faux illustration */

const PorchLamp = ({ size = 64, color = 'var(--brass-1)', glow = 'var(--brass-2)' }) => {
  /* Stylized porch lamp: a hanging bulb under a brass shade. Geometric, no twee detail. */
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* hang line */}
      <line x1="32" y1="0" x2="32" y2="14" stroke={color} strokeWidth="1" />
      {/* shade — trapezoid */}
      <path d="M 18 14 L 46 14 L 42 26 L 22 26 Z" fill={color} stroke={color} strokeWidth="0.5" strokeLinejoin="round" />
      {/* shade highlight */}
      <path d="M 22 14 L 28 14 L 26 26 L 24 26 Z" fill={glow} opacity="0.4" />
      {/* bulb glow halo */}
      <circle cx="32" cy="36" r="14" fill={glow} opacity="0.18" />
      <circle cx="32" cy="36" r="9" fill={glow} opacity="0.32" />
      {/* bulb */}
      <circle cx="32" cy="36" r="5" fill={glow} />
      <circle cx="32" cy="36" r="5" fill="none" stroke={color} strokeWidth="0.75" />
      {/* light cast */}
      <path d="M 22 26 L 14 56 L 50 56 L 42 26 Z" fill={glow} opacity="0.06" />
    </svg>
  );
};

const SuitGlyph = ({ kind, size = 18, color }) => {
  /* Spanish suits as simple geometric glyphs */
  const c = color || {
    oros: 'var(--suit-ochre)',
    copas: 'var(--suit-red)',
    espadas: 'var(--suit-black)',
    bastos: 'var(--suit-green)'
  }[kind];
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' };
  switch (kind) {
    case 'oros':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" fill={c} />
          <circle cx="12" cy="12" r="6" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="0.5" />
          <circle cx="12" cy="12" r="2" fill="rgba(0,0,0,0.22)" />
        </svg>
      );
    case 'copas':
      return (
        <svg {...props}>
          <path d="M 6 4 L 18 4 L 17 11 Q 17 15 12 15 Q 7 15 7 11 Z" fill={c} />
          <rect x="11" y="15" width="2" height="4" fill={c} />
          <rect x="8" y="19" width="8" height="1.5" fill={c} />
        </svg>
      );
    case 'espadas':
      return (
        <svg {...props}>
          <path d="M 12 3 L 12 18" stroke={c} strokeWidth="2" />
          <path d="M 12 16 Q 8 18 7 14 Q 11 13 12 16 Z" fill={c} />
          <path d="M 12 16 Q 16 18 17 14 Q 13 13 12 16 Z" fill={c} />
          <rect x="9" y="18" width="6" height="1.5" fill={c} />
          <rect x="11" y="19" width="2" height="2.5" fill={c} />
        </svg>
      );
    case 'bastos':
      return (
        <svg {...props}>
          <rect x="10.5" y="3" width="3" height="18" fill={c} rx="0.5" />
          <ellipse cx="12" cy="3.5" rx="2.5" ry="1" fill={c} />
          <ellipse cx="12" cy="20.5" rx="2.5" ry="1" fill={c} />
          <line x1="10.5" y1="8" x2="13.5" y2="8" stroke="rgba(0,0,0,0.3)" strokeWidth="0.4" />
          <line x1="10.5" y1="14" x2="13.5" y2="14" stroke="rgba(0,0,0,0.3)" strokeWidth="0.4" />
        </svg>
      );
    default:
      return null;
  }
};

const SuitRow = ({ size = 18, gap = 14, color }) => (
  <div style={{ display: 'flex', gap: gap, alignItems: 'center' }}>
    <SuitGlyph kind="oros" size={size} color={color} />
    <SuitGlyph kind="copas" size={size} color={color} />
    <SuitGlyph kind="espadas" size={size} color={color} />
    <SuitGlyph kind="bastos" size={size} color={color} />
  </div>
);

/* "Brass plaque" — used inside lockups for the suffix */
const Plaque = ({ children, color = 'var(--brass-1)' }) => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.32em',
    textTransform: 'uppercase',
    color: 'var(--paper-0)',
    background: color,
    padding: '4px 10px 3px',
    borderRadius: '2px',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.18)'
  }}>{children}</span>
);

/* Hand-drawn underline using SVG */
const HandUnderline = ({ width = 220, color = 'var(--brass-1)' }) => (
  <svg width={width} height="6" viewBox={`0 0 ${width} 6`} style={{ display: 'block' }}>
    <path
      d={`M 2 4 Q ${width * 0.25} 1, ${width * 0.5} 3 T ${width - 2} 3`}
      stroke={color}
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

Object.assign(window, { PorchLamp, SuitGlyph, SuitRow, Plaque, HandUnderline });
