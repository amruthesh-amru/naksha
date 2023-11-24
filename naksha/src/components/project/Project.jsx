import './project.scss'
import image1 from '../assets/Rectangle 17557.png'
import image1Demo1 from '../assets/DSC_9721.jpg'
import image1Demo2 from '../assets/DSC_9738.jpg'
import image1Demo3 from '../assets/DSC_9721.jpg'
import image2 from '../assets/Rectangle 17558.png'
import image2Demo1 from '../assets/DSC_9768.jpg'
import image3 from '../assets/Rectangle 17557 (1).png'
import image3Demo1 from '../assets/DSC_9771.jpg'
import image4Demo1 from '../assets/DSC_9763.jpg'
import image5Demo1 from '../assets/DSC_9750.jpg'
import Navbar from '../navbar/Navbar'

function Project() {
  return (
    <>
    <Navbar activeUlClass="projectUlActive" activeParaMid='projectParaActive'/>
    
        <section className="project_section1">
            <div className="text">
                <h1>NIKHIL'S PROJECT</h1>
            </div>
            <div className="main_image">
                <img src={image1Demo3} alt="" />
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
                    <div className="left">
                        <img src={image2Demo1} alt="" />
                    </div>
                    <div className="right">
                        <img src={image3Demo1} alt="" />
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
            <div className="images2">
                    <div className="left">
                        <img src={image4Demo1} alt="" />
                    </div>
                    <div className="right">
                        <img src={image5Demo1} alt="" />
                    </div>
                </div>
        </section>
        <section className="project_section3">
            <div className='wrapper_container'>
                <p>NEXT PROJECT</p>
                <div className="image_container">
                   <h1>MYSORE UNION</h1>
                </div>
                <p>A luxuries club & restaurant</p>
            </div>
        </section>
    </>
  )
}

export default Project