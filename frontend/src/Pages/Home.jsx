import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
  return (
    <>
      <Container>
        <Row className='my-3'>
          <Col>
            <p>hello from home</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
