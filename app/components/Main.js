import React from "react";
import axios from 'axios';
import Home from "./Home";
import SearchYelp from "./SearchYelp.js";

class Main extends React.Component{
  
  constructor(props, context){
    super(props);
    // context.router;
    this.state = {
      user: {},
      location: ""
    };
  }
  
  componentDidMount() {
    var _this = this;
    axios.get('/getUser')
    .then(function (response) {
      console.log(response);
      _this.setState({user: response.data, location: response.data.location});
    })
    .catch(function (response) {
      console.log(response);
    });
  }

  render() {
    return (
      <div id="content">
        <Home />
        <SearchYelp history={this.props.history} user={this.state.user} location={this.state.location}/>
      </div>
    );
  }
  
};

export default Main;