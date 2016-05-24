import React from "react";
import Router from 'react-router';
import path from 'path';
import axios from 'axios';

class SearchYelp extends React.Component{
  
  constructor(props, context){
    super(props);
    context.router
  }
  
  getRef(ref) {
    this.placeRef = ref;
  }
  
  handleSubmit(e) {
    e.preventDefault();
    var place = this.placeRef.value;
    this.placeRef.value = '';
    this.context.router.push('/place/'+place);
    axios.post('/yelpsearch', {
      place: place
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
  }
  
  render() {
    return (
      <div id="search">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div id="input_place">
            <input type="text" className="design" ref={(ref) => this.getRef(ref)} />
          </div>
          <div id="place_search">
            <button type='submit' className="design">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

SearchYelp.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default SearchYelp;