import { ProjectCard } from "../components/project-card";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function ProjectsPage() {
  const projects = [
    {
      title: "A2-GO!",
      description:
        "Developed an AR-based mobile game inspired by Pokémon GO, enabling users to plant and grow virtual trees at real-world landmarks, integrating Unity and AR Foundation for immersive gameplay. Implemented location-based mechanics to reward users with virtual seeds for exploring new landmarks, encouraging outdoor activity and engagement through gamified progression systems.",
      tags: ["Unity", "C#", "JIRA"],
      videoUrl: "https://www.youtube.com/watch?v=CvlVSmJB3rs",
    },
    {
      title: "ritij.tech",
      description:
        "This project is a comprehensive solution for scraping and managing internship and co-op listings for the 2024-2025 school year. It focuses on positions in software engineering (SWE), quantitative trading (Quant), Electrical Engineering/Hardware, and business domains. The scraper collects listings from LinkedIn, the Pitt CSC & Simplify GitHub repository, and the Ouckah & CSCareers GitHub repository. The platform also incorporates Google OAuth for seamless user management.",
      tags: ["Next.js", "Supabase", "BeautifulSoup"],
      websiteUrl: "https://www.ritij.tech/",
    },
    {
      title: "Barterville",
      description:
        "Barterville is designed to challenge users to push their creativity and persuasion skills to the limit. The core of the experience revolves around interacting with various AI characters. The goal is to negotiate trades, starting with lower-value items and working to the highest-value trades. Each decision requires careful consideration, strategic thinking, and understanding of the AI characters’ motivations and behavior.",
      tags: ["Next.js", "Python"],
      websiteUrl: "https://ai.google.dev/competition/projects/barterville",
    },
    {
      title: "Image Background Swapper",
      description:
        "Developed a website that allows users to upload pictures and replace the background with an auto-generated background. Backgrounds are generated based on user text queries. Users can download the resulting image to their device.",
      tags: ["PyTorch", "Flask", "Python", "Next.js"],
      githubUrl: "https://github.com/masterspin/BackgroundSwapping",
    },

    {
      title: "iMessage Wrapped",
      description:
        "A delightful utility application designed to offer insights and analytics about your iMessage usage over the past year. Much like Spotify Wrapped provides a summary of your music listening habits, iMessage Wrapped compiles and presents a comprehensive overview of your most frequent contacts, popular emojis, message frequency, and other intriguing statistics derived from your iMessage conversations throughout the year. Gain fascinating insights into your communication patterns and relive memorable moments as you explore your personalized iMessage journey.",
      tags: ["PyTorch", "Flask", "Python", "Next.js"],
      githubUrl: "https://github.com/masterspin/iMessageWrapped",
    },
    {
      title: "Disease Predictor",
      description:
        "Created a disease prediction model to enhance proactive healthcare. The model employs machine learning to analyze data, aiming to predict diseases early. Paired with an intuitive frontend, the model's output is presented in a user-friendly interface, offering clear insights and predictions. This frontend facilitates seamless interaction for both individuals and healthcare providers, empowering them with accessible and actionable information. The combination of accurate disease predictions and a user-friendly interface enhances early intervention, improves patient outcomes, and contributes to overall public health.",
      tags: ["Flask", "Pandas", "Next.js", "Numpy"],
      githubUrl: "https://github.com/masterspin/DiseasePredictor",
    },
    {
      title: "WordPress iOS - Open Source Contributions",
      description:
        "Addressed issues related to post-navigation statistics caching and unresponsive URLs, ensuring a smoother user experience. Contributed two accepted pull requests incorporated into version 23.8 of WordPress iOS, available on the App Store. Implemented a comprehensive Quality Assurance strategy, incorporating unit and regression testing, mocking, and style checks to thoroughly assess modifications and resolve issues while maintaining existing functionalities.",
      tags: ["Git", "Swift"],
      githubUrl: "https://github.com/wordpress-mobile/WordPress-iOS/pull/22061",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-theme-pink via-white to-theme-turquoise/20 dark:from-gray-900 dark:via-gray-800 dark:to-theme-turquoise/10">
      <Header />

      {/* Background Effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-24">
        <h1 className="mb-12 text-4xl font-bold text-center">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
