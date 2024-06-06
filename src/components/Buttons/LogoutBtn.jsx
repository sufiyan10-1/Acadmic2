import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function Signup() {
  const dispatch = useDispatch()
  const logoutHandler = () =>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <div>
      <button
      onClick={logoutHandler}
      className='border-solid border-1 
       border-gray-600 bg-white mr-3
       text-black py-1.5 px-4 rounded-md '>
        Logout         
      </button>
    </div>
  )
}

export default Signup