import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Service } from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';

function MarksEntry() {
  const [subjectList, setSubjectList] = useState([]);
  //console.log(subjectList)
  const navigate = useNavigate();
  
  const {register, handleSubmit} = useForm();

   const object = new Service()
   object.getCourse([]).then((subjects)=>{
    if(subjects) {
      setSubjectList(subjects.documents)
    }
   })
 
 const submitMarks =  async  (data) => {
    for(let i = 1; i<=14; i++){
      localStorage.setItem(`sub${i}ThMarks`, data[`sub${i}ThMarks`]);
      localStorage.setItem(`sub${i}IntMarks`,data[`sub${i}IntMarks`]);
    }
    if(localStorage.getItem('semester')=='I' || localStorage.getItem('semester')=='III' || localStorage.getItem('semester')=='V'){
    navigate('/ResultTmp2');
  }
  else{
    navigate('/ResultTmp1');
  }
 
 }
  
  return (
    <div>
      {subjectList.map( subject =>
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" key={subject.id}>
    
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
     <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
    </div> 
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fill The Marks</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Fill the following inputs for making Result.</p>
    </div>
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub1ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub1Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             required
             name="sub1ThMarks"
            {...register('sub1ThMarks')}
             id="sub1ThMarks" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub1IntMarks" class="block text-sm font-semibold leading-6 text-gray-900"> Internal Marks of {subject.sub1Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub1IntMarks" 
            {...register('sub1IntMarks')}
            id="sub1IntMarks" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">

        <div>
          <label for="sub2ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub2Name}</label>
        <div class="mt-2.5">
            <input type="number"
             name="sub2ThMarks" 
             {...register('sub2ThMarks')}
             id="sub2ThMarks"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub2IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Interal Marks of{subject.sub2Name}</label>
          <div class="mt-2.5">
            <input 
             type="number"
             name="sub2IntMarks"
             {...register('sub2IntMarks')} 
             id="sub2IntMarks" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub3ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub3Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub3ThMarks"
            {...register('sub3ThMarks')}
             id="sub3ThMarks"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub3IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub3Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub3IntMarks" 
            {...register('sub3IntMarks')}
            id="sub3IntMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub4ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub4Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub4ThMarks"
            {...register('sub4ThMarks')}
             id="sub4ThMarks"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub4IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub4Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub4IntMarks" 
            {...register('sub4IntMarks')}
            id="sub4IntMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub5ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub5Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub5ThMarks"
            {...register('sub5ThMarks')}
             id="sub5ThMarks"   class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub5IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of{subject.sub5Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub5IntMarks" 
            {...register('sub5IntMarks')}
            id="sub5IntMarks"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub6ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub6Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub6ThMarks"
            {...register('sub6ThMarks')}
             id="sub6ThMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub6IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub6Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub6IntMarks" 
            {...register('sub6IntMarks')}
            id="sub6IntMarks " 
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub7ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub7Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub7ThMarks"
            {...register('sub7ThMarks')}
             id="sub7ThMarks"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub7IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub7Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub7IntMarks" 
            {...register('sub7IntMarks')}
            id="sub7IntMarks"   class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub8ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub8Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub8ThMarks"
            {...register('sub8ThMarks')}
             id="sub8ThMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub8IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub8Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub8IntMarks" 
            {...register('sub8IntMarks')}
            id="sub8IntMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
     
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub9ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub9Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub9ThMarks"
            {...register('sub9ThMarks')}
             id="sub9ThMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub9IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub9Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub9IntMarks" 
            {...register('sub9IntMarks')}
            id="sub9IntMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub10ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub10Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub10ThMarks"
            {...register('sub10ThMarks')}
             id="sub10ThMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub10IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub10Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub10IntMarks" 
            {...register('sub10IntMarks')}
            id="sub10IntMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub8ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub11Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub11ThMarks"
            {...register('sub11ThMarks')}
             id="sub11ThMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub11IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub11Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub11IntMarks" 
            {...register('sub11IntMarks')}
            id="sub11IntMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub12ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub12Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub12ThMarks"
            {...register('sub12ThMarks')}
             id="sub12ThMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub12IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub12Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub12IntMarks" 
            {...register('sub12IntMarks')}
            id="sub12IntMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub13ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub13Name}</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub13ThMarks"
            {...register('sub13ThMarks')}
             id="sub13ThMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub13IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub13Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub13IntMarks" 
            {...register('sub13IntMarks')}
            id="sub13IntMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="sub14ThMarks" class="block text-sm font-semibold leading-6 text-gray-900">Theory Marks of {subject.sub14Name
          }</label>
         <div class="mt-2.5">
            <input 
             type="number"
             name="sub14ThMarks"
            {...register('sub14ThMarks')}
             id="sub14ThMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label for="sub14IntMarks" class="block text-sm font-semibold leading-6 text-gray-900">Internal Marks of {subject.sub14Name}</label>
          <div class="mt-2.5">
            <input 
            type="number" 
            name="sub14IntMarks" 
            {...register('sub14IntMarks')}
            id="sub14IntMarks" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>



      <div class="mt-20">
        <button 
        onClick={handleSubmit(submitMarks)}
        type="submit"
        class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Result</button>
      </div>
    </form>
    
  </div>
    )}
  </div>
  )
}

export default MarksEntry
