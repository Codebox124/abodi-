'use client'

import { motion } from "framer-motion"
import { 
  BarChart, 
  FileEdit, 
  Users, 
  Palette, 
  Code, 
  LineChart, 
  BookOpen, 
  Scale 
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

export function ProfessionShowcaseSection() {
    const professions = [
        { name: "Marketing", icon: BarChart, color: "bg-blue-100" },
        { name: "Content Creation", icon: FileEdit, color: "bg-purple-100" },
        { name: "HR / Recruiting", icon: Users, color: "bg-red-100" },
        { name: "Design", icon: Palette, color: "bg-green-100" },
        { name: "Development", icon: Code, color: "bg-yellow-100" },
        { name: "Finance", icon: LineChart, color: "bg-indigo-100" },
        { name: "Education", icon: BookOpen, color: "bg-pink-100" },
        { name: "Legal", icon: Scale, color: "bg-orange-100" }
    ]

    return (
        <section className="py-16 md:py-24 bg-gray-50" id="professions">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored for Your Profession</h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">Abordi provides personalized AI workspaces for professionals across industries</p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    {professions.map((profession, index) => {
                        const IconComponent = profession.icon;
                        return (
                            <motion.div
                                key={profession.name}
                                variants={fadeIn('up', 0.2 + index * 0.05)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.1 }}
                                className={`${profession.color} rounded-xl p-4 text-center cursor-pointer hover:shadow-md transition-shadow`}
                            >
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className="bg-white p-3 rounded-full mb-3">
                                        <IconComponent size={32} strokeWidth={2} />
                                    </div>
                                    <h3 className="font-medium">{profession.name}</h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}