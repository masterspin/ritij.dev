import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Youtube, Github, Instagram, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  instagramUrl?: string;
  websiteUrl?: string;
  videoUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  instagramUrl,
  websiteUrl,
  videoUrl,
}: ProjectCardProps) {
  return (
    <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        {(githubUrl || instagramUrl || websiteUrl || videoUrl) && (
          <div className="flex gap-2 mt-4">
            {githubUrl && (
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            )}
            {instagramUrl && (
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
            )}
            {websiteUrl && (
              <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Website</span>
                </Button>
              </Link>
            )}
            {videoUrl && (
              <Link href={videoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">Video</span>
                </Button>
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
