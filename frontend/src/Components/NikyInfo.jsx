import '../scss/styles.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import nikyPic from '/pictures/niky.png';
import linux from '/pictures/linux.png';
import html from '/pictures/html-5.png';
import css from '/pictures/css-3.png';
import js from '/pictures/js.png';
import java from '/pictures/java.png';
import git from '/pictures/git.png';
import docker from '/pictures/docker.png';
import sql from '/pictures/sql.png';
import computer from '/pictures/computer.png';
import bash from '/pictures/bash.png';
import raspberrypi from '/pictures/raspberry-pi.png';
import openwrt from '/pictures/open-wrt.png';
import vm from '/pictures/vm.png';
import cloud from '/pictures/cloud.png';

const NikyInfo = () => {
  return (
    <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={nikyPic} />
      <Card.Body>
        <Card.Title>Nikolai Kocev</Card.Title>
        <Card.Text>
          <ul>
            <li>
              <img
                src={linux}
                alt='GNU/Linux'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              GNU/Linux
            </li>
            <li>
              <img
                src={html}
                alt='HTML'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              HTML
            </li>
            <li>
              <img
                src={css}
                alt='CSS'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              CSS
            </li>
            <li>
              <img
                src={js}
                alt='JavaScript'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              JavaScript
            </li>
            <li>
              <img
                src={java}
                alt='Java'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              Java
            </li>
            <li>
              <img
                src={sql}
                alt='SQL'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              SQL
            </li>
            <li>
              <img
                src={git}
                alt='Git'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              Git
            </li>
            <li>
              <img
                src={docker}
                alt='Docker'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              Docker
            </li>
          </ul>
          <p>Interests:</p>
          <ul>
            <li>
              <img
                src={bash}
                alt='Bash'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              Bash
            </li>
            <li>
              <img
                src={computer}
                alt='Networks'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              Networks
            </li>
            <li>
              <img
                src={raspberrypi}
                alt='Raspberry Pi'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              Raspberry Pi
            </li>
            <li>
              <img
                src={openwrt}
                alt='Raspberry Pi'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              OpenWrt
            </li>
            <li>
              <img
                src={vm}
                alt='Virtual Machines'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              Virtual Machines
            </li>
            <li>
              <img
                src={cloud}
                alt='Cloud Computing'
                style={{ width: '32px', marginRight: '8px' }}
              />{' '}
              Cloud Computing
            </li>
          </ul>
          <hr />
        </Card.Text>
        <Button
          variant='dark'
          alt='GitHub Link'
          href='https://github.com/NikyAviator'
          target='_blank'
        >
          <FontAwesomeIcon icon={faGithub} /> Visit GitHub
        </Button>
        <Button
          variant='primary'
          alt='LinkedIn Link'
          href='https://www.linkedin.com/in/nikolai-kocev-33799167'
          target='_blank'
        >
          <FontAwesomeIcon icon={faLinkedin} /> Visit LinkedIn
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NikyInfo;
