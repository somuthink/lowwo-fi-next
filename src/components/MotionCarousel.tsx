"use client"

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { SoundCard } from "./SoundCard";
import { CardProps } from "@/interfaces/CardProps";

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
    <div className="flex items-center justify-center w-full m-0 p-0 box-border ">
      <motion.div
        className="flex w-full p-5 overflow-hidden box-border"
        ref={slider_wrapper}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="w-full inline-flex gap-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
        >

            {cards.map(card => (
                    <SoundCard
                        key={card.title}
                        title={card.title}  
                        description={card.description} 
                        imageSrc={card.imageSrc}
                        soundSrc={card.soundSrc}  
                        backgroundSrc={card.backgroundSrc}/>
                    ))}
          <SoundCard
            title="AAAAA"
            description="JJJJJJJJ"
            imageSrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0d4f4a59530621.5a6b839aa4214.jpg"
            soundSrc="https://assets.mixkit.co/active_storage/sfx/2415/2415.wav"
            backgroundSrc="https://ik.imagekit.io/abvjxdbe2/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview.mp4?updatedAt=1691071742427"
          />

 
        </motion.div>
      </motion.div>
    </div>
  );
};
