import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const nav1 = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/accounts/authenticate", data)
      .then((y) => {
        localStorage.setItem("token", y.data.jwtToken);
        nav1("/account");
      });

    
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" onChange={handleChange} />
      <input type="text" name="password" onChange={handleChange} />
      <input type="submit" value="Save"/>
   
    </form>
  );
}
