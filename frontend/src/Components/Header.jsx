import '../scss/styles.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>NikyAviator (Nikolai Kocev)</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/'>Home</Nav.Link>

            <NavDropdown title='React Micro Projects' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/randomcolor'>
                Random Color
              </NavDropdown.Item>
              <NavDropdown.Item href='/imageslider'>
                Image Slider
              </NavDropdown.Item>
              <NavDropdown.Item href='/loadmoredata'>
                Load More Data
              </NavDropdown.Item>
              <NavDropdown.Item href='/treeview'>
                Tree View Sidebar
              </NavDropdown.Item>
              <NavDropdown.Item href='/qrcode'>
                Qr Code Generator
              </NavDropdown.Item>
              <NavDropdown.Item href='/toggletheme'>
                Toggle Theme Page
              </NavDropdown.Item>
              <NavDropdown.Item href='/scrollindicator'>
                Custom Scroll Indicator
              </NavDropdown.Item>
              <NavDropdown.Item href='/tabs'>Custom Tabs Page</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
