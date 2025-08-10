"use client";

import React from "react";
import TagRotator from "./TagRotator";
import SocialLinks from "./SocialLinks";

const DotIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

const coderData = {
  name: "Touhidul Islam",
  role: "Fullstack Developer",
  seniority: "junior-Level",
  location: "Bangladesh",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "CSS",
    "Figma",
    "GitHub",
    "HTML",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "Git",
  ],
};

const CoderProfileCard = () => {
  return (
    <div className="w-full mx-auto bg-gradient-to-r from-zinc-100 to-zinc-200 border-zinc-300 relative rounded-lg border shadow-lg">
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="px-4 lg:px-8 py-5 flex justify-between items-center rounded-xl bg-zinc-200">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-zinc-600 font-mono">coder.js</div>
      </div>

      <div className="overflow-hidden border-t-[2px] border-zinc-300 px-4 lg:px-8 py-4 lg:py-8 relative">
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

        <div className="relative flex">
          <div className="hidden md:flex flex-col items-end pr-4 text-zinc-600 font-mono text-xs">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="leading-relaxed select-none opacity-70">
                {i + 1}
              </div>
            ))}
          </div>

          <code className="font-mono text-xs md:text-sm lg:text-base w-full">
            <div>
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-violet-500">coder</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-zinc-600">{"{"}</span>
            </div>

            <div className="pl-6">
              <span className="text-zinc-800">name:</span>
              <span className="text-zinc-600 ">&#39;</span>
              <span className="text-green-600 ">{coderData.name}</span>
              <span className="text-zinc-600">&#39;,</span>
            </div>

            <div className="pl-6">
              <span className="text-zinc-800">role:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">{coderData.role}</span>
              <span className="text-zinc-600">&#39;,</span>
            </div>

            <div className="pl-6">
              <span className="text-zinc-800">seniority:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">{coderData.seniority}</span>
              <span className="text-zinc-600">&#39;,</span>
            </div>

            <div className="pl-6">
              <span className="text-zinc-800">location:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">{coderData.location}</span>
              <span className="text-zinc-600">&#39;,</span>
            </div>

            <div className="pl-6">
              <span className="text-zinc-800">skills:</span>
              <span className="text-zinc-600">{"["}</span>
              <div className="pl-6 flex flex-wrap">
                {coderData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span className="text-zinc-600">&#39;</span>
                    <span className="text-cyan-600">{skill}</span>
                    <span className="text-zinc-600">&#39;</span>
                    {index < coderData.skills.length - 1 && (
                      <span className="text-zinc-600">, </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-zinc-600">],</span>
            </div>

            <div>
              <span className="text-zinc-600">{"};"}</span>
            </div>
          </code>
        </div>
      </div>

      <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 pt-3 text-xs text-zinc-600 flex justify-between items-center">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
      <div className="absolute inset-0 z-0" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col gap-4 sm:gap-6 items-start text-left order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900/80 border-gray-700 rounded-full text-xs sm:text-sm  backdrop-blur-sm hover:bg-gray-800 transition-all duration-300">
              <DotIcon />
              Welcome to my universe
            </div>

            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                Hello <br />
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Touhidul Islam
                </span>
              </h1>
            </div>

           
            {/* <TagRotator></TagRotator> */}
            <SocialLinks/>


        

            
          </div>

          <div className="order-1 lg:order-2 animate-fade-in-up">
            <CoderProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Custom CSS animation
const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .hover\\:shadow-3xl:hover {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
