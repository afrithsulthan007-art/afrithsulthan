"use client"

import React from "react"
import { Github, Play } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface GenusSpeciesIdentifierSectionProps {
    opacity: number
    transformY: number
}

const PROJECT = {
    title: "GenusSpecies Identifier",
    description: "An automated taxonomy extractor that scans uploaded documents and highlights genus & species names.",
    longDescription: "Reduced manual species extraction time from hours to minutes. Features OCR fallback, inline highlights, and structured export with confidence scores.",
    demoUrl: "https://taxo-trace-3e33.vercel.app/",
    codeUrl: "https://github.com/AAFRITHSULTHAN",
    techStack: ["React", "Node.js", "OCR", "NER", "Postgres", "Vercel"],
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

export default function GenusSpeciesIdentifierSection() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center z-20 bg-white py-24 overflow-hidden">
            {/* Ambient Background Gradient - Different colors for distinction */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-100/30 rounded-full blur-[120px] pointer-events-none" />

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
                                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]"
                                    variants={itemVariants}
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-500">
                                        {PROJECT.title}
                                    </span>
                                </motion.h2>

                                {/* Tech Stack - Styled Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {PROJECT.techStack.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            variants={itemVariants}
                                            className="px-3 py-1 bg-card border border-border rounded-full text-xs font-bold text-muted-foreground shadow-sm hover:border-primary/30 transition-colors cursor-default"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-6">
                                <motion.p
                                    className="text-2xl md:text-3xl font-medium text-foreground leading-tight tracking-tight"
                                    variants={itemVariants}
                                >
                                    {PROJECT.description}
                                </motion.p>
                                <motion.p
                                    className="text-lg text-muted-foreground leading-relaxed max-w-xl"
                                    variants={itemVariants}
                                >
                                    {PROJECT.longDescription}
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Right Content - Hero Image & Actions */}
                        <motion.div
                            className="relative order-1 lg:order-2 lg:-mt-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                            variants={imageVariants}
                        >
                            {/* Main Image Container */}
                            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-border/50 group bg-muted">
                                <Image
                                    src="/images/genus-species.png"
                                    alt="GenusSpecies Identifier Dashboard"
                                    fill
                                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    priority
                                />

                                {/* Cinematic Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Hover Actions Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20 backdrop-blur-[2px]">
                                    <a
                                        href={PROJECT.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
                                    >
                                        <Play className="w-4 h-4 fill-black" />
                                        <span className="text-sm tracking-wider">LIVE DEMO</span>
                                    </a>
                                    <a
                                        href={PROJECT.codeUrl}
                                        className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg border border-white/10"
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
