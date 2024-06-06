import React, { useState } from 'react'
import {  Footer, Header, Hero,} from '../components';
import Service from './Service';
import { useSelector } from 'react-redux';
import { Client, Databases, Query } from "appwrite";

function Home() {
  
  const authStatus = useSelector((state)=> state.auth.status)
  return (
     <>
      <Header/>
      {!authStatus && (<Hero/>)}
      {authStatus && (<Service/>)}
      <Footer/>
      </>

  )
}

export default Home
