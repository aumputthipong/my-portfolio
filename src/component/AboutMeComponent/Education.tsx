import React from 'react'
import { motion } from "framer-motion";
import { FaGraduationCap } from 'react-icons/fa';
import { BiMapPin } from 'react-icons/bi';
import { CalendarMonth } from '@mui/icons-material';


const Education = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="relative  overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-50/60 to-indigo-50/60 rounded-full translate-y-12 -translate-x-12"></div>
        
        {/* Main content */}
        <div className="relative z-10 p-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            
            {/* University Logo Section */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-2xl blur-xl"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                  <img
                    src="/image/KMITL_Logo.png"
                    alt="KMITL Logo"
                    className="h-32 w-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Education Details */}
            <div className="flex-1 space-y-6">
              
              {/* Department Logo and Header */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="bg-white p-2 rounded-xl shadow-md border border-gray-100">
                  <img
                    src="/image/ITKMITL_Logo.png"
                    alt="IT Logo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                <FaGraduationCap className="h-8 w-8 text-blue-600" />
              </motion.div>

              {/* Degree Information */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-3"
              >
                <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                  Bachelor of Science in Information Technology
                </h3>
                <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Software Engineering
                </div>
              </motion.div>

              {/* University Information */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3 text-gray-700">
                  <BiMapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-lg">
                    King Mongkut's Institute of Technology Ladkrabang (KMITL)
                  </span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <CalendarMonth className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  <span className="font-medium">
                    Graduated: May 2025
                  </span>
                </div>
              </motion.div>

              {/* Achievement Badge */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full border border-green-200 shadow-sm"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Recently Graduated</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>
    </motion.div>
  )
}

export default Education