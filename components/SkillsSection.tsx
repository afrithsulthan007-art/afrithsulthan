"use client"

import React, { useState } from "react"
import {
    Layout, Server, Database, Zap, Gauge, GitBranch, Wrench,
    Atom, Smartphone, Layers, Activity, Lock, Globe, MonitorUp,
    FileJson, Triangle, Radio, RefreshCw, Search, TrendingUp,
    Box, Settings, PenTool, Send
} from "lucide-react"
import { motion, AnimatePresence, Variants } from "framer-motion"

const SKILLS = [
    {
        category: "Frontend Engineering",
        subtitle: "Building fast, accessible, and scalable user interfaces.",
        icon: Layout,
        theme: "red",
        accent: "#B11226",
        items: [
            { name: "React", description: <><strong className="font-semibold text-slate-900">Reusable</strong> component-based UI</>, icon: Atom },
            { name: "Next.js", description: <><strong className="font-semibold text-slate-900">SEO-friendly</strong>, production-ready apps</>, icon: Layers },
            { name: "Tailwind CSS", description: <><strong className="font-semibold text-slate-900">Consistent</strong>, scalable design systems</>, icon: PenTool },
            { name: "Responsive UI", description: <><strong className="font-semibold text-slate-900">Mobile-first</strong>, cross-device layouts</>, icon: Smartphone },
            { name: "UI Performance", description: <>Optimized interactions & <strong className="font-semibold text-slate-900">Core Web Vitals</strong></>, icon: Zap }
        ]
    },
    {
        category: "Backend & APIs",
        subtitle: "Robust server-side architectures and secure APIs.",
        icon: Server,
        theme: "red",
        accent: "#B11226",
        items: [
            { name: "Node.js", description: <><strong className="font-semibold text-slate-900">Scalable</strong> network applications</>, icon: Server },
            { name: "Express.js", description: <><strong className="font-semibold text-slate-900">Minimalist</strong> web framework</>, icon: Activity },
            { name: "REST API", description: <><strong className="font-semibold text-slate-900">Standardized</strong> communication interfaces</>, icon: Globe },
            { name: "Authentication", description: <><strong className="font-semibold text-slate-900">Secure</strong> access control systems</>, icon: Lock },
            { name: "SSR (Next.js)", description: <>Improved <strong className="font-semibold text-slate-900">performance</strong> and SEO</>, icon: MonitorUp }
        ]
    },
    {
        category: "Databases & Data Layer",
        subtitle: "Reliable data storage and management solutions.",
        icon: Database,
        theme: "red",
        accent: "#B11226",
        items: [
            { name: "PostgreSQL", description: <><strong className="font-semibold text-slate-900">Advanced</strong> relational database system</>, icon: Database },
            { name: "MongoDB", description: <><strong className="font-semibold text-slate-900">Flexible</strong> document-based storage</>, icon: FileJson },
            { name: "Redis", description: <><strong className="font-semibold text-slate-900">High-performance</strong> in-memory caching</>, icon: Zap },
            { name: "Prisma ORM", description: <><strong className="font-semibold text-slate-900">Type-safe</strong> database client</>, icon: Triangle },
            { name: "Supabase", description: <><strong className="font-semibold text-slate-900">Open source</strong> Firebase alternative</>, icon: Database }
        ]
    },
    {
        category: "Automation & Integrations",
        subtitle: "Streamlining workflows and connecting services.",
        icon: Zap,
        theme: "red",
        accent: "#B11226",
        items: [
            { name: "n8n Automation", description: <><strong className="font-semibold text-slate-900">Workflow</strong> automation excellence</>, icon: GitBranch },
            { name: "API Integrations", description: <>Seamless <strong className="font-semibold text-slate-900">third-party</strong> connectivity</>, icon: Globe },
            { name: "Webhooks", description: <><strong className="font-semibold text-slate-900">Real-time</strong> event processing</>, icon: Radio },
            { name: "Data Sync", description: <><strong className="font-semibold text-slate-900">Automated</strong> information flow</>, icon: RefreshCw }
        ]
    },
    {
        category: "Performance & SEO",
        subtitle: "Optimizing for speed, visibility, and scale.",
        icon: Gauge,
        theme: "red",
        accent: "#B11226",
        items: [
            { name: "Core Web Vitals", description: <><strong className="font-semibold text-slate-900">User-centric</strong> performance metrics</>, icon: Activity },
            { name: "SEO Architecture", description: <><strong className="font-semibold text-slate-900">Search engine</strong> friendly structure</>, icon: Search },
            { name: "Scalable Arch", description: <><strong className="font-semibold text-slate-900">Systems</strong> built for growth</>, icon: TrendingUp },
            { name: "Perf Optimization", description: <><strong className="font-semibold text-slate-900">Speed</strong> and efficiency tuning</>, icon: Gauge }
        ]
    },
    {
        category: "DevOps & Deployment",
        subtitle: "Efficient CI/CD pipelines and reliable hosting.",
        icon: GitBranch,
        theme: "red",
        accent: "#B11226",
        items: [
            { name: "Git & GitHub", description: <><strong className="font-semibold text-slate-900">Version control</strong> and collaboration</>, icon: GitBranch },
            { name: "Docker", description: <>Containerized <strong className="font-semibold text-slate-900">application</strong> deployment</>, icon: Box },
            { name: "Vercel", description: <><strong className="font-semibold text-slate-900">Next.js</strong> native deployment platform</>, icon: Triangle },
            { name: "Build Mgmt", description: <><strong className="font-semibold text-slate-900">Automated</strong> CI/CD pipelines</>, icon: Settings }
        ]
    },
    {
        category: "Tools",
        subtitle: "Modern tools for effective development.",
        icon: Wrench,
        theme: "red",
        accent: "#B11226",
        items: [
            { name: "VS Code", description: <>Modern code <strong className="font-semibold text-slate-900">editing</strong> environment</>, icon: Wrench },
            { name: "Figma", description: <><strong className="font-semibold text-slate-900">Collaborative</strong> interface design</>, icon: PenTool },
            { name: "Postman", description: <>API <strong className="font-semibold text-slate-900">testing</strong> and development tool</>, icon: Send }
        ]
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

export default function SkillsSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    const accentColor = SKILLS[activeIndex].accent

    return (
        <section className="relative w-full min-h-screen bg-[#F9F9FB] overflow-hidden">
            {/* Mesh Background Layers - Static for masking */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20"
                    style={{ background: accentColor }}
                />
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20"
                    style={{ background: accentColor }}
                />
            </div>

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={containerVariants}
                className="relative z-10 w-full h-screen py-4 md:py-8 flex items-center justify-center font-sans"
            >
                {/* Subtle Aura */}
                <AnimatePresence>
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.08, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
                    />
                </AnimatePresence>

                <div className="w-[94%] md:w-[85%] max-w-5xl mx-auto flex flex-col items-center relative z-10">

                    {/* Compact Header */}
                    <div className="text-center mb-4 md:mb-6">
                        <motion.div
                            variants={itemVariants}
                            className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase mb-2 block"
                        >
                            Professional Arsenal
                        </motion.div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl md:text-5xl font-black tracking-tighter text-slate-900 mb-0 leading-tight"
                        >
                            Core Technical <span className="text-[#B11226]">Expertise.</span>
                        </motion.h2>
                    </div>

                    {/* Compact Glass Card */}
                    <motion.div
                        variants={itemVariants}
                        layout
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="w-full bg-white/40 backdrop-blur-3xl rounded-[2rem] md:rounded-[2.5rem] border border-white/60 p-4 md:p-8 mb-4 min-h-[350px] md:min-h-[400px] flex flex-col relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.4)]"
                    >
                        {/* Noise texture for the card */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <motion.div
                            initial={false}
                            animate={{ backgroundColor: accentColor }}
                            className="absolute top-0 left-0 right-0 h-[4px] opacity-30"
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } }}
                                exit={{ opacity: 0, y: -10, filter: "blur(2px)", transition: { duration: 0.15, ease: "easeIn" } }}
                                className="flex flex-col w-full h-full"
                            >
                                <div className="text-left mb-4 md:mb-6 border-b border-black/5 pb-3 md:pb-4">
                                    <h3
                                        className="text-2xl md:text-5xl font-semibold mb-1 md:mb-2 tracking-[-0.015em] transition-colors duration-500 text-[#0F172A]"
                                    >
                                        {SKILLS[activeIndex].category}
                                    </h3>
                                    <p className="text-xs md:text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
                                        {SKILLS[activeIndex].subtitle}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                    {SKILLS[activeIndex].items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="group flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-xl md:rounded-xl transition-all relative overflow-hidden active:scale-98"
                                        >
                                            {/* Tile Hover Background */}
                                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/50 transition-colors duration-300 pointer-events-none" />
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none blur-2xl"
                                                style={{ backgroundColor: accentColor }}
                                            />

                                            <div
                                                className="w-8 h-8 md:w-10 md:h-10 shrink-0 flex items-center justify-center rounded-lg md:rounded-xl bg-white border border-black/[0.03] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] group-hover:border-white relative z-10"
                                                style={{ color: accentColor }}
                                            >
                                                <item.icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                                            </div>
                                            <div className="flex flex-col pt-0.5 relative z-10">
                                                <h4 className="text-xs md:text-sm font-bold text-slate-900 mb-0 tracking-tight transition-colors group-hover:text-black">
                                                    {item.name}
                                                </h4>
                                                <div className="text-[10px] md:text-xs font-medium text-slate-500 leading-snug group-hover:text-slate-700 transition-colors">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        {/* Compact Pro Dock */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center gap-2 md:gap-3 pt-3 md:pt-4 w-full relative border-t border-black/5 mt-4"
                        >
                            {/* Floating Glow Indicator behind dock */}
                            <div
                                className="absolute inset-x-0 -top-10 h-24 opacity-10 blur-[60px] pointer-events-none transition-all duration-1000"
                                style={{ background: `radial-gradient(circle at center, ${accentColor}, transparent 70%)` }}
                            />

                            {SKILLS.map((skill, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className="group flex flex-col items-center gap-2 md:gap-3 outline-none transition-all relative"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.15, y: -10, rotate: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 450, damping: 25 }}
                                        className={`w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-xl md:rounded-2xl transition-all duration-500 border relative ${activeIndex === idx
                                            ? `bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border-white ring-4 ring-white/40`
                                            : "bg-white/40 backdrop-blur-md border-white/40 text-slate-400 hover:bg-white hover:border-white hover:shadow-2xl hover:text-slate-600"
                                            }`}
                                        style={{ color: activeIndex === idx ? accentColor : undefined }}>

                                        {activeIndex === idx && (
                                            <motion.div
                                                layoutId="activeDockBg"
                                                className="absolute inset-0 rounded-xl md:rounded-2xl bg-white pointer-events-none"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                            />
                                        )}

                                        <skill.icon className="w-5 h-5 md:w-7 md:h-7 relative z-10" strokeWidth={activeIndex === idx ? 2 : 1.5} />

                                        {activeIndex === idx && (
                                            <motion.div
                                                layoutId="activeDot"
                                                className="absolute -top-2 w-2 h-2 rounded-full z-20"
                                                style={{ backgroundColor: accentColor, boxShadow: `0 0 15px ${accentColor}` }}
                                            />
                                        )}
                                    </motion.div>
                                    <span className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-300 hidden md:block ${activeIndex === idx ? "text-slate-900 opacity-100 translate-y-0" : "text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px]"
                                        }`}>
                                        {skill.category.split(" ")[0]}
                                    </span>
                                </button>
                            ))}
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}
