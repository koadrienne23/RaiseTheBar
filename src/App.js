import React, { Component } from 'react';
import * as db from './dataStorage/datastore';
import logo from './logo.svg';
import './App.css';
import DiffRender from './Algorithm/DiffRender.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test1: "test it!"
    }
  }
  render (){
    db.addDog(this.state.test1); // Test for database!

    return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
    );
  }
   
}

export default App;
