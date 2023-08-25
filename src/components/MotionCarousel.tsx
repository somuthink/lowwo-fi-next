"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { SoundCard } from "./SoundCard";
import { CardProps } from "@/interfaces/Props";

export const MotionCarousel = ({ cards }: { cards: CardProps[] }) => {
  // State to store the width of the carousel content
  const [width, setWidth] = useState(0);

  // Reference to the carousel wrapper element
  const slider_wrapper = useRef<HTMLDivElement>(null);

  // Calculate and set the width of the carousel content on mount
  useEffect(() => {
    setWidth(
      slider_wrapper.current!.scrollWidth - slider_wrapper.current!.offsetWidth
    );
  }, []);

  return (
    <div className="box-border flex items-center justify-center w-full p-0 m-0 ">
      <motion.div
        className="box-border flex w-full p-5 overflow-hidden"
        ref={slider_wrapper}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inline-flex w-full gap-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
        >
          {cards.map((card, id) => (
            <SoundCard
              key={id}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              soundSrc={card.soundSrc}
              backgroundSrc={card.backgroundSrc}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
