import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Github from '../Components/github-profile-finder/Github';

const GithubProfilePage = () => {
  return (
    <Container>
      <h1>Github Profile Finder. Search on Github user names!</h1>
      <Github />
    </Container>
  );
};

export default GithubProfilePage;
