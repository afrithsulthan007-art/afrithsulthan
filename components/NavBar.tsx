"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Briefcase, LayoutGrid, MessageSquare, Tag } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItem {
    name: string
    href: string
    icon: React.ElementType
    isExternal?: boolean
}

const navItems: NavItem[] = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/#services", icon: Briefcase },
    { name: "Projects", href: "/#projects", icon: LayoutGrid },
    { name: "Contact", href: "/#contact", icon: MessageSquare },
]

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const pathname = usePathname()

    // Define which sections have a dark background
    const darkSections = ["services", "projects", "contact"]
    const isDarkSection = darkSections.includes(activeSection) && pathname === "/"

    // Show navbar after scrolling down a bit
    useEffect(() => {
        // Always visible on non-home pages
        if (pathname !== "/") {
            setIsVisible(true)
            setActiveSection(pathname.substring(1))
            return
        }

        const handleScroll = () => {
            const scrollY = window.scrollY
            const windowHeight = window.innerHeight

            // Show navbar after scrolling past 20% of the viewport height
            setIsVisible(scrollY > windowHeight * 0.2)

            // Dynamic active section detection
            const sections = ["home", "services", "projects", "contact"]

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.4) {
                        const navItemIds = navItems.map(item => item.href.replace("/#", "").replace("/", ""))
                        if (navItemIds.includes(sectionId)) {
                            setActiveSection(sectionId === "" ? "home" : sectionId)
                        } else if (sectionId === "skills") {
                            setActiveSection("skills")
                        }
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [pathname])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
        if (item.isExternal || pathname !== "/") return

        e.preventDefault()
        const targetId = item.href.replace("/#", "").replace("/", "")
        const element = document.getElementById(targetId)

        if (element) {
            const offsetTop = element.offsetTop
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })
            setActiveSection(targetId === "" ? "home" : targetId)
        } else if (targetId === "" || targetId === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            setActiveSection("home")
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[95vw]"
                >
                    <nav
                        className={`px-3 py-2 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center gap-2 sm:gap-2 transition-all duration-500 border
                        ${isDarkSection
                                ? "bg-black/40 border-white/10"
                                : "bg-white/40 border-black/5"
                            }`}
                    >
                        {navItems.map((item) => {
                            const itemId = item.href.replace("/#", "").replace("/", "") || "home"
                            const isActive = activeSection === itemId || (item.isExternal && pathname === item.href)

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item)}
                                    className={`relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 group`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className={`absolute inset-0 rounded-full shadow-md ${isDarkSection ? "bg-white/20" : "bg-white"}`}
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                        />
                                    )}

                                    <span className="relative z-10 flex items-center justify-center">
                                        <item.icon className={`w-5 h-5 transition-colors duration-300 ${isActive
                                            ? (isDarkSection ? "text-white" : "text-black")
                                            : (isDarkSection ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-black")
                                            }`} />
                                    </span>

                                    <span className={`relative z-10 text-sm font-medium transition-colors duration-300 hidden sm:block ${isActive
                                        ? (isDarkSection ? "text-white" : "text-black")
                                        : (isDarkSection ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-black")
                                        }`}>
                                        {item.name}
                                    </span>
                                </Link>
                            )
                        })}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
