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
    team: "",
    site: "https://www.microsoft.com",
    logoPath: "/company-logos/microsoft-logo.svg",
    position: "Software Engineer Intern",
    size: "size-6 sm:size-8 md:size-12",
    period: "May - August 2025",
    description: "",
    isCurrent: true,
  },
  {
    name: "Ford Motor Company",
    team: "High Performance Computing Team",
    site: "https://www.ford.com",
    logoPath: "/company-logos/ford-logo.svg",
    position: "Software Engineer Intern",
    size: "size-14 sm:size-18 md:size-24",
    description:
      "Optimized APIs to support computationally intensive workloads within a distributed system\nRevamped APIs to support JSON input\nDecommissioned the use of safe shell for safety and security\nIntegration tests with code coverage\nBlue/green deployments",
    period: "May - August 2024",
  },
  {
    name: "The Brix N Stones Studio",
    team: "Site Management Team",
    site: "https://brixnstones.in/",
    logoPath: "/company-logos/BrixNStonesLogo.jpeg",
    position: "Full-stack Developer",
    size: "size-12 sm:size-16 md:size-20",
    description: "UX\nSEO\nAdmin Interface\nIntegrated email forms",
    period: "July - August 2023",
  },
  {
    name: "Ford Motor Company",
    team: "Cloud Platform Team",
    site: "https://www.ford.com",
    logoPath: "/company-logos/ford-logo.svg",
    position: "Software Engineer Intern",
    size: "size-14 sm:size-18 md:size-24",
    description:
      'Reverse engineering tooling built on an open-source service to improve project comprehension\nVisualized Terraform’s interactions with GCP given a GitHub repository\nIntegrated containerized API services with backstage.io\n"Most Viable Award" for Innovation Challenge\n"Future Mobility Achiever" for City of Tomorrow Challenge',
    period: "May - August 2023",
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center w-full mt-16 mb-20 px-4"
    >
      <h2 className="text-4xl sm:text-5xl font-header mb-12">Experience</h2>

      {/* 📱 Mobile View */}
      <div className="flex flex-col gap-6 sm:hidden w-full">
        {companies.map((company) => (
          <div
            key={company.name + company.period}
            className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border bg-white dark:bg-gray-800 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-3">
              <CompanyLogo
                url={company.site}
                logoPath={company.logoPath}
                size="w-12 h-12"
                invertOnDark={false}
              />
              <div>
                <h3 className="text-lg font-semibold">{company.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {company.position}
                </p>
                <div className="mt-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-xs text-muted-foreground">
                    {company.period}
                  </span>
                </div>
              </div>
            </div>
            {company.team && (
              <h4 className="font-medium text-sm mb-1">{company.team}</h4>
            )}
            {company.description ? (
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                {company.description
                  .split("\n")
                  .map(
                    (line, i) => line.trim() && <li key={i}>{line.trim()}</li>
                  )}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                {company.isCurrent
                  ? "Upcoming position"
                  : "Details coming soon"}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* 🖥 Desktop Timeline View */}
      <div className="hidden sm:block relative w-full max-w-6xl">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

        {companies.map((company) => (
          <SlideFadeIn
            key={company.name + company.period}
            className="relative mb-16 flex items-center"
          >
            {/* Left card */}
            <div className="w-1/2 pr-8 flex justify-end">
              <div className="w-full md:w-[320px] p-4 md:p-6 bg-card/50 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <CompanyLogo
                    url={company.site}
                    logoPath={company.logoPath}
                    size={company.size}
                    invertOnDark={false}
                  />
                  <div className="flex-grow min-w-0">
                    <h3 className="font-semibold text-base sm:text-xl break-words">
                      {company.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {company.position}
                    </p>
                    <div className="mt-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-xs text-muted-foreground">
                        {company.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
              <div className="w-4 h-4 bg-background border-2 border-gray-300 dark:border-gray-600 rounded-full shadow-sm">
                {company.isCurrent && (
                  <div className="absolute -inset-1 animate-ping rounded-full bg-blue-500/60" />
                )}
              </div>
            </div>

            {/* Right card */}
            <div className="w-1/2 pl-8 flex items-start">
              <div className="w-full p-4 md:p-6 bg-card/50 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300">
                {company.team && (
                  <h4 className="font-medium mb-2 text-sm sm:text-base">
                    {company.team}
                  </h4>
                )}
                {company.description ? (
                  <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-1">
                    {company.description
                      .split("\n")
                      .map(
                        (line, index) =>
                          line.trim() && <li key={index}>{line.trim()}</li>
                      )}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    {company.isCurrent
                      ? "Upcoming position"
                      : "Details coming soon"}
                  </p>
                )}
              </div>
            </div>
          </SlideFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Experience;
