import * as React from "react";
import { useRoutes } from "react-router-dom";
import Accounts from "./Accounts";
import Example from "./Example";
import Counter from "./Counter";
import Login from "./Login";
import RequireAuth from "./private/requiredAuth";
import ExampleOfUserFormik from "./ExampleOfUserFormik";
import MyGridExample from './MyGridExample'
import ABC from "./ABC";

export default function AppNew() {
  
  let element = useRoutes([
    {
      path: "/account",
      element: (
        <RequireAuth>
          {" "}
          <Accounts />{" "}
        </RequireAuth>
      ),
      children: [
        {
          path: "example",
          element: <Example />,
        },
        { path: "counter", element: <Counter /> },
      ],
    },
    {path:'/ABC',element:<ABC></ABC>},
    { path: "/", element: <Login></Login> },
    { path: "exampleuser", element: <ExampleOfUserFormik /> },
    {path:"/MyGridExample",element: <MyGridExample></MyGridExample>}
  ]);

  return element;
}
