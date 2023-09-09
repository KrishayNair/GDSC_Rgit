import React from 'react';
import './Eventpage.css';
import '../App.css';
import '../components/Feed.css';
import 'aos/dist/aos.css';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'gdscrgit',
  },
});

const post3 = cld.image('/gdsc/feed/post3_onhto1');
const post5 = cld.image('/gdsc/feed/post5_pmzmvn');
const post7 = cld.image('/gdsc/feed/post7_skwuge');

const Eventpage = () => {
  return (
    <section className='Content event-content'>
      <section className='Main'>
        <div className='HeadingCover'>
          <h1 className='Heading'>
            <span className='letterO'>O</span>
            <span className='letterU'>U</span>
            <span className='letterR'>R</span>
            <span> </span>
            <span className='letterF'>E</span>
            <span className='letterE'>V</span>
            <span className='letterE2'>E</span>
            <span className='letterD'>N</span>
            <span className='letterU'>T</span>
            <span className='letterO'>S</span>
          </h1>
        </div>
      </section>
      <div>
        <div className='event-one-image'>
          <AdvancedImage
            className='FeedImage'
            cldImg={post3}
            data-aos='fade-right'
          />
          <div data-aos='fade-left'>
            <h1 style={{ fontFamily: 'Google Sans Medium Italic' }}>
              Android Compose Camp
            </h1>
            <h2 style={{ fontFamily: 'Google Sans Medium Italic' }}>
              3 Day event Completed
            </h2>
          </div>
        </div>
        <div className='event-two-image'>
          <AdvancedImage className='FeedImage' cldImg={post5} />
          <AdvancedImage className='FeedImage' cldImg={post7} />
          {/* <img src={require('../images/info-session.PNG')} className="FeedImage" alt='event'/> */}
        </div>
      </div>
    </section>
  );
};

export default Eventpage;
