import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      color:"#6610f2",
      fontSize :15
    }
    this.onSetColor =this.onSetColor.bind(this);
  }
  onSetColor(params){
    this.setState({
      color :params
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <ColorPicker color = {this.state.color} onRecieveColor ={ this.onSetColor }/>
          <div className="col-md-6 col-sm-12 mb-4">
            <SizeSetting />
            <Reset />
          </div>
        </div>
        <Result color={this.state.color}s/>
      </div >
    );
  }
}

export default App;
