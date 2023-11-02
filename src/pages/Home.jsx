import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import coverPhoto from "../assets/cover-photo.png";
import bigRock from "../assets/bigRock.png";
import skippingRocks from "../assets/skippingRocks.png";
import throwing from "../assets/throwing.png";

import './home.css'

const homeImages = [
  coverPhoto,
  bigRock,
  skippingRocks,
  throwing
];

const imageLabels = [
  "Redwood State Forest, September 2018",
  "Big Rock, Crescent City California, February 2020",
  "Skipping Stones, Six Rivers National Forest, September 2018",
  "Throwing Rocks at Shilsole Bay, Washington, March 2023",
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCodingSkills, setShowCodingSkills] = useState(false);
  const [showSecondButton, setShowSecondButton] = useState(false);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
  };

  const toggleCodingSkills = () => {
    setShowCodingSkills((prevShowCodingSkills) => !prevShowCodingSkills);
    // Set showSecondButton to true when the coding skills section is shown
    setShowSecondButton(true);
  };

  return (
    <div className="home-root">
      <div className="homeText">
        <div className="col-md-12 order-1 order-md-2">
          <div className="home-body">
            <h5 className="home-title">{showCodingSkills ? 'Coding Skills' : 'About Me'}</h5>
            <div className="content-container">
              {showCodingSkills ? (
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>MySql2</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Bootstrap</li>
                </ul>
              ) : (
                <p className="about-text">This is about John. Something about how I love plants and also coding. Idk dichotomy. philosophy about coding. its about where I am right now. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate cum provident, libero voluptatibus nesciunt repellendus fugit voluptas, beatae id, ad quasi expedita omnis totam obcaecati distinctio. Mollitia, ducimus incidunt.</p>
              )}
            </div>
            <button type="button" className="btn btn-light" onClick={toggleCodingSkills}>
              {showCodingSkills ? 'About Me' : 'My Skills'}
            </button>
            {showCodingSkills && showSecondButton && (
              <Link to="/Portfolio" className="btn btn-light">My Projects</Link>
            )}
          </div>
        </div>
      </div>
      <div className="imgBorderDiv col-md-8 order-2 order-md-1">
        <div className="homeImgDiv">
          <div className="image-container">
            <img
              className="home-img"
              src={homeImages[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              onClick={handleImageClick}
            />
            <p className="imageLabel">{imageLabels[currentImageIndex]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}