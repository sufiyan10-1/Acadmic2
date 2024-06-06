import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../store/authSlice';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';
 


function Signup() {

const navigate = useNavigate();
const { register, handleSubmit } = useForm();
const [error, setError] = useState("");
const dispatch = useDispatch();


  // sign up
  const create = async (data) => {
    setError("")
    localStorage.setItem("userID", data.userName)
    try {
      const userData = await authService.createAccount(data)
      if (userData) {
          const userData = await authService.getCurrentUser()
          if(userData) dispatch(authLogin(userData));
           navigate("/UniversityDataInput")
      }
  } catch (error) {
      setError(error.message)
  } 
    /* section 3: handle clicks on sing in button */
   
  }
  return (

    <div className='h-screen'>
      <div className="justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to your account</h1>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        </div>
        {/* {showUniversityDataInput && <UniverSitydataInput/>} */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"  >
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
              <div className="text-sm">
              </div>
              <div className="mt-2">
                <input id="username" name="username"
                  type="text" required
                  className="text-center block w-full rounded-md border-0 py-1.5 px-32 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  {...register("userName", {
                    required: true,
                  })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 px-32 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                  {...register("email", {
                    required: true,
                  })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
              </div>
              <div className="mt-2">
                <input id="password"
                  name="password" type="password"
                  autoComplete="current-password" required
                  className="block w-full rounded-md border-0 py-1.5 px-32 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                  {...register("password", {
                    required: true,
                  })}
                />
              </div>
            </div>
          </form>

      

      <div className='mt-4'>
      <button type="submit" onClick={handleSubmit(create)} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
      <p className="mt-10 text-center text-sm text-gray-500">
        Do you have Account <Link to='/login' className='text-blue-900'> Login </Link>?
      </p>

    </div>
  </div > 
  </div >
  )
}

export default Signup