import '../../scss/styles.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';

const RandomColor = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button type='button' class='btn btn-secondary'>
              Random Color
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RandomColor;
