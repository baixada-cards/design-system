/* Truco-icon artboards. Use the same canvas style as the Baixada branding deck. */

/* Helpers */
const IconCaption = ({ title, sub, recommend = false }) => (
  <div style={{ marginTop: 14, textAlign: 'center', maxWidth: 220 }}>
    <div style={{
      fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500,
      fontSize: 16, color: 'var(--ink-0)', lineHeight: 1.1
    }}>
      {title}{recommend && <span style={{ marginLeft: 8 }}><Plaque>recommended</Plaque></span>}
    </div>
    <div className="body-text" style={{ marginTop: 4, fontSize: 12 }}>{sub}</div>
  </div>
);

const IconCell = ({ children, title, sub, recommend = false }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
    {children}
    <IconCaption title={title} sub={sub} recommend={recommend} />
  </div>
);

/* Map a Face component name + size to a fully composed icon */
const TrucoIcon = ({ direction, size = 180 }) => {
  const tile = (children, opts = {}) => (
    <IconTile size={size} {...opts}>{children}</IconTile>
  );
  switch (direction) {
    case 'A': return tile(<FaceAceOfSwords size={size} />);
    case 'B': return tile(<FaceFannedAces size={size} />);
    case 'C': return tile(<FaceMonogramT size={size} />);
    case 'D': return tile(<FaceThreeBacks size={size} />);
    case 'E': return tile(<FaceEspadasGlyph size={size} />);
    case 'F': return tile(<FaceTSword size={size} />);
    default: return null;
  }
};

/* —— T1: six directions side by side —— */
const T1_Directions = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '52px 64px' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>Truco icon · directions</div>
    <div className="h-title" style={{ marginBottom: 6 }}>
      Six ways to mark the <span className="h-title-italic">Truco</span> room.
    </div>
    <div className="body-text" style={{ marginBottom: 28, maxWidth: 760 }}>
      Same chassis as the Baixada B-mark — bordeaux card-back, brass inner frame, lamp wash. Only the <strong>face</strong> changes per game. The face must read at 32px and tell you "Truco" without the wordmark.
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, rowGap: 28 }}>
      <IconCell title="A · 1 de espadas" recommend
        sub="The most iconic single card in any truco deck. Reads at any size. Suit color is the brand's bordeaux family.">
        <TrucoIcon direction="A" size={170} />
      </IconCell>
      <IconCell title="B · fanned 1 + 7"
        sub="Las dos macetas — the two top cards. Truco-literate, more movement. Slightly busy at small sizes.">
        <TrucoIcon direction="B" size={170} />
      </IconCell>
      <IconCell title="C · monogram T"
        sub="Sealed deck. Pure graphic. Pairs literally with the Baixada B mark — a visual sibling.">
        <TrucoIcon direction="C" size={170} />
      </IconCell>
      <IconCell title="D · three card-backs"
        sub="A deal in progress. Generic to any card game — risks not reading specifically as Truco.">
        <TrucoIcon direction="D" size={170} />
      </IconCell>
      <IconCell title="E · espadas glyph"
        sub="Most reductive. Reads at 16×16. But loses the card-ness; could be a gaming sword icon.">
        <TrucoIcon direction="E" size={170} />
      </IconCell>
      <IconCell title="F · T-sword hybrid"
        sub="Clever — serif T with a sword crossbar. Risks 'clever not clear'; trips over at small sizes.">
        <TrucoIcon direction="F" size={170} />
      </IconCell>
    </div>
  </div>
);

