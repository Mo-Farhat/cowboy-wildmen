"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const CAROUSEL_IMAGES = [
  {
    id: 1,
    src: "/images/cowboy_wildmen_hero_varsity.png",
    alt: "Made for the Wild",
  },
  {
    id: 2,
    src: "/images/cowboy_wildmen_lookbook_editorial_2.png",
    alt: "Shaped for the City",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {CAROUSEL_IMAGES.map((image, index) => (
            <div
              key={image.id}
              className="relative flex-[0_0_100%] h-full min-w-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover opacity-60"
                priority={index === 0}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4 max-w-5xl"
        >
          <span className="text-brandAmber font-black tracking-widest text-sm uppercase mb-2">
            New Fall/Winter 2024
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] uppercase drop-shadow-2xl">
            MADE FOR THE WILD.
            <br />
            SHAPED FOR THE CITY.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mt-4">
            Western grit meets urban edge. Durable silhouettes built to move,
            age, and outlast trends.
          </p>

          {/* CTA Buttons */}
          <div className="pt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/shop" className="brand-button brand-button-primary">
              Shop New Drop
            </Link>
            <Link href="/shop" className="brand-button brand-button-outline">
              Enter the Wild
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
