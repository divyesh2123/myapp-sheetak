import axios from 'axios';

let token = localStorage.getItem("token");
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `bearer ${token}`