/* —— T2: deep dive on Direction A — 1 de espadas —— */
const T2_AceVariations = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '52px 64px', position: 'relative' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>Direction A · 1 de espadas</div>
    <div className="h-title" style={{ marginBottom: 6 }}>
      The card on the table, <span className="h-title-italic">framed.</span>
    </div>
    <div className="body-text" style={{ marginBottom: 28, maxWidth: 760 }}>
      A single Spanish card centered on the bordeaux chassis. The cream stock and ochre frame echo the Baixada palette without restating it. Three composition variants below — pick one and lock it.
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
      <IconCell title="A1 · centered, upright" recommend
        sub="Default. Hero card on table. Symmetrical, instantly readable.">
        <IconTile size={200}>
          <SpanishCard width={120} suit="espadas" numeral="1" />
        </IconTile>
      </IconCell>
      <IconCell title="A2 · slight tilt left"
        sub="Mid-deal energy. A bit more personality but introduces asymmetry that fights with app-icon grids.">
        <IconTile size={200}>
          <SpanishCard width={120} suit="espadas" numeral="1" tilt={-7} />
        </IconTile>
      </IconCell>
      <IconCell title="A3 · with a card peeking behind"
        sub="Hints at a hand. Adds depth but eats the 'frame' margin — fragile at small sizes.">
        <IconTile size={200}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: -36, top: -8, opacity: 0.85 }}>
              <SpanishCardBack width={100} tilt={-12} />
            </div>
            <div style={{ position: 'relative' }}>
              <SpanishCard width={120} suit="espadas" numeral="1" tilt={3} />
            </div>
          </div>
        </IconTile>
      </IconCell>
    </div>

    <div className="pin-note" style={{ position: 'absolute', bottom: 36, left: 64, right: 64 }}>
      My pick: <strong>A1</strong>. The icon job is recognition at glance — symmetry wins. Reserve A3-style depth for the <em>hero illustration</em> on the Truco product page, not the launcher icon.
    </div>
  </div>
);

/* —— T3: scales — 16 / 32 / 64 / 128 / 256 —— */
const ScaleRow = ({ direction, label }) => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28, padding: '18px 0', borderBottom: '1px solid var(--paper-2)' }}>
    <div style={{ width: 110, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-1)' }}>
      {label}
    </div>
    {[16, 24, 32, 48, 64, 96, 128, 180].map(s => (
      <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <TrucoIcon direction={direction} size={s} />
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--ink-2)' }}>{s}px</div>
      </div>
    ))}
  </div>
);

const T3_Scales = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '44px 56px' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>Direction A · scale test</div>
    <div className="h-title" style={{ marginBottom: 6 }}>
      Does it survive a <span className="h-title-italic">favicon?</span>
    </div>
    <div className="body-text" style={{ marginBottom: 18, maxWidth: 760 }}>
      Same icon at eight sizes. At 16/24px the numeral disappears and the suit glyph carries the recognition — that's fine, the bordeaux+ochre shape is the brand.
    </div>

    <ScaleRow direction="A" label="A · ace" />
    <ScaleRow direction="C" label="C · T mark" />
    <ScaleRow direction="E" label="E · espadas" />

    <div className="hand" style={{ marginTop: 18, color: 'var(--ink-1)', fontSize: 16 }}>
      → at 16px, A becomes a bordeaux pill with a cream rectangle inside. C becomes a brass smudge. E reads cleanest small but loses card-ness.
    </div>
  </div>
);

/* —— T4: family — Baixada + Truco + future games together —— */
const FamilyTile = ({ children, label, sub }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    {children}
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 18, color: 'var(--ink-0)' }}>{label}</div>
      <div className="body-text" style={{ fontSize: 11, marginTop: 2 }}>{sub}</div>
    </div>
  </div>
);

/* The Baixada B mark, rebuilt as a tile so the family lines up */
const BaixadaTile = ({ size = 160 }) => (
  <IconTile size={size}>
    <div style={{
      fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500,
      fontSize: size * 0.62, lineHeight: 1, color: 'var(--brass-2)',
      letterSpacing: '-0.04em',
      textShadow: '0 1px 0 rgba(0,0,0,0.4), 0 0 18px rgba(255,220,160,0.18)'
    }}>B</div>
  </IconTile>
);

/* Future games — same chassis, different face. Show as ghosts so the system is legible. */
const EscopaTile = ({ size = 160 }) => (
  <IconTile size={size}>
    <div style={{ transform: `scale(${size / 180})`, transformOrigin: 'center' }}>
      <SpanishCard width={size * 0.62} suit="bastos" numeral="1" />
    </div>
  </IconTile>
);
const BiscaTile = ({ size = 160 }) => (
  <IconTile size={size}>
    <div style={{ transform: `scale(${size / 180})`, transformOrigin: 'center' }}>
      <SpanishCard width={size * 0.62} suit="oros" numeral="1" />
    </div>
  </IconTile>
);

