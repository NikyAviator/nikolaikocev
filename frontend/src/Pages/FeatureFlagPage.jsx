import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeatureFlagGlobalState from '../Components/feature-flag/context/FeatureFlagContext';
import FeatureFlags from '../Components/feature-flag/FeatureFlags';

const FeatureFlagPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <FeatureFlagGlobalState>
            <FeatureFlags />
          </FeatureFlagGlobalState>
        </Col>
      </Row>
    </Container>
  );
};

export default FeatureFlagPage;
