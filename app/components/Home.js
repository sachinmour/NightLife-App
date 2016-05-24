import React from "react";
import { Component } from "react";

class Home extends Component {
  render() {
    return (
        <div id="top_header">
          <div id="tag_line">Discover the nightlife</div>
          <div id="icons">
            <i className="fa fa-glass" aria-hidden="true"></i>
            <i className="fa fa-beer" aria-hidden="true"></i>
            <i className="fa fa-cutlery" aria-hidden="true"></i>
          </div>
        </div>
      );
  }
};

export default Home;