import React from "react";
import ReactDOM from "react-dom";
import ProfilePic from "../../assets/me.jpeg";
import { Parallax } from "react-parallax";
import Img2 from "../../assets/img3.jpeg";


export function About() {
  return (
    <Parallax
      blur={5}
      bgImage={Img2}
      bgImageAlt="the cat"
      strength={200}
    >
      <div className="visible" id="About">
        <h1 className="About__heading">About</h1>
        <div className="About__content">
          <div className="About__textWrapper">
            <h2>Hello,</h2>
            <h3>
              My name is Sirojiddin(Kori). I am 21-years-old,young and
              passionate web-developer who is learning and trying hard to
              pursuade his dreams.
            </h3>
            <h3>
              Currently I am senior student of Gachon Universtiy, IT Department.
              Despite I major in Computer Engeneering, I chose and prefer
              Web-developing for my future career.
            </h3>
            <h3>
              I started learning Web Developing just a year ago. During this
              short time, I finished 15+ online courses, and did 20+ miner and
              3+ big projects. You can check some of my works below 😇
            </h3>
          </div>
          <div className="About__pic"></div>
        </div>
      </div>
    </Parallax>
  );
}
