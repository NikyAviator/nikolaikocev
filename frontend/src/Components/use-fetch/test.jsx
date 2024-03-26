import useFetch from '.';

export default function UseFetchHookText() {
  // passed url to useFetch hook
  const { data, error, pending } = useFetch(
    'https://dummyjson.com/products',
    {}
  );

  console.log(data, error, pending);

  return (
    <div>
      <h1>Use Fetch Hook:</h1>
      {
        pending ? <h3>Pending, please wait...</h3> : null // if pending is true, show this message
      }
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((product) => (
            <p key={product.key}>{product.title}</p>
          ))
        : null}
    </div>
  );
}
