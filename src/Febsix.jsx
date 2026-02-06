import React from 'react'

const Febsix = () => {
    return (
        <div>
            <div className='d-flex ' style={{ overflowY: "auto" }}>
                <div className='d-flex justify-content-start align-items-center col-2' style={{ height: "100vh", backgroundColor: "greenyellow", fontFamily: "poppins", fontSize: "30px" }} >
                    <div className='justify-content-center mt-2' style={{ fontSize: "20px", padding: "20px", fontFamily: "poppins" }}>
                        <div className=''>
                            <div>
                                <div>My profile</div>
                                <div className='px-3'>
                                    <div>Profile photo</div>
                                    <div>Name</div>
                                    <div>Role</div>
                                    <div>Short bio or tagline</div>
                                    <div>Location</div>
                                    <div>Contact info</div>
                                </div>
                            </div>
                            <div>Menu</div>
                            <div className='px-3'>
                                <div>Dashboard</div>
                                <div>Projects</div>
                                <div>Analytics</div>
                            </div>
                        </div>
                        <div>General</div>
                        <div className='px-3'>
                            <div>Notifications</div>
                            <div>Messages</div>
                        </div>
                        <div>Account</div>
                        <div className='px-3'>
                            <div>Logout</div>
                            <div>Settings</div>
                        </div>
                        <div>Help</div>
                        <div className='px-3'>
                            <div>Contact Us</div>
                            <div>Locate Us</div>
                        </div>
                    </div>
                </div>
                <div className='d-flex  justify-content-center col-10'  >

                    <div className='col-12 '>
                        <div className='' style={{ height: "15vh", width: "100%", color: "violet", backgroundColor: "black", fontSize: "50px", fontFamily: "poppins", textAlign: "center", padding: "10px" }}>Harsha's Work Sechedule</div>
                        <div style={{ height: "85vh", overflowY: "auto", backgroundColor: "skyblue", fontFamily: "poppins", fontSize: "50px", }}>

                            <div className='bg-warning d-flex justify-content-center'>Work Load Balence</div>
                            <div className='d-flex col-12  justify-content-between mt-5'>
                                <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "blueviolet", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Today's work sechedule</div>
                                <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "blueviolet", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >This Week's sechedule</div>
                                <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "blueviolet", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >This Month's sechedule</div>
                            </div>
                            <div className='d-flex col-12  justify-content-between mt-5'>
                                <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "blueviolet", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Today's work sechedule</div>
                                <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "blueviolet", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >This Week's sechedule</div>
                                <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "blueviolet", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >This Month's sechedule</div>
                            </div>
                            <div className='d-flex justify-content-between mt-5'>
                                <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "yellow", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Pending</div>
                                <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "green", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Confirmed</div>
                                <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "orange", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Completed</div>
                                <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "red", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Cancelled</div>
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                                <div style={{ height: "150px", width: "750px", color: "white", backgroundColor: "black", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center", alignItems: "center" }}>
                                    <p>Next work : Monday (previous Follow-up) - 09:30 AM</p>
                                    <p>Notice: Annual equipment maintenance scheduled for Friday.</p>
                                    <p>Note: Remember to update the devlopers exercise charts for the evening shift.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Febsix