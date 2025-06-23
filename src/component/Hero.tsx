"use client";

import { Email, EmailOutlined } from "@mui/icons-material";
import { Avatar, Button, Container, Typography } from "@mui/material";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" 
         className="min-h-screen flex items-center relative bg-gradient-to-br from-zinc-50 to-zinc-200"

     >
        <div className="w-full ">
      <Container maxWidth="lg">

         <div className="flex flex-col-reverse md:flex-row items-center gap-10">
           <div className="md:w-1/2">
        <Typography
          variant="h2"
          className=" text-slate-700"
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
          className="text-4xl font-medium text-slate-700 mb-6"
          />
 
        </div>

    

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
              href="mailto:putthipong.chb@gmail.com"
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <MdEmail /> putthipong.chb@gmail.com
            </a>
          </div>
        </div>
    <Typography variant="body1" color="text.secondary" >
      Welcome to my portfolio website.</Typography>
        <div className="flex m gap-4 mb-8 flex-wrap pt-6">
          <Button
            variant="contained"
            onClick={() => document.getElementById("projects")?.scrollIntoView()}
            sx={{ borderRadius: "15px" }}
            size="large"
            className="!bg-gradient-to-r from-[#333333] to-neutral-800 text-white font-semibold   px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300 normal-case"
          >
            <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 5.78571C4 4.80909 4.78639 4 5.77778 4H18.2222C19.2136 4 20 4.80909 20 5.78571V15H4V5.78571ZM12 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1ZM8.27586 6.31035c.38089-.39993 1.01387-.41537 1.4138-.03449l2.62504 2.5c.1981.18875.3103.45047.3103.72414 0 .27368-.1122.5354-.3103.7241l-2.62504 2.5c-.39993.3809-1.03291.3655-1.4138-.0344-.38088-.4-.36544-1.033.03449-1.4138L10.175 9.5 8.31035 7.72414c-.39993-.38089-.41537-1.01386-.03449-1.41379Z" clip-rule="evenodd"/>
  <path d="M2 17v1c0 1.1046.89543 2 2 2h16c1.1046 0 2-.8954 2-2v-1H2Z"/>
</svg>

            View My Work
          </Button>

     
          </div>
        </div>


</div>
      </Container>
     </div>
     </section>
  );
};

export default Hero;
