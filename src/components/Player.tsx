"use client";

import { useState } from "react";
import { motion, spring } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { Header } from "./header";
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
    <>
      <Header />
      <div className="flex flex-col  gap-1 mt-[2%] max-sm:mt-[2%]">

        <MusicWidgets playlists={playlists} />





        <MyGlobalContext.Provider value={{ link, setLink }}>
          <MotionCarousel cards={cards} />
          {usebackgroundVideo && <BackgroundVideoComponent />}
        </MyGlobalContext.Provider>
      </div>
    </>
  );
};
