import React from "react";
import "./styles/contact.css";

function Contact() {
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
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">
                  Contact <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <section id="contact-form">
          <div>
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div
                    className="col-sm-8 col-sm-offset-2"
                    id="contact-container"
                  >
                    <div>
                      <h2>Contact Me</h2>
                    </div>
                    <form
                      method="post"
                      action="mailto:katieavner@gmail.com"
                      data-form-title="CONTACT US"
                    >
                      <input type="hidden" data-form-email="true" />
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          required=""
                          placeholder="Name*"
                          data-form-field="Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          required=""
                          placeholder="Email*"
                          data-form-field="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          placeholder="Phone"
                          data-form-field="Phone"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Message"
                          rows="7"
                          data-form-field="Message"
                        ></textarea>
                      </div>
                      <div>
                        <button type="submit" class="btn btn-lg btn-danger">
                          Contact Me
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
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