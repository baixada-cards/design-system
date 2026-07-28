/* Artboards for the branding canvas. Each one is a self-contained design frame. */

/* —— A1: Positioning & system —— */
const A1_Positioning = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '64px 80px', position: 'relative', overflow: 'hidden' }}>
    {/* corner ornament */}
    <div style={{ position: 'absolute', top: 28, right: 36, opacity: 0.55 }}>
      <PorchLamp size={48} />
    </div>

    <div className="kicker" style={{ marginBottom: 16 }}>Branding · First pass</div>
    <div style={{ fontFamily: 'var(--font-serif)', fontSize: 64, fontWeight: 500, lineHeight: 1, color: 'var(--ink-0)', letterSpacing: '-0.02em' }}>
      A house with several<br />
      <span style={{ fontStyle: 'italic' }}>card rooms.</span>
    </div>
    <div style={{ marginTop: 24, marginBottom: 36, maxWidth: 720 }}>
      <HandUnderline width={320} />
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginTop: 24 }}>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 10 }}>The metaphor</div>
        <div className="body-text">
          A family reunion <strong>na baixada</strong>. People drift between rooms — one for Truco, one for Escopa, one for Bisca. Same house, same long table out back, same lamp overhead.
        </div>
      </div>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 10 }}>The differentiator</div>
        <div className="body-text">
          Most card-game apps sell <em>games</em>. Baixada sells <strong>study</strong>. Truco ships first with a CFR-solved opponent and a lab to inspect equilibria, study lines, and play against optimal.
        </div>
      </div>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 10 }}>The constraint</div>
        <div className="body-text">
          The brand must <strong>survive</strong> if Escopa and Bisca never get solvers. So the lab is a <em>room</em>, not the house itself — opened only where it earns its place.
        </div>
      </div>
    </div>

    <div style={{ position: 'absolute', bottom: 56, left: 80, right: 80, display: 'flex', gap: 32, alignItems: 'center' }}>
      <div className="rule-brass rule" style={{ flex: 1 }} />
      <div className="hand" style={{ fontSize: 18, color: 'var(--ink-1)', whiteSpace: 'nowrap' }}>
        warm + scholarly · card play · spanish suits
      </div>
      <div className="rule-brass rule" style={{ flex: 1 }} />
    </div>
  </div>
);

/* —— A2: Umbrella — primary lockup, hero —— */
const A2_UmbrellaPrimary = () => (
  <div className="bg-walnut" style={{ width: 1200, height: 720, position: 'relative', overflow: 'hidden' }}>
    {/* lamp light wash */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse 70% 55% at 50% 35%, rgba(255,220,160,0.14) 0%, rgba(255,220,160,0.04) 45%, transparent 75%)',
      pointerEvents: 'none'
    }} />

    {/* ceiling lamp at the very top */}
    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
      <PorchLamp size={84} color="var(--brass-2)" glow="var(--brass-hi)" />
    </div>

    {/* eyebrow */}
    <div style={{ position: 'absolute', top: 92, left: 0, right: 0, textAlign: 'center' }}>
      <div className="kicker kicker-light">est. 2026 · counterfactual minimization</div>
    </div>

    {/* center wordmark */}
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: 40 }}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontWeight: 500,
        fontSize: 168,
        lineHeight: 0.9,
        letterSpacing: '-0.025em',
        color: 'var(--paper-0)',
        textShadow: '0 2px 24px rgba(0,0,0,0.4)'
      }}>
        Baixada
      </div>
      <div style={{ marginTop: 10, marginBottom: 22 }}>
        <HandUnderline width={420} color="var(--brass-2)" />
      </div>
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '0.42em',
        textTransform: 'uppercase',
        color: 'var(--brass-2)'
      }}>
        card games and optimal play
      </div>
    </div>

    {/* bottom suits */}
    <div style={{ position: 'absolute', bottom: 56, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
      <SuitRow size={20} gap={32} />
    </div>
  </div>
);

/* —— A3: Umbrella — alternates —— */
const LockupTile = ({ bg, children, label, sub }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <div className={bg} style={{
      flex: 1,
      borderRadius: 6,
      padding: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 220
    }}>
      {children}
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 500, color: 'var(--ink-0)', fontStyle: 'italic' }}>
        {label}
      </div>
      <div className="body-text" style={{ marginTop: 2 }}>{sub}</div>
    </div>
  </div>
);

