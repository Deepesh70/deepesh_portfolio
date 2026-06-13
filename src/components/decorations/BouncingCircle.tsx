"use client";

import React from "react";

export default function BouncingCircle({ className = "" }: { className?: string }) {
  return (
    <div
      className={`hidden md:block animate-bounce-gentle ${className}`}
      style={{
        width: 60,
        height: 60,
        borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
        border: "3px dashed #2d2d2d",
        background: "rgba(255, 77, 77, 0.15)",
      }}
    />
  );
}
