"use client";
import Introduction from "./AboutMeComponent/Introduction";
import Section from "./UI/Section";
import SectionHeader from "./UI/SectionHeader";

const AboutMe = () => {
  return (
    <Section id="about-me" bg="bg-zinc-50" className="py-10 sm:py-12 lg:py-14">
      <SectionHeader label="About" />
      <Introduction />
    </Section>
  );
};

export default AboutMe;
