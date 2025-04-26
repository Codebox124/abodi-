
'use client'

import { Disclosure } from "@headlessui/react"
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
export function FaqSection() {
    const faqs = [
        {
            question: "What makes Abordi different from using AI tools separately?",
            answer: "Abordi centralizes all your AI tools in one workspace, eliminating the need to switch between multiple applications. Our smart recommendation system learns your preferences and suggests the best tools for your specific tasks, saving you research time and decision fatigue."
        },
        {
            question: "How does Abordi know which tools to recommend for my profession?",
            answer: "We analyze the most effective tools used by professionals in your field and supplement this with machine learning that adapts to your specific usage patterns. The more you use Abordi, the more personalized your recommendations become."
        },
        {
            question: "Can I add my own custom AI tools to Abordi?",
            answer: "Yes! Pro and Team plans allow you to integrate custom API keys for supported AI services, letting you connect your existing subscriptions directly to your Abordi workspace."
        },
        {
            question: "Does Abordi work offline?",
            answer: "While most AI tools require internet connectivity to function, Abordi's interface can operate in a limited offline mode, allowing you to access previously generated content and prepare queries for when you're back online."
        },
        {
            question: "How does Abordi handle my data and privacy?",
            answer: "We take privacy seriously. Abordi doesn't store the content you create with AI tools - it remains yours alone. We only collect anonymous usage statistics to improve our recommendations. For full details, please see our Privacy Policy."
        },
        {
            question: "Can I switch between professions in my account?",
            answer: "Absolutely. While you'll select a primary profession when setting up your account, you can easily switch between different professional profiles or create custom workspaces that blend tools from multiple professions."
        }
    ]

    return (
        <section className="py-16 md:py-24 bg-gray-50" id="faq">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Everything you need to know about Abordi and how it can transform your AI workflow.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="mb-6"
                        >
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex justify-between w-full px-5 py-4 text-left text-gray-900 bg-white rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50">
                                            <span className="text-lg font-medium">{faq.question}</span>
                                            <span className={`ml-2 flex-shrink-0 ${open ? 'transform rotate-180' : ''} transition-transform duration-200`}>
                                                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-5 py-4 text-gray-600 bg-white rounded-b-lg border-t border-gray-100">
                                            <p>{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
                    >
                        Contact Support
                        <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

