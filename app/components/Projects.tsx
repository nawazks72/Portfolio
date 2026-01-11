"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "CarbonLens – AI Eco-Tracker",
    description: "An AI-powered personal footprint analyzer that uses Llama-3.1 to provide personalized sustainability coaching. Features a neon-aesthetic dashboard, real-time emission tracking, and 'What-If' scenarios to help users understand and reduce their environmental impact.",
    link: "/projects/carbonlens",
    image: "/projects/carbonlens-3.png",
  },
  {
    id: 2,
    title: "BharatVerse – Virtual Heritage",
    description: "A secure, immersive virtual environment designed to showcase India's digital heritage. Selected as a Top 26 Finalist in a national hackathon, it features 3D navigation and interactive cultural storytelling.",
    link: "/projects/bharatverse",
    image: "/projects/bharatverse-hero.png",
  },
  {
    id: 3,
    title: "Smart Community Health – AI Analytics",
    description: "A comprehensive health tracking initiative leveraging public data to improve local health monitoring. Features interactive maps, heart rate trend analysis, and predictive community health metrics visualized in a futuristic dashboard.",
    link: "https://github.com/tasneem38/smart-community-health",
    image: "/projects/smart-health.png",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? "lg:grid-flow-dense" : ""
                }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  {/* Description Card - extends over image */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                      }`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {/* Website link */}
                  {project.link && (
                    <div className="flex gap-4">
                      <Link
                        href={project.link}
                        className="group flex items-center gap-2 text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="View Project Details"
                      >
                        <span className="font-medium">View Case Study</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
