"use client"

import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, ArrowUpRight, Sparkles, CheckCircle2, Globe } from "lucide-react"
import Image from "next/image"

interface Project {
    id: string
    title: string
    category: string
    oneLiner: string
    techStack: string[]
    liveUrl: string
    image: string
    badgeBg: string
    accentColor: string
    metrics: string[]
    align: "left" | "right"
}

const PROJECTS: Project[] = [
    {
        id: "house-of-mofa",
        title: "House of MOFA",
        category: "Luxury Fashion eCommerce",
        oneLiner: "Luxury apparel & designer fashion eCommerce storefront engineered with high-speed server-side rendering, fluid interactive transitions, and seamless checkout.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "eCommerce", "SSR"],
        liveUrl: "https://www.houseofmofa.in/",
        image: "/images/house-of-mofa.png",
        badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
        accentColor: "from-amber-500 to-amber-700",
        metrics: ["Sub-second page loads", "High-conversion checkout", "Responsive catalog"],
        align: "left",
    },
    {
        id: "accord-marketers",
        title: "Accord Marketers",
        category: "Growth Agency Platform",
        oneLiner: "High-impact digital marketing agency portal designed for rapid client acquisition, interactive case study showcases, and Core Web Vitals optimization.",
        techStack: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "SEO", "Vercel"],
        liveUrl: "https://accordmarketers.vercel.app/",
        image: "/images/accord-marketers.png",
        badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
        accentColor: "from-emerald-500 to-teal-700",
        metrics: ["Core Web Vitals 95+", "Lead conversion funnels", "Interactive motion"],
        align: "right",
    },
    {
        id: "janis-womens-collection",
        title: "Janis Women's Collection",
        category: "Direct-to-Consumer eCommerce",
        oneLiner: "Direct-to-consumer maternity and women's apparel shopping portal featuring dynamic category filters, direct WhatsApp order routing, and mobile-first UX.",
        techStack: ["Next.js", "React", "WhatsApp API", "eCommerce", "Mobile-First", "Tailwind CSS"],
        liveUrl: "https://janiswomenscollection.com/",
        image: "/images/janis-womens-collection.png",
        badgeBg: "bg-rose-50 text-rose-800 border-rose-200",
        accentColor: "from-rose-500 to-pink-700",
        metrics: ["Direct WhatsApp checkout", "Dynamic category filter", "100% mobile optimized"],
        align: "left",
    },
]

export default function ProjectPage() {
    return (
        <section id="projects" className="relative w-full py-24 md:py-32 bg-[#F8FAFD] overflow-hidden text-slate-900 font-sans">
            {/* Ambient Background Aura */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-[140px] pointer-events-none" />

            <div className="w-[92%] md:w-[88%] max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-slate-200/80 bg-white/90 shadow-xs backdrop-blur-md"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#B11226]" />
                        <span className="text-[11px] sm:text-xs font-semibold text-slate-700 tracking-[0.18em] uppercase">
                            Selected Work & Case Studies
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] mb-6 leading-[1.12] text-[#080E1E] max-w-4xl mx-auto"
                    >
                        Real Products. Real Problems. <br className="hidden sm:block" />
                        <span
                            className="inline-block bg-clip-text text-transparent pb-1"
                            style={{
                                backgroundImage: "linear-gradient(135deg, #0B1120 0%, #1E293B 28%, #8B141E 62%, #C9182B 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Real Impact.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal"
                    >
                        A curated selection of live production applications, custom eCommerce systems, and agency growth platforms built for real-world business outcomes.
                    </motion.p>
                </div>

                {/* Projects Grid / Cards */}
                <div className="space-y-16 sm:space-y-24">
                    {PROJECTS.map((project, index) => {
                        const isEven = index % 2 === 1

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => window.open(project.liveUrl, "_blank")}
                                className="group relative bg-white rounded-[28px] sm:rounded-[36px] border border-slate-100/90 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] overflow-hidden p-6 sm:p-10 lg:p-12 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 cursor-pointer"
                            >
                                {/* Base Content Layer */}
                                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                                    
                                    {/* Left: Info & Description */}
                                    <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${project.badgeBg}`}>
                                                {project.category}
                                            </span>
                                            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                                                <Globe className="w-3.5 h-3.5 text-emerald-500" />
                                                Live Production
                                            </span>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132A] tracking-tight mb-4 group-hover:text-[#B11226] transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed mb-6">
                                            {project.oneLiner}
                                        </p>

                                        {/* Metrics Checklist */}
                                        <div className="space-y-2.5 mb-8">
                                            {project.metrics.map((metric, mIdx) => (
                                                <div key={mIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                                                    <CheckCircle2 className="w-4 h-4 text-[#B11226] shrink-0" strokeWidth={2.2} />
                                                    <span>{metric}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.techStack.map((tech, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="px-3 py-1 bg-[#F8FAFC] border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA Link */}
                                        <div>
                                            <span className="inline-flex items-center gap-2 bg-[#0B132A] group-hover:bg-[#B11226] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all duration-300">
                                                <span>Visit Live Storefront</span>
                                                <ArrowUpRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Interactive Browser Mockup */}
                                    <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                                        <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-100/60 p-2 sm:p-3 shadow-lg transition-transform duration-500 overflow-hidden">
                                            {/* Browser Top Window Bar */}
                                            <div className="flex items-center justify-between px-3 py-2 bg-white rounded-t-xl sm:rounded-t-2xl border-b border-slate-100">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                                </div>
                                                <div className="text-[11px] text-slate-400 font-mono font-medium truncate max-w-[200px]">
                                                    {project.liveUrl.replace("https://", "").replace("/", "")}
                                                </div>
                                                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                                            </div>

                                            {/* Screenshot Container */}
                                            <div className="relative aspect-[16/10] w-full rounded-b-xl sm:rounded-b-2xl overflow-hidden bg-slate-950">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover object-top"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Full-Container Hover Expansion Overlay */}
                                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto overflow-hidden rounded-[28px] sm:rounded-[36px]">
                                    {/* Expanded Full-Bleed Image */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                                        sizes="100vw"
                                    />

                                    {/* Dark Frosted Vignette Backdrop */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/40 backdrop-blur-[2px] transition-all duration-500" />

                                    {/* Centered 'Click to use this website' Action Hub */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                                        <div className="flex flex-col items-center gap-3.5 max-w-xl">
                                            <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold shadow-lg border ${project.badgeBg}`}>
                                                {project.category}
                                            </span>

                                            <h4 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md">
                                                {project.title}
                                            </h4>

                                            <p className="text-xs sm:text-base text-slate-200 font-medium max-w-md line-clamp-2 drop-shadow-sm">
                                                {project.oneLiner}
                                            </p>

                                            {/* Primary Glowing Action Button */}
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="mt-3 inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#0B132A] px-7 py-3.5 rounded-full font-black text-xs sm:text-sm md:text-base shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 group/btn cursor-pointer"
                                            >
                                                <span className="relative flex h-2.5 w-2.5">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                                </span>
                                                <span>Click to use this website</span>
                                                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            </a>

                                            <span className="text-[11px] text-slate-300 font-mono tracking-wider opacity-80">
                                                {project.liveUrl.replace("https://", "").replace("/", "")}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
