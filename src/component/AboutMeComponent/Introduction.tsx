import { FaLocationDot } from "react-icons/fa6";
import { contacts } from "../../data/ContactData";

// One label voice for every in-card heading and caption (design.md label-caps)
const labelCaps = "text-xs font-bold uppercase tracking-[0.15em] text-muted";

/**
 * About, in two cards of equal height: a profile card that holds who he is and
 * where he studied (portrait, name, location, then the degree), and beside it the
 * contact details. The tech stack has its own Skills section.
 */
const Introduction = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-8">
      {/* ── LEFT: profile card ── */}
      <div className="rounded-xl bg-card ring-1 ring-line overflow-hidden">
        {/* Who */}
        <div className="flex items-center gap-5 sm:gap-6 px-5 py-6 sm:px-7 sm:py-7">
          {/* Plain frame: the photo with a hairline, no ornament */}
          <div className="relative w-24 sm:w-32 flex-shrink-0 aspect-[4/5] rounded-lg overflow-hidden bg-surface ring-1 ring-line">
            {/* The name sits right beside it, so the image adds nothing for a screen reader */}
            <img src="/image/profile_formal.png" alt="" className="w-full h-full object-cover object-top" />
          </div>
          <div className="min-w-0">
            <p className="font-display text-xl sm:text-2xl font-bold tracking-[0.03em] text-ink leading-tight">
              Putthipong Chobngam
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-body">
              <FaLocationDot className="size-3.5 text-accent-strong" aria-hidden />
              Bangkok, Thailand
            </p>
          </div>
        </div>

        {/* Where he studied: the lower half of the same card, on its own tint
            (a step below the card in dark mode, so it never melts into the section) */}
        <div id="education" className="border-t border-line bg-surface dark:bg-canvas px-5 py-6 sm:px-7">
          <h3 className={labelCaps}>Education</h3>

          <div className="mt-4 flex items-start gap-4">
            {/* The school is named in full beside it */}
            <img src="/image/KMITL_Logo.png" alt="" className="h-12 w-12 sm:h-14 sm:w-14 object-contain flex-shrink-0" />
            <div className="min-w-0">
              <h4 className="font-display text-base sm:text-lg font-bold text-ink leading-snug">
                B.Sc. Information Technology
              </h4>
              <p className="text-sm text-body mt-1 leading-snug">
                King Mongkut&apos;s Institute of Technology Ladkrabang
              </p>
              <p className="text-sm text-muted mt-0.5">Software Engineering major</p>
            </div>
          </div>

          <dl className="mt-5 grid grid-cols-2">
            <div>
              <dt className={labelCaps}>Graduated</dt>
              <dd className="mt-1 text-base font-bold text-ink tabular-nums">2025</dd>
            </div>
            <div className="border-l border-line pl-5">
              <dt className={labelCaps}>GPA</dt>
              <dd className="mt-1 text-base font-bold text-ink tabular-nums">
                3.11
                <span className="font-normal text-muted"> / 4.00</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ── RIGHT: contact details, a card as tall as the profile card ──
          Same data as the Contact section, which remains the closing call to action;
          phones skip this card and reach that section instead. */}
      <div className="hidden sm:flex flex-col rounded-xl bg-card ring-1 ring-line px-5 py-6 sm:px-7">
        <h3 className={labelCaps}>Contact details</h3>
        {/* Rows share the card's height, so both cards end on the same line */}
        <ul className="mt-3 flex-1 flex flex-col justify-between">
          {contacts.map(({ icon: Icon, ...c }) => (
            <li key={c.label} className="border-b border-line last:border-b-0">
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 py-3.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                <span className="grid place-items-center size-10 flex-shrink-0 rounded-md bg-accent-soft text-accent-strong transition-colors group-hover:bg-accent group-hover:text-on-accent">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className={`block ${labelCaps}`}>{c.label}</span>
                  <span className="mt-0.5 block truncate text-base font-semibold text-ink transition-colors group-hover:text-accent-strong">
                    {c.value}
                  </span>
                </span>
                {c.external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
