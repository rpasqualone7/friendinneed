import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThreadMain from "./pages/ThreadMain/threadMain";
import ThreadDisplay from "./pages/ThreadDisplay/threadDisplay";
import Nav from "./components/Nav/nav";
import HomepageMain from "./components/HompageMain";
import GoogleMapReact from 'google-map-react';


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
            </Switch>
    </div>
  </Router>   

    );
  }
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: AIzaSyBYH5z7s4WgypKjymiKtOozindLwDJR_Dw }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default  App;
export default SimpleMap;