"use client"

import { createContext } from "react"

export interface GlobalContent {
  link: string;
  setLink: (c: string) => void;
}

const MyGlobalContext = createContext<GlobalContent>({
  link: (process.env.PUBLIC_URL + "video/chill-room.mp4"), // set a default value
  setLink: () => {},});
export default MyGlobalContext