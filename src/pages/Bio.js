
import React from 'react'

import ImageGrid from '../components/ImageGrid'
import { Navbar } from '../components/Navbar'
import Typed from 'react-typed';
import BioSection from '../components/BioSection';

const Bio = () => {
  return (
      <>
      <Navbar />

      <div className="container justify-around mx-auto px-8 mb-8">
      <Typed
      className="flex text-center text-8xl text-black"
      strings={[
          'Welcome to my bio!',
          'But first some pictures!']}
          typeSpeed={120}
          attr="placeholder"
          loop >
             
        <input type="text"/>
                </Typed>
                        
     </div>

      <ImageGrid />
      <BioSection />



      </>
  )
}

export default Bio