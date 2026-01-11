"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "../data/info";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center mb-16">
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute inset-0 bg-background/10 z-10"></div> {/* Optional overlay for tone matching */}
          <Image
            src="/assets/illustration-new.png"
            alt="Skills"
            width={800}
            height={800}
            className="object-cover mx-auto"
            style={{
              width: "auto",
              height: "auto",
              maskImage: "radial-gradient(circle, black 40%, transparent 95%)",
              WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 95%)"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
