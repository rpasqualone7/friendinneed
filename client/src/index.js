import React from "react";
import ReactDOM from "react-dom";
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import 'jquery';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from 'redux';
import rootReducer from "./Store/reducers/rootReducer";
import { Provider } from 'react-redux'
const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
