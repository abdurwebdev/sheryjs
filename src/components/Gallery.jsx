import React from 'react'

const Gallery = () => {
  return (
    <div className='flex items-start px-10 justify-between'>
        <div className='flex flex-col gap-y-3'>
            <img className='w-72 h-96 object-cover' src="https://images.unsplash.com/photo-1455793222120-98f37a8d4ede?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='font-semibold'>Shalgham</h1>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Doloremque, sed!</p>
        </div>
        <div className='flex flex-col gap-y-3'>
            <img className='w-72 h-[500px] object-cover' src="https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='font-semibold'>Shalgham</h1>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Doloremque, sed!</p>
        </div>
    </div>
  )
}

export default Gallery