import axios from 'axios';
import React, { useEffect, useState } from 'react'
import authFetch from './axiosbase/interceptors';
import { Outlet } from 'react-router-dom';
//import authFetch from './axiosbase/custom';

export default function Accounts() {

  const [data,setData]= useState([]);

  useEffect(()=>{
    authFetch.get("accounts").then(y=>{
      setData(y.data);
      console.log(y.data);
    })

  },[])
  return (
    <div>Accounts

      <Outlet></Outlet>
    </div>
  )
}