const A3_UmbrellaAlternates = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '52px 64px' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>Umbrella · variations</div>
    <div className="h-title" style={{ marginBottom: 6 }}>
      Three ways to wear the name <span className="h-title-italic">Baixada.</span>
    </div>
    <div className="body-text" style={{ marginBottom: 28, maxWidth: 720 }}>
      Same wordmark, different registers. The serif italic is the master; the others are for app icons and editorial moments.
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, height: 460 }}>
      <LockupTile
        bg="bg-walnut"
        label="Master · Italic serif"
        sub="Default lockup. Cormorant 500 italic, paper-on-walnut. Used on the homepage hero, marketing surfaces, app About screens."
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 96, lineHeight: 0.9, color: 'var(--paper-0)', letterSpacing: '-0.02em' }}>
            Baixada
          </div>
          <div style={{ marginTop: 14 }}><HandUnderline width={210} color="var(--brass-2)" /></div>
        </div>
      </LockupTile>

      <LockupTile
        bg="bg-paper"
        label="Stamp · For app icons & favicons"
        sub="Monogram B inside the porch-lamp shade. Reads at 32×32 and below. Brass + bordeaux."
      >
        <div style={{ width: 180, height: 180, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* rounded square tile */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, var(--card-back-a), var(--card-back-b))',
            borderRadius: 32,
            boxShadow: 'var(--shadow-card)'
          }} />
          {/* inner brass rule */}
          <div style={{
            position: 'absolute', inset: 10,
            border: '1.5px solid var(--brass-1)', borderRadius: 24, opacity: 0.7
          }} />
          {/* monogram */}
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500,
              fontSize: 110, lineHeight: 1, color: 'var(--brass-2)',
              letterSpacing: '-0.04em'
            }}>B</div>
          </div>
        </div>
      </LockupTile>

      <LockupTile
        bg="bg-paper"
        label="Horizontal · with mark"
        sub="Lamp-mark + wordmark on a single line. For nav bars, footers, document headers."
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <PorchLamp size={64} color="var(--brass-0)" glow="var(--brass-1)" />
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 64, lineHeight: 0.95, color: 'var(--ink-0)', letterSpacing: '-0.02em' }}>
              Baixada
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--ink-2)', marginTop: 2 }}>
              card games · optimal play
            </div>
          </div>
        </div>
      </LockupTile>
    </div>
  </div>
);

/* —— A4: Game lockups —— */
const GameLockup = ({ name, italicWord = null, suffix = null, accent = 'var(--brass-1)', dark = false }) => {
  const fg = dark ? 'var(--paper-0)' : 'var(--ink-0)';
  const sub = dark ? 'var(--brass-2)' : 'var(--ink-2)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 600, letterSpacing: '0.42em', textTransform: 'uppercase', color: sub }}>
        Baixada
      </div>
      <div style={{ width: 28, height: 1, background: accent, opacity: 0.7 }} />
      <div style={{
        fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500,
        fontSize: 76, lineHeight: 0.95, letterSpacing: '-0.02em', color: fg
      }}>
        {italicWord || name}
      </div>
      {suffix && (
        <div style={{ marginTop: 4 }}>
          <Plaque color={accent}>{suffix}</Plaque>
        </div>
      )}
    </div>
  );
};

