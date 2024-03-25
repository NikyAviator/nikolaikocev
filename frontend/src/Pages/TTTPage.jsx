import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TicTacToe from '../Components/tic-tac-toe/TicTacToe';
import FeatureFlags from '../Components/feature-flag/FeatureFlags';

const TTTPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello and welcome to: Tic Tac Toe (luffarschack)</h1>
          <TicTacToe />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <FeatureFlags />
        </Col>
      </Row>
    </Container>
  );
};

export default TTTPage;
