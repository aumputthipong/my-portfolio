import { Button, Card } from "@mui/material";
import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Introduction = () => {
  return (
    <Card
    className="rounded-xl p-6 max-w-4xl mx-auto "
    >
      <div className=" md:flex-row items-start gap-6 ">
        <div className=" gap-8 flex items-center text-center md:text-left md:items-start  ">
          <img
            src="image/my_pic.JPG"
            alt="KMITL Logo"
            className="h-32 object-contain mb-4 rounded-2xl"
          />
          <div className="">
            <div className="flex ">

            <h2 className="text-3xl font-bold text-gray-800">
              Putthipong Chobngam
            </h2>
            <p className="ml-2 text-3xl font-bold  text-gray-500"> (AUM) </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              A recent graduate and passionate full-stack developer. I
              specialize in modern web development using technologies like{" "}
              <strong>TypeScript</strong>, <strong>JavaScript</strong>,{" "}
              <strong>React</strong>, <strong>Next.js</strong>, and{" "}
              <strong>NestJS</strong>. I enjoy learning new things and
              constantly improving my skills to stay up-to-date in the tech
              world.
            </p>


                  <div className="flex flex-wrap gap-3">
                              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20">
                                <MdLocationOn className="text-red-500 text-sm" />
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
        </div>
        {/* Personal Details */}
     
    
      </div>
    </Card>
  );
};

export default Introduction;
