import {
    ADDING_SMURFS_START,
    ADDING_SMURFS_SUCCESS,
    ADDING_SMURFS_FAILURE,
  } from "../actions";

  const initialState = {
    smurfVillage: [],
    isSubmitting: false,
    error: ""
  };


export const SmurfFormReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADDING_SMURFS_START:
          console.log(action)
        return {
          ...state,
          isSubmitting: true,
          error: ""
        };
      case ADDING_SMURFS_SUCCESS:
        return {
          ...state,
          isSubmitting: false,
          error: "",
          smurfVillage: action.payload
        };
      case ADDING_SMURFS_FAILURE:
        return {
          ...state,
          isSubmitting: false,
          error: action.payload 
        };
  
      default:
        return state;
    }
  };
  