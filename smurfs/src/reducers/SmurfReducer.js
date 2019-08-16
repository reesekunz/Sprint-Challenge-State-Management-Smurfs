import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_FAILURE } from "../actions";

const initialState = {
    getsmurfsdata: [],
    isLoading: false,
    error: ""
  };

  export const reducer = (state = initialState, action) => {
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
          error: ""
        };
  
      default:
        return state;
    }
  };
  