"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface SwitchProps {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
  }

export const Switch = ({
    state,
    setState,
  }: SwitchProps) => {
  
  return (
    <div
    className="switch"
    data-isOn={state}
    onClick={() => {
      setState(!state);
    }}
  >
    <motion.div
      className="handle"
      layout
      transition={{ type: "spring", stiffness: 700, damping: 30 }}
    />
  </div>
  );
};
