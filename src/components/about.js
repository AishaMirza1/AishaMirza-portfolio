import React from "react";
export default function About() {
  return (
    <section className="about-section" id="about-section">
      <div className="grid grid--2-cols">
        <div className="about-description-box">
          <div>
            <span className="nav-no heading-no">01. </span>
            <p className="heading-territory" href="#">
              About Me
            </p>
          </div>
          <p className="about-description-txt ">
            Hello! My name is Aisha and I enjoy creating things that live on the
            internet. My interest in frontend web development started back in
            2019 when I made my first simple webpage using HTML and CSS.
          </p>
          <p className="about-description-txt ">
            after that I wanted to study that in detail so I did web development
            course on Udemy.
          </p>
          <p className="about-description-txt ">
            Now I make websites with HTML, CSS and Javascript. I am alsolearning
            React and plan to become a frontend web developer.
          </p>
        </div>
        <picture className="img-box">
          <img
            className="img"
            src={require("./imgs/img.jpg")}
            alt="aisha mirza"
          ></img>
          <div className="overlay"></div>
          <div className="img-box-after">abc</div>
        </picture>
      </div>
    </section>
  );
}
