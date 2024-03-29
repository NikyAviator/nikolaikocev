import { Card } from 'react-bootstrap';
import '../../scss/styles.scss';

const NikyTextInfo = () => {
  return (
    <Card
      className='bg-dark text-white niky-text-info-card'
      style={{
        padding: '20px',
        textAlign: 'justify',
        maxWidth: '800px',
        margin: 'auto',
      }}
    >
      <Card.Body>
        <Card.Title className=''>About Me</Card.Title>
        <Card.Text className='sixtyfour-regular'>
          <p>
            My name is Nikolai Kocev, and I am a junior full-stack developer
            with a particular focus on JavaScript and Java.
          </p>
          <p>
            I began my career as a flight instructor, where I taught the art of
            navigating the skies. Through this experience, I developed a strong
            appreciation for details, accuracy, and a continuous pursuit of
            knowledge. These traits became foundational and very useful when I
            decided to transition into web development.
          </p>
          <p>
            Throughout my journey in the realm of web development, I discovered
            a deep interest for technology, programming, and especially Linux. I
            have spent countless hours exploring Linux environments, which has
            strengthened my understanding of how systems operate.
          </p>
          <p>
            My experience in aviation has also given me a unique perspective on
            problem-solving. In aviation, the ability to think on your feet and
            solve problems quickly is essential. This skill has been invaluable
            in my transition to web development, where I have been able to
            quickly adapt to new technologies and solve complex problems.
          </p>
          <p>
            These experiences, combined with my focus on JavaScript and Java,
            has equipped me with the tools I need to learn build robust,
            efficient, and user-friendly web solutions.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NikyTextInfo;
