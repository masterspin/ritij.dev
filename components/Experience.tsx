/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { SlideFadeIn } from "./SlideFadeIn";

// Hook to determine dark mode
const useIsDarkTheme = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(
      Boolean(theme?.includes("dark") || resolvedTheme?.includes("dark"))
    );
  }, [theme, resolvedTheme]);

  return isDark;
};

const CompanyLogo = ({
  url,
  logoPath,
  size,
  invertOnDark = false,
}: {
  url: string;
  logoPath: string;
  size: string;
  invertOnDark?: boolean;
}) => {
  const isDark = invertOnDark && useIsDarkTheme();
  return (
    <div className={`${size} flex items-center justify-center`}>
      <a href={url} target="_blank">
        <Image
          src={logoPath}
          alt="Company Logo"
          height={80}
          width={80}
          className={isDark ? "invert" : ""}
        />
      </a>
    </div>
  );
};

// Company Data with added timeline information
const companies = [
  {
    name: "Microsoft",
    site: "https://www.microsoft.com",
    logoPath: "/company-logos/microsoft-logo.svg",
    position: "Incoming Software Engineering Intern",
    size: "size-6 sm:size-8 md:size-12",
    period: "May - August 2025",
    isCurrent: true,
  },
  {
    name: "Ford Motor Company – High Performance Computing Team",
    site: "https://www.ford.com",
    logoPath: "/company-logos/ford-logo.svg",
    position: "Systems Software Engineering Intern",
    size: "size-14 sm:size-18 md:size-24",
    period: "May - August 2024",
  },
  {
    name: "The Brix N Stones Studio - Site Management Team",
    site: "https://brixnstones.in/",
    logoPath: "/company-logos/BrixNStonesLogo.jpeg",
    position: "Full-stack Developer",
    size: "size-12 sm:size-16 md:size-20",
    period: "January - April 2024",
  },
  {
    name: "Ford Motor Company – Cloud Platform Team",
    site: "https://www.ford.com",
    logoPath: "/company-logos/ford-logo.svg",
    position: "Systems Software Engineering Intern",
    size: "size-14 sm:size-18 md:size-24",
    period: "May - August 2023",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col items-center w-full">
      <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-header mb-8">
        Experience
      </h2>

      <div className="relative w-full max-w-3xl">
        {/* Timeline vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

        {companies.map((company, index) => (
          <SlideFadeIn key={company.name} className="relative mb-12 md:mb-16">
            {/* Timeline dot */}
            <div
              className={`absolute left-8 md:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 border-4 border-background ${
                company.isCurrent ? "bg-primary" : "bg-muted-foreground"
              }`}
            ></div>

            <div
              className={`ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8 ${
                index % 2 === 0 ? "" : "md:flex md:flex-col-reverse"
              }`}
            >
              {/* Date badge */}
              <div
                className={`mb-2 md:mb-0 ${
                  index % 2 === 0
                    ? "md:text-right md:pr-8"
                    : "md:pl-8 md:col-start-2"
                }`}
              ></div>

              {/* Company details */}
              <div
                className={`${
                  index % 2 === 0
                    ? "md:pl-8 md:col-start-2"
                    : "md:text-right md:pr-8 md:col-start-1 md:row-start-1"
                }`}
              >
                <div
                  className={`flex items-center gap-4 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-shrink-0">
                    <CompanyLogo
                      url={company.site}
                      logoPath={company.logoPath}
                      size={company.size}
                      // invertOnDark={true}
                    />
                  </div>
                  <div>
                    <a
                      className="font-semibold underline-fade text-base sm:text-xl md:text-xl xl:text-2xl break-words hover:underline"
                      href={company.site}
                      target="_blank"
                    >
                      {company.name}
                    </a>
                    <h3 className="text-xs sm:text-base md:text-sm xl:text-base text-muted">
                      {company.position}
                    </h3>
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-secondary/10 text-muted-foreground">
                      {company.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SlideFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Experience;
