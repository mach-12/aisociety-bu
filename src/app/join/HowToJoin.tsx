import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
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
    description: "Forms for Junior Core Technical + Non-Technical positions",
    icon: "📝",
    formLink: "#",
    dates: "Were open from August 25 to September 5, 11:59 pm",
    status: "Completed",
    applications: 175,
  },
  
  {
    step: "Step 2",
    title: "Form Shortlisting",
    description:
      "Form review period where you will be judged by the form responses. AI Generated Form Responses will be rejected.",
    icon: "🔍",
    dates: "5th September-7th September",
    status: "Completed",
  },
  {
    step: "Step 3",
    title: "One-on-One Interview",
    description:
      "Candidate is interviewed on technical and soft skills.",
    icon: "🗣️",
    dates: "7th-11th September",
    status: "Ongoing",
  },
];

export default function HowToJoin() {
  return (
    <section id="process" className="mx-auto max-w-5xl py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* How to Join Section */}
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
                    Junior Core Form
                  </Link>
                )}
                {step.applications && (
                  <div className="mt-4 text-sm text-gray-500">
                    Applications: {step.applications} +
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interview Guidelines Section */}
        <section className="pt-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
            Interview Guidelines and Preparation
          </h2>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="technical">
              <AccordionTrigger>
                <h3
                  className="text-xl md:text-2xl lg:text-3xl font-semibold"
                  id="technical-guidelines"
                >
                  ❗ For Technical Positions
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc text-left pl-4 md:pl-6 text-gray-700 space-y-3 md:space-y-4">
                  <li>
                    <strong>
                      AI Generated Form Responses will be rejected in review.
                    </strong>
                  </li>

                  <li>
                    <strong>
                      Create a{" "}
                      <a
                        href="https://www.kaggle.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Kaggle account.
                      </a>
                    </strong>{" "}
                    <br></br>
                    Kaggle is a free, online community and platform for AI
                    competitions, learning, and collaboration. It is used by
                    recruiters worldwide.
                  </li>

                  {/*  */}
                  <li>
                    <strong>Mandatory Courses</strong>
                    <ul className="list-inside list-decimal pl-4 space-y-1 md:space-y-2">
                      <li>
                        Complete the following mandatory courses on Kaggle and
                        obtain the certificates. These courses are covered in
                        the YouTube course by Abhishek Thakur&apos;s&nbsp;
                        <a
                          href="https://www.youtube.com/watch?v=_55G24aghPY&list=PL98nY_tJQXZnP-k3qCDd1hljVSciDV9_N&index=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Kaggle Tutorial for Beginners
                        </a>
                        &nbsp;(World&apos;s first 4x Kaggle Grandmaster)
                      </li>
                      <li>
                        <a
                          href="https://www.kaggle.com/learn/python"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <strong>Python Course</strong>
                        </a>{" "}
                        (Mandatory)
                      </li>
                      <li>
                        <a
                          href="https://www.kaggle.com/learn/intro-to-machine-learning"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <strong>Intro to Machine Learning</strong>
                        </a>{" "}
                        (Mandatory)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Optional Courses</strong>
                    <ul className="list-inside list-decimal pl-4 space-y-1 md:space-y-2">
                      <li>
                        <a
                          href="https://www.kaggle.com/learn/intro-to-deep-learning"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <strong>Intro to Deep Learning</strong>
                        </a>{" "}
                        (Optional, recommended for advanced learners)
                      </li>
                      <li>
                        <a
                          href="https://www.kaggle.com/learn/intermediate-machine-learning"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <strong>Intermediate Machine Learning</strong>
                        </a>{" "}
                        (Optional, recommended for advanced learners)
                      </li>
                    </ul>
                  </li>

                  {/*  */}

                  <li>
                    <strong>Post Certificate on LinkedIn tagging </strong>
                    <a
                      href="https://www.linkedin.com/company/bennett-artificial-intelligence-society/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      @Artificial Intelligence Society Bennett University
                    </a>
                    , mentioning the completion of these (2) courses, and
                    include the certificate links in your post. (Optional, will
                    be considered)
                  </li>

                  <li>
                    <strong>For the interview, we will:</strong>
                    <ul className="list-inside list-disc pl-4 space-y-1 md:space-y-2">
                      <li>
                        Verify your Kaggle account and check the completion of
                        these (2) courses along with their certificates.
                      </li>
                      <li>
                        You will be asked questions regarding the Kaggle
                        courses.
                      </li>
                      <li>
                        Ask you for sure: Why do you want to join the CV / RL /
                        GenAI / NLP department? Share a problem you want to
                        solve with AI in this domain and your approach.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Bring your laptop to the interview.</strong> Ensure
                    it’s fully charged and ready to showcase your work.
                  </li>

                  <li>
                    <strong>
                      We also appreciate additional skills like Web/App
                      development, Video Editing, or Public Speaking.
                    </strong>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="community-outreach"
              id="community-outreach-guidelines"
            >
              <AccordionTrigger>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  ❗ For Community Outreach Positions
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc text-left pl-4 md:pl-6 text-gray-700 space-y-3 md:space-y-4">
                  <li>
                    <strong>Bring your laptop to the interview.</strong> Be
                    prepared to showcase your work and projects.
                  </li>
                  <li>
                    <strong>
                      If applying for Design, Video Editing, or Photography:
                    </strong>
                    <ul className="list-inside list-disc pl-4 space-y-1 md:space-y-2">
                      <li>
                        Submit your designs in the form and be ready to present
                        them during the interview. Relevant examples include
                        posters, reels, or any visual content you’ve created.
                      </li>
                      <li>Skills required: Figma, Canva, Adobe Suite, etc.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>For Social Media Management:</strong>
                    <ul className="list-inside list-disc pl-4 space-y-1 md:space-y-2">
                      <li>
                        Provide examples of pages or accounts you have managed.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>For Management/Public Relations:</strong>
                    <ul className="list-inside list-disc pl-4 space-y-1 md:space-y-2">
                      <li>
                        Your behavior, personality, and speaking skills will be
                        assessed through an on-the-spot task during the
                        interview.
                      </li>
                    </ul>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="general-guidelines" id="general-guidelines">
              <AccordionTrigger>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  ❗ General Guidelines for All Positions
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc text-left pl-4 md:pl-6 text-gray-700 space-y-3 md:space-y-4">
                  <li>
                    <strong>Be on time.</strong> Punctuality is crucial.
                  </li>
                  <li>
                    <strong>Dress appropriately.</strong> Professional attire is
                    expected.
                  </li>
                  <li>
                    <strong>
                      Bring your laptop and any necessary accessories (charger,
                      mouse, etc.).
                    </strong>{" "}
                    Ensure your laptop is fully functional and ready for use.
                  </li>
                  <li>
                    <strong>
                      Be prepared to discuss your work, skills, and experience
                      in detail.
                    </strong>
                  </li>
                  <li>
                    <strong>Showcase relevant projects.</strong> Highlight the
                    work that best represents your abilities and aligns with the
                    position you’re applying for.
                  </li>
                  <li>
                    <strong>Ask questions.</strong> Engage with the interviewers
                    by asking insightful questions about the role and
                    organization.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Join Us Badge */}
        <div className="mt-16">
          <JoinUsBadge />
        </div>
      </div>
    </section>
  );
}
