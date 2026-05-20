import React from "react";

type SectionProps = {
  id?: string;
  bg?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  id,
  bg = "",
  className = "",
  innerClassName = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 ${bg} ${className}`}
    >
      <div className={`max-w-6xl mx-auto w-full ${innerClassName}`}>{children}</div>
    </section>
  );
};

export default Section;
