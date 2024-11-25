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
        <Card.Title>Hello!</Card.Title>
        <Card.Text className='sixtyfour-regular'>
          <p>
            I'm Nikolai Kocev, a pilot and flight instructor from Sweden who's
            taken a dive into the world of coding. I’ve always loved flying—it’s
            been a huge part of my life—but I wanted to try something new and
            challenge myself in a completely different way.
          </p>
          <p>
            A good friend of mine, who’s a programmer, nudged me toward the
            world of IT. They said, "If you want to get into programming, start
            by understanding GNU/Linux." So, I jumped right in with Arch Linux.
            It wasn’t easy—setting up a stable system took hours of tinkering
            and trial-and-error. But once it was up and running, I was hooked. I
            loved the freedom to customize, experiment, and learn at every turn.
            That one decision completely changed my perspective and opened the
            door to a new passion.
          </p>
          <p>
            To turn this newfound interest into a career, I applied for a
            two-year vocational programming course at Teknikhögskolan in Lund,
            Sweden. It’s been an incredible journey so far, diving deep into
            programming languages, frameworks, and building projects.
          </p>
          <p>
            My most known programming language is JavaScript / NodeJs, and I
            also have experience with React. Right now, I am building a
            full-stack application called AeroQuiz, a quiz program focused on
            aviation—a field I deeply love. For this project, I am using NodeJs,
            React, Express, and MongoDB. The application will be hosted on GCP,
            using Docker. It will feature topics like Meteorology, General
            Navigation, Performance, and more.
          </p>

          <p>
            I am a junior programmer open to work and collaborations. This
            website serves as both a CV and a contact point, but it's also my
            playground for practicing and exploring new things in React and
            other technologies.
          </p>

          <hr></hr>
          <p>Kind regards,</p>
          <p>Nikolai</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NikyTextInfo;
