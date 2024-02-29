import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImageSlider from '../Components/image-slider/ImageSlider';

const Images = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>These are some image sliders. Fetched from an api.</p>
          <ImageSlider
            url='https://picsum.photos/v2/list'
            limit={'10'}
            page={'1'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Images;
