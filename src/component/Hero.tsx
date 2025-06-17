"use client";

import { Button, Container, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <section  id="home" className="py-28  bg-slate-200">
      <Container maxWidth="md">
        <Typography
          variant="h2"
          className="text-4xl sm:text-5xl md:text-6xl  font-extrabold leading-tight mb-6 text-indigo-700"
         fontWeight="bold"
        gutterBottom>
          Putthipong Chobngam
        </Typography>

        <Typography variant="h4" fontWeight="medium" className="text-indigo-900" gutterBottom>
          Full-Stack Developer ·Frontend-Backend Developer
        </Typography>

            <Typography variant="body1" color="text.secondary">
              A recent graduate and new graduated passionate full-stack
              developer. I specialize in web development using technologies like
              TypeScript, JavaScript, React, NestJS, and Next.js. I'm always
              open to learning new things and continuously improving my skills.
            </Typography>
    
        <div className="text-sm text-gray-500 space-y-1">
          <p>
            Email:{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-blue-600 hover:underline"
            >
              youremail@example.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/aumputthipong"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/aumputthipong
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button
            variant="outlined"
            color="primary"
            href="#projects"
            size="large"
            className="hover:shadow-md transition-all duration-300"
          >
            ดูผลงาน
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="#contact"
            size="large"
            className="hover:shadow-lg transition-all duration-300"
          >
            ติดต่อฉัน
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
