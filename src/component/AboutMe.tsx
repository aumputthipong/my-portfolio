"use client";
import Introduction from "./AboutMeComponent/Introduction";
import Section from "./UI/Section";
import SectionHeader from "./UI/SectionHeader";

const AboutMe = () => {
  return (
    <Section id="about-me" bg="bg-surface" className="py-16 sm:py-20">
      <SectionHeader label="About" />
      <Introduction />
    </Section>
  );
};

export default AboutMe;
