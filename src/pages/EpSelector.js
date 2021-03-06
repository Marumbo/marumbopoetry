
import React, { useState, useEffect } from 'react'
import { Navbar } from "../components/Navbar";
import { SideA } from '../components/SideA';
import { SideB } from '../components/SideB';

export const EpSelector = () => {
 
    const [isSideA, setSideA] =useState(true)
 
    const toggleSide= ()=> {
        console.log("entered function for toggle")
        setSideA(!isSideA)
    }

    useEffect(()=>{
        console.log(isSideA)
        
    })

    return (
      <>
    <Navbar />


    <div className="flex flex-col items-center justify-center my-4">
       <h1 className="flex max-w-sm text-center italic text-6xl">
        Pick a side! 
           </h1> 
           
        </div>
    

    <div className="tabs flex justify-center my-5 mx-auto pt-2">
  <button className={`tab tab-lg tab-lifted ${isSideA ? "tab-active" :""}`} onClick={()=>toggleSide()}>
      Side A</button> 
      
  <button className={`tab tab-lg tab-lifted ${!isSideA ? "tab-active" :""}`} onClick={()=>toggleSide()}>
      Side B</button> 
</div>

{
    isSideA ? 
    <SideA /> :
    <SideB />
}
      </>
  )

}
