import React from "react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { RiKakaoTalkLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a
            href="https://www.instagram.com/sirojiddinkamoljonov/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a href="https://twitter.com/SirojiddinKamo6" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://github.com/soso6810" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://sharer.kakao.com/talk/friends/picker/link"
            target="_blank"
          >
            <RiKakaoTalkLine />
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link
              to="Home"
              activeClass="active"
              spy={true}
              smooth={true}
              // offset={10}
              duration={1500}
              className="footer__link"
            >
              Home
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="About"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              About
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="Works"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1500}
            >
              Projects
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="Contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <p className="copyright">Kori SKJ © 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
