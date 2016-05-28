import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, Router, Route, Link, IndexRoute} from "react-router";
import routes from '../client_routes/routes';
require("../../public/index.scss");

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>, document.getElementById('app')
);