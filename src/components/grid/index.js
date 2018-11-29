import React, { Component } from 'react';
import './index.css';

class Grid extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      board: [[false]]
    }

    // this is bomb
    this.setRandomBoard = this.setRandomBoard.bind(this)
    this.createBoard = this.createBoard.bind(this)
    this.createRow = this.createRow.bind(this)
    this.isBomb = this.isBomb.bind(this)
  }

  componentDidMount() {
    this.setRandomBoard()
  }

  setRandomBoard() {
    this.setState({board: this.createBoard()})
  }

  createBoard() {
    return Array(this.props.height)
      .fill()
      .map(this.createRow)
  }

  createRow() {
    return Array(this.props.width)
      .fill()
      .map(this.isBomb)
  }

  isBomb() {
    return (Math.random() <= Number(this.props.percentage))
  }

  render() {
    let board = this.state.board.map((row) => {
      return row.map((isBomb) => {
        return isBomb
          ? "x"
          : "o"
      }).join('')
    }).join("\n")
    return (
      <div className="Grid">
        <pre className="board">
          {board}
        </pre>
      </div>
    );
  }
}

export default Grid;
