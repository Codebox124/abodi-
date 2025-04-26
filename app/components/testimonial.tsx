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
export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Abordi completely transformed how I use AI in my marketing campaigns. Everything I need is now in one place.",
      author: "Sarah Johnson",
      title: "Marketing Director",
      company: "TechGrowth",
      avatar: "/avatars/sarah.jpg"
    },
    {
      quote: "As a content creator, I was overwhelmed by the number of AI tools. Abordi curates exactly what I need when I need it.",
      author: "Michael Chen",
      title: "Content Strategist",
      company: "CreativeHive",
      avatar: "/avatars/michael.jpg"
    },
    {
      quote: "The smart recommendations have introduced me to AI tools I didn't know existed but now can't live without.",
      author: "Priya Patel",
      title: "HR Manager",
      company: "InnovateHR",
      avatar: "/avatars/priya.jpg"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeIn('up', 0.1)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{once: true, amount: 0.3}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Professionals Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Industry experts who've transformed their AI workflow with Abordi</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={fadeIn('up', 0.2 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{once: true, amount: 0.3}}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 13.8667 4.93333 12.1333 6.13333 10.5333C7.33333 8.93333 9 7.73333 11.1333 6.93333L12.6667 9.06667C11.0667 9.73333 9.86667 10.5333 9.06667 11.4667C8.26667 12.4 7.86667 13.3333 7.86667 14.2667C7.86667 14.5333 7.93333 14.7333 8.06667 14.8667C8.2 15 8.4 15.1333 8.66667 15.2667C9.06667 15.4667 9.4 15.7333 9.66667 16.0667C9.93333 16.4 10.0667 16.8 10.0667 17.2667C10.0667 18 9.8 18.6 9.26667 19.0667C8.73333 19.5333 8.06667 21.3333 9.33333 21.3333ZM20.6667 21.3333C19.2 21.3333 18 20.8 17.0667 19.7333C16.1333 18.6667 15.6667 17.3333 15.6667 15.7333C15.6667 13.8667 16.2667 12.1333 17.4667 10.5333C18.6667 8.93333 20.3333 7.73333 22.4667 6.93333L24 9.06667C22.4 9.73333 21.2 10.5333 20.4 11.4667C19.6 12.4 19.2 13.3333 19.2 14.2667C19.2 14.5333 19.2667 14.7333 19.4 14.8667C19.5333 15 19.7333 15.1333 20 15.2667C20.4 15.4667 20.7333 15.7333 21 16.0667C21.2667 16.4 21.4 16.8 21.4 17.2667C21.4 18 21.1333 18.6 20.6 19.0667C20.0667 19.5333 19.4 21.3333 20.6667 21.3333Z" fill="#6366F1"/>
                  </svg>
                </div>
                <p className="text-gray-800 italic mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image src={testimonial.avatar} width={48} height={48} alt={testimonial.author} className="rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
