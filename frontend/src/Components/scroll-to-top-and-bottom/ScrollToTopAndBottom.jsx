import '../../scss/styles.scss';
import useFetch from '../use-fetch';

const ScrollToTopAndBottom = () => {
  const { data, error, pending } = useFetch(
    'https://dummyjson.com/products?limit=100',
    {}
  );
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  if (error) {
    return <h3>Error occured: {error}</h3>;
  }

  if (pending) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section.</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: 'none' }}>
        {data && data.products
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <h3> This is the bottom of the page </h3>
    </>
  );
};

export default ScrollToTopAndBottom;