const A4_GameLockups = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '52px 64px' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>Per-game · the system</div>
    <div className="h-title" style={{ marginBottom: 6 }}>
      The games keep their <span className="h-title-italic">real names.</span>
    </div>
    <div className="body-text" style={{ marginBottom: 36, maxWidth: 760 }}>
      Truco is Truco. Escopa is Escopa. The umbrella sits above as a quiet eyebrow, and a swappable suffix marks special modes — like <strong>· Lab</strong> for the CFR-solved opponent. If Escopa never gets a solver, it never wears the suffix. Clean.
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, height: 420 }}>
      {/* Truco — flagship, with Lab plaque */}
      <div className="bg-walnut" style={{ borderRadius: 6, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 35%, rgba(255,220,160,0.14), transparent 70%)' }} />
        <div style={{ position: 'relative' }}>
          <GameLockup name="Truco" suffix="· Lab" accent="var(--brass-1)" dark />
        </div>
      </div>

      {/* Truco — without lab, for casual play */}
      <div style={{ borderRadius: 6, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper-1)', border: '1px solid var(--paper-2)' }}>
        <GameLockup name="Truco" accent="var(--suit-red)" />
      </div>

      {/* Escopa */}
      <div style={{ borderRadius: 6, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper-1)', border: '1px solid var(--paper-2)' }}>
        <GameLockup name="Escopa" italicWord="Escopa" accent="var(--suit-green)" />
      </div>

      {/* Bisca */}
      <div style={{ borderRadius: 6, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper-1)', border: '1px solid var(--paper-2)' }}>
        <GameLockup name="Bisca" italicWord="Bisca" accent="var(--suit-ochre)" />
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 18, gap: 24 }}>
      <div className="body-text" style={{ flex: 1 }}><strong>Truco · Lab</strong> — flagship, walnut + brass. The "study" register.</div>
      <div className="body-text" style={{ flex: 1 }}><strong>Truco</strong> — same wordmark, copas-red rule. The "play" register.</div>
      <div className="body-text" style={{ flex: 1 }}><strong>Escopa</strong> — bastos-green rule.</div>
      <div className="body-text" style={{ flex: 1 }}><strong>Bisca</strong> — oros-ochre rule. Future.</div>
    </div>
  </div>
);

/* —— A5: Color & Type system —— */
const Swatch = ({ name, hex, varName, dark = false }) => (
  <div className="swatch">
    <div className="swatch-chip" style={{ background: hex, borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.18)' }} />
    <div className="swatch-name">{name}</div>
    <div className="swatch-meta">{hex}</div>
    <div className="swatch-meta" style={{ opacity: 0.7 }}>{varName}</div>
  </div>
);

const A5_ColorAndType = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '52px 64px' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>System · color & type</div>
    <div className="h-title" style={{ marginBottom: 28 }}>
      Inherits <span className="h-title-italic">Tactile</span> — no new tokens.
    </div>

    {/* Colors */}
    <div className="h-eyebrow" style={{ marginBottom: 12 }}>Palette</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 14, marginBottom: 28 }}>
      <Swatch name="Walnut" hex="#3d2e20" varName="--wood-2" />
      <Swatch name="Wood deep" hex="#1f1610" varName="--wood-0" />
      <Swatch name="Paper" hex="#ede4d0" varName="--paper-0" />
      <Swatch name="Paper edge" hex="#d5c7a4" varName="--paper-2" />
      <Swatch name="Card edge" hex="#c8a040" varName="--card-edge" />
      <Swatch name="Bordeaux" hex="#5a2a26" varName="--card-back-a" />
      <Swatch name="Brass" hex="#a88540" varName="--brass-1" />
      <Swatch name="Brass hi" hex="#ecd999" varName="--brass-hi" />
    </div>

    <div className="h-eyebrow" style={{ marginBottom: 12 }}>Spanish suits — used as accent rules per game</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 36, maxWidth: 600 }}>
      <Swatch name="Copas (Truco)" hex="#a23c2c" varName="--suit-red" />
      <Swatch name="Bastos (Escopa)" hex="#4a5a2a" varName="--suit-green" />
      <Swatch name="Oros (Bisca)" hex="#b88528" varName="--suit-ochre" />
      <Swatch name="Espadas" hex="#1e1a14" varName="--suit-black" />
    </div>

    {/* Type */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 10 }}>Cormorant Garamond — display</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 56, lineHeight: 1, color: 'var(--ink-0)', letterSpacing: '-0.02em' }}>
          Baixada
        </div>
        <div className="body-text" style={{ marginTop: 8 }}>500 italic for wordmarks; 400 regular for editorial titles. Quiet, lettered, slightly antique.</div>
      </div>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 10 }}>Inter — utility</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 32, color: 'var(--ink-0)', letterSpacing: '-0.01em' }}>
          Truco · Lab
        </div>
        <div className="body-text" style={{ marginTop: 8 }}>For UI, kickers, plaques, mono-spaced numbers. Always upper-tracked when used as a label.</div>
      </div>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 10 }}>Kalam — handwritten</div>
        <div style={{ fontFamily: 'var(--font-hand)', fontSize: 32, color: 'var(--ink-1)', lineHeight: 1.1 }}>
          do Vô João
        </div>
        <div className="body-text" style={{ marginTop: 8 }}>For named achievements, marginalia, Easter-eggs. Never for primary UI — only for the warmer voice.</div>
      </div>
    </div>
  </div>
);

