import './about.scss'
import image1 from '../assets/SRI_5075.jpg'
import image2 from '../assets/Rectangle 17554.png'
import image3 from '../assets/image 29.png'
import image4 from '../assets/Screenshot 2023-11-14 at 4.06 1.png'
import image5 from '../assets/DSC_2934.jpg'
import Navbar from '../navbar/Navbar'
import owner_image1 from '../assets/Rectangle.png'
import owner_image2 from '../assets/Rectangle (1).png'

import member1 from '../assets/member1.png'
import member2 from '../assets/member2.png'
import member3 from '../assets/member3.png'

import award1 from '../assets/award1.png'
import award2 from '../assets/award2.png'

import list from '../assets/lsit.png'
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
              {/* <img src={image4} alt="" /> */}
             <h1> We are Elite</h1>
            </div>


          </div>
      </div>



<div className="about_owner_section">
    <h1>
    COMMITED
TO SUPERB QUALITY
    </h1>
    <div className="owner_image1">
      <img src={owner_image1} alt="" />
    </div>
    <div className="owner_text1">
   <p>
   After graduating in MBA and his executive education from IM - Bangalore. In 2013, He started his first venture when Swiggy didn't exist called "Cheers Mysore" (a food delivery startup).Vinay Shankar started his Real Estate &Construction journey with a leading construction company in Mysore, which had a turnover of 100 crores. It is his hard work and commitment that led him to be CEO at age of 24 years.
   </p>
    </div>
    <div className="owner_name">
   <h1> Vinay Shankar</h1>
    </div>
    <div className="owner_image1">
      <img src={owner_image2} alt="" />
    </div>
    <div className="owner_text1">
   <p>
   As time changes, the rise of female entrepreneurs in India has shown that women in business are capable of matching the success of their male counterparts. Pratibha Nayak is testimony to the fact. Known as self-made entrepreneur, Pratibha Nayak is known either for creating success stories from her own brands or partnering in new businesses. Today ,she owns a couple of brands operating in Mysuru and her hometown Mangalore. These brands have made a mark in the industry catering to awide spectrum of audiences.
   </p>
    </div>
    <div className="owner_name">
   <h1> Pratibha Nayak</h1>
    </div>

    <div className="team">
      <h1>THE TEAM</h1>
    </div>

    <div className="team_member">
      <img src={member1} alt="" />
      <img src={member2} alt="" />
      <img src={member3} alt="" />


     
        
        <h1 className='name1'>Ravi Kumar</h1>
        <h1 className='name2'>Sowrabha Prakash</h1>
        <h1 className='name3'>Adithya A A</h1>
       
        <h1 className='role1'>Chief operating officer</h1>
        <h1 className='role2'>Head of designs</h1>
        <h1 className='role3'>Head of controls</h1>
    </div>
</div>


    <div className="awards">
    <img className='award1' src={award1} alt="" />
    <img className='award2' src={award2} alt="" />

    <div className="awardText1">
      <h1>THE RECOGNITION</h1>
      <h2>Awards 2023</h2>
    </div>

    <ul>

      <img src={list} className='list1' alt="" /> 
      <img src={list} className='list2' alt="" /> 
      <img src={list} className='list3' alt="" /> 

      <li>
     Best civil contractor <br />
      <span>

(for nakhsha square,mysuru)
      </span>
      </li>
      <li>
      Best interior design & Execution <br />
      <span>

(For tapovan villa,mysuru)
      </span>
      </li>
      <li>
      Best Architectural design <br />
      <span>
(for MICA PU College,mysuru)

      </span>
      </li>
    </ul>

    <img className='groupImage' src={image5} alt="" />


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
    </div>














    {/* <section className="about_owner_section">
      <div className="about_owner">
        <h1>COMMITED
TO SUPERB QUALITY</h1>

      <div className="about_owner1">
        <div className="owner_image">
          <img src={owner_image1} alt="" />
        </div>
        <div className="owner_text">
          <p>
          After graduating in MBA and his executive education from IM - Bangalore. In 2013, He started his first venture when Swiggy didn't exist called "Cheers Mysore" (a food delivery startup).Vinay Shankar started his Real Estate &Construction journey with a leading construction company in Mysore, which had a turnover of 100 crores. It is his hard work and commitment that led him to be CEO at age of 24 years.
          </p>
        </div>
      </div>

      </div>
    </section> */}




      {/* <div className="middle_image">
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
      </div> */}
   </>
  )
}

export default About