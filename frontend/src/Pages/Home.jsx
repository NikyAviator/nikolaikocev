import '../scss/styles.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NikyInfo from '../Components/NikyInfo';
import NikyTextInfo from '../Components/Accordion/NikyTextInfo';
import DownloadCVButton from '../Components/DownloadCVButton';
import Accordion from '../Components/Accordion/Accordion';

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <NikyInfo />
          </Col>
          <Col md={8} className='my-3'>
            <NikyTextInfo />
            <DownloadCVButton />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='my-3'>
            <h1 className='d-flex justify-content-center'>
              My Work Experiences:
            </h1>
            <Accordion />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