/* —— A6: Easter eggs / family references —— */
const Achievement = ({ title, desc, accent = 'var(--brass-1)' }) => (
  <div style={{
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start',
    padding: '14px 16px',
    borderTop: '1px solid var(--paper-2)'
  }}>
    <div style={{
      width: 40, height: 40, flexShrink: 0,
      borderRadius: 4,
      background: 'linear-gradient(180deg, var(--card-0), var(--card-1))',
      border: '1px solid var(--card-edge)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute', inset: 2,
        border: `1px solid ${accent}`, borderRadius: 2, opacity: 0.5
      }} />
      <SuitGlyph kind="copas" size={18} />
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: 'var(--font-hand)', fontSize: 19, color: 'var(--ink-0)', lineHeight: 1.05 }}>
        {title}
      </div>
      <div className="body-text" style={{ marginTop: 2, fontSize: 12 }}>{desc}</div>
    </div>
  </div>
);

const A6_EasterEggs = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '52px 64px' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>The farm · soft references</div>
    <div className="h-title" style={{ marginBottom: 6 }}>
      How <span className="h-title-italic">na baixada</span> shows up.
    </div>
    <div className="body-text" style={{ marginBottom: 24, maxWidth: 760 }}>
      Three places to lean in, three to avoid. Goal: warmth without caricature. Personal without inside-joke gatekeeping.
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 36 }}>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 12 }}>Achievement names — handwritten, named after real plays</div>
        <div style={{ background: 'var(--paper-1)', border: '1px solid var(--paper-2)', borderRadius: 4, paddingBottom: 4 }}>
          <Achievement
            title="o Truco do Vô João"
            desc="Win a hand on a 12-point envido bluff with a 4-5-6 — the kind of hand only the boldest plays."
          />
          <Achievement
            title="a Escopa da Tia Marisa"
            desc="Sweep three escopas in a single deal. Apocryphal at the table; rare in the data."
          />
          <Achievement
            title="o Domingo na Baixada"
            desc="Play a full round of all three games in one session. The home achievement."
          />
          <Achievement
            title="último jogo da noite"
            desc="Win a match after midnight, when everyone said it'd be the last hand."
          />
        </div>
        <div className="hand" style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 14 }}>
          → use real names only with permission. otherwise leave them generic-personal.
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div>
          <div className="h-eyebrow" style={{ marginBottom: 10 }}>Yes — these work</div>
          <ul className="list-brass">
            <li><strong>Named hands & plays</strong> in handwritten Kalam. Personal without portraits.</li>
            <li><strong>The porch-lamp mark</strong> appears once per surface — a quiet through-line.</li>
            <li><strong>Room names</strong> in the lobby reference the farm: <em>a sala</em>, <em>a varanda</em>, <em>a baixada</em>.</li>
            <li><strong>One illustrated postcard</strong> on the homepage — the gate, hand-printed, single ink color.</li>
          </ul>
        </div>
        <div>
          <div className="h-eyebrow" style={{ marginBottom: 10 }}>Avoid — these go wrong fast</div>
          <ul className="list-brass">
            <li><strong>Stylized portraits</strong> of family. Hard to do well, easy to make uncanny.</li>
            <li><strong>Dialect-heavy copy</strong> in the UI. Save the warmth for achievements.</li>
            <li><strong>Folk illustration</strong> from generative tools. Real woodcut or nothing.</li>
            <li><strong>Gauchesque clichés</strong> — chimarrão imagery, bombachas. Too on-the-nose.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

