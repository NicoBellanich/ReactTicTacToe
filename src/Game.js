import React from 'react';

/* ESTO TE LO HACE BORRAR EN "Lifting State Up"
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "---- ",
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {/*si queremos el que viene por el renderSquare this.props.value
        pero aca usa el state que es el que esta en this.state en constructor *//*}
        {this.state.value}
      </button>
    );
  }
}
*/

class Square extends React.Component{
  render(){
    return(
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  constructor (props){
    super(props); 
    this.state ={
      squares : Array(9).fill("---"),
    };
  }
  
  
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;