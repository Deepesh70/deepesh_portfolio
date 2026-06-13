import React from "react";

export default function SquigglyLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="4"
      height="200"
      viewBox="0 0 4 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 0 C4 15 0 30 2 45 C4 60 0 75 2 90 C4 105 0 120 2 135 C4 150 0 165 2 180 C4 195 2 200 2 200"
        stroke="#2d2d2d"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
