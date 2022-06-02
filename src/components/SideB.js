import React, {useState,useEffect, useRef} from "react";
import { useSpring, animated, easings } from "react-spring";
import imgSideB from "../images/sideB.jpeg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import sideBaudio from "../audios/sideBaudio.mp3"



export const SideB = () => {

    const fadeInImage = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 200,
        config: {
          duration: 1000,
          easing: easings.easeInCirc,
        },
      });
    
      const fadeInWords = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 400,
        config: {
          duration: 2000,
          easing: easings.easeInCirc,
        },
      });
      const fadeInPoems = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 500,
        config: {
          duration: 2000,
          easing: easings.easeInCirc,
        },
      });
    
      const fadeInPlayer = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 600,
        config:{
            duration:2000,
            easing:easings.easeInCirc
        }
    
             })


    const audioPlayer = useRef(null)

    const [poems] = useState(
    [

        {
            "id":1,
            "title":"Playing it safe (The Twnda cut!)",
            "duration":"18:50",
            "src": sideBaudio
        }
    ])

     const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
    
    const updateCurrentPoem =(id) =>{
      
        console.log(id);
        const index = id-1;

        setCurrentPoemIndex(index);
      
    }

    useEffect(()=>{
      //console.log(currentPoemIndex)
    //console.log(audioPlayer.current.audio.current.src)
    
    })

    
 
  return (
<>

    <div className="container flex sm:flex-col md:flex-row space-y-4 space-x- 4 mx-auto mt-5 py-2 justify-around">
        
        <animated.div style={fadeInImage} className="md:w-1/2">
        <img className = "rounded  dropshadow-xl" src={imgSideB} alt="Side A" />
        </animated.div>

        <div className="flex flex-col space-y-2 text-center mx-auto md:w-1/2">
          <animated.div style={fadeInWords}>

            <h1 className="text-4xl mb-2 font-black">Side B</h1>
        <p className="max-wd-md sm:text-center leading-8 text-xl">  
        Pla ying itsa fe is a ride through the producer.<br /> 
        We hope the stories come alive in an audiovisual manner <br />
        Experience the art in a new way!
        </p>
        <h2 className="text-xl font-bold"> Press play and enjoy!</h2>
    </animated.div>
        
        <animated.div style={fadeInPoems} className="sm:px-0  flex px-4 pt-4 flex-col">
            {
                poems.map((poem)=>(
             <div key={poem.id} 
             onClick={()=>updateCurrentPoem(poem.id)}
             className="sm:space-y-0 sm:mx-2 flex flex-row justify-between md:my-2 md:space-y-0 border-2 px-2 py-2 rounded bg-slate-300 hover:bg-slate-200">
                 <div className="flex flex-row space-x-4">
                <h2 className="sm:text-2xl text-4xl"> {poem.id}</h2>
                 <h2 className="sm:text-2xl text-4xl text-center" key={poem.id} > {poem.title}</h2>
                </div>
                <div className="">
                    <h2 className=" sm:text-sm text-2xl">{poem.duration}</h2>
                </div>
             </div>       
        
                )   
                )
            }

        </animated.div>
        </div>
      </div>
     {
     //add player container 

    }
        <animated.div style={fadeInPlayer} className="container flex mt-5 mx-auto justify-center" >
            
            <AudioPlayer
              
            ref={audioPlayer}
            src={poems[currentPoemIndex].src}
            customAdditionalControls={[]}
            
            autoPlay = {false}
           
            header= {`Now playing: ${poems[currentPoemIndex].title}`}
            
           // onLoadStart={()=>{console.log("load start")}}
            //onLoadedData={()=>{console.log("data loaded!")}}
             />

        </animated.div>
    </>
  )
}
