"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import { Terminal, ChevronDown } from "lucide-react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import ThemeSwitcher from "./ThemeSwitcher";

// Define sections to track
const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "clones", label: "Clones" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const handleScroll = useCallback((latest: number) => {
    setIsScrolled(latest > 40);
  }, []);

  useMotionValueEvent(scrollY, "change", handleScroll);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  // Handle navigation to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setDropdownOpen(false);
    }
  };

  // Set up intersection observer to track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find entries that are intersecting
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Sort by largest intersection ratio (most visible)
          visibleEntries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );
          const mostVisibleSection = visibleEntries[0].target.id;

          // Find the matching section in our configuration
          const section = SECTIONS.find((s) => s.id === mostVisibleSection);
          if (section) {
            setCurrentSection(section.label);
          }
        } else if (visibleEntries.length === 0 && entries.length > 0) {
          // If no sections are visible, clear the current section
          setCurrentSection(null);
        }
      },
      { threshold: [0.1, 0.5], rootMargin: "-10% 0px -70% 0px" }
    );

    // Observe each section element
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const animationDuration = 0.2;
  const effectDelayDuration = isScrolled ? 0.2 : 0;
  const formationDelayDuration = isScrolled ? 0 : 0.2;

  const transition = useMemo(
    () => ({
      type: "spring",
      stiffness: 300,
      damping: 30,
      delay: formationDelayDuration,
      boxShadow: {
        duration: animationDuration,
        delay: effectDelayDuration,
      },
      backgroundColor: {
        delay: effectDelayDuration,
        duration: animationDuration,
      },
    }),
    [formationDelayDuration, effectDelayDuration]
  );

  // Generate header text based on current section
  const headerText =
    isScrolled && currentSection ? `RJ/${currentSection}` : "RJ";

  return (
    <div className="relative w-full">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 mx-auto backdrop-blur-lg"
        initial={false}
        animate={{
          paddingLeft: isScrolled ? "1rem" : "1.5rem",
          paddingRight: isScrolled ? "1rem" : "1.5rem",
          width: isScrolled ? "80%" : "100%",
          borderRadius: isScrolled ? "70px" : "0px",
          boxShadow: isScrolled
            ? "0px 5px 15px var(--shadow)"
            : "0px 0px 0px var(--shadow)",
          backgroundColor: isScrolled ? "var(--pill)" : "var(--header)",
        }}
        transition={transition}
        style={{
          y: 10,
          paddingTop: ".5rem",
          paddingBottom: ".5rem",
          left: "50%",
          x: "-50%",
          willChange:
            "padding, width, borderRadius, boxShadow, backgroundColor",
        }}
      >
        {/* Background Border */}
        <motion.div
          className="absolute inset-0 ring-[1px] ring-border rounded-[inherit]"
          initial={false}
          animate={{
            opacity: isScrolled ? 0.95 : 0,
          }}
          transition={{
            duration: animationDuration,
            delay: effectDelayDuration,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <motion.div
              initial={false}
              animate={{
                width: isScrolled ? 35 : 45,
                height: isScrolled ? 35 : 45,
              }}
              transition={{
                duration: animationDuration,
                delay: formationDelayDuration,
              }}
            >
              <Terminal className="w-full h-full" />
            </motion.div>

            {/* Clickable header with dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 focus:outline-none"
              >
                <motion.h1
                  className="font-bold"
                  initial={false}
                  animate={{
                    fontSize: isScrolled ? "1.5rem" : "2rem",
                  }}
                  transition={{
                    duration: animationDuration,
                    delay: formationDelayDuration,
                  }}
                  style={{
                    lineHeight: 1.2,
                  }}
                >
                  {headerText}
                </motion.h1>
                <ChevronDown
                  size={isScrolled ? 16 : 20}
                  className={`transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown menu */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-border z-50"
                  >
                    <div className="py-1 rounded-md bg-background">
                      {SECTIONS.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-muted/50 transition-colors"
                        >
                          {section.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <ThemeSwitcher />
        </div>
      </motion.header>
    </div>
  );
}
