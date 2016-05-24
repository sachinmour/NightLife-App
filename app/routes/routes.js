import React from "react";
import Main from "../components/Main";
import Home from "../components/Home";
import Location from "../components/Location";

import {Route, IndexRoute} from 'react-router';

export default (
  <Route path='/' component={Main}>
    <Route path="place/:place" component={Location} />
  </Route>
);