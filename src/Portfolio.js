import React from "react";
import "./styles/portfolio.css";

function Portfolio() {
  return (
    <div>
      <header id="main-container">
        <div className="container">
          <a href="/" id="logo">
            Katie Avner
          </a>
          <nav className="navbar">
            <a href="/"></a>About />
            <a href="/Portfolio">Portfolio</a>
            <a href="/Contact">Contact</a>
          </nav>
        </div>
      </header>

      <div>
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
              classNameName="portfolio-img"
              src="../images/github-icon.jfif"
            />
          </div>
          <div className="col-sm">     <h4>Weather App...be prepared!</h4>
            <a href="https://github.com/caitlinavner/homework6WeatherApp">
              5 Day Weather App on GitHub
            </a>
            <a href="https://caitlinavner.github.io/homework6WeatherApp/">
              5 Day Weather App
            </a>
            <img
              alt=""
              classNameName="portfolio-img"
              src="../images/weather-icon.png"
            /></div>
          <div className="col-sm">   <h4>Team Profile Generator</h4>
            <a href="https://github.com/caitlinavner/developer-profile-generator.git">
              Team Generator on GitHub
            </a>
            <a href="https://github.com/caitlinavner/team-profile-generator.git">
              Team Generator
            </a>
            <img
              alt=""
              classNameName="portfolio-img"
              src="../images/teamwork.jfif"
            /></div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm">  <h4>Note Taker</h4>
            <a href="https://github.com/caitlinavner/note-taker.git">
              Note Taker on GitHub
            </a>
            <a href="https://still-thicket-11771.herokuapp.com/">Note Taker</a>
            <img
              alt=""
              classNameName="portfolio-img"
              src="../images/note-taker.png"
            /></div>
          <div className="col-sm"><h4>Pizza Box: Not just for pizza.</h4>
            <h6>An untapped recipe search app.</h6>
            <a href="https://github.com/caitlinavner/PizzaBox">
              Pizza Box on GitHub
            </a>
            <a href="https://caitlinavner.github.io/PizzaBox/">Pizza Box</a>
            <img alt="" classNameName="portfolio-img" src="../images/pizza.jpg" /></div>
          <div className="col-sm"><h4>TICKR</h4>
            <h6>A News App. Come see what makes the world tick.</h6>
            <a href="https://github.com/caitlinavner/project2.git">
              TICKR on GitHub
            </a>
            <a href="https://unit15project2.herokuapp.com">TICKR</a>
            <img alt="" classNameName="portfolio-img" src="../images/TICKR.png" /></div>
        </div>
      </div>
     

      <footer>
        <div classNameName="container">
          Get to know me and my work!
          <nav>
            <a href="https://www.linkedin.com/in/caitlin-avner-8aba9586/">
              LinkedIn
            </a>
            <a href="https://github.com/caitlinavner">GitHub</a>
            <a href="https://docs.google.com/document/d/1U2DjzObr5NoO-WeJA6viymzerMdlwQaSqOHMtOhN8Os/edit?usp=sharing">
              Resume
            </a>
          </nav>
          Copyright@
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
