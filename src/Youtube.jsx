import React from 'react'
import photo1 from './Images/1.jpg'
import photo2 from './Images/2.avif'
import photo3 from './Images/3.webp'
import photo4 from './Images/4.jpg'
import photo5 from './Images/5.webp'
import photo6 from './Images/6.jpg'
import photo7 from './Images/7.jpg'
import photo8 from './Images/8.jpg'
import photo9 from './Images/9.jpg'
import photo10 from './Images/10.jpg'
import photo11 from './Images/11.jpg'
import photo12 from './Images/12.jpg'
import logo from './Images/YT_logo.jpg'


const Youtube = () => {
    return (
        <div>
            <div className='d-flex justify-content-start align-items-center' style={{ height: "10vh", color: "black", backgroundColor: "red", fontSize: "30px" }}><img src={logo} style={{ height: "20vh", width: "257px" }} /></div>
            <div className='d-flex justify-content-between col-12'>
                <div className='col-2' style={{ height: "90vh", overflowY: "auto", color: "white", backgroundColor: "black", fontSize: "20px" }}>
                    <div className='p-2'>Home</div>
                    <div className='p-2'>Shorts</div>
                    <div className='p-2'>Subscription</div>
                    <div className='p-2'>History</div>
                    <div className='p-2'>Playlist</div>
                    <div className='p-2'>Watch later</div>
                    <div className='p-2'>Liked videos</div>
                    <div className='p-2'>Your videos</div>
                    <div className='p-2'>Explore</div>
                    <div className='p-2'>More from Youtube</div>
                    <div className='p-2'>Settings</div>
                    <div className='p-2'>Report history</div>
                    <div className='p-2'>Help</div>
                    <div className='p-2'>Send feedback</div>
                </div>
                <div className='col-10 d-flex flex-wrap' style={{ height: "90vh", overflowY: "auto" }}>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo1} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo2} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo3} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo4} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo5} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo6} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo7} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo8} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo9} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo10} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo11} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo12} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo1} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo2} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo3} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo4} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo5} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo6} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo7} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo8} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo9} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo10} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo11} style={{ height: "20vh", width: "425px" }} /></div>
                    <div className='col-4 border' style={{ height: "20vh" }}><img src={photo12} style={{ height: "20vh", width: "425px" }} /></div>


                </div>

            </div>
        </div>
    )
}

export default Youtube