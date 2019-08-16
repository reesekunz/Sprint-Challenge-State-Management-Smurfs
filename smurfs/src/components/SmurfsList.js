import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'

const GetSmurfs = props => {
  return (
    <div>
      <h1>Welcome to our Smurf Village!</h1>
      <button> {props.isLoading ?  <Loader
         type="Puff"
         color="#00BFFF"
         height="100"
         width="100"
      /> : "Get Smurfs"}</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  {}
)(GetSmurfs);
