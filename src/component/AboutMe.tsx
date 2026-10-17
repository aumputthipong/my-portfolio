"use client";
import Introduction from "./AboutMeComponent/Introduction";
import Section from "./UI/Section";
import SectionHeader from "./UI/SectionHeader";

const AboutMe = () => {
  return (
    <Section id="about-me" bg="bg-surface" className="py-10 sm:py-12 lg:py-14">
      <SectionHeader label="About" as="h2" />
      <Introduction />
    </Section>
  );
};

export default AboutMe;
