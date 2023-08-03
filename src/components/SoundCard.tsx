"use client";

import React, { useState, useRef, useEffect, useContext, memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MyGlobalContext from "@/contexts/linkContext";


export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  soundSrc: string;
  backgroundSrc: string;
}

export const SoundCard = ({
  title,
  description,
  imageSrc,
  soundSrc,
  backgroundSrc,
}: CardProps) => {
  // Volume state
  const [vol, setVol] = useState<number>(0.4);

  // Background src link context
  const { link, setLink } = useContext(MyGlobalContext);

  // Mouse wheel velo state
  const [velo, setVelo] = useState<number>(0);

  const [hover, setHover] = useState<boolean>(false);
  const [audioStatus, changeAudioStatus] = useState<boolean>(false); // Audio status - playing or not

  // Ref of an audio element
  const audioRef = useRef<HTMLAudioElement>(null);

  // Ref of an audio element
  const rangeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Set default volume to 0.4
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }

    console.log(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

  }, []);

  // Play/Pause audio function
  const PlayPause = () => {
    if (!audioStatus) {
      setLink(backgroundSrc);
      audioRef.current!.play();
      changeAudioStatus(true);
    } else {
      audioRef.current!.pause();
      changeAudioStatus(false);
      if (link === backgroundSrc) {
        setLink(process.env.PUBLIC_URL + "video/chill-room.mp4");
      }
    }
  };

  // Mouse wheel event handler
  const wheel = (e: any) => {

    const delta = e.deltaY * -1;
    let newVolume = audioRef.current!.volume;

    setVelo((delta / 100) * -10);

    if (delta === 100) {
      if (!audioStatus) {
        PlayPause();
      }
      newVolume += 0.05;
    } else if (delta === -100) {
      newVolume -= 0.05;
      if (newVolume === 0) {
        PlayPause();
        setHover(false);
      }
    }

    newVolume = Math.round(Math.min(Math.max(newVolume, 0), 1) * 100) / 100;

    rangeRef.current!.value = newVolume.toString();
    audioRef.current!.volume = newVolume;
    setVol(newVolume);
  };

  // Range input change event handler
  const rangevol = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    if (!audioStatus) {
      PlayPause();
    }
    if (newVolume === 0) {
      PlayPause();
      setHover(false);
    }
    setVol(newVolume);
    audioRef.current!.volume = newVolume;
  };

  // Animation Variants
  const Animations = {
    Container: {
      show: { scale: audioStatus ? 0.98 : 1, y: hover ? 40 : 0 },
      hide: { scale: 1 },
    },

    Title: {
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      hide: {
        y: velo,
        opacity: 0.3,
      },
    },
    RangeInput: {
      show: {
        opacity: hover ? 1 : 0,
        y: hover ? 0 : 30,
      }
    },
  };

  // Function to change the title based on audio status
  const changeTitle = () => {
    if (audioStatus) {
      return `${(vol * 100).toFixed()} %`;
    } else {
      return title;
    }
  };

  return (
    <motion.div
      onMouseEnter={() => {setHover(true);document.body.style.overflow = 'hidden';}}
      onMouseLeave={() => {setHover(false);document.body.style.overflow = 'auto';}}
      className="inline-flex flex-col"
    >
      {/* Range Input */}
      <motion.div
        className="RangeContainer w-160 absolute z-0. ml-5"
        variants={Animations.RangeInput}
        animate={"show"}
        whileTap={{ scale: 0.87 }}
        transition={{ duration: 0.3 }}
      >
        <input
          ref={rangeRef}
          type="range"
          min="0"
          max="1"
          defaultValue="0.4"
          step={0.05}
          onInput={rangevol}
        />
      </motion.div>



      {/* Sound Card */}
      <motion.div
        className="bg-black bg-opacity-40 backdrop-blur-[11px] 
                    rounded-[25px] border-2 border-solid border-[rgba(255,255,255,0.1)] 
                    inline-flex  py-[9px] pl-[18px] items-center gap-x-5 gap-y-6 h-[140px] min-w-[400px]"
        onWheel={wheel}
        variants={Animations.Container}
        animate={"show"}
        initial={"hide"}
        transition={{}}
      >
        <div className=" flex flex-col items-start  order-1 flex-grow">
          <motion.p
            key={vol}
            className="font-montserrat font-semibold text-xl"
            variants={Animations.Title}
            animate={"show"}
            initial="hide"
            transition={{ type: "spring", stiffness: 500 }}
          >
            {changeTitle()}
          </motion.p>
          <p className="font-montserrat font-regular text-sm">{description}</p>
        </div>
        <audio ref={audioRef} loop src={soundSrc} />
        <Image
          className="rounded-full w-[100px] h-[100px]"
          width={100}
          height={100}
          src={imageSrc}
          alt="card-img"
          onClick={PlayPause}
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );

};
