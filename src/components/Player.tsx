"use client"

import { useState } from "react";

import { MotionCarousel } from "./MotionCarousel";
import { BackgroundVideoComponent } from "./Background";
import { MusicWidgets } from "./MusicWidgets";
import MyGlobalContext from "@/contexts/linkContext";
import { CardProps } from "@/interfaces/CardProps";

export const Player = ({ cards }: { cards: CardProps[] }) => {

    const [link, setLink] = useState("");


    return (
 
    <MyGlobalContext.Provider value={{link,setLink}}>
        
        <BackgroundVideoComponent />

        <MusicWidgets/>

        <MotionCarousel cards={cards}/>
    </MyGlobalContext.Provider>



    );
}