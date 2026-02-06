import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='d-flex justify-content-between col-12' style={{ height: "10vh", color: "black", backgroundColor: "orangered" }}>
        <div className='d-flex justify-content-start align-items-center col-6' style={{ fontSize: "25px",backgroundColor: "green" }}>
          <div>Logo</div>
           </div>
        <div className='d-flex justify-content-end align-items-center col-6 gap-5' style={{ fontSize: "25px"}}>
            <div>Home</div>
            <div>Login</div>
          <div>Register now</div>                                                      
        </div>
           
       
      </div>
      <div className='d-flex justify-content-between align-items-center col-12' style={{ fontSize:"25px",height:"90vh",color:"black",backgroundColor:"pink"}}>
          <div className='col-4'>1</div>
          <div className='col-4'>2</div>
          <div className='col-4'>3</div>
        </div>
    </div>
  )
}

export default Header