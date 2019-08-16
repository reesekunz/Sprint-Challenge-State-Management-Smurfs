import { combineReducers } from "redux";
import { SmurfReducer } from "./SmurfReducer";
import { SmurfFormReducer } from "./SmurfFormReducer";

export default combineReducers({
  SmurfReducer,
  SmurfFormReducer
});
