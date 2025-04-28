import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Using react-icons

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#000', // Slightly lighter black
    boxShadow: '0px 0px 20px 5px rgba(162, 89, 255, 0.5)',
    color: '#aaa',
    padding: '20px 0',
    textAlign: 'center' as const,
    transition: 'all 0.5s ease',
    fontSize: '0.9rem',
  };

  const iconStyle = {
    color: '#eee',
    fontSize: '1.5rem',
    margin: '0 10px',
    transition: 'transform 0.3s ease, color 0.3s ease',
    cursor: 'pointer',
  };

  const emailStyle = {
    color: '#aaa',
    fontWeight: '300',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
  };

  const strongEmailStyle = {
    color: '#fff',
    fontWeight: '400',
    marginLeft: '5px',
    transition: 'color 0.3s ease',
  };

  // For simple hover effect on icons
  const [hoveredIcon, setHoveredIcon] = React.useState<number | null>(null);

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-md-start text-center mb-2 mb-md-0">
            © 2025 Portfolio
          </Col>

          <Col md={4} className="text-center mb-2 mb-md-0">
            {[
              { Icon: FaGithub, link: 'https://github.com/anjali7185821' },
              { Icon: FaLinkedin, link: 'https://www.linkedin.com/in/anjali-singh-51a24b234' },
              { Icon: FaTwitter, link: 'https://x.com/anjali7185821' }
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Icon
                  style={
                    hoveredIcon === index
                      ? { ...iconStyle, transform: 'scale(1.3)', color: '#6c2bd9' }
                      : iconStyle
                  }
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </a>
            ))}
          </Col>

          <Col md={4} className="text-md-end text-center">
            <span style={emailStyle}>Let's Connect:</span>
            <a 
              href="mailto:anjali7185821@gmail.com" 
              style={{ ...strongEmailStyle, textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#6c2bd9'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              anjali7185821@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
