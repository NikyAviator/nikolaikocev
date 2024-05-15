import '../../../scss/styles.scss';
import Search from '../search/Search';
import { useEffect, useState } from 'react';

const Weather = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      console.log('ApiKey: ', apiKey);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=${apiKey}`
      );

      const data = await response.json();
      //console.log(data);
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(search);
  };

  useEffect(() => {
    fetchWeatherData('Stockholm');
  }, []);

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  console.log(weatherData);

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className='city-name'>
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className='date'>
            <span>{getCurrentDate()}</span>
          </div>
          <div>{weatherData?.main?.temp} °C</div>
          <p className='description'>
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : 'No description'}
          </p>
          <div className='weather-info'>
            <div>
              <div>
                <p className='wind'>
                  {weatherData?.wind?.speed} (m/s) windspeed
                </p>
              </div>
              <div>
                <p className='humidity'>
                  {weatherData?.main?.humidity}% humidity
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
