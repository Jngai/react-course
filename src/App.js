import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';

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

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let btnClass = [classes.button];

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

      btnClass.push(classes.red);
      



      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

    }

    let assignedclasses = [];
    if (this.state.persons.length <= 2){
      assignedclasses.push(classes.red); // classes = ['red']
    } 

    if (this.state.persons.length <= 1){
      assignedclasses.push(classes.bold); // classes = ['red', 'bold']
    }


    return (
      <div className={classes.App}>
        <h1>Hi I'm a react app</h1>
        <p className={assignedclasses.join(' ')}>This is really working</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
