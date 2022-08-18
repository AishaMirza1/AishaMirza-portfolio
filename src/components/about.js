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
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! Fast-forward to today, and I’ve had the privilege of working at
            an advertising agency,
          </p>
          <p className="about-description-txt ">
            a start-up, a huge corporation, and a student-led design studio. My
            main focus these days is building accessible, inclusive products and
            digital experiences at Upstatement
          </p>
          <p className="about-description-txt ">
            for a variety of clients. I also recently launched a course that
            covers everything you need to build a web app with the Spotify API
            using Node & React. Here are a few technologies I’ve been working
            with recently:
          </p>
        </div>
        <picture className="img-box">
          <img
            className="img"
            src={require("../imgs/img.jpg")}
            alt="aisha mirza"
          ></img>
          <div className="overlay"></div>
          <div className="img-box-after">abc</div>
        </picture>
      </div>
    </section>
  );
}
