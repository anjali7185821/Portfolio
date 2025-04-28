import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const sectionStyle = {
    background: '#000',
    color: '#fff',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    padding: '50px 0',
    position: 'relative' as const,
    overflow: 'hidden',
  };
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3 } },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
   
  };

  const captionVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <section style={sectionStyle}>
      <motion.div

        variants={containerVariants}
        initial="initial"
        animate="animate"
      >

        <Container fluid>
          <Row className="justify-content-center align-items-center">
            <Col md={6} className="text-center text-md-start order-md-first order-last">
              <motion.h2 className="mb-4 d-none d-md-block" variants={textVariants} style={{color: ' #a259ff'}}>
                About Me
              </motion.h2>
              <motion.p variants={textVariants}>
                Hi, I’m Anjali Kumari Singh, a passionate Full Stack Developer with expertise in both frontend and backend technologies. I specialize in building dynamic, responsive web applications that provide exceptional user experiences. With strong proficiency in tools like React, Node.js, Express, and MongoDB, I create scalable, maintainable solutions tailored to meet client needs.
              </motion.p>
              <motion.p variants={textVariants}>
                I thrive on tackling complex challenges, from crafting intuitive user interfaces to developing efficient server-side architectures. Whether it's designing beautiful UIs or implementing robust backend systems, I focus on building seamless, high-performance applications. My goal is to bridge the gap between user experience and technical functionality, ensuring that every project I work on runs smoothly and efficiently.
              </motion.p>
              <motion.p variants={textVariants}>
                I’m committed to writing clean, maintainable code and always prioritize best practices in software development. With a keen eye for performance and scalability, I build solutions that are not only functional but also optimized for future growth. I enjoy staying up-to-date with the latest technologies, constantly improving my skills and incorporating cutting-edge tools into my work.
              </motion.p>
              <motion.p variants={textVariants}>
                When I'm not coding, I love exploring new technologies, contributing to open-source projects, and learning about web security and architecture. I believe in continuous learning and collaboration, and I’m always eager to work with others to create innovative, impactful solutions.
              </motion.p>
            </Col>
            <Col md={4} className="text-center order-md-last order-first mb-4 mb-md-0">
              <motion.div
                style={{ 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  display: 'inline-block',
                  maxWidth: '300px',
                  width: '100%',
  
                }}
                variants={imageVariants}
                whileHover="hover"
              >
                <Image
                  src="/images/pic-2.png"
                  alt="Anjali Kumari Singh"
                  fluid
                />
              </motion.div>
              <motion.div className="mt-3" variants={captionVariants}>
                <h6 className="text-light mb-0 d-md-block d-none fw-bold" style={{color: '#a259ff'}}>Anjali Kumari Singh</h6>
                <p className="text-light mb-0 d-md-block d-none">Full Stack Developer</p>
              </motion.div>
            </Col>
          </Row>
        </Container>

      </motion.div>
    </section>
  );
};

export default AboutSection;