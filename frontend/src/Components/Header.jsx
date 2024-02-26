import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>NikyAviator (Nikolai Kocev)</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/randomcolor'>Random Color</Nav.Link>
            {/* <Nav.Link href='/imageslider'>Image Slider</Nav.Link> */}
            {/*<Nav.Link href='/contactme'>Contact me</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
