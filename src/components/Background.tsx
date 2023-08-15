"use client";

import { useRef, useContext } from "react";
import { motion, easeInOut } from "framer-motion";
import MyGlobalContext from "@/contexts/linkContext";

export const BackgroundVideoComponent = () => {
  const { link, setLink } = useContext(MyGlobalContext);

  const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     videoRef.current!.load();
//     console.log(process.env.IMGKIT_URL_ENDPOINT)
//   }, [link]);

  return (
    <motion.div
    className="z-[-1]"
      key={link}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: easeInOut, duration: 0.9, type: "tween" }}
    >
    
      <video ref={videoRef} loop autoPlay muted
        className="absolute z-[-1] top-0 left-0 w-[100%] h-[100%] object-cover"
        >
        
        <source src={link} type="video/mp4" />
        <source src={link} type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      
    </motion.div>
  );
};
