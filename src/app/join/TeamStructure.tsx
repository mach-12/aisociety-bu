import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, TrendingUp } from "lucide-react";

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

// Placeholder content for dynamic loading
const placeholderContent: Record<string, Content> = {
  GEN_AI: {
    title: "Generative AI",
    description:
      "Generative AI focuses on creating new content, such as text, images, and music, using machine learning models.",
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
      "Generated over 100,000 images",
      "Trained on diverse datasets",
      "Published 5 research papers",
      "Collaborated with industry leaders",
    ],
    latestTrends: [
      { trend: "AI-generated art is becoming popular", direction: "up" },
      { trend: "Manual content creation is declining", direction: "down" },
      { trend: "AI in creative industries is on the rise", direction: "up" },
    ],
    responsibilities: [
      "Develop generative models",
      "Train on large datasets",
      "Optimize for quality and performance",
      "Collaborate with creative teams",
    ],
  },
  CV: {
    title: "Computer Vision",
    description:
      "Computer vision is like giving eyes to computers, enabling them to see, understand, and interact with the world through images and videos.",
    potentialProjects: [
      {
        status: "New",
        title: "Image Classification System",
        description:
          "Develop an image classification system to automate the categorization of images.",
      },
      {
        status: "Ongoing",
        title: "Object Detection in Videos",
        description:
          "Build an object detection system to identify and track objects in video footage.",
      },
    ],
    workDone: [
      "Trained 5 neural networks",
      "Improved model accuracy by 20%",
      "Deployed a real-time detection system",
      "Published 12 research papers",
      "Collaborated with 3 industry partners",
    ],
    latestTrends: [
      { trend: "Real-time processing is gaining popularity", direction: "up" },
      { trend: "Traditional image processing is declining", direction: "down" },
      { trend: "AI-powered analytics is on the rise", direction: "up" },
    ],
    responsibilities: [
      "Develop and execute computer vision strategies",
      "Manage data collection and annotation",
      "Optimize algorithms for real-time performance",
      "Collaborate with research team on publications",
      "Identify and integrate with relevant datasets",
    ],
  },
  RL: {
    title: "Reinforcement Learning",
    description:
      "Reinforcement Learning involves training models to make sequences of decisions by rewarding desired behaviors.",
    potentialProjects: [
      {
        status: "New",
        title: "Autonomous Agents",
        description: "Develop agents that can perform tasks autonomously.",
      },
      {
        status: "Ongoing",
        title: "Game Playing AI",
        description: "Create AI that can play and learn from games.",
      },
    ],
    workDone: [
      "Developed 3 game-playing agents",
      "Increased reward efficiency by 15%",
      "Published 7 research papers",
      "Partnered with gaming companies",
    ],
    latestTrends: [
      { trend: "Use in robotics is increasing", direction: "up" },
      { trend: "Manual tuning of models is declining", direction: "down" },
      { trend: "AI for optimization problems is on the rise", direction: "up" },
    ],
    responsibilities: [
      "Design reinforcement learning algorithms",
      "Experiment with reward structures",
      "Optimize for long-term success",
      "Collaborate with application teams",
    ],
  },
  NLP: {
    title: "Natural Language Processing",
    description:
      "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language.",
    potentialProjects: [
      {
        status: "New",
        title: "Chatbot Development",
        description:
          "Build a chatbot that can engage in meaningful conversations.",
      },
      {
        status: "Ongoing",
        title: "Sentiment Analysis",
        description: "Develop a system to analyze the sentiment of text.",
      },
    ],
    workDone: [
      "Created 4 chatbots",
      "Enhanced text processing speed",
      "Published 10 research papers",
      "Collaborated with social media companies",
    ],
    latestTrends: [
      { trend: "Transformer models are on the rise", direction: "up" },
      { trend: "Rule-based NLP is declining", direction: "down" },
      { trend: "AI for customer service is increasing", direction: "up" },
    ],
    responsibilities: [
      "Develop NLP algorithms",
      "Analyze text data",
      "Optimize language models",
      "Collaborate with linguists",
    ],
  },
};

type DynamicCardProps = {
  content: Content;
};

const DynamicCard: FC<DynamicCardProps> = ({ content }) => {
  return (
    <Card className="w-full p-6">
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium">Potential Projects</h3>
            <div className="grid gap-4 mt-4">
              {content.potentialProjects.map((project, index) => (
                <div key={index} className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{project.status}</Badge>
                    <h4 className="text-lg font-medium">{project.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Work Done</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {content.workDone.map((work, index) => (
                <Badge key={index}>{work}</Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium">Latest Trends</h3>
            {content.latestTrends.map((trend, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                {trend.direction === "up" ? (
                  <TrendingUp className="w-5 h-5 text-green-500" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-500" />
                )}
                <span>{trend.trend}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-medium">Responsibilities</h3>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              {content.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamStructure: FC = () => {
  return (
    <div className="mx-auto py-12 md:py-24 lg:py-32 max-w-4xl px-4">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
        Teams
      </h1>
      <Tabs defaultValue="GEN-AI" className="">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="GEN-AI">GenAI</TabsTrigger>
          <TabsTrigger value="CV">CV</TabsTrigger>
          <TabsTrigger value="RL">RL</TabsTrigger>
          <TabsTrigger value="NLP">NLP</TabsTrigger>
        </TabsList>
        <TabsContent value="GEN-AI">
          <DynamicCard content={placeholderContent.GEN_AI} />
        </TabsContent>
        <TabsContent value="CV">
          <DynamicCard content={placeholderContent.CV} />
        </TabsContent>
        <TabsContent value="RL">
          <DynamicCard content={placeholderContent.RL} />
        </TabsContent>
        <TabsContent value="NLP">
          <DynamicCard content={placeholderContent.NLP} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamStructure;
