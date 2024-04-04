import '../../../scss/styles.scss';
import Search from '../search/Search';
import { useState } from 'react';

const Weather = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?q=${param}&appid=41b82e581ef439fb38d742c1b757a8ea`
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(search);
  };

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
