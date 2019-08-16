import React from "react";

const Smurf = props => {
  console.log(props.smurf);
  return (
    <div>
      <h2 className="smurf-name">{props.smurf.name}</h2>
      <h4 className="smurf-age">Age: {props.smurf.age}</h4>
      <h4 className="smurf-height">Height: {props.smurf.height}</h4>
    </div>
  );
};

export default Smurf;

//response.data.name
//response.data.age
//response.data.height
//response.data.id
