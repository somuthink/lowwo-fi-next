"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { Switch } from "./ui/Switch";
import { LinksModal } from "./LinksModal";
interface HeaderProps {
  useBackgroundVideo: boolean;
  setUseBackgroundVideo: Dispatch<SetStateAction<boolean>>;
  focusMode: boolean;
  setFocusMode: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({
  useBackgroundVideo,
  setUseBackgroundVideo,
  focusMode,
  setFocusMode,
}: HeaderProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showLinks, setShowLinks] = useState<boolean>(false);

  return (
    <>
      <header
        className={`sticky bg-black bg-opacity-40 backdrop-blur-[11px] h-16 z-[1] ${
          focusMode && "hidden"
        }`}
      >
        <div className="flex items-center justify-between w-full px-10 py-4 ">
          <p className="text-white">Logo</p>
          <nav className="flex flex-row items-center justify-center gap-4">
            <a
              href="https://boosty.to/somuthink/single-payment/donation/452569/target?share=target_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="bg-[#F15F2C] rounded-[25px] border-2 border-solid border-[rgba(255,255,255,0.1)]
                            inline content-center items-center justify-center h-8 px-4 
                            font-semibold text-white text-sm font-montserrat"
                whileTap={{ scale: 0.87 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                Support me🍄
              </motion.button>
            </a>

            <motion.button
              className={`items-center content-center justify-center inline h-8 px-4 `}
              whileTap={{ scale: 0.87 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <MdMenu size="25" color="white" />
            </motion.button>
          </nav>
        </div>
      </header>
      {focusMode && (
        <div className="flex items-end justify-end w-full h-16 px-10 py-4">
        <motion.button
          className={`items-center content-center justify-center inline h-8 px-4 `}
          whileTap={{ scale: 0.87 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <MdMenu size="25" color="white" />
        </motion.button>
        </div>
      )}
      {showMenu && (
        <motion.div
          className="bg-black bg-opacity-40 backdrop-blur-[11px] 
                    rounded-[15px] border-2 border-solid border-[rgba(255,255,255,0.1)] 
                    absolute z-[2] flex flex-col right-12 gap-3 py-2 px-4   items-end mt-[2%] max-sm:mt-[2%]"
          initial={{ x: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 15,
            duration: 0.3,
          }}
        >
          <div className="inline-flex flex-row items-center gap-3">
            <p className="text-sm font-semibold text-white font-montserrat">
              Focus mode
            </p>
            <Switch state={focusMode} setState={setFocusMode} />
          </div>

          <div className="inline-flex flex-row items-center gap-3">
            <p className="text-sm font-semibold text-white font-montserrat">
              BG Video
            </p>
            <Switch
              state={useBackgroundVideo}
              setState={setUseBackgroundVideo}
            />
          </div>
          <hr className="my-1 w-[9rem] opacity-20" data-content="OR"></hr>
          <p className="text-sm font-semibold text-white font-montserrat" onClick={() => setShowLinks(true)}>Links</p>
        </motion.div>
      )}
      { showLinks && (<LinksModal setShowLinks={setShowLinks}/>)}
      
    </>
  );
};
