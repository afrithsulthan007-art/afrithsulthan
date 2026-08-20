import React from "react"

interface ScrollTextProps {
    text: string
    x: number
    y: number
    scrollX: number
    opacity: number
    fontSize: string
    letterSpacing: string
    onMouseDown: (e: React.MouseEvent) => void
}

export default function ScrollText({
    text,
    x,
    y,
    scrollX,
    opacity,
    fontSize,
    letterSpacing,
    onMouseDown,
}: ScrollTextProps) {
    return (
        <div
            className="text-center cursor-move select-none pointer-events-auto"
            style={{
                transform: `translate(${x + scrollX}px, ${y}px)`,
                opacity: opacity,
            }}
            onMouseDown={onMouseDown}
        >
            <div
                className="font-black text-[#6B1C1C] leading-none tracking-tighter opacity-[0.93] whitespace-nowrap"
                style={{ fontSize, fontWeight: 900, letterSpacing }}
            >
                {text}
            </div>
        </div>
    )
}
