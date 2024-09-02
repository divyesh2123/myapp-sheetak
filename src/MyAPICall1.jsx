import React from 'react'
import { useFetch } from './useFetch'

export default function MyAPICall1() {
  const {loading,data}=  useFetch("https://jsonplaceholder.typicode.com/users");
  
  
  console.log(loading);
  console.log(data);
  return (
    <div>MyAPICall1</div>
  )
}
