"use client";

import { useState, useEffect } from "react";
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
  const [focusMode, setFocusMode] = useState(false);

  function shuffleArray(array: PlaylistProps[] ) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  useEffect(() => {
    const ShufflesPlaylist = shuffleArray(playlists)
  }),[];
  return (
    <>
      <Header
        useBackgroundVideo={usebackgroundVideo}
        setUseBackgroundVideo={setUseBackgroundVideo}
        focusMode={focusMode}
        setFocusMode={setFocusMode}
      />
      <div className="flex flex-col  gap-1 mt-[2%] max-sm:mt-[2%]">
        <div className={focusMode? "hidden" : "visible"}>
          <MusicWidgets playlists={playlists} />
        </div>
        <MyGlobalContext.Provider value={{ link, setLink }}>
          <div className={focusMode ? "hidden" : "visible"}>
            <MotionCarousel cards={cards} />
          </div>
          {usebackgroundVideo && <BackgroundVideoComponent />}
        </MyGlobalContext.Provider>
      </div>
    </>
  );
};
