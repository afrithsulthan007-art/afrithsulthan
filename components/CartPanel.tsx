"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Trash2, CreditCard, ReceiptText, ArrowRight } from "lucide-react"
import { useCart } from "@/lib/cart-store"

interface CartPanelProps {
    onCheckout: () => void
}

export default function CartPanel({ onCheckout }: CartPanelProps) {
    const { items, removeFromCart, totalMin, totalMax, clearCart } = useCart()

    if (items.length === 0) return null

    return (
        <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed top-32 right-6 z-40 w-full max-w-sm hidden lg:block"
        >
            <div className="bg-white rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex flex-col max-h-[75vh]">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-white">
                    <div>
                        <h3 className="text-lg font-black text-slate-900 tracking-tight">Project Scope</h3>
                        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">{items.length} services added</p>
                    </div>
                    <button
                        onClick={clearCart}
                        className="text-slate-400 hover:text-rose-500 transition-all p-2 hover:bg-rose-50 rounded-xl"
                        title="Clear all"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto p-8 space-y-4 custom-scrollbar">
                    <AnimatePresence mode="popLayout">
                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="group relative bg-slate-50/50 p-5 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
                            >
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all border border-slate-100 scale-90 hover:scale-110"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                                <h4 className="text-sm font-bold text-slate-800 pr-4 leading-snug">{item.name}</h4>
                                <p className="text-xs font-bold text-blue-600 mt-2">{item.priceRange}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="p-8 bg-slate-900 text-white">
                    <div className="mb-6">
                        <p className="text-slate-400 text-[10px] uppercase tracking-widest font-black mb-2">Estimated Total</p>
                        <motion.div
                            key={totalMin}
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            className="text-3xl font-black text-white"
                        >
                            ₹{totalMin.toLocaleString()} – ₹{totalMax.toLocaleString()}
                        </motion.div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onCheckout}
                        className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 group"
                    >
                        Request Invoice
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <p className="text-[10px] text-slate-500 text-center mt-6 font-medium leading-relaxed">
                        No commitment required. <br /> Invoice shared after project strategy.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
