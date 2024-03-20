import '../../scss/styles.scss';
import { useState, useEffect } from 'react';

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      console.log(data);
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='search-autocomplete-container'>
      <input
        name='search-users'
        placeholder='Search users'
        type='text'
        className='search-autocomplete-input'
      />
    </div>
  );
};

export default SearchAutocomplete;
