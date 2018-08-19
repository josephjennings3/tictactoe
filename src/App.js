import React, { Component } from 'react';
import './App.css';
import Player from './components/choosePlayer';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board : Array(9).fill(null),
      player: null,
      winner: null,
    }
  }

  checkWinner() {
    let winLines = 
    [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
      ["0", "3", "6"],
    ]

    for (let index = 0; index < winLines.length; index++){
      const [a,b,c] = winLines[index];
      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        alert('YOU WON');
        this.setState({
          winner: this.state.player
        })
      }
    }
  }

  handleClick(index){
    if(this.state.player && !this.state.winner) {
      let newBoard = this.state.board

      if (this.state.board[index] === null){
        newBoard[index] = this.state.player 
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        })
      }
      this.checkWinner() 
    } 
  }

  setPlayer(player){
    this.setState({
      player
    })
  }

  renderBoxes() {
    return this.state.board.map(
      (box, index) => 
      <div className="box" key={index} 
        onClick={()=>this.handleClick(index)}>
        {box} </div>
    )
  }

  render() {
    let status = this.state.player ? 
      <h2>Next Player Is {this.state.player}</h2> : 
      <Player player={(e) => this.setPlayer(e)} />


    return (
      <div className="container">
        <h1>Tic Tac Toe App</h1>
        {status}
        <div className="board">
          {this.renderBoxes()}
        </div>
      </div>
    );
  }
}

export default App;
