import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SelectMode() {
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleSelectionChange = (e)=>{
      const selectedValue = e.target.value;
      setSelectedOption(selectedValue);
  }
  return (
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
     <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
    </div> 
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Select Mode</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">In which mode you will be working ?</p>
    </div>
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
         <div class="sm:col-span-2">
          <label for="phone-number" class="block text-lg font-semibold leading-6 text-gray-900 mb-3">Select Mode : </label>
          <select id="countries" onChange={handleSelectionChange} value={selectedOption} class="h-full w-full rounded-md border-1  SelectMode py-0 pl-4 pr-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-center">
             <option className='text-lg' >Choose the Mode</option>
             <option className='text-lg' value="Using_file">Using file(JSON)</option>
             <option className='text-lg' value="Manually">Manually</option>
          </select>

        </div>
       
      </div>
      <div class="mt-20">
      <Link to={`/${selectedOption}`}>
        <button class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button>
      </Link>
      </div>
      
    </form>
  </div>

  )
}

export default SelectMode
