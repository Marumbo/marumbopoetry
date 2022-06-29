import React from 'react'
import heroImage from "../images/heroImage.JPG"
import { Navbar } from '../components/Navbar'
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
      <>
      <Navbar />
    <div className="hero min-h-screen" style={{backgroundImage: `url(${heroImage})`}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center items-center text-neutral-content flex">
      <div className="flex flex-col mx-auto space-x-2 space-y-2 items-center">
        <h1 className=" flex mb-5 text-6xl font-bold">Welcome to Playing it Safe!</h1>
        <p className="pb-4 text-4xl sm:">Playing it safe is my 3rd Spoken Word album. It took a lot of work to get here and i am thankful for everyone who had a part in the process. I hope you learn to not play safe!</p>
        <div className="text-2xl">
        <Link to="/epSelector" className="btn btn-accent text-2xl">Press Play!</Link>
        </div>
        
      </div>
    </div>
  </div>
      </>
  )
}
