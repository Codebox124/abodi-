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

export function FeaturesSection() {
  const features = [
    {
      title: "AI Tool Curation",
      description: "Tools organized specifically for your profession, eliminating the search for what works best.",
      icon: "/icons/curation-icon.svg",
    },
    {
      title: "Smart Recommendations",
      description: "Our AI analyzes your needs and suggests the perfect tools for your specific tasks.",
      icon: "/icons/recommendation-icon.svg",
    },
    {
      title: "Unified Workspace",
      description: "Access all your AI tools in one place without switching between tabs or applications.",
      icon: "/icons/workspace-icon.svg",
    },
    {
      title: "Cross-Platform",
      description: "Seamlessly work across mobile, tablet, and desktop with synchronized workflows.",
      icon: "/icons/cross-platform-icon.svg",
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeIn('up', 0.1)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{once: true, amount: 0.3}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Professionals</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Everything you need to harness AI tools efficiently, all in one seamless workspace.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn('up', 0.2 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{once: true, amount: 0.3}}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-indigo-100 p-3 rounded-full mb-4">
                  <Image src={feature.icon} width={40} height={40} alt={feature.title} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
