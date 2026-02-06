import React from 'react'
import logo from './Images/BCSS-Logo.png'

const BCSS = () => {
    return (
        <div>
            <div className="abc">
                <div className="d-flex justify-content-between align-items-center " >
                    <div className="ms-4 d-flex">
                        <img src="/src/images/BB.jpg" style={{ width: "70px", height: "70px" }}></img>
                        <div className="col-xxl-10 col-xl-9 col-lg-10 col-md-11 col-12 mt-4 ms-3 fw-bold">Blue Cloud Softech Solutions Ltd</div>
                    </div>
                    <div className="d-flex flex-wrap col-xxl-7 col-xl-8 col-lg-10 col-md-11 col-12 justify-content-end gap-4 me-5 fw-bold">
                        <div className="c1">Home</div>
                        <div className="c1">Company</div>
                        <div className="c1">contact us</div>
                        <div className="c1">Services</div>
                        <div className="c1">Products</div>
                        <div className="c1">Insights</div>
                        <div className="pointer c2" onClick={() => navigate("/login")}>
                            login
                        </div>
                    </div>
                </div>

                <div className="" style={{ height: "90vh", overflowY: "scroll" }}>
                    <div className="image d-flex flex-wrap justify-content-between h-100">
                        <div className="col-md-7 col-12  h-100">
                            <img className="" src="/src/images/BB2.jpg"></img>
                        </div>
                        <div className="head1 col-4 col-md-4 col-12 ">
                            <div className="d-flex flex-wrap justify-content-start col-xxl-8 col-xl-7 col-md-8 mt-5 ms-2">
                                <div className="mt-5">
                                    <div className="mt-5">
                                        <h1>Our Work Culture</h1>
                                        <div className="mt-4 text-secondary me-3">
                                            <h6>Our culture is built on trust, accountability, and mutual respect. We encourage ownership, reward performance, and support employees at every stage of their professional journey. We believe in creating an environment where people feel motivated to bring their best selves to work every day.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="head d-flex justify-content-center my-5">
                            <div className="col-7 mb-4">
                                <div className="text-center">
                                    <h1>Diversity, Equity & Inclusion</h1>
                                    <div className="text-secondary mt-5">At Blue Cloud Softech Solutions Limited, we are committed to fostering a workplace that is diverse, equitable, and inclusive. We believe that a diverse workforce strengthens decision-making, drives innovation, and enhances organizational performance. We provide equal employment opportunities to all qualified individuals and ensure that employment-related decisions — including recruitment, hiring, compensation, training, promotion, and termination — are based solely on merit, qualifications, experience, and business requirements.</div>
                                    <div className="text-secondary mt-3">Our organization does not discriminate on the basis of gender, age, race, ethnicity, religion, disability, marital status, sexual orientation, or any other status protected under applicable laws. We are dedicated to maintaining a work environment where all employees are treated with dignity, fairness, and respect.</div>
                                    <div className="text-secondary mt-3">We actively promote inclusive practices through fair policies, unbiased processes, and a culture of accountability. Our leadership is committed to creating an environment where employees feel valued, heard, and empowered to perform at their highest potential.</div>
                                    <div className="text-secondary mt-3">In alignment with statutory requirements and best practices, Blue Cloud Softech Solutions Limited continues to strengthen initiatives that support inclusion, workplace safety, and equal opportunity across all levels of the organization.</div>
                                    <div className="my-5 p-4">
                                        <h1>Join Our Team</h1>
                                        <div className="text-center mt-3">If you believe you can add value to our team, share your resume with us at</div>
                                        <div className="text-center fw-bold mt-2">careers@bluecloudsoftech.com</div>
                                        <div className="mt-4">Be part of a company that values people as much as</div>
                                        <div>performance.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className="col-12" src="/src/images/BB3.png"></img>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <div className="col-5">
                                <div className="col-10 border rounded mt-5 ms-5" style={{ height: "46.7vh" }}>
                                    <div className="my-5 ms-5 d-flex">
                                        <img src="/src/images/BB.jpg" style={{ width: "70px", height: "70px" }}></img>
                                        <div className="mt-4 ms-3 fw-bold">Blue Cloud Softech Solutions Ltd</div>
                                    </div>
                                    <div className="d-flex justify-content-center text-center ms-5 col-8">Elevate Efficiency with Scalable, Future-Ready IT Solutions That Accelerate Growth.</div>
                                    <div className="d-flex justify-content-centermt-5 mt-5">
                                        <button className="heighlet">
                                            
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="me-5 col-5">
                                <div className="d-flex justify-content-center p-5" style={{ height: "60vh" }}>
                                    <div className="col-12 p-4 border rounded ">
                                        <div className="d-flex justify-content-center gap-5">
                                            <div className="text-start">
                                                <h6>Our products</h6>
                                                <div className="text-start text-secondary my-3">
                                                    <h6>Security & Surveillance</h6>
                                                    <h6>Cyber Security</h6>
                                                    <h6>Media & Education</h6>
                                                    <h6>Health Care</h6>
                                                    <h6>Telecom</h6>
                                                    <h6>HR Consulting</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Our Services</h6>
                                                <div className="text-start text-secondary my-3">
                                                    <h6>Managed IT Services</h6>
                                                    <h6>Cloud Migration</h6>
                                                    <h6>Cyber Security</h6>
                                                    <h6>Software Architecture</h6>
                                                    <h6>Security Operations Center</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Company</h6>
                                                <div className="text-secondary">
                                                    <h6>About Us</h6>
                                                    <h6>Our Directors</h6>
                                                    <h6>Our Advisors</h6>
                                                    <h6>Our Team</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-60">
                        <div className="d-flex justify-content-center mt-5">
                            <div className="ms-4" style={{ height: "10vh" }}>
                                © Copyright 2025, All Rights Reserved by Blue Cloud Softech Solutions
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BCSS