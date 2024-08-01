import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default function BasicExampleWithFormk() {

  const validateEmployee = empData => {

    console.log(empData);
    const errors = {};
  
    if (!empData.firstName) {
      errors.firstName = 'Please Enter first Name';
    } else if (empData.firstName.length > 20) {
      errors.firstName = 'Name cannot exceed 20 characters';
    }

    if (!empData.lastName) {
      errors.lastName = 'Please Enter lastName Name';
    } else if (empData.lastName.length > 20) {
      errors.lastName = 'Name cannot exceed 20 characters';
    }
    return errors;
  }

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        location:[],
        terms:false,
        picked:""
      }}
      validate={validateEmployee}
      onSubmit={function (values) {
        console.log(values);
      }}
    >
      <Form>
        <Field name="firstName" id="firstName" />

        <ErrorMessage name="firstName"/>
        <Field name="lastName" id="lastName" />
        <ErrorMessage name="lastName"/>
        <Field type="email" name="email" id="email" />
        <Field
             component="select"
             id="location"
             name="location"
             multiple={true}
           >
             <option value="NY">New York</option>
             <option value="SF">San Francisco</option>
             <option value="CH">Chicago</option>
             <option value="OTHER">Other</option>
           </Field>

           <label>
             <Field type="checkbox" name="terms" />I accept the terms and
             conditions.
           </label>

           <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
            </div>

        <input type="submit" value="save"/>
      </Form>
    </Formik>
  );
}
