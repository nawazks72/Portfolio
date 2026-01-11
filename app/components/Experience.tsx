"use client";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "../data/info";
import { motion } from "framer-motion";

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center"
        >
          {personalInfo.experienceTitle}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfo.experience.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-background-secondary via-background to-background-secondary backdrop-blur-md rounded-xl p-6 border border-border/50 hover:border-accent-primary/50 hover:shadow-[0_0_20px_rgba(245,194,107,0.1)] transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="mb-4 min-w-[80px]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="object-contain mix-blend-lighten"
                  style={{ width: "auto", height: "auto", maxWidth: "80px", maxHeight: "80px", filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))" }}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  {card.description}
                </p>
                {card.link && (
                  <Link
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary hover:text-accent-secondary font-medium text-sm transition-colors inline-block"
                  >
                    LEARN MORE →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

