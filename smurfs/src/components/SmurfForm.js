import React from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import {connect} from 'react-redux'

import { postData } from "../actions";

const SmurfForm = props => {
  //inputs needed to add smurfs: name, age, height
  return (
    <div className="smurf-form">
      <h1>Add Smurf to Village</h1>
      <Form>
        {/* // Name Input  */}
        <div className="input">
          <Field type="text" name="name" placeholder="Name" />*
          {props.touched.name && props.errors.name && (
            <p>{props.errors.name}</p>
          )}
        </div>
        {/* // Age Input  */}
        <div className="input">
          <Field type="text" name="age" placeholder="Age" />*
          {props.touched.age && props.errors.age && <p>{props.errors.age}</p>}
        </div>
        {/* // Height Input  */}
        <div className="input">
          <Field type="text" name="height" placeholder="Height" />*
          {props.touched.height && props.errors.height && (
            <p>{props.errors.height}</p>
          )}
        </div>

        {/* // Submit Button  */}
        {/* <button onClick={handleSubmit} className="button" type="submit"> */}
        <button className="form-button" type="submit">

          
          Submit!
        </button>
      </Form>

  
    </div>
  );
};
// HOC returning copy of SmurForm with extended Formik logic
const FormikSmurfForm = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || "",
      age: values.age || "",
      height: values.height || ""
    };
  },

  // Yup form validation
  validationSchema: Yup.object().shape({
    // take every value you want to validate, and give each value rules
    name: Yup.string().required(),
    age: Yup.string().required(),
    height: Yup.string().required()
    // these give you the error props you need to apply under the each <Field> component in userForm to render
  }),

  handleSubmit(values, { props,setStatus, resetForm }) {
    // console.log('handle submit props', props)
    // console.log('handle submit values', values)

    props.postData(values)
    resetForm();
  }
})(SmurfForm); // currying functions in Javascript

export default connect(() => {}, {postData})(FormikSmurfForm);

// https://reqres.in/api/users/
