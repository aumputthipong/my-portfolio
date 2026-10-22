/**
 * Hand-drawn line figure for the hero: him from the waist up at a desk, smiling
 * over an open laptop marked with a </> sign, a code window floating behind him.
 * The clothes, desk and window follow the theme through the CSS variables;
 * skin, facial lines and hair keep fixed colours so the face never turns into a
 * negative on the dark ground.
 *
 * In dark mode he keeps a dark sweater: the clothes and desk step up to a slate
 * just above the ground instead of inverting to near-white, the outlines soften
 * to muted, and the collar stays light. The laptop lid and the code window
 * take the raised `card` fill so they don't read as holes in the ground, and the
 * skin is toned down a step so the face doesn't glow brighter than the name.
 * The --fig-* variables are set on the <svg>; all but the skin point at
 * existing theme tokens.
 */
const FIGURE_THEME =
  "[--fig-line:var(--ink)] [--fig-cloth:var(--ink)] [--fig-collar:var(--canvas)] [--fig-fold:var(--canvas)] " +
  "[--fig-paper:var(--canvas)] [--fig-skin:#fbf1e6] " +
  "dark:[--fig-line:var(--muted)] dark:[--fig-cloth:var(--line)] dark:[--fig-collar:var(--ink)] dark:[--fig-fold:var(--muted)] " +
  "dark:[--fig-paper:var(--card)] dark:[--fig-skin:#e8d9c8]";
const INK = "var(--ink)";
const LINE = "var(--fig-line)";
const CLOTH = "var(--fig-cloth)";
const COLLAR = "var(--fig-collar)";
const FOLD = "var(--fig-fold)";
const PAPER = "var(--fig-paper)";
const ACCENT = "var(--accent)";
const HAIR = "#1b1a19";
const SKIN = "var(--fig-skin)";
const FEATURE = "#1b1a19";

const line = { stroke: LINE, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const skinLine = { stroke: FEATURE, strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 360"
      className={`${FIGURE_THEME} ${className}`}
      role="img"
      aria-label="Illustration of Putthipong smiling at his laptop"
    >
      {/* Code window floating behind his shoulder, clear of the head */}
      <g>
        <rect x="266" y="8" width="144" height="106" rx="10" fill={PAPER} {...line} />
        <path d="M266 32 L410 32" fill="none" {...line} />
        <circle cx="282" cy="20" r="3.5" fill={LINE} />
        <circle cx="294" cy="20" r="3.5" fill={LINE} />
        <circle cx="306" cy="20" r="3.5" fill={LINE} />
        <path d="M282 50 L318 50 M328 50 L352 50" fill="none" stroke={ACCENT} strokeWidth={5} strokeLinecap="round" />
        <path d="M296 66 L362 66" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" opacity={0.55} />
        <path d="M296 82 L334 82 M344 82 L396 82" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" opacity={0.55} />
        <path d="M282 98 L310 98" fill="none" stroke={ACCENT} strokeWidth={5} strokeLinecap="round" />
      </g>

      {/* Sweater, cut off by the desk */}
      <path d="M110 322 C110 246 132 196 170 184 C182 180 194 179 206 179 C218 179 230 180 242 184 C280 196 302 246 302 322 Z" fill={CLOTH} {...line} />
      {/* Arms reaching down to the keyboard; they run in behind the lid */}
      <path d="M152 214 C144 228 142 240 150 252 M260 214 C268 228 270 240 262 252" fill="none" stroke={FOLD} strokeWidth={2} strokeLinecap="round" opacity={0.6} />

      {/* Neck */}
      <path d="M196 158 L196 183 L216 183 L216 158 Z" fill={SKIN} {...skinLine} />
      <path d="M189 182 C197 191 215 191 223 182" fill="none" stroke={COLLAR} strokeWidth={2.5} strokeLinecap="round" />

      {/* Head, set a little lower so the neck stays short */}
      <g transform="translate(0 6)">
        {/* Ears, both sides: a rounded C with one fold inside. Their inner edge sits
            well inside the face, so the head, drawn next, hides it and its own
            outline makes the join. The right ear mirrors the left around x = 206. */}
        <path d="M184 111 C168 105 159 116 161 126 C163 135 171 139 184 137 Z" fill={SKIN} {...skinLine} />
        <path d="M228 111 C244 105 253 116 251 126 C249 135 241 139 228 137 Z" fill={SKIN} {...skinLine} />
        <path d="M171 119 C166 119 165 127 170 130 M241 119 C246 119 247 127 242 130" fill="none" {...skinLine} strokeWidth={2} />
        <path d="M173 116 C173 86 189 72 206 72 C224 72 239 86 239 116 C239 144 225 160 206 160 C187 160 173 144 173 116 Z" fill={SKIN} {...skinLine} strokeWidth={3} />
        {/* Short black hair as in his portrait: a full rounded cut kept close to the
            skull so the head stays round, parted left of centre. The fringe breaks
            into a few broad locks of uneven length, each tapering to a point that
            leans away from the part, so it doesn't read as one smooth sheet */}
        <path d="M168 116 C161 94 175 67 205 66 C233 64 251 80 247 104 C246 112 244 117 242 122 C240 115 237 109 234 103 C233 108 232 111 230 115 C226 108 220 101 213 99 C213 103 212 107 210 110 C206 104 202 98 197 95 C192 100 186 106 181 111 C181 108 181 105 180 103 C177 108 173 113 169 118 Z" fill={HAIR} {...line} />
        {/* Detail on the crown only: a cowlick and two strands falling either side of it */}
        <path d="M206 67 C204 59 209 54 217 55" fill="none" {...line} />
        <path d="M200 75 C193 80 189 86 188 92 M224 74 C228 79 230 86 229 92" fill="none" stroke="#5a544e" strokeWidth={2} strokeLinecap="round" />
        {/* Round glasses, eyes smiling behind them */}
        <circle cx="191" cy="121" r="11" fill="none" {...skinLine} />
        <circle cx="221" cy="121" r="11" fill="none" {...skinLine} />
        <path d="M202 120 C204 117 208 117 210 120 M232 119 L239 117 M180 119 L173 117" fill="none" {...skinLine} />
        <path d="M186 123 C188 119 194 119 196 123 M216 123 C218 119 224 119 226 123" fill="none" {...skinLine} />
        {/* Nose and an open smile */}
        <path d="M206 128 C204 133 203 136 207 137" fill="none" {...skinLine} />
        <path d="M194 142 C199 152 214 152 219 141 C211 145 202 145 194 142 Z" fill={FEATURE} {...skinLine} />
      </g>

      {/* Desk, sized to the figure */}
      <path d="M58 322 L362 322 L362 334 L58 334 Z" fill={CLOTH} {...line} />

      {/* Laptop, lid towards us, marked with a code sign */}
      <rect x="136" y="228" width="140" height="94" rx="9" fill={PAPER} {...line} />
      <path d="M194 265 L183 275 L194 285 M218 265 L229 275 L218 285 M211 261 L201 289" fill="none" stroke={ACCENT} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />

    </svg>
  );
}
