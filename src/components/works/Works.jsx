import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import Natures from '../../assets/Natures.png';
import Houzing from '../../assets/houzing.png';
import Trillo from '../../assets/trillo.png';
import { useInView } from 'react-intersection-observer';

export function Works() {
  
  return (
    <div className='works' id='Works'>
      
        <Hero >
          <div className="container">
            <Info />
            <div className="row">
              {cards.map((card, i) => (
                <div className="column">
                  <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">
                      {card.description}
                      <a href={card.link} className="weblink">Link</a></div>
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}



function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      <h2>
        Works
      </h2>
      
      <div className="notice">(best viewed at larger screen width)</div>
    </div>
  );
}

const cards = [
  {
    title: 'Natures 🍀',
    description:
      'This site is for Tour Agency. Advanced Css(SASS) is mostly emphisised skill in this project. It is fully responsive. A credit to origianl author, Jonas Schmedtman, is of course highly appreciated!. All UI design is his. I recreated it by myself according to his UI design.😁',
    image: Natures,
    link:'https://natours-project-five.vercel.app/',
    imageRatio: 784 / 1016
  },
  {
    title: 'Houzing 🏠',
    description:
      'This is my first big-project, I ever did, after learning HTML, CSS, Sass, Js, React.js. This is fully developed web-site which integrates with back-end also. This site is for selling, renting and  buying houses. There are almost all the features and parts that modern site can contain in this site. Such as: Login section, Carousel, Search Section, Carts, Form and others. All of them are reusable components.  ',
    image: Houzing,
    link:'https://houzing-sigma.vercel.app/home',
    imageRatio: 730 / 1030
  },
  {
    title: 'Trillo 🌆',
    description:
      "During time of learning, I did some minor projects for practising and enhencing my knowledge. They differ in a way they are build: for some of them I used only HTML and CSS(Sass) and for some others I used Js also. This is one of the first projects that I did and I used only CSS and JS for this Website",
    link:'https://trillo-henna.vercel.app/',
    image: Trillo,
    imageRatio: 730 / 1030
  }
];


