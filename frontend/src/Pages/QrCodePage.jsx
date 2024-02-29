import '../scss/styles.scss';
import Container from 'react-bootstrap/esm/Container';
import QrCode from '../Components/qr-code-generator/QrCode';

const LoadData = () => {
  return (
    <>
      <Container>
        <h1>Welcome to Generate Qr Code!</h1>
        <QrCode />
      </Container>
    </>
  );
};

export default LoadData;
