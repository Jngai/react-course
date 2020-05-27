import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My hobbies: racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );
  }
}

export default App;
