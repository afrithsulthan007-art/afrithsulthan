"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { X, Send, CheckCircle2, Loader2 } from "lucide-react"
import { useCart } from "@/lib/cart-store"

interface CheckoutFormProps {
    isOpen: boolean
    onClose: () => void
}

export default function CheckoutForm({ isOpen, onClose }: CheckoutFormProps) {
    const { items, totalMin, totalMax, clearCart } = useCart()
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("loading")

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            whatsapp: formData.get("whatsapp"),
            businessType: formData.get("businessType"),
            notes: formData.get("notes"),
            services: items.map(item => item.name),
            estimatedTotal: `₹${totalMin.toLocaleString()} - ₹${totalMax.toLocaleString()}`
        }

        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })

            if (!response.ok) throw new Error("Failed to send request")

            setStatus("success")
            setTimeout(() => {
                clearCart()
                onClose()
                setStatus("idle")
            }, 3000)
        } catch (error) {
            console.error("Webhook error:", error)
            setStatus("error")
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 px-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />

            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-white w-full max-w-lg rounded-[48px] shadow-2xl overflow-hidden relative z-10"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8 md:p-12">
                    {status === "success" ? (
                        <div className="py-12 text-center">
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Sent!</h2>
                            <p className="text-slate-600">
                                We've received your requirements. <br />
                                Expect a response on WhatsApp/Email within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Finalize Request</h2>
                                <p className="text-slate-500">Submit your details and we'll send a custom invoice.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Name</label>
                                        <input
                                            required
                                            name="name"
                                            className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">WhatsApp</label>
                                        <input
                                            required
                                            name="whatsapp"
                                            className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            placeholder="+91 00000 00000"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Business Type</label>
                                    <select
                                        name="businessType"
                                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                                    >
                                        <option>E-commerce / Retail</option>
                                        <option>SaaS / Tech</option>
                                        <option>Service Agency</option>
                                        <option>Coaching / Education</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Requirements</label>
                                    <textarea
                                        name="notes"
                                        rows={3}
                                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Submit Requirements
                                        </>
                                    )}
                                </button>
                                {status === "error" && (
                                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                                )}
                            </form>
                        </>
                    )}
                </div>
            </motion.div>
        </div>
    )
}
