"use client";

import { Email, EmailOutlined } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <section id="home" className="py-28  bg-slate-200">
      <Container maxWidth="md">
        <Typography
          variant="h2"
          className="text-4xl sm:text-5xl md:text-6xl  font-extrabold leading-tight mb-6 text-indigo-700"
          fontWeight="bold"
          gutterBottom
        >
          Putthipong Chobngam
        </Typography>

        <Typography
          variant="h4"
          fontWeight="medium"
          className="text-indigo-900"
          gutterBottom
        >
          Full-Stack Developer ·Frontend-Backend Developer
        </Typography>

        <Typography variant="body1" color="text.secondary">
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
      </Container>
    </section>
  );
};

export default Hero;
