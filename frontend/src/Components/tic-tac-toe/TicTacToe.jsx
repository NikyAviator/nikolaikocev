/* eslint-disable react/prop-types */
import '../../scss/styles.scss';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

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
  // skrevs på slutet
  const [status, setStatus] = useState('');

  const calculateWinner = (squares) => {
    // 8 total winning patterns (see structure of the game board above)
    const winningPatterns = [
      [0, 1, 2], // Horizontal
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Vertical
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonal
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (getCurrentSquare) => {
    let cpySquares = [...squares];
    if (calculateWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    // cpySquares för att inte mutera orginalet, X eller O beroende på xIsNext.
    cpySquares[getCurrentSquare] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setSquares(cpySquares);
  };

  // Restart the game. skrevs på slutet
  const handleRestart = () => {
    setXIsNext(true);
    setSquares(Array(9).fill(''));
  };

  console.log(squares);

  useEffect(() => {
    if (!calculateWinner(squares) && squares.every((square) => square !== '')) {
      setStatus('The game is a draw!');
    } else if (calculateWinner(squares)) {
      setStatus(
        `Winner is: ${calculateWinner(squares)}. Please restart the game.`
      );
    } else {
      setStatus(`Next player is: ${xIsNext ? 'X' : 'O'}`);
    }
  }, [squares, xIsNext]);

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
      <div className='status'>
        <h1>{status}</h1>
        <Button onClick={handleRestart}>Restart </Button>
      </div>
    </div>
  );
};

export default TicTacToe;
