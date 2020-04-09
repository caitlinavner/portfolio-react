import React from "react";
import "./styles/contact.css";

function Contact() {
    return (
      <div>
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
        <div id="main container" class="container">
          <section className="main-section">
            <h1>Contact</h1>
            <form id="contact-form">
              <ul>
                <li>
                  <label for="name">Katie Avner</label>
                </li>
                <li>
                  <label for="email">katieavner@gmail.com</label>
                </li>
                <li>
                  <label for="message">Message</label>
                </li>
                <li>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    height="200px"
                  ></textarea>
                </li>
              </ul>
              <input type="submit" />
            </form>
          </section>
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
export default Contact;