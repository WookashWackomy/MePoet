import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App/App";
import NotFound from "./components/App/NotFound";

import Home from "./components/Home/Home";

import HelloWorld from "./components/HelloWorld/HelloWorld";

import "./styles/styles.scss";
import ComposePoem from "./components/ComposePoem/ComposePoem";
import Login from "./components/Login/Login";
//import 'typeface-roboto';

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/helloworld" component={HelloWorld} />
        <Route path="/composePoem" component={ComposePoem} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);
