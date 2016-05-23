import React from "react";
import Router from 'react-router';

class SearchYelp extends React.Component{
  
  getRef(ref) {
    this.placeRef = ref;
  }
  
  handleSubmit() {
    var place = this.placeRef.value;
    this.placeRef.value = '';
    this.props.history.push("/place/"+place);
  }
  render() {
    return (
      <div id="search">
        <form onSubmit={() => this.handleSubmit()}>
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

SearchYelp.PropTypes = {
  history: React.PropTypes.object.isRequired
};

export default SearchYelp;