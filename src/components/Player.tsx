"use client";

import { useState } from "react";
import { motion, spring } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { MotionCarousel } from "./MotionCarousel";
import { BackgroundVideoComponent } from "./Background";
import { MusicWidgets } from "./MusicWidgets";
import MyGlobalContext from "@/contexts/linkContext";
import { CardProps, PlaylistProps } from "@/interfaces/Props";

export const Player = ({
  cards,
  playlists,
}: {
  cards: CardProps[];
  playlists: PlaylistProps[];
}) => {
  const [link, setLink] = useState("");
  const [usebackgroundVideo, setUseBackgroundVideo] = useState(true);
  const [menuActive, setMenuActive] = useState(false);

  const toggleSwitch = () => setUseBackgroundVideo(!usebackgroundVideo);

  return (
    <div className="flex flex-col  gap-1 mt-[5%] max-sm:mt-[2%]">
      <div className="flex flex-row max-sm:flex-col max-sm">
        <MusicWidgets playlists={playlists} />

        <div className="flex flex-col" onMouseEnter={() => {setMenuActive(true);}}onMouseLeave={() => {setMenuActive(false);}}>

        <motion.div
          className="bg-black bg-opacity-40 backdrop-blur-[11px] 
          rounded-[25px] border-2 border-solid border-[rgba(255,255,255,0.1)]
          inline content-center items-center justify-center h-[30px] px-[18px] pt-[3px]
          relative
          "
        >
          <MdMenu size="20" color="white" />
        </motion.div>
        {menuActive && (
          <>
            <motion.div className="text-white bg-black bg-opacity-40 backdrop-blur-[11px] 
          rounded-[25px] border-2 border-solid border-[rgba(255,255,255,0.1)]
          inline content-center items-center justify-center h-[30px] px-[18px] pt-[3px]
          relative"> AAAAAAAAAAA</motion.div>
            <motion.div className="text-white"> AAAAAA</motion.div>
          </>
        )}
      </div>
      </div>

      <MyGlobalContext.Provider value={{ link, setLink }}>
        <MotionCarousel cards={cards} />
        {usebackgroundVideo && <BackgroundVideoComponent />}
      </MyGlobalContext.Provider>
    </div>
  );
};
