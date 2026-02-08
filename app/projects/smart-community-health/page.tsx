"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function SmartCommunityHealth() {
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
                    <div className="text-accent-primary font-bold text-xl tracking-tighter">Smart Community Health</div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-green-500/20 blur-[120px] -z-10 rounded-full mix-blend-screen" />

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
                                Empowering Rural <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-accent-primary">Healthcare</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-xl text-text-muted max-w-xl leading-relaxed">
                                An offline-first AI-powered community health surveillance application designed for efficient reporting and alerts in rural areas.
                            </motion.p>
                        </div>

                        {/* Image Content */}
                        <motion.div
                            variants={fadeInUp}
                            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl shadow-accent-primary/20 group"
                        >
                            <Image
                                src="/projects/smart-health.png"
                                alt="Smart Community Health Hero"
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
                                    Rural healthcare workers often face connectivity challenges that hinder real-time reporting. <b>Smart Community Health</b> addresses this by providing an offline-first solution.
                                </p>
                                <p>
                                    This application enables community health workers to record patient data, track symptoms, and receive AI-driven alerts for potential disease outbreaks, even without an active internet connection. Data syncs automatically when connectivity is restored.
                                </p>
                                <h3 className="text-xl font-semibold text-accent-primary pt-4">Key Features</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><b>Offline-First Architecture</b>: Seamless operation in low-connectivity zones.</li>
                                    <li><b>AI Health Alerts</b>: Early warning system for potential outbreaks based on symptom patterns.</li>
                                    <li><b>Secure Data Sync</b>: Encrypted synchronization prevents data loss.</li>
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
                                    <div className="text-sm text-accent-primary mb-2 uppercase tracking-wider font-semibold">Core</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["TypeScript", "React Native", "Expo"].map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-md bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider font-semibold">Data & Backend</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Node.js", "MongoDB", "PouchDB (Offline)"].map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border">
                                <Link
                                    href="https://github.com/nawazks72/Smart-Community-Health"
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
                        href="https://github.com/nawazks72/Smart-Community-Health"
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
