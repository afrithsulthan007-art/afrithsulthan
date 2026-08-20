"use client"

import React from "react"
import { ShieldCheck, Zap, Users, BarChart3 } from "lucide-react"

const trustItems = [
    {
        icon: ShieldCheck,
        title: "No ads. No fluff.",
        description: "Focusing on what works: clean code and effective systems."
    },
    {
        icon: Zap,
        title: "Productized approach.",
        description: "Clear pricing filters serious clients and saves everyone time."
    },
    {
        icon: Users,
        title: "Milestone-based.",
        description: "Payments are split across project phases for transparency."
    },
    {
        icon: BarChart3,
        title: "Data-driven.",
        description: "Every website and automation is built with analytics in mind."
    }
]

export default function TrustSection() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {trustItems.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
