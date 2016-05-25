import React from 'react';

class Location extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    var barNodes = this.props.bars.map(function(bar, i) {
      return (
        <div className="result" key={i}>
          <div className="photo"><img src={bar.image_url} alt={bar.id} /></div>
          <div className="info">
            <div className="name">
              <p>{bar.name}</p>
            </div>
            <div className="review">
              <p>{bar.snippet_text}</p>
            </div>
          </div>
          <div className="going">
            <div className="stat"><p><span className="number">5</span>Going</p></div>
            <div className="icon"><i className="fa fa-thumbs-up" aria-hidden="true"></i></div>
          </div>
        </div>
      );
    });
    
    return (
      <div id="searchresults">
        {barNodes}
      </div>
    );
  }
  
}

export default Location;