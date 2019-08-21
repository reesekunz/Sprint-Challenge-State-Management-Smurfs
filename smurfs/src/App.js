import React, { Component } from "react";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import SmurfsList from "./components/SmurfsList";
import FormikSmurfForm from "./components/SmurfForm";



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to our Redux Smurf Village!</h1>
        <SmurfsList />
        <FormikSmurfForm /> 

      </div>
    );
  }
}

export default App;
