import React, { Component } from 'react';
import { Video }            from './components/Video'
import logo                 from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    
    const controls = {
      acquireStream(constraints) {
        return navigator.mediaDevices.getUserMedia(constraints)
        .then( stream => { return stream } )
      },
      stop(stream) {
        stream.getTracks()[0].stop()
      }
    }

    const constraints = {
      video: {
        width:  800,
        height: 600
      },
      audio:  false
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web RTC Test</h1>
        </header>
        <Video 
          controls    = { controls }
          constraints = { constraints }
        />
      </div>
    )
  }
}

export default App;
