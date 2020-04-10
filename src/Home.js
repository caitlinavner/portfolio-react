import React from "react";
import "./styles/home.css";

function Home() {
  return (
    <div className="App">
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
              <a className="nav-link" href="/About">
                About <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Portfolio">
                Portfolio
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
      <div id="main container" className="container">
        <br />
        <h1>About Me</h1>
        <img
          src="images/profilepic.jfif"
          alt="Katie"
          height="200 px"
          width="200 px"
        ></img>
        <p>
          {" "}
          Greetings and thanks for stopping by! Let me quickly introduce myself.
          I am currently working towards completing a certificate in Full Stack
          Web Development offered through the University of Oregon. I am an
          aspiring front end web developer with a passion for creativity and an
          eye for design.
          <br />
          Quick and eager to learn, I am constantly in search of ways to improve
          upon my craft and increase my knowledge. I am detail obsessed and team
          oriented. I really do believe that "teamwork makes the dream work". In
          addition to my excellent interpersonal and communication skills, I
          have a knack for solving problems and formulating creative solutions.
          <br />I have experience with HTML, CSS and other UI/UX platforms,
          JavaScript, JQUERY, web APIs, Node, Nodejs, ES6, React and Reactjs.
          I'm slated to graduate April 2020 and am so excited to start this new
          chapter of my life!
        </p>
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

export default Home;