import React, { Component } from 'react';
import Person from './Person/person';
import './App.css';

class App extends Component {
  state = {
    people: [
      { name: "Max", age: "22" },
      { name: "Jhoni", age: "23" }
    ],
    showBox : false,
    buttonText : "Show"
  }

  switchHandler = () => {
    this.setState({
      people: [
        { name: "Maxiii", age: "226" },
        { name: "Jonathan", age: "235" }
      ]
    })
  }

  toggleHandler = () => {
    this.setState({
      showBox : !this.state.showBox,
      buttonText : this.state.showBox ? "Show" : "Hide"
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      people: [
        { name: "Max" , age: "22" },
        { name: event.target.value, age: "23" }
      ]
    })
  }

  render() {
    const style = {
      border : "1px solid blue",
      marginBottom: '10px',
    }

    return (
      <div className="App">
        <h1> Hi</h1>
        <button  onClick={this.toggleHandler}> {this.state.buttonText}</button>
        { this.state.showBox ?
          <div>
            <button style={style} onClick={this.switchHandler}> Switch name</button>
            <Person  name={this.state.people[0].name} age={this.state.people[0].age}>  My hobbies: swim </Person>
            <Person change={this.nameChangeHandler} name={this.state.people[1].name} age={this.state.people[1].age} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
