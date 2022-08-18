import React from "react";

export default function Icons() {
  return (
    <div>
      <div className="icons-logo">
        <ul className="icons-list">
          <li>
            <a
              href="https://github.com/AishaMirza1"
              target="blank"
              className="icon"
            >
              <span className="logo">
                <ion-icon name="logo-github"></ion-icon>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aisha-mirza/"
              target="blank"
              className="icon"
            >
              <span className="logo">
                <ion-icon name="logo-linkedin"></ion-icon>{" "}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="icons-email">
        <a className="icon" href="mailto:aishamirza0002@gmail.com">
          <span className="logo">aishamirza0002@gmail</span>
        </a>
      </div>
    </div>
  );
}
