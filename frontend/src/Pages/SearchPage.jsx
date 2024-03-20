import '../scss/styles.scss';
import SearchAutocomplete from '../Components/search-autocomplete-api/SearchAutocomplete';

const SearchPage = () => {
  return (
    <>
      <h4>This will be a search with auto complete and API implementation.</h4>
      <h4>The dummy data is taken from: https://dummyjson.com/users</h4>
      <SearchAutocomplete />
    </>
  );
};

export default SearchPage;
