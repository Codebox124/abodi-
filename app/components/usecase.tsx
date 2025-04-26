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
export function UseCasesSection() {
    const useCases = [
      {
        title: "Content Creation Workflow",
        description: "See how a content marketer uses Abordi to brainstorm, draft, edit, and optimize content all in one workspace.",
        image: "/images/use-cases/content-creation.png",
        profession: "Content Creator"
      },
      {
        title: "Recruiting Automation",
        description: "Discover how HR professionals streamline candidate communications and screening using Abordi's AI tools.",
        image: "/images/use-cases/recruiting.png",
        profession: "HR / Recruiting"
      },
      {
        title: "Design Collaboration",
        description: "Learn how design teams use Abordi to generate mockups, get feedback, and iterate designs efficiently.",
        image: "/images/use-cases/design.png",
        profession: "Designer"
      }
    ]
  
    return (
      <section className="py-16 md:py-24 bg-white" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn('up', 0.1)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{once: true, amount: 0.3}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">How professionals are using Abordi to transform their workflows</p>
          </motion.div>
  
          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.3}}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image src={useCase.image} width={600} height={400} alt={useCase.title} className="w-full" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">{useCase.profession}</span>
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-gray-700 mb-6">{useCase.description}</p>
                  <button className="text-indigo-600 font-medium flex items-center">
                    Read full case study
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }