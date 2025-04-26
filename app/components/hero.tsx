'use client'

import { useContext } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { SearchContext } from "../context/search"

export default function Hero() {
  const searchActive = useContext(SearchContext)

  // Animation variants
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
          duration: 1.2,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    }
  }

  return (
    <section className="relative min-h-screen py-12 lg:py-0 lg:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full pt-10 sm:pt-28 md:pt-32 lg:pt-0">
          {/* Text Content */}
          <div className="text-center lg:text-left z-10 order-2 lg:order-1">
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            >
              One Workspace. <span className="text-[#402cff]">Every Tool </span>You Need.
            </motion.h1>

            <motion.p
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="text-base sm:text-lg text-gray-700 max-w-[550px] mx-auto lg:mx-0 mb-6 lg:mb-10"
            >
              Abordi is your all-in-one AI command center
              curated by profession, powered by intelligence,
              and built to simplify your workflow.
              No tabs. No noise. Just results.
            </motion.p>

            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="flex gap-x-4 justify-center lg:justify-start"
            >
              <button className="transition-transform bg-primary py-2 px-6 hover:scale-105 focus:outline-none">
                <Image
                  alt="Download on App Store"
                  width={132}
                  height={36}
                  src="/icons/buttons/app-store.svg"
                  className="h-auto w-32 sm:w-36"
                />
              </button>
              <button className="transition-transform bg-primary py-2 px-6 hover:scale-105 focus:outline-none">
                <Image
                  alt="Get it on Google Play"
                  width={132}
                  height={36}
                  src="/icons/buttons/google-play.svg"
                  className="h-auto w-32 sm:w-36"
                />
              </button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-full order-1 lg:order-2 mt-12 md:mt-16 lg:mt-0"
          >
            <Image
              src="/hero.png"
              fill
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 40vw"
              style={{ objectFit: "contain" }}
              alt="hero"
              className="drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>

    </section>
  )
}