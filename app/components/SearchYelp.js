import React from "react";
import Router from 'react-router';
import path from 'path';
import axios from 'axios';
import Location from './Location';

class SearchYelp extends React.Component{
  
  constructor(props, context){
    super(props);
    context.router;
    this.state = {
      bars: []
    };
  }
  
  getRef(ref) {
    this.placeRef = ref;
  }
  
  handleSubmit(e) {
    e.preventDefault();
    var place = this.placeRef.value;
    var here = this;
    this.context.router.push('/place/'+place);
    axios.post('/yelpsearch', {
      place: place
    })
    .then(function (response) {
      here.setState({
        bars: response.data.businesses
      });
    })
    .catch(function (response) {
      console.log(response);
    });
  }
  
  render() {
    return (
      <div>
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
      <Location bars={this.state.bars} />
      </div>
    );
  }
}

SearchYelp.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default SearchYelp;