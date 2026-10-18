import { contacts } from "../../data/ContactData";

/**
 * About, in two columns: who he is and how to reach him (a round portrait over the
 * contact details), then education. The tech stack has its own Skills section.
 */
const Introduction = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
      {/* ── LEFT: portrait + contact details ── */}
      <div>
        <div className="flex items-center gap-5">
          {/* Round portrait inside a mustard ring, the signature frame in a smaller form */}
          <div className="flex-shrink-0 rounded-full border-2 border-accent p-1.5">
            {/* Zoomed toward the face: the source is a half-body 4:5 photo */}
            <div className="size-24 sm:size-28 rounded-full overflow-hidden bg-canvas">
              <img
                src="/image/profile_formal.png"
                alt="Putthipong Chobngam"
                className="w-full h-full object-cover scale-[1.25] origin-[50%_15%]"
              />
            </div>
          </div>
          <div className="min-w-0">
            <p className="font-display text-xl sm:text-2xl font-bold tracking-[0.05em] text-ink leading-tight">
              Putthipong Chobngam
            </p>
            <p className="mt-1 text-sm text-muted">Bangkok, Thailand</p>
          </div>
        </div>

        {/* Quiet rows, so the Education card stays the one raised block. Same data as
            the Contact section, which remains the closing call to action; phones skip
            them and reach that section instead. */}
        <div className="hidden sm:block mt-8">
          <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-[0.15em] text-ink mb-3">
            Contact details
          </h3>
          <dl className="text-sm">
            {contacts.map(({ icon: Icon, ...c }) => (
              <div
                key={c.label}
                className="grid grid-cols-[84px_1fr] gap-3 py-2 border-b border-line last:border-b-0"
              >
                {/* Accent icons, as design.md gives contact icons, so each row is found at a glance */}
                <dt className="flex items-center gap-2 text-muted">
                  <Icon className="size-3.5 flex-shrink-0 text-accent-strong" aria-hidden />
                  {c.label}
                </dt>
                <dd className="min-w-0">
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="block truncate text-ink hover:text-accent-strong transition-colors underline-offset-4 focus-visible:outline-none focus-visible:text-accent-strong focus-visible:underline"
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ── RIGHT: Education ── */}
      <div id="education">
        <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-[0.15em] text-ink mb-5">
          Education
        </h3>

        {/* The one raised card in the section, so the degree is read first */}
        <div className="rounded-xl bg-card p-5 sm:p-6 shadow-sm ring-1 ring-line/70">
          <div className="flex items-start gap-4">
            <img
              src="/image/KMITL_Logo.png"
              alt="KMITL"
              className="h-14 w-14 object-contain flex-shrink-0"
            />
            <div className="min-w-0">
              <h4 className="font-display text-lg font-bold text-ink leading-snug">
                B.Sc. Information Technology
              </h4>
              <p className="text-sm text-body mt-1 leading-snug">
                King Mongkut&apos;s Institute of Technology Ladkrabang
              </p>
              <p className="text-sm text-muted mt-0.5">Software Engineering major</p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-line">
            <div>
              <dt className="text-xs text-muted">Graduated</dt>
              <dd className="font-display text-xl font-bold text-ink mt-0.5">2025</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Cumulative GPA</dt>
              <dd className="font-display text-xl font-bold text-ink mt-0.5">
                3.11
                <span className="font-sans text-sm font-normal text-muted"> / 4.00</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
