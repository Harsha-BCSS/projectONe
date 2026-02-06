import React from 'react'

const Srinu = () => {
    return (
        <div className='d-flex justify-content-evenly align-items-center ' style={{ height: "75vh" }}>

            <div style={{ height: "100px", width: "200px", backgroundColor: "red", borderRadius: "", alignContent: "center", justifyItems: 'center' }}>
                <h6>ALL SHARP EDGES</h6>
            </div>
            <div style={{ height: "100px", width: "200px", backgroundColor: "blue", borderRadius: "20px", alignContent:"center",justifyItems:"center" }}>
                <h6>ALL ROUNDED EDGES</h6>
            </div>
            <div style={{ height: "100px", width: "200px", backgroundColor: "yellow", borderTopLeftRadius: "20px",alignContent:"center",justifyItems:"center" }}>
                <h6>TOP LEFT</h6>
            </div>
            <div style={{ height: "100px", width: "200px", backgroundColor: "green", borderTopRightRadius: "20px", alignContent:"center",justifyItems:"center" }}>
                <h6>TOP RIGHT</h6>
            </div>
            <div style={{ height: "100px", width: "200px", backgroundColor: "pink", borderBottomLeftRadius: "20px", alignContent:"center", justifyItems:"center" }}>
                <h6>BOTTOM LEFT</h6>
            </div>
            <div style={{ height: "100px", width: "200px", backgroundColor: "black", borderBottomRightRadius: "20px", color: "white",alignContent:"center",justifyItems:"center" }}>
                <h6>BOTTOM RIGHT</h6>
            </div>
            {/* <div style={{ height:"100px",width:"100px", backgroundColor: "black", borderRadius: "100px", color: "white", alignContent: "center", justifyItems: "center" }}>
                <h6>CIRCLE</h6> 
                </div> */}
            <div style={{ height: "50px", width: "300px", backgroundColor: "black", borderRadius: "10px", color: "white", alignContent: "center", justifyItems: "start",display:"flex",gap:"185px",padding:"10px"}}>
                    <h6>E-MAIL</h6>
                <img src='https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png' style={{ height: "25px", width: "0px", alignContent: "center", justifyContent: "end" }} />
                </div>
            
        </div>
    )
}

export default Srinu