import React, { useState, useEffect } from 'react';
import Project from "../components/ProjectCard";
// import Footer from "../components/Footer"

import '../components/projectCard.css'

import { Outlet } from 'react-router-dom';

import techImage from "../assets/tech-blog.png";
import jeopardyImage from "../assets/Jeopardy-Gameboard.png";
import bookImage from "../assets/book-review.png";
import noteImage from "../assets/note-app.png";
import weatherImage from "../assets/Weather-app.png";
import textImage from "../assets/text-editor.png";
import calculator from "../assets/calculator.png";
import pokemonQuiz from "../assets/pokemonQuiz.png";

export default function Portfolio() {
  const projects = [{
    id: 1,
    title: "Tech Blog Application",
    description: "This applicaton allows users to make, update and comment on blog posts about web development. Users must be logged in to make blog posts. All front end rendered by handlebars.",
    image: techImage,
    deployedLink: "https://aqueous-peak-96674-87f7ff9c0b31.herokuapp.com/ ",
    gitHubLink: "https://github.com/jtdoaks/Tech-Blog-Application"
  },
  // {
  //   id: 2,
  //   title: "Jeopardy Game",
  //   description: "This application allows users to play a Jeopardy-based trivia quiz game by selecting categories and answering questions to earn points. The game fetches random categories and questions from the jservice.io API and provides an interactive webpage for users to play.",
  //   image: jeopardyImage,
  //   deployedLink: "https://kevalpatel6.github.io/Jeopardy/",
  //   gitHubLink: "https://github.com/jtdoaks/Jeopardy/tree/main"
  // },
  {
    id: 3,
    title: "Book Review Website",
    description: "This platform is designed to bring book enthusiasts together, allowing users to share their thoughts and opinions on their favorite books while also discovering new reads through the reviews of others.",
    image: bookImage,
    deployedLink: "https://jtdoaks.github.io/BookReview/",
    gitHubLink: "https://github.com/jtdoaks/BookReview"
  },
  {
    id: 4,
    title: "Note Taking App",
    description: "This project demonstrates the setup of an Express web application with API and HTML routes. It includes a function to send POST requests to an API endpoint.",
    image: noteImage,
    deployedLink: "https://jtdoaks.github.io/Note-Taking-App/",
    gitHubLink: "https://github.com/jtdoaks/Note-Taking-App"
  },
  {
    id: 5,
    title: "Weather Tracker",
    description: "This is a web application that provides a 5-day weather forecast for a given city using data from the OpenWeatherMap API. The application displays temperature, wind speed, and humidity for each day.",
    image: weatherImage,
    deployedLink: "https://jtdoaks.github.io/Weather-Application",
    gitHubLink: "https://github.com/jtdoaks/Weather-Application"
  },
  {
    id: 6,
    title: "Text Editing App",
    description: "This project is a Progressive Web Application using webpack, service workers and manifest.",
    image: textImage,
    deployedLink: "https://jtdoaks.github.io/PWA-Text-Editor/",
    gitHubLink: "https://github.com/jtdoaks/PWA-Text-Editor"
  },
  {
    id: 7,
    title: "Calculator App",
    description: "This is a simple calculator project built with JavaScript, HTML and CSS many fundamental skills.",
    image: calculator,
    deployedLink: "https://jtdoaks.github.io/Calculator-App/",
    gitHubLink: "https://github.com/jtdoaks/Calculator-App"
  },
  {
    id: 8,
    title: "POKéMON Quiz",
    description: "This project  is a responsive web application crafted with HTML, CSS, and JavaScript, featuring a dynamic quiz interface, countdown timer, and high score tracking for an engaging user experience..",
    image: pokemonQuiz,
    deployedLink: "https://jtdoaks.github.io/Coding-Quiz/ ",
    gitHubLink: "https://github.com/jtdoaks/Coding-Quiz"
  },
  // {
  //   id: 9,
  //   title: "Placeholder App",
  //   description: "This project is a placeholder for now.",
  //   image: textImage,
  //   deployedLink: "https://jtdoaks.github.io/PWA-Text-Editor/",
  //   gitHubLink: "https://github.com/jtdoaks/PWA-Text-Editor"
  // },

  ]

  return (
    <div className="projectsDiv">
      <h1 className="projectsTitle">My Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-lg-4 col-md-6 col-sm-12">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              deployedLink={project.deployedLink}
              gitHubLink={project.gitHubLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}