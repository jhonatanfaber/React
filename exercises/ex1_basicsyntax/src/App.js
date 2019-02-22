import React, { Component } from 'react';
import Person from './Person/person';
import './App.css';

class App extends Component {
  state = {
    people: [
      { name: "Max", age: "22", id: 1 },
      { name: "Jhoni", age: "23", id: 2 }
    ],
    showBox: false,
    buttonText: "Show"
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
      showBox: !this.state.showBox,
      buttonText: this.state.showBox ? "Show" : "Hide"
    })
  }

  deleteItem = (index) => {
    let people = [...this.state.people]
    people.splice(index, 1)
    this.setState({ people: people })
  }

  render() {
    const style = {
      border: "1px solid blue",
      marginBottom: '10px',
    }

    let people = null

    if (this.state.showBox) {
      people = (
        <div>
          <button style={style} onClick={this.switchHandler}> Switch name</button>
          {this.state.people.map((person, index) => {
            return <Person name={person.name} age={person.age} key={person.id} delete={this.deleteItem.bind(this, index)}> </Person>
          })}
        </div>
      )
    }



    return (
      <div className="App">
        <h1> Hi</h1>
        <button onClick={this.toggleHandler}> {this.state.buttonText}</button>
        {people}
      </div>
    );
  }
}

export default App;
