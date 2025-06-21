import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-200 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Putthipong Chobngam</h3>
        <p className="text-sm mb-6">
          Full-Stack Developer | JavaScript · TypeScript · React · Next.js · NestJS
        </p>

        <div className="flex justify-center gap-6 mb-6 text-xl">
          <a
            href="mailto:your.email@example.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Putthipong Chobngam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
