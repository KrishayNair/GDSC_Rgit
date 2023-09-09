import React from 'react'
import "../components/Feed.css";
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
// import {fill} from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'gdscrgit'
  }
});    
      
const post1 = cld.image('/gdsc/feed/post1_ynivgm'); 
const post2 = cld.image('/gdsc/feed/post2_fkzmry'); 
const post3 = cld.image('/gdsc/feed/post3_onhto1'); 
const post4 = cld.image('/gdsc/feed/post4_lhbkui'); 
const post5 = cld.image('/gdsc/feed/post5_pmzmvn'); 
const post6 = cld.image('/gdsc/feed/post6_a3gbkf'); 
//   myImage1.resize(fill().width(260).height(35));

// import post1 from '../images/post1.png';

// import post2 from "../images/post2.png";
// import post3 from "../images/post3.png";
// import post4 from "../images/post4.png";
// import post5 from "../images/post5.png";
// import post6 from "../images/post6.png";


// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



function Feed() {
  return (
   
    <div >
         <section className='Main'>
            <div className="HeadingCover">
        <h1 className='Heading'>
            <span className="letterO">O</span>
            <span className="letterU">U</span>
            <span className="letterR">R</span>
            <span>          </span>
            <span className="letterF">F</span> 
            <span className="letterE">E</span>
            <span className="letterE2">E</span>
            <span className="letterD">D</span>
        </h1>
        </div>
        
            
        </section>
        <section className='Content'>
        <div className="row">
            <div className="column">
            <a href="https://www.instagram.com/p/CimGy-Lv1St/" target="_blank">
            {/* <img src={post1} className="FeedImage" alt="..." /> */}
            <AdvancedImage className="FeedImage" cldImg={post1} /> 
            </a>
            </div>
            <div className="column">
            <a href="https://www.instagram.com/p/CimEZ9Mvtzv/" target="_blank">
            <AdvancedImage className="FeedImage" cldImg={post2} /> 
            {/* <img src={post2} className="FeedImage" alt="..." /> */}
            </a>
            </div>
            <div className="column">
            <a href="https://www.instagram.com/p/Cil9uHeKgpb/" target="_blank">
            <AdvancedImage className="FeedImage" cldImg={post3} /> 
            {/* <img src={post3} className="FeedImage" alt="..." /> */}
            </a>
            </div>
        </div>
        <div className="row">
            <div className="column">
            <a href="https://www.instagram.com/p/CigwUhRK2pd/" target="_blank">
            {/* <img src={post4} className="FeedImage" alt="..." /> */}
            <AdvancedImage className="FeedImage" cldImg={post4} /> 
            </a>
            </div>
            <div className="column">
            <a href="https://www.instagram.com/p/CiRilHks8cD/" target="_blank">
            <AdvancedImage className="FeedImage" cldImg={post5} /> 
            {/* <img src={post5} className="FeedImage" alt="..." /> */}
            </a>
            </div>
            <div className="column">
            <a href="https://www.instagram.com/p/CiO1ghML5k0/" target="_blank">
            <AdvancedImage className="FeedImage" cldImg={post6} /> 
            {/* <img src={post6} className="FeedImage" alt="..." /> */}
            </a>
            </div>
        </div>
        </section>
        </div>
    
  )
}

export default Feed
