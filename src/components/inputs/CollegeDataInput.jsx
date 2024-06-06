import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Service } from '../../appwrite/config';
import { useForm } from 'react-hook-form';



function CollegeDataInput() {
  
  const { register, handleSubmit } = useForm();
  const object = new Service();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const userID = localStorage.getItem('userID')
  const collegeData1 = async (data) => {
    
    setError("")
    try{
      const createCollege = await object.createCollege({...data, userID });
      document.getElementById('collegeDetail').reset()
 //    if (createCollege) window.location.reload(false);
   }catch(error){
     setError(error.message)
     console.log("error");
    }
  };

  const collegeData2 = async (data) => {
    setError("")
    try{
   const createCollege =  await object.createCollege({...data, userID });
    if(createCollege) navigate('/');
  }catch(error){
    setError(error.message)
    console.log("error"); 
  }
  }
  
  return (
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
     <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
    </div> 
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">College Detail</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600"> Which Colleges are under this University?</p>
       {error && <p class="mt-2 text-lg leading-8 text-red-600">{error}</p>}
    </div>
    <form id='collegeDetail' method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
       
        <div class="sm:col-span-2">
          <label for="collegeName" classsName="block text-sm font-semibold leading-6 text-gray-900">College Name</label>
         <div class="mt-2.5">
            <input type="text" {...register('collegeName')} required name="collegeName" id="collegeName" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
         </div>
         
        <div class="sm:col-span-2">
          <label for="collegeCode" class="block text-sm font-semibold leading-6 text-gray-900">College Code</label>
         <div class="mt-2.5">
            <input type="number" {...register('collegeCode')} required name="collegeCode" id="collegeCode" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
      
      <div className='flex justify-between'>
      <div class="mt-20">
        <button type="submit" class="block w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={ handleSubmit(collegeData1) }
        >Another College</button>
      </div>

      <div class="mt-20">
      <button type="submit" class="block w-full rounded-md bg-blue-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleSubmit(collegeData2)}
        >Submit</button>
      </div>
      </div>
    </form>
  </div>

  );
}

export default CollegeDataInput;
