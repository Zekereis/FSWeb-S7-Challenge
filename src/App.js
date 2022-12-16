import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Form from "./components/Form";





function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pizza" component={Form} />
      </Switch>


    </div>
  );
}

export default App;