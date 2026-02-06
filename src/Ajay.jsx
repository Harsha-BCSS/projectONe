import React from 'react'

const Ajay = () => {
  return (
    <div>
        < div className = 'd-flex justify-content-end align-items-center gap-3 ' style = {{ padding: "20px" }}><img src='https://media.istockphoto.com/id/155099359/photo/stethoscope-on-book.webp?a=1&b=1&s=612x612&w=0&k=20&c=odiw1GE1k6lNfKeh1FD65qJCtBTyNdShYmlfG3ST_40=' style={{height:"150px",width:"200px",borderRadius:"50%"}}/>
                <div  style={{height:"150px",width:"200px",color:"white",backgroundColor:"blueviolet",justifyContent:"end", borderRadius:"10px",padding:"5px",fontSize:"18px",fontFamily:"poppins"}}>
                      <p>Username :-</p>
                      <p>Role :-</p>
                      <p>MobileNumber :-</p>
                </div>
            </div >
        </div >
              <div className='d-flex justify-content-between align-items-center gap-3 ' style={{padding:"20px"}} >
                  <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "blueviolet", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Today's Appoinment</div>
                  <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "blueviolet", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Week</div>
                  <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "blueviolet", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins",textAlign:"center" }} >
                Month</div>
            </div>
              <div className='d-flex justify-content-between align-items-center gap-3 mt-5' style={{ padding: "20px" }}>
                  <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "yellow", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Pending</div>
                  <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "green", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Confirmed</div>
                  <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "orange", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Completed</div>
                  <div style={{ height: "100px", width: "300px", color: "white", backgroundColor: "red", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center" }} >Cancelled</div>
            </div>
              <div className='d-flex justify-content-between align-items-center gap-3 mt-5' style={{ padding: "20px" }}>
                  <div style={{ height: "150px", width: "2000px", color: "white", backgroundColor: "blue", borderRadius: "10px", padding: "5px", fontSize: "18px", fontFamily: "poppins", textAlign: "center",alignItems:"center"}}>
                      <p>Next Patient: Sarah Jenkins (Hip Replacement Follow-up) - 02:30 PM</p>
                      <p>Clinic Notice: Annual equipment maintenance scheduled for Friday.</p>
                      <p>Note: Remember to update the patient exercise charts for the evening shift.</p>
                </div>

    </div>
  )
}

export default Ajay