"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import ImageModal from "./ImageModal";

export default function ClickableImage({ src, alt, className = "" }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
        onClick={() => setModalOpen(true)}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <ZoomIn className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={src}
        imageAlt={alt}
      />
    </>
  );
}
