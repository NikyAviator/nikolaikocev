import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TicTacToe from '../Components/tic-tac-toe/TicTacToe';

const TTTPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>test</h1>
          <TicTacToe />
        </Col>
      </Row>
    </Container>
  );
};

export default TTTPage;
