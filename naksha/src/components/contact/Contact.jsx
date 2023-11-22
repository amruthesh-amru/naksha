import './contact.css'

function Contact() {
  return (
    <>
    
  <div className="full_container">
  <div className="contact_container">
   <div className="content">
   <p>GET IN TOUCH</p>
        <div className="text_container">
            <h1 className='first'>LET’S WORK</h1>
            <h1 className='second'>TOGETHER</h1>
            <h1 className='third'>Connect</h1>
        </div>
</div>

   <div className="form">
   <div className="container">
     
      <form action="https://formsubmit.co/amrutheshamru16@gmail.com" method="POST">
         <div className="form-row">
            <div className="input-data">
               <input type="text" name='firstname' required />
               <div className="underline"></div>
               <label >First Name</label>
            </div>
            <div className="input-data">
               <input type="text" name='lastname' required />
               <div className="underline"></div>
               <label >Last Name</label>
            </div>
         </div>
         <div className="form-row">
            <div className="input-data">
               <input type="text" name='email' required />
               <div className="underline"></div>
               <label >Email Address</label>
            </div>
            <div className="input-data">
               <input type="text" name='subject' required />
               <div className="underline"></div>
               <label >Subject</label>
            </div>
         </div>
         <div className="form-row">
         <div className="input-data textarea">
            <textarea rows="8" cols="80" name='message' required ></textarea>
            <br />
            <div className="underline"></div>
            <label >Write your message</label>
            <br />
            <div className="form-row submit-btn">
               <div className="input-data">
                  <div className="inner"></div>
                  <input type="submit" value="submit" />
               </div>
            </div>
      </div>
      </div>
      </form>
         
      </div>
   </div>
      </div>
  </div>
  
   <footer>
      <div className="footer_container">
         <div className="contact">
            <h3>CONTACT US</h3>
            <p>eo@nakhsha.in</p>
            <p>+96069 66266</p>
         </div>
         <div className="address">
         <h3>ADDRESS</h3>
            <p>#5489,First Floor, 6th Main Rd, Vijay Nagar 2nd </p>
            <p>Stage, Vijayanagar, Mysuru, Karnataka 570017</p>
         </div>
         <div className="social_account">
               <h3>INSTAGRAM</h3>
               <h3>VIEW ON MAP</h3>
         </div>
      </div>
   </footer>

        </>
  )
}

export default Contact