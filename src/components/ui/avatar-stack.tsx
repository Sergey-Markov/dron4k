import React from "react";
import Image, { StaticImageData } from "next/image";

interface AvatarStackItem {
  src: StaticImageData;
  alt: string;
}

interface AvatarStackProps {
  items: AvatarStackItem[];
}

const AvatarStack = ({ items }: AvatarStackProps) => (
  <div className="flex items-center">
    {items.map((item, index) => (
      <div
        key={item.src.src}
        className="relative -ml-3 h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-neon shadow-neon first:ml-0"
        style={{ zIndex: items.length - index }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="48px"
          style={{ objectFit: "cover" }}
        />
      </div>
    ))}
  </div>
);

export default AvatarStack;
