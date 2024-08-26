import React from 'react'

const Amazing = () => {
  return (
    <div className='w-full h-screen flex items-start justify-between gap-x-10 px-10'>
        <div className='w-[70%]'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1581879011839-713b3c49122c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='flex flex-col mt-40'>
            <h1 className='font-bold'>Lorem ipsum dolor sit amet.</h1>
            <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia, molestias vero labore omnis saepe!</p>
        </div>
    </div>
  )
}

export default Amazing