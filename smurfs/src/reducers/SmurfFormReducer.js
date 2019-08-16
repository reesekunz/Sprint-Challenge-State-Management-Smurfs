import {
    ADDING_SMURFS_START,
    ADDING_SMURFS_SUCCESS,
    ADDING_SMURFS_FALIURE,
  } from "../actions";

  const initialState = {
    smurfVillage: [],
    error: ""
  };


export const SmurfFormReducer = (state = initialState, action) => {
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
  