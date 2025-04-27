import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  // Styles
  const navbarStyle = {
    width: '100%',
    backgroundColor: '#000', // Black background
    transition: 'all 0.5s ease',
    boxShadow: '0px 0px 20px 5px rgba(162, 89, 255, 0.5)',
    zIndex: 999,

  };

  const brandStyle = {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  };

  const navLinkStyle = {
    color: '#fff',
    marginLeft: '20px',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
  };

  const navLinkHoverStyle = {
    color: '#a259ff', // Light purple on hover
    transform: 'scale(1.1)',
  };

  const toggleButtonStyle = {
    border: 'none',
    backgroundColor: 'transparent', // Transparent background
    outline: 'none',
  };

  const toggleIconBarStyle = {
    width: '22px',
    height: '2px',
    backgroundColor: '#fff',
    margin: '4px 0',
    transition: '0.4s',
  };

  return (
    <Navbar expand="lg" style={navbarStyle} sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" style={brandStyle}>
          Anjali Kumari Singh
        </Navbar.Brand>

        {/* Custom Hamburger */}
        <Navbar.Toggle aria-controls="navbar-nav" style={toggleButtonStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={toggleIconBarStyle}></span>
            <span style={toggleIconBarStyle}></span>
            <span style={toggleIconBarStyle}></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {['Home', 'About', 'Projects', 'Journey', 'Contact'].map((text, index) => (
              <Nav.Link
                key={index}
                href={`/${text.toLowerCase()}`}
                style={hoveredLink === index ? { ...navLinkStyle, ...navLinkHoverStyle } : navLinkStyle}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
