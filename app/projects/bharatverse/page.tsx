"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function BharatVerse() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <main className="min-h-screen bg-slate-950 selection:bg-purple-500/30">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                    <div className="text-purple-400 font-bold text-xl tracking-tighter">BharatVerse</div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/20 blur-[120px] -z-10 rounded-full mix-blend-screen" />

                <motion.div
                    className="container mx-auto max-w-5xl"
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    {/* Achievement Badge */}
                    <motion.div variants={fadeInUp} className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                            </span>
                            🏆 Hackathon Finalist — Top 26 out of 500+ Teams
                        </div>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold text-center text-white mb-8 tracking-tight">
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Soul of India</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-xl text-white/70 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                        An AI-powered digital universe to explore India’s culture, heritage, and emotions. Built for the **Indiastack National Software Hackathon (NITK Surathkal)**.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 mb-20 group"
                    >
                        <Image
                            src="/projects/bharatverse-hero.png"
                            alt="BharatVerse Hero"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Overview & Tech Stack */}
            <motion.section
                className="py-20 px-6 bg-white/5"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* About */}
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-3xl font-bold text-white">Project Overview</h2>
                            <div className="prose prose-invert text-white/80 leading-relaxed space-y-4">
                                <p>
                                    India’s cultural heritage is vast but often presented in fragmented, text-heavy formats.
                                    <b>BharatVerse</b> bridges this gap by transforming cultural exploration into an immersive, emotionally resonant AI experience.
                                </p>
                                <p>
                                    We were one of the <b>Top 26 Finalists</b> in the "Build for Billions" Hackathon at NITK Surathkal, selected from over <b>513 teams</b> nationwide.
                                    Our solution aligns with the "Experience India" track, creating intelligent agents to discover and understand Indian ecology and social themes.
                                </p>
                                <h3 className="text-xl font-semibold text-purple-300 pt-4">Key Innovation</h3>
                                <p>
                                    Unlike traditional wikis, <b>BharatVerse</b> uses <b>emotion-based discovery</b>. Users explore content based on moods—serenity, celebration, curiosity—rather than just geographic locations.
                                </p>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 h-fit">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <div className="w-1 h-6 bg-purple-500 rounded-full" />
                                Tech Stack
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm text-purple-400 mb-2 uppercase tracking-wider font-semibold">Frontend</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["React", "Tailwind CSS", "Framer Motion", "Vite"].map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider font-semibold">Backend</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["FastAPI", "Python", "RESTful APIs"].map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-pink-400 mb-2 uppercase tracking-wider font-semibold">AI & Core</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["NLP", "Emotion Analysis", "Recommendation Engine"].map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-md bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <Link
                                    href="https://github.com/tasneem38/BharatVerse"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-700/40"
                                >
                                    <Github className="w-5 h-5" />
                                    View Source Code
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Features Visual Section */}
            <motion.section
                className="py-20 px-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                        What Makes BharatVerse <span className="text-purple-400">Unique?</span>
                    </h2>

                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/projects/bharatverse-features.png"
                            alt="BharatVerse Features and Unique Selling Points"
                            width={1920}
                            height={1080}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {[
                            { title: "Emotion-Driven", desc: "Explore based on feelings—serenity, joy, devotion.", icon: "🎭" },
                            { title: "AI Storytelling", desc: "Rich, poetic narratives generated for deep engagement.", icon: "📜" },
                            { title: "Immersive UI", desc: "3D interactions and heritage-inspired design.", icon: "✨" },
                            { title: "Pan-India Reach", desc: "Multilingual content accessible to everyone.", icon: "🇮🇳" }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-white/60 text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </motion.section>

            {/* Footer CTA */}
            <footer className="py-20 border-t border-purple-500/20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl text-white font-bold mb-6">Explore the Code</h2>
                    <Link
                        href="https://github.com/tasneem38/BharatVerse"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-900/40"
                    >
                        <Github className="w-6 h-6" />
                        Visit GitHub Repository
                    </Link>
                </motion.div>
            </footer>

        </main>
    );
}
