// components/SeniorProject.tsx
'use client'

import { useState } from 'react'

const seniorProjectImages = [
  'projects/senior/Screenshot 2025-03-18 020450.png',
  '/projects/senior/Screenshot 2025-03-24 235145.png',
  '/projects/senior/Screenshot 2025-06-16.png',
]

const SeniorProject = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)

  return (
    <section id="senior-project" className="py-20 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Senior Project</h2>
        <p className="text-gray-600 mb-6">
          AI Garden System is a web application platform to support image and video analysis using various AI models such as Object Detection, Image Classification, Regression, and Instance Segmentation.
        </p>

        <div className="relative w-full max-w-2xl mx-auto">
          <img
            src={seniorProjectImages[carouselIndex]}
            alt={`Senior Project Slide ${carouselIndex + 1}`}
            className="w-full h-full object-cover rounded shadow-md mb-4"
          />
          <div className="flex justify-center gap-4">
            {seniorProjectImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  carouselIndex === i ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeniorProject
