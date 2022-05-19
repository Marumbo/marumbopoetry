import React from 'react'
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook,BsYoutube,BsInstagram } from "react-icons/bs";
export const Navbar = () => {
 
  const socialMedia = [

    {
      "name":"facebook",
      "icon":<BsFacebook />,
      "link":"https://facebook.com/marumbopoetry"
    },
    {

      "name":"twitter",
      "icon":<BsTwitter />,
      "link":"https://twitter.com/marumbopoetry",
    },
    {
      "name":"instagram",
      "icon":<BsInstagram />,
      "link":"https://instagram.com/marumbopoetry"
    },
    {
      "name":"youtube",
      "icon":<BsYoutube />,
      "link":"https://www.youtube.com/channel/UCDYA--o2QX7XWo_tGkkv13w/videos"
    }
  ]
 
 
 
 
  return (
    <div className="navbar bg-base-100 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
      <Link to="/epSelector">Listen & Download</Link> 
        </li>
        <li> <button>Buy </button></li>
        <li> <button>Stream Online</button></li>
        <li> <button>About Me </button></li>

    </ul>
    </div>
    <Link to="/">

    <button className="btn btn-ghost normal-case text-xl">MarumboPoetry</button>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li>
      <Link to="/epSelector" className="btn btn-ghost">Listen & Download</Link>
        </li>
        <li> <button className="btn btn-ghost">Buy </button></li>
        <li> <button className="btn btn-ghost">Stream Online</button></li>
        <li> <button className="btn btn-ghost">About Me </button></li>

    </ul>
  </div>
  <div className="navbar-end">
      <div className="flex flex-row px-2 space-x-2 mx-auto">

      {
        socialMedia.map((socials)=>(

          <a href= {socials.link} target={"_blank"} rel="noreferrer"  >
            {socials.icon}
          </a>

        ))
      }
    
      </div>
  </div>
</div>
  )
}
