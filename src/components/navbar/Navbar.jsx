
import {Link} from 'react-scroll';


export const Navbar = ()=>{

  return(
    <div className='navbar'>
      
      
      <h1 className='navbar__welcomeTxt'>Welcome</h1>
      
      
      <ul className="navbar__nav">
        <li className="navbar__item">
          <Link to='Home' activeClass="active" spy={true} smooth={true} offset={50} duration={1500} className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link activeClass="active" spy={true} smooth={true} offset={50} duration={1500}   to='About' className="navbar__link">
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link to='Works' activeClass="active" spy={true} smooth={true} offset={50} duration={1500}className="navbar__link">
            Work
          </Link>
        </li>
      </ul>
      
    </div>
  )

}


