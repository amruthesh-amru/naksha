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
                    <ul>
                    <li id='active'><NavLink to='/'>HOME</NavLink></li>
                    <li id='active'><NavLink to='about'>ABOUT</NavLink></li>
                    <li id='active'><NavLink to='project'>PROJECTS</NavLink></li>
                    <li id='active'><NavLink to='contact'>CONTACT</NavLink></li>                      
                    </ul>
                </div>
            </div>
        </nav>
   </>
  )
}

export default Navbar