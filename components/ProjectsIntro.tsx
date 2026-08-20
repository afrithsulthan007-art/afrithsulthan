"use client"

import React from "react"
import { motion } from "framer-motion"

interface ProjectsIntroProps {
    opacity: number
    transformY: number
}

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
}

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut" as const
        }
    }
}

export default function ProjectsIntro() {
    return (
        <div className="relative w-full min-h-[50vh] flex items-center justify-center z-20 bg-white py-24">
            <motion.div
                className="text-center px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
            >
                <motion.h2
                    className="text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase mb-6"
                    variants={headerVariants}
                >
                    PROJECTS
                </motion.h2>
                <motion.p
                    className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
                    variants={textVariants}
                >
                    A collection of projects that reflect strong product thinking, refined UI, and scalable engineering.
                </motion.p>
            </motion.div>
        </div>
    )
}
