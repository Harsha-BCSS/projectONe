import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
          <header className='d-flex justify-content-center align-items-center' style={{ fontSize: "50px",padding:"20px",background:"#222",color:"#fcfcfc"}}>
            Header
        </header >
          <main className='d-flex justify-content-center align-items-center' style={{ minHeight: "60vh", padding: "20px", fontSize: "50px", color:"red"}}>
            knowledge is divine
        </main>
          <footer className='d-flex justify-content-center align-items-center' style={{ fontSize: "50px",padding: "95px", background: "#222", color:"#fcfcfc"}}>
            Footer
        </footer>
    </div>
  )
}

export default Layout