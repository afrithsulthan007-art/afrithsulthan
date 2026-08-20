"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Code2, Cpu, Database, Globe, Layers, Rocket, ShieldCheck, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-20 md:py-28 bg-white overflow-hidden text-slate-900 font-sans border-b border-slate-100">
      <div className="w-[92%] md:w-[88%] max-w-7xl mx-auto relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 shadow-xs"
          >
            <Code2 className="w-4 h-4 text-[#B11226]" />
            <span className="text-xs font-semibold text-slate-700 tracking-wider uppercase">
              About Afrith Sulthan
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B132A] tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Full Stack Web Developer & Custom Software Specialist
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal"
          >
            Engineering scalable web applications, SaaS MVPs, custom CRM/ERP software, and automated business workflows for startups and growing enterprises worldwide.
          </motion.p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Background & Engineering Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base font-normal"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132A] tracking-tight">
              Building High-Speed Software Solutions That Drive Business Growth
            </h3>

            <p>
              I am <strong>Afrith Sulthan</strong>, a dedicated full stack web developer and software engineering consultant specializing in modern JavaScript and Python ecosystems. My expertise spans custom web application development, SaaS product engineering, custom CRM and ERP software systems, direct-to-consumer eCommerce storefronts, and intelligent business process automation.
            </p>

            <p>
              Whether you are an ambitious startup founder looking to launch a market-ready SaaS MVP in weeks or an established business seeking to streamline operations with custom management software, I deliver clean, maintainable architecture designed for sub-second performance, bulletproof security, and seamless user experiences.
            </p>

            <p>
              My development stack includes <strong>React, Next.js, TypeScript</strong>, <strong>Python, Django, PostgreSQL</strong>, and <strong>REST & GraphQL APIs</strong>. Every solution is engineered from scratch with a relentless focus on Core Web Vitals, mobile responsiveness, search engine optimization (SEO), and conversion-optimized design.
            </p>

            {/* Quick Links inside copy for internal SEO linking */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold">
              <a href="#services" className="text-[#B11226] hover:underline flex items-center gap-1">
                Explore Custom Software Services &rarr;
              </a>
              <a href="#projects" className="text-[#B11226] hover:underline flex items-center gap-1">
                View Live Production Projects &rarr;
              </a>
              <a href="#contact" className="text-[#B11226] hover:underline flex items-center gap-1">
                Get a Free Project Consultation &rarr;
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Value Highlights & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-[#F8FAFD] p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-[#B11226] flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5">SaaS MVP Engineering</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Rapid prototype & production SaaS development with authentication, multi-tenancy, and Stripe billing.
              </p>
            </div>

            <div className="bg-[#F8FAFD] p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5">Custom CRM & ERP</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Centralized business dashboards, automated inventory tracking, billing software, and sales pipelines.
              </p>
            </div>

            <div className="bg-[#F8FAFD] p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5">Workflow Automation</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Save 20+ hours weekly with n8n workflow triggers, WhatsApp ordering bots, and CRM webhooks.
              </p>
            </div>

            <div className="bg-[#F8FAFD] p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5">High-Speed Web Apps</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Server-side rendered Next.js portals with 95+ Core Web Vitals scores and mobile optimization.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Frequently Asked Questions (FAQ) Section - Boosts SEO Word Count & Structured Content */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132A] tracking-tight">
              Frequently Asked Questions About My Development Process
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              Everything you need to know about partnering on custom software and web development projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                What technologies do you use for custom software development?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                I specialize in full stack modern web development using React, Next.js, TypeScript, Tailwind CSS on the frontend, and Python, Django, Node.js, PostgreSQL, and REST/GraphQL APIs on the backend.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                How long does it take to build a SaaS MVP or custom CRM?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Typical SaaS MVP builds take 3-5 weeks from planning to production deployment. Custom CRM and ERP software projects usually take 4-8 weeks depending on integration requirements.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                Do you provide ongoing technical support and SEO maintenance?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes! Every project includes post-launch support, performance monitoring, continuous security updates, and technical SEO optimizations to keep your application running fast and ranking high.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                Can you integrate existing business tools like WhatsApp, Stripe, or CRM platforms?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Absolutely. I build custom API integrations, webhook pipelines, automated billing engines, and direct messaging workflows to sync your software with any third-party service seamlessly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
