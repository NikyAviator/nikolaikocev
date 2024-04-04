import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Weather from '../Components/weather-app/weather/Weather';

const WeatherPage = () => {
  return (
    <Container>
      <h2>Functionality working, needs styling!</h2>
      <Weather />
    </Container>
  );
};

export default WeatherPage;
