import Image from "next/image";

export default function WhatIsAIS() {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl text-center mb-6">
        What is AI Society?
      </h2>
      <div className="flex flex-col md:flex-row justify-start text-left gap-8 md:gap-32">
        <p className="w-full md:w-1/2">
          The <span className="font-bold">Artificial Intelligence Society (AIS) </span> at Bennett University is one
          of the most research-focused and collaborative student communities on
          campus. Our mission is to foster a deep understanding of AI and its
          applications by bringing together like-minded individuals who are
          eager to learn, share knowledge, and work on innovative projects. We
          believe in building together, mentoring juniors, and creating an
          inclusive environment where everyone can grow.
        </p>

        <Image
          src="https://picsum.photos/500/300?random=1"
          width={500}
          height={500}
          alt="Logo"
          className="mx-auto md:w-1/2"
        />
      </div>
    </div>
  );
}
