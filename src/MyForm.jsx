import React, { useState } from 'react'

export default function MyForm() {

    const [data,setData]= useState({

    formData : {
         firstName : "",
        lastName : ""
    },
    error : {
        firstName : "",
        lastName : ""
    }

    }
);

    const handleFirstName = (e)=>{
        
        setData({...data,"firstName": e.target.value});
    }

    const handleLastName = (e)=>{

        setData({...data,"lastName": e.target.value})
    }

    const handleInput = (e)=>{

        let {formData,error} = data;
        let obj = {...formData,[e.target.name]: e.target.value};

        let formerror = {...error};

        if(!formData[e.target.name] )
        {
            formerror[e.target.name]="required field"   
        }
        else
        {
            formerror[e.target.name] = "";
        }



        setData({...data,formData: obj,error:formerror});

    }

    const handleForm = (e)=>{

        e.preventDefault();
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleForm}>

        <input type='text' name='firstName' onChange={handleInput} />

    <span>{data?.error?.firstName}</span>

        <input type='text' name="lastName" onChange={handleInput}/>
        <span>{data?.error?.lastName}</span>
        <input type='submit' value="save"/>

        </form>


    </div>
  )
}
