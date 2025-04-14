"use client";

import React from "react";
import { SlideFadeIn } from "./SlideFadeIn";

const education = [
  {
    school: "University of Michigan",
    college: "Rachkham Graduate School",
    degree: "M.S.E. in Computer Science",
    logoPath: "/company-logos/um.png",
    period: "January 2025 – December 2025",
    size: "size-14 sm:size-18 md:size-24",
  },
  {
    school: "University of Michigan",
    college: "College of Engineering",
    degree: "B.S.E. in Computer Science",
    logoPath: "/company-logos/um.png",
    period: "August 2022 – December 2024",
    size: "size-14 sm:size-18 md:size-24",
  },
];

const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col items-center w-full mt-16 mb-20"
    >
      <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-header mb-12">
        Education
      </h2>

      <div className="relative w-full max-w-4xl px-4">
        {/* Vertical line spine */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 z-0"></div> */}

        <div className="flex flex-col gap-16 z-10">
          {education.map((edu) => (
            <SlideFadeIn key={edu.school + edu.period}>
              <div className="flex justify-center">
                <div className="w-full max-w-4xl bg-card/50 backdrop-blur-sm rounded-lg transition-all duration-300 p-6 md:p-8 border bg-white dark:bg-gray-800">
                  <div className="flex items-center gap-6">
                    <img
                      src={edu.logoPath}
                      alt={`${edu.school} Logo`}
                      className={`${edu.size} object-contain`}
                    />
                    <div>
                      <h3 className="font-semibold text-lg sm:text-2xl">
                        {edu.school}
                      </h3>
                      <h4 className="font-medium text-sm sm:text-lg italic mt-1 mb-2">
                        {edu.college}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {edu.degree}
                      </p>
                      <div className="mt-2">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-sm text-muted-foreground">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
