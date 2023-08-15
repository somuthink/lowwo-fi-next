"use client";

import React, { useRef, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { BsCollectionFill } from "react-icons/bs";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { PlaylistProps } from "@/interfaces/Props";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MusicWidgets = ({ playlists }: { playlists: PlaylistProps[] }) => {
  // Slider settings

  // State for mode (collection or custom)
  const [mode, setMode] = useState<"collection" | "custom">("collection");

  // Refs for SoundCloud iframes
  const soundCloudRefs = useRef<HTMLIFrameElement[]>([]);

  // Number of SoundCloud playlists
  const NumOfPlaylists = playlists.length;

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Function to set volume for SoundCloud widgets
  const setVolume = (volume: number) => {
    soundCloudRefs.current = soundCloudRefs.current.slice(-NumOfPlaylists);

    soundCloudRefs.current.forEach((ref) => {
      const widget = (window as any).SC.Widget(ref);
      widget.setVolume(volume);
    });
  };

  // Function to handle the reference of SoundCloud iframes
  const handleWidgetRef = (ref: HTMLIFrameElement | null) => {
    if (ref) {
      soundCloudRefs.current = [...soundCloudRefs.current, ref];
    }
  };

  return (
    <div className="flex flex-col max-w-[1110px] w-[70%] max-sm:w-[90%] h-[40%] gap-2 mx-[30px]">
      <Script
        async
        id="soundcloud-script"
        src="https://w.soundcloud.com/player/api.js"
        strategy="afterInteractive"
      ></Script>
      {/* Music mode: collection */}
      {mode === "collection" && (
        <Slider {...settings}>
          {playlists.map((playlist, id) => (
            <iframe // Provide a unique key for each iframe
              key={id}
              ref={handleWidgetRef}
              className="soundcloud"
              height="400"
              width="300"
              src={playlist.link}
              loading="lazy"
            >
              {playlist.title}
            </iframe>
          ))}
        </Slider>
      )}

      {mode === "custom" && (
        <div className="flex content-center items-center justify-center h-[438px] w-2/4">

          <p className=" text-white"> Work in progress 🚧 </p>
        </div>
      )}

      {/* Music mode buttons */}
      <motion.div className="flex flex-row">
        {mode === "collection" && (
          <motion.div
            className="RangeContainer"
            whileTap={{ scale: 0.87 }}
            whileHover={{ y: 4 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="30"
              step={0.5}
              onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                setVolume(Number(event.target.value))
              }
            />
          </motion.div>
        )}
        <motion.div
          className="bg-black bg-opacity-40 backdrop-blur-[11px] 
          rounded-[25px] border-2 border-solid border-[rgba(255,255,255,0.1)]
          
          flex content-center items-center h-[30px] px-[18px]"
          whileTap={{ scale: 0.87 }}
          whileHover={{ y: 4 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMode("collection")}
        >
          <BsCollectionFill size={15} color="white" />
        </motion.div>

        <motion.div
          className="bg-black bg-opacity-40 backdrop-blur-[11px] 
          rounded-[25px] border-2 border-solid border-[rgba(255,255,255,0.1)]
          
          flex content-center items-center h-[30px] px-[18px]"
          whileTap={{ scale: 0.87 }}
          whileHover={{ y: 4 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMode("custom")}
        >
          <MdOutlinePlaylistPlay size={18} color="white" />
        </motion.div>
      </motion.div>
    </div>
  );
};
