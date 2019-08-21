import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_FAILURE,
    ADDING_SMURFS_START,
    ADDING_SMURFS_SUCCESS,
    ADDING_SMURFS_FAILURE,
  } from "../actions";

const initialState = {
    getsmurfsdata: [],
    isLoading: false,
    error: ""
  };

  export const SmurfReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURFS_START:
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case FETCHING_SMURFS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: "",
          getsmurfsdata: action.payload
        };
      case FETCHING_SMURFS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
        case ADDING_SMURFS_START:
          console.log(action)
        return {
          ...state,
          isSubmitting: true,
          error: ""
        };
      case ADDING_SMURFS_SUCCESS:
          console.log('payload', action.payload);
        return {
          ...state,
          isSubmitting: false,
          error: "",
          getsmurfsdata: action.payload
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
  