import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../components/footer.css";

const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {

    console.log(e.target);

    e.preventDefault();

    emailjs.sendForm('service_n2ycp72', 'template_vgucucx', form.current, '9ZLuxaGnptEnKGl2u')
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div>
        <div className='footer'>
          <div className="box1">
            <h3 className='footer-heading'>Contact Us</h3>
            <div className="info-box">
              <div className="info">
                <i className="fa-solid fa-location-dot"></i>
                <p>Rajiv Gandhi Institute of Technology, Versova, Mumbai, India</p>
              </div>
              <div className="info">
                <i className="fa-solid fa-envelope"></i>
                <p>gdscrgit@gmail.com</p>
              </div>
            </div>
            <div className="icons">
              <a
                href=""
                target="_blank"
                className="fb-icon icon"
              >
                <i className="fa-brands fa-facebook-f fb"></i>
              </a>
              <a
                href="https://www.instagram.com/gdscrgit/"
                target="_blank"
                className="insta-icon icon"
              >
                <i className="fa-brands fa-instagram insta"></i>
              </a>
              <a
                href=""
                target="_blank"
                className="twitter-icon icon"
              >
                <i className="fa-brands fa-twitter twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gdsc-rgit"
                target="_blank"
                className="linked-icon icon"
              >
                <i className="fa-brands fa-linkedin-in linked"></i>
              </a>
            </div>
            <div className="icons">
              <a
                href="https://medium.com/@gdscrgit"
                target="_blank"
                className="fb-icon icon"
                style={{ "padding": "7px 4px" }}
              >
                <i className="fa-brands fa-discord twitter"></i>
              </a>
              <a
                href=""
                target="_blank"
                className="insta-icon icon"
                style={{ "padding": "7px 6px" }}
              >
                <i className="fa-brands fa-youtube insta"></i>
              </a>
              <a
                href="https://discord.gg/bBBHY7Rdt8"
                target="_blank"
                className="twitter-icon icon"
                style={{ "padding": "7px" }}
              >
                <i className="fa-brands fa-github linked"></i>
              </a>
              <a
                href="https://github.com/Google-Developers-Student-Club-RGIT"
                target="_blank"
                className="linked-icon icon"
                style={{ "padding": "7px 5px" }}
              >
                <i className="fa-brands fa-medium"></i>
              </a>
            </div>
          </div>
          {/* </div><div className="vl"></div> */}
          <div className="box2">
            <h3 className='footer-heading'>Give Your Ideas</h3>
            <form ref={form} onSubmit={sendEmail}>
            {/* <form> */}
              <input type="text" placeholder=' Enter your name' name="to_name" required/>
              <input type="email" placeholder=' Enter your email' name="from_name" required/>
              <textarea id="" cols="60" rows="10" placeholder='Enter your idea' name="message" required></textarea>
              <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>

          </div>
        </div>
        <div className="footer-text">
          <h2> <a href='https://docs.google.com/document/d/1OgaK0-9NiZNBQFM9MjbDgnzAd2mJCqJy6-arnZqfcEM/edit' target="_blank">Code of Conduct</a> | Copyright &#169; GDSC RGIT</h2>
        </div>
      </div>
      {/* {openModel && <Model />} */}
    </>
  )
}

export default Footer;