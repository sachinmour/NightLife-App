import React from "react";
import ReactDOM from "react-dom";
import {hashHistory, Router, Route, Link, IndexRoute} from "react-router";
import routes from '../client_routes/routes';
require("../../public/index.scss");

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>, document.getElementById('app')
);