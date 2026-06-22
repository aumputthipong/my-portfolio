'use client'

import { FaArrowRight } from 'react-icons/fa'
import { contacts } from '@/data/ContactData'
import Section from './UI/Section'
import SectionHeader from './UI/SectionHeader'

const ContactSection = () => {
  return (
    <Section id="contact" bg="bg-zinc-50" className="py-10 sm:py-12 lg:py-14">
      <SectionHeader label="Contact" />

      {/* Card */}
      <div className="bg-white border-2 border-gray-200 rounded-xl shadow-sm p-5 sm:p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

          {/* LEFT: Heading + tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
              Let&apos;s build something{" "}
              <span className="text-slate-900 underline decoration-2 underline-offset-4 decoration-slate-300">good</span>
              <br />
              together.
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed mt-3 sm:mt-4" style={{ color: '#6b7280' }}>
              I&apos;m always open to new opportunities, ideas, or simply to get in touch.
              Usually replies within a day.
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
                  className="group flex items-center gap-3 p-2.5 sm:p-3 bg-white rounded-lg border border-gray-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 min-w-0"
                >
                  <div className={`p-2 sm:p-2.5 rounded-md transition-colors flex-shrink-0 ${c.iconBg}`}>
                    <Icon className={`${c.iconColor} text-sm sm:text-base`} />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {c.label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
                      {c.value}
                    </p>
                  </div>
                  <FaArrowRight className="text-xs text-gray-300 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
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
