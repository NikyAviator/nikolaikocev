import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NikyInfo from '../Components/NikyInfo';
import NikyTextInfo from '../Components/Accordion/NikyTextInfo';
import DownloadCVButton from '../Components/DownloadCVButton';
import Accordion from '../Components/Accordion/Accordion';
import AccordionEdu from '../Components/AccordionEdu/AccordionEdu';

const Home = () => {
  return (
    <>
      <Container className='mb-5'>
        {' '}
        <Row>
          <Col lg={4} md={12}>
            {' '}
            <NikyInfo />
          </Col>
          <Col className='my-3' lg={8} md={12}>
            {' '}
            <NikyTextInfo />
            <DownloadCVButton />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='my-3'>
            <h1 className='d-flex justify-content-center'>
              My Work Experience:
            </h1>
            <Accordion />
            <hr />
            <h1 className='d-flex justify-content-center'>My Education:</h1>
            <AccordionEdu />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
