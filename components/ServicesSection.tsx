"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Code2,
    BarChart3,
    Globe,
    Zap,
    Palette,
    ArrowRight,
    CheckCircle2
} from "lucide-react"

interface Service {
    id: string
    title: string
    icon: React.ElementType
    description: string
    categories: {
        title: string
        items: string[]
    }[]
    deliverables: string[]
    timeline: string
    timelineStage: number // 1 to 5 (e.g. 3 = Planning, Design, Development active)
}

const STAGES = ["Planning", "Design", "Development", "Testing", "Delivery"]

const SERVICES: Service[] = [
    {
        id: "web-dev",
        title: "Custom Web & App Development",
        icon: Code2,
        description: "High-performance web applications, custom websites, and digital products engineered for speed, scale, and high conversion rates.",
        categories: [
            {
                title: "WEB APPLICATION ENGINEERING",
                items: [
                    "Full Stack Web Development (React / Next.js)",
                    "Backend Architecture (Python / Django / Node.js)",
                    "REST & GraphQL API Development",
                ],
            },
            {
                title: "ECOMMERCE & ENTERPRISE PORTALS",
                items: [
                    "Custom eCommerce Development",
                    "Admin & Custom Dashboard Development",
                    "High-Speed Server-Side Rendering (SSR)",
                ],
            },
        ],
        deliverables: ["Production Source Code", "API Documentation", "Cloud Hosting Deployment"],
        timeline: "3-6 weeks",
        timelineStage: 3,
    },
    {
        id: "crm-erp",
        title: "Custom CRM & ERP Software",
        icon: BarChart3,
        description: "Tailored business management software, inventory systems, and automated billing engines built for centralized operational control.",
        categories: [
            {
                title: "OPERATIONS & SALES",
                items: [
                    "Custom CRM for Small Business",
                    "Sales & Customer Management Software",
                    "Lead Tracking & Pipeline Management",
                ],
            },
            {
                title: "ENTERPRISE SYSTEMS",
                items: [
                    "Custom ERP Software & Inventory Systems",
                    "Billing Software Development",
                    "Employee & Order Management Systems",
                ],
            },
        ],
        deliverables: ["Custom Software Suite", "Role-Based Dashboards", "Database Architecture"],
        timeline: "4-8 weeks",
        timelineStage: 3,
    },
    {
        id: "saas-mvp",
        title: "SaaS & MVP Product Development",
        icon: Globe,
        description: "From concept to launch: rapid SaaS MVP engineering, subscription gateways, and scalable cloud products built to acquire users quickly.",
        categories: [
            {
                title: "SAAS ARCHITECTURE",
                items: [
                    "SaaS Product Development & Multi-Tenancy",
                    "Subscription & Stripe Payment Gateways",
                    "User Authentication & Role Management",
                ],
            },
            {
                title: "STARTUP MVP ENGINEERING",
                items: [
                    "Startup Web Development & Prototyping",
                    "Custom Dashboard & Analytics Integration",
                    "Scalable Cloud Deployment (Vercel / AWS)",
                ],
            },
        ],
        deliverables: ["Market-Ready SaaS MVP", "Admin Panel", "Scalable Infrastructure"],
        timeline: "3-5 weeks",
        timelineStage: 3,
    },
    {
        id: "automation",
        title: "Business Automation Software",
        icon: Zap,
        description: "Save 20+ hours weekly with custom business automation software, webhook pipelines, n8n automations, and CRM integrations tailored for small business operations.",
        categories: [
            {
                title: "WORKFLOW ENGINEERING",
                items: [
                    "Business Automation Development & Bots",
                    "CRM, Google Sheets & WhatsApp Sync",
                    "Automated Invoicing & Order Pipelines",
                ],
            },
            {
                title: "API & SYSTEMS INTEGRATION",
                items: [
                    "Custom API Development & Webhooks",
                    "Cross-Platform Database Sync",
                    "Automated Error Monitoring & Alerts",
                ],
            },
        ],
        deliverables: ["Automation Blueprints", "API Integrations", "Operations Runbook"],
        timeline: "1-3 weeks",
        timelineStage: 3,
    },
    {
        id: "uiux-seo",
        title: "UI/UX & Technical SEO Solutions",
        icon: Palette,
        description: "Strategic UI/UX design, custom website development, and Core Web Vitals optimization to ensure your digital products look stunning and rank at the top of Google.",
        categories: [
            {
                title: "PRODUCT DESIGN",
                items: [
                    "Conversion-Focused UI/UX Design",
                    "Figma Design Systems & Components",
                    "Mobile-First Responsive Layouts",
                ],
            },
            {
                title: "SEARCH OPTIMIZATION",
                items: [
                    "Technical SEO & Core Web Vitals Optimization",
                    "Structured Schema Markup (JSON-LD)",
                    "Speed Tuning for Small Business Portals",
                ],
            },
        ],
        deliverables: ["Figma Design Files", "SEO Audit & Setup", "Performance Report"],
        timeline: "2-3 weeks",
        timelineStage: 3,
    },
]

