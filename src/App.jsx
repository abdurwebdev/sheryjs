import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Motive from './components/Motive'
import Gallery from './components/Gallery'
import Amazing from './components/Amazing'
import VideoContainer from './components/VideoContainer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Motive/>
      <Gallery/>
      <Amazing/>
      <VideoContainer/>
    </div>
  )
}

export default App