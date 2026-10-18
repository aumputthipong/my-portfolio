/**
 * Hand-drawn line figure for the hero: him from the waist up at a desk, smiling
 * over an open laptop with a pineapple mark, a mug beside it, a code window
 * floating behind him.
 * The clothes, desk and window follow the theme through the CSS variables;
 * skin, facial lines and hair keep fixed colours so the face never turns into a
 * negative on the dark ground.
 */
const INK = "var(--ink)";
const PAPER = "var(--canvas)";
const ACCENT = "var(--accent)";
const HAIR = "#1b1a19";
const SKIN = "#fbf1e6";
const FEATURE = "#1b1a19";
// A soft blush, the one warm note on the face
const BLUSH = "#f2a29a";

const line = { stroke: INK, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const skinLine = { stroke: FEATURE, strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 360"
      className={className}
      role="img"
      aria-label="Illustration of Putthipong smiling at his laptop"
    >
      {/* Code window floating behind his shoulder */}
      <g>
        <rect x="256" y="14" width="150" height="108" rx="10" fill={PAPER} {...line} />
        <path d="M256 38 L406 38" fill="none" {...line} />
        <circle cx="272" cy="26" r="3.5" fill={INK} />
        <circle cx="284" cy="26" r="3.5" fill={INK} />
        <circle cx="296" cy="26" r="3.5" fill={INK} />
        <path d="M272 56 L310 56 M320 56 L346 56" fill="none" stroke={ACCENT} strokeWidth={5} strokeLinecap="round" />
        <path d="M286 72 L354 72" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" opacity={0.55} />
        <path d="M286 88 L326 88 M336 88 L394 88" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" opacity={0.55} />
        <path d="M272 104 L300 104" fill="none" stroke={ACCENT} strokeWidth={5} strokeLinecap="round" />
      </g>

      {/* Sweater, cut off by the desk */}
      <path d="M100 322 C100 244 124 194 166 182 C180 178 192 177 206 177 C220 177 232 178 246 182 C288 194 312 244 312 322 Z" fill={INK} {...line} />
      {/* Folds where the arms reach down to the keyboard */}
      <path d="M146 236 C134 266 132 296 138 320 M266 236 C278 266 280 296 274 320" fill="none" stroke={PAPER} strokeWidth={2} strokeLinecap="round" opacity={0.6} />

      {/* Neck */}
      <path d="M196 154 L196 181 L216 181 L216 154 Z" fill={SKIN} {...skinLine} />
      <path d="M189 180 C197 190 215 190 223 180" fill="none" stroke={PAPER} strokeWidth={2.5} strokeLinecap="round" />

      {/* Head */}
      <path d="M173 116 C173 86 189 72 206 72 C224 72 239 86 239 116 C239 144 225 160 206 160 C187 160 173 144 173 116 Z" fill={SKIN} {...skinLine} strokeWidth={3} />
      <path d="M238 118 C246 114 250 126 240 134 Z" fill={SKIN} {...skinLine} />
      {/* Short black hair, the fringe cut in uneven tufts */}
      <path d="M170 114 C164 82 184 60 210 60 C236 60 250 80 244 112 C241 104 237 99 231 97 L229 104 C223 96 215 93 207 95 L204 102 C199 95 191 94 185 98 C180 102 174 107 170 114 Z" fill={HAIR} {...line} />
      {/* Cheeks */}
      <ellipse cx="186" cy="136" rx="6" ry="3.5" fill={BLUSH} opacity={0.55} />
      <ellipse cx="226" cy="136" rx="6" ry="3.5" fill={BLUSH} opacity={0.55} />
      {/* Round glasses, eyes smiling behind them */}
      <circle cx="191" cy="121" r="11" fill="none" {...skinLine} />
      <circle cx="221" cy="121" r="11" fill="none" {...skinLine} />
      <path d="M202 120 C204 117 208 117 210 120 M232 119 L239 117" fill="none" {...skinLine} />
      <path d="M186 123 C188 119 194 119 196 123 M216 123 C218 119 224 119 226 123" fill="none" {...skinLine} />
      {/* Nose and an open smile */}
      <path d="M206 128 C204 133 203 136 207 137" fill="none" {...skinLine} />
      <path d="M194 142 C199 152 214 152 219 141 C211 145 202 145 194 142 Z" fill={FEATURE} {...skinLine} />

      {/* Desk */}
      <path d="M24 322 L396 322 L396 334 L24 334 Z" fill={INK} {...line} />

      {/* Laptop, lid towards us, with the pineapple on it */}
      <rect x="136" y="228" width="140" height="94" rx="9" fill={PAPER} {...line} />
      <ellipse cx="206" cy="280" rx="11" ry="14" fill={ACCENT} />
      <path d="M198 272 L214 288 M214 272 L198 288" fill="none" stroke={PAPER} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M206 266 L200 254 M206 266 L206 250 M206 266 L212 254" fill="none" stroke={ACCENT} strokeWidth={3.5} strokeLinecap="round" />

      {/* Mug with steam */}
      <path d="M58 278 L94 278 L91 322 L61 322 Z" fill={PAPER} {...line} />
      <path d="M94 288 C107 288 107 308 93 308" fill="none" {...line} />
      <path d="M70 266 C66 258 74 254 70 246 M82 266 C78 258 86 254 82 246" fill="none" {...line} strokeWidth={2.5} />
    </svg>
  );
}
