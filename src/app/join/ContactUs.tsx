import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import contentData from "@/contentData";

type Contact = {
  name: string;
  position: string;
  image: string;
  fallback: string;
  linkedin: string;
};

const contacts: Contact[] = [
  {
    name: "Samaksh Tyagi",
    position: "Chairperson",
    image: "/sam-photo.png",
    fallback: "Samaksh Tyagi",
    linkedin: "https://www.linkedin.com/in/samakshtyagi/",
  },
  {
    name: "Aviral Jain",
    position: "Vice-Chairperson",
    image: "/aviral-photo.png",
    fallback: "Aviral Jain",
    linkedin: "https://www.linkedin.com/in/aviral-jain-ba35bb258/",
  },
  {
    name: "Mann Acharya",
    position: "Mentor | Ex-Chairperson",
    image: "/mann-photo.png",
    fallback: "Mann Acharya",
    linkedin: "https://www.linkedin.com/in/mann-acharya/",
  },
];

export default function ContactUs() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
            Contact Us
          </h2>
          <Link
            href={contentData.whatsapp_link}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md bg-green-500 px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 mt-4"
            prefetch={false}
          >
            <FaWhatsapp className="mr-2 h-5 w-5" /> Join our WhatsApp community
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <Card key={index} className="flex flex-col items-center">
              <CardContent className="flex flex-col items-center gap-3 p-4 md:p-6">
                <Avatar className="w-24 h-24 md:w-32 md:h-32">
                  <AvatarImage src={contact.image} alt={contact.name} />
                  <AvatarFallback>{contact.fallback}</AvatarFallback>
                </Avatar>
                <div className="text-center flex flex-col gap-2">
                  <h4 className="text-lg font-semibold">{contact.name}</h4>
                  <p className="text-gray-500">{contact.position}</p>
                  <Link
                    href={contact.linkedin}
                    className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    prefetch={false}
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> Connect
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
