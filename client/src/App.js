import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThreadMain from "./pages/ThreadMain/threadMain";
import ThreadDisplay from "./pages/ThreadDisplay/threadDisplay";
import Nav from "./components/Nav/nav";






class App extends Component {

  render() {
    return (
    <Router>
      <div>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={Books} /> */}
        <Route exact path="/forum" component={ThreadMain} />
        <Route exact path="/thread" component={ThreadDisplay} />
      </Switch>
    </div>
  </Router>      
    );
  }
};

export default App;
