import { Card, CardContent } from "@/components/ui/card";
import { BrixNStonesIcon } from "./icons";
import { SiFord } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

export function WorkExperience() {
  const experiences = [
    {
      logo: (
        <a
          href="https://microsoft.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMicrosoft className="h-12 w-12" />
        </a>
      ),
      company: "Microsoft",
      team: "",
      title: "Incoming Software Engineering Intern",
    },
    {
      logo: (
        <a href="https://ford.com/" target="_blank" rel="noopener noreferrer">
          <SiFord className="h-12 w-12 text-[#0072CE]" />
        </a>
      ),
      company: "Ford Motor Company",
      team: "High Performance Computing Team",
      title: "Software Engineering Intern",
    },
    {
      logo: <BrixNStonesIcon url="https://brixnstones.in/" className="" />,
      company: "The Brix N Stones Studio",
      team: "Site Management Team",
      title: "Full-stack Developer",
    },
    {
      logo: (
        <a href="https://ford.com/" target="_blank" rel="noopener noreferrer">
          <SiFord className="h-12 w-12 text-[#0072CE]" />
        </a>
      ),
      company: "Ford Motor Company",
      team: "Cloud Platform Team",
      title: "Software Engineering Intern",
    },
  ];

  return (
    <div className="space-y-3">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm w-full max-w-xl"
        >
          <CardContent className="flex items-center py-4 px-6">
            <div className="mr-4">{exp.logo}</div>
            <div>
              <h4 className="font-bold text-xl text-gray-800 dark:text-gray-100">
                {exp.company}
              </h4>
              <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100">
                {exp.team}
              </h2>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                {exp.title}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
