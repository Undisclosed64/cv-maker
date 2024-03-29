import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import { Home } from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Home />
        <UserForm />
      </div>
    );
  }
}

export default App;
