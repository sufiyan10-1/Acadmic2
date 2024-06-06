import React, { useState } from 'react';
import logo from '../assets/asset 0.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import LoginBtn from './Buttons/LoginBtn';
import Signup from './Buttons/SignupBtn';
import { useSelector } from 'react-redux';
import LogoutBtn from '../components/Buttons/LogoutBtn'
function Header() {
  const [toggle, setToggle] = useState();
  const handleToggle = () =>{setToggle(!toggle)}
  const navigate = useNavigate();
  const authStatus = useSelector((state)=> state.auth.status)
  const navItem = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
     {
      name: 'Services',
      slug: '/Services',
      active: authStatus,
     },
    {
      name: 'Features',
      slug: '/feature',
      active: true,
    },
    {
      name: 'Contact Us',
      slug: '/contact',
      active:  true,
    },
  ];
  const active = !authStatus;
  return (
    <header className='flex justify-between z-10 fixed w-full bg-slate-200 max-md:h-9'>
      
       <Link to='/'>
          <img src={logo} 
          alt="Logo" className='max-md:h-10 max-md:w-20' />
        </Link>
        <div className="nav-links items-center flex">
        {/* for large device */}
        <nav className='flex items-center max-md:hidden'>
        <ul className='flex gap-10'>
          {navItem.map((item) => (
            item.active && (
              <li key={item.name}>
                <button onClick={()=> navigate(item.slug)}>{item.name}</button>
              </li>
            )
          ))}
        </ul>
      </nav>
      {/* for small devices */}
      <nav className= {!toggle ? 'hidden': "left-0"}>
        <ul className='flex flex-col gap-6'>
          {navItem.map((item) => (
            item.active && (
              <li key={item.name}>
                <button onClick={()=> navigate(item.slug)}>{item.name}</button>
              </li>
            )
          ))}
        </ul>
        </nav>
        </div>
         <div className="buttons flex items-center">
          <Link to='/login' >{!authStatus && (<LoginBtn/>)}</Link>
          <Link to='/singup'>{!authStatus && (<Signup/>)}</Link>
           {authStatus && (<LogoutBtn/>)}   
          </div>
        <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <IoMenu size={30} /> : <IoMdClose size={30} />}
      </button>
    </header>
  );
}

export default Header;
