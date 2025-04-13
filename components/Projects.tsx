import React from "react";
import { SlideFadeIn } from "./SlideFadeIn";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    name: "A2-GO!",
    description:
      "An AR-based mobile game inspired by Pokémon GO, enabling users to plant and grow virtual trees at real-world landmarks.",
    technologies: ["Unity", "C#", "JIRA"],
    links: [{ label: "Video", url: "https://www.youtube.com/watch?v=example" }],
  },
  {
    name: "ritij.tech",
    description:
      "A platform for scraping and managing internship and co-op listings for the 2024-2025 school year.",
    technologies: ["Next.js", "Supabase", "BeautifulSoup"],
    links: [{ label: "Website", url: "https://www.ritij.tech" }],
  },
  {
    name: "Barterville",
    description:
      "A game where users negotiate trades with AI characters, starting with lower-value items and aiming for higher-value trades.",
    technologies: ["Next.js", "Python"],
    links: [{ label: "Website", url: "https://ai.google.dev" }],
  },
  {
    name: "Image Background Swapper",
    description:
      "A website allowing users to upload pictures and replace the background with an auto-generated background based on text queries.",
    technologies: ["PyTorch", "Flask", "Python", "Next.js"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/ritij/image-background-swapper",
      },
    ],
  },
  {
    name: "iMessage Wrapped",
    description:
      "A utility application offering insights and analytics about your iMessage usage over the past year.",
    technologies: ["PyTorch", "Flask", "Python", "Next.js"],
    links: [
      { label: "GitHub", url: "https://github.com/ritij/imessage-wrapped" },
    ],
  },
  {
    name: "Disease Predictor",
    description:
      "A disease prediction model employing machine learning to analyze data and predict diseases early.",
    technologies: ["Flask", "Pandas", "Next.js", "Numpy"],
    links: [
      { label: "GitHub", url: "https://github.com/ritij/disease-predictor" },
    ],
  },
  {
    name: "WordPress iOS - Open Source Contributions",
    description:
      "Contributed to WordPress iOS by addressing issues related to post-navigation statistics caching and unresponsive URLs.",
    technologies: ["Git", "Swift"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/ritij/wordpress-ios-contributions",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-header">
        Projects
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 h-full w-full max-w-5xl px-4">
        {projects.map((project) => (
          <SlideFadeIn key={project.name}>
            <ProjectCard
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
            />
          </SlideFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Projects;
