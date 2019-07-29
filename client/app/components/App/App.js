import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NotFound from "../App/NotFound";
import Home from "../Home/Home";
import HelloWorld from "../HelloWorld/HelloWorld";
import ComposePoem from "../ComposePoem/ComposePoem";
import Login from "../Login/Login";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/helloworld" component={HelloWorld} />
              <Route path="/composePoem" component={ComposePoem} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
