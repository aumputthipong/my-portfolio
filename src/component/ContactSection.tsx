'use client'

import { FaArrowUpRightFromSquare, FaEnvelope, FaLocationDot, FaRegFilePdf } from 'react-icons/fa6'
import { contacts, RESUME_HREF, type ContactItem } from '@/data/ContactData'
import Section from './UI/Section'

// Email is the one action the page ends on; the other channels sit under it, quieter
const email = contacts.find((c) => c.label === 'Email')
const others: ContactItem[] = [
  ...contacts.filter((c) => c !== email),
  { label: 'Resume', value: 'Download PDF', href: RESUME_HREF, icon: FaRegFilePdf, external: true },
]

/**
 * The close: one white speech-bubble card, centred, with a tail at its lower edge.
 * The title, one line on the role, the email action, then the other channels.
 */
const ContactSection = () => {
  return (
    <Section id="contact" bg="bg-canvas" className="py-16 sm:py-24">
      <div className="relative mx-auto max-w-2xl rounded-xl bg-card px-6 py-10 sm:px-12 sm:py-14 text-center shadow-xl ring-1 ring-line/70">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] leading-tight text-ink">
          Let&apos;s connect
        </h2>
        <span aria-hidden className="block mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />

        <p className="mt-6 text-sm sm:text-base leading-relaxed text-body">
          Open to full-stack developer roles. Email is the quickest way to reach me.
        </p>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted">
          <FaLocationDot className="size-3.5 text-accent-strong" aria-hidden />
          Based in Bangkok, Thailand
        </p>

        {email && (
          <div className="mt-7 flex flex-col items-center gap-3">
            <a
              href={email.href}
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-accent text-on-accent text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-sm transition-[filter,transform] hover:brightness-105 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              <FaEnvelope className="size-3.5" aria-hidden />
              Email me
            </a>
            {/* Plain text so it can be copied when no mail app is set up */}
            <span className="text-sm text-body select-all break-all">{email.value}</span>
          </div>
        )}

        {/* The other channels, one line of quiet links; the phone shows its number,
            since a desktop visitor can't follow a tel: link */}
        <ul className="mt-8 pt-6 border-t border-line flex flex-wrap justify-center gap-x-6 gap-y-3">
          {others.map((c) => {
            const Icon = c.icon
            const text = c.label === 'Phone' ? c.value : c.label
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={c.label === 'Phone' ? `Phone ${c.value}` : undefined}
                  className="group inline-flex items-center gap-2 py-1 pointer-coarse:min-h-11 rounded-sm text-sm font-semibold text-ink transition-colors hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  <Icon className="size-4 text-accent-strong" aria-hidden />
                  {text}
                  {c.external && (
                    <>
                      <FaArrowUpRightFromSquare className="size-2.5 text-muted group-hover:text-accent-strong transition-colors" aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </>
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Speech-bubble tail */}
        <span
          aria-hidden
          className="absolute -bottom-3.5 left-[62%] size-7 rotate-45 rounded-br-sm bg-card shadow-[5px_5px_8px_-5px_rgba(16,42,66,0.2)]"
        />
      </div>
    </Section>
  )
}

export default ContactSection
