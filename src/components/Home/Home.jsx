import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import Img1 from "../../assets/img1.jpeg";

export const Home = () => {
  const { ref, inView } = useInView();

  return (
    <Parallax  bgImage={Img1} bgImageAlt="the cat" strength={200}>
      <div className="home" id="Home">
        <p
          className={`${
            inView ? "animation__text1 animation__text" : "home__text"
          }`}
          ref={ref}
        >
          Hello, I'm <span className="home__highlight">Kori</span>
        </p>

        <h2
          className={`${
            inView ? "animation__text2 animation__text" : "home__text"
          }`}
        >
          I'm a Front-End Developer.
        </h2>
        <Link
          to="Works"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
        >
          <button
            className={`${inView ? "animation__button" : "home__button"}`}
          >
            View My Work
            <span>
              <HiArrowNarrowRight className="home__arr" />
            </span>
          </button>
        </Link>
      </div>
    </Parallax>
  );
};
