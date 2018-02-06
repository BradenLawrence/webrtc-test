import React, { Component } from 'react'
import { Photobooth }       from './components/Photobooth';
import logo                 from './logo.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Photobooth</h1>
        </header>
        <Photobooth />
      </div>
    )
  }
}

export default App;
