import axios from "axios"

// FETCHING SMURFS 
export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

// ADDING SMURFS 
export const ADDING_SMURFS_START = "ADDING_SMURFS_START";
export const ADDING_SMURFS_SUCCESS = "ADDING_SMURFS_SUCCESS";
export const ADDING_SMURFS_FAILURE = "ADDING_SMURFS_FAILURE";

// FETCHING SMURFS 
export const getData = () => {
    return(dispatch) => {
dispatch( { type: FETCHING_SMURFS_START})
axios 
    .get("http://localhost:3333/smurfs")
    .then(response => {
    // console.log("success", response.data
    dispatch({type: FETCHING_SMURFS_SUCCESS, payload: response.data })
    })
    .catch(error => {
        // console.log("error", error))
    dispatch({type: FETCHING_SMURFS_FAILURE, payload: error.response })
    });
    };
};
//response.data.name
//response.data.age
//response.data.height
//response.data.id 

// ADDING SMURFS 
export const postData = values => {
    return(dispatch) => {
dispatch( { type: ADDING_SMURFS_START})
axios 
    .post("http://localhost:3333/smurfs", values)
    .then(response => {
    console.log("success", response.data)
    dispatch({type: ADDING_SMURFS_SUCCESS, payload: response })
    })
    .catch(error => {
        console.log("error", error)
    dispatch({type: ADDING_SMURFS_FAILURE, payload: error })
    });
    };
};