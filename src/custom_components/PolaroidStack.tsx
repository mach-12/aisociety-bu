import React from 'react';
import Image from 'next/image';

interface PolaroidProps {
src: string;
alt: string;
rotation?: number;
}

const Polaroid: React.FC<PolaroidProps> = ({ src, alt, rotation = 0 }) => (
<div
  className="absolute bg-white p-2 shadow-md"
  style={{
    transform: `rotate(${rotation}deg)`,
    width: '300px',
    height: '300px',
  }}
>
  <Image src={src} alt={alt} width={280} height={280} objectFit="cover" />
  <div className="mt-4 text-center text-normal font-medium">{alt}</div>
</div>
);

interface PolaroidStackProps {
images: Array<{ src: string; alt: string }>;
}

const PolaroidStack: React.FC<PolaroidStackProps> = ({ images }) => {
return (
  <div className="relative w-64 h-64">
    {images.map((image, index) => (
      <Polaroid
        key={index}
        src={image.src}
        alt={image.alt}
        rotation={Math.random() * 20 - 10} // Random rotation between -10 and 10 degrees
      />
    ))}
  </div>
);
};

export default PolaroidStack;