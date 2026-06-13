import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  children,
  subtitle,
  className = "",
  id,
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className}`} id={id}>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-pencil mb-4">
        <span className="wavy-underline">{children}</span>
      </h2>
      {subtitle && (
        <p className="font-body text-lg md:text-xl text-pencil/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
