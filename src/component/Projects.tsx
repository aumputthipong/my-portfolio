
'use client'

import { projectData } from '@/data/ProjectsData'
import { Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ProjectModal from './Project/ProjectModal'


export default function Projects() {
const [openProject, setOpenProject] = useState<number | null>(null);
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl  text-slate-900 font-bold mb-6">Academic Projects</h2>
        <p className="text-gray-600 mb-10">
          These are some of the web applications I have built.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">


      {openProject !== null && (
          <ProjectModal
            project={projectData[openProject]}
            onClose={() => setOpenProject(null)}
          />  
      )}



          {projectData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hover:shadow-xl transition duration-300"
            >
              <Card className="p-4 h-full flex flex-col justify-between group">
                <div className="relative h-48 overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button
              onClick={() => setOpenProject(index)}
                className="bg-white text-blue-600 px-4 py-2 rounded shadow text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition"
              >
                <FaExternalLinkAlt className="text-sm" />
                View Project
              </button>
                  </div>
                </div>

                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}