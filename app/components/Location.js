import React from 'react';
import Bar from './Bar';

class Location extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="searchresults">
        {
          this.props.bars.map(function(bar, i) {
            return (
              <Bar key={i} bar={bar}/>
            );
          })
        }
      </div>
    );
  }
  
}

export default Location;