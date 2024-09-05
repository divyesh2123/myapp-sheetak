import axios from "axios";
import { UserError, UserRequest, UserSuc } from "./useraction";

export  const getUser = () => {
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch(UserRequest());
      // Return promise with success and failure actions
      return axios.get('https://jsonplaceholder.typicode.com/users').then(  
        user => dispatch(UserSuc(user)),
        err => dispatch(UserError(err))
      );
    };
  };