import '../../scss/styles.scss';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

const Github = () => {
  const [userName, setUserName] = useState('NikyAviator');
  const handleClick = () => {};

  const fetchGitHubProfile = async () => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchGitHubProfile(userName);
  }, []);

  return (
    <div className='github-profile-container'>
      <div className='input-wrapper'>
        <input
          name='search-by-username'
          type='text'
          placeholder='Enter Github Username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button onClick={handleClick}></Button>
      </div>
    </div>
  );
};

export default Github;
