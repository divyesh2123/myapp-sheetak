import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useNavigate, useNavigation } from "react-router-dom";
export default function ExampleWithYup() {


  const nav1= useNavigate("/");


   const  validationSchema =()=> {
        return Yup.object().shape({
          fullname: Yup.string().required('Fullname is required'),
          username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
          email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
            
          password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
          confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
          acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
        });
      }

  return (
    <Formik
      initialValues={{
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
      }}

      //validationSchema={validationSchema}
      
      onSubmit={function (values) 
        {
          alert("d");
        nav1("/");
      }}
    >





      <Form>
        <Field name="fullname" id="fullname" />
        <ErrorMessage name="fullname" />
        <Field name="username" id="username" />
        <ErrorMessage name="username" />
        <Field type="email" name="email" id="email" />
        <ErrorMessage name="email" />
        <Field type="password" name="password" id="password" />
        <ErrorMessage name="password" />
        <Field type="password" name="confirmpassword" id="confirmpassword" />
        <ErrorMessage name="confirmpassword" />

        <label>
          <Field type="checkbox" name="terms" />I accept the terms and
          conditions.
        </label>

        <input type="submit" value="save" />
      </Form>
    </Formik>
  );
}
