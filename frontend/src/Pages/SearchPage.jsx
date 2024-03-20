import '../scss/styles.scss';
import SearchAutocomplete from '../Components/search-autocomplete-api/SearchAutocomplete';
import Container from 'react-bootstrap/Container';

const SearchPage = () => {
  return (
    <>
      <Container>
        <h4>
          This will be a search with auto complete and API implementation.
        </h4>
        <h4>The dummy data is taken from: https://dummyjson.com/users</h4>
        <SearchAutocomplete />
      </Container>
    </>
  );
};

export default SearchPage;
