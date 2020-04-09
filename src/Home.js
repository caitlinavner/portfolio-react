import React from "react";
import "./styles/home.css";

function Home() {
  return (
    <div className="App">
      <header id="masthead">
        <div className="container">
          <a href="/" id="logo">
            {" "}
            Katie Avner
          </a>
          <nav className="navbar">
            <a href="/">About</a>
            <a href="/Portfolio">Portfolio</a>
            <a href="/Contact">Contact</a>
          </nav>
        </div>
      </header>
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
      <footer>
        <div className="container">
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

export default Home;