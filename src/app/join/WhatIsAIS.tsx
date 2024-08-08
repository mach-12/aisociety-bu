import Image from "next/image";

export default function WhatIsAIS() {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl text-center mb-6">
        What is AI Society?
      </h2>
      <div className="flex flex-col md:flex-row justify-start text-left gap-8 md:gap-32">
        <p className="w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus soluta
          debitis id aspernatur ipsa quidem sed nesciunt optio assumenda
          suscipit fuga quasi repellendus, vero recusandae cupiditate voluptates
          atque ipsum quibusdam reiciendis in perferendis ad. Officiis adipisci
          voluptas aperiam ipsa, earum veritatis nisi repellendus odio minus
          hic! Repellendus dolorem suscipit neque.
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          corporis esse ducimus, officiis inventore distinctio repellendus ipsa
          aperiam nam nobis facilis? Perferendis impedit laboriosam perspiciatis
          laborum possimus, atque commodi dolorem.
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
