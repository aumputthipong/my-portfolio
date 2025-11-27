import { Button, Card } from "@mui/material";
import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Introduction = () => {
  return (
    <div className=" rounded-2xl  p-6 max-w-4xl mx-auto relative  overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500  ">
      <div className=" md:flex-row items-start gap-6 ">
        <div className=" gap-8 flex items-center text-center md:text-left md:items-start">
          <div className="relative group ">
  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">

            <img
              src="image/MyformalPic2.jpg"
              alt="Putthipong Chobngam"
      className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
              
              />
              </div>
        
            <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-lg"></div>
          </div>
          <div className="">
            <div className="flex ">
              <h2 className="text-3xl font-bold text-gray-800">
                Putthipong Chobngam
              </h2>
              <p className="ml-2 text-3xl font-bold  text-gray-500"> (AUM) </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm py-2">
              Passionate and self-motivated web developer with a focus on software engineering and full-stack development. 
              Recently graduated from the Faculty of Information Technology KMITL. Eager to keep learning and improving.
               Seeking an opportunity to contribute and grow in a development team.
            
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex  items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 hover:shadow-md transition-all duration-200 group">
                <MdLocationOn className="text-red-500 text-md group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-700">Bangkok, Thailand</span>
              </div>
              <a
                href="mailto:putthipong.chb@gmail.com"
                className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 hover:bg-white/80 transition-all duration-200 group"
              >
                <MdEmail className="text-blue-500 text-md group-hover:scale-110 transition-transform" />{" "}
                <span className="text-sm text-gray-700">
                  putthipong.chb@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Introduction;
