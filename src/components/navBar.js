import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <a className="logo-header" href="#">
        A
      </a>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-links">
            <span className="nav-no">01. </span>
            <a href="#about-section">About</a>
          </li>
          <li className="nav-links">
            <span className="nav-no">02.</span> <a href="#">Work</a>
          </li>
          <li className="nav-links">
            <span className="nav-no">03.</span> <a href="#">Contact</a>
          </li>
          <li>
            <a href="#" className="btn resume-btn">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

//#0a192f
