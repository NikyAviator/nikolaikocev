import '../../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  // The data for this component is fetched from the dummyjson.com
  // https://dummyjson.com/docs/products
  const fetchProducts = async () => {
    try {
      const reponse = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await reponse.json();

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <Container></Container>;
};

export default LoadMoreData;
