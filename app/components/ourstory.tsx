'use client'

import { motion } from "framer-motion"
import Image from "next/image"

// Shared animation variants for all sections
const fadeIn = (direction: string, delay: number) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1,
                delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    }
}
export function OurStorySection() {
    return (
      <section className="py-16 md:py-24 bg-gray-50" id="our-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{once: true, amount: 0.3}}
            >
              <div className="relative">
                <div className="bg-indigo-600 rounded-lg w-full h-full absolute top-6 left-6 -z-10"></div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <Image src="/team.jpg" width={500} height={300} alt="Abordi Team" className="rounded-lg w-full mb-8" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    We're committed to bringing clarity to the AI landscape by providing professionals with exactly the tools they need—no more, no less. 
                    Our mission is to make AI accessible, organized, and purposeful for everyone.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{once: true, amount: 0.3}}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-xl font-medium text-indigo-600">We built Abordi to bring order to the AI chaos.</p>
                <p className="text-gray-700">With hundreds of tools launching every month, professionals are overwhelmed.</p>
                <p className="text-lg font-medium">Too many choices. No clear path.</p>
                <p className="text-gray-700">
                  Abordi solves that by offering a unified AI workspace—curated by profession, 
                  powered by smart recommendations, and packed with the best tools in one seamless space.
                </p>
                <p className="text-xl font-semibold">No tabs. No noise. Just results.</p>
              </div>
              
              <button className="mt-8 inline-flex items-center bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                Learn more about our team
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }