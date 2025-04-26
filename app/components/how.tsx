'use client'

import { motion } from "framer-motion"
import { 
  UserCircle, 
  Lightbulb, 
  AppWindow, 
  TrendingUp 
} from "lucide-react"

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

export function HowItWorksSection() {
    const steps = [
      {
        number: "01",
        title: "Select Your Profession",
        description: "Choose your professional field and let Abordi customize your AI workspace.",
        icon: UserCircle,
      },
      {
        number: "02",
        title: "Get Recommendations",
        description: "Receive personalized AI tool suggestions tailored to your specific needs.",
        icon: Lightbulb,
      },
      {
        number: "03",
        title: "Use Integrated Tools",
        description: "Access and use all your AI tools within one unified interface.",
        icon: AppWindow,
      },
      {
        number: "04",
        title: "Boost Productivity",
        description: "Save time and streamline your workflow with an organized AI ecosystem.",
        icon: TrendingUp,
      }
    ]
  
    return (
      <section className="py-16 md:py-24 bg-gray-50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn('up', 0.1)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{once: true, amount: 0.3}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Abordi Works</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">A simple process to transform your AI workflow in minutes</p>
          </motion.div>
  
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeIn('up', 0.2 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{once: true, amount: 0.3}}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 relative">
                      <div className="rounded-lg overflow-hidden shadow-md bg-white p-6 h-40 w-full flex items-center justify-center">
                        <IconComponent size={80} className="text-indigo-600" />
                      </div>
                      <div className="absolute -top-3 -left-3 bg-indigo-600 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/4 right-0 transform translate-x-1/2">
                      <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#A1A1AA"/>
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    )
  }