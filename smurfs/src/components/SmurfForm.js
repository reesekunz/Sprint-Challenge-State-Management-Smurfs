import React from "react";
import { connect } from 'react-redux';
import { withFormik } from "formik";
import * as Yup from "yup";
import { postData } from '../actions';

 const SmurfForm = (props) => {
const {
  values, touched, errors, isSubmitting, handleChange, handleSubmit, handleReset
} = props
  return (
    <div className="smurf-form">
    <h1>Add Smurf to Village</h1>
    <form onSubmit={handleSubmit}>
       {/* // Name Input  */}
    <label htmlFor="name">Smurf Name</label>
    <input
        id="name"
        placeholder="name"
        type="text"
        value={values.name}
        onChange={handleChange}
       />
  {/* // Age Input  */}
  <label htmlFor="name">Age</label>
    <input
        id="age"
        placeholder="age"
        type="text"
        value={values.age}
        onChange={handleChange}
       />
         {/* // Weight Input  */}
  <label htmlFor="name">Weight</label>
    <input
        id="weight"
        placeholder="weight"
        type="text"
        value={values.weight}
        onChange={handleChange}
       />

        {/* // Reset Button  */}
        <button onClick={handleReset} className="button" type="submit"> Reset</button>
        <button type="submit" onClick={handleSubmit} >
        Submit
      </button>
      </form>
   </div>
  )
  }
const FormikSmurfForm = withFormik({
  mapPropsToValues(values) {
        return {
          name: values.name || "",
          age: values.age|| "",
          height: values.height|| "",
        };
      },

   validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.string().required(),
    height: Yup.string().required(),
  }),

  handleSubmit(values, { props, setSubmitting }) {
    props.dispatch(postData(values));
    setSubmitting(false);
  },


})(SmurfForm);

const mapStateToProps = state => {
  return {
    isSubmitting: state.SmurfFormReducer.isSubmitting,
    smurfVillage: state.SmurfFormReducer.smurfVillage
  };
};

export default connect(
  mapStateToProps,
  { postData }
)(FormikSmurfForm);
