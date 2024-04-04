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
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=41b82e581ef439fb38d742c1b757a8ea`
      );

      const data = await response.json();
      console.log(data);
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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(weatherData);

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      Weather
    </>
  );
};

export default Weather;
