"use client";

import { CodeSharp, Description, Laptop, Storage } from "@mui/icons-material";
import { Avatar, Button, Container, Typography } from "@mui/material";
import React from "react";
import {
  FaDownload,

  FaEnvelope,

  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-10"
    >
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%23e2e8f0%20fill-opacity=%220.2%22%3E%3Ccircle%20cx=%2220%22%20cy=%2220%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div> */}

      <div className="w-full relative z-10">
        <Container maxWidth="lg">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-3/5 space-y-6">
              {/* Main Title with Enhanced Typography */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">
                    Available for work
                  </span>
                </div>

                <div className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight  ">
                  Hello, I'm{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Putthipong
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30"></div>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <HiCode className="text-blue-500 text-xl flex-shrink-0" />
                  <TypeAnimation
                    sequence={[
                      "Full-Stack Developer",
                      2000,
                      "Frontend-Backend Developer",
                      2000,
                      "Software Engineer",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-2xl lg:text-3xl font-semibold text-slate-700"
                  />
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-4">
                <div className="text-lg text-gray-600 leading-relaxed">
                  Welcome to my portfolio website. I'm a passionate,
                  <br />self-motivated developer — always learning, always growing.
                </div>

                {/* Contact Info Cards */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 hover:shadow-md transition-all duration-200 group">
                    <MdLocationOn className="text-red-500 text-sm   group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-700">
                      Bangkok, Thailand
                    </span>
                  </div>
                  <a
                    href="mailto:putthipong.chb@gmail.com"
                    className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 hover:bg-white/80 transition-all duration-200 group"
                  >
                    <MdEmail className="text-blue-500 text-sm group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-700">
                      putthipong.chb@gmail.com
                    </span>
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  variant="contained"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="!bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black !text-white !font-semibold !px-8 !py-3 !rounded-full !shadow-lg hover:!shadow-xl !transition-all !duration-300 !normal-case"
                  startIcon={
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5.78571C4 4.80909 4.78639 4 5.77778 4H18.2222C19.2136 4 20 4.80909 20 5.78571V15H4V5.78571ZM12 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1ZM8.27586 6.31035c.38089-.39993 1.01387-.41537 1.4138-.03449l2.62504 2.5c.1981.18875.3103.45047.3103.72414 0 .27368-.1122.5354-.3103.7241l-2.62504 2.5c-.39993.3809-1.03291.3655-1.4138-.0344-.38088-.4-.36544-1.033.03449-1.4138L10.175 9.5 8.31035 7.72414c-.39993-.38089-.41537-1.01386-.03449-1.41379Z"
                        clipRule="evenodd"
                      />
                      <path d="M2 17v1c0 1.1046.89543 2 2 2h16c1.1046 0 2-.8954 2-2v-1H2Z" />
                    </svg>
                  }
                >
                  View My Work
                </Button>

                <Button
                 onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  variant="outlined"
                  className="!border-2 !border-gray-300 hover:!border-gray-400 !text-gray-700 hover:!bg-gray-50 !font-semibold !px-8 !py-3 !rounded-full !transition-all !duration-300 !normal-case"
                  startIcon={       <FaEnvelope />}
                >
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Section */}
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                {/* Subtle Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

                {/* Profile Image Container */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 p-1 rounded-full shadow-xl">
                    <div className="bg-white p-2 rounded-full">
                      <Avatar
                        sx={{
                          width: { xs: 200, lg: 240 },
                          height: { xs: 200, lg: 240 },
                          fontSize: "3rem",
                          fontWeight: "bold",
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          color: "white",
                        }}
                        className="shadow-lg"
                      >
                        <img src="image/my_pic.JPG" />
                      </Avatar>
                    </div>
                  </div>
                  {/* Social Links - Enhanced */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href="https://github.com/aumputthipong"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group border border-white/30"
                    >
                      <FaGithub className="text-gray-700 text-lg group-hover:text-black transition-colors" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/putthipong-chobngam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group border border-white/30"
                    >
                      <FaLinkedin className="text-blue-600 text-lg group-hover:text-blue-700 transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-4 -left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md animate-bounce border border-white/40">
                  <span className="text-xs font-semibold text-gray-700">
                    <CodeSharp className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md animate-bounce delay-500 border border-white/40">
                  <span className="text-xs font-semibold text-gray-700">
                    <Laptop className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute top-1/2 -right-8 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md animate-bounce delay-1000 border border-white/40">
                  <span className="text-xs font-semibold text-gray-700">
                    <Description className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center opacity-60">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
