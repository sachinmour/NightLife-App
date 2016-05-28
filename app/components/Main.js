import React from "react";
import axios from 'axios';
import Home from "./Home";
import SearchYelp from "./SearchYelp.js";

class Main extends React.Component{
  
  constructor(props, context){
    super(props, context);
  }

  render() {
    return (
      <div id="content">
        <Home />
        <SearchYelp history={this.props.history} />
      </div>
    );
  }
  
};

export default Main;