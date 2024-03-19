import '../../scss/styles.scss';

const User = ({ user }) => {
  const {
    login,
    name,
    location,
    avatar_url,
    bio,
    blog,
    email,
    followers,
    following,
    public_repos,
    url,
  } = user;

  return (
    <div className='user'>
      <div className='user-avatar'>
        <img src={avatar_url} className='user-avatar-img' alt='User' />
      </div>
      <div className='user-info'>
        <h2>{name}</h2>
        <p>{bio}</p>
        <div className='user-details'>
          <p>Location: {location}</p>
          <p>Blog: {blog}</p>
          <p>Email: {email}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Public Repos: {public_repos}</p>
          <p>Profile: {`https://github.com/${login}`}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
