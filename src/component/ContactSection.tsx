'use client'

import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 border-t">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Contact</h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href="mailto:putthipong.chb@gmail.com"
            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 group"
          >
            <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              <FaEnvelope className="text-blue-600 text-lg" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">Email</p>
              <p className="text-gray-600 text-sm">putthipong.chb@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+66960542824"
            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 group"
          >
            <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
              <FaPhone className="text-green-600 text-lg" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">Phone</p>
              <p className="text-gray-600 text-sm">+66 96 054 2824</p>
            </div>
          </a>

          <a
            href="https://github.com/aumputthipong"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 group"
          >
            <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
              <FaGithub className="text-gray-700 text-lg" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">GitHub</p>
              <p className="text-gray-600 text-sm">github.com/aumputthipong</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/putthipong-chobngam-2131412a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 group"
          >
            <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              <FaLinkedin className="text-blue-700 text-lg" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">LinkedIn</p>
              <p className="text-gray-600 text-sm">linkedin.com/in/putthipong-chobngam</p>
            </div>
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection