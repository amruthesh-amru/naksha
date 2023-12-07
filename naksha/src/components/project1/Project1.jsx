import image1 from '../assets/sud1.jpg'
import image2 from '../assets/sud2.jpg'
import image3 from '../assets/sud3.jpg'
import image4 from '../assets/sud4.jpg'
import image5 from '../assets/sud5.jpg'
import image6 from '../assets/sud7.jpg'

import './Project1.scss'

import Navbar from '../navbar/Navbar'
import { NavLink } from 'react-router-dom'
function Project1() {
  return (
    <>
    <Navbar activeUlClass="projectUlActive" activeParaMid='projectParaActive'/>
    
    <section className="project_section1">
        <div className="text">
            <h1>SUDEER'S PROJECT</h1>
        </div>
        <div className="main_image">
            <img src={image1} alt="" />
        </div>
        <div className="text_content1">
            <div className="left">
                <h1>
                A
                UNIQUE
                AND
                IMPRESSIVE
                FAMILY HOME
                </h1>
            </div>
            <div className="right">
                    <p>
                    This distinctive and utterly captivating new-build family home was completed in the late summer of 2022. A stunning compilation of classic, contemporary detailing has formed the bones of our clients forever home.
                    </p>
            </div>
        </div>
            <div className="images1">
                {/* <div className="left">
                    <img src={image2} alt="" />
                </div>
                <div className="right">
                    <img src={image3Demo1} alt="" />
                </div> */}
        <div className="item1">
          <img className="grid_image" src={image2} alt="image 2"/>
        </div>
        <div className="item2">
          <img className="grid_image" src={image3} alt="image 1"/>
        </div>
        <div className="item3 long">
        </div>
        <div className="item4">
          <img className="grid_image" src={image4} alt="image 1"/>
        </div>
        <div className="item5">
          <img className="grid_image" src={image6} alt="image 1"/>
        </div>
            </div>
    </section>
    <section className="project_section2">
    <div className="text_content2">
            <div className="left">
                <h1>
                A TIMELESS
                HOME FOR
                YEARS TO COME
                </h1>
            </div>
            <div className="right">
                    <p>
                    Spread over 11,000 sq ft, this beautiful, super prime residence is
                    full of state of the art detailing, contemporary design and
                    effortless luxury.
                    </p>
            </div>
        </div>
        {/* <div className="images2">
                <div className="left">
                    <img src={image4Demo1} alt="" />
                </div>
                <div className="right">
                    <img src={image5Demo1} alt="" />
                </div>
            </div> */}
    </section>
    <section className="project_section3">
    <NavLink to='/project2'>
        <div className='wrapper_container'>
            <p>NEXT PROJECT</p>
            <div className="image_container image">
               <h1>ASPEN'S PROJECT</h1>
            </div>
            <p>A luxuries club & restaurant</p>
        </div>
        </NavLink>
    </section>
</>
  )
}

export default Project1