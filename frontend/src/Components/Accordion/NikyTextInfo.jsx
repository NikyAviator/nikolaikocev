import { Card } from 'react-bootstrap';
import '../../scss/styles.scss';

const NikyTextInfo = () => {
  return (
    <Card
      className='bg-dark text-white'
      style={{
        padding: '20px',
        textAlign: 'justify',
        maxWidth: '800px',
        margin: 'auto',
      }}
    >
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          <p>
            My name is Nikolai Kocev, and I am a full-stack developer with a
            particular focus on JavaScript and Java.
          </p>
          <p>
            My professional journey has taken a fascinating turn; I began my
            career as a flight instructor, where I taught the art of navigating
            the skies.
          </p>
          Through this experience, I developed a strong appreciation for
          details, accuracy, and a continuous pursuit of knowledge. These traits
          became foundational and very useful when I decided to transition into
          web development. Throughout my journey in the realm of web
          development, I discovered a deep passion for technology and system
          administration, especially when it comes to Linux. I have spent
          countless hours exploring Linux environments, which has strengthened
          my understanding of how systems operate. This knowledge, combined with
          my focus on JavaScript, has equipped me with the tools I need to build
          robust, efficient, and user-friendly web solutions. My background as
          an instructor has also given me unique insights into web development.
          Just as in aviation, web development requires a perfect balance
          between theory and practice, between the art of coding and the science
          of technology. My passion for technology and JavaScript, combined with
          my aviation experience, allows me to create solutions that are both
          technically advanced and intuitive for users.
          {/* Your story goes here */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NikyTextInfo;
