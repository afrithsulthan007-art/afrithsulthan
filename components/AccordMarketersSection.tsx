"use client"

import React from "react"
import { Github, Play } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AccordMarketersSectionProps {
    opacity: number
    transformY: number
}

const PROJECT = {
    title: "Accord Marketers",
    description: "I recently collaborated with Accord Marketers to build a high-impact landing page designed for conversion and clarity.",
    longDescription: (
        <>
            <p className="mb-2 text-xl font-light text-gray-600">Highlights:</p>
            <ul className="space-y-2 mb-4">
                {[
                    "Clean and modern UI",
                    "Bold typography for strong brand recall",
                    "Smooth animations",
                    "Responsive + SEO-friendly structure"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs">✨</span>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    ),
    demoUrl: "#", // User didn't provide a URL, using placeholder
    codeUrl: "https://github.com/AAFRITHSULTHAN",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
}

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

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const
        }
    }
}

export default function AccordMarketersSection() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center z-20 bg-gray-50 py-24 overflow-hidden">
            {/* Ambient Background Gradient - Light theme */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full pointer-events-auto relative z-10 flex flex-col">

                <div className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Left Content - Text & Details */}
                        <motion.div
                            className="flex flex-col justify-center space-y-10 order-2 lg:order-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                            variants={containerVariants}
                        >

                            {/* Header */}
                            <div className="space-y-6">
                                <motion.h2
                                    className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
                                    variants={itemVariants}
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
                                        {PROJECT.title}
                                    </span>
                                </motion.h2>

                                {/* Tech Stack - Styled Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {PROJECT.techStack.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            variants={itemVariants}
                                            className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 shadow-sm hover:border-purple-300 hover:text-purple-600 transition-all cursor-default"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4">
                                <motion.p
                                    className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight tracking-tight"
                                    variants={itemVariants}
                                >
                                    {PROJECT.description}
                                </motion.p>
                                <motion.div
                                    className="text-lg text-gray-600 leading-relaxed max-w-xl"
                                    variants={itemVariants}
                                >
                                    {PROJECT.longDescription}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Content - Hero Image & Actions */}
                        <motion.div
                            className="relative order-1 lg:order-2 lg:-mt-12 flex flex-col gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                            variants={imageVariants}
                        >
                            {/* Main Image Container */}
                            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group bg-white hover:shadow-purple-200/50 transition-shadow duration-500">
                                <Image
                                    src="/images/accord-marketers.png"
                                    alt="Accord Marketers Dashboard"
                                    fill
                                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    priority
                                />

                                {/* Cinematic Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Hover Actions Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/30 backdrop-blur-[2px]">
                                    <a
                                        href={PROJECT.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                                    >
                                        <Play className="w-4 h-4 fill-black" />
                                        <span className="text-sm tracking-wider">LIVE DEMO</span>
                                    </a>
                                    <a
                                        href={PROJECT.codeUrl}
                                        className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg border border-white/10 hover:shadow-xl"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span className="text-sm tracking-wider">VIEW REPO</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}
