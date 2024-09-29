"use client";
import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const images = [
  "/images/carousel/caro1.png",
  "/images/carousel/caro1.png",
  "/images/carousel/caro1.png",
  "/images/carousel/caro1.png",
  "/images/carousel/caro1.png",
];

export function CarouselHome() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center items-center"
          >
            <Card>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={1000}
                height={1000}
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
