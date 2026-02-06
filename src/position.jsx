import React from 'react'

const Position = () => {
    return (
        <div>
            {/* <div className='d-flex justify-content-center align-items-center col-12' style={{height:"10vh",color:"violet",backgroundColor:"black",position:"fixed",top:"0",fontSize:"50px",fontFamily:"poppins"}} >
              <p>Header</p>
          </div>
          <div className='d-flex justify-content-center align-items-center col-12' style={{ height: "150vh", color: "black", backgroundColor: "violet", marginTop: "10vh", position: "fixed", fontSize: "100px", fontFamily: "poppins",position:"sticky" }} >
              <p>Body</p>
          </div>
          <div
              className='d-flex justify-content-center align-items-center col-12'
              style={{ height: "20vh", backgroundColor: "#333", color: "white" }}
          >
              <p>You've reached the bottom!</p>
          </div> */}
            <div style={{ height: "10vh" }} className='bg-info '>Header </div>
            <div style={{ height: "90vh", overflowY: "scroll" }}>
                <div style={{ height: "50vh" }} className='bg-danger'>vinay</div>
                <div style={{ height: "50vh" }} className='bg-success'>vinay</div>
                <div style={{ height: "50vh" }} className='bg-info'>vinay</div>
            </div>
        </div>
    )
}

export default Position