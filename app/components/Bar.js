import React from 'react';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: {count: 0},
      going: false
    };
  }
  
  componentDidMount() {
    var _this = this;
  }
  
  render() {
    
    return (
      <div className="result">
        <div className="photo"><img src={this.props.bar.image_url} alt={this.props.bar.id} /></div>
        <div className="info">
          <div className="name">
            <p>{this.props.bar.name}</p>
          </div>
          <div className="review">
            <p>{this.props.bar.snippet_text}</p>
          </div>
        </div>
        <div className="going">
          <div className="stat"><p><span className="number">{this.state.bar.count}</span>Going</p></div>
          <div className="icon"><i className={"fa fa-thumbs-" + (this.state.going ? "down" : "up") } aria-hidden="true"></i></div>
        </div>
      </div>
    );
  }
  
}

export default Bar;