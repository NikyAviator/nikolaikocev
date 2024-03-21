/* eslint-disable react/prop-types */
import '../../scss/styles.scss';
import Button from 'react-bootstrap/Button';

// Structure of the game board:
// 0 1 2
// 3 4 5
// 6 7 8
const Square = ({ value }) => {
  return (
    <Button variant='light' className='square'>
      {value}
    </Button>
  );
};

const TicTacToe = () => {
  return (
    <div className='tic-tac-toe-container'>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default TicTacToe;
