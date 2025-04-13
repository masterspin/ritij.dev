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
      Boolean(theme?.includes("dark") || resolvedTheme?.includes("dark")),
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

// Company Data
const companies = [
  {
    name: "Microsoft",
    site: "https://www.microsoft.com",
    logoPath: "/company-logos/microsoft-logo.svg",
    position: "Incoming Software Engineering Intern",
    size: "size-6 sm:size-8 md:size-12",
  },
  {
    name: "Ford Motor Company – High Performance Computing Team",
    site: "https://www.ford.com",
    logoPath: "/company-logos/ford-logo.svg",
    position: "Systems Software Engineering Intern",
    size: "size-14 sm:size-18 md:size-24",
  },
  {
    name: "The Brix N Stones Studio - Site Management Team",
    site: "https://www.sw.siemens.com/en-US/",
    logoPath: "/company-logos/BrixNStonesLogo.jpeg",
    position: "Full-stack Developer",
    size: "size-12 sm:size-16 md:size-20",
  },

  {
    name: "Ford Motor Company – Cloud Platform Team",
    site: "https://www.ford.com",
    logoPath: "/company-logos/ford-logo.svg",
    position: "Systems Software Engineering Intern",
    size: "size-14 sm:size-18 md:size-24",
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-header">
        Experience
      </h2>
      <div className="mt-2 md:mt-1">
        {companies.map((company) => (
          <SlideFadeIn className="flex items-center gap-x-2" key={company.name}>
            <div
              className={`flex-shrink-0 size-12 sm:size-14 md:size-18 flex items-center justify-center`}
            >
              <CompanyLogo
                url={company.site}
                logoPath={company.logoPath}
                size={company.size}
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
            </div>
          </SlideFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Experience;
