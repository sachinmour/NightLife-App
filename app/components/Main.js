import React from "react";
import Home from "./Home";
import SearchYelp from "./SearchYelp";
import Footer from "./Footer";

class Main extends React.Component{
  
  constructor(props, context){
    super(props, context);
  }

  render() {
    return (
      <div id="content">
        <Home />
        <SearchYelp history={this.props.history} />
        <Footer />
      </div>
    );
  }
  
}

export default Main;