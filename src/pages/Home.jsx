import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import coverPhoto from "../assets/cover-photo.png";
import bigRock from "../assets/bigRock.png";
import skippingRocks from "../assets/skippingRocks.png";
import throwing from "../assets/throwing.png";

import bootstrap from "../assets/bootstrap.png";
import css3 from "../assets/css3.png";
import express from "../assets/express.png";
import github from "../assets/github-logo.png";
import html5 from "../assets/html5.png";
import jQuery from "../assets/jQuery.png";
import JavaScript from "../assets/JS.png";
import mern from "../assets/mern.jpg";
import mongodb from "../assets/mongodb.png";
import MySQL from "../assets/MySQL.jpg";
import nodeJS from "../assets/nodeJS.png";
import npmLogo from "../assets/npm_logo.png";
import ReactLogo from "../assets/React.png";
import GraphQL from "../assets/graphQL.jpg";

import './home.css';

const homeImages = [
  coverPhoto,
  bigRock,
  skippingRocks,
  throwing
];

const imageLabels = [
  "Redwood State Forest, September 2018",
  "Crescent City California, February 2020",
  "Six Rivers National Forest, September 2018",
  "Shilsole Bay, Washington, March 2023",
];

const skillLogos = [
  ReactLogo,
  JavaScript,
  mern,
  bootstrap,
  express,
  github,
  html5,
  css3,
  jQuery,
  mongodb,
  MySQL,
  nodeJS,
  npmLogo,
  GraphQL,
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCodingSkills, setShowCodingSkills] = useState(false);
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showSkillsOverlay, setShowSkillsOverlay] = useState(false);
  const [showPhotos, setShowPhotos] = useState(true);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
  };

  const toggleCodingSkills = () => {
    setShowCodingSkills((prevShowCodingSkills) => !prevShowCodingSkills);
    setShowSecondButton(true);
    setShowSkillsOverlay(true);

    // Toggle the visibility of photos and imgBorderDiv
    setShowPhotos((prevShowPhotos) => !prevShowPhotos);
  };

  return (
    <div className={`home-root col-md-12 col-lg-12 col-sm-12 order-1 order-md-1 ${showCodingSkills ? 'full-page' : ''}`}>
      <div className="homeText">
        <div className="bigDiv">
          <div className={`home-body ${showCodingSkills ? 'expanded' : ''}`}>
            <h5 className="home-title">{showCodingSkills ? 'Coding Skills' : 'About Me'}</h5>
            <div className="content-container">
              {showCodingSkills ? (
                <div className="skillsContainer">
                  <div className="skillsDiv">
                    {skillLogos.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Skill ${index + 1}`}
                        className="skillImages"
                      />
                    ))}
                  </div>
                </div>
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
      {showPhotos && (
        <div className="imgBorderDiv col-md-6 col-lg-6 col-sm-6 order-2 order-md-2">
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
      )}
    </div>
  );
}
