import './project.scss'
import image1 from '../assets/Rectangle 17557.png'
// import image2 from '../assets/'
function Project() {
  return (
    <>
        <section className="project_section1">
            <div className="text">
                <h1>VITHMAS HOUSE</h1>
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
                <div className="images">
                    <img src="" alt="" />
                </div>
            </div>

        </section>
    </>
  )
}

export default Project