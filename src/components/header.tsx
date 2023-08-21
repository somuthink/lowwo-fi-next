"use client";

import { useRef, useContext } from "react";
import { motion, easeInOut } from "framer-motion";

export const Header = () => {
  return (
    <header className=" bg-black bg-opacity-40 backdrop-blur-[11px] h-16">
      <div className="flex items-center justify-between w-full px-10 py-4">
        <p className="text-white">Logo</p>
        <a href="https://boosty.to/somuthink/single-payment/donation/452569/target?share=target_link" target="_blank" rel="noopener noreferrer">
        <motion.button className="bg-orange-600 rounded-[25px] border-2 border-solid border-[rgba(255,255,255,0.1)]
                            inline content-center items-center justify-center h-8 px-4 
                            font-semibold text-white font-montserrat"
                            whileTap={{ scale: 0.87 }}
                            whileHover={{ y: [0, -1, 1] }}
                            transition= {{
                                duration: 0.2,
                                ease: "easeOut",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                      
        >Support me🍄</motion.button></a>
      </div>
      
    </header>
  );
};
