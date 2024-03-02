import '../../scss/styles.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// we take the url as a prop (from parent component) and fetch the data from the url
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(`Error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop; // for cross-browser compatibility. document.documentElement.scrollTop is for IE

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage(Math.round((howMuchScrolled / height) * 100));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', () => {}); // This is a cleanup function, which runs when the component is unmounted
    };
  }, [scrollPercentage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg) {
    return <div>Error occured: {errorMsg}</div>;
  }

  return (
    <>
      <div className='top-container'>
        <h1>Custom Scroll Indicator</h1>
        <div className='scroll-indicator'>
          <div
            className='current-progress'
            style={{ width: `${scrollPercentage}` }}
          ></div>
        </div>
      </div>
      <div className='data-container'>
        {data && data.length > 0
          ? data.map((dataItem, index) => (
              <div key={index} className='product'>
                <h2>{dataItem.title}</h2>
                <p>{dataItem.description}</p>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

ScrollIndicator.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ScrollIndicator;
3;
