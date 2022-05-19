import React from 'react'
import heroImage from "../images/heroImage.JPG"
import { Navbar } from './Navbar'
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
      <>
      <Navbar />
    <div className="hero min-h-screen" style={{backgroundImage: `url(${heroImage})`}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-6xl font-bold">Welcome to Playing it Safe!</h1>
        <p className="mb-5">Playing it safe is my 3rd Spoken Word album. It took a lot of work to get here and i am thankful for everyone who had a part in the process. I hope you learn to not play safe!</p>
        <Link to="/epSelector" className="btn btn-accent">Press Play!</Link>
        
      </div>
    </div>
  </div>
      </>
  )
}
