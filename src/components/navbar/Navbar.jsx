import {Link} from 'react-scroll';
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'


export const Navbar = ()=>{
  const [click, setClick] = useState(false);
  const  handleClick = ()=> setClick(!click)




  const [color, setColor] = useState(false)
  const changeColor = () =>{
    if(window.scrollY >= 100){
      setColor(true)
    }else{
      setColor(false)
    }
  };
  
  window.addEventListener('scroll', changeColor);

  return(
    <div className={color ? 'navbar__bg' : 'navbar'}>
      
      
      <h1 className='navbar__welcomeTxt'>{color ? 'Kori' : 'Welcome'}</h1>
      
      <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={10} style={{color:'#ffffff'}}/> 
          :  <FaBars size={10} style={{color:'#ffffff'}}/> }
      </div>
      <ul className="navbar__nav">
        <li className="navbar__item">
          <Link to='Home' activeClass="active" spy={true} smooth={true} offset={50} duration={1500} className="navbar__link" >
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link activeClass="active" spy={true} smooth={true} offset={50} duration={1500}   to='About' className="navbar__link" >
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link to='Works' activeClass="active" spy={true} smooth={true} offset={50} duration={1500}className="navbar__link" >
            Work
          </Link>
        </li>
        <li className="navbar__item">
          <Link to='Contact' activeClass="active" spy={true} smooth={true} offset={50} duration={2000}className="navbar__link" >
            Contact
          </Link>
        </li>
      </ul>
      <ul className={click ? "navbar__nav-active" : "navbar__nav2"}>
        <li className="navbar__item">
          <Link to='Home' activeClass="active" spy={true} smooth={true} offset={50} duration={1500} className="navbar__link" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link activeClass="active" spy={true} smooth={true} offset={50} duration={1500}   to='About' className="navbar__link" onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link to='Works' activeClass="active" spy={true} smooth={true} offset={50} duration={1500}className="navbar__link" onClick={handleClick}>
            Work
          </Link>
        </li>
        <li className="navbar__item">
          <Link to='Contact' activeClass="active" spy={true} smooth={true} offset={50} duration={2000}className="navbar__link" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
      
    </div>
  )

}


