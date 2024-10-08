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
type Domain = {
  domain: string;
  responsibilities: string[];
};

type Content = {
  isTechnical: boolean;
  title?: string;
  description?: string;
  potentialProjects?: Project[];
  workDone?: string[];
  latestTrends?: Trend[];
  responsibilities?: string[];
  domains?: Domain[]; // Add domains for non-technical teams
};

type BentoGridProps = {
  content: Content;
  gradient: string;
};

// Data
const teamsData: Record<string, Content> = {
  GenAI: {
    isTechnical: true,

    title: "Generative AI",
    description:
      "Generative AI focuses on creating new content (image/video/text/audio) using machine learning models.",
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
      "Generated 1000+ images",
      "Trained on diverse datasets",
      "Working on 2 research papers",
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
    isTechnical: true,

    title: "Computer Vision",
    description:
      "Computer vision enables computers to interpret and understand visual information.",
    potentialProjects: [
      {
        status: "New",
        title: "Image Classification",
        description: "Develop a system to categorize images automatically.",
      },
      {
        status: "Ongoing",
        title: "Object Detection",
        description: "Build a system to identify objects in video footage.",
      },
    ],
    workDone: [
      "Trained 3 neural networks",
      "20% accuracy improvement",
      "Real-time detection system",
      "2 research papers",
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
    isTechnical: true,

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
      "Modified traditional games",
      "Working on language summarization using RL",
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
    isTechnical: true,

    title: "Natural Language Processing",
    description:
      "NLP enables computers to understand, interpret, and generate human language (texts).",
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
      "2 research papers",
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
  CommunityOutreach: {
    title: "Community Outreach",
    isTechnical: false,
    description:
      "Oversee community engagement through social media, event management, content creation, public speaking, and sponsorship outreach.",
    domains: [
      {
        domain: "Social Media Management",
        responsibilities: ["Engage with audience", "Monitor social channels", "Create engaging content on Instagram"],
      },
      {
        domain: "Event Management",
        responsibilities: [
          "Organize community events",
          "Coordinate with vendors and partners",
          "Micromanage the course of action during the time of events"
        ],
      },
      {
        domain: "Designing",
        responsibilities: [
          "Create promotional materials",
          "Design social media graphics",
        ],
      },
      {
        domain: "Public Speaking & Sponsorship Outreach",
        responsibilities: [
          "Deliver presentations at events",
          "Reach out to potential sponsors",
        ],
      },
      {
        domain: "Video Editing & Photography",
        responsibilities: [
          "Edit videos for community content",
          "Capture photos at events",
        ],
      },
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

const BentoGrid: FC<BentoGridProps> = ({ content, gradient }) => {
  if (!content.isTechnical) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Non-technical Team Overview */}
        <Card
          className={`col-span-1 md:col-span-2 lg:col-span-4 overflow-hidden ${gradient}`}
        >
          <CardHeader className="text-white flex flex-col items-center text-center p-6">
            <Users className="w-16 h-16 mb-3" />
            <CardTitle className="text-2xl mb-2">{content.title}</CardTitle>
            <CardDescription className="text-white md:text-md font-semibold">
              {content.description}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Domains and Responsibilities for Non-Technical Team */}
        {content.domains &&
          content.domains.map((domain, index) => (
            <Card
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-2 overflow-y-auto flex flex-col"
            >
              <CardHeader className="flex-shrink-0">
                <CardTitle className="flex items-center gap-2">
                  <List className="w-5 h-5" />
                  {domain.domain}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {domain.responsibilities
                    .slice(0, 5)
                    .map((responsibility, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Team Overview */}
      <Card
        className={`col-span-1 md:col-span-2 lg:col-span-4 overflow-hidden ${gradient}`}
      >
        <CardHeader className="text-white flex flex-col items-center text-center p-6">
          <Users className="w-16 h-16 mb-3" />
          <CardTitle className="text-2xl mb-2">{content.title}</CardTitle>
          <CardDescription className="text-white md:text-md font-semibold">
            {content.description}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Work Done */}
      {content.isTechnical && content.workDone && (
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
      )}

      {/* Potential Projects */}
      {content.isTechnical && content.potentialProjects && (
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
      )}

      {/* Latest Trends */}
      {content.isTechnical && content.latestTrends && (
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
      )}

      {/* Responsibilities */}
      {content.isTechnical && content.responsibilities && (
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
      )}
    </div>
  );
};

const TeamStructure: FC = () => {
  const gradients = {
    GenAI: "bg-gradient-to-r from-[#ffe259] to-[#ffa751]",
    RL: "bg-gradient-to-r from-[#EB3349] to-[#F45C43]",
    CV: "bg-gradient-to-r from-[#5433FF] via-[#20BDFF] to-[#A5FECB]",
    NLP: "bg-gradient-to-r from-[#3CA55C] to-[#B5AC49]",
    CommunityOutreach: "bg-gradient-to-r from-slate-900 to-slate-700",
  };

  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8" id="teams">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-8">
        Our Teams
      </h1>
      <Tabs defaultValue="GenAI" className="space-y-8">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-16">
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
            <BentoGrid
              content={content}
              gradient={gradients[key as keyof typeof gradients]}
            />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default TeamStructure;
