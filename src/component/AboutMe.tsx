"use client";
import Introduction from "./AboutMeComponent/Introduction";

const AboutMe = () => {
  return (
    <section id="about-me" className="bg-zinc-50 pt-12 pb-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section indicator */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase flex items-center gap-2">
            <span className="w-6 h-px bg-gray-400" /> About
          </p>
          <p className="text-xs font-mono text-gray-400">02 / 04</p>
        </div>

        <Introduction />
      </div>
    </section>
  );
};

export default AboutMe;
