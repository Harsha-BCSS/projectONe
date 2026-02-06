import React from 'react'

const Vinay = () => {
  return (
    <div>
      <style>
        {`
          @keyframes bounceAnimation {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-30px);
            }
          }
        `}
      </style>
      <div>

        <div className='d-flex justify-content-evenly align-items-center'style={{height:"33vh"}} >
          <div className='d-flex justify-content-center align-items-center' style={{
            height: '100px',
            width: "100px",
            backgroundColor: "orangered",
            animationName: "bounceAnimation",
            animationDuration: ".5s",
            animationIterationCount: "infinite",
            animationDirection: "alternate"
          }}><h6 style={{ textAlign: "center", display: "flex", textBox: "center" }}>Vinay</h6></div>
          <div className='d-flex justify-content-center align-items-center' style={{
            height: '100px',
            width: "100px",
            backgroundColor: "blue",
            animationName: "bounceAnimation",
            animationDuration: ".5s",
            animationIterationCount: "infinite",
            animationDirection: "alternate"
          }}><h6 style={{ textAlign: "center",display:"flex", textBox:"center" }}>Vinay</h6></div>
          <div className='d-flex justify-content-center align-items-center' style={{
            height: '100px',
            width: "100px",
            backgroundColor: "green",
            animationName: "bounceAnimation",
            animationDuration: "5s",
            animationIterationCount: "infinite",
            animationDirection: "flow"
          }}><h6 style={{ textAlign: "center" }}>Vinay</h6></div>
        </div>
        <div className='d-flex justify-content-center align-items-center' style={{height:"33vh"}}>
          <div className='d-flex justify-content-center align-items-center' style={{
            height: '100px',
            width: "100px",
            backgroundColor: "black",
            color:"white",
            animationName: "bounceAnimation",
            animationDuration: "1s",
            animationIterationCount: "infinite",
            animationDirection: "alternate"
          }}><h6 style={{ textAlign: "center" }}>Vinay</h6></div>
        </div>
          <div className='d-flex justify-content-evenly align-items-center' style={{ height: "33vh" }}>
          <div className='d-flex justify-content-center align-items-center' style={{
            height: '100px',
            width: "100px",
            backgroundColor: "pink",
            animationName: "bounceAnimation",
            animationDuration: "1s",
            animationIterationCount: "infinite",
            animationDirection: "alternate"
          }}><h6 style={{ textAlign: "center" }}>Vinay</h6></div>
          <div className='d-flex justify-content-center align-items-center' style={{
            height: '100px',
            width: "100px",
            backgroundColor: "violet",
            borderRadius:"16px",
            animationName: "bounceAnimation",
            animationDuration: "1s",
            animationIterationCount: "infinite",
            animationDirection: "alternate"
          }}><h6 style={{ textAlign: "center" }}>Vinay</h6></div>
        </div>
      </div>

    </div>
  )
}

export default Vinay