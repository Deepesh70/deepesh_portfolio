import React from "react";

export default function HandDrawnArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="80"
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 60 C30 65 50 50 70 35 C80 28 90 22 105 20"
        stroke="#2d2d2d"
        strokeWidth="2.5"
        strokeDasharray="6 4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M95 12 L108 20 L96 28"
        stroke="#2d2d2d"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
