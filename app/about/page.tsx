import type { Metadata } from "next"
import AboutSection from "@/components/AboutSection"
import NavBar from "@/components/NavBar"
import ContactSection from "@/components/ContactSection"
import CompanyMarquee from "@/components/CompanyMarquee"

export const metadata: Metadata = {
  title: "About Afrith Sulthan | Full Stack Web & Software Developer",
  description:
    "Learn about Afrith Sulthan, a full stack developer & custom software engineering specialist building high-speed web apps, SaaS MVPs, and business automation systems.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="w-full bg-white relative min-h-screen">
      <div className="pt-16 sm:pt-20">
        <AboutSection />
        <CompanyMarquee />
        <div id="contact">
          <ContactSection />
        </div>
      </div>
      <NavBar />
    </main>
  )
}
