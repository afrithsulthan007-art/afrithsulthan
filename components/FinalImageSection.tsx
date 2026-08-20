"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function FinalImageSection() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center bg-[#030014] overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full"
            >
                <Image
                    src="/me-reading.png?v=final"
                    alt="Afrith Sulthan - Software Engineer & Full Stack Web Developer"
                    fill
                    className="object-cover object-center"
                    priority
                />

                <div className="absolute inset-0 z-30 flex flex-col items-start pt-[22vh] pl-[10vw] md:pl-[12vw]">
                    <a
                        href="https://www.instagram.com/afrithsulthan?igsh=MWkwMDV1ZDJ1a2F4ZQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-left max-w-[550px] flex flex-col gap-6 cursor-pointer group"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h2 className="bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1] drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                This is only a glimpse.
                            </h2>
                            <div className="flex flex-col gap-1">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.85 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                                    className="text-[#C9B37E] font-medium text-sm tracking-[0.35em] uppercase leading-relaxed drop-shadow-md"
                                >
                                    Not everyone gets it.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.65 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                                    className="text-white font-normal text-xs md:text-sm tracking-widest uppercase mt-4"
                                >
                                    Some things open in conversation.
                                </motion.p>
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 0.75 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                                    className="text-[#C9B37E] font-medium text-[0.95rem] tracking-[0.12em] uppercase mt-5 ml-1 inline-block"
                                >
                                    If you get it <span className="ml-2">→</span>
                                </motion.span>
                            </div>
                        </motion.div>
                    </a>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/50 via-transparent to-transparent opacity-60" />
            </motion.div>
        </section>
    )
}
