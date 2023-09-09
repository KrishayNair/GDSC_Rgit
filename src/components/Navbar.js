import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";
import "../components/navbar.css";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: "gdscrgit",
  },
});

const myImage1 = cld.image("/gdsc/etc/side_logo_poe19n");
myImage1.resize(fill().width(300).height(50));

const Navbar = () => {
  // const myStyle = {
  //     "padding": '9px 25px',
  //     "font-size": '1.1rem',
  //     "height": '46px',
  //     "margin-bottom": '-0px'
  // }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="GDSC-logo">
          <AdvancedImage cldImg={myImage1} />
        </Link>

        <ul className="nav-list">
          <li className="nav-items">
            <Link to="/events" className="nav-link">
              Events
            </Link>
          </li>
          <li className="nav-items">
            <a
              href="https://github.com/orgs/Google-Developers-Student-Club-RGIT/repositories"
              className="nav-link"
              // style={myStyle}
            >
              Projects
            </a>
          </li>
          <li className="nav-items">
            <Link to="/teams" className="nav-link">
              Team
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/feed" className="nav-link">
              Feed
            </Link>
          </li>
          <li className="nav-items">
            <button
              href="https://www.google.com/"
              className="nav-button-contact"
            >
              Contact Us
            </button>
            {/* ok */}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
