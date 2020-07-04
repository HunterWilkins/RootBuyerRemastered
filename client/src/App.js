import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./style.css";
import Home from "./pages/Home/index.js";
import RootInfo from "./components/RootInfo/index.js";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "*" component = {Home} />
      </Switch>
    </Router>
  );
}

export default App;
