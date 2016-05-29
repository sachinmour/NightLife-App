import React from "react";
import axios from 'axios';
import Location from './Location';

class SearchYelp extends React.Component{
  
  constructor(props, context){
    super(props);
    // context.router;
    this.state = {
      user: {},
      location: "",
      bars: []
    };
  }
  
  handleChange(e) {
    this.setState({
      location: e.target.value
    });
  }
  
  componentWillMount() {
    var _this = this;
    axios.get('/getUser')
    .then(function (response) {
      if (!response.data.redirect) {
        _this.setState({user: response.data, location: response.data.location});
        if (_this.state.location.length > 0) {
          _this.handleSubmit();
        }
      }
    })
    .catch(function (response) {
      console.log(response);
    });
  }
  
  handleSubmit(e) {
    if (e) e.preventDefault();
    var _this = this;
    var place = this.state.location;
    axios.post('/yelpsearch', {
      place: place
    })
    .then(function (response) {
      _this.setState({
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
        {this.props.location}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div id="input_place">
            <input type="text" className="design" value={this.state.location} onChange={(e) => this.handleChange(e)}/>
          </div>
          <div id="place_search">
            <button type='submit' className="design">Go</button>
          </div>
        </form>
      </div>
      <Location bars={this.state.bars} user={this.state.user} />
      </div>
    );
  }
}

export default SearchYelp;