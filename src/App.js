import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board : Array(9).fill(null)
    }
  }

  handleClick(e){
    console.log(e.target)
  }

  render() {
    const Box = this.state.board.map(
      (box, index) => 
      <div className="box" 
      key={index} 
      onClick={(e)=>this.handleClick(e)}>
      {box}
      </div>
    )
    return (
      <div className="container">
        <h1>Tic Tac Toe App</h1>
        <div className="board">
          {Box}
        </div>
      </div>
    );
  }
}

export default App;
