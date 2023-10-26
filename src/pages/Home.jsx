import React, { useState, useEffect } from 'react';

import coverPhoto from "../assets/cover-photo.png";
import bigRock from "../assets/bigRock.png";
import skippingRocks from "../assets/skippingRocks.png";
import throwing from "../assets/throwing.png";
import fieldIowa from "../assets/fieldIowa.png";


import './home.css'

const homeImages = [
 coverPhoto,
 bigRock,
 skippingRocks,
 throwing,
 fieldIowa

]

export default function About() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
    }, 3000); // Change images every 3 seconds 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-root">
      <div className="home-body">
        <h5 className="home-title">About Me</h5>
        <p className="about-text">This is about John. Something about how I love plants and also coding. Idk dichotomy. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate cum provident, libero voluptatibus nesciunt repellendus fugit voluptas, beatae id, ad quasi expedita omnis totam obcaecati distinctio. Mollitia, ducimus incidunt.</p>
      </div>

      <div className="homeImgDiv">
        <div className="image-container">
          {homeImages.map((image, index) => (
            <img
              key={index}
              className={`home-img ${index === currentImageIndex ? "visible" : ""}`}
              src={image}  
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


{/* <img className="home-img" src={coverPhoto} alt="Card image cap"></img>
<div className="bottomRight">Bottom Right</div> */}