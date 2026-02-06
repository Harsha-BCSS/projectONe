import React from 'react'

const Boxes = () => {
  return (
      <div className='d-flex justify-content-center align-items-center gap-4'style={{margin:"10px"}}>
          <div className='card'>
              <div>
                  <h3>Veg Burger</h3>
                  <p>A juicy, crispy veg patty layered with fresh veggies and creamy sauces in a soft bun.</p>
                  <img src='https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" class="card-img" />
              </div>
        </div>
          <div className='card'>
              <div>
                  <h3>Masalsa Dosa</h3>
                  <p>A golden, crispy dosa stuffed with spicy potato masala,served with chutney</p>
                  <img src='https://images.unsplash.com/photo-1643268972535-a2b100ff3632?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" class="card-img" />
              </div>
        </div>
          <div className='card'>
              <div>
                  <h3>Veg Curry</h3>
                  <p>A rich and flavorful curry made with fresh vegetables simmered in aromatic spices.</p>
                  <img src='https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" class="card-img" />
              </div>
        </div>
          <div className='card'>
              <div>
                  <h3>Veg Pizza</h3>
                  <p>A cheesy delight topped with colorful veggies on a perfectly baked crust.</p>
                  <img src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" class="card-img" />
              </div>
        </div>
    </div>
  )
}

export default Boxes