import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";
import routes from './config/routes';
import {browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById("app")
);