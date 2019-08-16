import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from  "react-redux";

import rootReducer from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));

// export const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById("root"));
