/* eslint-disable react/prop-types */
import '../../scss/styles.scss';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// The square component is a button that displays the value of the square
const Square = ({ value, onClick }) => {
  return (
    <Button onClick={onClick} variant='light' className='square'>
      {value}
    </Button>
  );
};

// Structure of the game board:
// 0 1 2
// 3 4 5
// 6 7 8
// Main Component in the file. This is the game board.
const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (getCurrentSquare) => {
    let cpySquares = [...squares];
    // cpySquares för att inte mutera orginalet, X eller O beroende på xIsNext.
    cpySquares[getCurrentSquare] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setSquares(cpySquares);
  };

  console.log(squares);

  return (
    <div className='tic-tac-toe-container'>
      <div className='row'>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className='row'>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className='row'>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default TicTacToe;
