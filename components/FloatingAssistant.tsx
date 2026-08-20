"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles, User, ChevronDown, MessageSquare, Phone, MessageSquareText } from "lucide-react"

export default function FloatingAssistant() {
    interface Message {
        id: string
        role: "user" | "assistant"
        text: string
    }

    const [isVisible, setIsVisible] = useState(false) // Hidden initially (for first page)
    const [showGreeting, setShowGreeting] = useState(false)
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [hasGreeted, setHasGreeted] = useState(false)
    const [isOverlapping, setIsOverlapping] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [sessionId, setSessionId] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Lead Capture State
    const [hasCapturedLead, setHasCapturedLead] = useState(false)
    const [leadForm, setLeadForm] = useState({
        name: "",
        phone: "",
        message: ""
    })
    const [isSubmittingLead, setIsSubmittingLead] = useState(false)

    const [messages, setMessages] = useState<Message[]>([])

    // Initialize Session ID
    useEffect(() => {
        let sid = sessionStorage.getItem("chat_session_id")
        if (!sid) {
            sid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            sessionStorage.setItem("chat_session_id", sid)
        }
        setSessionId(sid)
    }, [])

    // Scroll detection & Overlap Check
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const windowHeight = window.innerHeight

            // Visibility: Trigger at 20% of viewport height (Hide on First Page/Hero)
            const shouldShow = scrollY > windowHeight * 0.2
            setIsVisible(shouldShow)

            // Overlap Detection
            if (shouldShow) {
                const x = window.innerWidth - 80
                const y = window.innerHeight - 80
                const element = document.elementFromPoint(x, y)

                if (element) {
                    let overlapping = false
                    const assistantContainer = document.getElementById("floating-assistant-container")
                    if (assistantContainer && !assistantContainer.contains(element)) {
                        const tagName = element.tagName
                        const isContentTag = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "IMG", "SPAN", "LI", "BUTTON", "A"].includes(tagName)
                        const hasText = element.textContent && element.textContent.trim().length > 0
                        if (isContentTag || (hasText && tagName === "DIV")) {
                            overlapping = true
                        }
                    }
                    setIsOverlapping(overlapping)
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        // Initial check
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Greeting Logic
    useEffect(() => {
        if (isVisible && !hasGreeted && !isChatOpen) {
            const timer = setTimeout(() => {
                setShowGreeting(true)
                const dismissTimer = setTimeout(() => {
                    setShowGreeting(false)
                    setHasGreeted(true)
                }, 8000)
                return () => clearTimeout(dismissTimer)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [isVisible, hasGreeted, isChatOpen])

    useEffect(() => {
        if (isChatOpen) setIsHovered(false)
    }, [isChatOpen])

    // Initial Welcome Message (Updated for Lead Form context)
    useEffect(() => {
        if (isChatOpen && messages.length === 0) {
            setMessages([
                {
                    id: "welcome",
                    role: "assistant",
                    text: "Hi there! 👋 I'm Afrith's AI assistant. To help me serve you better, could you please share a few details?"
                }
            ])
        }
    }, [isChatOpen])

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, isTyping, hasCapturedLead])

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!leadForm.name || !leadForm.phone || !leadForm.message) return

        setIsSubmittingLead(true)

        // 1. Add User's "Message" to chat history immediately
        const userMsg = leadForm.message
        const newUserMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            text: userMsg
        }
        setMessages(prev => [...prev, newUserMsg])

        // 2. Switch to Chat Mode
        setHasCapturedLead(true)
        setIsTyping(true) // Show typing immediately

        // 3. Send to API (including Name/Phone in payload if supported, or just message)
        // Note: Ideally, you'd send name/phone as metadata. For now, we'll prefix it or send context.
        // We'll proceed with sending the message to start the chat.

        await sendMessageToAPI(userMsg, `Name: ${leadForm.name}, Phone: ${leadForm.phone}`)

        setIsSubmittingLead(false)
    }

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        const userMsgText = inputValue
        const newUserMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            text: userMsgText
        }

        setMessages(prev => [...prev, newUserMsg])
        setInputValue("")
        setIsTyping(true)

        await sendMessageToAPI(userMsgText)
    }

    const sendMessageToAPI = async (message: string, context?: string) => {
        try {
            const payload = {
                type: "chat",
                message: message,
                sessionId: sessionId,
                // Add context if it's the first message (lead info)
                ...(context && { metadata: context })
            }

            const response = await fetch("https://chaithutej.app.n8n.cloud/webhook/contact-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            })

            if (response.ok) {
                const textData = await response.text()
                let replyText = ""
                try {
                    const jsonData = JSON.parse(textData)
                    replyText = jsonData.reply || jsonData.output || jsonData.message || jsonData.text || jsonData.response || jsonData.content || jsonData.answer || ""
                    if (Array.isArray(jsonData) && jsonData.length > 0) {
                        const searchItem = jsonData[0]
                        replyText = searchItem.output || searchItem.message || searchItem.text || searchItem.response || searchItem.content || searchItem.answer || ""
                    }
                } catch (e) {
                    if (!textData.trim().startsWith("<!DOCTYPE") && !textData.trim().startsWith("<html")) {
                        replyText = textData
                    }
                }

                if (replyText) {
                    const assistantMsg: Message = {
                        id: (Date.now() + 1).toString(),
                        role: "assistant",
                        text: replyText
                    }
                    setMessages(prev => [...prev, assistantMsg])
                } else {
                    const errorMsg: Message = {
                        id: Date.now().toString(),
                        role: "assistant",
                        text: "I received your message! Afrith will get back to you shortly."
                    }
                    setMessages(prev => [...prev, errorMsg])
                }
            } else {
                throw new Error("API Limit or Error")
            }
        } catch (err) {
            console.error("Failed to send chat message:", err)
            const errorMsg: Message = {
                id: Date.now().toString(),
                role: "assistant",
                text: "I seem to be offline, but I've saved your request. You can also email afrithsulthan007@gmail.com."
            }
            setMessages(prev => [...prev, errorMsg])
        } finally {
            setIsTyping(false)
        }
    }

    return (
        <div id="floating-assistant-container" className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col items-end gap-4">

            {/* Greeting/Hover Bubble Effect */}
            <AnimatePresence>
                {((showGreeting || isHovered) && isVisible && !isChatOpen) && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className="mr-2 mb-2 bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 px-5 py-4 rounded-2xl rounded-br-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[280px] pointer-events-auto"
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-indigo-50 rounded-xl border border-indigo-100">
                                <Sparkles className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                                <p className="font-bold text-sm text-slate-900 mb-1">
                                    {showGreeting ? "Hi there! 👋" : "Need assistance?"}
                                </p>
                                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                                    {showGreeting
                                        ? "I can help you navigate projects or answer questions."
                                        : "Click to chat with Afrith's AI Assistant."}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Chat Interface */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.9, transition: { duration: 0.2 } }}
                        className="pointer-events-auto w-[380px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[80vh] flex flex-col rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-200 relative"
                        style={{
                            background: "rgba(255, 255, 255, 0.95)", // White
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)"
                        }}
                    >
                        {/* Header */}
                        <div className="flex-none p-5 border-b border-slate-100 bg-white/50 backdrop-blur-xl flex items-center justify-between z-20">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 p-[2px] shadow-sm">
                                        <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                                            <img src="/images/img-removebg-preview-20-281-29.png" alt="Avatar" className="w-full h-full object-cover object-top scale-125 translate-y-1" />
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-slate-900 text-base tracking-wide">Afrith's Assistant</h3>
                                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5 opacity-90">
                                        <Sparkles size={10} className="text-indigo-500" />
                                        AI Powered
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsChatOpen(false)}
                                    className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <ChevronDown size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

                            {/* Render Messages */}
                            <div className="space-y-6">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                                    >
                                        {/* Avatar for Assistant */}
                                        {msg.role === "assistant" && (
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex-shrink-0 flex items-center justify-center border border-white/10 mt-1 shadow-sm">
                                                <Sparkles size={14} className="text-indigo-300" />
                                            </div>
                                        )}

                                        {/* Message Bubble */}
                                        <div className={`relative max-w-[85%] p-4 rounded-2xl text-[15px] leading-relaxed shadow-md
                                            ${msg.role === "assistant"
                                                ? "bg-slate-100/80 border border-slate-200 text-slate-800 rounded-tl-none backdrop-blur-sm"
                                                : "bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white rounded-tr-none shadow-lg shadow-indigo-500/20 border border-indigo-400/20"
                                            }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* LEAD CAPTURE FORM (Gatekeeper) */}
                            {!hasCapturedLead && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="mt-6 p-1"
                                >
                                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Your Name</label>
                                            <div className="relative group">
                                                <User className="absolute left-3 top-3 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                                                <input
                                                    type="text"
                                                    required
                                                    value={leadForm.name}
                                                    onChange={e => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                                                    placeholder="John Doe"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                                            <div className="relative group">
                                                <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                                                <input
                                                    type="tel"
                                                    required
                                                    value={leadForm.phone}
                                                    onChange={e => setLeadForm(prev => ({ ...prev, phone: e.target.value }))}
                                                    placeholder="+1 (555) 000-0000"
                                                    className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">How can we help?</label>
                                            <div className="relative group">
                                                <MessageSquareText className="absolute left-3 top-3 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                                                <textarea
                                                    required
                                                    rows={3}
                                                    value={leadForm.message}
                                                    onChange={e => setLeadForm(prev => ({ ...prev, message: e.target.value }))}
                                                    placeholder="I'm looking for..."
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmittingLead}
                                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-2"
                                        >
                                            {isSubmittingLead ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Start Chat
                                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-[10px] text-center text-slate-500 pt-2">
                                            Your info is safe. We just need it to get back to you.
                                        </p>
                                    </form>
                                </motion.div>
                            )}

                            {/* Typing Indicator */}
                            {isTyping && hasCapturedLead && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-3 pt-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center border border-white/10 mt-1">
                                        <Sparkles size={14} className="text-indigo-300" />
                                    </div>
                                    <div className="bg-[#1a1f3c]/80 border border-white/10 px-4 py-3.5 rounded-2xl rounded-tl-none flex items-center gap-1.5 backdrop-blur-sm">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                                            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 0 }}
                                            className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                                            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                                            className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                                            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 0.4 }}
                                            className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area - Only visible AFTER lead capture */}
                        {hasCapturedLead && (
                            <div className="p-4 bg-white/60 border-t border-slate-200 backdrop-blur-xl">
                                <form
                                    onSubmit={handleSendMessage}
                                    className="relative flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-1.5 focus-within:border-indigo-500/50 focus-within:bg-white transition-all duration-300 ring-1 ring-transparent focus-within:ring-indigo-500/20 shadow-inner"
                                >
                                    <input
                                        type="text"
                                        className="flex-1 bg-transparent border-none text-sm text-slate-900 placeholder:text-slate-400 px-3 py-2.5 focus:outline-none"
                                        placeholder="Type your message..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim() || isTyping}
                                        className="p-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/20 active:scale-95 flex items-center justify-center w-10 h-10"
                                    >
                                        <Send size={16} className={isTyping ? "opacity-0" : "opacity-100"} />
                                        {isTyping && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            </div>
                                        )}
                                    </button>
                                </form>
                                <div className="text-center mt-3">
                                    <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                                        Powered by <span className="text-indigo-500">OpenAI</span> & <span className="text-pink-500">n8n</span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <AnimatePresence>
                {isVisible && !isChatOpen && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: 20 }}
                        animate={{
                            scale: 1,
                            opacity: isOverlapping ? 0.4 : 1,
                            rotate: 0,
                            y: 0
                        }}
                        exit={{ scale: 0, opacity: 0, rotate: 20 }}
                        whileHover={{ scale: 1, translateY: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        onClick={() => setIsChatOpen(true)}
                        className="pointer-events-auto group relative cursor-pointer"
                    >
                        {/* Glow Effect behind bubble */}
                        <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                        {/* Main Chat Bubble */}
                        <div className="relative w-16 h-16 bg-[#0F172A] border border-white/5 rounded-full shadow-[0_12px_32px_rgba(15,23,42,0.18)] flex items-center justify-center overflow-hidden z-10 transition-transform duration-300">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon - Always MessageSquare */}
                            <div className="relative z-20">
                                <MessageSquare className="w-7 h-7 text-[#F8FAFC]" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Notification Dot */}
                        <div className="absolute top-0 right-0 w-4 h-4 bg-[#B11226] border-2 border-[#0F172A] rounded-full z-20 flex items-center justify-center shadow-sm">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B11226] opacity-75"></span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
