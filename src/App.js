import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      {id: '1', name: 'Max', age: '28'},
      {id: '2', name: 'Manu', age: '29'},
      {id: '3', name: 'Stephanie', age: '27'}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
    
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    } 

    if (this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold']
    }


    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
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
