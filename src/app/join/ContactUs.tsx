import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type Contact = {
  name: string;
  position: string;
  image: string;
  fallback: string;
  linkedin: string;
};

const contacts: Contact[] = [
  {
    name: "John Doe",
    position: "CEO",
    image: "/placeholder-user.jpg",
    fallback: "JD",
    linkedin: "#",
  },
  {
    name: "Jane Smith",
    position: "Marketing Manager",
    image: "/placeholder-user.jpg",
    fallback: "JS",
    linkedin: "#",
  },
  {
    name: "Michael Johnson",
    position: "Sales Representative",
    image: "/placeholder-user.jpg",
    fallback: "MJ",
    linkedin: "#",
  },
];

export default function ContactUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-8 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
            Contact Us
          </h2>
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <FaWhatsapp className="mr-2 h-5 w-5" /> Join our WhatsApp community
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center gap-4 p-4 md:p-8">
                <Avatar>
                  <AvatarImage src={contact.image} alt={contact.name} />
                  <AvatarFallback>{contact.fallback}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-semibold">{contact.name}</h4>
                  <p className="text-muted-foreground">{contact.position}</p>
                  <Link
                    href={contact.linkedin}
                    className="my-4 inline-flex h-8 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
