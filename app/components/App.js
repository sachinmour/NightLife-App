import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";
import routes from '../routes/routes';
import {hashHistory} from 'react-router';
require("../../public/index.scss");

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>, document.getElementById('app')
);