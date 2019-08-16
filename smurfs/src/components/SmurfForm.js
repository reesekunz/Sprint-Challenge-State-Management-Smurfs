import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const SmurfForm = props => {

  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    if (props.status) {
      setSmurfs([...smurfs, props.status]);
    }
  }, [props.status]);
  //inputs needed to add smurfs: name, age, height 
  return (
    <div className="smurf-form">
      <h1>Add Smurf</h1>
      <Form>
        {/* // Name Input  */}
        <div className="input">
        <Field type="text" name="name" placeholder="Name" />*
        {props.touched.name && props.errors.name && <p>{props.errors.name}</p>}
        </div>
        {/* // Age Input  */}
        <div className="input">
        <Field type="text" name="age" placeholder="Age" />*
        {props.touched.age && props.errors.age && (
          <p>{props.errors.age}</p>
        )}
        </div>
          {/* // Height Input  */}
          <div className="input">
        <Field type="text" name="height" placeholder="Height" />*
        {props.touched.height && props.errors.height && (
          <p>{props.errors.height}</p>
        )}
        </div>
       
        {/* // Submit Button  */}
        <button className="button" type="submit"> Submit!</button>
      </Form>

      {/* Mapping each smurf and displaying their submitted info  */}
      {smurfs.map(smurf => (
        <div className="display-smurf" key={smurf.id}>
          <div className="info"> Smurf: {smurf.name} </div>
          <div className="info">Age: {smurf.age}</div>
          <div className="info">Height {smurf.height}</div>
        </div>
      ))}
    </div>
  );
};
// HOC returning copy of SmurForm with extended Formik logic 
const FormikSmurfForm = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || "",
      age: values.age|| "",
      height: values.height|| "",
    };
  },

  // Yup form validation 
  validationSchema: Yup.object().shape({
    // take every value you want to validate, and give each value rules
    name: Yup.string().required(),
    age: Yup.string().required(),
    height: Yup.string().required(),
    // these give you the error props you need to apply under the each <Field> component in userForm to render
  }),

  // get setStatus
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("http://localhost:3333/smurfs", values)
      .then(response => {
        console.log(response);
        // call setStatus and pass in object you want to add to state
        setStatus(response.data);
      })
      .catch(error => console.log(error.response));
      resetForm();
  }
})(SmurfForm); // currying functions in Javascript

export default FormikSmurfForm;