import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SOCIAL_LINKS = [
{
  href: "mailto:putthipong.chb@gmail.com",
  icon: <FaEnvelope />,
  label: "Email",
},
{
  href: "https://github.com/aumputthipong",
  icon: <FaGithub />,
  label: "GitHub",
  external: true,
},
{
  href: "https://www.linkedin.com/in/putthipong-chobngam/",
  icon: <FaLinkedin />,
  label: "LinkedIn",
  external: true,
},
];
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-slate-900 text-gray-200 py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Name */}
        <h3 className="text-sm font-semibold tracking-wide">
          Putthipong Chobngam
        </h3>
        {/* Social Icons */}
        <div className="flex items-center gap-2 text-base">
          {SOCIAL_LINKS.map(({ href, icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 rounded-full hover:bg-slate-800"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {year} Putthipong Chobngam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}