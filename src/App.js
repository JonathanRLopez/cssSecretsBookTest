import React, { Component } from 'react';
import './App.css';
import ExampleOne from './components/exampleOne/'
import ExampleTwo from './components/exampleTwo/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Testing Css Secrets book</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="components">
          <ExampleOne />
          <ExampleTwo type="box-shadow"/>
          <ExampleTwo type="outline"/>
        </div>
      </div>
    );
  }
}

export default App;
