import { Button, Card } from "@mui/material";
import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Introduction = () => {
  return (
<div 
className="w-full max-w-4xl mx-auto shadow-xl rounded-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-300 overflow-hidden">
  
  {/* Layout: stack บนมือถือ, row บน desktop */}
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
    
    {/* Avatar */}
    <div className="relative group flex-shrink-0">
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src="image/MyformalPic2.jpg"
          alt="Putthipong Chobngam"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-white shadow-lg" />
    </div>

    {/* Info */}
    <div className="flex-1 text-center sm:text-left">
      
      {/* Name */}
      <div className="flex flex-wrap justify-center sm:justify-start items-baseline gap-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Putthipong Chobngam
        </h2>
        <p className="text-xl sm:text-2xl font-bold text-gray-500">(AUM)</p>
      </div>

      {/* Bio */}
      <p className="text-gray-600 leading-relaxed text-sm py-2">
        Passionate and self-motivated web developer with a focus on software
        engineering and full-stack development. Recently graduated from the
        Faculty of Information Technology KMITL. Eager to keep learning and
        improving. Seeking an opportunity to contribute and grow in a
        development team.
      </p>

      {/* Badges */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-2">
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 hover:shadow-md transition-all duration-200 group">
          <MdLocationOn className="text-red-500 text-md group-hover:scale-110 transition-transform" />
          <span className="text-sm text-gray-700">Bangkok, Thailand</span>
        </div>
        <a
          href="mailto:putthipong.chb@gmail.com"
          className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 hover:bg-white/80 transition-all duration-200 group"
        >
          <MdEmail className="text-blue-500 text-md group-hover:scale-110 transition-transform" />
          <span className="text-sm text-gray-700 break-all sm:break-normal">
            putthipong.chb@gmail.com
          </span>
        </a>
      </div>
    </div>

  </div>
</div>
  );
};

export default Introduction;
