"use client"

import { createContext } from "react"

export interface GlobalContent {
  link: string;
  setLink: (c: string) => void;
}

const MyGlobalContext = createContext<GlobalContent>({
  link: (""), // set a default value
  setLink: () => {},});
export default MyGlobalContext