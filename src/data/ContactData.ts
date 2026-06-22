import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import type { IconType } from "react-icons";

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
  iconBg: string;
  iconColor: string;
  external: boolean;
};

export const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "putthipong.chb@gmail.com",
    href: "mailto:putthipong.chb@gmail.com",
    icon: FaEnvelope,
    iconBg: "bg-accent-soft group-hover:bg-accent/15",
    iconColor: "text-accent",
    external: false,
  },
  {
    label: "Phone",
    value: "+66 96 054 2824",
    href: "tel:+66960542824",
    icon: FaPhone,
    iconBg: "bg-accent-soft group-hover:bg-accent/15",
    iconColor: "text-accent",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/aumputthipong",
    href: "https://github.com/aumputthipong",
    icon: FaGithub,
    iconBg: "bg-accent-soft group-hover:bg-accent/15",
    iconColor: "text-accent",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/putthipong-chobngam",
    href: "https://www.linkedin.com/in/putthipong-chobngam/",
    icon: FaLinkedin,
    iconBg: "bg-accent-soft group-hover:bg-accent/15",
    iconColor: "text-accent",
    external: true,
  },
];

export type SocialLink = {
  href: string;
  icon: IconType;
  label: string;
  external?: boolean;
};

export const socialLinks: SocialLink[] = [
  { href: "mailto:putthipong.chb@gmail.com", icon: FaEnvelope, label: "Email" },
  {
    href: "https://github.com/aumputthipong",
    icon: FaGithub,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/putthipong-chobngam/",
    icon: FaLinkedin,
    label: "LinkedIn",
    external: true,
  },
];
