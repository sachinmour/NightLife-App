import React from "react";
import SearchYelp from "../SearchYelp.js";

const Main = ({history, children}) => {
  return (
      <div id="content">
        {children}
        <SearchYelp history={history} />
      </div>
    );
};

export default Main;