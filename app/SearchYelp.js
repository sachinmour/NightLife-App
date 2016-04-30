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
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className='form=group col-sm-5'>
            <button type='submit' className='btn btn-block btn-primary'>Search</button>
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