const T4_Family = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '52px 64px' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>Family · the system in one glance</div>
    <div className="h-title" style={{ marginBottom: 6 }}>
      One <span className="h-title-italic">house,</span> several rooms.
    </div>
    <div className="body-text" style={{ marginBottom: 36, maxWidth: 760 }}>
      Same bordeaux chassis. The <strong>B</strong> is the house. Each game is the card that names the suit it loves — espadas for Truco, bastos for Escopa, oros for Bisca.
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginBottom: 32 }}>
      <FamilyTile label="Baixada" sub="The umbrella · brass B on bordeaux"><BaixadaTile size={160} /></FamilyTile>
      <FamilyTile label="Truco" sub="1 de espadas — ships first"><TrucoIcon direction="A" size={160} /></FamilyTile>
      <FamilyTile label="Escopa" sub="Future · 1 de bastos"><EscopaTile size={160} /></FamilyTile>
      <FamilyTile label="Bisca" sub="Future · 1 de oros"><BiscaTile size={160} /></FamilyTile>
    </div>

    <div className="rule rule-brass" style={{ marginBottom: 24 }} />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 10 }}>What stays the same</div>
        <ul className="list-brass">
          <li><strong>Bordeaux card-back chassis.</strong> Same gradient, same diagonal weave, same rounded square.</li>
          <li><strong>Brass inner frame</strong> at the same inset.</li>
          <li><strong>Overhead lamp wash</strong> top-center.</li>
        </ul>
      </div>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 10 }}>What changes per game</div>
        <ul className="list-brass">
          <li><strong>The face.</strong> Baixada wears the monogram; each game wears its top card.</li>
          <li><strong>The suit color</strong> on the face — the only color that's game-specific.</li>
          <li><strong>Nothing else.</strong> No drop shadows, no badges, no per-game ornament.</li>
        </ul>
      </div>
    </div>
  </div>
);

