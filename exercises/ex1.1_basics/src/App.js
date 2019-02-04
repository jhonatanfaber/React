import React, { Component } from 'react';
import UserInput from './User/userInput';
import UserOutput from './User/userOutput';
import './App.css';

class App extends Component {
  state = {
    name : "your_name"
  }

  inputHandler = (event) => {
    this.setState({
      name : event.target.value
    })
    
  }

  render() {
    return (
      <div className="App">
        <UserInput inputField={this.inputHandler} name={this.state.name}/>
        <UserOutput name={this.state.name}/>
      </div>
    );
  }
}

export default App;
