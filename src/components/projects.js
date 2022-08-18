import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
export default function Project() {
  return (
    <section className="project-section">
      <div className="project section-headingbox">
        <span className="nav-no heading-no">02. </span>
        <p className="heading-territory" href="#">
          Projects I've Build
        </p>
        <ul className="project-list">
          <li className="project grid">
            <div className="project-content">
              <div>
                <p className="project-outline"> Featured Project</p>
                <h3 className="project-name">
                  <a
                    target="blank"
                    href="https://aishamirza1.github.io/Omnifood/"
                    className="project-name"
                  >
                    Omnifood
                  </a>
                </h3>
                <div className="project-description">
                  <p>
                    Frontend of a wesite that is an AI powered website that will
                    make you eat healthy again. Used HTML CSS JAVASCRIPT to make
                    yhis website.
                  </p>
                </div>
                <div className="project-icon-list">
                  <a
                    href="https://github.com/AishaMirza1/Omnifood"
                    target="blank"
                    className="icon"
                  >
                    <span className="logo">
                      <ion-icon name="logo-github"></ion-icon>
                    </span>
                  </a>
                  <a
                    href="https://aishamirza1.github.io/Omnifood/"
                    target="blank"
                    className="icon"
                    name="share"
                  >
                    <span className="logo">
                      <ion-icon name="share-outline"></ion-icon>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-image-box">
              <img
                src={require("../imgs/omnifood.png")}
                alt="omnifood img"
                className="project-img"
              ></img>
              <div className="overlay"></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
