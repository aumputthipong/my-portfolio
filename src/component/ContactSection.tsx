'use client'

import { FaArrowRight } from 'react-icons/fa'
import { contacts } from '@/data/ContactData'
import Section from './UI/Section'
import SectionHeader from './UI/SectionHeader'

const ContactSection = () => {
  return (
    <Section id="contact" bg="bg-surface" className="py-10 sm:py-12 lg:py-14">
      <SectionHeader label="Contact" />

      {/* Card */}
      <div className="bg-card border-2 border-line rounded-xl shadow-sm p-5 sm:p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

          {/* LEFT: Heading + tagline */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-ink leading-tight">
              Let&apos;s{" "}
              <span className="text-accent underline decoration-2 underline-offset-4 decoration-accent/40">connect</span>.
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed mt-3 sm:mt-4 text-body">
              Open to work and new opportunities. Feel free to reach out.
            </p>
          </div>

          {/* RIGHT: Contact list */}
          <div className="space-y-2 sm:space-y-2.5">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-3 p-2.5 sm:p-3 bg-canvas rounded-lg border border-line hover:border-accent/40 hover:shadow-sm transition-all duration-200 min-w-0"
                >
                  <div className={`p-2 sm:p-2.5 rounded-md transition-colors flex-shrink-0 ${c.iconBg}`}>
                    <Icon className={`${c.iconColor} text-sm sm:text-base`} />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest">
                      {c.label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-ink truncate">
                      {c.value}
                    </p>
                  </div>
                  <FaArrowRight className="text-xs text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </Section>
  )
}

export default ContactSection
