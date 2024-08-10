import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import contentData from "@/contentData";
import JoinUsBadge from "./JoinUsBadge";

type Step = {
  step: string;
  title: string;
  description: string;
  avatar: string;
  fallback: string;
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
    avatar: "/form-avatar.jpg",
    fallback: "F1",
    formLink: "#",
    dates: "9th-12th August (till noon)",
    status: "Ongoing",
    applications: 120,
  },
  {
    step: "Step 2",
    title: "Form Shortlisting",
    description:
      "Form review period where you will be judged by the form responses.",
    avatar: "/shortlist-avatar.jpg",
    fallback: "F2",
    dates: "11th-12th August",
    status: "Upcoming",
  },
  {
    step: "Step 3",
    title: "One-on-One Interview",
    description:
      "Candidate is interviewed on technical and collaborative skills.",
    avatar: "/interview-avatar.jpg",
    fallback: "F3",
    dates: "12-13th August",
    status: "Upcoming",
  },
];

export default function HowToJoin() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
            How to Join
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center gap-4 p-4 md:p-8">
                <div className="text-center">
                  <h5 className="text-md font-medium">{step.step}</h5>
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>

              
                  {step.formLink && (
                    <Link
                      href={contentData.form_link}
                      target="_blank"
                      className="cursor-pointer mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Senior Core Form
                    </Link>
                  )}
                  <p className="text-sm font-medium mt-2">{step.dates}</p>
                  <Badge className="mt-2">{step.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <JoinUsBadge />
      </div>
    </section>
  );
}
