import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}

export default function Badge({ children, className = "", rotate = 0 }: BadgeProps) {
  return (
    <span
      className={`inline-block font-body text-base md:text-lg bg-postit text-pencil border-2 border-pencil px-4 py-2 shadow-[2px_2px_0px_0px_#2d2d2d] hover:shadow-[3px_3px_0px_0px_#2d2d2d] hover:-translate-y-0.5 transition-all duration-100 cursor-default ${className}`}
      style={{
        borderRadius: "185px 10px 195px 10px / 10px 195px 10px 185px",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </span>
  );
}
