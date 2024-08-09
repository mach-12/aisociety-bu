import Image from "next/image";

export default function WhatIsAIS() {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl text-center mb-6">
        What is AI Society?
      </h2>
      <div className="flex flex-col md:flex-row justify-start text-left gap-8 md:gap-32">
        <p className="text-foreground md:text-xl xl:text-2xl w-full md:w-1/2 text-center sm:text-left">
          The{" "}
          <span className="font-bold">
            Artificial Intelligence Society (AIS){" "}
          </span>{" "}
          at Bennett University is one of the most research-focused and
          collaborative student communities on campus. Our mission is to foster
          a deep understanding of AI and its applications by bringing together
          like-minded individuals who are eager to publish research, learn,
          share knowledge, and work on innovative projects. We believe in
          building together, mentoring juniors, and creating an inclusive
          environment where everyone can grow.
        </p>

        <Image
          src="/ais-group.jpg"
          width={500}
          height={500}
          alt="Logo"
          className="mx-auto md:w-1/2 lg:w-1/3 xl:w-1/3"
        />
      </div>
    </div>
  );
}
