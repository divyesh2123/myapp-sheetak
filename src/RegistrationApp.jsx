import React,{useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';


export default function RegistrationApp() {


    const notify = () => toast("saved so easy!");
    const [data,setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e)=>{
        setData({...data,[e.target.name]: e.target.value});

    }

    const handleSaveData = (e)=>{

        e.preventDefault();

        axios.post("http://localhost:8081/api/auth/signup",data)
        .then(y=>{
            
            notify("data saved sicef")
        })

    }
  return (
    <form onSubmit={handleSaveData}>
        
        <input type='text' name='username' onChange={handleChange}/>

        <input type='text' name="email" onChange={handleChange}/>


        <input type='text' name='password' onChange={handleChange}/>

        <input type='submit' value="save"/>

    </form>
  )
}
