import React from "react";
import "./styles/portfolio.css";

function Portfolio() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg header">
        <a className="navbar-brand" href="/">
          Katie Avner
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Portfolio">
                Portfolio <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="title">
        <h1>Portfolio</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            {" "}
            <h4>Developer Profile Generator</h4>
            <a href="https://github.com/caitlinavner/developer-profile-generator.git">
              Profile Generator on GitHub
            </a>
            <a href="https://caitlinavner.github.io/developer-profile-generator/">
              Profile Generator
            </a>
            <img
              alt=""
              className="portfolio-img"
              src="../images/github-icon.jfif"
            />
          </div>
          <div className="col-sm">
            {" "}
            <h4>Weather App...be prepared!</h4>
            <a href="https://github.com/caitlinavner/homework6WeatherApp">
              5 Day Weather App on GitHub
            </a>
            <a href="https://caitlinavner.github.io/homework6WeatherApp/">
              5 Day Weather App
            </a>
            <img
              alt=""
              className="portfolio-img"
              src="../images/weather-icon.png"
            />
          </div>
          <div className="col-sm">
            {" "}
            <h4>Team Profile Generator</h4>
            <a href="https://github.com/caitlinavner/developer-profile-generator.git">
              Team Generator on GitHub
            </a>
            <a href="https://github.com/caitlinavner/team-profile-generator.git">
              Team Generator
            </a>
            <img
              alt=""
              className="portfolio-img"
              src="../images/teamwork.jfif"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h4>Note Taker</h4>
            <a href="https://github.com/caitlinavner/note-taker.git">
              Note Taker on GitHub
            </a>
            <a href="https://still-thicket-11771.herokuapp.com/">
              {" "}
              Note Taker{" "}
            </a>
            <img
              alt=""
              className="portfolio-img"
              src="../images/note-taker.png"
            />
          </div>

          <div className="col-sm">
            <h4>Pizza Box: Not just for pizza.</h4>
            <h6>An untapped recipe search app.</h6>
            <a href="https://github.com/caitlinavner/PizzaBox">
              Pizza Box on GitHub
            </a>
            <img alt="" className="portfolio-img" src="../images/pizza.jpg" />
          </div>
          <div className="col-sm">
            <h4>TICKR</h4>
            <h6>A News App. Come see what makes the world tick.</h6>
            <a href="https://github.com/caitlinavner/project2.git">
              TICKR on GitHub
            </a>
            <a href="https://unit15project2.herokuapp.com" TICKR>
              {" "}
            </a>
            <img alt="" className="portfolio-img" src="../images/TICKR.png" />
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg footer">
        <a className="navbar-brand" href="/">
          Get to know me and my work!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/caitlin-avner-8aba9586"
              >
                {" "}
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/caitlinavner">
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://docs.google.com/document/d/1U2DjzObr5NoO-WeJA6viymzerMdlwQaSqOHMtOhN8Os/edit?usp=sharing"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Portfolio;
