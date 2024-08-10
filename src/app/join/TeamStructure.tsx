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
import {
  BarChart2,
  Briefcase,
  CheckCircle,
  List,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

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
  <Card className="flex flex-col h-full">
    <CardHeader className="flex-shrink-0">
      <div className="flex items-center justify-between mb-2">
        <Badge variant="secondary">{project.status}</Badge>
        <Briefcase className="w-5 h-5" />
      </div>
      <CardTitle className="text-lg">{project.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-sm text-muted-foreground">{project.description}</p>
    </CardContent>
  </Card>
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

const BentoGrid: FC<{ content: Content }> = ({ content }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Team Overview */}
    <Card className="col-span-1 md:col-span-2 lg:col-span-4 overflow-hidden bg-gradient-to-r from-primary to-primary-foreground">
      <CardHeader className="text-white flex flex-col items-center text-center p-6">
        <Users className="w-16 h-16 mb-3" />
        <CardTitle className="text-2xl mb-2">{content.title}</CardTitle>
        <CardDescription className="text-white/80">
          {content.description}
        </CardDescription>
      </CardHeader>
    </Card>

    {/* Work Done */}
    <Card className="col-span-1 md:col-span-2 lg:col-span-2 overflow-y-auto flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Work Done
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {content.workDone.map((work, index) => (
            <Badge key={index} variant="outline">
              {work}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Potential Projects */}
    <Card className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Potential Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        <div className="grid grid-cols-1 gap-4">
          {content.potentialProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Latest Trends */}
    <Card className="col-span-1 md:col-span-1 lg:col-span-1 overflow-y-auto flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex items-center gap-2">
          <BarChart2 className="w-5 h-5" />
          Latest Trends
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-2">
        {content.latestTrends.map((trend, index) => (
          <TrendItem key={index} trend={trend} />
        ))}
      </CardContent>
    </Card>

    {/* Responsibilities */}
    <Card className="col-span-1 md:col-span-1 lg:col-span-1 overflow-y-auto flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex items-center gap-2">
          <List className="w-5 h-5" />
          Responsibilities
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {content.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
);

const TeamStructure: FC = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-8">
        Our Teams
      </h1>
      <Tabs defaultValue="GenAI" className="space-y-8">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(teamsData).map(([key]) => (
            <TabsTrigger
              key={key}
              value={key}
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(teamsData).map(([key, content]) => (
          <TabsContent key={key} value={key} className="mx-auto max-w-7xl">
            <BentoGrid content={content} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TeamStructure;
