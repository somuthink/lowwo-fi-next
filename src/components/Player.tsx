"use client"

import { useState } from "react";

import { MotionCarousel } from "./MotionCarousel";
import { BackgroundVideoComponent } from "./Background";
import { MusicWidgets } from "./MusicWidgets";
import MyGlobalContext from "@/contexts/linkContext";
import { CardProps, PlaylistProps } from "@/interfaces/Props";

export const Player = ({ cards, playlists }: { cards: CardProps[] , playlists: PlaylistProps[] }) => {

    const [link, setLink] = useState("");


    return (
 
    <MyGlobalContext.Provider value={{link,setLink}}>
        <div className="flex flex-col gap-1 mt-[5%]">
            <BackgroundVideoComponent />

            <MusicWidgets playlists={playlists}/>

            <MotionCarousel cards={cards}/>
        </div>
        
    </MyGlobalContext.Provider>



    );
}