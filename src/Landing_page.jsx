import React from 'react'
import logo from "./Images/logobig.png"
import Linkedinbannernew from "./Images/Linkedinbannernew.png"
const Landing_page = () => {
  return (
    <div>
      <div className='d-flex col-12' style={{ height: "9vh", }}>
        <div className='d-flex col-1'><img src={logo} style={{ height: "60px" }} /></div>
        <div className='d-flex col-11 align-items-center' style={{ color: 'black', backgroundColor: "skyblue" }}>
          <div className='col-3'>Home</div>
          <div className='col-3'>contact Us</div>
          <div className='col-3'>Sign In</div>
          <div className='col-3'>Sign Up</div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center' style={{ height: "80vh", color: "black", backgroundColor: "lightgreen" }}>
        <img src={Linkedinbannernew} height={200} />
      </div>
      <div className='d-flex' style={{ height: "10vh", color: "black", backgroundColor: "blue" }}>
        <div className='d-flex justify-content-between align-items-center flex-column col-2' style={{ color: "black", backgroundColor: "lightpink" }}>
          <div>Phone Number</div>
          <div>E-Mail</div>
          <div>Address</div>

        </div>
        <div className='d-flex justify-content-center align-items-center col-4' style={{ color: "black", backgroundColor: "lightblue" }}>
          <p>I am a front-end developer passionate about creating clean, responsive, and user-friendly websites.</p>
        </div>
        <div className='d-flex justify-content-center align-items-center col-6' style={{ color: "black", backgroundColor: "lightyellow" }}>
          <p>I build modern web interfaces using HTML, CSS, JavaScript, and React.</p>
        </div>
      </div>
    </div>


  )
}

export default Landing_page