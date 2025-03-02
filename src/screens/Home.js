import React from 'react'
import Miningbutton from '../components/Miningbutton'

function Home() {
  return (
   <div className="flex flex-col h-screen relative">
    <div className="flex flex-col items-center justify-center mt-16">
        <Miningbutton/>
    </div>    
  </div>
  )
}

export default Home