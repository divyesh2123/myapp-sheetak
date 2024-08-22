import React, { useEffect, useState } from 'react'
import axios  from 'axios'

export default function Product() {


    const [data,setData]= useState([]);

    useEffect(()=>{

            axios.get("https://fakestoreapi.com/products")
            .then(y=>{
                setData(y.data);
            })

    },[])

  return (
    <div>{
        
        data.map((v)=>{

            return (<div>{v.title}</div>)

        })


    }</div>
  )
}
