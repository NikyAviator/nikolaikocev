import '../../scss/styles.scss';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import User from './User';

const Github = () => {
  const [userName, setUserName] = useState('NikyAviator');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    fetchGitHubProfile();
  };

  const fetchGitHubProfile = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    console.log(data);

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('');
    }
  };

  useEffect(() => {
    fetchGitHubProfile();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='github-profile-container'>
      <div className='input-wrapper'>
        <input
          name='search-by-username'
          type='text'
          placeholder='Enter Github user name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button onClick={handleClick}>Search!</Button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default Github;
