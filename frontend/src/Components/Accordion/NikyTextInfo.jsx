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
            Hey there! I'm Nikolai Kocev, once a flight instructor, now a junior
            full-stack developer diving into JavaScript and Java. My days up in
            the air taught me a ton about precision and quick thinking—skills
            that come in super handy in the tech world. Transitioning from
            teaching pilots to coding might seem like a big leap, but it's all
            about tackling challenges head-on, whether they're in the sky or on
            the screen.
          </p>
          <p>
            My journey into tech kicked off when a friend reignited my interest
            in Linux. They suggested that if I wanted to shift gears from being
            a flight instructor to becoming a programmer, getting comfortable
            with Linux was crucial. I began by tackling the installation of Arch
            Linux—a challenge that consumed an entire day but ultimately was a
            success. That day marked my transition; I switched my primary
            workstation from Windows to Linux, although I still boot up Windows
            for some gaming downtime.
          </p>
          <p>
            This website serves a dual purpose: it's a learning tool and a
            portfolio where I can demonstrate my growing skills in JavaScript,
            React, Java, and other technologies. Currently, the site utilizes
            React for the front end and is hosted on Cloudflare, thanks to
            guidance and support from a good friend who helped me set it up.
            This was another valuable learning opportunity for me. As I continue
            to explore and learn, the website will evolve, reflecting new skills
            and experiments with different technologies. I'm considering
            expanding the site to include a Java backend, potentially adding
            features like a blog or login system to practice integrating both
            front-end and back-end development.
          </p>
          <p>
            I am always open to making new connections and discussing anything
            related to technology or potential collaborations. Feel free to
            reach out to me through the contact information available on this
            site for any tech or work-related inquiries.
          </p>

          <p>Kind regards, Nikolai Kocev</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NikyTextInfo;
