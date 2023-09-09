import React, { useEffect } from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../components/vision.css";

const cld = new Cloudinary({
    cloud: {
      cloudName: 'gdscrgit'
    }
  });
  
const logoLeft = cld.image('/gdsc/etc/leftBracket_nzkaae'); 
const logoRight = cld.image('/gdsc/etc/rightBracket_d7u5hb'); 

const VisionC = () => {

    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);

    return (
      
      <div style={{textAlign: 'center',fontFamily: 'Google Sans Bold', width: '100%'}}><hr></hr>
      <h1 data-aos = 'fade-up' style={{fontSize: '2rem', fontFamily: 'Google Sans Bold'}}>Our Vision</h1>
      {/* <section className='Content' style={{alignSelf:'center',paddingTop: '10px', marginTop: '50px'}}> */}
        {/* <div className='container-fluid text-center' style={{width:'95%', margin:'0%'}}>h */}
      <div className="row align-items-center" style={{width: '150rem', marginLeft:'3%'}}>
      <div className="col"></div>
        <div className="col">
          <AdvancedImage className="brackets" cldImg={logoLeft} /> </div>
        <div className="col-6">
          <p data-aos = 'fade-up' style={{fontSize:'1.5em',fontFamily: 'Google Sans Regular'}}>While working in today's ever-changing technological world, GDSC seeks to guide every fellow student who is interested in studying new topics while also providing opportunities to improve their skills. Our goal is to innovate, improve, learn and implementing the knowledge we own towards benefit of every learner. Together we create and comprehend every unique identity.</p>
          </div> 
        <div className="col">
          <AdvancedImage className="brackets" cldImg={logoRight} /> </div>
          <div className="col"></div>
      </div>
      {/* </div> */}
      {/* </section> */}<hr></hr>
      </div>
      
    )
}
export default VisionC
