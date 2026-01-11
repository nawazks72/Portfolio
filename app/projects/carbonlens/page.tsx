"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function CarbonLens() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.0 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <main className="min-h-screen bg-background selection:bg-accent-secondary/30">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-text-muted hover:text-foreground transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                    <div className="text-accent-secondary font-bold text-xl tracking-tighter">CarbonLens</div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent-secondary/20 blur-[120px] -z-10 rounded-full mix-blend-screen" />

                <motion.div
                    className="container mx-auto max-w-5xl"
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    {/* Achievement Badge */}
                    <motion.div variants={fadeInUp} className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/30 text-accent-secondary text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary"></span>
                            </span>
                            🏆 Ideathon Finalist (Top 100+ Teams)
                        </div>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold text-center text-foreground mb-8 tracking-tight">
                        Track. Understand. <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent-primary">Reduce.</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-xl text-text-muted text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                        An AI-driven Personal Carbon Footprint Analyzer & Green Lifestyle Assistant. Built for smarter, greener living.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl shadow-accent-secondary/20 mb-20 group"
                    >
                        <Image
                            src="/projects/carbonlens-3.png"
                            alt="CarbonLens Hero"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Overview & Tech Stack */}
            <motion.section
                className="py-20 px-6 bg-background-secondary"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* About */}
                        <div className="lg:col-span-2 space-y-8">
                            <motion.h2
                                className="text-3xl font-bold text-foreground"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                Project Overview
                            </motion.h2>
                            <div className="prose prose-invert text-text-muted leading-relaxed space-y-4">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <b>CarbonLens</b> is a smart, interactive platform designed to help users visualize their environmental impact.
                                    Users can track their real emissions from lifestyle inputs (Energy, Travel, Food) and receive personalized, AI-generated green tips.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    We were selected for the <b>Final Round</b> of a major Ideathon, ranking among the top 100 teams.
                                    Our unified ecosystem combines a footprint analyzer, a real-time "What-If" simulator, and gamified leaderboards to motivate sustainable behavior.
                                </motion.p>
                                <motion.h3
                                    className="text-xl font-semibold text-accent-secondary pt-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Key Innovation
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    Beyond simple tracking, CarbonLens acts as a <b>Sustainability Coach</b>. It uses Llama-3.1 AI models to provide context-aware recommendations and emotional storytelling ("Why It Matters" mode) to drive real lifestyle changes.
                                </motion.p>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <motion.div
                            className="bg-background-secondary p-8 rounded-2xl border border-border h-fit"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <div className="w-1 h-6 bg-accent-secondary rounded-full" />
                                Tech Stack
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm text-accent-secondary mb-2 uppercase tracking-wider font-semibold">Frontend</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Streamlit", "Neon Aesthetics", "Interactive Charts"].map((tech, i) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 rounded-md bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-sm"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1, duration: 0.3 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider font-semibold">Backend</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["FastAPI", "Python", "SQLAlchemy", "SQLite"].map((tech, i) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1, duration: 0.3 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-yellow-400 mb-2 uppercase tracking-wider font-semibold">AI & Integration</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Llama 3.1", "Groq API", "Recommendation Engine"].map((tech, i) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1, duration: 0.3 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border">
                                <Link
                                    href="https://github.com/tasneem38/CarbonLens1"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-accent-secondary hover:bg-accent-secondary/80 text-background font-semibold rounded-lg transition-all shadow-lg shadow-accent-secondary/20 hover:shadow-accent-secondary/40"
                                >
                                    <Github className="w-5 h-5" />
                                    View Source Code
                                </Link>
                            </div>
                        </motion.div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
                        Core Features: A <span className="text-accent-secondary">Unified Ecosystem</span>
                    </h2>

                    <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-2xl">
                        <Image
                            src="/projects/carbonlens-1.png"
                            alt="CarbonLens Core Features"
                            width={1920}
                            height={1080}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="mt-12 relative w-full rounded-2xl overflow-hidden border border-border shadow-2xl">
                        <Image
                            src="/projects/carbonlens-2.png"
                            alt="CarbonLens UI Vision"
                            width={1920}
                            height={1080}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {[
                            { title: "Lifestyle Analyzer", desc: "Track CO₂ from Energy, Travel, and Food.", icon: "🌱" },
                            { title: "AI Coach", desc: "Get personalized green tips powered by Llama-3.1.", icon: "🤖" },
                            { title: "What-If Simulator", desc: "Simulate lifestyle changes and see impact.", icon: "⚡" },
                            { title: "Gamified Goals", desc: "Earn badges and compete on the leaderboard.", icon: "🏆" }
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
            <footer className="py-20 border-t border-border text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl text-foreground font-bold mb-6">Explore the Code</h2>
                    <Link
                        href="https://github.com/tasneem38/CarbonLens1"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent-secondary hover:bg-accent-secondary/80 text-background font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-accent-secondary/40"
                    >
                        <Github className="w-6 h-6" />
                        Visit GitHub Repository
                    </Link>
                </motion.div>
            </footer>

        </main>
    );
}
