import React from 'react';
import Yelp from "yelp";
// import callit from "../utils/helpers.js"
import $ from "jquery";
 
// See http://www.yelp.com/developers/documentation/v2/search_api 

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      check: "da"
    };
  }
  
  // componentWillReceiveProps(nextProps) {
  //   base.removeBinding(this.ref);
  //   this.init(nextProps.params.username);
  // }
  
  componentDidmount() {
    this.setState({check: "pa"});
    this.serverRequest = yelp.search({ term: 'food', location: 'Montreal' })
    .then(function (data) {
      this.setState({data: data, check: get_data()});
    }).bind(this);
  }
  
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  
  check() {
    console.log(this.state.check);
  }
  
  init() {
    console.log(this.state.data);
    console.log(this.state.check);
    console.log("");
  }
  
  // handleAddNote(newNote) {
  //   // update firebase, with the newNote
  //   base.post(this.props.params.username, {
  //     data: this.state.notes.concat([newNote])
  //   });
  // }
  
  render() {
    return (
      <div className="row" onClick={this.componentDidmount.bind(this)}>
      <div className="row" onClick={this.init.bind(this)}>
      </div>
      </div>
    );
  }
  
}

export default Location;