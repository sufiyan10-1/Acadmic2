import React,{useState} from 'react'
import {Service} from '../../appwrite/config';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function CourseDataInput() {
  const {register, handleSubmit} = useForm();
  const userID = localStorage.getItem('userID') 
  let object = new Service(); 
  const navigate = useNavigate();
    const  courseData1 = async (data) => {
      console.log(data)
      await object.createCourse({...data, userID})
      document.getElementById('courseData').reset()
    }

    const  courseData2 = async (data) => {
         await object.createCourse({...data, userID});
         navigate('/CollegeDataInput');
        }
 
    const renderInputFields1 = () => {     
      const inputFields = [];
      for (let i = 1; i <= 7; i++) {
        inputFields.push(
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-5">
          <div>
            <label htmlFor={`sub${i}Name`} class="block text-sm font-semibold leading-6 text-gray-900 mt-8"> Subject {i} Name  </label>
           <div class="mt-2.5">
              <input 
               type="text"
               {...register(`sub${i}Name`)}
               id={`sub${i }Name`}
               class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div>
            <label htmlfor={`sub${i}MaxMark`} class="block text-sm font-semibold leading-6 text-gray-900 mt-8">subject {i} MaxMark</label>
            <div class="mt-2.5">
              <input
              type="number" 
              {...register(`sub${i}MaxMark`)}
              id={`sub${i}MaxMark`}
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div>
            <label htmlFor={`sub${i}MinMark`}  class="block text-sm font-semibold leading-6 text-gray-900 mt-8">subject {i} MinMark</label>
            <div class="mt-2.5">
              <input 
              type="number" 
              {...register(`sub${i}MinMark`)}
              id={`sub${i}MinMark`}
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <label htmlFor={`internal${i}MaxMark`}  class="block text-sm font-semibold leading-6 text-gray-900 mt-8">internal {i} MaxMark</label>
            <div class="mt-2.5">
              <input 
              type="number" 
              {...register(`internal${i}MaxMark`)}
              id={`internal${i}MaxMark`}
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <label htmlFor={`internal${i}MinMark`}  class="block text-sm font-semibold leading-6 text-gray-900 mt-8">internal {i} MinMark</label>
            <div class="mt-2.5">
              <input 
              type="number" 
              {...register(`internal${i}MinMark`)}
              id={`internal${i}MinMark`}
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
        </div>
        );
      }
      return inputFields;
    };

    const renderInputFields2 = () => {     
      const inputFields = [];
      for (let i = 1; i <= 7; i++) {
        inputFields.push(
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-5">

          <div>
            <label htmlFor={`sub${i+7}Name`} class="block text-sm font-semibold leading-6 text-gray-900 mt-8"> Subject-{i+7} Name : </label>
           <div class="mt-2.5">
              <input 
               type="text"
               {...register(`sub${i+7}Name`)}
               id={`sub${i+7}Name`}
               class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <label htmlfor={`sub${i+7}MaxMark`} class="block text-sm font-semibold leading-6 text-gray-900 mt-8">subject {i+7}MaxMark</label>
            <div class="mt-2.5">
              <input
              type="number" 
              {...register(`sub${i+7}MaxMark`)}
              id={`sub${i+7}MaxMark`}
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          
          <div>
            <label htmlFor={`sub${i+7}MinMark`}  class="block text-sm font-semibold leading-6 text-gray-900 mt-8">subject {i+7} MinMark</label>
            <div class="mt-2.5">
              <input 
              type="number" 
              {...register(`sub${i+7}MinMark`)}
              id={`sub${i+7}MinMark`}
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <label htmlFor={`internal${i+7}MaxMark`}  class="block text-sm font-semibold leading-6 text-gray-900 mt-8">internal {i+7} MaxMark</label>
            <div class="mt-2.5">
              <input 
              type="number" 
              {...register(`internal${i+7}MaxMark`)}
              id={`internal${i+7}MaxMark`}
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <label htmlFor={`internal${i+7}MinMark`}  class="block text-sm font-semibold leading-6 text-gray-900 mt-8">internal {i+7} MinMark</label>
            <div class="mt-2.5">
              <input 
              type="number" 
              {...register(`internal${i+7}MinMark`)}
              id={`internal${i+7}MinMark`}
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
         
       </div>    
          
 
        );
      }
      return inputFields;
    };
  
  
    return (
      <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
       <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
      </div> 
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Course Data</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Provied course details for creating Result.</p>
      </div>
      <form id='courseData' class="mx-auto mt-16 max-w-3xl sm:mt-20">
         
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
          <div class="sm:col-span-2">
            <label htmfor="courseName" class="block text-sm font-semibold leading-6 text-gray-900">Course Name</label>
           <div class="mt-2.5">
              <input 
              type="text" 
              name="courseName" 
              {...register('courseName')}
              id="courseName"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
           </div>
           
      
  
           <div class="sm:col-span-2">
            <label for="year" class="block text-sm font-semibold leading-6 text-gray-900">Year</label>
                <select 
                id="year" 
                name="year" 
                {...register('year')}
                class="h-full w-full rounded-md border-1  SelectMode py-0 pl-4 pr-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-center">
                  <option value='Firt Year'>Firt Year</option>
                  <option value='Second Year'>Second Year</option>
                  <option value='Third Year'>Third Year</option>
                </select>
          </div>
  
     
    
         
      </div>

        <p className='mt-20 text-center font-bold text-xl'> Summer Subjects </p>
        {renderInputFields1()}

        <p className='mt-20 text-center font-bold text-xl'> Winter Subjects </p> 
        {renderInputFields2()}  
        
        <div class="sm:col-span-2">
        <button 
          onClick={handleSubmit(courseData1)}
          type="submit" 
          class="mt-10 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit & Add More Course </button>
 
         <button
          type="submit"
          onClick={handleSubmit(courseData2)}
          class=" mt-10 block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Submit </button>
  
       </div>

      </form>
    </div>
    );
  }

export default CourseDataInput