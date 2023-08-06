"use client"

import { useState } from "react";

import { MotionCarousel } from "./MotionCarousel";
import { BackgroundVideoComponent } from "./Background";
import MyGlobalContext from "@/contexts/linkContext";
import { CardProps } from "@/interfaces/CardProps";

export const Player = ({ cards }: { cards: CardProps[] }) => {

    console.log(process.env.NEXT_PUBLIC_NOTION_TOKEN);

    const [link, setLink] = useState("");


    return (
 
    <MyGlobalContext.Provider value={{link,setLink}}>
        
        <BackgroundVideoComponent />

        <MotionCarousel cards={cards}/>
    </MyGlobalContext.Provider>



    );
}