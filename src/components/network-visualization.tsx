
"use client";
import Image from "next/image";

export function NetworkVisualization() {
  return (
    <div className="absolute top-0 right-0 w-[300px] h-[625px] pointer-events-none">
      <Image
        src="/globe1.svg"
        alt="Globe"
        fill 
        className="object-contain opacity-90 mix-blend-screen"
      />
    </div>
  );
}