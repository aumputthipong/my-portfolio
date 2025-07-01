'use client'

import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 border-t">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-6">
          Contact</h2>
        <p className="text-gray-600 mb-10">
          I'm always open to discussing new opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-700 text-sm">
          <a
            href="mailto:your.putthipong.chb@gmail.com"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FaEnvelope /> putthipong.chb@gmail.com
          </a>

          <a
            href="tel:+66876543210"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FaPhone /> +66 96 054 2824
          </a>

          <a
            href="https://github.com/aumputthipong"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FaGithub /> github.com/aumputthipong
          </a>

          <a
            href="https://www.linkedin.com/in/putthipong-chobngam-2131412a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FaLinkedin /> www.linkedin.com/in/putthipong-chobngam-2131412a6/
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
