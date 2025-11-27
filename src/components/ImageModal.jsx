"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div className="relative max-w-full max-h-[250vh] w-full mx-16">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="h-8 w-8" />
        </button>

        {/* Image Container */}
        <div
          className="relative w-full h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            quality={100}
          />
        </div>

        {/* Image Alt Text */}
        {/* imageAlt && (
          <p className="text-center text-white mt-4 text-sm">{imageAlt}</p>
        ) */}
      </div>
    </div>
  );
}
