import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import contentData from "@/contentData";
import JoinUsBadge from "./JoinUsBadge";

type Step = {
  step: string;
  title: string;
  description: string;
  icon: string;
  formLink?: string;
  dates: string;
  status: string;
  applications?: number;
};

const steps: Step[] = [
  {
    step: "Step 1",
    title: "Fill the Form",
    description: "Forms are currently Open for Senior Core.",
    icon: "📝",
    formLink: "#",
    dates: "9th-12th August (till noon)",
    status: "Ongoing",
    applications: 60,
  },
  {
    step: "Step 2",
    title: "Form Shortlisting",
    description:
      "Form review period where you will be judged by the form responses.",
    icon: "🔍",
    dates: "11th-12th August",
    status: "Upcoming",
  },
  {
    step: "Step 3",
    title: "One-on-One Interview",
    description:
      "Candidate is interviewed on technical and collaborative skills.",
    icon: "🗣️",
    dates: "12-13th August",
    status: "Upcoming",
  },
];

export default function HowToJoin() {
  return (
    <section className="mx-auto max-w-5xl py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How to Join</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 border-2 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{step.icon}</span>
                  <Badge
                    variant={
                      step.status === "Ongoing" ? "default" : "secondary"
                    }
                  >
                    {step.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="text-sm text-gray-500 mb-4">{step.dates}</div>
                {step.formLink && (
                  <Link
                    href={contentData.form_link}
                    target="_blank"
                    className="inline-block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                    prefetch={false}
                  >
                    Senior Core Form
                  </Link>
                )}
                {step.applications && (
                  <div className="mt-4 text-sm text-gray-500">
                    Applications: {step.applications}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <JoinUsBadge />
        </div>
      </div>
    </section>
  );
}
