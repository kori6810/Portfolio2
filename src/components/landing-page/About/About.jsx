

 import React from "react";
 import ReactDOM from "react-dom";
 
 
 import { useInView } from 'react-intersection-observer';


function About() {
   
   const { ref, inView} = useInView();
  

  
   return (
     <div className={`${inView ? 'visible' : 'About'}`} id="About" ref={ref}>
      <h1 className="About__heading">About</h1>
      <div className="About__content">
      <div className="About__textWrapper">
        <h2>
          {inView ? 'hello' : 'hidden'},
        </h2>
        <h3>My name is Kori. I am 21-years-old,young and passionate web-developer who is learning and trying hard to pursuade his dreams.
        </h3>
        <h3>
        Currently I am senior student of Gachon Universtiy, IT Department.
          Despite I major in Computer Engeneering, I chose and prefer Web-developing for my future career. 
        </h3>
        <h3>
        I started learning Web Developing just a year ago.  During this short time, I finished 15+ online courses, and did 20+ miner and 3+ big projects projects.
          You can check some of my works below 😇
        </h3>
        


      </div>
      <div className="About__pic">
       
       
      </div>

      </div>

     </div>
   );
 }
 
export {About}


 