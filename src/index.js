import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import About from './About';
import Counter from './Counter';
import MyAPICall from './MyAPICall';
import APICallWithAx from './APICallWithAx';
import MyForm from './MyForm';
import BasicExampleWithFormk from './BasicExampleWithFormk';
import ExampleWithYup from './ExampleWithYup';
import Product from './Product';
import Registration from './Registration';
import ExampleOfUserFormik from './ExampleOfUserFormik';
import Example from './Example';
import LoginWithMUI from './LoginWithMUI';
import RegistrationApp from './RegistrationApp';
import{ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeList from './HomeList';
import Button from './Button';
import MyRouting from './MyRouting';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import ExampleMemo from './ExampleMemo';
import ShowMoreTextToggle from './ShowMoreTextToggle';
import ManageCrud from './ManageCrud';
import MyAPICall1 from './MyAPICall1';
import ABC from './ABC';
import { Provider } from 'react-redux';
import store from './store/store';
import User from './store/User';
import Parent from './Parent';
import AppNew from './AppNew';
import CustComLink from './CustComLink';
import   './axiosbase/global';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <ul>
       
       <li>ngg
         <Link to='/'>Home</Link>
       </li>
      
       <li>
         <Link to='/invoices'>Invoices</Link>
       </li>
       <li>
         <Link to='/registration'>Registration</Link>
       </li>
       <li>
         <Link to='/login'>Login</Link>
       </li>


       <li>
       <CustComLink
         to="exampleuser"
        
       >MyPage
         </CustComLink>
       </li>
    
   </ul> 

      <Provider store={store}>
          <AppNew/>
       
      </Provider>
     

    </BrowserRouter>
    
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