/* —— T5: in-context — homescreen, lobby tile, browser tab —— */
const T5_InContext = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '52px 64px' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>In context</div>
    <div className="h-title" style={{ marginBottom: 6 }}>
      Where the Truco icon <span className="h-title-italic">actually</span> shows up.
    </div>
    <div className="body-text" style={{ marginBottom: 28, maxWidth: 800 }}>
      The Baixada mark stays on baixada.cards. The Truco mark only appears where Truco stands alone — installed app, app-store listing, lobby tile, OG image.
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 32 }}>
      {/* iOS-style homescreen */}
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 10 }}>Installed app · phone homescreen</div>
        <div style={{
          background: 'linear-gradient(160deg, #2b2419, #15110c)',
          borderRadius: 28, padding: 28,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)'
        }}>
          {[
            { kind: 'baixada', label: 'Baixada' },
            { kind: 'truco', label: 'Truco' },
            { kind: 'placeholder', color: '#5b8def', label: 'Mail' },
            { kind: 'placeholder', color: '#34c759', label: 'Notes' },
            { kind: 'placeholder', color: '#ff9500', label: 'Music' },
            { kind: 'placeholder', color: '#af52de', label: 'Photos' },
            { kind: 'placeholder', color: '#ff3b30', label: 'Camera' },
            { kind: 'placeholder', color: '#5ac8fa', label: 'Weather' }
          ].map((app, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              {app.kind === 'truco' ? <TrucoIcon direction="A" size={64} /> :
               app.kind === 'baixada' ? <BaixadaTile size={64} /> :
               <div style={{ width: 64, height: 64, borderRadius: 14, background: app.color, opacity: 0.7 }} />}
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: 'var(--paper-0)', opacity: 0.85 }}>{app.label}</div>
            </div>
          ))}
        </div>
        <div className="hand" style={{ marginTop: 12, color: 'var(--ink-2)', fontSize: 14 }}>
          → bordeaux cuts through a noisy homescreen. notice how the family reads as one product.
        </div>
      </div>

      {/* Lobby tile + browser tab */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div className="h-eyebrow" style={{ marginBottom: 10 }}>Lobby tile on baixada.cards</div>
          <div style={{
            display: 'flex', gap: 12,
            padding: 16,
            background: 'var(--paper-1)',
            border: '1px solid var(--paper-2)', borderRadius: 8
          }}>
            <TrucoIcon direction="A" size={84} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 28, color: 'var(--ink-0)', lineHeight: 1 }}>Truco</div>
              <div className="body-text" style={{ fontSize: 12 }}>The flagship room. CFR-solved opponent in the Lab.</div>
              <div style={{ marginTop: 4 }}><Plaque color="var(--brass-1)">· Lab</Plaque></div>
            </div>
          </div>
        </div>

        <div>
          <div className="h-eyebrow" style={{ marginBottom: 10 }}>Browser tab — page title</div>
          <div style={{
            background: '#2c2418', borderRadius: 6, padding: '8px 12px',
            display: 'flex', alignItems: 'center', gap: 10,
            maxWidth: 360
          }}>
            <TrucoIcon direction="A" size={16} radius={3} />
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--paper-0)', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Truco · Lab — Baixada
            </div>
            <div style={{ color: 'var(--ink-2)', fontSize: 14 }}>×</div>
          </div>
          <div className="body-text" style={{ fontSize: 12, marginTop: 8 }}>
            On <strong>baixada.cards</strong>: keep the Baixada favicon and a <strong>Baixada · …</strong> title — the site is the house.<br />
            On the standalone Truco app or <strong>truco.baixada.cards</strong>: the Truco favicon and <strong>Truco · Lab — Baixada</strong>.
          </div>
        </div>

        <div>
          <div className="h-eyebrow" style={{ marginBottom: 10 }}>Share / OG image (1200×630, cropped)</div>
          <div style={{
            position: 'relative', height: 130, borderRadius: 6, overflow: 'hidden',
            background: 'linear-gradient(155deg, var(--card-back-a), var(--card-back-b))',
            display: 'flex', alignItems: 'center', gap: 20, padding: '0 24px'
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 60% 90% at 70% 30%, rgba(255,220,160,0.2), transparent 60%)'
            }} />
            <div style={{ position: 'relative' }}><TrucoIcon direction="A" size={88} /></div>
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--brass-2)' }}>Baixada</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 44, color: 'var(--paper-0)', lineHeight: 1.05, marginTop: 2 }}>Truco · Lab</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--brass-2)', marginTop: 4 }}>play against a CFR-solved opponent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* —— T6: answers to the questions —— */
const T6_Answers = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '52px 64px' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>Q&amp;A · favicon and page title rules</div>
    <div className="h-title" style={{ marginBottom: 28 }}>
      Don't change the Baixada chrome <span className="h-title-italic">when picking Truco.</span>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 12 }}>Favicon — the rule</div>
        <ul className="list-brass">
          <li><strong>baixada.cards</strong> (lobby, marketing, account): always the Baixada B-mark.</li>
          <li><strong>truco.baixada.cards</strong> (game subdomain): switches to the Truco icon.</li>
          <li><strong>Installed PWA / native app</strong>: the icon you launched with — Baixada or Truco — and it never changes mid-session.</li>
        </ul>
        <div className="hand" style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 15 }}>
          → favicon = which app am I in. it shouldn't shapeshift while you play.
        </div>
      </div>

      <div>
        <div className="h-eyebrow" style={{ marginBottom: 12 }}>Page title — the rule</div>
        <ul className="list-brass">
          <li>On <strong>baixada.cards</strong>: <code style={{ fontFamily: 'JetBrains Mono, monospace', background: 'var(--paper-1)', padding: '1px 5px', borderRadius: 2 }}>Baixada — &lt;page&gt;</code>. e.g. <em>Baixada — Truco</em> on the Truco landing page within the lobby.</li>
          <li>On <strong>truco.baixada.cards</strong>: <code style={{ fontFamily: 'JetBrains Mono, monospace', background: 'var(--paper-1)', padding: '1px 5px', borderRadius: 2 }}>Truco · &lt;mode&gt; — Baixada</code>. e.g. <em>Truco · Lab — Baixada</em>.</li>
          <li>Mid-match suffix: append the score. <em>Truco · Lab (4–2) — Baixada</em>. Helpful when tabs pile up.</li>
        </ul>
      </div>
    </div>

    <div className="pin-note" style={{ marginTop: 36 }}>
      <strong>Short version:</strong> the favicon belongs to the <em>domain you're on</em>, not the game you're playing. The page title leads with whichever name <em>does the searching</em> on that domain — Baixada on the lobby, Truco on the game subdomain. The umbrella always trails as the surname.
    </div>
  </div>
);

Object.assign(window, {
  T1_Directions, T2_AceVariations, T3_Scales, T4_Family, T5_InContext, T6_Answers
});
