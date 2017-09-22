import React, { Component } from 'react';
import './App.css';
import ExampleOne from './components/exampleOne/'
import ExampleTwo from './components/exampleTwo/'
import ExampleTree from './components/exampleTree/'
import ExampleFour from './components/exampleFour/'
import ExampleFive from './components/exampleFive/'
import ExampleSix from './components/exampleSix/'

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
          <ExampleTree/>
          <ExampleFour/>
          <ExampleFive type="horizontal"/>
          <ExampleFive type="vertical"/>
          <ExampleFive type="diagonal"/>
          <ExampleFive type="dinamicDiagonal"/>
          <ExampleSix/>
          <ExampleSix type="gridTwo" />
          <ExampleSix type="gridTree" />
        </div>
      </div>
    );
  }
}

export default App;
