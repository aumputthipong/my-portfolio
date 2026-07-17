"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  // The resolved theme is unknown until hydration; hold the footprint so the
  // navbar doesn't shift when the real button lands.
  if (!mounted) {
    return <div className="w-8 h-8 sm:w-9 sm:h-9" aria-hidden />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="cursor-pointer flex items-center justify-center flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full text-ink/70 hover:text-ink hover:bg-ink/10 transition-all duration-300"
    >
      {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;
