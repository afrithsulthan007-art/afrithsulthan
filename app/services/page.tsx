"use client"

import React from "react"
import ServicesSection from "@/components/ServicesSection"
import NavBar from "@/components/NavBar"
import Footer from "@/components/AboutSection" // Reusing footer from AboutSection if possible

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            {/* Minimal Spacer for NavBar visibility if needed */}
            <div className="h-20" />

            <div id="services">
                <ServicesSection />
            </div>

            {/* Reusing AboutSection as Footer for consistency or minimal spacer */}
            <div className="py-20 bg-slate-50 border-t border-slate-100 text-center">
                <p className="text-slate-400 text-sm font-medium">© 2026 Afrith Sulthan - Elite Engineering Services.</p>
            </div>
        </main>
    )
}
