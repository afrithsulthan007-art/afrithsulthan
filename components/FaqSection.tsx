"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: "What custom software development services do you offer?",
    answer:
      "I offer full stack web application development, SaaS MVP engineering, custom CRM and ERP software development, direct-to-consumer eCommerce portals, API development, and business workflow automation (n8n, webhooks, WhatsApp bots).",
  },
  {
    question: "How long does it take to build a custom web app or SaaS MVP?",
    answer:
      "A typical SaaS MVP or custom web application takes 3 to 5 weeks from initial design to production launch. Custom enterprise CRM/ERP systems typically take 4 to 8 weeks depending on database complexity and integration scope.",
  },
  {
    question: "Do you provide ongoing technical support and SEO maintenance?",
    answer:
      "Yes! Every project includes post-launch support, continuous performance monitoring, security updates, cloud deployment management, and technical SEO optimization to ensure high rankings and zero downtime.",
  },
  {
    question: "Can you integrate existing business platforms like Stripe or WhatsApp?",
    answer:
      "Absolutely. I build custom API integrations, webhook pipelines, automated billing engines, and direct WhatsApp order routing to connect your software seamlessly with any third-party service.",
  },
  {
    question: "How do we get started on a new software project?",
    answer:
      "Simply fill out the contact form below or email me directly at afrithsulthan007@gmail.com. We will schedule a quick consultation to outline your scope, timeline, tech stack, and deliver an exact project estimate.",
  },
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="relative w-full py-20 md:py-28 bg-[#F8FAFD] border-t border-slate-200/80 font-sans text-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[92%] md:w-[88%] max-w-4xl mx-auto relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-xs"
          >
            <HelpCircle className="w-4 h-4 text-[#B11226]" />
            <span className="text-xs font-semibold text-slate-700 tracking-wider uppercase">
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B132A] tracking-tight leading-tight"
          >
            Got Questions? Everything You Need to Know
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto mt-3 font-normal"
          >
            Answers to common questions about my development workflow, project timelines, and technical capabilities.
          </motion.p>
        </div>

        {/* Expandable Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-[#0B132A] hover:text-[#B11226] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-rose-50 text-[#B11226]" : "text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
