import React from 'react'
import './css/Gallery.css'
import Photo1 from './images/Gallery1.png'
import Photo2 from './images/Gallery2.png'
import Photo3 from './images/Gallery3.png'
import Photo4 from './images/Gallery4.png'
import Photo5 from './images/Gallery5.png'
import Photo6 from './images/Gallery6.png'

export default function Gallery() {
  return (
    <div className='Gallery my-3' id='gallery'>
    <h1 className="text-center">Our Gallery</h1>
      <section>
    <div className="Gallary-card">
      <img src={Photo4} alt="Gym Gallary" />
    </div>
    <div className="Gallary-card">
      <img src={Photo6} alt="Gym Gallary" />
    </div>
    <div className="Gallary-card">
      <img src={Photo2} alt="Gym Gallary" />
    </div>
    <div className="Gallary-card">
      <img src={Photo3} alt="Gym Gallary" />
    </div>
    <div className="Gallary-card">
      <img src={Photo1} alt="Gym Gallary" />
    </div>
    <div className="Gallary-card">
      <img src={Photo5} alt="Gym Gallary" />
    </div>
  </section>
  {/* </div> */}
    </div>
  )
}
