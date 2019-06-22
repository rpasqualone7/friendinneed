import React from "react";
import ReactDOM from "react-dom";
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import 'jquery';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

