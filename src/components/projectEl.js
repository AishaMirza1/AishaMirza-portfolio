import React from "react";

export default function Project(props) {
  const src = props.src;

  return (
    <div>
      <li className="project grid" id={props.name}>
        <div className="project-content">
          <div>
            <p className="project-outline"> Featured Project</p>
            <h3>
              <a target="blank" href={props.webLink} className="project-name">
                {props.name}
              </a>
            </h3>
            <div className="project-description">
              <p>{props.description}</p>
            </div>
            <div className="project-icon-list">
              <a href={props.githubLink} target="blank" className="icon">
                <span className="logo">
                  <ion-icon name="logo-github"></ion-icon>
                </span>
              </a>
              <a
                href={props.webLink}
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
            src={require(`${src}`)}
            alt={props.alt}
            className="project-img"
          ></img>
          <div className="overlay"></div>
        </div>
      </li>
    </div>
  );
}
