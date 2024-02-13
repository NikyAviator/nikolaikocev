import '../scss/main.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from '../Components/Accordion/Accordion';

const Home = () => {
  return (
    <>
      <Container>
        {/* <Row className='my-3'>
          <Col>
            <h1>Hello from Home.jsx</h1>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <Accordion />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
