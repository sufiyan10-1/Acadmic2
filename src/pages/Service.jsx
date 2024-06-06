import React from 'react'
import ServiceCard from '../components/ServiceCard'


function Service() {
  return (
    <div className='h-screen bg-blue-200 flex items-center flex-col justify-around '>
      <h1 className='text-4xl mt-16'>Services offer by Academics</h1>
  <div className='flex gap-8 pl-8 max-md:flex-col'>
  <ServiceCard path="ResultInput" title="Result"/>
  <ServiceCard path="AdmitCard" title="Addmit Card"/>
  <ServiceCard path="Bonafide" title="Bonafide"/>
  </div>

    </div>
  )
}

export default Service

