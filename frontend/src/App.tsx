import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import SecurePage from "./SecurePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/securePage" component={SecurePage} exact />
        </Switch>
      </header>
    </div>
  );
}

export default App;
