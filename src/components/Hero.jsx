import React from 'react'
import Button from '../Button'
import sideImg from '../assets/hero-side-img.png'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='w-full h-screen bg-blue-300 flex gap-7'>
      <div className="left-section py-52 px-20 flex flex-col gap-7">
      <h1 className='text-black text-5xl'>WelCome to Academics Result and other document generator</h1>
       <Link to='/singup'> <Button type='button'>Get Started</Button></Link>
    </div>
     <div className="right-side mt-32 mr-9">
      <img src={sideImg} className='h-96 mr-36'/>
     </div>
    </div>
  )
}

export default Hero
