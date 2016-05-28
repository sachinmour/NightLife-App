import React from 'react';
import Bar from './Bar';

class Location extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var ids = this.props.user.bar_ids;
    return (
      <div id="searchresults">
        {
          this.props.bars.map(function(bar, i) {
            return (
              <Bar key={bar.id} bar={bar} bar_ids={ids} />
            );
          })
        }
      </div>
    );
  }
  
}

export default Location;