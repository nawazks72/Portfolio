"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { personalInfo } from "../data/info";

export default function Banner(): React.JSX.Element {
  const texts = personalInfo.jobTitles;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden  -top-150 z-10">
                <div className="relative inline-block ">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-400">{personalInfo.name}</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>
              <div className="relative">
                {/* Glow effect behind the image */}
                <div
                  className="absolute inset-0 bg-purple-600 rounded-full blur-[80px] opacity-60 transform scale-100"
                  style={{ zIndex: 0 }}
                ></div>

                <Image
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - Software Engineer`}
                  width={460}
                  height={460}
                  className="w-[350px] h-[350px] lg:w-[460px] lg:h-[460px] object-cover relative z-10 drop-shadow-2xl rounded-full border-2 border-white/10"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute "
                style={{ left: "-100px", top: "-50px", width: "auto", height: "auto" }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">
                  Hello! I Am{" "}
                  <span className="text-purple-400">{personalInfo.name}</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div className="">
              <p className="text-2xl"> {personalInfo.banner.intro} </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                {personalInfo.banner.titlePart1}
                <br /> {personalInfo.banner.titlePart2}{" "}
                <span className="relative inline-block">
                  <Image src="/assets/circle.png" alt="Circle" width={200} height={200} className="absolute mt-2" />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    {personalInfo.banner.titleHighlight}
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md text-white/80">
                {personalInfo.banner.description}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>{personalInfo.currentRole.text}</span>
          </p>
          <p className="text-lg text-white/80 max-w-2xl mt-15 mx-auto lg:mx-0">
            {personalInfo.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
