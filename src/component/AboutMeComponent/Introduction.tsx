import { Button, Card } from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <Card
    className="shadow-md rounded-xl p-6 max-w-4xl mx-auto "
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
            <p className="mt-2 text-blue-600 font-semibold">
              Full-Stack Developer
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              A recent graduate and passionate full-stack developer. I
              specialize in modern web development using technologies like{" "}
              <strong>TypeScript</strong>, <strong>JavaScript</strong>,{" "}
              <strong>React</strong>, <strong>Next.js</strong>, and{" "}
              <strong>NestJS</strong>. I enjoy learning new things and
              constantly improving my skills to stay up-to-date in the tech
              world.
            </p>
            <Button> My Project</Button>
          </div>
        </div>
        {/* Personal Details */}
        <h4 className="text-md font-medium text-gray-700 mb-2">
          Personal Details
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p className="font-semibold">Age</p>
            <p>23</p>
          </div>
          <div>
            <p className="font-semibold">Live in</p>
            <p>Lat Krabang, Bangkok</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-blue-500">your.email@example.com</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Introduction;
