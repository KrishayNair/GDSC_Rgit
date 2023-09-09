import React from 'react';
import "../components/CarouselMain.css";
// import logoLeft from "../images/leftBracket.png"
// import logoRight from "../images/rightBracket.png"
// import image1 from "../images/webDev.svg"
// import image2 from "../images/appDev.svg"
// import image3 from "../images/cloudComputing.svg"
// import image4 from "../images/CC.svg"
// import image5 from "../images/AI.svg"
// import image6 from "../images/CyberSecurity.svg"
// import image7 from "../images/Robotics.svg"

import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'gdscrgit'
        }
      });
      
      const logoLeft = cld.image('/gdsc/etc/leftBracket_nzkaae'); 
      const logoRight = cld.image('/gdsc/etc/rightBracket_d7u5hb'); 
      const image1 = cld.image('/gdsc/etc/webDev_fouzsj'); 
      const image2 = cld.image('/gdsc/etc/appDev_sbfbp3'); 
      const image3 = cld.image('/gdsc/etc/cloudComputing_cpegc9'); 
      const image4 = cld.image('/gdsc/etc/CC_kp3oh4'); 
      const image5 = cld.image('/gdsc/etc/AI_axidsc'); 
      const image6 = cld.image('/gdsc/etc/CyberSecurity_lspeyx'); 
      const image7 = cld.image('/gdsc/etc/Robotics_p8gugo'); 

      image1.resize(fill().width(330).height(350));
      image2.resize(fill().width(330).height(550));
      image3.resize(fill().width(330).height(550));
      image4.resize(fill().width(330).height(550));
      image5.resize(fill().width(330).height(550));
      image6.resize(fill().width(330).height(550));
      image7.resize(fill().width(330).height(550));

function CarouselMain() {
  return (
    <section id="carousel-Main">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <img src={image1} className="carouselImage" alt="..." /> */}
            <AdvancedImage className="carouselImage2" cldImg={image1} /> 
            <div className="carousel-content2">
              <h1 className="heading1">Web Development</h1>
              <p className="sub-heading">
                Web development, in its broadest sense, refers to the tasks associated with creating websites for hosting on an intranet or the internet. Furthermore, it refers to all of the activities, modifications, and tasks required to design, develop, manage, and improve a website in order to maximise its functionality, user experience, and speed.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img src={image2} className="carouselImage" alt="..." /> */}
            <AdvancedImage className="carouselImage2" cldImg={image2} /> 
            <div className="carousel-content2">
              <h1 className="heading2">App Development</h1>
              <p className="sub-heading">
                Application development is the process of developing a computer programme or a collection of programmes to carry out the various tasks needed by a business. Applications assist businesses in automating processes and increasing efficiency, from calculating monthly expenses to scheduling sales reports.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img src={image3} className="carouselImage2" alt="..." /> */}
            <AdvancedImage className="carouselImage2" cldImg={image3} /> 
            <div className="carousel-content2">
              <h1 className="heading3">Cloud Computing</h1>
              <p className="sub-heading">
                Cloud computing works by allowing client devices to access data and cloud applications from remote physical servers, databases, and computers via the internet. Cloud-based storage enables you to save files to a remote database rather than a proprietary hard drive or local storage device.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img src={image4} className="carouselImage2" alt="..." /> */}
            <AdvancedImage className="carouselImage2" cldImg={image4} /> 
            <div className="carousel-content2">
              <h1 className="heading4">CC and Open Source</h1>
              <p className="sub-heading">
                Competitive programming is a mind sport that takes place over the Internet or a local network, with participants attempting to program according to given specifications. Sport programmers are people who compete in sports.
                The term "open source" originally referred to open source software (OSS). Open source software is code that is intended to be publicly accessible, meaning that anyone can view, modify, and distribute it as they see fit.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img src={image5} className="carouselImage2" alt="..." /> */}
            <AdvancedImage className="carouselImage2" cldImg={image5} /> 
            <div className="carousel-content2">
              <h1 className="heading1">AI and ML</h1>
              <p className="sub-heading">
                Artificial intelligence (AI) / Machine learning (ML) is a technology that enables software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. The ability of artificial intelligence to rationalize and take actions that have the best chance of achieving a specific goal is its ideal feature. Machine learning is a subset of artificial intelligence.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img src={image6} className="carouselImage2" alt="..." /> */}
            <AdvancedImage className="carouselImage2" cldImg={image6} /> 
            <div className="carousel-content2">
              <h1 className="heading2">Cyber Security</h1>
              <p className="sub-heading">
                Cybersecurity is the defense against cyber threats to internet-connected systems, including data, software, and hardware. This procedure is used by both private individuals and commercial entities to safeguard their data from unauthorized access to data storage facilities and other computerized systems.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img src={image7} className="carouselImage2" alt="..." /> */}
            <AdvancedImage className="carouselImage2" cldImg={image7} /> 
            <div className="carousel-content2">
              <h1 className="heading3">IoT and Robotics</h1>
              <p className="sub-heading">
                Robotics is concerned with the design, construction, operation, and application of robots. Robotics aims to create devices that can aid and support people. The Internet of Things (IoT) is a network of physical objects ("things") that are embedded with sensors, software, and other technologies that allow them to connect to and exchange data with other devices and systems via the Internet.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span aria-hidden="true">
            {/* <img src={logoLeft} className="brackets" /> */}
            <AdvancedImage className="brackets" cldImg={logoLeft} /> 
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span aria-hidden="true">
            {/* <img src={logoRight} className="brackets" /> */}
            <AdvancedImage className="brackets" cldImg={logoRight} /> 
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default CarouselMain
