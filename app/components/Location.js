import React from 'react';
import ReactDOM from "react-dom";
import {Router} from "react-router";
import routes from '../config/routes';
import {hashHistory} from 'react-router';
import Yelp from "yelp";

const yelp = new Yelp({
});
 
// See http://www.yelp.com/developers/documentation/v2/search_api 

class Location extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     notes: [],
  //     repos: [],
  //     bio: {}
  //   };
  // }
  
  componentDidMount() {
    this.init(this.props.params.place);
  }
  
  // componentWillReceiveProps(nextProps) {
  //   base.removeBinding(this.ref);
  //   this.init(nextProps.params.username);
  // }
  
  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }
  
  init(place) {
    
  yelp.search({ term: 'food', location: 'Montreal' })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });
    
  }
  
  // handleAddNote(newNote) {
  //   // update firebase, with the newNote
  //   base.post(this.props.params.username, {
  //     data: this.state.notes.concat([newNote])
  //   });
  // }
  
  render() {
    return (
      <div className="row">
        
      </div>
    );
  }
  
}

export default Location;