/* —— A7: Domains & summary —— */
const A7_DomainsSummary = () => (
  <div className="bg-paper" style={{ width: 1200, height: 720, padding: '52px 64px', position: 'relative' }}>
    <div className="kicker" style={{ marginBottom: 8 }}>Domains · final recommendations</div>
    <div className="h-title" style={{ marginBottom: 6 }}>
      Where <span className="h-title-italic">Baixada</span> lives on the open web.
    </div>
    <div className="body-text" style={{ marginBottom: 32, maxWidth: 760 }}>
      Pick one umbrella domain, then per-game subdomains. Subdomains let each app stand alone in app-store listings while still inheriting from the parent.
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
      <div>
        <div className="h-eyebrow" style={{ marginBottom: 14 }}>Umbrella — pick one</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { d: 'baixada.cards', note: 'Top pick. Suffix is meaning, not just a TLD.', hot: true },
            { d: 'baixada.games', note: 'Solid alternative. Slightly more generic.' },
            { d: 'jogarna.com', note: '"to play at" — Portuguese-first, more lyrical.' },
            { d: 'sobremesa.cards', note: 'Plan B if "Baixada" doesn\'t resonate.' },
            { d: 'baixada.gg', note: 'Skews gamer; works if you ever want the esports register.' }
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'baseline', gap: 14,
              padding: '12px 16px',
              background: item.hot ? 'rgba(168,133,64,0.08)' : 'transparent',
              border: item.hot ? '1px solid var(--brass-1)' : '1px solid var(--paper-2)',
              borderRadius: 4
            }}>
              <span style={{
                fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                fontSize: 16, fontWeight: 600, color: 'var(--ink-0)',
                letterSpacing: '-0.01em', minWidth: 160
              }}>{item.d}</span>
              <span className="body-text" style={{ flex: 1 }}>{item.note}</span>
              {item.hot && <Plaque>top pick</Plaque>}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="h-eyebrow" style={{ marginBottom: 14 }}>Per-game subdomains</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { d: 'truco.baixada.cards', note: 'Casual play — homepage of the game.' },
            { d: 'truco.baixada.cards/lab', note: 'The CFR study lab. A path, not a domain.' },
            { d: 'escopa.baixada.cards', note: 'When Escopa ships.' },
            { d: 'bisca.baixada.cards', note: 'Future.' }
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'baseline', gap: 14,
              padding: '12px 16px',
              border: '1px solid var(--paper-2)', borderRadius: 4
            }}>
              <span style={{
                fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                fontSize: 14, fontWeight: 500, color: 'var(--ink-0)', minWidth: 220
              }}>{item.d}</span>
              <span className="body-text" style={{ flex: 1 }}>{item.note}</span>
            </div>
          ))}
        </div>

        <div className="pin-note" style={{ marginTop: 22 }}>
          On the app stores, list each game by its <em>game name first</em> — "Truco · Baixada" — so search ranks the generic term. Reverse it on the web, where the brand carries the search.
        </div>
      </div>
    </div>

    {/* signature footer */}
    <div style={{ position: 'absolute', bottom: 36, left: 64, right: 64, display: 'flex', alignItems: 'center', gap: 18 }}>
      <PorchLamp size={32} color="var(--ink-1)" glow="var(--brass-1)" />
      <div style={{ flex: 1, height: 1, background: 'var(--paper-2)' }} />
      <div className="hand" style={{ fontSize: 16 }}>
        — for grandpa, and for every late hand that was supposed to be the last.
      </div>
    </div>
  </div>
);

Object.assign(window, {
  A1_Positioning, A2_UmbrellaPrimary, A3_UmbrellaAlternates,
  A4_GameLockups, A5_ColorAndType, A6_EasterEggs, A7_DomainsSummary
});
