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
    question: "Who can apply for the Senior Core positions?",
    answer:
      "If you aren’t a fresher, and are in B.Tech / BCA / MCA / M. Tech, you are eligible. If you are passionate about AI, have relevant experience, and are eager to contribute to the growth of our community, you can apply. We encourage individuals with leadership qualities and a vision for the future of AIS to take part.",
  },
  {
    id: "item-2",
    question: "What is the selection criteria for the Senior Core positions?",
    answer:
      "Selection will be based on a combination of factors including your experience, skills, leadership qualities, past contributions in AI, and your vision for the role. We are looking for individuals who demonstrate a strong commitment to our mission and the ability to lead initiatives.",
  },
  {
    id: "item-3",
    question: "What are the responsibilities of a Senior Core member?",
    answer:
      "As a Senior Core member, you’ll be responsible for leading specific sub-domains within AIS, organizing events, mentoring juniors, and ensuring that our projects align with the society’s goals. You’ll play a key role in shaping the direction of AIS and its initiatives.",
  },
  {
    id: "item-4",
    question: "How can I prepare for the selection process?",
    answer:
      "there are going to be three rounds: Math,Coding skills,Aptitude. to have the best chance of clearing the interview remember to revise on AI maths like deriving the log loss etc, the coding assignment will be on kaggle as for the aptitude test your mind will do just fine :3",
  },
  {
    id: "item-5",
    question: "What can i expect as a member?",
    answer:
      "AIS is a project oriented club with an emphasis on research as well, after your selection to one of the teams you will help with events and actively make projects that may be published on our site or showcased in these events.",
  },
];

export default function FAQs() {
  return (
    <div className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32">
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
    </div>
  );
}
