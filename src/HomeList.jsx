import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Photo from './Photo';

export default function HomeList() {

    const [data,setData]= useState([]);

    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(y=>{

            setData(y.data)
        })

    },[]);
  return (
    <div>{
        
        data.map((v,index)=>{

                return (<Photo id={index} url={v.url}></Photo>)

        })


    }</div>
  )
}
