import '../scss/styles.scss';
import { Container } from 'react-bootstrap';
import TabTest from '../Components/custom-tabs/TabTest';
import ModalTest from '../Components/custom-modal/ModalTest';

const TabsPage = () => {
  return (
    <Container>
      <TabTest />
      <hr />
      <h1>Custom Modal Popup (css needs work):</h1>
      <ModalTest />
    </Container>
  );
};

export default TabsPage;
