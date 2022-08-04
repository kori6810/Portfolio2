import React from "react"
import {Link} from 'react-scroll';
import hero1 from '../../../assets/hero2.jpeg'
import hero2 from '../../../assets/hero3.jpeg'
import hero3 from '../../../assets/hero4.jpeg'

export const SidePics = ({info}) => {
  const img = [hero1,hero2,hero3]
  return (
    <div className="sidebar__picWrapper">
      <img src={img[info?.pic]} alt="sidebar"  className="sidebar__pics"/>
      <figcaption className="sidebar__caption">
        
        <Link activeClass="active" spy={true} smooth={true} offset={50} duration={1000}  className="sidebar__link" to={info?.id}>{info?.title}</Link>
      </figcaption>
    </div>
    
  )
}


export default SidePics