// components/Projects.tsx
'use client'


import { Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projectData = [
    {
    title: 'BookingRoom Web Application',
    description:
    'Fullstack app using Next.js frontend and Golang backend for realtime deal countdown.',
    tech: ['Next.js','Typescripts', 'MongoDB', 'DaisyUI'],
    github: 'https://github.com/your-username/next-golang',
    demo: '#',
    image: 'projects/bookingroom.png',
},
{
  title: 'Job Search Application',
  description:
    'Developed a job search mobile application by using React Native and Firebase database',
  tech: ['ReactNative', 'Firebasse', 'Mobile App'],
  github: 'https://github.com/your-username/next-golang',
  demo: '#',
  image: 'projects/jobsearch.png',
},
  {
    title: 'Food Ordering Web Application',
    description:
      'Web app platform to support image/video AI analysis (Object Detection, Segmentation, Classification, Regression) with microservices architecture.',
    tech: ['Vue', 'Express', 'MySQL', 'Docker'],
    github: 'https://github.com/your-username/ai-garden',
    demo: 'https://ai-garden-demo.com',
    image: 'projects/foodshop.png',
  },
   {
    title: 'Convenience Store Management ',
    description:
      'Develope Convenience Store Management Web Application.',
    tech: ['Java', 'SpringBoot', 'MongoDB', "React"],
    github: 'https://github.com/your-username/next-golang',
    demo: '#',
    image: 'projects/con_manage.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Academic Projects</h2>
        <p className="text-gray-600 mb-10">
          These are some of the web applications I have built.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hover:shadow-xl transition duration-300"
            >
              <Card className="p-4 h-full flex flex-col justify-between">
                 <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 rounded font-semibold text-sm shadow hover:bg-gray-100"
                    >
                      ดูตัวอย่าง
                    </a>
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