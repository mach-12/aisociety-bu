import React, { FC } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, Briefcase, CheckCircle, List, TrendingDown, TrendingUp } from "lucide-react";

// Types
type Project = {
  status: string;
  title: string;
  description: string;
};

type Trend = {
  trend: string;
  direction: "up" | "down";
};

type Content = {
  title: string;
  description: string;
  potentialProjects: Project[];
  workDone: string[];
  latestTrends: Trend[];
  responsibilities: string[];
};

// Data
const teamsData: Record<string, Content> = {
  GenAI: {
    title: "Generative AI",
    description:
      "Generative AI focuses on creating new content using machine learning models.",
    potentialProjects: [
      {
        status: "New",
        title: "Text Generation System",
        description: "Develop a system that generates human-like text.",
      },
      {
        status: "Ongoing",
        title: "Image Synthesis",
        description: "Create realistic images from textual descriptions.",
      },
    ],
    workDone: [
      "Generated 100,000+ images",
      "Trained on diverse datasets",
      "Published 5 papers",
      "Industry collaborations",
    ],
    latestTrends: [
      { trend: "AI-generated art popularity", direction: "up" },
      { trend: "Manual content creation", direction: "down" },
      { trend: "AI in creative industries", direction: "up" },
    ],
    responsibilities: [
      "Develop models",
      "Train on large datasets",
      "Optimize performance",
      "Creative team collaboration",
    ],
  },
  CV: {
    title: "Computer Vision",
    description:
      "Computer vision enables computers to interpret and understand visual information.",
    potentialProjects: [
      {
        status: "New",
        title: "Image Classification",
        description: "Develop system to categorize images automatically.",
      },
      {
        status: "Ongoing",
        title: "Object Detection",
        description: "Build system to identify objects in video footage.",
      },
    ],
    workDone: [
      "Trained 5 neural networks",
      "20% accuracy improvement",
      "Real-time detection system",
      "12 research papers",
    ],
    latestTrends: [
      { trend: "Real-time processing", direction: "up" },
      { trend: "Traditional image processing", direction: "down" },
      { trend: "AI-powered analytics", direction: "up" },
    ],
    responsibilities: [
      "Develop CV strategies",
      "Manage data collection",
      "Optimize algorithms",
      "Research collaboration",
    ],
  },
  RL: {
    title: "Reinforcement Learning",
    description:
      "Reinforcement Learning involves training models to make sequences of decisions.",
    potentialProjects: [
      {
        status: "New",
        title: "Autonomous Agents",
        description: "Develop agents that can perform tasks autonomously.",
      },
      {
        status: "Ongoing",
        title: "Game Playing AI",
        description: "Create AI that can play and learn from complex games.",
      },
    ],
    workDone: [
      "Developed 3 game-playing agents",
      "15% reward efficiency increase",
      "7 research papers",
      "Gaming industry partnerships",
    ],
    latestTrends: [
      { trend: "Use in robotics", direction: "up" },
      { trend: "Manual model tuning", direction: "down" },
      { trend: "AI for optimization problems", direction: "up" },
    ],
    responsibilities: [
      "Design RL algorithms",
      "Experiment with reward structures",
      "Optimize for long-term success",
      "Application team collaboration",
    ],
  },
  NLP: {
    title: "Natural Language Processing",
    description:
      "NLP enables computers to understand, interpret, and generate human language.",
    potentialProjects: [
      {
        status: "New",
        title: "Advanced Chatbot",
        description:
          "Build a chatbot capable of nuanced, context-aware conversations.",
      },
      {
        status: "Ongoing",
        title: "Sentiment Analysis",
        description: "Develop a system to analyze complex emotions in text.",
      },
    ],
    workDone: [
      "Created 4 state-of-the-art chatbots",
      "Improved text processing speed by 30%",
      "10 research papers",
      "Collaborations with tech giants",
    ],
    latestTrends: [
      { trend: "Transformer model applications", direction: "up" },
      { trend: "Rule-based NLP systems", direction: "down" },
      { trend: "Multilingual AI models", direction: "up" },
    ],
    responsibilities: [
      "Develop cutting-edge NLP algorithms",
      "Analyze vast text datasets",
      "Optimize language models",
      "Cross-disciplinary linguistics collaboration",
    ],
  },
};

// Components
const ProjectCard: FC<{ project: Project }> = ({ project }) => (
  <div className="bg-secondary/10 p-4 rounded-lg flex items-start space-x-3">
    <Briefcase className="w-5 h-5 mt-1 flex-shrink-0" />
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Badge variant="secondary">{project.status}</Badge>
        <h4 className="font-semibold">{project.title}</h4>
      </div>
      <p className="text-sm text-muted-foreground">{project.description}</p>
    </div>
  </div>
);

const TrendItem: FC<{ trend: Trend }> = ({ trend }) => (
  <div className="flex items-center gap-2 bg-secondary/10 p-2 rounded">
    {trend.direction === "up" ? (
      <TrendingUp className="w-5 h-5 text-green-500" />
    ) : (
      <TrendingDown className="w-5 h-5 text-red-500" />
    )}
    <span className="text-sm">{trend.trend}</span>
  </div>
);

const ContentSection: FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({
  title,
  icon,
  children,
}) => (
  <Card className="h-full">
    <CardHeader className="flex flex-row items-center space-x-2">
      {icon}
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const TeamContent: FC<{ content: Content }> = ({ content }) => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{content.title}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardHeader>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ContentSection title="Potential Projects" icon={<Briefcase className="w-5 h-5" />}>
        <div className="space-y-4">
          {content.potentialProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Work Done" icon={<CheckCircle className="w-5 h-5" />}>
        <div className="flex flex-wrap gap-2">
          {content.workDone.map((work, index) => (
            <Badge key={index} variant="outline">
              {work}
            </Badge>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Latest Trends" icon={<BarChart2 className="w-5 h-5" />}>
        <div className="space-y-2">
          {content.latestTrends.map((trend, index) => (
            <TrendItem key={index} trend={trend} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Responsibilities" icon={<List className="w-5 h-5" />}>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {content.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </ContentSection>
    </div>
  </div>
);

const TeamStructure: FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12">
        Our Teams
      </h1>
      <Tabs defaultValue="GenAI" className="space-y-8">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(teamsData).map(([key]) => (
            <TabsTrigger
              key={key}
              value={key}
              className="px-4 py-2 rounded-full transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(teamsData).map(([key, content]) => (
          <TabsContent key={key} value={key} className="mx-auto max-w-5xl">
            <TeamContent content={content} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TeamStructure;