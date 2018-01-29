import React, { Component } from 'react';
import { Video }            from './components/Video'
import logo                 from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const getWebcam = function(constraints) {
      return navigator.mediaDevices.getUserMedia(constraints)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web RTC Test</h1>
        </header>
        <Video 
          acquireStream = { getWebcam } 
          constraints   = {
            {
              video: {
                width:  800,
                height: 600
              },
              audio:  false
            }
          }
        />
      </div>
    )
  }
}

export default App;
