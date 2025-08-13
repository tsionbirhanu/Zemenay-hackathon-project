"use client";
import Image from "next/image";

export function NetworkVisualization() {
  return (
    <div className="absolute top-0 right-0 w-[300px] h-[625px] pointer-events-none overflow-hidden">
      <Image
        src="/globe1.svg"
        alt="Globe"
        fill
        className="object-cover opacity-90 mix-blend-screen scale-[1.01]"
      />
    </div>
  );
}
