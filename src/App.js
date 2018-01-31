import React, { Component } from 'react';
import { VideoContainer }   from './containers/VideoContainer'
import logo                 from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web RTC Test</h1>
        </header>
        <VideoContainer />
      </div>
    )
  }
}

export default App;
