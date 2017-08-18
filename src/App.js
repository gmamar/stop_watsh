import React, { Component } from 'react';
import './App.css';
import Timer from './components/timer';
import Buttons from './components/buttons';
import Lap from './components/lap';
import LapList from './containers/lap_list';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Timer />
          <Lap />
          <LapList />
        </div>
        <div>
          <Buttons />
        </div>
        
      </div>
    );
  }
}

export default App;
