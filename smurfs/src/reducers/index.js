import { FETCHING_SMURFS_START } from "../actions";


const initialState = {
  getsmurfsdata: [],
  isLoading: false,
  error: "",

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
case FETCHING_SMURFS_START: 
return {
  ... state, 
    isLoading: true,
    error: ""

};


    default:
      return state;
  }
};
