import '../scss/styles.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NikyInfo from '../Components/NikyInfo';
import NikyTextInfo from '../Components/Accordion/NikyTextInfo';
import DownloadCVButton from '../Components/DownloadCVButton';
import Accordion from '../Components/Accordion/Accordion';
import AccordionEdu from '../Components/AccordionEdu/AccordionEdu';
import ImageSlider from '../Components/image-slider/ImageSlider';

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
            {/* <ImageSlider
              url='https://picsum.photos/v2/list'
              limit={'10'}
              page={'1'}
            /> */}
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
