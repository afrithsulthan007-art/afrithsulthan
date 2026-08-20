"use client"

import React from "react"
import { ExternalLink, CheckCircle2, XCircle, AlertCircle, ArrowRight, Database, Server, Layout } from "lucide-react"

interface DatabaseValidatorSectionProps {
    opacity: number
    transformY: number
}

const PROJECT_DATA = {
    title: "Database Validator",
    demoUrl: "https://database-validator.vercel.app/",
    description: "A powerful automated employee-data validation tool built with React, Apollo API, and LinkedIn integration.",
    stats: "Validates 500+ records in < 10 mins",
    role: "Designed and built the entire application: UI/UX, React frontend, Apollo API integration, data pipelines, error handling, and performance optimization.",
    tech: ["React", "Apollo API", "Node.js", "Tailwind", "Excel/CSV Parsing", "Vercel"],
    caseStudy: [
        {
            title: "Problem",
            icon: AlertCircle,
            content: "HR teams struggle with mismatched names, incorrect emails, and missing LinkedIn profiles. Manual validation of employee records is slow, error-prone, and inefficient for large datasets."
        },
        {
            title: "Process",
            icon: Server,
            content: "Designed a robust architecture using Apollo API for real-time data and LinkedIn for profile discovery. Implemented efficient data pipelines and error handling to process CSV/Excel uploads seamlessly."
        },
        {
            title: "Solution",
            icon: CheckCircle2,
            content: "An automated tool that validates 500+ records in under 10 minutes. Features smart match categorization (Exact/Partial/No Match), one-click export, and a clean, performance-focused UI."
        }
    ]
}

export default function DatabaseValidatorSection({ opacity, transformY }: DatabaseValidatorSectionProps) {
    // Only render if opacity is > 0 to save resources, but keep it in DOM for transitions
    if (opacity === 0) return null

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-30 pointer-events-none overflow-y-auto md:overflow-hidden"
            style={{
                opacity,
                transform: `translateY(${transformY}px)`,
            }}
        >
            <div className="max-w-7xl w-full px-6 py-12 md:py-0 h-full flex flex-col justify-center">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 pointer-events-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Database className="w-6 h-6 text-[#6B1C1C]" />
                                <span className="text-sm font-bold tracking-wider text-[#6B1C1C] uppercase">Case Study</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{PROJECT_DATA.title}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl">{PROJECT_DATA.description}</p>
                        </div>
                        <a
                            href={PROJECT_DATA.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-3 bg-[#6B1C1C] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Live Demo
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {PROJECT_DATA.caseStudy.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#6B1C1C]/20 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-[#6B1C1C]">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* Footer / Tech Stack */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-gray-100 pt-8">
                        <div className="max-w-xl">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">My Role</h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{PROJECT_DATA.role}</p>
                            <div className="flex flex-wrap gap-2">
                                {PROJECT_DATA.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-3xl font-bold text-[#6B1C1C] mb-1">500+</div>
                            <div className="text-sm text-gray-500 font-medium">Records Validated</div>
                            <div className="text-xs text-gray-400">in under 10 minutes</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
