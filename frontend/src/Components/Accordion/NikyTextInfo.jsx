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
        <Card.Title>About Me</Card.Title>
        <Card.Text className='sixtyfour-regular'>
          <p>
            I'm Nikolai Kocev, a junior full-stack developer specializing in
            JavaScript and Java, with a background as a flight instructor. This
            experience honed my attention to detail and adaptability, essential
            in my web development career.
          </p>
          <p>
            I've explored Linux extensively and utilize my problem-solving
            skills honed in aviation to quickly adapt to new technologies in web
            development. My website showcases my journey and skills, featuring
            dynamic projects in both frontend and backend development.
          </p>
          <p>
            The frontend of my website uses React and JavaScript, optimized for
            performance and design with Vite and Bootstrap 5, hosted on
            Cloudflare. My README.md offers a comprehensive guide for
            developers, reflecting my commitment to sharing knowledge and
            enhancing web solutions.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NikyTextInfo;
