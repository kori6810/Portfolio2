import React, { useState, useEffect } from "react";
import Natures from "../../assets/Natures.jpg";
import Natures2 from "../../assets/Natures2.png";
import miniBank from "../../assets/bank.jpeg";
import miniBank2 from "../../assets/bank2.png";
import Trillo from "../../assets/Trillo.jpg";
import Trillo2 from "../../assets/Trillo2.png";
import Houzing from "../../assets/Houzing.jpg";
import Houzing2 from "../../assets/Houzing2.png";
import { FaTimes } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export function Projects() {
  const projectList = [
    {
      name: "Natures",
      tools: "CSS, Java Script",
      mainPic: Natures,
      webPic: Natures2,
      type: "Travel Agency Website",
      info: "This site is for Tour Agency. Advanced Css(SASS) is mostly emphisised skill in this project. It is fully responsive.",
      link: "https://natours-project-five.vercel.app/",
    },
    {
      name: "Mini Bank",
      tools: "Java Script",
      mainPic: miniBank,
      webPic: miniBank2,
      type: "Simple online banking app",
      info: "This application allows users to login, transfer funds to other accounts, borrow funds or close the account",
      link: "https://bankist-sage.vercel.app/",
    },
    {
      name: "Houzing",
      tools: "React JS / Styled Component",
      mainPic: Houzing,
      webPic: Houzing2,
      type: "This site is for selling, renting and buying houses.",
      info: "This is fully developed web-site which integrates with back-end also. There are almost all the features and parts that modern site can contain in this site. It is almost finished, I am STILL WORKING on it ",
      link: "https://houzing-sigma.vercel.app/home",
    },
    {
      name: "Trillo",
      tools: "CSS, SASS, Flexbox",
      mainPic: Trillo,
      webPic: Trillo2,
      type: "All-in-one-one booking App",
      info: "Sample website for a touring company that demonstrates modern responsive design ",
      link: "https://trillo-henna.vercel.app/",
    },
  ];

  const [click, setClick] = useState({ show: false, id: "" });

  const clickHandler = (n) => setClick({ show: true, id: n });
  const clickExit = () => setClick({ show: false, id: "" });

  return (
    <div className="projects" id="Works">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__grid">
        {projectList.map((val, index) => {
          console.log(projectList);
          return (
            <div className="projects__project1 projects__project">
              <img
                src={val.mainPic}
                alt="projects picture"
                className="projects__img"
              />
              <div className="projects__top">
                <h1>{val.name}</h1>
                <h2>{val.tools}</h2>
              </div>
              <div className="projects__bottom">
                <button
                  className="projects__btn--1 projects__btn"
                  onClick={() => clickHandler(index)}
                >
                  Learn More
                </button>
              </div>
              )
              {click.show && (
                <div className={"projects__overlay"}>
                  <div className={"projects__learn-more-box"}>
                    <img
                      src={projectList[click.id].webPic}
                      alt="web picture"
                      className="projects__webpics"
                    />

                    <div className="projects__content">
                      <h1>{projectList[click.id].name}</h1>
                      <h2>{projectList[click.id].type}</h2>
                      <p>{projectList[click.id].info}</p>
                      <div className="projects__visit-site-box">
                        <button className="projects__btn--2 projects__btn">
                          <a
                            href={projectList[click.id].link}
                            target="_blank"
                            className="projects__link"
                          >
                            Visit Site
                          </a>
                        </button>

                        <FaTimes
                          className="projects__exit"
                          onClick={clickExit}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
