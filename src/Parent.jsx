import React, { useState } from 'react'
import Child from './Child';

export default function Parent() {

    const [data,setData]= useState([]);
    const [input,setInput]= useState('');

    const remove = ()=>{

    }

    const handleChange = (e)=>{
        setInput(e.target.value) 
    }

    const handleSave= ()=>{
            let p =[... data];
            p.push(input);
            setData(p);
    }
  return (
    <div>
            <input type='text' onChange={handleChange} /> 
            <input type='button' value="save" onClick={handleSave}/>
            <Child data={data} remove={remove}/>
    </div>
  )
}
