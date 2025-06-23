'use client'

import { useState, useEffect } from 'react' // Import useEffect

const seniorProjectImages = [
  '/projects/senior/Screenshot 2025-03-18 020450.png',
  '/projects/senior/Screenshot 2025-03-24 235145.png',
  '/projects/senior/Screenshot 2025-06-16.png',
]

const SeniorProject = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const intervalTime = 5000; // Time in milliseconds (e.g., 5000ms = 5 seconds)

  // useEffect to handle auto-looping
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) =>
        prevIndex === seniorProjectImages.length - 1 ? 0 : prevIndex + 1
      )
    }, intervalTime)

    // Cleanup function: Clear the interval when the component unmounts
    return () => clearInterval(interval)
  }, [seniorProjectImages.length, intervalTime]) // Dependencies for useEffect

  const goToPrevious = () => {
    setCarouselIndex((prevIndex) =>
      prevIndex === 0 ? seniorProjectImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCarouselIndex((prevIndex) =>
      prevIndex === seniorProjectImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section id="senior-project" className="py-20 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Final Projects </h2>

        <p className="text-gray-600 mb-10">
          AI Garden System is a my thesis web application  platform to support image and video analysis using various AI models such as Object Detection, Image Classification, Regression, and Instance Segmentation.
        </p>

        <div className="flex items-center justify-center w-full max-w-2xl mx-auto gap-4">
          <button
            onClick={goToPrevious}
            className="bg-gray-200 text-gray-800 p-3 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            aria-label="Previous slide"
          >
            &#10094; {/* Left arrow character */}
          </button>

          <div className="relative w-full">
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
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>

          <button
            onClick={goToNext}
            className="bg-gray-200 text-gray-800 p-3 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            aria-label="Next slide"
          >
            &#10095; {/* Right arrow character */}
          </button>
        </div>
      </div>
    </section>
  )
}

export default SeniorProject