import React, { Component } from 'react';
import './App.css';
import Validation from "./ValidationC/Validation"
import Char from "./Char/Char"

class App extends Component {

  state = {
    inputText: "hola",
    showText: false
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
      inputText: updated
    })
  }

  changeColor = () => {
    this.setState({
      showText : !this.state.showText
    })
  }

  render() {
    let customisedStyle = {
      border: '2px solid red',
    }

    if (this.state.showText) {
      customisedStyle.border = '2px solid green'
    }


    return (
      <div className="App">
        <h1> List Conditionals</h1>
        <input type="text" onChange={this.inputHandler.bind(this)} value={this.state.inputText} />
        <p> String length: {this.state.inputText.length} </p>

        <Validation inputString={this.state.inputText.length} />

        {this.state.inputText.split("").map((letter, index) => {
          return <Char inputString={letter} key={index} delete={this.deleteItem.bind(this, index)} />
        })}


        <p style={customisedStyle}> Some text here </p>
        <button onClick={this.changeColor.bind(this)}> Change paragraph color</button>
      </div>
    );
  }
}

export default App;
