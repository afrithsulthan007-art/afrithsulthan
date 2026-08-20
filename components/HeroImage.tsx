import React from "react"
import Image from "next/image"

interface HeroImageProps {
    src: string
    alt: string
    xOffset: number
    yOffset: number
    visibility: number
    windowWidth: number
}

export default function HeroImage({ src, alt, xOffset, yOffset, visibility, windowWidth }: HeroImageProps) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none"
            style={{
                transform: `translate(${windowWidth > 768 ? xOffset : 0}vw, ${windowWidth > 768 ? yOffset : 0}vh)`,
                opacity: visibility,
            }}
        >
            <div className={`relative transition-all duration-700 ${visibility > 0.5 && windowWidth > 768 ? 'animate-float' : ''}`}>
                <Image
                    src={src}
                    alt={alt}
                    width={800}
                    height={1000}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-[50vh] md:h-[95vh] w-auto max-w-[90vw] object-contain -translate-y-4 relative z-10 transition-transform duration-500 hover:scale-105 pointer-events-auto"
                    style={{
                        filter: `
                            drop-shadow(0 0 30px rgba(107, 28, 28, 0.2))
                            drop-shadow(0 20px 50px rgba(0,0,0,0.4))
                        `,
                    }}
                />
            </div>
        </div>
    )
}
