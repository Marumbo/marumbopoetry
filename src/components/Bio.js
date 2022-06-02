
import React from 'react'
import bioImage from '../images/bioImage.JPG'
import { Navbar } from './Navbar'

const Bio = () => {
  return (
      <>
      <Navbar />

    <div className="hero flex bg-black md:space-x-8 sm:flex-col md:flex-row mx-auto mt-4 sm:space-y-2">
        
    <div className="flex md:w-1/3 mx-auto px-4 justify-around ">
    <img className=" object-contain rounded dropshadow-xl  xl:h-1/4 xl:w-2/4" src={bioImage} alt="Bio"/>
    </div>

    <div className="flex md:w-2/3 mx-auto px">
       
    <p className="text-white text-center container text-lg">
Marumbo Sichinga popularly known as Marumbo the Poet is a Spoken Word Artist from Malawi, Africa.  <br />

Marumbo developed a passion for the creative freedom in poetry while still in college and developed his art for two years to emerge and Malawi's starring poets. 
He has since then been featured at Lake of Stars for two consecutive years since 2015, 
first performing on the Village stage and in 2016 being one of the young acts on the main stage.
<br />

He has also performed at Likoma Festival and Tumaini Festival respectively. The rich fuse of passion, intellect, skill and hardwork prove him to be an act not to miss. 
Marumbo's poetry is deeply rooted in understanding of culture, life, God and love. He has been heavily influenced by the lessons and experiences from his father, family 
and the social upheavals that have rocked Malawi. 
<br />

These were also essential in driving him into more well-meaning and relatable poetry that not only entertains but also educates and raises awareness for the struggles 
and issues of daily life. 
They have been showcased in an array of contexts in his debut EP 'Broken Keys' which is scheduled for release in November 2016.
He released a Second project which was an EP titled “Conversations of a Broken and Mended heart”. 
An experimental project that fused hip hop beats and traditional poetry with story telling. An expression of young love; the process of heart break and healing from love lost. 
The project helped to attract a new fan base that wouldn’t typically listen to poetry.
<br />

He released his third album titled "Things I Wish I Said" on 9th November, 2019 at Woodlands in Lilongwe, Malawi.
In 2021 He was selected to represent Malawi in the Africa Cup of Slam poetry, initial rounds where held virtually due to the spread of the coronavirus, 
the semi finals where held in Addis Ababa, Ethiopia. The second edition of the Africa Cup of Slam poetry saw over 33 countries compete and carry their nations flags.
<br />

In 2021 Marumbo Parnter with Zeeya Creations to release a video of the poem titled My Son which deals with gender based violence, a message to all the sons and brother and fathers. 
<br />

        </p>
    </div>
        
    </div>


      </>
  )
}

export default Bio