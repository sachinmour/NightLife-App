import React from "react";
import Home from "./Home";
import SearchYelp from "./SearchYelp.js";

const Main = ({history, children}) => {
  return (
      <div id="content">
        <Home />
        <SearchYelp history={history} />
      </div>
    );
};

export default Main;