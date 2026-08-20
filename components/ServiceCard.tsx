"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Plus, Star, CheckCircle2 } from "lucide-react"
import { Service, useCart } from "@/lib/cart-store"

interface ServiceCardProps {
    service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const { addToCart, removeFromCart, isInCart } = useCart()
    const active = isInCart(service.id)

    const handleToggle = () => {
        if (active) {
            removeFromCart(service.id)
        } else {
            addToCart(service)
        }
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className={`relative p-8 rounded-[32px] transition-all duration-500 border h-full flex flex-col ${active
                ? "bg-white border-blue-500 shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
                : "bg-white border-slate-100 hover:border-blue-200 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                }`}
        >
            {service.isRecommended && (
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-lg z-20"
                >
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                </motion.div>
            )}

            <div className="mb-8">
                <motion.h3
                    layout="position"
                    className="text-2xl font-bold text-slate-900 mb-2"
                >
                    {service.name}
                </motion.h3>
                <motion.div
                    layout="position"
                    className="flex items-baseline gap-1"
                >
                    <span className="text-2xl font-bold text-blue-600">{service.priceRange}</span>
                </motion.div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
                {service.features.map((feature, idx) => (
                    <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 text-slate-600 text-sm leading-relaxed"
                    >
                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${active ? "bg-blue-100 text-blue-600" : "bg-slate-50 text-slate-400"}`}>
                            <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className="group-hover:text-slate-900 transition-colors">{feature}</span>
                    </motion.li>
                ))}
            </ul>

            <motion.button
                layout
                whileTap={{ scale: 0.95 }}
                onClick={handleToggle}
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${active
                    ? "bg-slate-900 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                    }`}
            >
                <AnimatePresence mode="wait">
                    {active ? (
                        <motion.div
                            key="added"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            <CheckCircle2 className="w-5 h-5 text-blue-400" />
                            Added to Project
                        </motion.div>
                    ) : (
                        <motion.div
                            key="add"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            Add to Cart
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </motion.div>
    )
}
