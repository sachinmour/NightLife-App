import React from 'react';

import axios from 'axios';

class Bar extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      count: 0,
      going: false
    };
  }
  
  componentWillMount() {
    var _this = this;
    var going = false;
    if (_this.props.bar_ids && _this.props.bar_ids.indexOf(_this.props.bar.id) != -1) {
      going = true;
    }
    axios.get('barCount/' + _this.props.bar.id)
    .then(function(response) {
      console.log(response.data);
      _this.setState({
        count: response.data.count || 0,
        going: going
      });
    });
    
  }
  
  handleClick() {
    var _this = this;
    if (!_this.state.going) {
      if (_this.props.bar_ids) {
        _this.setState({count: _this.state.count+1, going: true});
        axios.get('/addbar/'+this.props.bar.id)
        .then(function (response) {
          if (!response.data.redirect) {
            _this.setState(Object.assign({}, _this.state, response.data));
          } else {
            window.location = "/auth/twitter";
          }
        })
        .catch(function (response) {
          console.log(response);
        });
      } else {
        window.location = "/auth/twitter";
      }
    } else {
      if (_this.props.bar_ids) {
        _this.setState({count: _this.state.count-1, going: false});
        axios.get('/removebar/'+this.props.bar.id)
        .then(function (response) {
          if (!response.data.redirect) {
            _this.setState(Object.assign({}, _this.state, response.data));
          } else {
            window.location = "/auth/twitter";
          }
        })
        .catch(function (response) {
          console.log(response);
        });
      } else {
        window.location = "/auth/twitter";
      }
    }
  }
  
  render() {
    return (
      <div className="result">
        <div className="photo"><img src={this.props.bar.image_url} alt={this.props.bar.id} /></div>
        <div className="info">
          <div className="name">
            <a href={this.props.bar.url}><p>{this.props.bar.name}</p></a>
          </div>
          <div className="review">
            <p>{this.props.bar.snippet_text}</p>
          </div>
        </div>
        <div className="going" onClick={() => this.handleClick()}>
          <div className="stat"><p><span className="number">{this.state.count}</span>Going</p></div>
          <div className="icon"><i className={"fa fa-thumbs-" + (this.state.going ? "down" : "up") } aria-hidden="true"></i></div>
        </div>
      </div>
    );
  }
  
}

Bar.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Bar;