export default function ServicesSection() {
    const [activeServiceId, setActiveServiceId] = useState<string>("automation")
    const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0]

    return (
        <section id="services" className="relative w-full py-24 md:py-32 bg-[#F8FAFD] overflow-hidden text-slate-900 font-sans">
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-indigo-100/35 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-[140px] pointer-events-none" />

            <div className="w-[92%] md:w-[88%] max-w-7xl mx-auto relative z-10">

                {/* Section Hero / Headline */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        className="inline-flex items-center gap-2.5 mb-6 px-4 py-1.5 rounded-full border border-slate-200/80 bg-white/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B11226]"></span>
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-slate-700 tracking-[0.18em] uppercase">
                            Elite Engineering Services
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] mb-6 leading-[1.18] text-[#080E1E] max-w-5xl mx-auto"
                    >
                        <span className="block">
                            Built for founders who care about
                        </span>
                        <span
                            className="block bg-clip-text text-transparent pb-1"
                            style={{
                                backgroundImage: "linear-gradient(135deg, #0B1120 0%, #1E293B 28%, #8B141E 62%, #C9182B 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            speed, scale, and results.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="text-base sm:text-lg md:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed font-normal"
                    >
                        Engineering services designed to{" "}
                        <span className="text-slate-800 font-medium">launch faster</span>,{" "}
                        <span className="text-slate-800 font-medium">scale smarter</span>, and{" "}
                        <span className="text-slate-800 font-medium">convert better</span>.
                    </motion.p>
                </div>

                {/* Main Interactive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    
                    {/* Left Column: Vertical Selectable Service Tabs (Old Style Design) */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col justify-center gap-3 md:gap-4 lg:py-2">
                        {SERVICES.map((service) => {
                            const isActive = activeServiceId === service.id
                            const IconComponent = service.icon

                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveServiceId(service.id)}
                                    className={`group relative flex items-center gap-3.5 md:gap-5 p-3.5 md:p-5 rounded-2xl text-left transition-all duration-300 border justify-start cursor-pointer ${
                                        isActive
                                            ? "bg-white border-slate-200 shadow-xl scale-[1.02]"
                                            : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200 opacity-70 hover:opacity-100"
                                    }`}
                                >
                                    {/* Vertical Indicator */}
                                    <div
                                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-r-lg transition-all duration-300 ${
                                            isActive
                                                ? "bg-gradient-to-b from-[#B11226] to-[#800f1f] opacity-100"
                                                : "opacity-0"
                                        }`}
                                    />

                                    {/* Icon Container */}
                                    <div
                                        className={`p-3 md:p-3.5 rounded-xl transition-all duration-300 shrink-0 ${
                                            isActive
                                                ? "bg-gradient-to-br from-[#B11226] to-[#800f1f] text-white shadow-lg shadow-red-900/20"
                                                : "bg-slate-100 text-slate-400 group-hover:text-slate-600"
                                        }`}
                                    >
                                        <IconComponent className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                                    </div>

                                    {/* Title */}
                                    <div className="flex-1 pl-1">
                                        <h3
                                            className={`font-bold text-sm md:text-lg leading-tight transition-colors duration-300 ${
                                                isActive
                                                    ? "text-slate-900"
                                                    : "text-slate-500 group-hover:text-slate-700"
                                            }`}
                                        >
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Arrow indicator */}
                                    {isActive && (
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-slate-400 opacity-60 ml-auto" />
                                    )}
                                </button>
                            )
                        })}
                    </div>

                    {/* Right Column: Detailed High-Fidelity Service Card */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="relative bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 lg:p-11 border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] overflow-hidden"
                            >
                                {/* Decorative Red Dot Matrix Grid in Top Right */}
                                <div
                                    className="absolute top-4 right-4 w-32 h-32 pointer-events-none opacity-25 hidden sm:block"
                                    style={{
                                        backgroundImage: "radial-gradient(#E11D48 1.5px, transparent 1.5px)",
                                        backgroundSize: "10px 10px",
                                        maskImage: "radial-gradient(ellipse at top right, black 40%, transparent 80%)",
                                        WebkitMaskImage: "radial-gradient(ellipse at top right, black 40%, transparent 80%)",
                                    }}
                                />

                                {/* Header Section */}
                                <div className="flex items-start gap-4 sm:gap-6 mb-8 relative z-10">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-white border-2 border-slate-100 text-[#A31622] flex items-center justify-center shrink-0 shadow-sm">
                                        <activeService.icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132A] tracking-tight leading-tight">
                                            {activeService.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed mt-2.5 max-w-2xl">
                                            {activeService.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Category Feature Columns */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-8 border-b border-slate-100 relative z-10">
                                    {activeService.categories.map((cat, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <h4 className="text-[11px] sm:text-xs font-bold text-[#A31622] uppercase tracking-wider mb-3.5 sm:mb-4">
                                                {cat.title}
                                            </h4>
                                            <ul className="space-y-2.5 sm:space-y-3">
                                                {cat.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                                                        <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" strokeWidth={2} />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {/* Deliverables & Timeline Row */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 pb-6 items-start relative z-10">
                                    {/* Deliverables Column */}
                                    <div className="md:col-span-6">
                                        <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                            DELIVERABLES
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {activeService.deliverables.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center px-3 py-1.5 bg-[#F8FAFC] border border-slate-200/80 text-slate-600 text-xs font-medium rounded-lg shadow-2xs"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Est. Timeline Column */}
                                    <div className="md:col-span-6 flex flex-col justify-between">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-[11px] sm:text-xs font-bold text-[#4F46E5] uppercase tracking-wider">
                                                EST. TIMELINE
                                            </div>
                                            <span className="text-sm sm:text-base font-bold text-[#A31622]">
                                                {activeService.timeline}
                                            </span>
                                        </div>

                                        {/* Multi-Step Timeline Stepper Bar */}
                                        <div className="relative pt-1 pb-1">
                                            <div className="relative flex items-center justify-between">
                                                {/* Background Inactive Track */}
                                                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1.5 bg-[#E8EEF5] rounded-full z-0" />

                                                {/* Active Red Progress Track */}
                                                <div
                                                    className="absolute top-1/2 -translate-y-1/2 left-0 h-1.5 bg-gradient-to-r from-[#8B141E] via-[#A31622] to-[#C9182B] rounded-full z-0 transition-all duration-500"
                                                    style={{
                                                        width: `${((activeService.timelineStage - 1) / (STAGES.length - 1)) * 100}%`,
                                                    }}
                                                />

                                                {/* Stepper Milestone Dots */}
                                                {STAGES.map((_, stageIdx) => {
                                                    const isCompletedOrActive = stageIdx < activeService.timelineStage
                                                    return (
                                                        <div
                                                            key={stageIdx}
                                                            className={`relative z-10 flex items-center justify-center transition-all duration-300 ${
                                                                isCompletedOrActive
                                                                    ? "w-3 h-3 rounded-full bg-[#A31622] ring-2 ring-white shadow-xs"
                                                                    : "w-2.5 h-2.5 rounded-full bg-[#CBD5E1]"
                                                            }`}
                                                        />
                                                    )
                                                })}
                                            </div>

                                            {/* Small Vertical Ticks */}
                                            <div className="flex justify-between px-1">
                                                {STAGES.map((_, idx) => (
                                                    <div key={idx} className="w-[1px] h-1.5 bg-[#CBD5E1]/60 mt-0.5 mx-auto" />
                                                ))}
                                            </div>

                                            {/* Stage Labels Below */}
                                            <div className="flex justify-between text-[10px] sm:text-[11px] text-[#475569] font-medium mt-1">
                                                {STAGES.map((stageName, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={
                                                            idx < activeService.timelineStage
                                                                ? "text-slate-700 font-semibold"
                                                                : "text-slate-400"
                                                        }
                                                    >
                                                        {stageName}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Action Bar */}
                                <div className="mt-4 pt-5 border-t border-slate-100 flex items-center justify-between gap-4 relative z-10">
                                    <div className="text-xs sm:text-sm text-slate-500 font-medium">
                                        Ready to start?
                                    </div>

                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center gap-2 bg-[#F8FAFC] hover:bg-slate-900 hover:text-white text-slate-800 border border-slate-200 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs group"
                                    >
                                        Details & Pricing
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </a>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    )
}
