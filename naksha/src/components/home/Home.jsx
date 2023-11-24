import './home.scss'
import Navbar from "../navbar/Navbar"
import image1 from '../assets/3d-rendering-luxurious-villa-with-contrasting-realistic-rendering-wireframe 1.png'
import image2 from '../assets/Logo.png'
function Home() {

  return (
    <>
        <Navbar/>
        <div className="home_wrapper">
        <section className='home_section1'>
        <div className="home_image">
          <img className='image1' src={image1} alt="" />
        </div>
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
          <div className="package_h1_container">
        <h1>OUR</h1>
          <h1 className='alignRight'>PACKAGES</h1>

          </div>


        </section>
        </div>
    </>
  )

}

export default Home