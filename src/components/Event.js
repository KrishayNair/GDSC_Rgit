import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Event.css';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
// import { Link } from 'react-router-dom';
// import {fill} from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'gdscrgit'
  }
});

// const post1 = cld.image('/gdsc/feed/post3_onhto1');
// const post2 = cld.image('/gdsc/feed/post5_pmzmvn');
// const post3 = cld.image('/gdsc/feed/post7_skwuge');

const latEvent = cld.image('/gdsc/index/andriod-camp_xinidu');

const Event = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className='event-container'>
        <h1>Events Section</h1>
        <h2 className='heading-one'>
          Ongoing Event
        </h2>
        <h2 className='heading-two'>
          Android Compose Camp - 24th September 2022
        </h2>
        <AdvancedImage className="Fevent-latest" cldImg={latEvent} data-aos='fade-right'/>
        {/* <img
          className='event-latest'
          
          src={require('https://res.cloudinary.com/gdscrgit/image/upload/v1663871709/gdsc/index/andriod-camp_xinidu.png')}
          alt='event'
        /> */}
        <h2 className='heading-three'>Venue - Seminar Hall</h2>
        <h2 className='heading-four'>Time - 12:30 pm</h2>
        <a href="/events">Click to see More Events</a>
        {/* <Link to="/events" className="event-btn"> <p>Click to see more Events</p></Link> */}
      </div>
    </>
  );
};

export default Event;
