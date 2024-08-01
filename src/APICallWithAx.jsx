import React, { useEffect, useState } from 'react';
import av from 'axios'

export default function APICallWithAx() {

    const [abc,setabc]= useState([]);

    useEffect(()=>{

        av.get("https://jsonplaceholder.typicode.com/todos")
        .then(y=>{
            setabc(y.data);
        })


    },[])
  return (
    <table>
    {
        abc.map((v)=>{

            return (<tr><td>{v.title}</td></tr>)
        })
        
    }</table>
  )
}
