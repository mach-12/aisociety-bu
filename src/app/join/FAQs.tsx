import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    id: "item-1",
    question: "Who can apply for the Junior Core positions?",
    answer:
      "If you aren’t a fresher, and are in B.Tech / BCA, you are eligible. If you are passionate about AI, have relevant experience, and are eager to contribute to the growth of our community, you can apply. We encourage individuals with passion and dedication as well as a vision for the future of AIS to take part.",
  },
  {
    id: "item-2",
    question: "What are the selection criteria for the Junior Core positions?",
    answer:
      "Selection will be based on a combination of factors including your experience, skills, personal qualities, past contributions in AI, and your vision for the role. We are looking for individuals who demonstrate a strong commitment to our mission and the ability to contribute to the initiatives.",
  },
  {
    id: "item-3",
    question: "What are the responsibilities of a Junior Core member?",
    answer:
      "As a Junior Core member, you’ll be responsible for contributing to specific sub-domains within AIS, organizing events, mentoring juniors, and ensuring that our projects/events align with the society’s goals. You’ll play a key role in shaping the direction of AIS and its initiatives.",
  },
  {
    id: "item-4",
    question: "How can I prepare for the selection process?",
    answer:
      "Check the interview guidelines given above. For Technical Teams, you need to complete two courses on AI and Python on Kaggle. For Community Outreach, You will showcase your work and speaking skills depending on your domain.",
  },
  {
    id: "item-5",
    question: "Do I have to complete both mandatory Kaggle courses if I am applying for Techincal Role?",
    answer: 
      "Yes, completion of the Python Course and Intro to Machine Learning course on Kaggle is mandatory. These will be verified during the interview. While the Kaggle courses are essential, the interview will also cover your interest in the specific department (CV, RL, GenAI, NLP), your problem-solving approach in AI, and any additional skills you possess.",
  },

  {
    id: "item-6",
    question: "What can I expect as a member?",
    answer:
      "AIS is a project-oriented club with an emphasis on research as well, after your selection to one of the teams you will help with events and actively make projects that may be published on our site or showcased in these events.",
  },
];

export default function FAQs() {
  return (
    <section className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32" id='faq'>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full text-left">
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
