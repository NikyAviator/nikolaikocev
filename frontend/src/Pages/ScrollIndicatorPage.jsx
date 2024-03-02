import '../scss/styles.scss';
import Container from 'react-bootstrap/esm/Container';
import ScrollIndicator from '../Components/scroll-indicator/ScrollIndicator';

const ScrollIndicatorPage = () => {
  return (
    <>
      <Container>
        <h1>Welcome to Scroll Indicator!</h1>
        <ScrollIndicator url='https://dummyjson.com/products' />
      </Container>
    </>
  );
};

export default ScrollIndicatorPage;
