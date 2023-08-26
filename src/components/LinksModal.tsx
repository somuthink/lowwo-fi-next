"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction} from "react"
import Image from "next/image";
import { CardProps } from "@/interfaces/Props";

export const LinksModal = ({setShowLinks} : { setShowLinks : Dispatch<SetStateAction<boolean>>}) => {
  // Volume state

  return (
    <div
      className="bg-black bg-opacity-40 backdrop-blur-[11px] 
                    w-full h-[100vh]
                    py-5 px-7 gap-4
                    absolute  top-0 left-0 bottom-0 right-0 z-[10] flex flex-col  items-center justify-center "
    >
      <motion.div whileTap={{ scale: 0.87 }} whileHover={{ scale: 1.1 }}>
        <Image
          className=" min-w-[100px] h-[100px] rounded-[50%]"
          width={100}
          height={100}
          onClick={() => setShowLinks(false)}
          src="https://media.tenor.com/B-tBy2imNXoAAAAi/kirby-vibe.gif"
          alt="card-img"
          loading="lazy"
        />
      </motion.div>

      <div className="flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center">
          <p className="mb-1 text-xl font-semibold text-white font-montserrat">
            Lowwo-fi
          </p>
          <a
            href="https://github.com/somuthink"
            className="text-sm text-slate-300 font-montserrat font-regular"
          >
            GitHub Repo
          </a>
          <a
            href="https://t.me/somuthink"
            className="text-sm text-slate-300 font-montserrat font-regular"
          >
            Instruction
          </a>
          <a
            href="https://t.me/somuthink"
            className="text-sm text-slate-300 font-montserrat font-regular"
          >
            TikTok
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-1 text-xl font-semibold text-white font-montserrat">
            My
          </p>
          <a
            href="https://github.com/somuthink"
            className="text-sm text-slate-300 font-montserrat font-regular "
          >
            GitHub
          </a>
          <a
            href="https://t.me/somuthink"
            className="text-sm text-slate-300 font-montserrat font-regular"
          >
            Telegram
          </a>
          <a
            href="https://t.me/somuthink"
            className="text-sm text-slate-300 font-montserrat font-regular"
          >
            Discord
          </a>
          <a
            href="https://t.me/somuthink"
            className="text-sm text-center text-slate-300 font-montserrat font-regular"
          >
            Discord Server
          </a>
        </div>
      </div>
    </div>
  );
};
