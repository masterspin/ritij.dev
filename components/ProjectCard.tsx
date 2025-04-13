import React from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  links: { label: string; url: string }[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  technologies,
  links,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800 h-full flex flex-col justify-between">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
