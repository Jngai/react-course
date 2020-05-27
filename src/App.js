import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: '28'},
      {name: 'Manu', age: '29'},
      {name: 'Stephanie', age: '27'}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27} 
      ]
    });
  }

  nameChanedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 27} 
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is really working</p>
        <button onClick={()=>this.switchNameHandler('Maximiliam!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChanedHandler}
          click={this.switchNameHandler.bind(this, 'Max')}>My hobbies: racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

// import React, { useState } from 'react';
// import Person from './Person/Person';
// import './App.css';

// const App = props => {

//   const [ personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Max', age: '28'},
//       {name: 'Manu', age: '29'},
//       {name: 'Stephanie', age: '27'}
//     ]
//   });


//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: 'Judy', age: '28'},
//         {name: 'Manu', age: '29'},
//         {name: 'Stephanie', age: '20'} 
//       ]
//     });
//   }

//   const [otherState, setOtherState] = useState('some other other value');

//   console.log(personsState, otherState);

//   return (
//     <div className="App">
//       <h1>Hi I'm a react app</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// }

// export default App;
