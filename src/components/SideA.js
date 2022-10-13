import React, { useState, useEffect, useRef } from "react";

import imgSideA from "../images/sideA.jpg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSpring, animated, easings } from "react-spring";
import { Link } from "react-router-dom";
import hardtolove from "../audios/sideA/Hardtolove.mp3";
import mosaics from "../audios/sideA/Mosaic.mp3";
import playingItSafe from "../audios/sideA/playingItSafe.mp3";
import starCrossedLovers from "../audios/sideA/starCrossLovers.mp3";
import swimmingAndForeignTongues from "../audios/sideA/swimmingAndForeignTongues.mp3";
import theProblem from "../audios/sideA/theProblem.mp3";
import whatIf from "../audios/sideA/whatIf.mp3";


export const SideA = () => {

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

  const audioPlayer = useRef(null);

  const [poems] = useState([
    {
      id: 1,
      title: "Hard To Love",
      duration: "01:28",
      src: hardtolove,
    },
    {
      id: 2,
      title: "Mosaics",
      duration: "00:50",
      src: mosaics,
    },
    {
      id: 3,
      title: "Playing It Safe",
      duration: "02:54",
      src: playingItSafe,
    },
    {
      id: 4,
      title: "Star Crossed Lovers",
      duration: "01:32",
      src: starCrossedLovers,
    },
    {
      id: 5,
      title: "Swimming & Foreign Tongues",
      duration: "02:37",
      src: swimmingAndForeignTongues,
    },
    {
      id: 6,
      title: "The Problem",
      duration: "03:12",
      src: theProblem,
    },
    {
      id: 7,
      title: "What If",
      duration: "01:56",
      src: whatIf,
    },
  ]);

  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);

  const updateCurrentPoem = (id) => {
    const index = id - 1;

    setCurrentPoemIndex(index);
  };

  const previousClick = (id) => {
    console.log("previous click");
    console.log(id);

    if (id - 2 <= 0) {
      setCurrentPoemIndex(0);
    } else {
      setCurrentPoemIndex(id - 2);
    }
    console.log("after");
    console.log(currentPoemIndex);
  };

  const nextClick = (id) => {
    console.log("next click");

    if (id >= poems.length) {
      setCurrentPoemIndex(poems.length - 1);
    } else {
      setCurrentPoemIndex(id);
    }
  };

  useEffect(() => {
    console.log(currentPoemIndex);
    console.log(audioPlayer.current.audio.current.src);
  });

  return (
    <>
      <div className="container sm:flex-col md:flex md:flex-row space-y-4 space-x-8 mx-auto mt-5 py-2 justify-around">
        
        <animated.div style={fadeInImage} className="drop-shadow-2xl md:w-1/2">
          <img className="rounded dropshadow-xl p-2" src={imgSideA} alt="Side A" />
        </animated.div>


        <div className="flex flex-col space-y-2 text-center mx-auto md:w-1/2">
        <animated.div style={fadeInWords}>
          <h1 className="text-4xl mb-2 font-black">Side A</h1>
          <p className="max-wd-md sm:text-center text-xl">
            Playing it safe is a journey through 7 poems.
            <br />
            A story of love found and lost. <br />
            Identity lost and found.
          </p>
          <div className="text-lg">
        <Link to="/buy" className="btn btn-md btn-accent text-lg mt-2">Buy Now!</Link>
        </div>
        </animated.div>

          <animated.div style={fadeInPoems} className="sm:px-0  flex px-4 pt-4 flex-col ">
            {poems.map((poem) => (
              <div
                key={poem.id}
                onClick={() => updateCurrentPoem(poem.id)}
                className="sm:space-y-0 sm:mx-2 flex flex-row justify-between md:my-2 md:space-y-0 border-2 px-2 py-2 rounded bg-slate-300 hover:bg-slate-200 dark:bg-slate-500 dark:hover:bg-slate-300"
              >
                <div className="flex flex-row space-x-4">
                  <h2 className="sm:text-2xl text-4xl dark:text-white"> {poem.id}</h2>
                  <h2
                    className="sm:text-xl md:text-2xl text-center font-bold dark:text-white"
                    key={poem.id}
                    
                  >
                    {" "}
                    {poem.title}
                  </h2>
                </div>
                <div className="">
                  <h2 className=" sm:text-sm text-2xl dark:text-white">{poem.duration}</h2>
                </div>
              </div>
            ))}
          </animated.div>
        </div>
      </div>
      {
        //add player container
      }
      <animated.div style={fadeInPlayer} className="container flex mt-5 mx-auto justify-center pb-5 px-4">
        
        <AudioPlayer
        className="player"
          ref={audioPlayer}
          src={poems[currentPoemIndex].src}
          customAdditionalControls={[]}
          showSkipControls={true}
          autoPlay={false}
          onClickPrevious={() => previousClick(poems[currentPoemIndex].id)}
          onClickNext={() => nextClick(poems[currentPoemIndex].id)}
          header={`Now playing: ${poems[currentPoemIndex].title}`}
          onLoadStart={() => {
            console.log("load start");
          }}
          onLoadedData={() => {
            console.log("data loaded!");
          }}
        />
      </animated.div>
    </>
  );
};

