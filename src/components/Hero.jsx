import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center relative justify-between'>
        <div className='py-56 px-10'>
            <div className='flex flex-col gap-y-5'>
                <h1 className='font-semibold'>01.</h1>
                <h1 className='font-semibold'>Sustainability</h1>
                <p className='font-light'>Committed to sustainability,eco-friendly <br />choices for a better tomorrow.</p>
                <img className='w-80 h-96 object-cover' src="https://images.unsplash.com/photo-1605693858949-edcc8ba48c88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
        <div className='absolute top-20 left-[450px]'>
            <div className='flex flex-col gap-y-0'>
                <h1 className='font-semibold text-[5vw] tracking-tighter leading-[5vw]'>Ephemeral</h1>
                <h1 className='font-semibold text-[5vw] tracking-tighter leading-[5vw]'>Equilibrium</h1>
                <img className='w-[400px] h-[600px] object-cover' src="https://images.unsplash.com/photo-1612674051420-f4f600716f48?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p className='font-light'>Committed to sustainability,eco-friendly <br />choices for a better tomorrow.</p>
            </div>
        </div>
        <div>
            <div className='flex gap-y-5 items-center gap-x-3 justify-center'>
                <button className='w-16 h-16 rounded-full border border-black'>Move</button>
                <h1>Visit Our Journey</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero