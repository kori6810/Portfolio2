import React from "react"
import hero1 from '../../../assets/hero2.jpeg'
import hero2 from '../../../assets/hero3.jpeg'
import hero3 from '../../../assets/hero4.jpeg'

export const SidePics = ({info}) => {
  const img = [hero1,hero2,hero3]
  return (
    <div className="sidebar__picWrapper">
      <img src={img[info?.pic]} alt="sidebar"  className="sidebar__pics"/>
      <figcaption className="sidebar__caption">
        
        <a className="sidebar__link" href="">{info?.title}</a>
      </figcaption>
    </div>
    
  )
}


export default SidePics