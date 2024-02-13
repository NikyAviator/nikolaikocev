import '../scss/styles.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import nikyPic from '/pictures/niky.png';

const NikyInfo = () => {
  return (
    <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={nikyPic} />
      <Card.Body>
        <Card.Title>Programmer and Pilot</Card.Title>
        <Card.Text>
          <p>
            A full-stack developer with a passion and background in aviation. I
            have a strong passion for creating and developing applications, and
            I am always looking for new challenges and opportunities.
          </p>
        </Card.Text>
        <Button
          variant='dark'
          href='https://github.com/NikyAviator'
          target='_blank'
        >
          <FontAwesomeIcon icon={faGithub} /> Visit GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NikyInfo;
