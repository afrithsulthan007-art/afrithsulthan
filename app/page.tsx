"use client"

import { useState, useEffect } from "react"
import ScrollText from "@/components/ScrollText"
import HeroImage from "@/components/HeroImage"
import NavBar from "@/components/NavBar"
import ProjectPage from "@/components/ProjectPage"
import ContactSection from "@/components/ContactSection"
import ServicesSection from "@/components/ServicesSection"
import FinalImageSection from "@/components/FinalImageSection"
import CompanyMarquee from "@/components/CompanyMarquee"
import FaqSection from "@/components/FaqSection"

export default function Home() {
  const [afirthPos, setAfirthPos] = useState({ x: 0, y: 0 })
  const [sulthanPos, setSulthanPos] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState<string | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth || 1)
      setWindowHeight(window.innerHeight || 1)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent, textType: string) => {
    setDragging(textType)
    const currentPos = textType === "afrith" ? afirthPos : sulthanPos
    setDragOffset({
      x: e.clientX - currentPos.x,
      y: e.clientY - currentPos.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return

    const newX = e.clientX - dragOffset.x
    const newY = e.clientY - dragOffset.y

    if (dragging === "afrith") {
      setAfirthPos({ x: newX, y: newY })
    } else {
      setSulthanPos({ x: newX, y: newY })
    }
  }

  const handleMouseUp = () => {
    setDragging(null)
  }

  // Calculate scroll-based transforms for Hero
  const scrollProgress = windowHeight > 0 ? scrollY / windowHeight : 0
  const afrithScrollX = -scrollProgress * windowWidth * 0.8
  const sulthanScrollX = scrollProgress * windowWidth * 0.8
  const textOpacity = Math.max(0, 1 - scrollProgress * 1.2)

  const heroImageOpacity = Math.max(0, 1 - Math.max(0, scrollProgress - 1.5) * 2)

  return (
    <div
      className="w-full bg-white relative"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <h1 className="sr-only">
        Afrith Sulthan - Full Stack Web & Custom Software Developer
      </h1>
      {/* Fixed Hero Layer */}
      <div className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 gap-0">
          <ScrollText
            text="AFRITH"
            x={afirthPos.x}
            y={afirthPos.y}
            scrollX={afrithScrollX}
            opacity={textOpacity}
            fontSize="clamp(55px, 20vw, 240px)"
            letterSpacing="-0.03em"
            onMouseDown={(e) => handleMouseDown(e, "afrith")}
          />

          <ScrollText
            text="SULTHAN"
            x={sulthanPos.x}
            y={sulthanPos.y}
            scrollX={sulthanScrollX}
            opacity={textOpacity}
            fontSize="clamp(50px, 22vw, 270px)"
            letterSpacing="-0.06em"
            onMouseDown={(e) => handleMouseDown(e, "sulthan")}
          />
        </div>

        {/* Center image */}
        <HeroImage
          src="/images/img-removebg-preview-20-281-29.png"
          alt="Afrith Sulthan - Full Stack Web & Custom Software Developer"
          xOffset={0}
          yOffset={0}
          visibility={heroImageOpacity}
          windowWidth={windowWidth}
        />
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10 w-full">
        {/* Spacer to reveal Hero */}
        <div className="w-full h-screen bg-transparent pointer-events-none" />

        <div id="home">
          <CompanyMarquee />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="projects">
          <ProjectPage />
        </div>
        <FinalImageSection />
        <FaqSection />
        <div id="contact">
          <ContactSection />
        </div>

        <NavBar />
      </div>
    </div>
  )
}
