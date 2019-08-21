import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'
import Smurf from "./Smurf";

import { getData } from "../actions";

const GetSmurfs = props => {
  return (
    <div>
      <button onClick={props.getData}> 
      {props.isLoading ?  <Loader
         type="Puff"
         color="#00BFFF"
         height="100"
         width="100"
      /> : "Get Smurfs"}</button>

    {props.getsmurfsdata &&
        props.getsmurfsdata.map(smurf => (
          <Smurf key={smurf.name} smurf={smurf} />
        ))}
    </div>
  );
};


const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    getsmurfsdata: state.getsmurfsdata 
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(GetSmurfs);
