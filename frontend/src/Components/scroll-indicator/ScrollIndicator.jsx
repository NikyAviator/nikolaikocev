import '../../scss/styles.scss';
import { useEffect, useState } from 'react';

// we take the url as a prop (from parent component) and fetch the data from the url
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      setErrorMsg(`Error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return <div>ScrollIndicator</div>;
};

export default ScrollIndicator;
3;
