import React from "react";

const Main = ({history, children}) => {
  return (
      <div id="content">
        {children}
      </div>
    );
};

export default Main;