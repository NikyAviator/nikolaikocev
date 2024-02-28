import '../scss/styles.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LoadMoreData from '../Components/load-more-data/LoadMoreData';

const LoadData = () => {
  return (
    <>
      <Container>
        <h1>Load More Data - A small React component</h1>
        <p></p>
        <LoadMoreData />
      </Container>
    </>
  );
};

export default LoadData;
