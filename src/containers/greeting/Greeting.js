import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={new URL("https://drive.google.com/file/d/1_nhb9oJDrBbDhppJtd5MMThh79jRRJeU/view?usp=sharing")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Resume"/>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt=""
              src={new URL("https://i.ibb.co/J7J8mDm/Blue-Minimalist-Circle-Framed-Instagram-Profile-Picture-2.png")}
              className="your-image-class"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
