import '../scss/styles.scss';
import { Row, Col, Container } from 'react-bootstrap';
import TicTacToe from '../Components/tic-tac-toe/TicTacToe';

const TTTPage = () => {
  return (
    <Container>
      <h1>Play Tic Tac Toe, TTTPage</h1>
      <TicTacToe />
    </Container>
  );
};

export default TTTPage;
