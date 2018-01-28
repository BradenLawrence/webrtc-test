import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const constraints = {
  video:  {
    width:  800,
    height: 600
  },
  audio:  false
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      videoSource: null
    }
  }

  initStream() {
    navigator.mediaDevices.getUserMedia(constraints)
    .then( stream => this.setState({ videoSource: stream }, () => { this.video.srcObject = this.state.videoSource }) )
  }
  
  stopStream() {
    this.state.videoSource.getTracks()[0].stop()
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web RTC Test</h1>
        </header>
        <video ref={ video => this.video = video } width={ constraints.video.width } height={ constraints.video.height } autoPlay="true" />
        <button onClick={ () => {this.initStream()} }>Start recording</button>
        <button onClick={ () => {this.stopStream()} }>Stop recording</button>
      </div>
    );
  }
}

export default App;
