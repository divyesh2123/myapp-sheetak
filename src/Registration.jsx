import React from 'react'
import { Formik, Field, Form } from 'formik';

export default function Registration() {
  return (
    <Formik initialValues={{
        firstName : "",
        lastNAme : "",
        email: "",
        location:"",
        toggle: false,
        hobbies: [],
        picked:""
    }}
    
    onSubmit={(values)=>{

        console.log(values);
    }}
    >
  <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />

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
            <Field type="checkbox" name="toggle" />
            
          </label>

          {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
          <div id="checkbox-group">Checked</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div>

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

        <button type="submit">Submit</button>
      </Form>


    </Formik>
  )
}
