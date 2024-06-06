import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import {Service} from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';

function UniversityDataInput() {

  const {register,handleSubmit,} = useForm();
  const userID = localStorage.getItem('userID') 
  let object = new Service(); 
  const navigate = useNavigate();
  
  const universitydata = async (data) => {
     
  let createUniversity = await  object.createUniversity({...data,userID });
    if(createUniversity) navigate('/CourseDataInput');
  await object.uploadLogo(document.getElementById('university_logo').files[0]);  
  await object.uploadSignatureOfDirector(document.getElementById('signatureOfDirector').files[0]); 

 }
 
  return (
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
     <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
    </div> 
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">College Detail</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600"> Which Colleges are under this University?</p>
       
    </div>
    <form id='collegeDetail' method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
       
          <div class="sm:col-span-2">
              <label for="universityName" class="block text-sm font-semibold leading-6 text-gray-900">Name of University With City Name & PinCode</label>
              <div class="mt-2.5">
                <input
                 {...register('universityName')}
                  type="text"
                  placeholder='eg.xyz university, Nanded, 431606'
                  name="universityName"
                  id="universityName"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
          </div>

         
          <div class="sm:col-span-2">
              <label for="address" class="block text-sm font-semibold leading-6 text-gray-900">State & Country Of University</label>
              <div class="mt-2.5">
                <input
                  {...register('address')}
                  type="text"
                  placeholder="eg.Maharashtra,India"
                  name="address"
                  id="address"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
          </div>

           <div class="sm:col-span-2">
              <label for="webSite" class="block text-sm font-semibold leading-6 text-gray-900">WebSite Link</label>
              <div class="mt-2.5">
                <input
                  {...register('webSite')}
                  type="text"
                  name="webSite"
                  id="webSite"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
          </div>

       

          <div className='sm:col-span-2 mt-6'>
            <button
             onClick={handleSubmit(universitydata)}
            type="submit"
            className="block w-full rounded-md bg-blue-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit Unviersity Data</button>
          </div>

      </div>
    </form>
  </div>
  )
}

export default UniversityDataInput
