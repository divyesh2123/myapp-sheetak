import React, { useEffect } from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import { UserRequest, UserSuc } from '../action/useraction';
import { getUser } from '../action/userasyncaction';

export default function User() {

    const u = useSelector(y=>y.user);

    const dis = useDispatch();

    useEffect(()=>{

        dis(UserRequest())

   

    },[])

    console.log(u);
  return (
    <div>User</div>
  )
}
