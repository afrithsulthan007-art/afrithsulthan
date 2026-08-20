"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"

export interface Service {
    id: string
    name: string
    description: string
    priceRange: string
    minPrice: number
    maxPrice: number
    category: "Full-Stack" | "Automation"
    isRecommended?: boolean
    features: string[]
}

interface CartContextType {
    items: Service[]
    addToCart: (service: Service) => void
    removeFromCart: (serviceId: string) => void
    clearCart: () => void
    totalMin: number
    totalMax: number
    isInCart: (serviceId: string) => boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const services: Service[] = [
    {
        id: "lp-design",
        name: "Landing Page Design (UI/UX Only)",
        description: "High-conversion layout, Mobile-first design, CTA-focused structure",
        priceRange: "₹3,000 – ₹5,000",
        minPrice: 3000,
        maxPrice: 5000,
        category: "Full-Stack",
        features: ["High-conversion layout", "Mobile-first design", "CTA-focused structure"]
    },
    {
        id: "lp-dev",
        name: "Landing Page Development (Full-Stack)",
        description: "Frontend + backend, Form handling & validation, Performance optimized, Deployment setup",
        priceRange: "₹7,000 – ₹10,000",
        minPrice: 7000,
        maxPrice: 10000,
        category: "Full-Stack",
        features: ["Frontend + backend", "Form handling & validation", "Performance optimized", "Deployment & hosting setup"]
    },
    {
        id: "complete-site",
        name: "Complete Website (Design + Full-Stack)",
        description: "UI/UX + full development, Multi-section website, Ready for automation integration",
        priceRange: "₹12,000 – ₹15,000",
        minPrice: 12000,
        maxPrice: 15000,
        category: "Full-Stack",
        features: ["UI/UX + full development", "Multi-section website", "Ready for automation integration"]
    },
    {
        id: "auto-starter",
        name: "Automation Starter",
        description: "Lead capture integration, Instant WhatsApp alert, Basic workflow automation",
        priceRange: "₹5,000 – ₹7,000",
        minPrice: 5000,
        maxPrice: 7000,
        category: "Automation",
        features: ["Lead capture integration", "Instant WhatsApp alert", "Basic workflow automation"]
    },
    {
        id: "auto-pro",
        name: "Automation Pro",
        description: "Lead capture + WhatsApp + Email, Google Sheets / CRM integration, Lead tagging & routing",
        priceRange: "₹15,000 – ₹20,000",
        minPrice: 15000,
        maxPrice: 20000,
        category: "Automation",
        isRecommended: true,
        features: ["Lead capture + WhatsApp + Email", "Google Sheets / CRM integration", "Lead tagging & routing", "Multi-step follow-ups"]
    },
    {
        id: "auto-biz",
        name: "Automation Business (End-to-End)",
        description: "Full automation architecture, Multi-channel follow-ups, Analytics & performance tracking",
        priceRange: "₹30,000+",
        minPrice: 30000,
        maxPrice: 40000,
        category: "Automation",
        features: ["Full automation architecture", "Multi-channel follow-ups", "Analytics & performance tracking", "Scalable workflows", "Ongoing optimization support"]
    }
]

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<Service[]>([])

    useEffect(() => {
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to load cart", e)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items))
    }, [items])

    const addToCart = useCallback((service: Service) => {
        setItems((prev) => {
            if (prev.find((item) => item.id === service.id)) return prev
            return [...prev, service]
        })
    }, [])

    const removeFromCart = useCallback((serviceId: string) => {
        setItems((prev) => prev.filter((item) => item.id !== serviceId))
    }, [])

    const clearCart = useCallback(() => {
        setItems([])
    }, [])

    const isInCart = useCallback((serviceId: string) => {
        return items.some((item) => item.id === serviceId)
    }, [items])

    const totalMin = items.reduce((sum, item) => sum + item.minPrice, 0)
    const totalMax = items.reduce((sum, item) => sum + item.maxPrice, 0)

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                clearCart,
                totalMin,
                totalMax,
                isInCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
