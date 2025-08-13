import Image from "next/image";

export function ZemenayLogo() {
  return (
    <div className="w-24 h-24">
      <Image
        src="/images/image.png"
        alt="Zemenay Logo"
        fill 
        className="object-contain"
      />
    </div>
  );
}