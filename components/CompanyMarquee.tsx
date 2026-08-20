"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const companies = [
    {
        name: "StemMagix",
        logo: "/images/companies/stemmagix.png",
        imgClass: "max-h-12 md:max-h-14 w-auto object-contain",
    },
    {
        name: "Quick Sort",
        logo: "/images/companies/quick-sort.png",
        imgClass: "max-h-12 md:max-h-14 w-auto object-contain",
    },
    {
        name: "Accord Marketers",
        logo: "/images/companies/accord-marketers.png",
        imgClass: "max-h-11 md:max-h-12 w-auto object-contain",
    },
    {
        name: "Qwantome",
        logo: "/images/companies/qwantome.png",
        imgClass: "max-h-14 md:max-h-16 w-auto object-contain",
    },
]

// Repeat companies 3 times per track to ensure plenty of cards across wide displays
const marqueeList = [...companies, ...companies, ...companies]

export default function CompanyMarquee() {
    return (
        <section className="relative py-8 md:py-10 w-full overflow-hidden bg-black text-white">
            {/* Ambient warm golden glow behind heading */}
            <div
                className="absolute top-4 left-1/2 -translate-x-1/2 w-[550px] md:w-[700px] h-[220px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(229, 169, 60, 0.16) 0%, rgba(180, 115, 15, 0.06) 45%, transparent 75%)",
                    filter: "blur(60px)",
                }}
            />

            {/* Header Content */}
            <div className="container mx-auto px-4 mb-6 md:mb-8 text-center relative z-10">
                <p
                    className="text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase mb-2 inline-block bg-clip-text text-transparent"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #F5D38A 0%, #D89B37 50%, #A66E1D 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    PROFESSIONAL EXPERIENCE
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold tracking-[-0.02em] text-white leading-tight">
                    Trusted by teams{" "}
                    <span
                        className="inline-block bg-clip-text text-transparent"
                        style={{
                            backgroundImage: "linear-gradient(135deg, #FFF6DD 0%, #FCE09B 20%, #E3A847 48%, #BE7D22 76%, #824E0B 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        I’ve built for.
                    </span>
                </h2>
            </div>

            {/* Marquee Carousel */}
            <div className="flex w-full relative overflow-hidden select-none">
                {/* Two identical groups for seamless infinite looping */}
                {[0, 1].map((trackIndex) => (
                    <motion.div
                        key={trackIndex}
                        className="flex shrink-0 gap-6 md:gap-8 items-center whitespace-nowrap pr-6 md:pr-8"
                        animate={{
                            x: "-100%",
                        }}
                        transition={{
                            duration: 35,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        style={{ willChange: "transform", transform: "translateZ(0)" }}
                    >
                        {marqueeList.map((company, index) => (
                            <div
                                key={`${company.name}-${trackIndex}-${index}`}
                                className="relative w-60 sm:w-68 md:w-72 h-24 sm:h-28 flex items-center justify-center bg-white rounded-2xl md:rounded-[22px] px-6 py-4 shadow-md shrink-0 transition-transform duration-300 hover:scale-[1.03]"
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} Client Logo`}
                                        width={220}
                                        height={80}
                                        className={company.imgClass}
                                        priority={index < 4}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ))}

                {/* Gradient Overlays for smooth side fades */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-40 md:w-60 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 sm:w-40 md:w-60 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    )
}

