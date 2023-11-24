import './about.scss'
import image1 from '../assets/SRI_5075.jpg'
import image2 from '../assets/Rectangle 17554.png'
import image3 from '../assets/image 29.png'
import image4 from '../assets/Screenshot 2023-11-14 at 4.06 1.png'
import image5 from '../assets/DSC_2934.jpg'
import Navbar from '../navbar/Navbar'

function About() {
  return (
   <>
    <Navbar/>
      <section className="about_section1">
        <div className="about_text">
          <h1>About Us</h1>
        </div>
        <img src={image1} alt="" />
      </section>

      <div className="image2">
      <img src={image2} alt="" />
      </div>

      <div className="award_image">
        <img src={image3} alt="" />
      </div>

      <div className="about_text_content">
          <div className="left">
            <h1>
            SETTING
            STANDARDS
            IN LUXURY
            DESIGN
            </h1>
          </div>
          <div className="right">
            <p>
            We are building for the future, focused on innovative constructions. Nakhsha builders provide you with concrete construction solutions. A one-stop solution for all your construction needs. At Nakhsha, we are driven by values and customer delight. We are delivering premium quality projects in and out of Mysore since 2015. We are a contracting house dedicated towards building the best for you.
            </p>
            <br />
            <span><p>We are for the select few</p></span>
            <div className="text_image">
              <img src={image4} alt="" />
            </div>


          </div>
      </div>
      <div className="middle_image">
        <img src={image5} alt="" />
      </div>
      <div className="bottom_text_left">
        <p>
        Nakhsha is a luxury residential interior design company founded in 2015. we have collaborated their strong background
        and extensive experience in designing for high end luxury
        residential clients. They have been extremely fortunate to work
        on some outstanding designs and projects.
        </p>
        <br />
        <br />
        <p>
        The Nakhsha luxury design studio provides a complete
        design service by effortlessly coordinating every element of the
        project to an exemplary standard. Our multi-disciplined team of
        Interior Architects and Designers boast a wealth of knowledge
        and skills from many years of industry experience.
        </p>
      </div>
      <div className="bottom_text_right">
        <h1>
        10 YEARS
        EXPERIENCE
        ACROSS
        INTERIOR
        DESIGN
        </h1>
      </div>
      <div className="last">
        bottom padding 
      </div>
   </>
  )
}

export default About