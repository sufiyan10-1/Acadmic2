import React, { useState } from 'react'
import { Service } from '../appwrite/config';
  


function ResultTmp1() {
  const [courseData, setCourseData] = useState([]);
  const [universityData, setUniversityData] = useState([]);
  const object = new Service();
//calling data from appwrite
  object.getCourse([]).then((courses)=>{
    if(courses) {
      setCourseData(courses.documents)
    }
  })
  object.getUniversity([]).then((university)=>{
    if (university){
      setUniversityData(university.documents);
    }
  })
//  console.log(universityData)
 
 //retrive data from local storage
   const nameOFExamination = localStorage.getItem('nameOFExamination')
   const nameOFCollege = localStorage.getItem('nameOFCollege');
   const collegeCode = localStorage.getItem('collegeCode');
   const examinationYear = localStorage.getItem('year');
   const semester = localStorage.getItem('semester');
   const setNumber = localStorage.getItem('setNumber');
   const studentName = localStorage.getItem('studentName');
   const elegibilityNo = localStorage.getItem('elegibilityNo');
   const abcId = localStorage.getItem('abcId');

   const sub1ThMarks =  parseInt(localStorage.getItem('sub1ThMarks'));
   const sub1IntMarks = parseInt(localStorage.getItem('sub1IntMarks'));
   const sub1TotMarks =  sub1IntMarks + sub1IntMarks
 
   const sub2ThMarks =  parseInt(localStorage.getItem('sub2ThMarks'));
   const sub2IntMarks = parseInt(localStorage.getItem('sub2IntMarks'));
   const sub2TotMarks = sub2ThMarks +  sub2IntMarks;

   const sub3ThMarks =  parseInt(localStorage.getItem('sub3ThMarks'));
   const sub3IntMarks = parseInt(localStorage.getItem('sub3IntMarks'));
   const sub3TotMarks = sub3ThMarks +  sub3IntMarks;

   const sub4ThMarks =  parseInt(localStorage.getItem('sub4ThMarks'));
   const sub4IntMarks = parseInt(localStorage.getItem('sub4IntMarks'));
   const sub4TotMarks = sub4ThMarks +  sub4IntMarks;

   const sub5ThMarks =  parseInt(localStorage.getItem('sub5ThMarks'));
   const sub5IntMarks = parseInt(localStorage.getItem('sub5IntMarks'));
   const sub5TotMarks =  sub5ThMarks +  sub5IntMarks;

   const sub6ThMarks =  parseInt(localStorage.getItem('sub6ThMarks'));
   const sub6IntMarks = parseInt(localStorage.getItem('sub6IntMarks'));
   const sub6TotMarks = sub6ThMarks +  sub6IntMarks;

   const sub7ThMarks =  parseInt(localStorage.getItem('sub7ThMarks'));
   const sub7IntMarks = parseInt(localStorage.getItem('sub7IntMarks'));
   const sub7TotMarks = sub7ThMarks +  sub7IntMarks;

   const sub8ThMarks =  parseInt(localStorage.getItem('sub8ThMarks'));
   const sub8IntMarks = parseInt(localStorage.getItem('sub8IntMarks'));
   const sub8TotMarks = sub8ThMarks +  sub8IntMarks;

   const sub9ThMarks =  parseInt(localStorage.getItem('sub9ThMarks'));
   const sub9IntMarks = parseInt(localStorage.getItem('sub9IntMarks'));
   const sub9TotMarks = sub9ThMarks +  sub9IntMarks;

   const sub10ThMarks =  parseInt(localStorage.getItem('sub10ThMarks'));
   const sub10IntMarks = parseInt(localStorage.getItem('sub10IntMarks'));
   const sub10TotMarks = sub10ThMarks +  sub10IntMarks;

   const sub11ThMarks =  parseInt(localStorage.getItem('sub11ThMarks'));
   const sub11IntMarks = parseInt(localStorage.getItem('sub11IntMarks'));
   const sub11TotMarks = sub11ThMarks +  sub11IntMarks;

   const sub12ThMarks =  parseInt(localStorage.getItem('sub12ThMarks'));
   const sub12IntMarks = parseInt(localStorage.getItem('sub12IntMarks'));
   const sub12TotMarks = sub12ThMarks +  sub12IntMarks;

   const sub13ThMarks =  parseInt(localStorage.getItem('sub1ThMarks'));
   const sub13IntMarks = parseInt(localStorage.getItem('sub1IntMarks'));
   const sub13TotMarks = (sub13ThMarks +  sub13IntMarks);

   const sub14ThMarks =  parseInt(localStorage.getItem('sub14ThMarks'));
   const sub14IntMarks = parseInt(localStorage.getItem('sub14IntMarks'));
   const sub14TotMarks = (sub14ThMarks +  sub14IntMarks);


   //calculating grade 
   function grade(i) {
 
    let  subMaxMarks = parseInt(eval(`courseData.map((course, i)=>{ return course.sub${i}MaxMark})`));
    let internalMaxMark = parseInt(eval(`courseData.map((course)=>{return course.internal${i}MaxMark})`)); 
    let totalMarks = subMaxMarks + internalMaxMark;
    let onePartOfTotMarks = totalMarks/10  
    let subObtTotMarks = eval(`sub${i}TotMarks`) 
 
    
      if (subObtTotMarks >= 0 && subObtTotMarks <= onePartOfTotMarks) {
      return 'D';
    } else if (subObtTotMarks >= onePartOfTotMarks*2 && subObtTotMarks <= onePartOfTotMarks*3) {
      return 'D+';
    } else if (subObtTotMarks >= onePartOfTotMarks*3 && subObtTotMarks <= onePartOfTotMarks*4) {
      return 'C';
    } else if (subObtTotMarks >= onePartOfTotMarks*4 && subObtTotMarks <= onePartOfTotMarks*5) {
      return  'C+';
    } else if (subObtTotMarks >= onePartOfTotMarks*5 && subObtTotMarks <= onePartOfTotMarks*6) {
      return 'B';
    }else if (subObtTotMarks >= onePartOfTotMarks*6 && subObtTotMarks <= onePartOfTotMarks*7) {
      return 'B+';
    }else if (subObtTotMarks >= onePartOfTotMarks*7 && subObtTotMarks <= onePartOfTotMarks*8) {
      return 'A';
    }else if (subObtTotMarks >= onePartOfTotMarks*8 && subObtTotMarks <= onePartOfTotMarks*9) {
      return  'A+';
    }else if (subObtTotMarks >= onePartOfTotMarks*9 && subObtTotMarks <= onePartOfTotMarks*10) {
      return 'O'
    }else {
 
        return "NaN";
    }
}
const sub1Grade = grade(1);
const sub2Grade = grade(2);
const sub3Grade = grade(3);
const sub4Grade = grade(4);
const sub5Grade = grade(5);
const sub6Grade = grade(6);
const sub7Grade = grade(7);
const sub8Grade = grade(8);
const sub9Grade = grade(9);
const sub10Grade = grade(10);
const sub11Grade = grade(11);
const sub12Grade = grade(12);
const sub13Grade = grade(13);
const sub14Grade = grade(14);

//calculating gradePoints
    function gradePoint(i){

      let  subMaxMarks = parseInt(eval(`courseData.map((course, i)=>{ return course.sub${i}MaxMark})`));
      let internalMaxMark = parseInt(eval(`courseData.map((course)=>{return course.internal${i}MaxMark})`)); 
      let totalMarks = subMaxMarks + internalMaxMark;
      let onePartOfTotMarks = totalMarks/10  
      let subObtTotMarks = eval(`sub${i}TotMarks`) 
     

if (subObtTotMarks >= 0 && subObtTotMarks <= onePartOfTotMarks) {
  return   2;
} else if (subObtTotMarks >= onePartOfTotMarks*2 && subObtTotMarks <= onePartOfTotMarks*3) {
  return   3;
} else if (subObtTotMarks >= onePartOfTotMarks*3 && subObtTotMarks <= onePartOfTotMarks*4) {
  return   4;
} else if (subObtTotMarks >= onePartOfTotMarks*4 && subObtTotMarks <= onePartOfTotMarks*5) {
  return    5;
} else if (subObtTotMarks >= onePartOfTotMarks*5 && subObtTotMarks <= onePartOfTotMarks*6) {
  return   6;
}else if (subObtTotMarks >= onePartOfTotMarks*6 && subObtTotMarks <= onePartOfTotMarks*7) {
  return  7;
}else if (subObtTotMarks >= onePartOfTotMarks*7 && subObtTotMarks <= onePartOfTotMarks*8) {
  return   8;
}else if (subObtTotMarks >= onePartOfTotMarks*8 && subObtTotMarks <= onePartOfTotMarks*9) {
  return  9;
}else if (subObtTotMarks >= onePartOfTotMarks*9 && subObtTotMarks <= onePartOfTotMarks*10) {
  return   10;
 }else {

    return 0;
}
}
const sub1GradePoint = gradePoint(1);
const sub2GradePoint = gradePoint(2);
const sub3GradePoint = gradePoint(3);
const sub4GradePoint = gradePoint(4);
const sub5GradePoint = gradePoint(5);
const sub6GradePoint = gradePoint(6);
const sub7GradePoint = gradePoint(7);
const sub8GradePoint = gradePoint(8);
const sub9GradePoint = gradePoint(9);
const sub10Gradepoint = gradePoint(10);
const sub11GradePoint = gradePoint(11);
const sub12GradePoint = gradePoint(12);
const sub13GradePoint = gradePoint(13);
const sub14GradePoint = gradePoint(14);

function GRPTS(i){

  let  subMaxMarks = parseInt(eval(`courseData.map((course, i)=>{ return course.sub${i}MaxMark})`));
  let internalMaxMark = parseInt(eval(`courseData.map((course)=>{return course.internal${i}MaxMark})`)); 
  let totalMarks = subMaxMarks + internalMaxMark;
  let onePartOfTotMarks = totalMarks/10  
  let subObtTotMarks = eval(`sub${i}TotMarks`) 
 

if (subObtTotMarks >= 0 && subObtTotMarks <= onePartOfTotMarks) {
return   4;
} else if (subObtTotMarks >= onePartOfTotMarks*2 && subObtTotMarks <= onePartOfTotMarks*3) {
return   8;
} else if (subObtTotMarks >= onePartOfTotMarks*3 && subObtTotMarks <= onePartOfTotMarks*4) {
return   12;
} else if (subObtTotMarks >= onePartOfTotMarks*4 && subObtTotMarks <= onePartOfTotMarks*5) {
return    16;
} else if (subObtTotMarks >= onePartOfTotMarks*5 && subObtTotMarks <= onePartOfTotMarks*6) {
return   20;
}else if (subObtTotMarks >= onePartOfTotMarks*6 && subObtTotMarks <= onePartOfTotMarks*7) {
return  24;
}else if (subObtTotMarks >= onePartOfTotMarks*7 && subObtTotMarks <= onePartOfTotMarks*8) {
return   28;
}else if (subObtTotMarks >= onePartOfTotMarks*8 && subObtTotMarks <= onePartOfTotMarks*9) {
return  32;
}else if (subObtTotMarks >= onePartOfTotMarks*9 && subObtTotMarks <= onePartOfTotMarks*10) {
return   36;
}else if (subObtTotMarks >= onePartOfTotMarks*9 && subObtTotMarks <= onePartOfTotMarks*10) {
return 40;
}else {

return 0;
}

 
}
const sub1GRPTS = GRPTS(1);
const sub2GRPTS = GRPTS(2);
const sub3GRPTS = GRPTS(3);
const sub4GRPTS = GRPTS(4);
const sub5GRPTS = GRPTS(5);
const sub6GRPTS = GRPTS(6);
const sub7GRPTS = GRPTS(7);
const sub8GRPTS = GRPTS(8);
const sub9GRPTS = GRPTS(9);
const sub10GRPTS = GRPTS(10);
const sub11GRPTS = GRPTS(11);
const sub12GRPTS = GRPTS(12);
const sub13GRPTS = GRPTS(13);
const sub14GRPTS = GRPTS(14);

let finalResult;

 courseData.map((course) =>{
  
  const subMinMarksTotal = parseInt(course.sub1MinMark) + parseInt(course.sub2MinMark) + parseInt(course.sub3MinMark) + parseInt(course.sub4MinMark) + parseInt(course.sub5MinMark) + parseInt(course.sub6MinMark) + parseInt(course.sub7MinMark) + parseInt(course.sub8MinMark) + parseInt(course.sub9MinMark) + parseInt(course.sub10MinMark) + parseInt(course.sub11MinMark) + parseInt(course.sub12MinMark) + parseInt(course.sub13MinMark) + parseInt(course.sub14MinMark); 
  const subObtTotalMarks = sub1TotMarks + sub2TotMarks + sub3TotMarks + sub4TotMarks + sub5TotMarks + sub6TotMarks + sub7TotMarks + sub8TotMarks + sub9TotMarks + sub10TotMarks + sub11TotMarks + sub12TotMarks + sub13TotMarks + sub14TotMarks  
  //console.log(subMinMarksTotal)
  //console.log(subObtTotalMarks)
  if(subMinMarksTotal <= subObtTotalMarks){
   finalResult = "PASS";
  }
  else  {
    finalResult = "FAIL"
  }
 
 })

 

  return (
    
      <div>
   
   <header className='flex'>
        <div className='flex gap-16'>
    
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl font-bold text-center mt-16 ml-20'>{universityData.map(university=>university.universityName)}</h2>
          <p className='font-bold '> {universityData.map(university=>university.address)}</p>
          <p className=''> {universityData.map(university=>university.webSite)} </p>
          <h1 className='text-4xl font-bold'>STATMENT OF MARKS</h1>
        </div>
        </div>
        <div className='font-bold mt-44'>
          <p>SR No : CQ.0034033</p>
        </div>
      </header>
 
     {courseData.map(course=>
     <div className='m-12'>
       
     
   
       <main className='border-8 border-double border-gray-900 h-full w-full rounded-3xl p-8'>
       <div className='border-b-2 border-dotted border-gray-900'>
         <p className=''><span className='font-bold'>EXAMINATION : </span><span>  {nameOFExamination.toUpperCase()} {examinationYear} [SEMESTER-{semester} ] SUMMER-2023</span></p>
         <div className='flex gap-36'> 
         <p className=''><span className='font-bold'>COLLEGE NAME : </span><span>{nameOFCollege}</span></p> 
         <p className=''><span className='font-bold'>COLLEGE CODE : </span><span>{collegeCode}</span></p>   
         </div>
         <div className='flex gap-36'> 
         <p className=''><span className='font-bold'>SEAT NUMBER : </span><span>{setNumber}</span></p> 
         <p className=''><span className='font-bold'>PRN/ELIGIBILITY NUMBER : </span><span>{elegibilityNo}</span></p>
         <p className=''><span className='font-bold'>ABCID : </span><span>{abcId}</span></p>      
         </div>
         <p className=''><span className='font-bold'>NAME : </span><span>{studentName.toUpperCase()}</span></p>   
       </div>  
        
 
         <table className='flex gap-10'>
            
             <tr className='flex flex-col' key={course.id}>
             <th className='mt-6 mb-6'>PAPER TITE(s)</th>
            <p className='font-bold'>SEMESTER - I</p>
              <td>{course.sub1Name}</td>
              <td>{course.sub2Name}</td>
              <td>{course.sub3Name}</td>
              <td>{course.sub4Name}</td>
              <td>{course.sub5Name}</td>
              <td>{course.sub6Name}</td>
              <td>{course.sub7Name}</td>
             <p className='font-bold'>SEMESTER - II</p>
               <td>{course.sub8Name}</td>
               <td>{course.sub9Name}</td>
               <td>{course.sub10Name}</td>
               <td>{course.sub11Name}</td>
               <td>{course.sub12Name}</td>
               <td>{course.sub13Name}</td>
               <td>{course.sub14Name}</td>
             <td className='font-bold mt-4'>TOTLE</td>
             </tr>
           
             <tr className='flex flex-col text-center'>
            <th className='mt-6 mb-12'>CREDITS</th>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td className='text-white'>.</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td className='font-bold mt-4'>43</td>
             </tr>
           
             <tr className='flex flex-col' key={course.id}>
             <th className='mt-6 mb-6 flex flex-col'><span>-----CA-----</span><span>MAX. MIN. OBT</span></th>
             <td className='flex gap-8'><span> <td>{course.internal1MaxMark}</td></span><span> <td>{course.internal1MinMark}</td></span><span>{sub1IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal2MaxMark}</td></span><span> <td>{course.internal2MinMark}</td></span><span>{sub2IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal3MaxMark}</td></span><span> <td>{course.internal3MinMark}</td></span><span>{sub3IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal4MaxMark}</td></span><span> <td>{course.internal4MinMark}</td></span><span>{sub4IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal5MaxMark}</td></span><span> <td>{course.internal5MinMark}</td></span><span>{sub5IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal6MaxMark}</td></span><span> <td>{course.internal6MinMark}</td></span><span>{sub6IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal7MaxMark}</td></span><span> <td>{course.internal7MinMark}</td></span><span>{sub7IntMarks}</span></td>
             
             <td className='text-white'>.</td>
             <td className='flex gap-8'><span> <td>{course.interna8MaxMark}</td></span><span> <td>{course.internal8MinMark}</td></span><span>{sub8IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal9MaxMark}</td></span><span> <td>{course.internal9MinMark}</td></span><span>{sub9IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal10MaxMark}</td></span><span> <td>{course.internal10MinMark}</td></span><span>{sub10IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal11MaxMark}</td></span><span> <td>{course.internal11MinMark}</td></span><span>{sub11IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal12MaxMark}</td></span><span> <td>{course.internal12MinMark}</td></span><span>{sub12IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal13MaxMark}</td></span><span> <td>{course.internal13MinMark}</td></span><span>{sub13IntMarks}</span></td>
             <td className='flex gap-8'><span> <td>{course.internal14MaxMark}</td></span><span> <td>{course.internal14MinMark}</td></span><span>{sub14IntMarks}</span></td>
             </tr>
             
           
             <tr className='flex flex-col' key={course.id}>
             <th className='mt-6 mb-6 flex flex-col'><span>-----ESE-----</span><span>MAX. MIN. OBT</span></th> 
             <td className='flex gap-8'><span><td>{course.sub1MaxMark}</td></span><span> <td>{course.sub1MinMark}</td></span><span>{sub1ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub2MaxMark}</td></span><span> <td>{course.sub2MinMark}</td></span><span>{sub2ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub3MaxMark}</td></span><span> <td>{course.sub3MinMark}</td></span><span>{sub3ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub4MaxMark}</td></span><span> <td>{course.sub4MinMark}</td></span><span>{sub4ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub5MaxMark}</td></span><span> <td>{course.sub5MinMark}</td></span><span>{sub5ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub6MaxMark}</td></span><span> <td>{course.sub6MinMark}</td></span><span>{sub6ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub7MaxMark}</td></span><span> <td>{course.sub7MinMark}</td></span><span>{sub7ThMarks}</span></td>
            <td className='text-white'>.</td>
             <td className='flex gap-8'><span><td>{course.sub8MaxMark}</td></span><span> <td>{course.sub8MinMark}</td></span><span>{sub8ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub9MaxMark}</td></span><span> <td>{course.sub9MinMark}</td></span><span>{sub9ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub10MaxMark}</td></span><span> <td>{course.sub10MinMark}</td></span><span>{sub10ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub11MaxMark}</td></span><span> <td>{course.sub11MinMark}</td></span><span>{sub11ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub12MaxMark}</td></span><span> <td>{course.sub12MinMark}</td></span><span>{sub12ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub13MaxMark}</td></span><span> <td>{course.sub13MinMark}</td></span><span>{sub13ThMarks}</span></td>
             <td className='flex gap-8'><span><td>{course.sub14MaxMark}</td></span><span> <td>{course.sub14MinMark}</td></span><span>{sub14ThMarks}</span></td>
             </tr>
             
             <tr className='flex flex-col text-center'>
             <th className='mt-6 mb-12'>-TOT-</th>
             <td>{sub1TotMarks}</td>
             <td>{sub2TotMarks}</td>
             <td>{sub3TotMarks}</td>
             <td>{sub4TotMarks}</td>
             <td>{sub5TotMarks}</td>
             <td>{sub6TotMarks}</td> 
             <td>{sub7TotMarks}</td>
             <td  className='text-white'>.</td>
             <td>{sub8TotMarks}</td>
             <td>{sub9TotMarks}</td>
             <td>{sub10TotMarks}</td>
             <td>{sub11TotMarks}</td>
             <td>{sub12TotMarks}</td>
             <td>{sub13TotMarks}</td>
             <td>{sub14TotMarks}</td>
             <td className='font-bold mt-4'>{sub1TotMarks + sub2TotMarks + sub3TotMarks + sub4TotMarks + sub5TotMarks + sub6TotMarks + sub7TotMarks +  sub8TotMarks + sub9TotMarks + sub10TotMarks + sub11TotMarks + sub12TotMarks + sub13TotMarks + sub14TotMarks} /{parseInt(course.interna1MaxMark) +parseInt(course.interna2MaxMark) +parseInt(course.interna3MaxMark) +parseInt(course.interna4MaxMark) +parseInt(course.interna5MaxMark) +parseInt(course.interna6MaxMark) +parseInt(course.interna7MaxMark) +parseInt(course.interna8MaxMark) +parseInt(course.interna9MaxMark) +parseInt(course.interna10MaxMark) +parseInt(course.internl11MaxMark) +parseInt(course.interna12MaxMark) +parseInt(course.interna13MaxMark) +parseInt(course.interna14MaxMark)+ parseInt(course.sub1MaxMark) + parseInt(course.sub1MaxMark) + parseInt(course.sub2MaxMark) + parseInt(course.sub3MaxMark) + parseInt(course.sub4MaxMark) + parseInt(course.sub5MaxMark) + parseInt(course.sub6MaxMark) + parseInt(course.sub7MaxMark) + parseInt(course.sub8MaxMark) + parseInt(course.sub9MaxMark) + parseInt(course.sub10MaxMark) + parseInt(course.sub11MaxMark) + parseInt(course.sub12MaxMark) + parseInt(course.sub13MaxMark) + parseInt(course.sub14MaxMark) }</td>
             </tr>
             <tr className='flex flex-col text-center'>
             <th className='mt-6 mb-12'>GRADE</th>
             <td>{sub1Grade}</td>
             <td>{sub2Grade}</td>
             <td>{sub3Grade}</td>
             <td>{sub4Grade}</td>
             <td>{sub5Grade}</td>
             <td>{sub6Grade}</td>
             <td>{sub7Grade}</td>
             <td className='text-white'>.</td>
             <td>{sub8Grade}</td>
             <td>{sub9Grade}</td>
             <td>{sub10Grade}</td>
             <td>{sub11Grade}</td>
             <td>{sub12Grade}</td>
             <td>{sub13Grade}</td>
             <td>{sub14Grade}</td>
             </tr>
             <tr className='flex flex-col text-center'>
             <th className='flex flex-col mt-6 mb-6'><span>GRADE</span><span>POINT</span></th>
             <td>{sub1GradePoint}</td>
             <td>{sub2GradePoint}</td>
             <td>{sub3GradePoint}</td>
             <td>{sub4GradePoint}</td>
             <td>{sub5GradePoint}</td>
             <td>{sub6GradePoint}</td>
             <td>{sub7GradePoint}</td>
             <td className='text-white'>.</td>
             <td>{sub8GradePoint}</td>
             <td>{sub9GradePoint}</td>
             <td>{sub10Gradepoint}</td>
             <td>{sub11GradePoint}</td>
             <td>{sub12GradePoint}</td>
             <td>{sub13GradePoint}</td>
             <td>{sub14GradePoint}</td>
             <td className='font-bold mt-4'>{sub1GradePoint+sub2GradePoint+sub3GradePoint+sub4GradePoint+sub5GradePoint +sub6GradePoint +sub7GradePoint +sub8GradePoint +sub9GradePoint +sub10Gradepoint+sub11GradePoint+sub12GradePoint+sub13GradePoint+sub14GradePoint}</td>
             </tr>
             <tr className='flex flex-col text-center'>
             <th className='flex flex-col mt-6 mb-6'><span>EARNED</span><span>GR. PTS.</span></th>
             <td>{sub1GRPTS}</td>
             <td>{sub2GRPTS}</td>
             <td>{sub3GRPTS}</td>
             <td>{sub4GRPTS}</td>
             <td>{sub5GRPTS}</td>
             <td>{sub6GRPTS}</td>
             <td>{sub7GRPTS}</td>
             <td className='text-white'>.</td>
             <td>{sub8GRPTS}</td>
             <td>{sub9GRPTS}</td>
             <td>{sub10GRPTS}</td>
             <td>{sub11GRPTS}</td>
             <td>{sub12GRPTS}</td>
             <td>{sub13GRPTS}</td>
             <td>{sub14GRPTS}</td>
             <td className='font-bold mt-4'>653</td>
             </tr>
         
         </table>
     
      <div>
         <p className='mt-4'><span>CGPA :</span><span>{parseFloat((sub1GradePoint+ sub2GradePoint +sub3GradePoint +sub4GradePoint +sub5GradePoint +sub6GradePoint +sub7GradePoint +sub8GradePoint +sub9GradePoint +sub10Gradepoint+sub11GradePoint+sub12GradePoint+sub13GradePoint+sub14GradePoint)/14).toFixed(2)}</span></p>
         <p className='mt-4 font-bold'><span>RESULT :</span><span className='m-4 text-lg'>{finalResult}</span></p>
         <p className='mt-4'>RESULT DECLARE DATE : 10 JUNE 2023  MARK MEMO ISSU DATE : 20 JUNE 2022</p>
         <div className='flex flex-col items-end justify-center'>
           
           <h3>DIRECTOR</h3>
           <p>bord of examination</p>
         </div>
      </div>
       </main>
      
     </div>
     )}
     <div className='text-center'>
     <button
          type="submit"
           onClick={()=>{  document.body.setAttribute( "style", "-webkit-transform: rotate(-90deg);"); window.print();  window.location.reload()}}
          class=" m-11 px-20 py-3 rounded-md bg-blue-700 text-white hover:bg-blue-600">Submit </button>

     </div>
  </div>

  )
}

export default ResultTmp1
