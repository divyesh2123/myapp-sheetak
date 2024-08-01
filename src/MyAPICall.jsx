import React, { useEffect, useState } from 'react'

export default function MyAPICall() {

    const [data,setData]= useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(y=>y.json())  
        .then(y=>{

            console.log(y);
            setData(y)
        });

    },[])
    
  return (
    <table>
    {
        data.map((val,index)=>{

            return (<tr><td>{val.title}</td><td></td></tr>)
        })
        

    }</table>
  )
}
