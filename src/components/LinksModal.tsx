import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces/Props";

export const LinksModal = ({
  setShowLinks,
}: {
  setShowLinks: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.aside
      className="fixed inset-0 z-[10] flex flex-col items-center justify-center bg-black bg-opacity-40 backdrop-blur-[11px]"
      initial={{ y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 15,
        duration: 0.5,
      }}
    >
      <motion.figure whileTap={{ scale: 0.87 }} whileHover={{ scale: 1.1 }}>
        <Image
          className="w-24 h-24 rounded-full"
          width={100}
          height={100}
          onClick={() => setShowLinks(false)}
          src="https://media.tenor.com/B-tBy2imNXoAAAAi/kirby-vibe.gif"
          alt="card-img"
          loading="lazy"
        />
      </motion.figure>

      <section className="flex flex-row items-start gap-5">
        <article className="flex flex-col items-center justify-center text-center">
          <h1 className="text-xl font-semibold text-white font-montserrat">
            Lowwo-fi
          </h1>
          <a
            href="https://github.com/somuthink"
            className="text-slate-300 font-montserrat font-regular"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <a
            href="https://t.me/somuthink"
            className="text-slate-300 font-montserrat font-regular"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instruction
          </a>
          <a
            href="https://t.me/somuthink"
            className="text-slate-300 font-montserrat font-regular"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </article>
        <article className="flex flex-col items-center justify-center text-center">
          <h1 className="text-xl font-semibold text-white font-montserrat">
            My
          </h1>
          <a
            href="https://github.com/somuthink"
            className="text-slate-300 font-montserrat font-regular"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://t.me/somuthink"
            className="text-slate-300 font-montserrat font-regular"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a
            href="https://t.me/somuthink"
            className="text-slate-300 font-montserrat font-regular"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            href="https://t.me/somuthink"
            className="text-slate-300 font-montserrat font-regular"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Server
          </a>
        </article>
      </section>
    </motion.aside>
  );
};
