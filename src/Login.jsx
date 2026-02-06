import React from 'react'

const Login = () => {
  return (
    <div style={{backgroundColor:"blue",height:"100vh"}}>
          <div> <img src='https://www.bluecloudsoftech.com/wp-content/uploads/2025/09/Logo.png'  style={{ backgroundColor: "white", height: "150px" , width:"250px",marginLeft:"650px",padding:"10px", marginTop:"80px"}} /> <h3 style={{textAlign:"center",padding:"20px"}}>Welcome To BCSS!!</h3> </div>
      <div > 
        <div className='justify-content-center align-items-center' style={{height:  "33px",width:"130px",backgroundColor:"white",fontSize:"33px", marginLeft:"700px", marginBottom:"20px" }}><h3>Username</h3></div>
        <div className='justify-content-center align-items-center' style={{ height: "33px", width: "120px", backgroundColor: "white", fontSize: "33px", marginLeft: "700px", marginBottom: "20px",textalign:"center"}}><h3>password</h3></div>
        <div className='justify-content-center align-items-center' style={{ height: "33px", width: "100px", backgroundColor: "white", fontSize: "33px", marginLeft: "700px", marginBottom: "20px" }}><h3>Login</h3></div>
        <div className='justify-content-center align-items-center' style={{ height: "33px", width: "210px", backgroundColor: "white", fontSize: "33px", marginLeft: "700px", marginBottom: "20px" }}><h3>forget Password</h3></div>
          </div>

    </div>
  )
}

export default Login