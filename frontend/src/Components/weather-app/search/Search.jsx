import '../../../scss/styles.scss';

const Search = ({ search, setSearch }) => {
  return (
    <div className='search-engine'>
      <input
        type='text'
        className='city-search'
        placeholder='Enter city name'
        name='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
