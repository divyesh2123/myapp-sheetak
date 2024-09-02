import React, { useReducer, useState } from 'react'

export default function ManageCrud() {

    const manageReducer = (state,a)=>{

        switch(a.type)
        {
            case "ADD":
             let p = [...state];
             p.push(a.payload);
             return p;
             break;

             case "DeleteInfo":

                let j = [...state];
                j.splice(a.payload,1);
                return j;

             default:
                return state;


        }

    }
    const [state, dispatch] = useReducer(manageReducer, []);

    const [input,setinput]= useState('');

    console.log(state);

    const manageInput = (e)=>{
        setinput(e.target.value);
    }

    const saveInfo = ()=>{
        dispatch({type:"ADD", payload: input})

    }
    const deleteInfo = (index)=>{
        dispatch({type:"DeleteInfo", payload: index})

    }
  return (
    <div>

        <input type='text' name='manageInput' onChange={manageInput}/>
        <button onClick={saveInfo}>Save</button>

           {
                state.map((p,index)=>{

                    return (<div>{p}<button onClick={()=>{
                        deleteInfo(index);
                    }}>DeleteInfo</button></div>)
                })
           } 

    </div>
  )
}
