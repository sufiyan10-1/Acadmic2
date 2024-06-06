import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Service } from '../../appwrite/config'

function Manually() {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();
  const [collgeData, setCollegeData] = useState([])
  const [courseData, setCourseData] = useState([])
  const object = new Service();

   object.getColleges([]).then((colleges) =>{
    if(colleges){
      setCollegeData(colleges.documents)
    }
   })

   object.getNameOfCourses([]).then((courses)=>{
    if(courses) {
      setCourseData(courses.documents)
    }
    })
 
  const createResult = async (data)=>{ 
  
    localStorage.setItem('setNumber', data.setNumber)
    localStorage.setItem('elegibilityNo', data.elegibilityNo)
    localStorage.setItem('SR_NO', data.SR_NO)
    localStorage.setItem('abcId',data.abcId)
    localStorage.setItem('studentName',data.studentName)
    localStorage.setItem('nameOFExamination', data.nameOFExamination)
    localStorage.setItem('semester', data.semester)
    localStorage.setItem('year', data.year)
    localStorage.setItem('nameOFCollege',data.nameOFCollege)
    localStorage.setItem('collegeCode', data.collegeCode)   
    navigate('/MarksEntry') 
  }
  
  
  return (
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
     <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
    </div> 
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Result Making</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Fill the following inputs for making Result.</p>
    </div>
    <form  action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="set_number" class="block text-sm font-semibold leading-6 text-gray-900">Set Number</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="set_number"
            {...register('setNumber')}
             id="set_number" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="elegibility_no" class="block text-sm font-semibold leading-6 text-gray-900">Elegibility No</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="elegibility_no" 
            {...register('elegibilityNo')}
            id="elegibility_no" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
    </div>
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
        <div>
          <label for="SR_NO" class="block text-sm font-semibold leading-6 text-gray-900">SR. NO</label>
        <div class="mt-2.5">
            <input type="number"
             name="SR_NO" 
             {...register('SR_NO')}
             id="SR_NO" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="abc_id" class="block text-sm font-semibold leading-6 text-gray-900">ABC ID</label>
          <div class="mt-2.5">
            <input 
             type="number"
             name="abc_id"
             {...register('abcId')} 
             id="abc_id" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="student_name" class="block text-sm font-semibold leading-6 text-gray-900">Student Name</label>
         <div class="mt-2.5">
            <input 
            type="text" 
            name="student_name" 
            {...register('studentName')}
            id="student_name"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
         </div>
         
         <div class="sm:col-span-2">
          <label for="name_of_examination" class="block text-sm font-semibold leading-6 text-gray-900">Name of Examination</label>
              <select 
              id="name_of_examination" 
              name="name_of_examination" 
              {...register('nameOFExamination')}
              class="h-full w-full rounded-md border-1  SelectMode py-0 pl-4 pr-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-center">
               {courseData.map((course)=><option value={course.courseName}>{course.courseName}</option>)}   
              </select>
        </div>

         <div class="sm:col-span-2">
          <label for="semester" class="block text-sm font-semibold leading-6 text-gray-900">Semester</label>
              <select 
              id="semester" 
              name="semester" 
              {...register('semester')}
              class="h-full w-full rounded-md border-1  SelectMode py-0 pl-4 pr-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-center">
                <option value='I'>I</option>
                <option value='I & II'>I & II</option>
                <option value='III'>III</option>
                <option value='III & IV'>III & IV</option>
                <option value='V'>V</option>
                <option value='V & VI'>V & VI</option>
              </select>
        </div>

        <div class="sm:col-span-2">
          <label for="year" class="block text-sm font-semibold leading-6 text-gray-900">Year</label>
         <div class="mt-2.5">
            <input 
            type="number" 
            name="year" 
            {...register('year')}
            id="year"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
         </div>

         <div class="sm:col-span-2">
          <label for="name_of_college" class="block text-sm font-semibold leading-6 text-gray-900">Name of College</label>
              <select 
              id="name_of_college" 
              name="name_of_college"
              {...register('nameOFCollege')}
              class="h-full w-full rounded-md border-1  SelectMode py-0 pl-4 pr-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-center">            
              {collgeData.map((college)=><option value={college.collegeName}>{college.collegeName}</option>)}
              </select>
        </div>

        <div class="sm:col-span-2">
          <label for="college_code" class="block text-sm font-semibold leading-6 text-gray-900">College Code</label>
              <select 
              id=" college_ode" 
              name="college_code"
              {...register('collegeCode')}
              class="h-full w-full rounded-md border-1  SelectMode py-0 pl-4 pr-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-center">            
              {collgeData.map((college)=><option value={college.collegeCode}>{college.collegeCode}</option>)}
              </select>
        </div>
        
  
       
      </div>
      <div class="mt-20">
        <button 
        type="submit"
        onClick = {handleSubmit(createResult)}
        class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next </button>
      </div>
    </form>
  </div>

  )
}

export default Manually;
