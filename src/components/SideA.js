import React, {useState,useEffect, useRef} from "react";

import imgSideA from "../images/sideA.jpeg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Navbar } from "./Navbar";
import hardtolove from "../audios/hard-to-love.mp3"
import mosaics from "../audios/mosaic.mp3"
import playingItSafe from "../audios/playing-it-safe.mp3"
import starCrossedLovers from "../audios/star-crossed-lovers.mp3"



export const SideA = () => {

    const audioPlayer = useRef(null)

    const [poems] = useState(
    [

        {
            "id":1,
            "title":"Hard to love",
            "src": hardtolove
        },
        {
            "id":2,
            "title":"Mosaics",
            "src":mosaics
        },
        {
            "id":3,
            "title":"Playing it safe",
            "src":playingItSafe
        },
        {
            "id":4,
            "title":"Star Crossed Lovers",
            "src":starCrossedLovers
        },

    ])

     const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
    
    const updateCurrentPoem =(id) =>{
      
        const index = id-1;

        setCurrentPoemIndex(index);
      
    }

    const previousClick=(id)=>{
        console.log("previous click")
        console.log(id)

        if((id-2) <= 0){

            setCurrentPoemIndex(0)
          
        }
        else{
            setCurrentPoemIndex(id-2)
        }
        console.log("after")
        console.log(currentPoemIndex)

    }

    const nextClick = (id)=>{

        console.log("next click")

        if(id>= poems.length){
            setCurrentPoemIndex(poems.length-1)
        }
        else{
            setCurrentPoemIndex(id)
        }
    }

    useEffect(()=>{
        console.log(currentPoemIndex)
        console.log(audioPlayer.current.audio.current.src)
    })

    
 
  return (
<>
<Navbar />

    <div className="container flex sm:flex-col md:flex-row space-y-4 space-x- 4 mx-auto mt-5 py-2 justify-around">
        
        <div className="md:w-1/2">
        <img className = "rounded " src={imgSideA} alt="Side A" />
        </div>

        <div className="flex flex-col space-y-2 mx-auto md:w-1/2">
        <p className="max-wd-md sm:text-center"> Side A of the project. <br /> 
        Playing it safe is a journey through 7 poems.</p>
        
        <div className="flex px-4 pt-4 flex-col">
            {
                poems.map((poem)=>(
                    
            <h2 className="text-2xl text-center" key={poem.id} onClick={()=>updateCurrentPoem(poem.id)}> {poem.title}</h2>
        
                )   
                )
            }

        </div>
        </div>
      </div>
     {
     //add player container 

    }
        <div className="container flex mt-5 mx-auto justify-center" >
            
            <AudioPlayer  
            ref={audioPlayer}
            src={poems[currentPoemIndex].src}
            customAdditionalControls={[]}
            showSkipControls={true}
            autoPlay = {false}
            onClickPrevious={()=> previousClick(poems[currentPoemIndex].id)} 
            onClickNext={()=> nextClick(poems[currentPoemIndex].id)}
            header= {`Now playing: ${poems[currentPoemIndex].title}`}
            
            onLoadStart={()=>{console.log("load start")}}
            onLoadedData={()=>{console.log("data loaded!")}}
             />

        </div>
    </>
  )
}
