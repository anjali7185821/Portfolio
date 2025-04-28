import { Container, Row, Col} from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const sectionStyle = {
    background: 'linear-gradient(-45deg, #000, #000, #6c2bd9)',
    color: '#fff',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    padding: '50px 0',
    position: 'relative' as const,
    overflow: 'hidden',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '20px',
    transition: 'all 0.5s ease',
  };

  const subtitleStyle = {
    color: 'rgb(129, 62, 244)',
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '20px',
    transition: 'all 0.5s ease',
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    color: '#ccc',
    marginBottom: '30px',
    transition: 'all 0.5s ease',
  };


  const buttonStyleSecondary = {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #6c2bd9',
    padding: '10px 25px',
    borderRadius: '8px',
    fontWeight: '600',
    marginRight: '10px',
    transition: 'all 0.3s ease',
  };

  const imageStyle = {
    width: '70%',
    minWidth: '300px',
    borderRadius: '50%',
    boxShadow: '0px 0px 20px 5px rgba(162, 89, 255, 0.5)',
    margin: '0 auto',
    display: 'block',
  };

  const imageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, delayChildren: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    hoverSecondary: { backgroundColor: '#6c2bd9', color: '#fff', scale: 1.05 },
    tapSecondary: { backgroundColor: '#5a25b8', color: '#fff', scale: 0.95 }
  };

  const handleDownloadCV = () => {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    const cvPath = '/files/UpdatedCV.pdf';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'anjali_kumari_singh_cv.pdf'; // Set the desired filename for the download

    // Programmatically click the link to trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up the temporary link
    document.body.removeChild(link);
  };

  return (
    <>
      <section style={sectionStyle}>
        <Container>
          <Row className="align-items-center">
            {/* IMAGE WITH MOTION */}
            <Col xs={12} md={6} className="d-flex justify-content-center mb-4 mb-md-0">
              <motion.img
                src="/images/pic.jpg"
                alt="Developer at work"
                style={imageStyle}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              />
            </Col>

            {/* CONTENT WITH MOTION */}
            <Col xs={12} md={6} className="text-center text-md-start">
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h1 style={titleStyle} variants={itemVariants}>Hello,<br/> I'm <span style={{ color: '#a259ff' }}>Anjali Kumari Singh</span></motion.h1>

                <motion.h2 style={subtitleStyle} variants={itemVariants}>
                  <TypeAnimation
                    sequence={[
                      '<Software Developer/>', 1500,
                      '<React Developer/>', 1500,
                      '<Backend Developer/>', 1500,
                      '<Full Stack Developer/>', 1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </motion.h2>

                <motion.p style={descriptionStyle} variants={itemVariants}>
                As a Full Stack Developer, I specialize in both frontend and backend technologies to create seamless web experiences. I design interactive UIs with React js, and build secure, scalable server-side solutions using Node.js, Express, and MongoDB. From crafting responsive layouts to developing APIs and integrating third-party services, I ensure smooth performance and user-friendly interfaces. Passionate about continuous learning, I am committed to delivering high-quality, efficient code that solves complex problems.


                </motion.p>

                {/* BUTTONS MOVED HERE */}
                <motion.div variants={itemVariants}>
                  <Link to="/projects">
                    <motion.button
                      style={buttonStyleSecondary}
                      variants={buttonVariants}
                      whileHover="hoverSecondary"
                      whileTap="tapSecondary"
                    >
                      View Projects
                    </motion.button>
                  </Link>

                  <motion.button
                    style={buttonStyleSecondary}
                    variants={buttonVariants}
                    whileHover="hoverSecondary"
                    whileTap="tapSecondary"
                    onClick={handleDownloadCV} // Add the onClick handler
                  >
                    Download CV
                  </motion.button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;