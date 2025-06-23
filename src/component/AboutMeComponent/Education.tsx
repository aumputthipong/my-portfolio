import React from 'react'
import { motion } from "framer-motion";
import { Card } from '@mui/material';

const Education = () => {
  return (
               
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className=" transition duration-300  "
                >
                <Card className="  flex border border-gray-200 rounded-lg  p-6 text-left gap-6">
    
                  <img
                    src="/image/KMITL_Logo.png"
                    alt="KMITL Logo"
                    className="h-32 w-auto"
                  />
              

                  <div className=" relative pl-4 border-l-2 border-blue-500 ml-2">
                          <img
                    src="/image/ITKMITL_Logo.png"
                    alt="IT Logo"
                    className="h-16 w-auto"
                  />
                    <div className="mb-6 relative">
                      <p className="text-gray-700 font-semibold">
                        B.Sc. in Information Technology (Software Engineering)
                      </p>
                      <p className="text-sm text-gray-600">
                        King Mongkut's Institute of Technology Ladkrabang
                        (KMITL)
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Graduated: May 2025
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
           
  )
}

export default Education
