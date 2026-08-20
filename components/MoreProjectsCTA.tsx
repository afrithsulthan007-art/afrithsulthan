"use client"

import React from "react"
import { Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
}

export default function MoreProjectsCTA() {
    return (
        <div className="relative w-full py-24 flex items-center justify-center z-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    className="flex flex-col items-center text-center space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-black tracking-tight text-gray-900"
                        variants={itemVariants}
                    >
                        Want to see more projects of me?
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl"
                        variants={itemVariants}
                    >
                        Explore my full portfolio of open-source contributions, experiments, and full-stack applications on GitHub.
                    </motion.p>

                    <motion.a
                        href="https://github.com/AAFRITHSULTHAN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-gray-900 text-white font-bold text-sm md:text-base rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="relative z-10">See my GitHub</span>
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
}
