import React from 'react'
import stagePic1 from '../images/stagePic1.jpg'
import stagePic2 from '../images/stagePic2.jpg'
import stagePic3 from '../images/stagePic3.jpg'
import studio1 from '../images/studioOne.jpg'
import studio2 from '../images/studioTwo.jpg'
import studio3 from '../images/studioThree.jpg'


const ImageGrid = () => {
  return (
    <div className="container grid grid-cols-3 gap-1 mx-auto ">
    <div className="w-full rounded drop-shadow-xl hover:transition hover:duration-1000 hover:scale-125">
        <img src={stagePic1}
        width={300} height={200}
            alt="studio" />
    </div>
    <div className="w-full rounded drop-shadow-xl hover:transition hover:duration-1000 hover:scale-125">
        <img src={stagePic3}
        width={300} height={200}
            alt="studio" />
    </div>
    <div className="w-full rounded drop-shadow-xl hover:transition hover:duration-1000 hover:scale-125">
        <img src={stagePic2}
        width={300} height={200}
            alt="studio" />
    </div>
    <div className="w-full rounded drop-shadow-xl hover:transition hover:duration-1000 hover:scale-125">
        <img src={studio1}
        width={300} height={200}
            alt="stage" />
    </div>
    <div className="w-full rounded drop-shadow-xl hover:transition hover:duration-1000 hover:scale-125">
        <img src={studio2}
        width={300} height={200}
            alt="stage" />
    </div>
    <div className="w-full rounded drop-shadow-xl hover:transition hover:duration-1000 hover:scale-125">
        <img src={studio3}
       width={300} height={200}
            alt="stage" />
    </div>
</div>

  )
}

export default ImageGrid