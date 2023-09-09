import React from 'react';
import './member.css';

const Member = ({name, image, position, github_link, linkedin_link}) => {
  return (
    <>
        <div className="member-card">
            <img src={image} alt="member" />
            <h3>{name}</h3>
            <p>{position}</p>
            <div className="member-links">
                <a href={github_link} target="__blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href={linkedin_link} target="__blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    </>
  )
}

export default Member;