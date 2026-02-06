import React from 'react';
import Background from "./Images/nissan-gtr-illustration.jpg"
import Logo from "./Images/logobig.png"

const Components = () => {
    return (
        // The outer container
        <div>
            <div className='d-flex justify-content-between align-items-center' style={{ height: "20vh", color: "red", backgroundColor: "yellow" }}>
            <img src ={Logo} style={{height:"135px"}}/>
            <div style={{fontSize:"25px"}}>login</div>
            </div>
            <div style={{ height: "80vh", backgroundColor: "green", backgroundColor: "blue" }}><img src={Background} style={{height:"80vh",width:"99vw"}}/>
            </div>
         
                <div className='d-flex justify-content-between align-items-center' style={{fontSize:"25px", height:"20vh"}}>
                    <div>
                        <div>contact us</div>
                        <div>About Us</div>
                        <div>Careers</div>
                    </div>
                    <div>
                        
                        <div>Phone Number</div>
                        <div>E-Mail</div>
                    </div>
                    <div>
                        <div>Instagram</div>
                        <div>Facebook</div>
                        <div>GitHub</div>
                    </div>
                    </div>            
        </div>
    );
};

export default Components;