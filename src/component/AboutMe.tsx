"use client";
import Skills from "./AboutMeComponent/Skills";
import Introduction from "./AboutMeComponent/Introduction";
import Divider from "./UI/Divider";

const AboutMe = () => {
  return (
    <section id="about-me" className="bg-zinc-50 pt-12 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 relative">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800 mb-3 uppercase">
            About Me
          </h2>
          <Divider />
        </div>

        <div className="space-y-5">
          <Introduction />
          <div id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
