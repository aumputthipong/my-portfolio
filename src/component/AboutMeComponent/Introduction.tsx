import { contacts } from "../../data/ContactData";
import { techSkills } from "../../data/TechSkillsData";
import TechBadge from "../UI/TechBadge";

const Introduction = () => {
  const total = techSkills.reduce((sum, s) => sum + s.skills.length, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
      {/* ── LEFT: Tech stack ── */}
      <div className="lg:col-span-3" id="skills">
        <div className="flex items-baseline justify-between mb-5">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">
            Tech stack
          </h3>
          <span className="text-[11px] font-mono text-muted">
            {total} technologies
          </span>
        </div>

        {techSkills.map((section) => (
          <div
            key={section.category}
            className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-6 border-t border-line first:border-t-0"
          >
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <p className="text-sm font-semibold text-ink">
                {section.category
                  .replace("Programming ", "")
                  .replace(" Development", "")}
              </p>
              <span className="text-[11px] font-mono text-muted">
                {String(section.skills.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill) => (
                <TechBadge
                  key={skill.label}
                  tech={{ name: skill.label, icon: skill.icon }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── RIGHT: Education ── */}
      <div className="lg:col-span-2 lg:border-l lg:border-line lg:pl-8" id="education">
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-5">
          Education
        </h3>

        {/* The one raised card in the section, so the degree is read first */}
        <div className="rounded-2xl border border-line bg-card p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <img
              src="/image/KMITL_Logo.png"
              alt="KMITL"
              className="h-14 w-14 object-contain flex-shrink-0"
            />
            <div className="min-w-0">
              <h4 className="font-display text-lg font-semibold text-ink leading-snug">
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
              <dd className="font-display text-xl font-semibold text-ink mt-0.5">2025</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">GPAX</dt>
              <dd className="font-display text-xl font-semibold text-ink mt-0.5">
                3.11
                <span className="font-sans text-sm font-normal text-muted"> / 4.00</span>
              </dd>
            </div>
          </dl>
        </div>

        {/* Contact details: quiet rows, so the Education card stays the focus.
            Same data as the Contact section, which remains the closing call to action. */}
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mt-8 mb-2">
          Contact details
        </h3>
        <dl className="text-sm">
          <div className="grid grid-cols-[84px_1fr] gap-3 py-2 border-b border-line">
            <dt className="text-muted">Location</dt>
            <dd className="text-ink">Bangkok, Thailand</dd>
          </div>
          {contacts.map((c) => (
            <div
              key={c.label}
              className="grid grid-cols-[84px_1fr] gap-3 py-2 border-b border-line last:border-b-0"
            >
              <dt className="text-muted">{c.label}</dt>
              <dd className="min-w-0">
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block truncate text-ink hover:text-accent transition-colors"
                >
                  {c.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Introduction;
