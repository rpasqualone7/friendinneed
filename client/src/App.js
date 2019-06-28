import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThreadMain from "./pages/ThreadMain/threadMain";
import ThreadDisplay from "./pages/ThreadDisplay/threadDisplay";
import Nav from "./components/Nav/nav";
import signIn from "./components/LoginPage/signIn";
import signUp from "./components/LoginPage/signUp";
import HomepageMain from "./components/HompageMain";



class App extends Component {

  render() {
    return (
    <Router>
      <div>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={Books} /> */}
        <Route exact path="/" component={HomepageMain} />
        <Route exact path="/forum" component={ThreadMain} />
        <Route exact path="/thread" component={ThreadDisplay} />
        <Route exact path='/signIn' component={signIn} />
        <Route exact path='/signUp' component={signUp} />
        <Route exact path="/thread/:id" component={ThreadDisplay} />
      </Switch>
    </div>
  </Router>   

    );
  }
};



export default  App;

