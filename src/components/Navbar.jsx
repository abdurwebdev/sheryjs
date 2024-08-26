import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center font-[gilroy] px-10 py-3 justify-between'>
        <div className='flex gap-x-5'>
            <h1>Home</h1>
            <h1>Pricing</h1>
            <h1>Products</h1>
        </div>
        <div>
            <h1>Sheriyans</h1>
        </div>
        <div>
            <h1>Our Journey</h1>
        </div>
    </div>
  )
}

export default Navbar