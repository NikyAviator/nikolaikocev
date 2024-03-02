import '../scss/styles.scss';
import Container from 'react-bootstrap/esm/Container';
import ScrollIndicator from '../Components/scroll-indicator/ScrollIndicator';

const ScrollIndicatorPage = () => {
  return (
    <>
      <Container>
        <h1>Welcome to Scroll Indicator! Under progress!</h1>
        <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
      </Container>
    </>
  );
};

export default ScrollIndicatorPage;
