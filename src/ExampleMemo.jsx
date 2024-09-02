import React, { useState } from 'react'
import ChildInfo from './ChildInfo';

export default function ExampleMemo() {

    const [data,setData]= useState([]);
    const [input,setInput]= useState('');

    const manageAdd = ()=>{

        let p = [...data];
        p.push(input);
        setData(p);

    }

    const myfunction = React.useCallback(()=>{

    },[])

    const handleInput = (e)=>{
        setInput(e.target.value);
    }
  return (
    <div>
        <input type='text' name="name" onChange={handleInput}/>

        <input type='button' value="save"onClick={manageAdd}/>
        <ChildInfo p={data} myfunction={myfunction}/>


    </div>
  )
}
