import React, { Component } from 'react';
import './App.css';
import Validation from "./ValidationC/Validation"
import Char from "./Char/Char"

class App extends Component {

  state = {
    inputText: "hola"
  }

  inputHandler = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  deleteItem = (index) => {
    let textCopy = this.state.inputText.split("")
    
    textCopy.splice(index, 1)
    let updated = textCopy.join('')
    this.setState({
      inputText : updated
    })
  }

  render() {
    return (
      <div className="App">
        <h1> List Conditionals</h1>
        <input type="text" onChange={this.inputHandler.bind(this)} value={this.state.inputText} />
        <p> String length: {this.state.inputText.length} </p>

        <Validation inputString={this.state.inputText.length} />

        {this.state.inputText.split("").map((letter, index) => {
          return <Char inputString={letter} key={index} delete={this.deleteItem.bind(this, index)} />
        })}
      </div>
    );
  }
}

export default App;
