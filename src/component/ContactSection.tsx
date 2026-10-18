'use client'

import { FaArrowRight, FaArrowUpRightFromSquare, FaEnvelope, FaLocationDot, FaRegFilePdf } from 'react-icons/fa6'
import { contacts, RESUME_HREF, type ContactItem } from '@/data/ContactData'
import Section from './UI/Section'
import SectionHeader from './UI/SectionHeader'

// Email is the one action the page ends on; the other channels sit beside it, quieter
const email = contacts.find((c) => c.label === 'Email')
const others: ContactItem[] = [
  ...contacts.filter((c) => c !== email),
  { label: 'Resume', value: 'Download PDF', href: RESUME_HREF, icon: FaRegFilePdf, external: true },
]

const ContactSection = () => {
  return (
    <Section id="contact" bg="bg-canvas border-t border-line" className="py-10 sm:py-12 lg:py-14">
      <SectionHeader label="Contact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 md:items-end">

        {/* LEFT: heading, closing line, and the primary action */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] text-ink">
            Let&apos;s{" "}
            connect<span className="text-accent">.</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 text-body">
            Open to full-stack developer roles. Email is the quickest way to reach me.
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted">
            <FaLocationDot className="size-3.5 text-accent" aria-hidden />
            Based in Bangkok, Thailand
          </p>

          {email && (
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href={email.href}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-2xl bg-ink text-canvas text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                <FaEnvelope className="size-3.5" aria-hidden />
                Email me
              </a>
              {/* Plain text so it can be copied when no mail app is set up */}
              <span className="text-sm text-body select-all break-all">{email.value}</span>
            </div>
          )}
        </div>

        {/* RIGHT: the other channels as quiet rows */}
        <ul className="border-t border-line">
          {others.map((c) => {
            const Icon = c.icon
            return (
              <li key={c.label} className="border-b border-line">
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group grid grid-cols-[1.25rem_5rem_1fr_auto] items-center gap-3 py-3.5 pointer-coarse:min-h-11 rounded-sm text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  <Icon className="size-4 text-muted group-hover:text-accent transition-colors" aria-hidden />
                  <span className="text-muted">{c.label}</span>
                  <span className="min-w-0 truncate font-medium text-ink group-hover:text-accent transition-colors">
                    {c.value}
                  </span>
                  {c.external ? (
                    <>
                      <FaArrowUpRightFromSquare className="size-3 text-muted group-hover:text-accent transition-colors" aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </>
                  ) : (
                    <FaArrowRight className="size-3 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" aria-hidden />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

      </div>
    </Section>
  )
}

export default ContactSection
