import './home.scss'
import Navbar from "../navbar/Navbar"
import image1 from '../assets/3d-rendering-luxurious-villa-with-contrasting-realistic-rendering-wireframe 1.png'
import image2 from '../assets/Logo.png'
import image3 from '../assets/image 39.png'
import image4 from '../assets/Rectangle 17572.png'
import image5 from '../assets/Homepage 15.png'
import image6 from '../assets/Group 1171278296.png'
import image7 from '../assets/Rectangle 17553.png'
import image8 from '../assets/image 47.png'
import { NavLink } from 'react-router-dom'

function Home() {

  return (
    <>
        <Navbar/>
        <div className="home_wrapper">
        <section className='home_section1'>
        {/* <div className="home_image">
          <img className='image1' src={image1} alt="" />
        </div> */}
          <div className="image2_container">
          <img  src={image2} alt="" />
          </div>
        </section>
         <section className='home_section2'>
          <div className="home_content">
          <div className="home_h1_container">
         <h1>
          HIGH-END
          INTERIORS &
          EXTERIORS
         </h1>
          </div>
          <div className="home_h2_container">
         <h2>Design</h2>
          </div>
          <div className="home_p_container">
            <p>Nakhsha is a offers a full range of bespoke interior design services — from initial concept and aesthetic counselling to coordination, execution and magazine-worthy finishing touches.</p>
          </div>
          </div>
        </section>

       <section className="package_section">
          <div className="package_section_container">
          <div className="package_h1_container">
        <h1>OUR</h1>
          <h1 className='alignRight'>PACKAGES</h1>
          </div>
          </div>
        </section>
        <div className="package_cards">
          <div className="package_card_container">
                <NavLink to='/packages'>
              <div className="card">
                <h1>Premium Home</h1>
                <h1>1799 /-* Sq Ft.</h1>
                <p>View Details</p>
              </div>
                    </NavLink>
                    <NavLink to='/packages'>
              <div className="card">
              <h1>Luxury Home</h1>
                <h1>2199 /-* Sq Ft.</h1>
                <p>View Details</p>
              </div>
              </NavLink>
          </div>
        </div>
        </div>
        <div className="package_image">
          {/* <img src={image3} alt="" /> */}
        </div>
        <div className="experience">
          <div className="experience_content">
            <div className="left">
                <h1><span >Experience,</span></h1>
                <h1>TECHNOLOGY,</h1>
                <h1><span className='span'>DESIGN</span></h1>
            </div>
            <div className="right">
                <p>Our specialisation is the construction of a residential building. We have many years of experience in this segment, so we can offer the construction part, including the supply of all technologies.</p>
            </div>
          </div>
          <img src={image4} alt="" />
        </div>
         {/*<section className="process_section">
            <div className="process_section_container">
              <div className="process_image">
                <div className="process_h1_container">
                <h1>OUR</h1>
                <span>

                <h1>PROCESS</h1>
                </span>
                </div>
                <img src={image5} alt="" />
              </div>
            </div>

            <div className="project_status">
              <div className="project_container">
                <div className="project_left">
                    <img src={image6} alt="" />
                </div>
                <div className="project_right">
                    <div className="project_content">
                      <div className="top">
                        <h1>75+</h1>
                      </div>
                      <div className="bottom">
                      <p>Completed projects</p>
                      </div>
                    </div>
                    <div className="project_content">
                    <div className="top">
                    <h1>20+</h1>
                    </div>
                      <div className="bottom">
                      <p>Ongoing projects</p>
                      </div>
                    </div>
                    <div className="project_content">
                    <div className="top">
                    <h1>7lakhs+</h1>
                    </div>
                      <div className="bottom">
                      <p>Total built-up area</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </section>
          <section className='home_bottom_section'>
            <div className='bottom_top'>
            <h1>WE WILL BUILD 
            YOUR <span>DREAM HOUSE</span></h1>
            </div>
            <div className='bottom_bottom'>
               <img src={image7} alt="" />
            </div>

          </section>
          <div className="last_section">
              <div className="last_section_content">
            <p>GET IN TOUCH</p>
                <h1 >LET’S</h1>
                <h1 className='h1_second'>WORK</h1>
                <h1 className='h1_third'>TOGETHER</h1>
                <h1 className='h1_fourth'>Connect</h1>
                <div className="contact_content">
                  <div className="contact_left">
                  <i className="fa-solid fa-angles-right icon"/>
                  <p> SEND US MESSAGE CALL </p>
                  </div>
                  <div className="contact_left">
                  <i className="fa-solid fa-angles-right icon"/>
                  <p> CALL  +96069 66266</p> 
                  </div>
                </div>
              </div>

          
                <div className="contact_image_container1">
                  <img src={image8} alt="" />
                </div>
          </div> */}

          
    </>
  )

}

export default Home