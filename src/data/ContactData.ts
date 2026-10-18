import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import type { IconType } from "react-icons";

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
  external: boolean;
};

export const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "putthipong.chb@gmail.com",
    href: "mailto:putthipong.chb@gmail.com",
    icon: FaEnvelope,
    external: false,
  },
  {
    label: "Phone",
    value: "+66 96 054 2824",
    href: "tel:+66960542824",
    icon: FaPhone,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/aumputthipong",
    href: "https://github.com/aumputthipong",
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/putthipong-chobngam",
    href: "https://www.linkedin.com/in/putthipong-chobngam/",
    icon: FaLinkedin,
    external: true,
  },
];

/** The resume PDF in public/resume, linked from the Hero and the Contact section */
export const RESUME_HREF = "/resume/Resume_Putthipong-Chobngam_Software_developer.pdf";
