"use client"

import { useState } from "react";

import { MotionCarousel } from "./MotionCarousel";
import { BackgroundVideoComponent } from "./Background";
import MyGlobalContext from "@/contexts/linkContext";
import { CardProps } from "@/interfaces/CardProps";

export const Player = ({ cards, netlyTest }: { cards: CardProps[], netlyTest : Promise<string> }) => {

    const [link, setLink] = useState("");
    console.log(netlyTest);

    return (
 
    <MyGlobalContext.Provider value={{link,setLink}}>
        
        <BackgroundVideoComponent />

        <MotionCarousel cards={cards}/>
    </MyGlobalContext.Provider>



    );
}