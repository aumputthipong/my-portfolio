'use client'

import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Section indicator */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase flex items-center gap-2">
            <span className="w-6 h-px bg-gray-400" /> Contact
          </p>
          <p className="text-xs font-mono text-gray-400">04 / 04</p>
        </div>

        <p className="text-gray-500 mb-6 text-sm">
          I'm always open to new opportunities, ideas, or simply to get in touch.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          <a
            href="mailto:putthipong.chb@gmail.com"
            className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 transition-all duration-200 hover:bg-gray-50 group min-w-0"
          >
            <div className="p-2 bg-blue-50 rounded-md group-hover:bg-blue-100 transition-colors flex-shrink-0">
              <FaEnvelope className="text-blue-600 text-base" />
            </div>
            <div className="text-left min-w-0 flex-1">
              <p className="font-semibold text-gray-800 text-sm">Email</p>
              <p className="text-gray-500 text-xs truncate">putthipong.chb@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+66960542824"
            className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 transition-all duration-200 hover:bg-gray-50 group min-w-0"
          >
            <div className="p-2 bg-green-50 rounded-md group-hover:bg-green-100 transition-colors flex-shrink-0">
              <FaPhone className="text-green-600 text-base" />
            </div>
            <div className="text-left min-w-0 flex-1">
              <p className="font-semibold text-gray-800 text-sm">Phone</p>
              <p className="text-gray-500 text-xs truncate">+66 96 054 2824</p>
            </div>
          </a>

          <a
            href="https://github.com/aumputthipong"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 transition-all duration-200 hover:bg-gray-50 group min-w-0"
          >
            <div className="p-2 bg-gray-50 rounded-md group-hover:bg-gray-100 transition-colors flex-shrink-0">
              <FaGithub className="text-gray-700 text-base" />
            </div>
            <div className="text-left min-w-0 flex-1">
              <p className="font-semibold text-gray-800 text-sm">GitHub</p>
              <p className="text-gray-500 text-xs truncate">aumputthipong</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/putthipong-chobngam/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 transition-all duration-200 hover:bg-gray-50 group min-w-0"
          >
            <div className="p-2 bg-blue-50 rounded-md group-hover:bg-blue-100 transition-colors flex-shrink-0">
              <FaLinkedin className="text-blue-700 text-base" />
            </div>
            <div className="text-left min-w-0 flex-1">
              <p className="font-semibold text-gray-800 text-sm">LinkedIn</p>
              <p className="text-gray-500 text-xs truncate">putthipong-chobngam</p>
            </div>
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection