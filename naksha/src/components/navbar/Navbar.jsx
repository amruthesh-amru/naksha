import './navbar.scss'
import logo from '../assets/image 28.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
   
  return (
   <>
        <nav>
            <div className="nav_container">
                <div className="left">
                    <p>MYSORE’S BIGGEST PRIVATE CONSTRUCTION CONTRACTORS</p>
                </div>
                <div className="mid">
                    <img src={logo} alt="" />
                </div>
                <div className="right">
                    <ul id='ul'>
                    <li id='active'><NavLink to='/'>
                    <i className="fa-solid fa-angles-right"></i> HOME</NavLink></li>

                    <li id='active'><NavLink to='about'>
                    <i className="fa-solid fa-angles-right"></i> ABOUT</NavLink></li>

                    <li id='active'><NavLink to='project' >
                    <i className="fa-solid fa-angles-right"></i> PROJECTS</NavLink></li>

                    <li id='active'><NavLink to='contact'>
                    <i className="fa-solid fa-angles-right"></i> CONTACT</NavLink></li>                      
                    </ul>
                </div>
            </div>
        </nav>
   </>
  )
}

export default Navbar