import '../scss/styles.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LoadMoreData from '../Components/load-more-data/LoadMoreData';

const LoadData = () => {
  return (
    <>
      <h1>Hello and Welcome to: Load More Data!</h1>
      <LoadMoreData />
    </>
  );
};

export default LoadData;
