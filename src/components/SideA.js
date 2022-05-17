
import React, { useEffect, useRef } from "react";

import imgSideA from "../images/sideA.jpeg";
import hardtolove from "../audios/hard-to-love.mp3";
//import mosaic from "../audios/mosaic.mp3"

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";



export const SideA = () => {
    const hardToLove = useRef(hardtolove);

    useEffect(()=>{
        hardToLove.current = hardtolove
    })
    
  return (
<>
    <div className="container flex sm:flex-col md:flex-row space-y-4 mx-auto mt-5 py-2 justify-around">
        
        <div className="md:w-1/2">
        <img className = "rounded " src={imgSideA} alt="Side A" />
        </div>
        <div className="flex md:w-1/2">
        <p className="max-wd-md sm:text-center text-4xl"> Side A of the project. <br /> 
        Playing it safe is a journey through 7 poems.</p>
        </div>
      
      </div>
     {
     //add player container 

    }
        <div className="container flex mt-5 mx-auto justify-center" >
            
            <AudioPlayer src={hardToLove.current}
            customAdditionalControls={[]}
            autoPlay = {false}

             />

        </div>
    </>
  )
}
