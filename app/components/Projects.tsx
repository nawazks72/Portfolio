"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { personalInfo } from "../data/info";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-accent-primary text-lg lg:text-xl font-medium">
              Explore my latest work
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalInfo.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-accent-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,194,107,0.1)]"
            >
              {/* Image Header */}
              <div className="relative w-full h-48 overflow-hidden">
                <div className="absolute inset-0 bg-accent-primary/10 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                  {project.description}
                </p>

                {project.link && (
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <Link
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : "_self"}
                      rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-accent-primary font-medium hover:text-accent-secondary transition-colors"
                    >
                      <span>View Project</span>
                      <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
