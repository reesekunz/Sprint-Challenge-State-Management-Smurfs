import React from "react";
import { connect } from "react-redux";


const GetSmurfs = props => {
return (
    <div>
<h1>Welcome, check out our smurfs, yo</h1>
<button>Get Smurfs</button>



    </div>
    )
}

const mapStateToProps = state => {
    return {
        test: state.test
    };
;}

export default connect(mapStateToProps, {} )
(GetSmurfs);