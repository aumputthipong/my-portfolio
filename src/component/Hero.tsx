"use client";

import { Email, EmailOutlined } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="py-28  bg-slate-100">
      <Container maxWidth="lg">

         <div className="flex flex-col-reverse md:flex-row items-center gap-10">
           <div className="md:w-1/2">
        <Typography
          variant="h2"
          className=" text-indigo-700"
          fontWeight="bold"
          gutterBottom
        >
          Putthipong Chobngam
        </Typography>
        <div className="mb-4">
                  <TypeAnimation
          sequence={[
            ' Full-Stack Developer',
            1000,
            'Frontend-Backend Developer',
            1000,
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
          className="text-4xl font-medium text-indigo-900 mb-6"
          />
 
        {/* <Typography
          variant="h4"
          fontWeight="medium"
          className="text-indigo-900"
          gutterBottom
          >
          Full-Stack Developer ·Frontend-Backend Developer
          </Typography> */}
        </div>

        <Typography variant="body1" color="text.secondary" >
          A recent graduate and new graduated passionate full-stack developer. I
          specialize in web development using technologies like TypeScript,
          JavaScript, React, NestJS, and Next.js. I'm always open to learning
          new things and continuously improving my skills.
        </Typography>

        <div className="text-sm text-gray-500 space-y-1">
          <div className="flex gap-4 text-sm my-4">
            <a
              href={"https://github.com/aumputthipong"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={"putthipong.chb@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <MdEmail /> putthipong.chb@gmail.com
            </a>
          </div>
        </div>

        <div className="flex m gap-4 mb-8 flex-wrap">
          <Button
            variant="contained"
            href="#projects"
            size="large"
            className="!bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300 normal-case"
          >
            View My Work
          </Button>

          <Button
            variant="outlined"
            href="#contact"
            size="large"
            className="!border-2 !border-blue-500 text-blue-600 font-semibold rounded-lg px-6 py-2 hover:shadow-md transition-all duration-300 normal-case"
          >
            Resume Download
          </Button>
          </div>
        </div>
            <div className="md:w-1/2 flex justify-center">
            <ul className="text-sm border-l-2 border-blue-500 pl-4 space-y-2">
  <li>💻 2020 — Started coding in C</li>
  <li>🚀 2022 — Discovered React & JS</li>
  <li>🎓 2024 — Graduated from KMITL</li>
</ul>

<TypeAnimation
  sequence={[
    '// building things with TypeScript',
    1000,
    '// crafting backend with NestJS',
    1000,
    '// styling UI with Tailwind',
    1000,
  ]}
  wrapper="span"
  speed={60}
  repeat={Infinity}
  className="text-sm md:text-md font-mono text-blue-600"
/>
            </div>

</div>
      </Container>
    </section>
  );
};

export default Hero;
