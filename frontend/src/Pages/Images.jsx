import '../scss/styles.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImageSlider from '../Components/image-slider/ImageSlider';
import LoadMoreData from '../Components/load-more-data/LoadMoreData';

const Images = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>These are some image sliders. Fetched from an api.</p>
          {/* <ImageSlider
            url='https://picsum.photos/v2/list'
            limit={'10'}
            page={'1'}
          /> */}
          <LoadMoreData />
        </Col>
      </Row>
    </Container>
  );
};

export default Images;
