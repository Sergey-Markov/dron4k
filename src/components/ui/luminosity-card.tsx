"use client";

import React, { useRef, useState } from "react";
import classNames from "classnames";

interface LuminosityCardProps {
  children: React.ReactNode;
  className?: string;
  size?: "bento" | "compact";
}

const LuminosityCard = ({ children, className, size = "bento" }: LuminosityCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classNames(
        "relative overflow-hidden rounded-[2rem] border transition-colors duration-500 ease-elite",
        hover ? "border-neon/30" : "border-white/5",
        size === "bento" ? "min-h-[450px] p-8" : "p-6",
        className,
      )}
      style={{
        background: hover
          ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(191, 255, 0, 0.07), transparent 60%)`
          : "radial-gradient(circle at top left, rgba(255, 255, 255, 0.03), transparent)",
      }}
    >
      {children}
    </div>
  );
};

export default LuminosityCard;
