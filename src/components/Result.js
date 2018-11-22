import React, { Component } from 'react';

class Result extends Component {
  setColor(){
    return{
      color: this.props.color,
      borderColor: this.props.color
    };
  }
  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-xl-6 col-sm-12">
          <p className="text-white">Color: Red --- Font-size:15px</p>
          <div className="content" style={this.setColor()}>Trần Minh Trí</div>
        </div>
      </div>
    );
  }
}

export default Result;
