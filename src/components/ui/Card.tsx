import React from "react";

interface CardProps {
  children: React.ReactNode;
  decoration?: "tape" | "tack" | "none";
  className?: string;
  rotate?: string;
  bgColor?: string;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  decoration = "none",
  className = "",
  rotate = "",
  bgColor = "bg-white",
  style,
}: CardProps) {
  const decoClass = decoration === "tape" ? "tape" : decoration === "tack" ? "tack" : "";

  return (
    <div
      className={`relative ${bgColor} border-2 border-pencil shadow-[3px_3px_0px_0px_rgba(45,45,45,0.1)] p-6 md:p-8 ${rotate} transition-transform duration-100 ${decoClass} ${className}`}
      style={{
        borderRadius: "15px 225px 15px 255px / 255px 15px 225px 15px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
