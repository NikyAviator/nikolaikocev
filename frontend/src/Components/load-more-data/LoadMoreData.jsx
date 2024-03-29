import '../../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // för att hålla koll hur många gånger användaren har klickat på knappen "load more"
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  // The data for this component is fetched from the dummyjson.com
  // https://dummyjson.com/docs/products - I worked with Limit and skip products params.
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const reponse = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await reponse.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Data loading...</div>;
  }

  return (
    <div className='load-more-container'>
      <div className='product-container'>
        {products && products.length
          ? products.map((item) => (
              <div className='product' key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Data
        </button>
        {
          // Om disableButton är true, visa texten "No more data to load"
          disableButton ? <p>No more data to load...</p> : null
        }
      </div>
    </div>
  );
};

export default LoadMoreData;
