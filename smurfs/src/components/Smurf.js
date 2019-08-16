import React from "react";

const Smurf = props => {
  console.log(props.smurf);
  return (
    <div>
      <h1>Smurf: {props.smurf.name}</h1>
    </div>
  );
};

export default Smurf;
