import React from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/asset 3.png"
function ServiceCard({path, title}) {
  return (
    <div class="max-w-sm border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to={`/${path}`}>
        <img class="rounded-t-lg" src={image} alt="" />
    <div class="p-5">  
     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Academics is provieds the service of {title} You can create an {title} by using few clicks </p>
        <Link to={`/${path}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Create {title}
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
      
    </div>
    </Link>
</div>
  )
}

export default ServiceCard
