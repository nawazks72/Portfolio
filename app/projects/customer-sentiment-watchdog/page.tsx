"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function CustomerSentimentWatchdog() {
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
        <main className="min-h-screen bg-background selection:bg-accent-primary/30">

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
                    <div className="text-accent-primary font-bold text-xl tracking-tighter">Customer Sentiment Watchdog</div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-500/20 blur-[120px] -z-10 rounded-full mix-blend-screen" />

                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Text Content */}
                        <div className="text-left">
                            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                                Gauge Public <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent-primary">Opinion</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-xl text-text-muted max-w-xl leading-relaxed">
                                A full-stack sentiment analysis application designed to help businesses and content creators gauge public opinion in real-time.
                            </motion.p>
                        </div>

                        {/* Image Content */}
                        <motion.div
                            variants={fadeInUp}
                            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl shadow-accent-primary/20 group"
                        >
                            <Image
                                src="/projects/sentiment-watchdog.png"
                                alt="Customer Sentiment Watchdog Hero"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
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
                            <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
                            <div className="prose prose-invert text-text-muted leading-relaxed space-y-4">
                                <p>
                                    <b>Customer Sentiment Watchdog</b> is a full-stack sentiment analysis application designed to help businesses and content creators gauge public opinion in real-time.
                                </p>
                                <p>
                                    The application processes natural language from various sources—including raw text, bulk file uploads, and YouTube video comments—to determine emotional tone (Positive, Negative, Neutral). It features an interactive dashboard that visualizes sentiment trends and archives all analysis data in a structured database for historical insights.
                                </p>
                                <h3 className="text-xl font-semibold text-accent-primary pt-4">Key Features</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><b>Multi-Channel Analysis</b>: Instantly analyzes sentiment from direct text input, uploaded datasets, and social media.</li>
                                    <li><b>YouTube Integration</b>: Connects to YouTube Data API to fetch comments and calculate weighted sentiment scores.</li>
                                    <li><b>Interactive Dashboard</b>: Visual breakdown of sentiment distribution using dynamic charts.</li>
                                    <li><b>Data Persistence</b>: Logs all analysis results into a SQLite database for future reference.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-background-secondary p-8 rounded-2xl border border-border h-fit">
                            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                <div className="w-1 h-6 bg-accent-primary rounded-full" />
                                Tech Stack
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm text-accent-primary mb-2 uppercase tracking-wider font-semibold">Frontend</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["HTML5", "CSS3", "JavaScript", "AJAX"].map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-md bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider font-semibold">Backend & NLP</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Python (Flask)", "TextBlob", "NLTK", "SQLite"].map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-pink-400 mb-2 uppercase tracking-wider font-semibold">Integration</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["YouTube Data API v3", "Gunicorn", "CSV/JSON"].map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-md bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border">
                                <Link
                                    href="https://github.com/nawazks72/customer-sentiment-watchdog"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-accent-primary hover:bg-accent-primary/80 text-background font-semibold rounded-lg transition-all shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40"
                                >
                                    <Github className="w-5 h-5" />
                                    View Source Code
                                </Link>
                            </div>
                        </div>
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
                        href="https://github.com/nawazks72/customer-sentiment-watchdog"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary hover:bg-accent-primary/80 text-background font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-accent-primary/40"
                    >
                        <Github className="w-6 h-6" />
                        Visit GitHub Repository
                    </Link>
                </motion.div>
            </footer>

        </main>
    );
}
