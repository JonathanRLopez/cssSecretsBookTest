import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleOne from './components/exampleOne/'
import ExampleTwo from './components/exampleTwo/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Testing Css Secrets book</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="components">
          <ExampleOne />
          <ExampleTwo />
        </div>
      </div>
    );
  }
}

export default App;
