"use client"

import React from "react"
import { Mail, MapPin, Clock, Send } from "lucide-react"
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
}

const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
}

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSubmitted, setIsSubmitted] = React.useState(false)
    const [error, setError] = React.useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const data: Record<string, string> = {
                _subject: "New Project Inquiry from Portfolio - Afrith Sulthan",
                _captcha: "false",
                _template: "table",
            }
            formData.forEach((value, key) => {
                data[key] = value.toString()
            })

            const response = await fetch("https://formsubmit.co/ajax/afrithsulthan007@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (response.ok && (result.success === "true" || result.success === true || result.message)) {
                setIsSubmitted(true)
                form.reset()
            } else if (response.ok) {
                setIsSubmitted(true)
                form.reset()
            } else {
                throw new Error(result.message || "Form submission failed")
            }
        } catch (err: any) {
            setError(err?.message || "Something went wrong. Please try again or email directly at afrithsulthan007@gmail.com.")
            console.error("FormSubmit error:", err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center z-50 bg-white text-zinc-900 pt-40 pb-24 overflow-hidden font-sans">

            {/* Ambient Background Effects - Subtle Light Theme Variations */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                className="w-full max-w-6xl mx-auto px-6 pointer-events-auto relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={containerVariants}
            >

                {/* Header Section - Realigned to Form Grid */}
                <div className="max-w-[720px] mx-auto text-center mb-10 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-6"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
                        <span className="text-[10px] font-black text-[#E50914] uppercase tracking-widest">Available for new projects</span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1] text-black"
                        variants={itemVariants}
                    >
                        Ready to create <br />
                        <span className="text-[#E50914]">
                            something amazing?
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        I'm currently available for freelance projects and open to full-time opportunities.
                        Let's turn your vision into reality.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left Column - Unified Meta Rail */}
                    <div className="lg:col-span-1">
                        <motion.div
                            className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-6 shadow-sm"
                            variants={cardVariants}
                        >
                            {/* Email */}
                            <div className="group flex flex-col gap-3">
                                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center border border-red-100 group-hover:border-red-200 transition-colors">
                                    <Mail className="w-5 h-5 text-[#E50914]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-zinc-400 tracking-widest mb-1 uppercase">Email</p>
                                    <a href="mailto:afrithsulthan007@gmail.com" className="text-base font-bold text-zinc-900 break-all hover:text-[#E50914] transition-colors">
                                        afrithsulthan007@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="group flex flex-col gap-3">
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:border-zinc-200 transition-colors">
                                    <MapPin className="w-5 h-5 text-zinc-900" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-zinc-400 tracking-widest mb-1 uppercase">Location</p>
                                    <p className="text-base font-bold text-zinc-900">Chennai, India</p>
                                </div>
                            </div>

                            {/* Response */}
                            <div className="group flex flex-col gap-3">
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:border-zinc-200 transition-colors">
                                    <Clock className="w-5 h-5 text-zinc-900" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-zinc-400 tracking-widest mb-1 uppercase">Response Time</p>
                                    <p className="text-base font-bold text-zinc-900">Within 24 hours</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Optimized Form */}
                    <motion.div
                        className="lg:col-span-2 bg-white border border-zinc-200 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden"
                        variants={formVariants}
                    >
                        {/* Decorative background shape */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-black relative z-10">
                            Get in Touch
                        </h3>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                            >
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4">
                                    <Send className="w-10 h-10 text-green-600" />
                                </div>
                                <h4 className="text-2xl font-bold text-zinc-900">Message Sent!</h4>
                                <p className="text-zinc-500 max-w-md">
                                    Thank you for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-6 px-6 py-2 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-sm font-bold text-zinc-900 transition-colors"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form
                                className="space-y-4 relative z-10"
                                onSubmit={handleSubmit}
                                action="https://formsubmit.co/afrithsulthan007@gmail.com"
                                method="POST"
                            >
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_subject" value="New Project Inquiry from Portfolio - Afrith Sulthan" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-zinc-100 bg-zinc-50 focus:bg-white focus:border-[#E50914] outline-none transition-all placeholder:text-zinc-400 text-zinc-900 font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-zinc-100 bg-zinc-50 focus:bg-white focus:border-[#E50914] outline-none transition-all placeholder:text-zinc-400 text-zinc-900 font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-zinc-100 bg-zinc-50 focus:bg-white focus:border-[#E50914] outline-none transition-all placeholder:text-zinc-400 text-zinc-900 font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Company/College</label>
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Company or College Name"
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-zinc-100 bg-zinc-50 focus:bg-white focus:border-[#E50914] outline-none transition-all placeholder:text-zinc-400 text-zinc-900 font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea
                                        rows={3}
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-zinc-100 bg-zinc-50 focus:bg-white focus:border-[#E50914] outline-none transition-all placeholder:text-zinc-400 resize-none text-zinc-900 font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>

                                {error && (
                                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium">
                                        {error}
                                    </div>
                                )}

                                <div className="pt-2 flex flex-col items-start gap-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative w-full md:w-auto px-10 py-5 bg-[#E50914] text-white font-black rounded-xl transition-all hover:bg-[#b00710] shadow-lg shadow-red-500/30 hover:shadow-red-500/40 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                                    >
                                        {isSubmitting ? (
                                            <span>Sending...</span>
                                        ) : (
                                            <>
                                                <span className="relative z-10">Send Message</span>
                                                <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                                        I usually reply within 24 hours. No spam.
                                    </p>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>

                <div className="mt-24 border-t border-zinc-100 pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-zinc-400 font-medium">
                                © {new Date().getFullYear()} Afrith Sulthan. All rights reserved.
                            </p>
                        </div>

                        {/* SEO Internal Linking Footer */}
                        <nav aria-label="Footer Navigation">
                            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-zinc-500">
                                <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
                                <li><a href="#about" className="hover:text-black transition-colors">About Afrith</a></li>
                                <li><a href="#services" className="hover:text-black transition-colors">Custom Software Services</a></li>
                                <li><a href="#projects" className="hover:text-black transition-colors">Case Studies & Projects</a></li>
                                <li><a href="#contact" className="hover:text-black transition-colors">Contact & Pricing</a></li>
                                <li><a href="/services" className="hover:text-black transition-colors">Service Catalog</a></li>
                                <li><a href="/sitemap.xml" className="hover:text-black transition-colors">Sitemap</a></li>
                                <li><a href="https://github.com/AAFRITHSULTHAN" className="hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/afrith-sulthan-544aab28b" className="hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
