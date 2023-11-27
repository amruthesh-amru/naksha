import React from 'react'
import './packages.scss'
import Navbar from '../navbar/Navbar'
function Packages() {
  return (
    <>
      <Navbar/>
      <div className='heading'>

        <h1 >
        our packages
      </h1>
      </div>

      <section className="package_details_section">

      

      <div className="package_cards">
          <div className="package_card_container">
          <div className="card">
          <h1>Premium Home</h1>
              <h1>1799 /-* Sq Ft.</h1>
              </div>
              <details>
	<summary>
		<span className="summary-title">Design details</span>
		<div className="summary-chevron-up">
    <i className="fa-solid fa-chevron-up"></i>
		</div>
	</summary>

	<div className="summary-content">
    <li>Working drawing for execution</li>
    <li>Schedule of openings. (Doors and windows sizes)</li>
    <li>Sectional Drawings</li>
    <li>MEP (Plumbing & Electrical) Drawings</li>
  </div>
	<div className="summary-chevron-down">
  <i className="fa-solid fa-chevron-down"></i>
		</div>
  </details>
              <details>
	<summary>
		<span className="summary-title">Design details</span>
		<div className="summary-chevron-up">
    <i className="fa-solid fa-chevron-up"></i>
		</div>
	</summary>

	<div className="summary-content">
    <li>Working drawing for execution</li>
    <li>Schedule of openings. (Doors and windows sizes)</li>
    <li>Sectional Drawings</li>
    <li>MEP (Plumbing & Electrical) Drawings</li>
  </div>
	<div className="summary-chevron-down">
  <i className="fa-solid fa-chevron-down"></i>
		</div>
  </details>
            </div>
            </div>

                

      </section>







     

      
    </>
  )
}

export default Packages