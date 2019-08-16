import { combineReducers } from "redux";
import { reducer } from "./SmurfReducer";
import { SmurfFormReducer } from "./SmurfFormReducer";

export default combineReducers({
  reducer,
  SmurfFormReducer
});
