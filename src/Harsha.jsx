import React from 'react'

const Harsha = () => {
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
      <div style={{ height: "auto", backgroundColor: "lavender", padding: "10px" }}>
        <div className='d-flex justify-content-center align-items-center col-12 gap-4' style={{ fontSize: "20px", padding: "10px" }}>
          <div className='col-3'></div>
          <div className='col-6' style={{ fontSize: "50px", padding: "20px" }}>
            <div className='btn' style={{ color: "violet" }}>Home</div>
            <div className='btn' style={{ color: "violet" }}>Projects</div>
            <div className='btn' style={{ color: "violet" }}>About</div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <div className=''>
            <div className='mt-5' style={{ fontSize: "20px", fontFamily: "poppins" }}>Hey i'm Harsha👋</div>
            <div className='d-flex' style={{ fontFamily: "poppins" }}>
              <div style={{ color: "violet", fontSize: "50px" }}>Front</div>
              <div style={{ fontSize: "50px" }}>end</div>
            </div>
            <div style={{ fontSize: "50px", fontFamily: "poppins" }}>Developer</div>
            <div style={{ fontSize: "25px", fontFamily: "poppins" }}>i'm a frontend developer based in india, i'll help you build beautiful websites and users will love😍❤️
            </div>
          </div>
          <div className='d-flex border align-items-center' style={{ height: "300px", width: "300px", borderRadius: "50%" }}><img src='https://media.licdn.com/dms/image/v2/D5603AQGkX_z7Mman4w/profile-displayphoto-scale_200_200/B56ZuxTK_lHkAY-/0/1768206152201?e=1772064000&v=beta&t=EGdoqRTpf0BCR5LpFT_shZ5ndY-cdNSzqL9NFUexydo' style={{ height: "300px", width: "300px", borderRadius: "50%", animationName: "bounceanimation", animationDirection: "alternate", animationDuration: ".5s", animationIterationCount: "infinite" }} />
          </div>
        </div>
        <div style={{ height: "10vh" }}></div>
        <div>
          <div className='d-flex gap-2' style={{ padding: "20px" }} >
            <div className='btn btn-dark text-light' style={{ fontSize: "20px", fontFamily: "poppins", padding: "10px" }}>Get In Touch</div>
            <div className='btn btn-light text-dark' style={{ fontSize: "20px", fontFamily: "poppins", padding: "10px" }}>Browse Projects</div>
          </div>
        </div>
        <div style={{ padding: "20px" }} >
          <div style={{ fontSize: "100px", fontFamily: "bold" }}>About Me</div>
          <div style={{ fontSize: "30px", fontFamily: "poppins" }}>Developing beautiful and functional websites is what i love doing, and that's why i give my all in every new challenge</div>
        </div>
        <div className='d-flex gap-3 mt-5' style={{ padding: "20px" }} >
          <div className='d-flex justify-content-center col-5 ' style={{ fontSize: "20px", height: "250px", width: "400px", color: "white", backgroundColor: "black", borderRadius: "10px", padding: "10px" }}>My Stack</div>
          <div className='d-flex justify-content-center col-5 ' style={{ fontSize: "20px", height: "250px", width: "1050px", color: "white", backgroundColor: "black", borderRadius: "10px", padding: "10px" }} > My Special Place</div>
        </div>
        <div>
          <div style={{ fontSize: "100px", fontFamily: "bold", padding: "20px" }}>Experience</div>
        </div>

        <div className='' style={{height:"200px",width:"window.width",display:"flex",flexDirection:"row",justifyContent:"space-evenly", paddingLeft: "20px",paddingRight:"20px", fontSize: "20px" }} >
          <div>
            <p>Apple</p>
            <p>Microsoft</p>
            <p>Spotify</p>
            <p>Stripe</p>
            <p>Webflow</p>
          </div>
          <div>
            <p>Engineer @ Apple</p>
            <p>Engineer @ Microsoft</p>
            <p>Engineer @ Spotify</p>
            <p>Engineer @ Stripe</p>
            <p>Engineer @ Webflow</p>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "100px", fontFamily: "poppins", paddingLeft: "20px" }}>skills</div>
        </div>
        <div style={{
          height: "200px",
          width: "window.width",
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft:"20px",
          paddingRight:"20px"
        }}>
          <div>
            <h4>Web Design</h4>
            <p>UI/UX Desgin</p>
            <p>Responsive Desgin</p>
            <p>Wireframing</p>
            <p>User Research</p>
          </div>

          <div>
            <h4>Front End</h4>
            <p>JavaSript</p>
            <p>React.JS</p>
            <p>Next.JS</p>
            <p>CSS3</p>
          </div>

          <div>
            <h4>Back End</h4>
            <p>Node.Js</p>
            <p>Mongo DB</p>
            <p>Express.js</p>
            <p>Vercel</p>
          </div>

          <div>
            <h4>Soft Skills</h4>
            <p>Effective Communication</p>
            <p>Collaboration</p>
            <p>commitment</p>
            <p>Leadership</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Harsha