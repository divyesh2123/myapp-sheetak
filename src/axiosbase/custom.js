import axios from 'axios';


let token = localStorage.getItem("token");
const authFetch = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Accept: 'application/json',
    Authorization : `bearer ${token}`
  },
});

export default authFetch;