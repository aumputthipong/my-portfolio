import React from 'react'
import { motion } from "framer-motion";
import { FaGraduationCap } from 'react-icons/fa';
import { BiMapPin } from 'react-icons/bi';
import { Assessment, CalendarMonth } from '@mui/icons-material';


const Education = () => {
  return (
  <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  whileHover={{ y: -5 }}
  className="w-full max-w-4xl mx-auto "
>
  <div className="relative overflow-hidden bg-white border-2 border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg p-8">
    
    <div className="flex flex-col lg:flex-row items-start gap-8">
      
      {/* University Logo */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex-shrink-0"
      >
        <div className="bg- p-4 rounded-2xl border border-gray-200 shadow-sm">
          <img
            src="/image/KMITL_Logo.png"
            alt="KMITL Logo"
            className="h-32 w-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Education Details */}
      <div className="flex-1 space-y-5">
        
        {/* IT Logo + Icons row */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
            <img
              src="/image/ITKMITL_Logo.png"
              alt="IT Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="h-10 w-px bg-gray-300 rounded-full"></div>
          <div className="bg-white p-2 rounded-xl  border-gray-200 ">
            <FaGraduationCap className="h-8 w-8 text-gray-700" />
          </div>
        </motion.div>

        {/* Degree */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-2"
        >
          <h3 className="text-xl font-bold text-gray-800 leading-tight">
            Bachelor of Science in Information Technology
          </h3>
          <span className="inline-block bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
            Software Engineering
          </span>
        </motion.div>

        {/* University info */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2 text-gray-700">
            <BiMapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
            <span className="font-semibold text-base">
              King Mongkut's Institute of Technology Ladkrabang (KMITL)
            </span>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-indigo-600">
              <CalendarMonth className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm font-medium">Graduated: 2025</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-600">
              <Assessment className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm font-medium">GPAX: 3.11</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </div>
</motion.div>
  )
}

export default Education