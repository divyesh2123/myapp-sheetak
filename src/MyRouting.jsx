import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MyForm from "./MyForm";
import ExampleWithYup from "./ExampleWithYup";
import Posts from "./Posts";
import NewPost from "./NewPost";
import Post from "./Post";
import Accounts from "./Accounts";
import Login from "./Login";

export default function MyRouting() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">MyForm</Link>
        </li>
        <li>
          <Link to="examplewithyup">examplewithyup</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<MyForm />} />
        <Route path="/examplewithyup" element={<ExampleWithYup />} />
        <Route path="/account" element= {<Accounts/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="posts" element={<Posts />}>

          <Route path="new" element={<NewPost />} /> {/*A nested route!*/}
          <Route path=":postId" element={<Post />} /> {/*A nested route!*/}
        </Route>
      </Routes>
    </>
  );
}
