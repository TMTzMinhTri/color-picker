import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ColorPicker />
          <div className="col-md-6 col-sm-12 mb-4">
            <SizeSetting />
            <Reset />
          </div>
        </div>
        <Result />
      </div >
    );
  }
}

export default App;
