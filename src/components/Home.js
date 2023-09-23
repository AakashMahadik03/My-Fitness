import React from 'react';
import './css/Home.css'
import landingImg from './images/3dlanding.png'
import Gallery from './Gallery';
import ContactUS from './ContactUs';
import Testimonial from './Testimonial';
export default function LandingPage() {
  return (
    <>    
    <div className="landing-page d-flex flex-wrap">
    <h1 className='heading'>Sweat <span style={{color:'red'}}>Today</span>, Shine <span style={{color:'green'}}>Tomorrow</span></h1>
    <div className='image'>
      <img src={landingImg}  alt='landing page'/>
    </div>
    </div>
    <Gallery/>
    <Testimonial/>
    <ContactUS/>


    </>
  );
}
