import React, { Component } from 'react'
import { Photobooth }       from './components/Photobooth';
import logo                 from './images/logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="App-logo" />
        </header>
        <Photobooth />
      </div>
    )
  }
}

export default App;
