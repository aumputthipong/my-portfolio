'use client'

import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaArrowRight } from 'react-icons/fa'

const contacts = [
  {
    label: "Email",
    value: "putthipong.chb@gmail.com",
    href: "mailto:putthipong.chb@gmail.com",
    icon: FaEnvelope,
    iconBg: "bg-blue-50 group-hover:bg-blue-100",
    iconColor: "text-blue-600",
    external: false,
  },
  {
    label: "Phone",
    value: "+66 96 054 2824",
    href: "tel:+66960542824",
    icon: FaPhone,
    iconBg: "bg-green-50 group-hover:bg-green-100",
    iconColor: "text-green-600",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/aumputthipong",
    href: "https://github.com/aumputthipong",
    icon: FaGithub,
    iconBg: "bg-gray-50 group-hover:bg-gray-100",
    iconColor: "text-gray-700",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/putthipong-chobngam",
    href: "https://www.linkedin.com/in/putthipong-chobngam/",
    icon: FaLinkedin,
    iconBg: "bg-blue-50 group-hover:bg-blue-100",
    iconColor: "text-blue-700",
    external: true,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-zinc-50">
      <div className="max-w-6xl mx-auto">

        {/* Section indicator */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase flex items-center gap-2">
            <span className="w-6 h-px bg-gray-400" /> Contact
          </p>
          <p className="text-xs font-mono text-gray-400">04 / 04</p>
        </div>

        {/* Card */}
        <div className="bg-white border-2 border-gray-200 rounded-xl shadow-sm p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: Heading + tagline */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Let&apos;s build something{" "}
                <span className="text-blue-600">good</span>
                <br />
                together.
              </h2>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#6b7280' }}>
                I&apos;m always open to new opportunities, ideas, or simply to get in touch.
                Usually replies within a day.
              </p>
            </div>

            {/* RIGHT: Contact list */}
            <div className="space-y-2.5">
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 min-w-0"
                  >
                    <div className={`p-2.5 rounded-md transition-colors flex-shrink-0 ${c.iconBg}`}>
                      <Icon className={`${c.iconColor} text-base`} />
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {c.label}
                      </p>
                      <p className="text-sm font-semibold text-gray-800 truncate">
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

      </div>
    </section>
  )
}

export default ContactSection
