import '../scss/styles.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

/* 
added target='_blank' to open the link in a new tab, and rel='noopener noreferrer' for security reasons. 
The className='text-white mx-2' is used to make the icons white and add some horizontal margin around them.

*/

const Footer = () => {
  return (
    <footer className='bg-dark text-white'>
      <div className='container py-1 d-flex justify-content-center'>
        <div>
          <a
            href='https://github.com/NikyAviator'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white mx-2'
          >
            <FaGithub size='1em' />
          </a>
          <a
            href='https://www.linkedin.com/in/nikolai-kocev-33799167'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white mx-2'
          >
            <FaLinkedin size='1em' />
          </a>
        </div>
        <span className='mx-2'>V1.1.2 Last updated: 2024-09-24</span>
      </div>
    </footer>
  );
};

export default Footer;
