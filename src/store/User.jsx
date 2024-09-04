import React, { useEffect } from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import { UserRequest, UserSuc } from '../action/useraction';

export default function User() {

    const u = useSelector(y=>y.user);

    const dis = useDispatch();

    useEffect(()=>{

        dis(UserRequest())

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(y=>y.json())
    .then(y=>{

        dis(UserSuc(y)) 
    })

    },[])

    console.log(u);
  return (
    <div>User</div>
  )
}
