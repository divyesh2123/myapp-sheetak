import React from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import { DEC, INC } from './action/counterAction';

export default function ABC() {

    const counter = useSelector(y=>y.counter);

    const ab = useDispatch();

    const myindc = ()=>{
      ab({type:'INC_AYNC'})
    }

    const mydec = ()=>{

      ab({type:'DEC_AYNC'})
    }

    
  return (
    <div>{counter}
        <button onClick={myindc}>+</button>
        <button onClick={mydec}>-</button>
    </div>
  )
}
